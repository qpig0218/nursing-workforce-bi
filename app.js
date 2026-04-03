const data = window.DASHBOARD_DATA;

const lowScenario = data.totals.scenarios.low;
const midScenario = data.totals.scenarios.mid;
const highScenario = data.totals.scenarios.high;
const coverage = data.meta.coverage;

const heroTitle = "當開床速度跑在補人前面，\n護理需求就先在班表上爆開。";
const heroSubtitle = `在 ${formatNumber(coverage.surveyHospitals)} 家調查醫院中，有 ${formatNumber(
  coverage.acuteRatioHospitals
)} 家可對上急性一般病床三班資料；這些醫院目前開放 ${formatMetric(
  data.totals.acuteOpenBeds
)} 床急性一般病床，現行三班平均護理人力 ${formatMetric(
  data.totals.currentAcuteStaff.total,
  1
)} 人。依 2024 年 1 月 26 日公告標準回推，「現行開床」情境仍差 ${formatMetric(
  midScenario.shortage.total,
  1
)} 人；若目前開放床位全部滿載，缺口會被拉高到 ${formatMetric(
  highScenario.shortage.total,
  1
)} 人。`;
const heroNote =
  "這次真正被接進來的是病床本身。現在不只看醫院自報總缺口，而是直接用急性一般病床、占床率與三班班表去推估需求；未補齊的只剩 permit-bed layer。";

const heroKpis = [
  {
    label: "急性開床",
    value: data.totals.acuteOpenBeds,
    digits: 0,
    meta: `${formatNumber(coverage.openInfoMatchedHospitals)} 家已補 current open beds`,
  },
  {
    label: "急性班表人力",
    value: data.totals.currentAcuteStaff.total,
    digits: 1,
    meta: `${data.officialContext.acuteRatioSource.resourceDescription}`,
  },
  {
    label: "低推估",
    value: lowScenario.shortage.total,
    digits: 1,
    meta: "申報床數 × 當期占床率",
  },
  {
    label: "中推估",
    value: midScenario.shortage.total,
    digits: 1,
    meta: "現行開床 × 當期占床率",
  },
  {
    label: "高推估",
    value: highScenario.shortage.total,
    digits: 1,
    meta: "現行開床 × 100% 滿載",
  },
];

document.getElementById("hero-title").innerHTML = heroTitle.replace(/\n/g, "<br>");
document.getElementById("hero-subtitle").textContent = heroSubtitle;
document.getElementById("hero-note").textContent = heroNote;

document.getElementById("hero-kpis").innerHTML = heroKpis
  .map(
    (kpi) => `
      <article class="kpi">
        <span class="kpi__label">${kpi.label}</span>
        <strong class="kpi__value">${formatMetric(kpi.value, kpi.digits)}</strong>
        <span class="kpi__meta">${kpi.meta}</span>
      </article>
    `
  )
  .join("");

document.getElementById("standard-summary").textContent =
  "醫學中心 1:6 / 1:9 / 1:11；區域 1:7 / 1:11 / 1:13；地區 1:10 / 1:13 / 1:15";
document.getElementById(
  "policy-context"
).textContent = `急性病床班表基準月：${data.officialContext.acuteRatioSource.resourceDescription}`;
document.getElementById("data-warning").textContent =
  "急性一般病床許可數仍缺院級官方開放資料，本版先完成 open-bed-based 推估。";

renderLevelCards();
renderGapOverview();
renderScenarioScale();
renderScenarioCards();
renderOpenProxy();
renderStrategyCards();
renderTables();
renderFooter();

function renderLevelCards() {
  const container = document.getElementById("level-cards");

  container.innerHTML = data.levelStats
    .map((level) => {
      const mid = level.scenarios.mid;
      const currentWidth = `${Math.min((level.current.total / mid.required.total) * 100, 100)}%`;
      const gapWidth = `${Math.min((mid.shortage.total / mid.required.total) * 100, 100)}%`;
      const coverageLine = `${formatNumber(level.openBedCoverageHospitals)} / ${formatNumber(
        level.hospitals
      )} 家已補 current open beds`;

      return `
        <article class="panel level-card">
          <div class="level-card__top">
            <div>
              <div class="level-card__tag">
                <span>官方標準</span>
                <strong>1:${level.standard.day} / 1:${level.standard.evening} / 1:${level.standard.night}</strong>
              </div>
              <h3 class="level-card__headline">${level.level}</h3>
              <p class="deck">${coverageLine}</p>
            </div>
            <div class="level-card__tag">
              <span>中推估缺口</span>
              <strong>${formatMetric(mid.shortage.total, 1)}</strong>
            </div>
          </div>

          <div class="level-card__stats">
            ${statCell("現行開床", formatMetric(level.acuteOpenBeds))}
            ${statCell("急性班表人力", formatMetric(level.current.total, 1))}
            ${statCell("中推估需求", formatMetric(mid.required.total, 1))}
            ${statCell("高推估缺口", formatMetric(level.scenarios.high.shortage.total, 1))}
          </div>

          <div class="meter">
            <div class="meter__labels">
              <span>現行班表覆蓋 ${formatPercent(level.current.total / mid.required.total)}</span>
              <span>中推估缺口 ${formatMetric(mid.shortage.total, 1)} 人</span>
            </div>
            <div class="meter__track">
              <div class="meter__fill" style="width:${currentWidth}"></div>
              <div class="meter__gap" style="width:${gapWidth}"></div>
            </div>
          </div>

          <div class="level-card__foot">
            ${footCell("白班實況", ratioText(level.actualRatio.day, level.standard.day))}
            ${footCell("小夜實況", ratioText(level.actualRatio.evening, level.standard.evening))}
            ${footCell("大夜實況", ratioText(level.actualRatio.night, level.standard.night))}
            ${footCell("健保申報床數", formatMetric(level.acuteReportedBeds))}
            ${footCell("開床差", formatSigned(level.openBedDelta, 1, " 床"))}
            ${footCell("低推估缺口", formatMetric(level.scenarios.low.shortage.total, 1))}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderGapOverview() {
  const container = document.getElementById("gap-overview");
  const maxNeed = Math.max(
    ...data.levelStats.flatMap((level) => [
      level.current.total,
      level.scenarios.low.required.total,
      level.scenarios.mid.required.total,
      level.scenarios.high.required.total,
    ])
  );

  container.innerHTML = data.levelStats
    .map((level) => {
      const scenarioRows = [
        { key: "low", label: "低推估", item: level.scenarios.low },
        { key: "mid", label: "中推估", item: level.scenarios.mid },
        { key: "high", label: "高推估", item: level.scenarios.high },
      ]
        .map((scenario) => {
          const requiredWidth = `${(scenario.item.required.total / maxNeed) * 100}%`;
          const currentWidth = `${(level.current.total / maxNeed) * 100}%`;
          const shortageWidth = `${(scenario.item.shortage.total / maxNeed) * 100}%`;

          return `
            <div class="gap-scenario gap-scenario--${scenario.key}">
              <div class="gap-scenario__meta">
                <strong>${scenario.label}</strong>
                <span>需求 ${formatMetric(scenario.item.required.total, 1)} / 缺口 ${formatMetric(
                  scenario.item.shortage.total,
                  1
                )}</span>
              </div>
              <div class="gap-scenario__track">
                <div class="gap-scenario__need" style="width:${requiredWidth}"></div>
                <div class="gap-scenario__current" style="width:${currentWidth}"></div>
                <div class="gap-scenario__loss" style="width:${shortageWidth}"></div>
              </div>
              <div class="gap-scenario__value">
                <strong>${formatMetric(scenario.item.shortage.total, 1)}</strong>
                <span>${scenario.label}</span>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <article class="gap-group">
          <div class="gap-group__label">
            <strong>${level.level}</strong>
            <span>${formatMetric(level.acuteOpenBeds)} 床現行開床</span>
            <span>現行班表 ${formatMetric(level.current.total, 1)} 人</span>
          </div>
          <div class="gap-group__stack">${scenarioRows}</div>
        </article>
      `;
    })
    .join("");
}

function renderScenarioScale() {
  const container = document.getElementById("scenario-scale");
  const maxValue = Math.max(...data.scenarios.map((item) => item.shortage.total));

  container.innerHTML = `
    <div>
      <p class="eyebrow">Bed-Based Range</p>
      <div class="range-panel__headline">差的不是同一個答案，而是同一組床位假設。</div>
      <p class="deck">低推估看的是報告期內的實際住床，中推估看的是當下已經開出去的急性一般病床，高推估則把這些開床視為滿載，直接看班表上緣。</p>
    </div>
    <div class="range-scale range-bars">
      ${data.scenarios
        .map((scenario) => {
          const width = Math.max((scenario.shortage.total / maxValue) * 100, 6);
          return `
            <article class="range-bar range-bar--${scenario.key}">
              <div class="range-bar__head">
                <div>
                  <span class="range-bar__label">${scenario.label}</span>
                  <p>${scenario.descriptor}</p>
                </div>
                <strong>${formatMetric(scenario.shortage.total, 1)} 人</strong>
              </div>
              <div class="range-bar__track">
                <div class="range-bar__fill" style="width:${width}%"></div>
              </div>
              <div class="range-bar__meta">
                <span><b>床位基數</b><strong>${formatMetric(scenario.bedBase)}</strong></span>
                <span><b>加權占床</b><strong>${formatPercent(scenario.weightedOccupancy)}</strong></span>
                <span><b>需求總量</b><strong>${formatMetric(scenario.required.total, 1)}</strong></span>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderScenarioCards() {
  const container = document.getElementById("scenario-cards");
  container.innerHTML = data.scenarios
    .map(
      (scenario) => `
        <article class="panel scenario-card scenario-card--${scenario.key}">
          <p class="eyebrow">${scenario.descriptor}</p>
          <div class="scenario-card__value">${formatMetric(scenario.shortage.total, 1)}</div>
          <h3>${scenario.label}</h3>
          <p>${scenario.body}</p>
          <div class="scenario-card__meta">
            <span><b>床位基數</b><strong>${formatMetric(scenario.bedBase)}</strong></span>
            <span><b>加權占床</b><strong>${formatPercent(scenario.weightedOccupancy)}</strong></span>
            <span><b>需求總量</b><strong>${formatMetric(scenario.required.total, 1)}</strong></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderOpenProxy() {
  const container = document.getElementById("open-proxy");
  container.innerHTML = data.levelStats
    .map(
      (level) => `
        <article class="proxy-card">
          <h3 class="proxy-card__level">${level.level}</h3>
          <div class="proxy-card__value">${formatMetric(level.acuteOpenBeds)}</div>
          <span class="proxy-card__sub">現行開放急性一般病床</span>
          <div class="proxy-card__meta">
            <span><b>健保申報床數</b><strong>${formatMetric(level.acuteReportedBeds)}</strong></span>
            <span><b>開床差</b><strong>${formatSigned(level.openBedDelta, 1, " 床")}</strong></span>
            <span><b>急性班表人力</b><strong>${formatMetric(level.current.total, 1)}</strong></span>
            <span><b>白班實況</b><strong>${ratioText(level.actualRatio.day, level.standard.day)}</strong></span>
            <span><b>小夜實況</b><strong>${ratioText(level.actualRatio.evening, level.standard.evening)}</strong></span>
            <span><b>大夜實況</b><strong>${ratioText(level.actualRatio.night, level.standard.night)}</strong></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStrategyCards() {
  const container = document.getElementById("strategy-cards");
  container.innerHTML = data.strategyCards
    .map(
      (card) => `
        <article class="strategy-card strategy-card--${card.accent}">
          <h4>${card.title}</h4>
          <p>${card.body}</p>
        </article>
      `
    )
    .join("");
}

function renderTables() {
  document.getElementById("shortage-table").innerHTML = data.topMidShortageHospitals
    .map(
      (hospital) => `
        <article class="table-row">
          <div>
            <h4 class="table-row__title">${hospital.name}</h4>
            <p class="table-row__meta">${hospital.level}・${hospital.region}・開床 ${formatMetric(
              hospital.acuteOpenBeds
            )} / 現行班表 ${formatMetric(hospital.currentAcuteStaff, 1)}</p>
          </div>
          <div class="table-row__metric">+${formatMetric(hospital.midShortage, 1)}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("vacancy-table").innerHTML = data.topOpenPressureHospitals
    .map(
      (hospital) => `
        <article class="table-row">
          <div>
            <h4 class="table-row__title">${hospital.name}</h4>
            <p class="table-row__meta">${hospital.level}・${hospital.region}・申報 ${formatMetric(
              hospital.reportedBeds
            )} → 開床 ${formatMetric(hospital.acuteOpenBeds)} (${formatSigned(
              hospital.openBedDelta,
              1,
              " 床"
            )})</p>
          </div>
          <div class="table-row__metric">+${formatMetric(hospital.openBedPressure, 1)}</div>
        </article>
      `
    )
    .join("");
}

function renderFooter() {
  document.getElementById("quality-notes").innerHTML = `
    <ul class="quality-notes">
      ${data.dataQuality.notes.map((note) => `<li>${note}</li>`).join("")}
      <li>調查檔總人力口徑：現有人力 ${formatNumber(
        data.totals.survey.current
      )}、需求線 ${formatNumber(data.totals.survey.need)}、待招募 ${formatNumber(
        data.totals.survey.vacancies
      )}。</li>
      <li>本頁生成時間：${new Date(data.meta.generatedAt).toLocaleString("zh-Hant-TW", {
        hour12: false,
      })}。</li>
    </ul>
  `;

  document.getElementById("source-links").innerHTML = `
    <a href="${data.officialContext.standardsSource.url}" target="_blank" rel="noreferrer">官方三班護病比標準（${data.officialContext.standardsSource.publishedDate}）</a>
    <a href="${data.officialContext.acuteRatioSource.url}" target="_blank" rel="noreferrer">健保署三班護病比資料（${data.officialContext.acuteRatioSource.resourceDescription}）</a>
    <a href="${data.officialContext.openBedsSource.url}" target="_blank" rel="noreferrer">衛福部醫院評鑑資訊專區開床資料</a>
    <a href="#" onclick="return false;">資料檔：${data.meta.workbookName}</a>
  `;
}

function statCell(label, value) {
  return `
    <div class="micro-stat">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function footCell(label, value) {
  return `
    <div class="micro-stat">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function formatNumber(value) {
  return Number(value).toLocaleString("zh-Hant-TW");
}

function formatMetric(value, digits = 0) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  return Number(value).toLocaleString("zh-Hant-TW", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function formatPercent(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  return `${(Number(value) * 100).toFixed(1)}%`;
}

function formatSigned(value, digits = 0, suffix = "") {
  if (value === null || value === undefined || Number.isNaN(Number(value))) {
    return "n/a";
  }
  const numeric = Number(value);
  const sign = numeric > 0 ? "+" : numeric < 0 ? "-" : "±";
  return `${sign}${Math.abs(numeric).toLocaleString("zh-Hant-TW", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}${suffix}`;
}

function ratioText(actual, standard) {
  if (actual === null || actual === undefined) return `標準 1:${standard}`;
  return `1:${Number(actual).toFixed(1)} / 標準 1:${standard}`;
}
