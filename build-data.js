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
const regionOrder = ["臺北", "北區", "中區", "南區", "高屏", "東區"];
const acuteStandards = {
  醫學中心: { day: 6, evening: 9, night: 11 },
  區域醫院: { day: 7, evening: 11, night: 13 },
  地區醫院: { day: 10, evening: 13, night: 15 },
};

const turnoverReasons = [
  { key: "closure", label: "系統歇業人次", theme: "制度性退出", actionable: false },
  { key: "notValued", label: "不被機構重視", theme: "組織氣候", actionable: true },
  { key: "workload", label: "無法管理的工作量", theme: "工作設計", actionable: true },
  { key: "unsafe", label: "沒有安全的工作環境", theme: "健康安全", actionable: true },
  { key: "schedule", label: "沒有彈性的工作排班", theme: "工作設計", actionable: true },
  { key: "belonging", label: "沒有所屬感", theme: "組織氣候", actionable: true },
  { key: "interaction", label: "負向互動", theme: "組織氣候", actionable: true },
  { key: "participation", label: "沒有工作的參與", theme: "組織氣候", actionable: true },
  { key: "salary", label: "薪資問題", theme: "薪酬", actionable: true },
  { key: "workLife", label: "工作-生活的不平衡", theme: "工作設計", actionable: true },
  { key: "childcare", label: "育嬰托育問題", theme: "家庭生活", actionable: true },
  { key: "familyCare", label: "家庭照顧問題", theme: "家庭生活", actionable: true },
  { key: "betterCareer", label: "更好的職業", theme: "職涯拉力", actionable: true },
  { key: "advancement", label: "沒有進階的潛能", theme: "職涯拉力", actionable: true },
  { key: "study", label: "進修升學", theme: "職涯拉力", actionable: true },
  { key: "retirement", label: "退休", theme: "生命週期", actionable: false },
  { key: "health", label: "健康狀況", theme: "健康安全", actionable: true },
  { key: "commute", label: "通勤距離", theme: "家庭生活", actionable: true },
  { key: "other", label: "其他問題", theme: "未分類", actionable: false },
];

const turnoverScopeDefinitions = [
  { key: "total", label: "整體離職", prefix: "全年離職人員總人次、" },
  { key: "under3", label: "三個月內離職", prefix: "全年未滿三個月即離職人員總人次、" },
  { key: "newGrad", label: "應屆離職", prefix: "全年離職，其中應屆畢業生人次、" },
];

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

function normalizeHeaderTail(value) {
  return String(value || "")
    .split("、")
    .pop()
    .replace(/"/g, "")
    .replace(/\s+/g, "")
    .trim();
}

function findHeaderByPrefix(headers, prefix, label) {
  const normalizedLabel = String(label || "")
    .replace(/"/g, "")
    .replace(/\s+/g, "")
    .trim();

  return (
    headers.find(
      (header) =>
        String(header || "").startsWith(prefix) && normalizeHeaderTail(header) === normalizedLabel
    ) || null
  );
}

function readRowNumber(row, header) {
  return header ? number(row?.[header]) : null;
}

function readRowText(row, header) {
  if (!header) return null;
  const value = row?.[header];
  if (value === null || value === undefined || value === "") return null;
  return String(value).trim() || null;
}

function normalizeYesNo(value) {
  if (value === null || value === undefined || value === "") return null;
  const text = String(value).trim();
  if (!text || text === "NULL") return null;
  if (text.includes("沒有")) return false;
  if (text.includes("有")) return true;
  return null;
}

function sumShortage(items, getter) {
  return items.reduce((sum, item) => {
    const value = number(getter(item));
    if (value === null) return sum;
    return sum + Math.max(-value, 0);
  }, 0);
}

function sumSurplus(items, getter) {
  return items.reduce((sum, item) => {
    const value = number(getter(item));
    if (value === null) return sum;
    return sum + Math.max(value, 0);
  }, 0);
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

function summarizeTurnoverScope(hospitals, scopeKey) {
  const reasonSignals = turnoverReasons
    .map((reason) => ({
      key: reason.key,
      label: reason.label.replace(/人次$/, ""),
      theme: reason.theme,
      actionable: reason.actionable,
      value: round(sumValues(hospitals, (hospital) => hospital.turnover?.reasons?.[reason.key]?.[scopeKey]), 1),
    }))
    .sort((a, b) => b.value - a.value);

  const actionableReasonSignals = reasonSignals.filter(
    (reason) => reason.actionable && reason.value > 0
  );

  const attentionReasons = reasonSignals.filter(
    (reason) =>
      !["closure", "retirement", "other"].includes(reason.key) && reason.value > 0
  );

  const themeAccumulator = actionableReasonSignals.reduce((result, reason) => {
    result[reason.theme] = numberOrZero(result[reason.theme]) + numberOrZero(reason.value);
    return result;
  }, {});

  const actionableThemeTotal = Object.values(themeAccumulator).reduce(
    (sum, value) => sum + numberOrZero(value),
    0
  );

  const themeSignals = Object.entries(themeAccumulator)
    .map(([theme, value]) => ({
      theme,
      value: round(value, 1),
      share: round(ratio(value, actionableThemeTotal), 4),
    }))
    .sort((a, b) => b.value - a.value);

  return cleanObject({
    scope: scopeKey,
    actionableThemeTotal: round(actionableThemeTotal, 1),
    themeSignals,
    reasonSignals,
    actionableReasons: actionableReasonSignals.slice(0, 6),
    attentionReasons: attentionReasons.slice(0, 6),
  });
}

async function main() {
  const workbook = XLSX.readFile(workbookPath);
  const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets["114"], { defval: null });
  const gapRows = XLSX.utils.sheet_to_json(workbook.Sheets["人力缺口表"], { defval: null });
  const rawHeaders = Object.keys(rawRows[0] || {});

  const turnoverReasonHeaders = turnoverReasons.map((reason) => ({
    ...reason,
    headers: Object.fromEntries(
      turnoverScopeDefinitions.map((scope) => [
        scope.key,
        findHeaderByPrefix(rawHeaders, scope.prefix, reason.label),
      ])
    ),
  }));

  const turnoverTotalHeaders = {
    total: findHeaderByPrefix(rawHeaders, "全年離職人員總人次、", "小計"),
    newGrad: findHeaderByPrefix(rawHeaders, "全年離職，其中應屆畢業生人次、", "小計"),
    under3: findHeaderByPrefix(rawHeaders, "全年未滿三個月即離職人員總人次、", "小計"),
    under3Returnee: findHeaderByPrefix(
      rawHeaders,
      "全年未滿三個月即離職， 其中回流人員人次、",
      "小計"
    ),
    under3NewGrad: findHeaderByPrefix(
      rawHeaders,
      "全年未滿三個月即離職，其中應屆畢業生人次、",
      "小計"
    ),
  };

  const rawByCode = new Map(rawRows.map((row) => [String(row["醫事機構代碼"] || ""), row]));

  const surveyHospitals = gapRows.map((row) => {
    const code = String(row["醫事機構代碼"] || "");
    const raw = rawByCode.get(code) || {};
    const salaryRaised = normalizeYesNo(raw["是否調高薪資"]);
    const salaryRaiseAmount = number(raw["護理人員整體(不分年資)較113年平均每人每月至少約增加金額"]);
    const shortageGap = number(row["護理人力缺口數"]);

    return {
      code,
      name: row["醫院名稱"],
      level: formatLevel(row["層級別"]),
      region: row["區域別"],
      city: row["縣市別"],
      current: numberOrZero(row["總護理人力"]),
      need: numberOrZero(row["醫院需要的總護理人力"]),
      gap: numberOrZero(shortageGap),
      gapRate: number(row["空缺率"]),
      shortage: shortageGap !== null ? round(Math.max(-shortageGap, 0), 1) : 0,
      surplus: shortageGap !== null ? round(Math.max(shortageGap, 0), 1) : 0,
      vacancies: numberOrZero(raw["總計、待招募人數"]),
      structure: {
        fullTime: numberOrZero(raw["總計、全職人員"]),
        partTime: numberOrZero(raw["總計、兼職人員"]),
        actualEmployed: numberOrZero(raw["總計、實際聘僱人數"]),
        averageActive: numberOrZero(raw["總計、平均在職護理人員數"]),
        rnEmployed: numberOrZero(raw["護理師(含專科護理師)、實際聘僱人數 小計"]),
        nurseEmployed: numberOrZero(raw["護士、實際聘僱人數 小計"]),
        midwifeEmployed:
          numberOrZero(raw["助產師、實際聘僱人數 小計"]) +
          numberOrZero(raw["助產士、實際聘僱人數 小計"]),
      },
      hiring: {
        total: numberOrZero(raw["全年新進人員總人次、小計"]),
        returnees: numberOrZero(raw["上述全年新進人員，其中回流人員人次、小計"]),
        newGraduates: numberOrZero(raw["上述全年新進人員，其中應屆畢業生人次、小計"]),
      },
      turnover: {
        total: numberOrZero(readRowNumber(raw, turnoverTotalHeaders.total)),
        newGraduates: numberOrZero(readRowNumber(raw, turnoverTotalHeaders.newGrad)),
        under3Months: numberOrZero(readRowNumber(raw, turnoverTotalHeaders.under3)),
        under3Returnees: numberOrZero(readRowNumber(raw, turnoverTotalHeaders.under3Returnee)),
        under3NewGraduates: numberOrZero(readRowNumber(raw, turnoverTotalHeaders.under3NewGrad)),
        reasons: Object.fromEntries(
          turnoverReasonHeaders.map((reason) => [
            reason.key,
            cleanObject({
              total: numberOrZero(readRowNumber(raw, reason.headers.total)),
              under3: numberOrZero(readRowNumber(raw, reason.headers.under3)),
              newGrad: numberOrZero(readRowNumber(raw, reason.headers.newGrad)),
            }),
          ])
        ),
        uncodedOtherReasons: [raw["其他問題之離職原因、1"], raw["其他問題之離職原因、2"], raw["其他問題之離職原因、3"]]
          .map((value) => (value === null || value === undefined ? null : String(value).trim()))
          .filter(Boolean),
      },
      salaryPolicy: {
        raised: salaryRaised,
        target: raw["調高薪資對象"] || null,
        amount: salaryRaiseAmount,
        units: {
          acuteWard: readRowText(raw, "一般急性病房"),
          emergency: readRowText(raw, "急診室"),
          icu: readRowText(raw, "重症及加護病房"),
          outpatient: readRowText(raw, "門診"),
        },
        other: readRowText(raw, "其它"),
      },
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

  const levelWorkforceInsights = levelOrder.map((level) => {
    const subset = hospitals.filter((hospital) => hospital.level === level);
    const levelStat = levelStats.find((item) => item.level === level);
    const actualEmployed = sumValues(subset, (hospital) => hospital.structure?.actualEmployed);
    const fullTime = sumValues(subset, (hospital) => hospital.structure?.fullTime);
    const rnEmployed = sumValues(subset, (hospital) => hospital.structure?.rnEmployed);
    const vacancies = sumValues(subset, (hospital) => hospital.vacancies);
    const turnoverTotal = sumValues(subset, (hospital) => hospital.turnover?.total);
    const under3Months = sumValues(subset, (hospital) => hospital.turnover?.under3Months);
    const hires = sumValues(subset, (hospital) => hospital.hiring?.total);

    const recommendation =
      level === "區域醫院"
        ? {
            title: "先補足可調度的彈性班表",
            body: "區域醫院同時承接最大 survey 缺口與最大 acute 補班壓力，建議優先配置跨單位支援池與區域招募配額。",
          }
        : level === "醫學中心"
          ? {
              title: "把高強度夜班與重症單位留任做深",
              body: "醫學中心量體最大，建議把重症、急診與夜班誘因綁進進階職涯與技術加給，而不是只做一般性補人。",
            }
          : {
              title: "把新進三個月內流失壓下來",
              body: "地區醫院家數最多且早離職占比最高，建議先從固定 preceptor、前三個月排班保護與區域共享培訓做起。",
            };

    return cleanObject({
      level,
      hospitals: subset.length,
      structure: {
        actualEmployed: round(actualEmployed, 1),
        fullTimeShare: round(ratio(fullTime, actualEmployed), 4),
        rnShare: round(ratio(rnEmployed, actualEmployed), 4),
        vacancyBacklog: round(vacancies, 1),
        vacancyBacklogRate: round(ratio(vacancies, actualEmployed), 4),
      },
      survey: {
        current: round(sumValues(subset, (hospital) => hospital.current), 1),
        need: round(sumValues(subset, (hospital) => hospital.need), 1),
        shortage: round(sumValues(subset, (hospital) => hospital.shortage), 1),
        surplus: round(sumValues(subset, (hospital) => hospital.surplus), 1),
        fillRate: round(
          ratio(
            sumValues(subset, (hospital) => hospital.current),
            sumValues(subset, (hospital) => hospital.need)
          ),
          4
        ),
      },
      bedPressure: {
        openBeds: levelStat?.acuteOpenBeds ?? null,
        midShortage: levelStat?.scenarios?.mid?.shortage?.total ?? null,
        midShortageShare: round(
          ratio(levelStat?.scenarios?.mid?.shortage?.total, totals.scenarios.mid.shortage.total),
          4
        ),
        openBedDelta: levelStat?.openBedDelta ?? null,
      },
      flow: {
        hires: round(hires, 1),
        turnover: round(turnoverTotal, 1),
        hireToTurnover: round(ratio(hires, turnoverTotal), 3),
        under3Months: round(under3Months, 1),
        under3Share: round(ratio(under3Months, turnoverTotal), 4),
      },
      recommendation,
    });
  });

  const regionalGapBase = regionOrder.map((region) => {
    const subset = hospitals.filter((hospital) => hospital.region === region);
    const acuteSubset = acuteHospitals.filter((hospital) => hospital.region === region);
    const levelShortages = levelOrder
      .map((level) => ({
        level,
        shortage: round(
          sumValues(
            acuteSubset.filter((hospital) => hospital.level === level),
            (hospital) => hospital.scenarios?.mid?.shortage?.total
          ),
          1
        ),
      }))
      .sort((a, b) => b.shortage - a.shortage);

    const topHospitals = [...acuteSubset]
      .filter((hospital) => hospital.scenarios?.mid?.shortage?.total > 0)
      .sort((a, b) => b.scenarios.mid.shortage.total - a.scenarios.mid.shortage.total)
      .slice(0, 2)
      .map((hospital) =>
        cleanObject({
          name: hospital.name,
          level: hospital.level,
          shortage: hospital.scenarios.mid.shortage.total,
        })
      );

    const surveyNeed = sumValues(subset, (hospital) => hospital.need);
    const surveyShortage = sumValues(subset, (hospital) => hospital.shortage);
    const surveyVacancies = sumValues(subset, (hospital) => hospital.vacancies);
    const midRequired = sumValues(acuteSubset, (hospital) => hospital.scenarios?.mid?.required?.total);
    const midShortage = sumValues(acuteSubset, (hospital) => hospital.scenarios?.mid?.shortage?.total);
    const openBeds = sumValues(
      acuteSubset,
      (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds
    );

    return cleanObject({
      region,
      hospitals: subset.length,
      acuteHospitals: acuteSubset.length,
      survey: {
        current: round(sumValues(subset, (hospital) => hospital.current), 1),
        need: round(surveyNeed, 1),
        shortage: round(surveyShortage, 1),
        fillRate: round(
          ratio(sumValues(subset, (hospital) => hospital.current), surveyNeed),
          4
        ),
      },
      structure: {
        vacancyBacklog: round(surveyVacancies, 1),
        vacancyBacklogRate: round(
          ratio(
            surveyVacancies,
            sumValues(subset, (hospital) => hospital.structure?.actualEmployed)
          ),
          4
        ),
      },
      bedPressure: {
        openBeds: round(openBeds, 1),
        midRequired: round(midRequired, 1),
        midShortage: round(midShortage, 1),
        midShortageRate: round(ratio(midShortage, midRequired), 4),
        shortagePer100Beds:
          openBeds > 0 ? round((midShortage / openBeds) * 100, 2) : null,
      },
      dominantLevel: levelShortages[0]?.level ?? null,
      dominantLevelShortage: levelShortages[0]?.shortage ?? null,
      topHospitals,
    });
  });

  const regionalGapMap = regionalGapBase.map((region) => {
    const absoluteRank =
      [...regionalGapBase]
        .sort((a, b) => b.bedPressure.midShortage - a.bedPressure.midShortage)
        .findIndex((item) => item.region === region.region) + 1;
    const intensityRank =
      [...regionalGapBase]
        .sort((a, b) => b.bedPressure.midShortageRate - a.bedPressure.midShortageRate)
        .findIndex((item) => item.region === region.region) + 1;

    return cleanObject({
      ...region,
      absoluteRank,
      intensityRank,
    });
  });

  const topAbsoluteRegion = [...regionalGapMap].sort(
    (a, b) => b.bedPressure.midShortage - a.bedPressure.midShortage
  )[0];
  const topIntensityRegion = [...regionalGapMap].sort(
    (a, b) => b.bedPressure.midShortageRate - a.bedPressure.midShortageRate
  )[0];
  const lowestFillRegion = [...regionalGapMap].sort(
    (a, b) => a.survey.fillRate - b.survey.fillRate
  )[0];

  const regionalFocusCards = [
    {
      title: `${topAbsoluteRegion.region} 缺口量最大`,
      body: `${topAbsoluteRegion.region} 的 acute 中推估缺口 ${Math.round(
        topAbsoluteRegion.bedPressure.midShortage
      ).toLocaleString("zh-Hant-TW")} 人，主要壓力集中在 ${topAbsoluteRegion.dominantLevel}。建議把跨院招募與關鍵單位補班優先放在此區。`,
      accent: "rust",
    },
    {
      title: `${topIntensityRegion.region} 缺口率最高`,
      body: `${topIntensityRegion.region} 每 100 張急性開床約對應 ${topIntensityRegion.bedPressure.shortagePer100Beds.toLocaleString(
        "zh-Hant-TW",
        { minimumFractionDigits: 1, maximumFractionDigits: 1 }
      )} 名中推估缺口，是六區中最緊的班表壓力帶。`,
      accent: "ink",
    },
    {
      title: `${lowestFillRegion.region} survey 填補率最低`,
      body: `${lowestFillRegion.region} 目前 survey fill rate 為 ${Math.round(
        lowestFillRegion.survey.fillRate * 100
      )}% ，即使量體較小，也代表補才、住宿與通勤支持要一起進場。`,
      accent: "teal",
    },
  ];

  const salaryResponseHospitals = hospitals.filter(
    (hospital) => hospital.salaryPolicy?.raised !== null
  );
  const salaryRaisedHospitals = salaryResponseHospitals.filter(
    (hospital) => hospital.salaryPolicy?.raised
  );
  const salaryRaiseAmounts = salaryRaisedHospitals
    .map((hospital) => hospital.salaryPolicy?.amount)
    .filter((value) => value !== null && value !== undefined);

  const salaryTargetBreakdown = [
    "「全體」護理人員(含新進人員)",
    "「部分單位」護理人員(含新進人員)",
    "「只有新進人員」調薪",
  ].map((target) => ({
    target,
    hospitals: salaryRaisedHospitals.filter((hospital) => hospital.salaryPolicy?.target === target).length,
  }));

  const turnoverScopes = turnoverScopeDefinitions.map((scope) =>
    cleanObject({
      key: scope.key,
      label: scope.label,
      ...summarizeTurnoverScope(hospitals, scope.key),
    })
  );

  const turnoverInsights = cleanObject({
    overview: {
      actualEmployed: round(sumValues(hospitals, (hospital) => hospital.structure?.actualEmployed), 1),
      fullTimeShare: round(
        ratio(
          sumValues(hospitals, (hospital) => hospital.structure?.fullTime),
          sumValues(hospitals, (hospital) => hospital.structure?.actualEmployed)
        ),
        4
      ),
      rnShare: round(
        ratio(
          sumValues(hospitals, (hospital) => hospital.structure?.rnEmployed),
          sumValues(hospitals, (hospital) => hospital.structure?.actualEmployed)
        ),
        4
      ),
      hires: round(sumValues(hospitals, (hospital) => hospital.hiring?.total), 1),
      returnees: round(sumValues(hospitals, (hospital) => hospital.hiring?.returnees), 1),
      newGraduatesHired: round(sumValues(hospitals, (hospital) => hospital.hiring?.newGraduates), 1),
      turnover: round(sumValues(hospitals, (hospital) => hospital.turnover?.total), 1),
      under3Months: round(sumValues(hospitals, (hospital) => hospital.turnover?.under3Months), 1),
      under3Share: round(
        ratio(
          sumValues(hospitals, (hospital) => hospital.turnover?.under3Months),
          sumValues(hospitals, (hospital) => hospital.turnover?.total)
        ),
        4
      ),
      hireToTurnover: round(
        ratio(
          sumValues(hospitals, (hospital) => hospital.hiring?.total),
          sumValues(hospitals, (hospital) => hospital.turnover?.total)
        ),
        3
      ),
      netRecruitment: round(
        sumValues(hospitals, (hospital) => hospital.hiring?.total) -
          sumValues(hospitals, (hospital) => hospital.turnover?.total),
        1
      ),
      salaryRaiseResponseHospitals: salaryResponseHospitals.length,
      salaryRaisedHospitals: salaryRaisedHospitals.length,
      salaryRaisedRate: round(
        ratio(salaryRaisedHospitals.length, salaryResponseHospitals.length),
        4
      ),
      averageRaiseAmount: round(
        ratio(
          salaryRaiseAmounts.reduce((sum, value) => sum + value, 0),
          salaryRaiseAmounts.length
        ),
        1
      ),
    },
    structureByLevel: levelWorkforceInsights.map((level) =>
      cleanObject({
        level: level.level,
        actualEmployed: level.structure.actualEmployed,
        fullTimeShare: level.structure.fullTimeShare,
        rnShare: level.structure.rnShare,
        hireToTurnover: level.flow.hireToTurnover,
        under3Share: level.flow.under3Share,
      })
    ),
    salarySignals: {
      targetBreakdown: salaryTargetBreakdown,
      unitTargets: [
        {
          label: "一般急性病房",
          hospitals: salaryRaisedHospitals.filter((hospital) => hospital.salaryPolicy?.units?.acuteWard).length,
        },
        {
          label: "急診室",
          hospitals: salaryRaisedHospitals.filter((hospital) => hospital.salaryPolicy?.units?.emergency).length,
        },
        {
          label: "重症及加護病房",
          hospitals: salaryRaisedHospitals.filter((hospital) => hospital.salaryPolicy?.units?.icu).length,
        },
        {
          label: "門診",
          hospitals: salaryRaisedHospitals.filter((hospital) => hospital.salaryPolicy?.units?.outpatient).length,
        },
      ],
    },
    scopes: turnoverScopes,
    recommendationCards: [
      {
        title: "先處理新進三個月內的工作設計",
        body: `全年 ${Math.round(
          sumValues(hospitals, (hospital) => hospital.turnover?.under3Months)
        ).toLocaleString("zh-Hant-TW")} 人次落在三個月內離職，且可介入原因以工作量、排班彈性與 work-life 為主，建議先改前三個月排班與支援配置。`,
        accent: "rust",
      },
      {
        title: "整體留任要用職涯路徑對抗外部拉力",
        body: "排除歇業與退休後，整體離職訊號仍以「更好的職業」最強，表示單靠補招不夠，還需要進階職涯、專長培育與晉升設計。",
        accent: "ink",
      },
      {
        title: "調薪已經普遍，但不能只靠加薪",
        body: `${salaryRaisedHospitals.length.toLocaleString(
          "zh-Hant-TW"
        )} 家醫院回報已調薪，平均每月增加約 ${Math.round(
          ratio(
            salaryRaiseAmounts.reduce((sum, value) => sum + value, 0),
            salaryRaiseAmounts.length
          )
        ).toLocaleString("zh-Hant-TW")} 元；但薪資並不是最強的可介入驅動，代表薪酬必須和班表、職涯與支持系統一起搭配。`,
        accent: "teal",
      },
    ],
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
      "離職原因欄位為『人次訊號』且可複選，解讀上適合做驅動因子排序，不適合直接視為單一人員比例。",
      `調薪題項本次有效回覆 ${salaryResponseHospitals.length} 家醫院，其中 ${salaryRaisedHospitals.length} 家回報已調薪。`,
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
    levelWorkforceInsights,
    scenarios: scenarioSummaries,
    regionalGapMap,
    regionalFocusCards,
    turnoverInsights,
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
