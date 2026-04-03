const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

const cliArgs = process.argv.slice(2);
const flags = new Set(cliArgs.filter((arg) => arg.startsWith("--")));
const positional = cliArgs.filter((arg) => !arg.startsWith("--"));

const workbookPath =
  positional[0] ||
  "/Users/chiateliao/Downloads/114年度「醫院護產人力資源」調查結果_人力.xlsx";
const outputPath = positional[1] || path.join(__dirname, "data.js");

const refreshOpenInfo = flags.has("--refresh-openinfo");
const refreshNhi = flags.has("--refresh-nhi");

const externalDir = path.join(__dirname, "external");
const nhiDir = path.join(externalDir, "nhi");
const openInfoCachePath = path.join(externalDir, "openinfo-acute-beds-cache.json");

const ACUTE_RATIO_DATASET_ID = "A21030000I-D2001Y";
const ACUTE_RATIO_DATASET_PAGE = `https://info.nhi.gov.tw/IODE0000/IODE0000S05?dataSour=${ACUTE_RATIO_DATASET_ID}`;

const OPENINFO_SEARCH_URL = "https://openinfo.mohw.gov.tw/C01/GetPageData";
const OPENINFO_DETAIL_URL = "https://openinfo.mohw.gov.tw/C02/GetPageData";
const OPENINFO_PAGE_URL = "https://openinfo.mohw.gov.tw/web/C01";

const levelOrder = ["醫學中心", "區域醫院", "地區醫院"];
const acuteStandards = {
  醫學中心: { day: 6, evening: 9, night: 11 },
  區域醫院: { day: 7, evening: 11, night: 13 },
  地區醫院: { day: 10, evening: 13, night: 15 },
};

const scenarioDefinitions = [
  {
    key: "low",
    label: "低推估",
    descriptor: "實際住床",
    body:
      "以健保署 113 年 12 月三班護病比檔中的急性一般病床數與當月占床率為底，估計當期至少需要守住的班表量。",
    bedBase: (hospital) => hospital.acute?.reportedBeds ?? null,
    occupancy: (hospital) => hospital.acute?.occupancy ?? null,
  },
  {
    key: "mid",
    label: "中推估",
    descriptor: "現行開床",
    body:
      "把衛福部醫院評鑑資訊專區目前開放中的急性一般病床數接進來，並沿用最新申報占床率，反映現在開床規模下需要補上的人力。",
    bedBase: (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds ?? null,
    occupancy: (hospital) => hospital.acute?.occupancy ?? null,
  },
  {
    key: "high",
    label: "高推估",
    descriptor: "滿載開床",
    body:
      "假設目前開放中的急性一般病床全部滿載，直接以三班標準推估壓力上緣，呈現班表最吃緊時的補人量。",
    bedBase: (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds ?? null,
    occupancy: () => 1,
  },
];

function number(value) {
  if (value === null || value === undefined || value === "") return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function numberOrZero(value) {
  return number(value) ?? 0;
}

function round(value, digits = 2) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null;
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function quantile(values, q) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const position = (sorted.length - 1) * q;
  const base = Math.floor(position);
  const remainder = position - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + remainder * (sorted[base + 1] - sorted[base]);
  }
  return sorted[base];
}

function formatLevel(level) {
  return levelOrder.includes(level) ? level : "未分類";
}

function normalizeName(value) {
  return String(value || "")
    .trim()
    .replace(/[臺]/g, "台")
    .replace(/[﹣－—–-]/g, "")
    .replace(/[()（）]/g, "")
    .replace(/[·•]/g, "")
    .replace(/\s+/g, "");
}

function sumValues(items, getter) {
  return items.reduce((sum, item) => sum + numberOrZero(getter(item)), 0);
}

function ratio(numerator, denominator) {
  if (!denominator) return null;
  return numerator / denominator;
}

function cleanObject(value) {
  if (Array.isArray(value)) {
    return value.map((item) => cleanObject(item));
  }
  if (!value || typeof value !== "object") {
    return value;
  }
  const result = {};
  for (const [key, entry] of Object.entries(value)) {
    if (entry === undefined) continue;
    result[key] = cleanObject(entry);
  }
  return result;
}

async function fetchJson(url, payload, options = {}) {
  const { retries = 2, timeoutMs = 20000 } = options;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: JSON.stringify(payload),
          device: "desktop",
          browser: "node",
          token: "",
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeout);
      if (attempt === retries) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, 400 * (attempt + 1)));
    }
  }

  return null;
}

async function fetchNhiDatasetMeta(datasetId) {
  const response = await fetch(`https://info.nhi.gov.tw/api/iode0010/v1/rest/dataset/${datasetId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch NHI dataset metadata for ${datasetId}: ${response.status}`);
  }
  return response.json();
}

async function downloadFile(url, filePath) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
}

async function loadLatestAcuteRatioRows() {
  fs.mkdirSync(nhiDir, { recursive: true });

  const meta = await fetchNhiDatasetMeta(ACUTE_RATIO_DATASET_ID);
  const resources = [...(meta.distribution || [])].sort((a, b) =>
    String(a.resourceID).localeCompare(String(b.resourceID))
  );
  const latestResource = resources[resources.length - 1];

  if (!latestResource) {
    throw new Error("NHI acute ratio dataset has no distributions.");
  }

  const odsPath = path.join(nhiDir, `${latestResource.resourceID}.ods`);
  if (refreshNhi || !fs.existsSync(odsPath)) {
    await downloadFile(
      `https://info.nhi.gov.tw/api/iode0000s01/Dataset?rId=${latestResource.resourceID}`,
      odsPath
    );
  }

  const workbook = XLSX.readFile(odsPath);
  const sheetName = workbook.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: null });

  return {
    meta,
    latestResource,
    sheetName,
    odsPath,
    rows: rows.map((row) => ({
      levelCode: String(row["特約類別"] || ""),
      code: String(row["機構代號"] || ""),
      name: row["機構名稱"],
      campus: row["院區"],
      skillMixed: row["Skill-Mixed醫院註記"] === "V",
      acuteBeds: number(row["急性一般病床數"]),
      occupancy: number(row["占床率"]),
      dayStaff: number(row["白班平均護理人員數"]),
      dayRatio: number(row["白班護病比"]),
      eveningStaff: number(row["小夜班平均護理人員數"]),
      eveningRatio: number(row["小夜班護病比"]),
      nightStaff: number(row["大夜班平均護理人員數"]),
      nightRatio: number(row["大夜班護病比"]),
    })),
  };
}

function loadOpenInfoCache() {
  if (!fs.existsSync(openInfoCachePath)) {
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(openInfoCachePath, "utf8"));
  } catch (error) {
    return {};
  }
}

function saveOpenInfoCache(cache) {
  fs.writeFileSync(openInfoCachePath, `${JSON.stringify(cache, null, 2)}\n`, "utf8");
}

function chooseOpenInfoMatch(results, hospitalName) {
  if (results.length <= 1) {
    return results[0] || null;
  }

  const target = normalizeName(hospitalName);
  let best = null;
  let bestScore = -1;

  for (const item of results) {
    const baseName = normalizeName(item.BAS_NAME);
    const fullName = normalizeName(`${item.BAS_NAME || ""}${item.ZONE_NAME || ""}`);
    let score = 0;

    if (baseName === target || fullName === target) score += 100;
    if (target.includes(baseName) || baseName.includes(target)) score += 60;
    if (fullName.includes(target) || target.includes(fullName)) score += 40;
    if (item.ZONE_NAME === "本院") score += 10;

    if (score > bestScore) {
      best = item;
      bestScore = score;
    }
  }

  return best || results[0];
}

function findMagbasCount(list, label) {
  const match = (list || []).find((item) => item.REF_NAME === label);
  return number(match?.NUM);
}

function extractOpenInfoRecord(searchResult, detail) {
  const beds = detail?.data?.magbed || [];
  const acuteOpen = beds.find((item) => item.BED_CODE_NAME === "急性一般病床");
  const occupancy = detail?.data?.OD_HOSP_NHIDATA?.[0]?.OCCUPANCY_RATE;

  return {
    status: "ok",
    fetchedAt: new Date().toISOString(),
    basName: searchResult.BAS_NAME,
    zoneName: searchResult.ZONE_NAME,
    zoneCode: searchResult.ZONE_CODE,
    acuteOpenBeds: number(acuteOpen?.BED_OPEN),
    officialNurseLicensed: findMagbasCount(detail?.data?.magbas_doh, "護理師"),
    officialNurseRegistered: findMagbasCount(detail?.data?.magbas_doh, "護士"),
    occupancyRateGeneral: number(occupancy),
  };
}

async function fetchOpenInfoRecord(code, hospitalName) {
  const searchByCode = await fetchJson(OPENINFO_SEARCH_URL, {
    TYPE: "1",
    ZONE_AREA_CODE: "",
    BAS_NAME: "",
    BAS_AGENCY_ID: code,
    KIND: "",
    depList: "",
    searchmoreList: "",
    HA: "",
    LIC: "",
    ASSESS: "",
    currentPage: 1,
    pageSize: 20,
  });

  let list = searchByCode?.list || [];

  if (!list.length) {
    const searchByName = await fetchJson(OPENINFO_SEARCH_URL, {
      TYPE: "1",
      ZONE_AREA_CODE: "",
      BAS_NAME: hospitalName || "",
      BAS_AGENCY_ID: "",
      KIND: "",
      depList: "",
      searchmoreList: "",
      HA: "",
      LIC: "",
      ASSESS: "",
      currentPage: 1,
      pageSize: 20,
    });
    list = searchByName?.list || [];
  }

  if (!list.length) {
    return {
      status: "not_found",
      fetchedAt: new Date().toISOString(),
    };
  }

  const selected = chooseOpenInfoMatch(list, hospitalName);
  const detail = await fetchJson(OPENINFO_DETAIL_URL, {
    BAS_AGENCY_ID: selected.BAS_AGENCY_ID,
    ZONE_CODE: selected.ZONE_CODE,
  });

  return extractOpenInfoRecord(selected, detail);
}

async function mapLimit(items, limit, iteratee) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (cursor < items.length) {
      const currentIndex = cursor;
      cursor += 1;
      results[currentIndex] = await iteratee(items[currentIndex], currentIndex);
    }
  }

  const workers = Array.from({ length: Math.min(limit, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function computeScenario(hospital, definition) {
  const standard = acuteStandards[hospital.level];
  const bedBase = definition.bedBase(hospital);
  const occupancy = definition.occupancy(hospital);

  if (!standard || !bedBase || occupancy === null || occupancy === undefined) {
    return null;
  }

  const occupiedBeds = bedBase * occupancy;
  const current = hospital.acute.current;
  const required = {
    day: occupiedBeds / standard.day,
    evening: occupiedBeds / standard.evening,
    night: occupiedBeds / standard.night,
  };

  const signedGap = {
    day: required.day - current.day,
    evening: required.evening - current.evening,
    night: required.night - current.night,
  };

  const shortage = {
    day: Math.max(signedGap.day, 0),
    evening: Math.max(signedGap.evening, 0),
    night: Math.max(signedGap.night, 0),
  };

  required.total = required.day + required.evening + required.night;
  signedGap.total = signedGap.day + signedGap.evening + signedGap.night;
  shortage.total = shortage.day + shortage.evening + shortage.night;

  return cleanObject({
    bedBase: round(bedBase, 1),
    occupancy: round(occupancy, 3),
    occupiedBeds: round(occupiedBeds, 1),
    required: {
      day: round(required.day, 1),
      evening: round(required.evening, 1),
      night: round(required.night, 1),
      total: round(required.total, 1),
    },
    signedGap: {
      day: round(signedGap.day, 1),
      evening: round(signedGap.evening, 1),
      night: round(signedGap.night, 1),
      total: round(signedGap.total, 1),
    },
    shortage: {
      day: round(shortage.day, 1),
      evening: round(shortage.evening, 1),
      night: round(shortage.night, 1),
      total: round(shortage.total, 1),
    },
  });
}

function summarizeScenario(hospitals, key) {
  const active = hospitals
    .map((hospital) => hospital.scenarios[key])
    .filter(Boolean);

  return cleanObject({
    hospitals: active.length,
    bedBase: round(sumValues(active, (item) => item.bedBase), 1),
    occupiedBeds: round(sumValues(active, (item) => item.occupiedBeds), 1),
    required: {
      day: round(sumValues(active, (item) => item.required.day), 1),
      evening: round(sumValues(active, (item) => item.required.evening), 1),
      night: round(sumValues(active, (item) => item.required.night), 1),
      total: round(sumValues(active, (item) => item.required.total), 1),
    },
    shortage: {
      day: round(sumValues(active, (item) => item.shortage.day), 1),
      evening: round(sumValues(active, (item) => item.shortage.evening), 1),
      night: round(sumValues(active, (item) => item.shortage.night), 1),
      total: round(sumValues(active, (item) => item.shortage.total), 1),
    },
    weightedOccupancy: round(
      ratio(
        sumValues(active, (item) => item.occupiedBeds),
        sumValues(active, (item) => item.bedBase)
      ),
      3
    ),
  });
}

async function main() {
  const workbook = XLSX.readFile(workbookPath);
  const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets["114"], { defval: null });
  const gapRows = XLSX.utils.sheet_to_json(workbook.Sheets["人力缺口表"], { defval: null });

  const rawByCode = new Map(rawRows.map((row) => [String(row["醫事機構代碼"] || ""), row]));

  const surveyHospitals = gapRows.map((row) => {
    const code = String(row["醫事機構代碼"] || "");
    const raw = rawByCode.get(code) || {};
    return {
      code,
      name: row["醫院名稱"],
      level: formatLevel(row["層級別"]),
      region: row["區域別"],
      city: row["縣市別"],
      current: numberOrZero(row["總護理人力"]),
      need: numberOrZero(row["醫院需要的總護理人力"]),
      gap: numberOrZero(row["護理人力缺口數"]),
      gapRate: number(row["空缺率"]),
      vacancies: numberOrZero(raw["總計、待招募人數"]),
    };
  });

  const acuteRatioBundle = await loadLatestAcuteRatioRows();
  const acuteRatioByCode = new Map(
    acuteRatioBundle.rows.map((row) => [
      row.code,
      {
        ...row,
        current: {
          day: row.dayStaff ?? 0,
          evening: row.eveningStaff ?? 0,
          night: row.nightStaff ?? 0,
          total: round(
            numberOrZero(row.dayStaff) + numberOrZero(row.eveningStaff) + numberOrZero(row.nightStaff),
            1
          ),
        },
      },
    ])
  );

  const targetOpenInfoCodes = surveyHospitals
    .filter((hospital) => acuteRatioByCode.has(hospital.code))
    .map((hospital) => ({ code: hospital.code, name: hospital.name }));

  const openInfoCache = loadOpenInfoCache();
  const pendingOpenInfo = targetOpenInfoCodes.filter(
    (item) => refreshOpenInfo || !openInfoCache[item.code]
  );

  if (pendingOpenInfo.length) {
    console.log(`Fetching MOHW open-bed detail for ${pendingOpenInfo.length} hospitals...`);
    let completed = 0;

    await mapLimit(pendingOpenInfo, 6, async (item) => {
      try {
        openInfoCache[item.code] = await fetchOpenInfoRecord(item.code, item.name);
      } catch (error) {
        openInfoCache[item.code] = {
          status: "error",
          fetchedAt: new Date().toISOString(),
          message: error.message,
        };
      }

      completed += 1;
      if (completed % 25 === 0 || completed === pendingOpenInfo.length) {
        console.log(`  ${completed}/${pendingOpenInfo.length}`);
        saveOpenInfoCache(openInfoCache);
      }
    });
  }

  saveOpenInfoCache(openInfoCache);

  const hospitals = surveyHospitals.map((hospital) => {
    const acute = acuteRatioByCode.get(hospital.code) || null;
    const openInfo = openInfoCache[hospital.code] || null;
    const acuteOpenBeds =
      openInfo && openInfo.status === "ok" ? number(openInfo.acuteOpenBeds) : null;

    const merged = {
      ...hospital,
      acute: acute
        ? {
            reportedBeds: acute.acuteBeds,
            occupancy: acute.occupancy,
            current: acute.current,
            actualRatio: {
              day: acute.dayRatio,
              evening: acute.eveningRatio,
              night: acute.nightRatio,
            },
            skillMixed: acute.skillMixed,
          }
        : null,
      acuteOpenBeds,
      permitAcuteBeds: null,
      openInfoStatus: openInfo?.status || "missing",
      openInfoZoneName: openInfo?.zoneName || null,
      openInfoOccupancyRateGeneral: openInfo?.occupancyRateGeneral ?? null,
      openInfoOfficialNurseTotal:
        numberOrZero(openInfo?.officialNurseLicensed) +
        numberOrZero(openInfo?.officialNurseRegistered),
    };

    merged.openBedDelta =
      merged.acute && merged.acuteOpenBeds !== null
        ? round(merged.acuteOpenBeds - merged.acute.reportedBeds, 1)
        : null;

    merged.scenarios = Object.fromEntries(
      scenarioDefinitions.map((definition) => [definition.key, computeScenario(merged, definition)])
    );

    merged.openBedPressure =
      merged.scenarios.low && merged.scenarios.mid
        ? round(merged.scenarios.mid.shortage.total - merged.scenarios.low.shortage.total, 1)
        : null;

    return cleanObject(merged);
  });

  const acuteHospitals = hospitals.filter((hospital) => hospital.acute);
  const openInfoMatchedHospitals = acuteHospitals.filter((hospital) => hospital.acuteOpenBeds !== null);

  const surveyTotals = cleanObject({
    hospitals: hospitals.length,
    current: sumValues(hospitals, (item) => item.current),
    need: sumValues(hospitals, (item) => item.need),
    netGap: Math.abs(sumValues(hospitals, (item) => item.gap)),
    grossShort: sumValues(
      hospitals.filter((item) => item.gap < 0),
      (item) => Math.abs(item.gap)
    ),
    grossSurplus: sumValues(
      hospitals.filter((item) => item.gap > 0),
      (item) => item.gap
    ),
    vacancies: sumValues(hospitals, (item) => item.vacancies),
  });
  surveyTotals.fillRate = round(ratio(surveyTotals.current, surveyTotals.need), 4);

  const scenarioSummaries = scenarioDefinitions.map((definition) => {
    const summary = summarizeScenario(acuteHospitals, definition.key);
    return cleanObject({
      key: definition.key,
      label: definition.label,
      descriptor: definition.descriptor,
      body: definition.body,
      ...summary,
    });
  });

  const scenarioByKey = Object.fromEntries(
    scenarioSummaries.map((scenario) => [scenario.key, scenario])
  );

  const levelStats = levelOrder.map((level) => {
    const subset = acuteHospitals.filter((hospital) => hospital.level === level);
    const occupancyValues = subset
      .map((hospital) => hospital.acute?.occupancy)
      .filter((value) => value !== null && value !== undefined);

    const actualOccupiedBeds = sumValues(
      subset,
      (hospital) => (hospital.acute?.reportedBeds || 0) * numberOrZero(hospital.acute?.occupancy)
    );
    const currentDay = sumValues(subset, (hospital) => hospital.acute?.current.day);
    const currentEvening = sumValues(subset, (hospital) => hospital.acute?.current.evening);
    const currentNight = sumValues(subset, (hospital) => hospital.acute?.current.night);
    const currentTotal = sumValues(subset, (hospital) => hospital.acute?.current.total);

    return cleanObject({
      level,
      hospitals: subset.length,
      openBedCoverageHospitals: subset.filter((hospital) => hospital.acuteOpenBeds !== null).length,
      standard: acuteStandards[level],
      acuteReportedBeds: round(sumValues(subset, (hospital) => hospital.acute?.reportedBeds), 1),
      acuteOpenBeds: round(
        sumValues(
          subset,
          (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds ?? 0
        ),
        1
      ),
      openBedDelta: round(
        sumValues(subset.filter((hospital) => hospital.openBedDelta !== null), (hospital) => hospital.openBedDelta),
        1
      ),
      occupancyMedian: round(quantile(occupancyValues, 0.5), 3),
      occupiedBedsActual: round(actualOccupiedBeds, 1),
      current: {
        day: round(currentDay, 1),
        evening: round(currentEvening, 1),
        night: round(currentNight, 1),
        total: round(currentTotal, 1),
      },
      actualRatio: {
        day: round(ratio(actualOccupiedBeds, currentDay), 1),
        evening: round(ratio(actualOccupiedBeds, currentEvening), 1),
        night: round(ratio(actualOccupiedBeds, currentNight), 1),
      },
      scenarios: Object.fromEntries(
        scenarioDefinitions.map((definition) => [definition.key, summarizeScenario(subset, definition.key)])
      ),
    });
  });

  const coverage = cleanObject({
    surveyHospitals: hospitals.length,
    acuteRatioHospitals: acuteHospitals.length,
    openInfoMatchedHospitals: openInfoMatchedHospitals.length,
    acuteRatioCoverageRate: round(ratio(acuteHospitals.length, hospitals.length), 4),
    openInfoCoverageRateWithinAcute: round(
      ratio(openInfoMatchedHospitals.length, acuteHospitals.length),
      4
    ),
  });

  const currentAcuteStaff = cleanObject({
    day: round(sumValues(acuteHospitals, (hospital) => hospital.acute?.current.day), 1),
    evening: round(sumValues(acuteHospitals, (hospital) => hospital.acute?.current.evening), 1),
    night: round(sumValues(acuteHospitals, (hospital) => hospital.acute?.current.night), 1),
    total: round(sumValues(acuteHospitals, (hospital) => hospital.acute?.current.total), 1),
  });

  const totals = cleanObject({
    hospitals: acuteHospitals.length,
    acuteReportedBeds: round(sumValues(acuteHospitals, (hospital) => hospital.acute?.reportedBeds), 1),
    acuteOpenBeds: round(
      sumValues(
        acuteHospitals,
        (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds ?? 0
      ),
      1
    ),
    openBedDelta: round(
      sumValues(
        acuteHospitals.filter((hospital) => hospital.openBedDelta !== null),
        (hospital) => hospital.openBedDelta
      ),
      1
    ),
    currentAcuteStaff,
    scenarios: scenarioByKey,
    survey: surveyTotals,
  });

  const topMidShortageHospitals = [...acuteHospitals]
    .filter((hospital) => hospital.scenarios.mid?.shortage?.total > 0)
    .sort((a, b) => b.scenarios.mid.shortage.total - a.scenarios.mid.shortage.total)
    .slice(0, 8)
    .map((hospital) =>
      cleanObject({
        code: hospital.code,
        name: hospital.name,
        level: hospital.level,
        region: hospital.region,
        acuteOpenBeds: hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds ?? null,
        currentAcuteStaff: hospital.acute?.current?.total ?? null,
        occupancy: hospital.acute?.occupancy ?? null,
        lowShortage: hospital.scenarios.low?.shortage?.total ?? null,
        midShortage: hospital.scenarios.mid?.shortage?.total ?? null,
        highShortage: hospital.scenarios.high?.shortage?.total ?? null,
      })
    );

  const topOpenPressureHospitals = [...acuteHospitals]
    .filter(
      (hospital) =>
        (hospital.openBedDelta ?? 0) > 0 || (hospital.openBedPressure ?? 0) > 0
    )
    .sort((a, b) => {
      const delta = (b.openBedPressure ?? 0) - (a.openBedPressure ?? 0);
      if (delta !== 0) return delta;
      return (b.openBedDelta ?? 0) - (a.openBedDelta ?? 0);
    })
    .slice(0, 8)
    .map((hospital) =>
      cleanObject({
        code: hospital.code,
        name: hospital.name,
        level: hospital.level,
        region: hospital.region,
        reportedBeds: hospital.acute?.reportedBeds ?? null,
        acuteOpenBeds: hospital.acuteOpenBeds ?? null,
        openBedDelta: hospital.openBedDelta ?? null,
        lowShortage: hospital.scenarios.low?.shortage?.total ?? null,
        midShortage: hospital.scenarios.mid?.shortage?.total ?? null,
        openBedPressure: hospital.openBedPressure ?? null,
      })
    );

  const mostPressuredLevel = [...levelStats].sort(
    (a, b) => b.scenarios.mid.shortage.total - a.scenarios.mid.shortage.total
  )[0];

  const strategyCards = [
    {
      title: `${mostPressuredLevel.level} 是最先要補班的斷層帶`,
      body: `在「現行開床」情境下，${mostPressuredLevel.level} 仍缺 ${Math.round(
        mostPressuredLevel.scenarios.mid.shortage.total
      ).toLocaleString("zh-Hant-TW")} 名三班平均護理人力，約占整體中推估缺口 ${Math.round(
        ratio(mostPressuredLevel.scenarios.mid.shortage.total, scenarioByKey.mid.shortage.total) * 100
      )}% 。`,
      accent: "rust",
    },
    {
      title: "開床速度已經跑到報告期前面",
      body: `402 家可對應急性一般病床資料的醫院中，現行開床總量比 113 年 12 月三班護病比檔多出 ${Math.round(
        totals.openBedDelta
      ).toLocaleString("zh-Hant-TW")} 床，等於把補人壓力直接往下一期班表推。`,
      accent: "ink",
    },
    {
      title: "許可床位層還缺官方院級開放資料",
      body:
        "這一版已完成 open-bed-based demand forecast，但急性一般病床許可數仍未找到可穩定串接的院級官方開放資料，因此尚未把 permit-bed layer 納入 high case。",
      accent: "teal",
    },
  ];

  const dataQuality = cleanObject({
    permitBedsAvailable: false,
    acuteRatioRows: acuteRatioBundle.rows.length,
    acuteRatioMatchedHospitals: acuteHospitals.length,
    openInfoMatchedHospitals: openInfoMatchedHospitals.length,
    notes: [
      `急性一般病床三班護病比資料採健保署「${acuteRatioBundle.latestResource.resourceDescription}」，本次實際對應調查檔 ${acuteHospitals.length} 家醫院。`,
      `衛福部醫院評鑑資訊專區的病床設施頁可穩定取得急性一般病床開放數；本次共補入 ${openInfoMatchedHospitals.length} 家醫院的現行開床數，其餘仍回退到健保申報床數。`,
      "急性一般病床「許可數」尚未找到可穩定串接的院級官方開放資料，因此本版 high case 以『滿載開床』作為上緣，而不是『滿載許可床』。",
      `原始調查檔仍保留 459 家醫院的總人力、需求線與待招募數，可用來和 bed-based shortage 交叉比對，但兩者口徑並不完全相同。`,
    ],
  });

  const payload = cleanObject({
    meta: {
      title: "114年度醫院護產人力需求雜誌式 BI",
      workbookName: path.basename(workbookPath),
      generatedAt: new Date().toISOString(),
      coverage,
    },
    officialContext: {
      standardsSource: {
        title: "醫院三班護病比標準公告 同步啟動40億投資三班輪值夜班護理人員直接奬勵",
        publishedDate: "2024-01-26",
        url: "https://www.mohw.gov.tw/fp-16-77368-1.html",
      },
      acuteRatioSource: {
        title: acuteRatioBundle.meta.title,
        datasetId: ACUTE_RATIO_DATASET_ID,
        resourceId: acuteRatioBundle.latestResource.resourceID,
        resourceDescription: acuteRatioBundle.latestResource.resourceDescription,
        modifiedAt: acuteRatioBundle.latestResource.resourceModified,
        url: ACUTE_RATIO_DATASET_PAGE,
      },
      openBedsSource: {
        title: "醫院評鑑資訊專區病床設施資料",
        accessedAt: new Date().toISOString(),
        url: OPENINFO_PAGE_URL,
      },
    },
    totals,
    levelStats,
    scenarios: scenarioSummaries,
    topMidShortageHospitals,
    topOpenPressureHospitals,
    strategyCards,
    dataQuality,
    hospitals: hospitals.map((hospital) =>
      cleanObject({
        code: hospital.code,
        name: hospital.name,
        level: hospital.level,
        region: hospital.region,
        city: hospital.city,
        survey: {
          current: hospital.current,
          need: hospital.need,
          gap: hospital.gap,
          vacancies: hospital.vacancies,
        },
        acute: hospital.acute,
        acuteOpenBeds: hospital.acuteOpenBeds,
        openBedDelta: hospital.openBedDelta,
        scenarios: hospital.scenarios,
      })
    ),
  });

  fs.writeFileSync(outputPath, `window.DASHBOARD_DATA = ${JSON.stringify(payload, null, 2)};\n`);
  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
