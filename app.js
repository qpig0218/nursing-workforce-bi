const data = normalizeDashboardData(window.DASHBOARD_DATA || {});

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

safeRender(renderLevelCards, "level cards");
safeRender(renderGapOverview, "gap overview");
safeRender(renderScenarioScale, "scenario scale");
safeRender(renderScenarioCards, "scenario cards");
safeRender(renderOpenProxy, "open proxy");
safeRender(renderStrategyCards, "strategy cards");
safeRender(renderLevelWorkforceInsights, "level workforce insights");
safeRender(renderRegionalGapMap, "regional gap map");
safeRender(renderTurnoverInsights, "turnover insights");
safeRender(renderTables, "tables");
safeRender(renderFooter, "footer");

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
            <div class="proxy-card__group">
              ${proxyItem("健保申報床數", formatMetric(level.acuteReportedBeds))}
              ${proxyItem("開床差", formatSigned(level.openBedDelta, 1, " 床"))}
              ${proxyItem("急性班表人力", formatMetric(level.current.total, 1))}
            </div>
            <div class="proxy-card__group proxy-card__group--ratios">
              ${proxyItem("白班實況", ratioText(level.actualRatio.day, level.standard.day))}
              ${proxyItem("小夜實況", ratioText(level.actualRatio.evening, level.standard.evening))}
              ${proxyItem("大夜實況", ratioText(level.actualRatio.night, level.standard.night))}
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStrategyCards() {
  const container = document.getElementById("strategy-cards");
  container.innerHTML = renderStrategyGroup(data.strategyCards);
}

function renderLevelWorkforceInsights() {
  const cards = document.getElementById("tier-cards");
  const bridge = document.getElementById("tier-bridge");
  if (!data.levelWorkforceInsights?.length) {
    renderUnavailableState(
      cards,
      "目前缺少可用的層級分析資料",
      "這一段需要新版 data.js。重新整理頁面後若仍無內容，再重新部署靜態資產。"
    );
    renderUnavailableState(
      bridge,
      "目前缺少交會分析資料",
      "已改成不會因為資料版本不一致而整段失效。"
    );
    return;
  }
  const maxSurveyShortage = Math.max(...data.levelWorkforceInsights.map((item) => item.survey.shortage));
  const maxBedShortage = Math.max(
    ...data.levelWorkforceInsights.map((item) => item.bedPressure.midShortage)
  );

  cards.innerHTML = data.levelWorkforceInsights
    .map(
      (item) => `
        <article class="panel tier-card">
          <div class="tier-card__head">
            <div>
              <p class="eyebrow">Tier Workforce</p>
              <h3>${item.level}</h3>
            </div>
            <div class="level-card__tag">
              <span>acute 缺口占比</span>
              <strong>${formatPercent(item.bedPressure.midShortageShare)}</strong>
            </div>
          </div>

          <div class="tier-card__stats">
            ${statCell("實際聘僱", formatMetric(item.structure.actualEmployed))}
            ${statCell("1-4 fill", formatPercent(item.survey.fillRate))}
            ${statCell("待招募 backlog", formatMetric(item.structure.vacancyBacklog))}
            ${statCell("acute 中推估", formatMetric(item.bedPressure.midShortage, 1))}
          </div>

          <div class="tier-card__bars">
            <div class="tier-card__bar">
              <div class="tier-card__meta">
                <span>1-4 shortage</span>
                <strong>${formatMetric(item.survey.shortage)}</strong>
              </div>
              <div class="tier-card__track">
                <div class="tier-card__fill tier-card__fill--survey" style="width:${Math.max(
                  (item.survey.shortage / maxSurveyShortage) * 100,
                  4
                )}%"></div>
              </div>
            </div>
            <div class="tier-card__bar">
              <div class="tier-card__meta">
                <span>acute 補班壓力</span>
                <strong>${formatMetric(item.bedPressure.midShortage, 1)}</strong>
              </div>
              <div class="tier-card__track">
                <div class="tier-card__fill tier-card__fill--acute" style="width:${Math.max(
                  (item.bedPressure.midShortage / maxBedShortage) * 100,
                  4
                )}%"></div>
              </div>
            </div>
          </div>

          <div class="tier-card__signals">
            ${tierSignal("專任占比", formatPercent(item.structure.fullTimeShare))}
            ${tierSignal("護理師占比", formatPercent(item.structure.rnShare))}
            ${tierSignal("補補相抵", `${formatMetric(item.flow.hireToTurnover, 2)}x`)}
            ${tierSignal("三月內離職", formatPercent(item.flow.under3Share))}
          </div>

          <div class="tier-card__advice">
            <b>${item.recommendation.title}</b>
            <p>${item.recommendation.body}</p>
          </div>
        </article>
      `
    )
    .join("");

  bridge.innerHTML = data.levelWorkforceInsights
    .map(
      (item) => `
        <article class="tier-bridge__row">
          <div class="tier-bridge__head">
            <strong>${item.level}</strong>
            <span>${formatMetric(item.structure.actualEmployed)} 實際聘僱 / ${formatMetric(
              item.structure.vacancyBacklog
            )} 待招募</span>
          </div>
          <div class="tier-bridge__stack">
            <div class="tier-bridge__bar">
              <span>1-4 shortage</span>
              <div class="tier-bridge__track">
                <div class="tier-bridge__fill tier-bridge__fill--survey" style="width:${Math.max(
                  (item.survey.shortage / maxSurveyShortage) * 100,
                  4
                )}%"></div>
              </div>
              <strong>${formatMetric(item.survey.shortage)}</strong>
            </div>
            <div class="tier-bridge__bar">
              <span>acute 中推估</span>
              <div class="tier-bridge__track">
                <div class="tier-bridge__fill tier-bridge__fill--acute" style="width:${Math.max(
                  (item.bedPressure.midShortage / maxBedShortage) * 100,
                  4
                )}%"></div>
              </div>
              <strong>${formatMetric(item.bedPressure.midShortage, 1)}</strong>
            </div>
          </div>
          <div class="tier-bridge__foot">
            <span>補補相抵 ${formatMetric(item.flow.hireToTurnover, 2)}x</span>
            <span>三月內離職 ${formatPercent(item.flow.under3Share)}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRegionalGapMap() {
  const container = document.getElementById("region-map");
  if (!data.regionalGapMap?.length) {
    renderUnavailableState(
      container,
      "目前缺少區域分析資料",
      "這段會在新版 data.js 載入後自動恢復；現在先避免整個區塊空白。"
    );
    document.getElementById("regional-focus").innerHTML = renderStrategyGroup(
      data.regionalFocusCards || []
    );
    return;
  }
  const maxRate = Math.max(...data.regionalGapMap.map((item) => item.bedPressure.midShortageRate));

  container.innerHTML = data.regionalGapMap
    .map((region) => {
      const intensity = 0.12 + (region.bedPressure.midShortageRate / maxRate) * 0.78;
      const leadHospital = region.topHospitals[0];
      return `
        <article class="region-card region-card--${regionSlug(
          region.region
        )}" style="--region-strength:${intensity.toFixed(3)}">
          <div class="region-card__head">
            <div>
              <span class="eyebrow">${region.region}</span>
              <h3>${region.region}</h3>
            </div>
            <div class="region-card__rank">
              <span>缺口率排名</span>
              <strong>#${region.intensityRank}</strong>
            </div>
          </div>
          <div class="region-card__value">${formatMetric(region.bedPressure.midShortage, 1)}</div>
          <p class="region-card__label">acute 中推估缺口</p>
          <div class="region-card__meta">
            ${regionMeta("缺口率", formatPercent(region.bedPressure.midShortageRate))}
            ${regionMeta("Survey fill", formatPercent(region.survey.fillRate))}
            ${regionMeta("待招募 backlog", formatMetric(region.structure.vacancyBacklog))}
            ${regionMeta("主力層級", region.dominantLevel)}
          </div>
          <div class="region-card__foot">
            <span>每 100 床缺 ${formatMetric(region.bedPressure.shortagePer100Beds, 2)} 人</span>
            <span>${leadHospital ? `關注：${leadHospital.name}` : "目前未顯示單點醫院"}</span>
          </div>
        </article>
      `;
    })
    .join("");

  document.getElementById("regional-focus").innerHTML = renderStrategyGroup(data.regionalFocusCards);
}

function renderTurnoverInsights() {
  if (!data.turnoverInsights?.overview || !data.turnoverInsights?.scopes?.length) {
    renderUnavailableState(
      document.getElementById("turnover-kpis"),
      "目前缺少離職驅動資料",
      "如果頁面剛更新，這通常是瀏覽器快取的舊 data.js 與新 app.js 混用造成；重新整理後即可恢復。"
    );
    renderUnavailableState(
      document.getElementById("structure-level-grid"),
      "暫時無法顯示結構量體",
      "新版資料已加入結構與離職欄位，載入一致版本後會正常顯示。"
    );
    renderUnavailableState(
      document.getElementById("driver-scopes"),
      "暫時無法顯示驅動因子排序",
      "前端已修正為不再因資料不一致而把整段畫面中斷。"
    );
    document.getElementById("retention-cards").innerHTML = "";
    return;
  }
  const overview = data.turnoverInsights.overview;
  const turnoverKpis = document.getElementById("turnover-kpis");
  const structureLevelGrid = document.getElementById("structure-level-grid");
  const driverScopes = document.getElementById("driver-scopes");
  const maxThemeValue = Math.max(
    ...data.turnoverInsights.scopes.flatMap((scope) => scope.themeSignals.map((theme) => theme.value))
  );

  turnoverKpis.innerHTML = [
    {
      label: "實際聘僱量體",
      value: formatMetric(overview.actualEmployed),
      meta: `專任占比 ${formatPercent(overview.fullTimeShare)} / 護理師占比 ${formatPercent(
        overview.rnShare
      )}`,
    },
    {
      label: "新進 / 離職",
      value: `${formatMetric(overview.hireToTurnover, 2)}x`,
      meta: `全年新進 ${formatMetric(overview.hires)} / 離職 ${formatMetric(overview.turnover)}`,
    },
    {
      label: "三月內離職",
      value: formatMetric(overview.under3Months),
      meta: `占全年離職 ${formatPercent(overview.under3Share)}`,
    },
    {
      label: "調薪覆蓋",
      value: formatPercent(overview.salaryRaisedRate),
      meta: `${formatMetric(overview.salaryRaisedHospitals)} / ${formatMetric(
        overview.salaryRaiseResponseHospitals
      )} 家回覆已調薪`,
    },
  ]
    .map(
      (item) => `
        <article class="turnover-kpi">
          <span class="kpi__label">${item.label}</span>
          <strong class="kpi__value turnover-kpi__value">${item.value}</strong>
          <span class="kpi__meta">${item.meta}</span>
        </article>
      `
    )
    .join("");

  structureLevelGrid.innerHTML = data.turnoverInsights.structureByLevel
    .map(
      (item) => `
        <article class="structure-card">
          <div class="structure-card__head">
            <h4>${item.level}</h4>
            <span>${formatMetric(item.actualEmployed)} 人</span>
          </div>
          <div class="structure-card__grid">
            ${regionMeta("專任占比", formatPercent(item.fullTimeShare))}
            ${regionMeta("護理師占比", formatPercent(item.rnShare))}
            ${regionMeta("補補相抵", `${formatMetric(item.hireToTurnover, 2)}x`)}
            ${regionMeta("三月內離職", formatPercent(item.under3Share))}
          </div>
        </article>
      `
    )
    .join("");

  driverScopes.innerHTML = data.turnoverInsights.scopes
    .map(
      (scope) => `
        <article class="driver-card">
          <div class="driver-card__head">
            <div>
              <p class="eyebrow">Driver Scope</p>
              <h3>${scope.label}</h3>
            </div>
            <span>可介入訊號 ${formatMetric(scope.actionableThemeTotal)}</span>
          </div>
          <div class="driver-card__themes">
            ${scope.themeSignals
              .slice(0, 4)
              .map(
                (theme) => `
                  <div class="driver-theme">
                    <div class="driver-theme__meta">
                      <span>${theme.theme}</span>
                      <strong>${formatMetric(theme.value)}</strong>
                    </div>
                    <div class="driver-theme__track">
                      <div class="driver-theme__fill" style="width:${Math.max(
                        (theme.value / maxThemeValue) * 100,
                        6
                      )}%"></div>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
          <div class="driver-card__reasons">
            ${scope.attentionReasons
              .slice(0, 4)
              .map(
                (reason) => `
                  <div class="driver-reason">
                    <b>${reason.label}</b>
                    <strong>${formatMetric(reason.value)}</strong>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("retention-cards").innerHTML = renderStrategyGroup(
    data.turnoverInsights.recommendationCards
  );
}

function renderStrategyGroup(cards) {
  return (cards || [])
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
      <li>調查檔口徑拆分：表 1-4 現有人力 ${formatNumber(
        data.totals.survey.current
      )}、需求線 ${formatNumber(data.totals.survey.need)}；表 1-1 待招募 ${formatNumber(
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

function proxyItem(label, value) {
  return `
    <div class="proxy-card__item">
      <b>${label}</b>
      <strong>${value}</strong>
    </div>
  `;
}

function tierSignal(label, value) {
  return `
    <div class="tier-signal">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function regionMeta(label, value) {
  return `
    <div class="region-meta">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `;
}

function renderUnavailableState(container, title, body) {
  if (!container) return;
  container.innerHTML = `
    <article class="unavailable-state">
      <h4>${title}</h4>
      <p>${body}</p>
    </article>
  `;
}

function safeRender(fn, label) {
  try {
    fn();
  } catch (error) {
    console.error(`[render:${label}]`, error);
  }
}

function normalizeDashboardData(source) {
  const normalized = source || {};
  normalized.levelWorkforceInsights =
    normalized.levelWorkforceInsights || deriveLevelWorkforceInsights(normalized);
  normalized.regionalGapMap = normalized.regionalGapMap || deriveRegionalGapMap(normalized);
  normalized.regionalFocusCards =
    normalized.regionalFocusCards || deriveRegionalFocusCards(normalized.regionalGapMap);
  return normalized;
}

function deriveLevelWorkforceInsights(source) {
  if (!source.levelStats?.length) return [];

  return source.levelStats.map((level) => {
    const subset = (source.hospitals || []).filter((hospital) => hospital.level === level.level);
    const surveyCurrent = sumBy(subset, (hospital) => hospital.survey?.current);
    const surveyNeed = sumBy(subset, (hospital) => hospital.survey?.need);
    const surveyShortage = sumShortageBy(subset, (hospital) => hospital.survey?.gap);
    const surveySurplus = sumSurplusBy(subset, (hospital) => hospital.survey?.gap);
    const vacancyBacklog = sumBy(subset, (hospital) => hospital.survey?.vacancies);
    const acuteMidShortage = level.scenarios?.mid?.shortage?.total ?? null;
    const acuteMidTotal = source.totals?.scenarios?.mid?.shortage?.total ?? null;
    const recommendation =
      level.level === "區域醫院"
        ? {
            title: "先守住區域醫院的補班彈性",
            body: "區域醫院通常同時承接轉診與夜班壓力，先補足可跨單位調度的人力池，會比平均補人更有效。",
          }
        : level.level === "醫學中心"
          ? {
              title: "把高強度單位留任做深",
              body: "醫學中心量體大、重症密度高，建議把夜班、急診、重症與進階職涯綁成同一套留任組合。",
            }
          : {
              title: "降低早期流失比擴大招募更急",
              body: "地區醫院家數最多，若前三個月留不住，新進補進來也會快速流失。",
            };

    return {
      level: level.level,
      hospitals: subset.length || level.hospitals || 0,
      structure: {
        actualEmployed: surveyCurrent || null,
        fullTimeShare: null,
        rnShare: null,
        vacancyBacklog: vacancyBacklog || null,
        vacancyBacklogRate: surveyCurrent ? vacancyBacklog / surveyCurrent : null,
      },
      survey: {
        current: surveyCurrent || null,
        need: surveyNeed || null,
        shortage: surveyShortage || 0,
        surplus: surveySurplus || 0,
        fillRate: surveyNeed ? surveyCurrent / surveyNeed : null,
      },
      bedPressure: {
        openBeds: level.acuteOpenBeds ?? null,
        midShortage: acuteMidShortage,
        midShortageShare: acuteMidTotal ? acuteMidShortage / acuteMidTotal : null,
        openBedDelta: level.openBedDelta ?? null,
      },
      flow: {
        hires: null,
        turnover: null,
        hireToTurnover: null,
        under3Months: null,
        under3Share: null,
      },
      recommendation,
    };
  });
}

function deriveRegionalGapMap(source) {
  if (!source.hospitals?.length) return [];

  const regions = ["臺北", "北區", "中區", "南區", "高屏", "東區"].filter((region) =>
    source.hospitals.some((hospital) => hospital.region === region)
  );

  const mapped = regions.map((region) => {
    const subset = source.hospitals.filter((hospital) => hospital.region === region);
    const acuteSubset = subset.filter((hospital) => hospital.scenarios?.mid);
    const surveyCurrent = sumBy(subset, (hospital) => hospital.survey?.current);
    const surveyNeed = sumBy(subset, (hospital) => hospital.survey?.need);
    const surveyShortage = sumShortageBy(subset, (hospital) => hospital.survey?.gap);
    const vacancyBacklog = sumBy(subset, (hospital) => hospital.survey?.vacancies);
    const midRequired = sumBy(acuteSubset, (hospital) => hospital.scenarios?.mid?.required?.total);
    const midShortage = sumBy(acuteSubset, (hospital) => hospital.scenarios?.mid?.shortage?.total);
    const openBeds = sumBy(
      acuteSubset,
      (hospital) => hospital.acuteOpenBeds ?? hospital.acute?.reportedBeds
    );

    const dominantLevel =
      ["醫學中心", "區域醫院", "地區醫院"]
        .map((level) => ({
          level,
          shortage: sumBy(
            acuteSubset.filter((hospital) => hospital.level === level),
            (hospital) => hospital.scenarios?.mid?.shortage?.total
          ),
        }))
        .sort((a, b) => b.shortage - a.shortage)[0] || null;

    return {
      region,
      hospitals: subset.length,
      acuteHospitals: acuteSubset.length,
      survey: {
        current: surveyCurrent || null,
        need: surveyNeed || null,
        shortage: surveyShortage || 0,
        fillRate: surveyNeed ? surveyCurrent / surveyNeed : null,
      },
      structure: {
        vacancyBacklog: vacancyBacklog || null,
        vacancyBacklogRate: surveyCurrent ? vacancyBacklog / surveyCurrent : null,
      },
      bedPressure: {
        openBeds: openBeds || null,
        midRequired: midRequired || null,
        midShortage: midShortage || 0,
        midShortageRate: midRequired ? midShortage / midRequired : null,
        shortagePer100Beds: openBeds ? (midShortage / openBeds) * 100 : null,
      },
      dominantLevel: dominantLevel?.level || null,
      dominantLevelShortage: dominantLevel?.shortage || null,
      topHospitals: [...acuteSubset]
        .filter((hospital) => positiveNumber(hospital.scenarios?.mid?.shortage?.total) > 0)
        .sort(
          (a, b) =>
            positiveNumber(b.scenarios?.mid?.shortage?.total) -
            positiveNumber(a.scenarios?.mid?.shortage?.total)
        )
        .slice(0, 2)
        .map((hospital) => ({
          name: hospital.name,
          level: hospital.level,
          shortage: hospital.scenarios?.mid?.shortage?.total ?? null,
        })),
    };
  });

  return mapped.map((region) => ({
    ...region,
    absoluteRank:
      [...mapped]
        .sort(
          (a, b) =>
            positiveNumber(b.bedPressure.midShortage) - positiveNumber(a.bedPressure.midShortage)
        )
        .findIndex((item) => item.region === region.region) + 1,
    intensityRank:
      [...mapped]
        .sort(
          (a, b) =>
            positiveNumber(b.bedPressure.midShortageRate) -
            positiveNumber(a.bedPressure.midShortageRate)
        )
        .findIndex((item) => item.region === region.region) + 1,
  }));
}

function deriveRegionalFocusCards(regionalGapMap) {
  if (!regionalGapMap?.length) return [];
  const topAbsoluteRegion = [...regionalGapMap].sort(
    (a, b) => positiveNumber(b.bedPressure.midShortage) - positiveNumber(a.bedPressure.midShortage)
  )[0];
  const topIntensityRegion = [...regionalGapMap].sort(
    (a, b) =>
      positiveNumber(b.bedPressure.midShortageRate) - positiveNumber(a.bedPressure.midShortageRate)
  )[0];
  const lowestFillRegion = [...regionalGapMap].sort(
    (a, b) => positiveNumber(a.survey.fillRate) - positiveNumber(b.survey.fillRate)
  )[0];

  return [
    {
      title: `${topAbsoluteRegion.region} 缺口量最大`,
      body: `${topAbsoluteRegion.region} 的 acute 中推估缺口最高，優先順序應放在區域內關鍵醫院與主力承壓層級。`,
      accent: "rust",
    },
    {
      title: `${topIntensityRegion.region} 缺口率最深`,
      body: `${topIntensityRegion.region} 的每床補班壓力最高，代表不是只有量大，而是班表緊度已經偏高。`,
      accent: "ink",
    },
    {
      title: `${lowestFillRegion.region} survey 填補率最低`,
      body: `${lowestFillRegion.region} 在 survey 口徑上的填補率最低，補人策略要和通勤、住宿或區域條件一起思考。`,
      accent: "teal",
    },
  ];
}

function sumBy(items, getter) {
  return (items || []).reduce((sum, item) => sum + positiveNumber(getter(item)), 0);
}

function sumShortageBy(items, getter) {
  return (items || []).reduce((sum, item) => {
    const value = Number(getter(item));
    if (!Number.isFinite(value) || value >= 0) return sum;
    return sum + Math.abs(value);
  }, 0);
}

function sumSurplusBy(items, getter) {
  return (items || []).reduce((sum, item) => {
    const value = Number(getter(item));
    if (!Number.isFinite(value) || value <= 0) return sum;
    return sum + value;
  }, 0);
}

function positiveNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
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

function regionSlug(region) {
  return (
    {
      臺北: "taipei",
      北區: "north",
      中區: "central",
      南區: "south",
      高屏: "kaoping",
      東區: "east",
    }[region] || "default"
  );
}
