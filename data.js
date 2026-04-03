window.DASHBOARD_DATA = {
  "meta": {
    "title": "114年度醫院護產人力需求雜誌式 BI",
    "workbookName": "114年度「醫院護產人力資源」調查結果_人力.xlsx",
    "generatedAt": "2026-04-03T05:09:56.904Z",
    "coverage": {
      "surveyHospitals": 459,
      "acuteRatioHospitals": 395,
      "openInfoMatchedHospitals": 392,
      "acuteRatioCoverageRate": 0.8606,
      "openInfoCoverageRateWithinAcute": 0.9924
    }
  },
  "officialContext": {
    "standardsSource": {
      "title": "醫院三班護病比標準公告 同步啟動40億投資三班輪值夜班護理人員直接奬勵",
      "publishedDate": "2024-01-26",
      "url": "https://www.mohw.gov.tw/fp-16-77368-1.html"
    },
    "acuteRatioSource": {
      "title": "三班護病比(112年7月起)",
      "datasetId": "A21030000I-D2001Y",
      "resourceId": "A21030000I-D2001Y-00I",
      "resourceDescription": "113年12月全民健康保險特約醫院於VPN登錄之各月份三班護病比",
      "modifiedAt": "2025-03-05 09:22:45",
      "url": "https://info.nhi.gov.tw/IODE0000/IODE0000S05?dataSour=A21030000I-D2001Y"
    },
    "openBedsSource": {
      "title": "醫院評鑑資訊專區病床設施資料",
      "accessedAt": "2026-04-03T05:09:56.905Z",
      "url": "https://openinfo.mohw.gov.tw/web/C01"
    }
  },
  "totals": {
    "hospitals": 395,
    "acuteReportedBeds": 72984,
    "acuteOpenBeds": 72437,
    "openBedDelta": -547,
    "currentAcuteStaff": {
      "day": 8005.8,
      "evening": 5134.1,
      "night": 4137.4,
      "total": 17277.3
    },
    "scenarios": {
      "low": {
        "key": "low",
        "label": "低推估",
        "descriptor": "實際住床",
        "body": "以健保署 113 年 12 月三班護病比檔中的急性一般病床數與當月占床率為底，估計當期至少需要守住的班表量。",
        "hospitals": 395,
        "bedBase": 72984,
        "occupiedBeds": 49081.3,
        "required": {
          "day": 7091.1,
          "evening": 4747.2,
          "night": 3967,
          "total": 15805.5
        },
        "shortage": {
          "day": 92.8,
          "evening": 118.2,
          "night": 199,
          "total": 410.4
        },
        "weightedOccupancy": 0.672
      },
      "mid": {
        "key": "mid",
        "label": "中推估",
        "descriptor": "現行開床",
        "body": "把衛福部醫院評鑑資訊專區目前開放中的急性一般病床數接進來，並沿用最新申報占床率，反映現在開床規模下需要補上的人力。",
        "hospitals": 395,
        "bedBase": 72437,
        "occupiedBeds": 48616.7,
        "required": {
          "day": 7019.1,
          "evening": 4700.6,
          "night": 3928.1,
          "total": 15647
        },
        "shortage": {
          "day": 142,
          "evening": 154.1,
          "night": 220.3,
          "total": 516.5
        },
        "weightedOccupancy": 0.671
      },
      "high": {
        "key": "high",
        "label": "高推估",
        "descriptor": "滿載開床",
        "body": "假設目前開放中的急性一般病床全部滿載，直接以三班標準推估壓力上緣，呈現班表最吃緊時的補人量。",
        "hospitals": 395,
        "bedBase": 72437,
        "occupiedBeds": 72437,
        "required": {
          "day": 10169.4,
          "evening": 6845.5,
          "night": 5741.4,
          "total": 22762.3
        },
        "shortage": {
          "day": 2409.5,
          "evening": 1792.9,
          "night": 1659.4,
          "total": 5864.8
        },
        "weightedOccupancy": 1
      }
    },
    "survey": {
      "hospitals": 459,
      "current": 32350,
      "need": 34565,
      "netGap": 2215,
      "grossShort": 3944,
      "grossSurplus": 1729,
      "vacancies": 12483,
      "fillRate": 0.9359
    }
  },
  "levelStats": [
    {
      "level": "醫學中心",
      "hospitals": 31,
      "openBedCoverageHospitals": 31,
      "standard": {
        "day": 6,
        "evening": 9,
        "night": 11
      },
      "acuteReportedBeds": 26137,
      "acuteOpenBeds": 25853,
      "openBedDelta": -284,
      "occupancyMedian": 0.776,
      "occupiedBedsActual": 20816,
      "current": {
        "day": 3897.4,
        "evening": 2386.1,
        "night": 1825.3,
        "total": 8108.8
      },
      "actualRatio": {
        "day": 5.3,
        "evening": 8.7,
        "night": 11.4
      },
      "scenarios": {
        "low": {
          "hospitals": 31,
          "bedBase": 26137,
          "occupiedBeds": 20815.9,
          "required": {
            "day": 3469.4,
            "evening": 2312.9,
            "night": 1892.3,
            "total": 7674.7
          },
          "shortage": {
            "day": 5.3,
            "evening": 50.3,
            "night": 122.5,
            "total": 178.3
          },
          "weightedOccupancy": 0.796
        },
        "mid": {
          "hospitals": 31,
          "bedBase": 25853,
          "occupiedBeds": 20600,
          "required": {
            "day": 3433.6,
            "evening": 2289,
            "night": 1872.8,
            "total": 7595.2
          },
          "shortage": {
            "day": 5.3,
            "evening": 51.6,
            "night": 120.3,
            "total": 177.1
          },
          "weightedOccupancy": 0.797
        },
        "high": {
          "hospitals": 31,
          "bedBase": 25853,
          "occupiedBeds": 25853,
          "required": {
            "day": 4308.8,
            "evening": 2872.8,
            "night": 2350.3,
            "total": 9531.5
          },
          "shortage": {
            "day": 565.3,
            "evening": 501.6,
            "night": 529.1,
            "total": 1595.6
          },
          "weightedOccupancy": 1
        }
      }
    },
    {
      "level": "區域醫院",
      "hospitals": 74,
      "openBedCoverageHospitals": 74,
      "standard": {
        "day": 7,
        "evening": 11,
        "night": 13
      },
      "acuteReportedBeds": 28170,
      "acuteOpenBeds": 28046,
      "openBedDelta": -124,
      "occupancyMedian": 0.665,
      "occupiedBedsActual": 18563.7,
      "current": {
        "day": 2751.5,
        "evening": 1751.4,
        "night": 1434.8,
        "total": 5937.7
      },
      "actualRatio": {
        "day": 6.7,
        "evening": 10.6,
        "night": 12.9
      },
      "scenarios": {
        "low": {
          "hospitals": 74,
          "bedBase": 28170,
          "occupiedBeds": 18564.1,
          "required": {
            "day": 2651.9,
            "evening": 1687.4,
            "night": 1427.8,
            "total": 5767.8
          },
          "shortage": {
            "day": 76.7,
            "evening": 53,
            "night": 65.1,
            "total": 194.9
          },
          "weightedOccupancy": 0.659
        },
        "mid": {
          "hospitals": 74,
          "bedBase": 28046,
          "occupiedBeds": 18294.2,
          "required": {
            "day": 2613.3,
            "evening": 1663.2,
            "night": 1407.3,
            "total": 5683.8
          },
          "shortage": {
            "day": 105.1,
            "evening": 68.9,
            "night": 73.5,
            "total": 247.6
          },
          "weightedOccupancy": 0.652
        },
        "high": {
          "hospitals": 74,
          "bedBase": 28046,
          "occupiedBeds": 28046,
          "required": {
            "day": 4006.8,
            "evening": 2549.9,
            "night": 2157.6,
            "total": 8713.2
          },
          "shortage": {
            "day": 1282.6,
            "evening": 817.2,
            "night": 726.2,
            "total": 2824.8
          },
          "weightedOccupancy": 1
        }
      }
    },
    {
      "level": "地區醫院",
      "hospitals": 290,
      "openBedCoverageHospitals": 287,
      "standard": {
        "day": 10,
        "evening": 13,
        "night": 15
      },
      "acuteReportedBeds": 18677,
      "acuteOpenBeds": 18538,
      "openBedDelta": -139,
      "occupancyMedian": 0.458,
      "occupiedBedsActual": 9701,
      "current": {
        "day": 1356.9,
        "evening": 996.6,
        "night": 877.3,
        "total": 3230.8
      },
      "actualRatio": {
        "day": 7.1,
        "evening": 9.7,
        "night": 11.1
      },
      "scenarios": {
        "low": {
          "hospitals": 290,
          "bedBase": 18677,
          "occupiedBeds": 9701.3,
          "required": {
            "day": 969.8,
            "evening": 746.9,
            "night": 646.9,
            "total": 2363
          },
          "shortage": {
            "day": 10.8,
            "evening": 14.9,
            "night": 11.4,
            "total": 37.2
          },
          "weightedOccupancy": 0.519
        },
        "mid": {
          "hospitals": 290,
          "bedBase": 18538,
          "occupiedBeds": 9722.5,
          "required": {
            "day": 972.2,
            "evening": 748.4,
            "night": 648,
            "total": 2368
          },
          "shortage": {
            "day": 31.6,
            "evening": 33.6,
            "night": 26.5,
            "total": 91.8
          },
          "weightedOccupancy": 0.524
        },
        "high": {
          "hospitals": 290,
          "bedBase": 18538,
          "occupiedBeds": 18538,
          "required": {
            "day": 1853.8,
            "evening": 1422.8,
            "night": 1233.5,
            "total": 4517.6
          },
          "shortage": {
            "day": 561.6,
            "evening": 474.1,
            "night": 404.1,
            "total": 1444.4
          },
          "weightedOccupancy": 1
        }
      }
    }
  ],
  "levelWorkforceInsights": [
    {
      "level": "醫學中心",
      "hospitals": 32,
      "structure": {
        "actualEmployed": 50470,
        "fullTimeShare": 0.9647,
        "rnShare": 0.985,
        "vacancyBacklog": 4564,
        "vacancyBacklogRate": 0.0904
      },
      "survey": {
        "current": 14060,
        "need": 14826,
        "shortage": 1300,
        "surplus": 534,
        "fillRate": 0.9483
      },
      "bedPressure": {
        "openBeds": 25853,
        "midShortage": 177.1,
        "midShortageShare": 0.3429,
        "openBedDelta": -284
      },
      "flow": {
        "hires": 6376,
        "turnover": 4670,
        "hireToTurnover": 1.365,
        "under3Months": 1212,
        "under3Share": 0.2595
      },
      "recommendation": {
        "title": "把高強度夜班與重症單位留任做深",
        "body": "醫學中心量體最大，建議把重症、急診與夜班誘因綁進進階職涯與技術加給，而不是只做一般性補人。"
      }
    },
    {
      "level": "區域醫院",
      "hospitals": 83,
      "structure": {
        "actualEmployed": 48034,
        "fullTimeShare": 0.9688,
        "rnShare": 0.9652,
        "vacancyBacklog": 5117,
        "vacancyBacklogRate": 0.1065
      },
      "survey": {
        "current": 11735,
        "need": 12694,
        "shortage": 1694,
        "surplus": 735,
        "fillRate": 0.9245
      },
      "bedPressure": {
        "openBeds": 28046,
        "midShortage": 247.6,
        "midShortageShare": 0.4794,
        "openBedDelta": -124
      },
      "flow": {
        "hires": 6789,
        "turnover": 4906,
        "hireToTurnover": 1.384,
        "under3Months": 1481,
        "under3Share": 0.3019
      },
      "recommendation": {
        "title": "先補足可調度的彈性班表",
        "body": "區域醫院同時承接最大 survey 缺口與最大 acute 補班壓力，建議優先配置跨單位支援池與區域招募配額。"
      }
    },
    {
      "level": "地區醫院",
      "hospitals": 344,
      "structure": {
        "actualEmployed": 26165,
        "fullTimeShare": 0.956,
        "rnShare": 0.9058,
        "vacancyBacklog": 2802,
        "vacancyBacklogRate": 0.1071
      },
      "survey": {
        "current": 6555,
        "need": 7045,
        "shortage": 950,
        "surplus": 460,
        "fillRate": 0.9304
      },
      "bedPressure": {
        "openBeds": 18538,
        "midShortage": 91.8,
        "midShortageShare": 0.1777,
        "openBedDelta": -139
      },
      "flow": {
        "hires": 4855,
        "turnover": 3658,
        "hireToTurnover": 1.327,
        "under3Months": 1510,
        "under3Share": 0.4128
      },
      "recommendation": {
        "title": "把新進三個月內流失壓下來",
        "body": "地區醫院家數最多且早離職占比最高，建議先從固定 preceptor、前三個月排班保護與區域共享培訓做起。"
      }
    }
  ],
  "scenarios": [
    {
      "key": "low",
      "label": "低推估",
      "descriptor": "實際住床",
      "body": "以健保署 113 年 12 月三班護病比檔中的急性一般病床數與當月占床率為底，估計當期至少需要守住的班表量。",
      "hospitals": 395,
      "bedBase": 72984,
      "occupiedBeds": 49081.3,
      "required": {
        "day": 7091.1,
        "evening": 4747.2,
        "night": 3967,
        "total": 15805.5
      },
      "shortage": {
        "day": 92.8,
        "evening": 118.2,
        "night": 199,
        "total": 410.4
      },
      "weightedOccupancy": 0.672
    },
    {
      "key": "mid",
      "label": "中推估",
      "descriptor": "現行開床",
      "body": "把衛福部醫院評鑑資訊專區目前開放中的急性一般病床數接進來，並沿用最新申報占床率，反映現在開床規模下需要補上的人力。",
      "hospitals": 395,
      "bedBase": 72437,
      "occupiedBeds": 48616.7,
      "required": {
        "day": 7019.1,
        "evening": 4700.6,
        "night": 3928.1,
        "total": 15647
      },
      "shortage": {
        "day": 142,
        "evening": 154.1,
        "night": 220.3,
        "total": 516.5
      },
      "weightedOccupancy": 0.671
    },
    {
      "key": "high",
      "label": "高推估",
      "descriptor": "滿載開床",
      "body": "假設目前開放中的急性一般病床全部滿載，直接以三班標準推估壓力上緣，呈現班表最吃緊時的補人量。",
      "hospitals": 395,
      "bedBase": 72437,
      "occupiedBeds": 72437,
      "required": {
        "day": 10169.4,
        "evening": 6845.5,
        "night": 5741.4,
        "total": 22762.3
      },
      "shortage": {
        "day": 2409.5,
        "evening": 1792.9,
        "night": 1659.4,
        "total": 5864.8
      },
      "weightedOccupancy": 1
    }
  ],
  "regionalGapMap": [
    {
      "region": "臺北",
      "hospitals": 106,
      "acuteHospitals": 88,
      "survey": {
        "current": 9624,
        "need": 10868,
        "shortage": 1668,
        "fillRate": 0.8855
      },
      "structure": {
        "vacancyBacklog": 4924,
        "vacancyBacklogRate": 0.1256
      },
      "bedPressure": {
        "openBeds": 21612,
        "midRequired": 4991.7,
        "midShortage": 160.1,
        "midShortageRate": 0.0321,
        "shortagePer100Beds": 0.74
      },
      "dominantLevel": "醫學中心",
      "dominantLevelShortage": 84.9,
      "topHospitals": [
        {
          "name": "國立台灣大學醫學院附設醫院",
          "level": "醫學中心",
          "shortage": 30.2
        },
        {
          "name": "衛生福利部雙和醫院(委託臺北醫學大學興建經營)",
          "level": "醫學中心",
          "shortage": 15.6
        }
      ],
      "absoluteRank": 1,
      "intensityRank": 2
    },
    {
      "region": "北區",
      "hospitals": 67,
      "acuteHospitals": 58,
      "survey": {
        "current": 3938,
        "need": 4404,
        "shortage": 550,
        "fillRate": 0.8942
      },
      "structure": {
        "vacancyBacklog": 1919,
        "vacancyBacklogRate": 0.1129
      },
      "bedPressure": {
        "openBeds": 10569,
        "midRequired": 2147.1,
        "midShortage": 64.8,
        "midShortageRate": 0.0302,
        "shortagePer100Beds": 0.61
      },
      "dominantLevel": "區域醫院",
      "dominantLevelShortage": 56.4,
      "topHospitals": [
        {
          "name": "為恭醫療財團法人為恭紀念醫院",
          "level": "區域醫院",
          "shortage": 17.5
        },
        {
          "name": "長庚醫療財團法人桃園長庚紀念醫院",
          "level": "區域醫院",
          "shortage": 11.3
        }
      ],
      "absoluteRank": 4,
      "intensityRank": 3
    },
    {
      "region": "中區",
      "hospitals": 103,
      "acuteHospitals": 89,
      "survey": {
        "current": 5955,
        "need": 6107,
        "shortage": 461,
        "fillRate": 0.9751
      },
      "structure": {
        "vacancyBacklog": 1684,
        "vacancyBacklogRate": 0.0646
      },
      "bedPressure": {
        "openBeds": 14800,
        "midRequired": 3160.3,
        "midShortage": 94.4,
        "midShortageRate": 0.0299,
        "shortagePer100Beds": 0.64
      },
      "dominantLevel": "區域醫院",
      "dominantLevelShortage": 59.4,
      "topHospitals": [
        {
          "name": "中國醫藥大學附設醫院",
          "level": "醫學中心",
          "shortage": 18
        },
        {
          "name": "衛生福利部豐原醫院",
          "level": "區域醫院",
          "shortage": 13.2
        }
      ],
      "absoluteRank": 3,
      "intensityRank": 4
    },
    {
      "region": "南區",
      "hospitals": 63,
      "acuteHospitals": 55,
      "survey": {
        "current": 4160,
        "need": 4587,
        "shortage": 550,
        "fillRate": 0.9069
      },
      "structure": {
        "vacancyBacklog": 1206,
        "vacancyBacklogRate": 0.0669
      },
      "bedPressure": {
        "openBeds": 10488,
        "midRequired": 2196.9,
        "midShortage": 29.1,
        "midShortageRate": 0.0132,
        "shortagePer100Beds": 0.28
      },
      "dominantLevel": "區域醫院",
      "dominantLevelShortage": 21.4,
      "topHospitals": [
        {
          "name": "衛生福利部臺南醫院",
          "level": "區域醫院",
          "shortage": 6
        },
        {
          "name": "佛教慈濟醫療財團法人大林慈濟醫院",
          "level": "醫學中心",
          "shortage": 5.6
        }
      ],
      "absoluteRank": 5,
      "intensityRank": 6
    },
    {
      "region": "高屏",
      "hospitals": 103,
      "acuteHospitals": 89,
      "survey": {
        "current": 7879,
        "need": 7644,
        "shortage": 539,
        "fillRate": 1.0307
      },
      "structure": {
        "vacancyBacklog": 2340,
        "vacancyBacklogRate": 0.1129
      },
      "bedPressure": {
        "openBeds": 12992,
        "midRequired": 2743.8,
        "midShortage": 157.1,
        "midShortageRate": 0.0573,
        "shortagePer100Beds": 1.21
      },
      "dominantLevel": "區域醫院",
      "dominantLevelShortage": 55.3,
      "topHospitals": [
        {
          "name": "財團法人私立高雄醫學大學附設高醫岡山醫院",
          "level": "地區醫院",
          "shortage": 43.9
        },
        {
          "name": "高雄榮民總醫院",
          "level": "醫學中心",
          "shortage": 23.6
        }
      ],
      "absoluteRank": 2,
      "intensityRank": 1
    },
    {
      "region": "東區",
      "hospitals": 17,
      "acuteHospitals": 16,
      "survey": {
        "current": 794,
        "need": 955,
        "shortage": 176,
        "fillRate": 0.8314
      },
      "structure": {
        "vacancyBacklog": 410,
        "vacancyBacklogRate": 0.1117
      },
      "bedPressure": {
        "openBeds": 1976,
        "midRequired": 407.2,
        "midShortage": 11,
        "midShortageRate": 0.027,
        "shortagePer100Beds": 0.56
      },
      "dominantLevel": "醫學中心",
      "dominantLevelShortage": 3.8,
      "topHospitals": [
        {
          "name": "佛教慈濟醫療財團法人花蓮慈濟醫院",
          "level": "醫學中心",
          "shortage": 3.8
        },
        {
          "name": "臺灣基督教門諾會醫療財團法人門諾醫院",
          "level": "區域醫院",
          "shortage": 3.2
        }
      ],
      "absoluteRank": 6,
      "intensityRank": 5
    }
  ],
  "regionalFocusCards": [
    {
      "title": "臺北 缺口量最大",
      "body": "臺北 的 acute 中推估缺口 160 人，主要壓力集中在 醫學中心。建議把跨院招募與關鍵單位補班優先放在此區。",
      "accent": "rust"
    },
    {
      "title": "高屏 缺口率最高",
      "body": "高屏 每 100 張急性開床約對應 1.2 名中推估缺口，是六區中最緊的班表壓力帶。",
      "accent": "ink"
    },
    {
      "title": "東區 survey 填補率最低",
      "body": "東區 目前 survey fill rate 為 83% ，即使量體較小，也代表補才、住宿與通勤支持要一起進場。",
      "accent": "teal"
    }
  ],
  "turnoverInsights": {
    "overview": {
      "actualEmployed": 124669,
      "fullTimeShare": 0.9644,
      "rnShare": 0.9607,
      "hires": 18020,
      "returnees": 2256,
      "newGraduatesHired": 5354,
      "turnover": 13234,
      "under3Months": 4203,
      "under3Share": 0.3176,
      "hireToTurnover": 1.362,
      "netRecruitment": 4786,
      "salaryRaiseResponseHospitals": 449,
      "salaryRaisedHospitals": 361,
      "salaryRaisedRate": 0.804,
      "averageRaiseAmount": 2459.6
    },
    "structureByLevel": [
      {
        "level": "醫學中心",
        "actualEmployed": 50470,
        "fullTimeShare": 0.9647,
        "rnShare": 0.985,
        "hireToTurnover": 1.365,
        "under3Share": 0.2595
      },
      {
        "level": "區域醫院",
        "actualEmployed": 48034,
        "fullTimeShare": 0.9688,
        "rnShare": 0.9652,
        "hireToTurnover": 1.384,
        "under3Share": 0.3019
      },
      {
        "level": "地區醫院",
        "actualEmployed": 26165,
        "fullTimeShare": 0.956,
        "rnShare": 0.9058,
        "hireToTurnover": 1.327,
        "under3Share": 0.4128
      }
    ],
    "salarySignals": {
      "targetBreakdown": [
        {
          "target": "「全體」護理人員(含新進人員)",
          "hospitals": 289
        },
        {
          "target": "「部分單位」護理人員(含新進人員)",
          "hospitals": 58
        },
        {
          "target": "「只有新進人員」調薪",
          "hospitals": 14
        }
      ],
      "unitTargets": [
        {
          "label": "一般急性病房",
          "hospitals": 42
        },
        {
          "label": "急診室",
          "hospitals": 28
        },
        {
          "label": "重症及加護病房",
          "hospitals": 21
        },
        {
          "label": "門診",
          "hospitals": 35
        }
      ]
    },
    "scopes": [
      {
        "key": "total",
        "label": "整體離職",
        "scope": "total",
        "actionableThemeTotal": 10184,
        "themeSignals": [
          {
            "theme": "職涯拉力",
            "value": 4090,
            "share": 0.4016
          },
          {
            "theme": "家庭生活",
            "value": 3061,
            "share": 0.3006
          },
          {
            "theme": "健康安全",
            "value": 1065,
            "share": 0.1046
          },
          {
            "theme": "工作設計",
            "value": 1049,
            "share": 0.103
          },
          {
            "theme": "薪酬",
            "value": 643,
            "share": 0.0631
          },
          {
            "theme": "組織氣候",
            "value": 276,
            "share": 0.0271
          }
        ],
        "reasonSignals": [
          {
            "key": "closure",
            "label": "系統歇業",
            "theme": "制度性退出",
            "actionable": false,
            "value": 14406
          },
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 3224
          },
          {
            "key": "other",
            "label": "其他問題",
            "theme": "未分類",
            "actionable": false,
            "value": 2199
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 1439
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 1018
          },
          {
            "key": "childcare",
            "label": "育嬰托育問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 912
          },
          {
            "key": "retirement",
            "label": "退休",
            "theme": "生命週期",
            "actionable": false,
            "value": 851
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 818
          },
          {
            "key": "commute",
            "label": "通勤距離",
            "theme": "家庭生活",
            "actionable": true,
            "value": 710
          },
          {
            "key": "salary",
            "label": "薪資問題",
            "theme": "薪酬",
            "actionable": true,
            "value": 643
          },
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 518
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 423
          },
          {
            "key": "belonging",
            "label": "沒有所屬感",
            "theme": "組織氣候",
            "actionable": true,
            "value": 110
          },
          {
            "key": "interaction",
            "label": "負向互動",
            "theme": "組織氣候",
            "actionable": true,
            "value": 110
          },
          {
            "key": "schedule",
            "label": "沒有彈性的工作排班",
            "theme": "工作設計",
            "actionable": true,
            "value": 108
          },
          {
            "key": "advancement",
            "label": "沒有進階的潛能",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 48
          },
          {
            "key": "unsafe",
            "label": "沒有安全的工作環境",
            "theme": "健康安全",
            "actionable": true,
            "value": 47
          },
          {
            "key": "participation",
            "label": "沒有工作的參與",
            "theme": "組織氣候",
            "actionable": true,
            "value": 37
          },
          {
            "key": "notValued",
            "label": "不被機構重視",
            "theme": "組織氣候",
            "actionable": true,
            "value": 19
          }
        ],
        "actionableReasons": [
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 3224
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 1439
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 1018
          },
          {
            "key": "childcare",
            "label": "育嬰托育問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 912
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 818
          },
          {
            "key": "commute",
            "label": "通勤距離",
            "theme": "家庭生活",
            "actionable": true,
            "value": 710
          }
        ],
        "attentionReasons": [
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 3224
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 1439
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 1018
          },
          {
            "key": "childcare",
            "label": "育嬰托育問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 912
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 818
          },
          {
            "key": "commute",
            "label": "通勤距離",
            "theme": "家庭生活",
            "actionable": true,
            "value": 710
          }
        ]
      },
      {
        "key": "under3",
        "label": "三個月內離職",
        "scope": "under3",
        "actionableThemeTotal": 3147,
        "themeSignals": [
          {
            "theme": "職涯拉力",
            "value": 1193,
            "share": 0.3791
          },
          {
            "theme": "工作設計",
            "value": 597,
            "share": 0.1897
          },
          {
            "theme": "家庭生活",
            "value": 561,
            "share": 0.1783
          },
          {
            "theme": "健康安全",
            "value": 345,
            "share": 0.1096
          },
          {
            "theme": "組織氣候",
            "value": 284,
            "share": 0.0902
          },
          {
            "theme": "薪酬",
            "value": 167,
            "share": 0.0531
          }
        ],
        "reasonSignals": [
          {
            "key": "closure",
            "label": "系統歇業",
            "theme": "制度性退出",
            "actionable": false,
            "value": 4643
          },
          {
            "key": "other",
            "label": "其他問題",
            "theme": "未分類",
            "actionable": false,
            "value": 1052
          },
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 959
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 325
          },
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 313
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 293
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 253
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 225
          },
          {
            "key": "commute",
            "label": "通勤距離",
            "theme": "家庭生活",
            "actionable": true,
            "value": 190
          },
          {
            "key": "salary",
            "label": "薪資問題",
            "theme": "薪酬",
            "actionable": true,
            "value": 167
          },
          {
            "key": "belonging",
            "label": "沒有所屬感",
            "theme": "組織氣候",
            "actionable": true,
            "value": 114
          },
          {
            "key": "childcare",
            "label": "育嬰托育問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 78
          },
          {
            "key": "interaction",
            "label": "負向互動",
            "theme": "組織氣候",
            "actionable": true,
            "value": 73
          },
          {
            "key": "participation",
            "label": "沒有工作的參與",
            "theme": "組織氣候",
            "actionable": true,
            "value": 51
          },
          {
            "key": "notValued",
            "label": "不被機構重視",
            "theme": "組織氣候",
            "actionable": true,
            "value": 46
          },
          {
            "key": "schedule",
            "label": "沒有彈性的工作排班",
            "theme": "工作設計",
            "actionable": true,
            "value": 31
          },
          {
            "key": "unsafe",
            "label": "沒有安全的工作環境",
            "theme": "健康安全",
            "actionable": true,
            "value": 20
          },
          {
            "key": "advancement",
            "label": "沒有進階的潛能",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 9
          },
          {
            "key": "retirement",
            "label": "退休",
            "theme": "生命週期",
            "actionable": false,
            "value": 4
          }
        ],
        "actionableReasons": [
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 959
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 325
          },
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 313
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 293
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 253
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 225
          }
        ],
        "attentionReasons": [
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 959
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 325
          },
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 313
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 293
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 253
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 225
          }
        ]
      },
      {
        "key": "newGrad",
        "label": "應屆離職",
        "scope": "newGrad",
        "actionableThemeTotal": 346,
        "themeSignals": [
          {
            "theme": "工作設計",
            "value": 124,
            "share": 0.3584
          },
          {
            "theme": "職涯拉力",
            "value": 100,
            "share": 0.289
          },
          {
            "theme": "健康安全",
            "value": 51,
            "share": 0.1474
          },
          {
            "theme": "家庭生活",
            "value": 49,
            "share": 0.1416
          },
          {
            "theme": "組織氣候",
            "value": 20,
            "share": 0.0578
          },
          {
            "theme": "薪酬",
            "value": 2,
            "share": 0.0058
          }
        ],
        "reasonSignals": [
          {
            "key": "other",
            "label": "其他問題",
            "theme": "未分類",
            "actionable": false,
            "value": 92
          },
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 81
          },
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 68
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 51
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 42
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 31
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 24
          },
          {
            "key": "commute",
            "label": "通勤距離",
            "theme": "家庭生活",
            "actionable": true,
            "value": 23
          },
          {
            "key": "belonging",
            "label": "沒有所屬感",
            "theme": "組織氣候",
            "actionable": true,
            "value": 15
          },
          {
            "key": "retirement",
            "label": "退休",
            "theme": "生命週期",
            "actionable": false,
            "value": 10
          },
          {
            "key": "interaction",
            "label": "負向互動",
            "theme": "組織氣候",
            "actionable": true,
            "value": 5
          },
          {
            "key": "salary",
            "label": "薪資問題",
            "theme": "薪酬",
            "actionable": true,
            "value": 2
          },
          {
            "key": "childcare",
            "label": "育嬰托育問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 2
          },
          {
            "key": "schedule",
            "label": "沒有彈性的工作排班",
            "theme": "工作設計",
            "actionable": true,
            "value": 1
          },
          {
            "key": "advancement",
            "label": "沒有進階的潛能",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 1
          },
          {
            "key": "closure",
            "label": "系統歇業",
            "theme": "制度性退出",
            "actionable": false,
            "value": 0
          },
          {
            "key": "notValued",
            "label": "不被機構重視",
            "theme": "組織氣候",
            "actionable": true,
            "value": 0
          },
          {
            "key": "unsafe",
            "label": "沒有安全的工作環境",
            "theme": "健康安全",
            "actionable": true,
            "value": 0
          },
          {
            "key": "participation",
            "label": "沒有工作的參與",
            "theme": "組織氣候",
            "actionable": true,
            "value": 0
          }
        ],
        "actionableReasons": [
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 81
          },
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 68
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 51
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 42
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 31
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 24
          }
        ],
        "attentionReasons": [
          {
            "key": "workload",
            "label": "無法管理的工作量",
            "theme": "工作設計",
            "actionable": true,
            "value": 81
          },
          {
            "key": "betterCareer",
            "label": "更好的職業",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 68
          },
          {
            "key": "health",
            "label": "健康狀況",
            "theme": "健康安全",
            "actionable": true,
            "value": 51
          },
          {
            "key": "workLife",
            "label": "工作-生活的不平衡",
            "theme": "工作設計",
            "actionable": true,
            "value": 42
          },
          {
            "key": "study",
            "label": "進修升學",
            "theme": "職涯拉力",
            "actionable": true,
            "value": 31
          },
          {
            "key": "familyCare",
            "label": "家庭照顧問題",
            "theme": "家庭生活",
            "actionable": true,
            "value": 24
          }
        ]
      }
    ],
    "recommendationCards": [
      {
        "title": "先處理新進三個月內的工作設計",
        "body": "全年 4,203 人次落在三個月內離職，且可介入原因以工作量、排班彈性與 work-life 為主，建議先改前三個月排班與支援配置。",
        "accent": "rust"
      },
      {
        "title": "整體留任要用職涯路徑對抗外部拉力",
        "body": "排除歇業與退休後，整體離職訊號仍以「更好的職業」最強，表示單靠補招不夠，還需要進階職涯、專長培育與晉升設計。",
        "accent": "ink"
      },
      {
        "title": "調薪已經普遍，但不能只靠加薪",
        "body": "361 家醫院回報已調薪，平均每月增加約 2,460 元；但薪資並不是最強的可介入驅動，代表薪酬必須和班表、職涯與支持系統一起搭配。",
        "accent": "teal"
      }
    ]
  },
  "topMidShortageHospitals": [
    {
      "code": "1307020025",
      "name": "財團法人私立高雄醫學大學附設高醫岡山醫院",
      "level": "地區醫院",
      "region": "高屏",
      "acuteOpenBeds": 350,
      "currentAcuteStaff": 37,
      "occupancy": 0.9490000000000001,
      "lowShortage": 0,
      "midShortage": 43.9,
      "highShortage": 48.3
    },
    {
      "code": "0401180014",
      "name": "國立台灣大學醫學院附設醫院",
      "level": "醫學中心",
      "region": "臺北",
      "acuteOpenBeds": 1679,
      "currentAcuteStaff": 628.1,
      "occupancy": 0.9129999999999999,
      "lowShortage": 30.4,
      "midShortage": 30.2,
      "highShortage": 59.7
    },
    {
      "code": "0602030026",
      "name": "高雄榮民總醫院",
      "level": "醫學中心",
      "region": "高屏",
      "acuteOpenBeds": 971,
      "currentAcuteStaff": 295.3,
      "occupancy": 0.851,
      "lowShortage": 23.6,
      "midShortage": 23.6,
      "highShortage": 62.7
    },
    {
      "code": "1317050017",
      "name": "中國醫藥大學附設醫院",
      "level": "醫學中心",
      "region": "中區",
      "acuteOpenBeds": 1285,
      "currentAcuteStaff": 352.7,
      "occupancy": 0.782,
      "lowShortage": 6.2,
      "midShortage": 18,
      "highShortage": 121.1
    },
    {
      "code": "1135050020",
      "name": "為恭醫療財團法人為恭紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "acuteOpenBeds": 340,
      "currentAcuteStaff": 52.2,
      "occupancy": 0.66,
      "lowShortage": 9.3,
      "midShortage": 17.5,
      "highShortage": 53.4
    },
    {
      "code": "1142120001",
      "name": "義大醫療財團法人義大醫院",
      "level": "醫學中心",
      "region": "高屏",
      "acuteOpenBeds": 900,
      "currentAcuteStaff": 154.7,
      "occupancy": 0.516,
      "lowShortage": 16.5,
      "midShortage": 16.5,
      "highShortage": 177.1
    },
    {
      "code": "1331040513",
      "name": "衛生福利部雙和醫院(委託臺北醫學大學興建經營)",
      "level": "醫學中心",
      "region": "臺北",
      "acuteOpenBeds": 800,
      "currentAcuteStaff": 211.5,
      "occupancy": 0.757,
      "lowShortage": 15.6,
      "midShortage": 15.6,
      "highShortage": 83.4
    },
    {
      "code": "1301170017",
      "name": "臺北醫學大學附設醫院",
      "level": "醫學中心",
      "region": "臺北",
      "acuteOpenBeds": 500,
      "currentAcuteStaff": 128.2,
      "occupancy": 0.741,
      "lowShortage": 13.8,
      "midShortage": 13.8,
      "highShortage": 56.1
    }
  ],
  "topOpenPressureHospitals": [
    {
      "code": "1307020025",
      "name": "財團法人私立高雄醫學大學附設高醫岡山醫院",
      "level": "地區醫院",
      "region": "高屏",
      "reportedBeds": 99,
      "acuteOpenBeds": 350,
      "openBedDelta": 251,
      "lowShortage": 0,
      "midShortage": 43.9,
      "openBedPressure": 43.9
    },
    {
      "code": "1231050017",
      "name": "天主教耕莘醫療財團法人耕莘醫院",
      "level": "地區醫院",
      "region": "臺北",
      "reportedBeds": 249,
      "acuteOpenBeds": 476,
      "openBedDelta": 227,
      "lowShortage": 0,
      "midShortage": 12.1,
      "openBedPressure": 12.1
    },
    {
      "code": "1317050017",
      "name": "中國醫藥大學附設醫院",
      "level": "醫學中心",
      "region": "中區",
      "reportedBeds": 1210,
      "acuteOpenBeds": 1285,
      "openBedDelta": 75,
      "lowShortage": 6.2,
      "midShortage": 18,
      "openBedPressure": 11.8
    },
    {
      "code": "0101090517",
      "name": "臺北市立聯合醫院",
      "level": "區域醫院",
      "region": "臺北",
      "reportedBeds": 27,
      "acuteOpenBeds": 453,
      "openBedDelta": 426,
      "lowShortage": 0,
      "midShortage": 10.8,
      "openBedPressure": 10.8
    },
    {
      "code": "1132071036",
      "name": "長庚醫療財團法人桃園長庚紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "reportedBeds": 99,
      "acuteOpenBeds": 149,
      "openBedDelta": 50,
      "lowShortage": 0.9,
      "midShortage": 11.3,
      "openBedPressure": 10.4
    },
    {
      "code": "1102110011",
      "name": "高雄市立小港醫院(委託財團法人私立高雄醫學大學經營)",
      "level": "區域醫院",
      "region": "高屏",
      "reportedBeds": 446,
      "acuteOpenBeds": 496,
      "openBedDelta": 50,
      "lowShortage": 1.6,
      "midShortage": 11.6,
      "openBedPressure": 10
    },
    {
      "code": "0536190011",
      "name": "國軍臺中總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "中區",
      "reportedBeds": 244,
      "acuteOpenBeds": 292,
      "openBedDelta": 48,
      "lowShortage": 0,
      "midShortage": 8.9,
      "openBedPressure": 8.9
    },
    {
      "code": "1135050020",
      "name": "為恭醫療財團法人為恭紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "reportedBeds": 300,
      "acuteOpenBeds": 340,
      "openBedDelta": 40,
      "lowShortage": 9.3,
      "midShortage": 17.5,
      "openBedPressure": 8.2
    }
  ],
  "strategyCards": [
    {
      "title": "區域醫院 是最先要補班的斷層帶",
      "body": "在「現行開床」情境下，區域醫院 仍缺 248 名三班平均護理人力，約占整體中推估缺口 48% 。",
      "accent": "rust"
    },
    {
      "title": "開床速度已經跑到報告期前面",
      "body": "402 家可對應急性一般病床資料的醫院中，現行開床總量比 113 年 12 月三班護病比檔多出 -547 床，等於把補人壓力直接往下一期班表推。",
      "accent": "ink"
    },
    {
      "title": "許可床位層還缺官方院級開放資料",
      "body": "這一版已完成 open-bed-based demand forecast，但急性一般病床許可數仍未找到可穩定串接的院級官方開放資料，因此尚未把 permit-bed layer 納入 high case。",
      "accent": "teal"
    }
  ],
  "dataQuality": {
    "permitBedsAvailable": false,
    "acuteRatioRows": 416,
    "acuteRatioMatchedHospitals": 395,
    "openInfoMatchedHospitals": 392,
    "notes": [
      "急性一般病床三班護病比資料採健保署「113年12月全民健康保險特約醫院於VPN登錄之各月份三班護病比」，本次實際對應調查檔 395 家醫院。",
      "衛福部醫院評鑑資訊專區的病床設施頁可穩定取得急性一般病床開放數；本次共補入 392 家醫院的現行開床數，其餘仍回退到健保申報床數。",
      "急性一般病床「許可數」尚未找到可穩定串接的院級官方開放資料，因此本版 high case 以『滿載開床』作為上緣，而不是『滿載許可床』。",
      "原始調查檔仍保留 459 家醫院的總人力、需求線與待招募數，可用來和 bed-based shortage 交叉比對，但兩者口徑並不完全相同。",
      "離職原因欄位為『人次訊號』且可複選，解讀上適合做驅動因子排序，不適合直接視為單一人員比例。",
      "調薪題項本次有效回覆 449 家醫院，其中 361 家回報已調薪。"
    ]
  },
  "hospitals": [
    {
      "code": "1305370013",
      "name": "臺南市立安南醫院-委託中國醫藥大學興建經營",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 138,
        "need": 231,
        "gap": -93,
        "vacancies": 120
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.586,
        "current": {
          "day": 44.4,
          "evening": 27.3,
          "night": 22.4,
          "total": 94.1
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 10.7,
          "night": 13.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.586,
          "occupiedBeds": 292.4,
          "required": {
            "day": 41.8,
            "evening": 26.6,
            "night": 22.5,
            "total": 90.8
          },
          "signedGap": {
            "day": -2.6,
            "evening": -0.7,
            "night": 0.1,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.586,
          "occupiedBeds": 292.4,
          "required": {
            "day": 41.8,
            "evening": 26.6,
            "night": 22.5,
            "total": 90.8
          },
          "signedGap": {
            "day": -2.6,
            "evening": -0.7,
            "night": 0.1,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 71.3,
            "evening": 45.4,
            "night": 38.4,
            "total": 155
          },
          "signedGap": {
            "day": 26.9,
            "evening": 18.1,
            "night": 16,
            "total": 60.9
          },
          "shortage": {
            "day": 26.9,
            "evening": 18.1,
            "night": 16,
            "total": 60.9
          }
        }
      }
    },
    {
      "code": "1331040513",
      "name": "衛生福利部雙和醫院(委託臺北醫學大學興建經營)",
      "level": "醫學中心",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 352,
        "need": 295,
        "gap": 57,
        "vacancies": 140
      },
      "acute": {
        "reportedBeds": 800,
        "occupancy": 0.757,
        "current": {
          "day": 104.8,
          "evening": 60.7,
          "night": 46,
          "total": 211.5
        },
        "actualRatio": {
          "day": 5.8,
          "evening": 10,
          "night": 13.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 800,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 800,
          "occupancy": 0.757,
          "occupiedBeds": 605.6,
          "required": {
            "day": 100.9,
            "evening": 67.3,
            "night": 55.1,
            "total": 223.3
          },
          "signedGap": {
            "day": -3.9,
            "evening": 6.6,
            "night": 9.1,
            "total": 11.8
          },
          "shortage": {
            "day": 0,
            "evening": 6.6,
            "night": 9.1,
            "total": 15.6
          }
        },
        "mid": {
          "bedBase": 800,
          "occupancy": 0.757,
          "occupiedBeds": 605.6,
          "required": {
            "day": 100.9,
            "evening": 67.3,
            "night": 55.1,
            "total": 223.3
          },
          "signedGap": {
            "day": -3.9,
            "evening": 6.6,
            "night": 9.1,
            "total": 11.8
          },
          "shortage": {
            "day": 0,
            "evening": 6.6,
            "night": 9.1,
            "total": 15.6
          }
        },
        "high": {
          "bedBase": 800,
          "occupancy": 1,
          "occupiedBeds": 800,
          "required": {
            "day": 133.3,
            "evening": 88.9,
            "night": 72.7,
            "total": 294.9
          },
          "signedGap": {
            "day": 28.5,
            "evening": 28.2,
            "night": 26.7,
            "total": 83.4
          },
          "shortage": {
            "day": 28.5,
            "evening": 28.2,
            "night": 26.7,
            "total": 83.4
          }
        }
      }
    },
    {
      "code": "1302050014",
      "name": "財團法人私立高雄醫學大學附設中和紀念醫院",
      "level": "醫學中心",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 661,
        "need": 672,
        "gap": -11,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 1200,
        "occupancy": 0.937,
        "current": {
          "day": 216,
          "evening": 123.5,
          "night": 90.5,
          "total": 430
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 9.1,
          "night": 12.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 1200,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 1200,
          "occupancy": 0.937,
          "occupiedBeds": 1124.4,
          "required": {
            "day": 187.4,
            "evening": 124.9,
            "night": 102.2,
            "total": 414.6
          },
          "signedGap": {
            "day": -28.6,
            "evening": 1.4,
            "night": 11.7,
            "total": -15.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.4,
            "night": 11.7,
            "total": 13.2
          }
        },
        "mid": {
          "bedBase": 1200,
          "occupancy": 0.937,
          "occupiedBeds": 1124.4,
          "required": {
            "day": 187.4,
            "evening": 124.9,
            "night": 102.2,
            "total": 414.6
          },
          "signedGap": {
            "day": -28.6,
            "evening": 1.4,
            "night": 11.7,
            "total": -15.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.4,
            "night": 11.7,
            "total": 13.2
          }
        },
        "high": {
          "bedBase": 1200,
          "occupancy": 1,
          "occupiedBeds": 1200,
          "required": {
            "day": 200,
            "evening": 133.3,
            "night": 109.1,
            "total": 442.4
          },
          "signedGap": {
            "day": -16,
            "evening": 9.8,
            "night": 18.6,
            "total": 12.4
          },
          "shortage": {
            "day": 0,
            "evening": 9.8,
            "night": 18.6,
            "total": 28.4
          }
        }
      }
    },
    {
      "code": "1331160010",
      "name": "輔仁大學學校財團法人輔仁大學附設醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 35,
        "need": 38,
        "gap": -3,
        "vacancies": 199
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.6809999999999999,
        "current": {
          "day": 49,
          "evening": 32,
          "night": 26,
          "total": 107
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 10.6,
          "night": 13.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.681,
          "occupiedBeds": 339.8,
          "required": {
            "day": 48.5,
            "evening": 30.9,
            "night": 26.1,
            "total": 105.6
          },
          "signedGap": {
            "day": -0.5,
            "evening": -1.1,
            "night": 0.1,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.681,
          "occupiedBeds": 339.8,
          "required": {
            "day": 48.5,
            "evening": 30.9,
            "night": 26.1,
            "total": 105.6
          },
          "signedGap": {
            "day": -0.5,
            "evening": -1.1,
            "night": 0.1,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 71.3,
            "evening": 45.4,
            "night": 38.4,
            "total": 155
          },
          "signedGap": {
            "day": 22.3,
            "evening": 13.4,
            "night": 12.4,
            "total": 48
          },
          "shortage": {
            "day": 22.3,
            "evening": 13.4,
            "night": 12.4,
            "total": 48
          }
        }
      }
    },
    {
      "code": "1343030018",
      "name": "輔英科技大學附設醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 300,
        "need": 323,
        "gap": -23,
        "vacancies": 73
      },
      "acute": {
        "reportedBeds": 266,
        "occupancy": 0.652,
        "current": {
          "day": 21.6,
          "evening": 18.3,
          "night": 12.3,
          "total": 52.2
        },
        "actualRatio": {
          "day": 8,
          "evening": 9.5,
          "night": 14.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 290,
      "openBedDelta": 24,
      "scenarios": {
        "low": {
          "bedBase": 266,
          "occupancy": 0.652,
          "occupiedBeds": 173.4,
          "required": {
            "day": 24.8,
            "evening": 15.8,
            "night": 13.3,
            "total": 53.9
          },
          "signedGap": {
            "day": 3.2,
            "evening": -2.5,
            "night": 1,
            "total": 1.7
          },
          "shortage": {
            "day": 3.2,
            "evening": 0,
            "night": 1,
            "total": 4.2
          }
        },
        "mid": {
          "bedBase": 290,
          "occupancy": 0.652,
          "occupiedBeds": 189.1,
          "required": {
            "day": 27,
            "evening": 17.2,
            "night": 14.5,
            "total": 58.7
          },
          "signedGap": {
            "day": 5.4,
            "evening": -1.1,
            "night": 2.2,
            "total": 6.5
          },
          "shortage": {
            "day": 5.4,
            "evening": 0,
            "night": 2.2,
            "total": 7.7
          }
        },
        "high": {
          "bedBase": 290,
          "occupancy": 1,
          "occupiedBeds": 290,
          "required": {
            "day": 41.4,
            "evening": 26.4,
            "night": 22.3,
            "total": 90.1
          },
          "signedGap": {
            "day": 19.8,
            "evening": 8.1,
            "night": 10,
            "total": 37.9
          },
          "shortage": {
            "day": 19.8,
            "evening": 8.1,
            "night": 10,
            "total": 37.9
          }
        }
      }
    },
    {
      "code": "1531071030",
      "name": "仁愛醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 33,
        "need": 36,
        "gap": -3,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 132,
        "occupancy": 0.722,
        "current": {
          "day": 11.9,
          "evening": 6.4,
          "night": 6,
          "total": 24.3
        },
        "actualRatio": {
          "day": 8,
          "evening": 14.9,
          "night": 15.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 132,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 132,
          "occupancy": 0.722,
          "occupiedBeds": 95.3,
          "required": {
            "day": 9.5,
            "evening": 7.3,
            "night": 6.4,
            "total": 23.2
          },
          "signedGap": {
            "day": -2.4,
            "evening": 0.9,
            "night": 0.4,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.9,
            "night": 0.4,
            "total": 1.3
          }
        },
        "mid": {
          "bedBase": 132,
          "occupancy": 0.722,
          "occupiedBeds": 95.3,
          "required": {
            "day": 9.5,
            "evening": 7.3,
            "night": 6.4,
            "total": 23.2
          },
          "signedGap": {
            "day": -2.4,
            "evening": 0.9,
            "night": 0.4,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.9,
            "night": 0.4,
            "total": 1.3
          }
        },
        "high": {
          "bedBase": 132,
          "occupancy": 1,
          "occupiedBeds": 132,
          "required": {
            "day": 13.2,
            "evening": 10.2,
            "night": 8.8,
            "total": 32.2
          },
          "signedGap": {
            "day": 1.3,
            "evening": 3.8,
            "night": 2.8,
            "total": 7.9
          },
          "shortage": {
            "day": 1.3,
            "evening": 3.8,
            "night": 2.8,
            "total": 7.9
          }
        }
      }
    },
    {
      "code": "1502040021",
      "name": "健仁醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 50,
        "need": 52,
        "gap": -2,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 120,
        "occupancy": 0.713,
        "current": {
          "day": 13.9,
          "evening": 8,
          "night": 8,
          "total": 29.9
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 10.7,
          "night": 10.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 120,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 120,
          "occupancy": 0.713,
          "occupiedBeds": 85.6,
          "required": {
            "day": 8.6,
            "evening": 6.6,
            "night": 5.7,
            "total": 20.8
          },
          "signedGap": {
            "day": -5.3,
            "evening": -1.4,
            "night": -2.3,
            "total": -9.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 120,
          "occupancy": 0.713,
          "occupiedBeds": 85.6,
          "required": {
            "day": 8.6,
            "evening": 6.6,
            "night": 5.7,
            "total": 20.8
          },
          "signedGap": {
            "day": -5.3,
            "evening": -1.4,
            "night": -2.3,
            "total": -9.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 120,
          "occupancy": 1,
          "occupiedBeds": 120,
          "required": {
            "day": 12,
            "evening": 9.2,
            "night": 8,
            "total": 29.2
          },
          "signedGap": {
            "day": -1.9,
            "evening": 1.2,
            "night": 0,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 1.2,
            "night": 0,
            "total": 1.2
          }
        }
      }
    },
    {
      "code": "1512011185",
      "name": "南門綜合醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 20,
        "need": 22,
        "gap": -2,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 73,
        "occupancy": 0.636,
        "current": {
          "day": 4,
          "evening": 4,
          "night": 4,
          "total": 12
        },
        "actualRatio": {
          "day": 11.6,
          "evening": 11.6,
          "night": 11.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 73,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 73,
          "occupancy": 0.636,
          "occupiedBeds": 46.4,
          "required": {
            "day": 4.6,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.3
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.4,
            "night": -0.9,
            "total": -0.7
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 73,
          "occupancy": 0.636,
          "occupiedBeds": 46.4,
          "required": {
            "day": 4.6,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.3
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.4,
            "night": -0.9,
            "total": -0.7
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 73,
          "occupancy": 1,
          "occupiedBeds": 73,
          "required": {
            "day": 7.3,
            "evening": 5.6,
            "night": 4.9,
            "total": 17.8
          },
          "signedGap": {
            "day": 3.3,
            "evening": 1.6,
            "night": 0.9,
            "total": 5.8
          },
          "shortage": {
            "day": 3.3,
            "evening": 1.6,
            "night": 0.9,
            "total": 5.8
          }
        }
      }
    },
    {
      "code": "1501010010",
      "name": "博仁綜合醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 36,
        "need": 47,
        "gap": -11,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 134,
        "occupancy": 0.425,
        "current": {
          "day": 4.8,
          "evening": 4,
          "night": 4,
          "total": 12.8
        },
        "actualRatio": {
          "day": 11.9,
          "evening": 14.2,
          "night": 14.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 134,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 134,
          "occupancy": 0.425,
          "occupiedBeds": 57,
          "required": {
            "day": 5.7,
            "evening": 4.4,
            "night": 3.8,
            "total": 13.9
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.4,
            "night": -0.2,
            "total": 1.1
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.4,
            "night": 0,
            "total": 1.3
          }
        },
        "mid": {
          "bedBase": 134,
          "occupancy": 0.425,
          "occupiedBeds": 57,
          "required": {
            "day": 5.7,
            "evening": 4.4,
            "night": 3.8,
            "total": 13.9
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.4,
            "night": -0.2,
            "total": 1.1
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.4,
            "night": 0,
            "total": 1.3
          }
        },
        "high": {
          "bedBase": 134,
          "occupancy": 1,
          "occupiedBeds": 134,
          "required": {
            "day": 13.4,
            "evening": 10.3,
            "night": 8.9,
            "total": 32.6
          },
          "signedGap": {
            "day": 8.6,
            "evening": 6.3,
            "night": 4.9,
            "total": 19.8
          },
          "shortage": {
            "day": 8.6,
            "evening": 6.3,
            "night": 4.9,
            "total": 19.8
          }
        }
      }
    },
    {
      "code": "1543010109",
      "name": "國仁醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 26,
        "need": 60,
        "gap": -34,
        "vacancies": 34
      },
      "acute": {
        "reportedBeds": 226,
        "occupancy": 0.302,
        "current": {
          "day": 10,
          "evening": 5.8,
          "night": 5.2,
          "total": 21
        },
        "actualRatio": {
          "day": 6.8,
          "evening": 11.8,
          "night": 13.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 99,
      "openBedDelta": -127,
      "scenarios": {
        "low": {
          "bedBase": 226,
          "occupancy": 0.302,
          "occupiedBeds": 68.3,
          "required": {
            "day": 6.8,
            "evening": 5.3,
            "night": 4.6,
            "total": 16.6
          },
          "signedGap": {
            "day": -3.2,
            "evening": -0.5,
            "night": -0.6,
            "total": -4.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.302,
          "occupiedBeds": 29.9,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": -7,
            "evening": -3.5,
            "night": -3.2,
            "total": -13.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": -0.1,
            "evening": 1.8,
            "night": 1.4,
            "total": 3.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.8,
            "night": 1.4,
            "total": 3.2
          }
        }
      }
    },
    {
      "code": "1532100049",
      "name": "聯新國際醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 134,
        "need": 136,
        "gap": -2,
        "vacancies": 153
      },
      "acute": {
        "reportedBeds": 400,
        "occupancy": 0.705,
        "current": {
          "day": 38,
          "evening": 26.1,
          "night": 20.1,
          "total": 84.2
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 10.8,
          "night": 14
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 400,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 400,
          "occupancy": 0.705,
          "occupiedBeds": 282,
          "required": {
            "day": 40.3,
            "evening": 25.6,
            "night": 21.7,
            "total": 87.6
          },
          "signedGap": {
            "day": 2.3,
            "evening": -0.5,
            "night": 1.6,
            "total": 3.4
          },
          "shortage": {
            "day": 2.3,
            "evening": 0,
            "night": 1.6,
            "total": 3.9
          }
        },
        "mid": {
          "bedBase": 400,
          "occupancy": 0.705,
          "occupiedBeds": 282,
          "required": {
            "day": 40.3,
            "evening": 25.6,
            "night": 21.7,
            "total": 87.6
          },
          "signedGap": {
            "day": 2.3,
            "evening": -0.5,
            "night": 1.6,
            "total": 3.4
          },
          "shortage": {
            "day": 2.3,
            "evening": 0,
            "night": 1.6,
            "total": 3.9
          }
        },
        "high": {
          "bedBase": 400,
          "occupancy": 1,
          "occupiedBeds": 400,
          "required": {
            "day": 57.1,
            "evening": 36.4,
            "night": 30.8,
            "total": 124.3
          },
          "signedGap": {
            "day": 19.1,
            "evening": 10.3,
            "night": 10.7,
            "total": 40.1
          },
          "shortage": {
            "day": 19.1,
            "evening": 10.3,
            "night": 10.7,
            "total": 40.1
          }
        }
      }
    },
    {
      "code": "1535010051",
      "name": "大千綜合醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 87,
        "need": 90,
        "gap": -3,
        "vacancies": 70
      },
      "acute": {
        "reportedBeds": 249,
        "occupancy": 0.79,
        "current": {
          "day": 27,
          "evening": 14,
          "night": 13,
          "total": 54
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 14.1,
          "night": 15.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 249,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 249,
          "occupancy": 0.79,
          "occupiedBeds": 196.7,
          "required": {
            "day": 19.7,
            "evening": 15.1,
            "night": 13.1,
            "total": 47.9
          },
          "signedGap": {
            "day": -7.3,
            "evening": 1.1,
            "night": 0.1,
            "total": -6.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 0.1,
            "total": 1.2
          }
        },
        "mid": {
          "bedBase": 249,
          "occupancy": 0.79,
          "occupiedBeds": 196.7,
          "required": {
            "day": 19.7,
            "evening": 15.1,
            "night": 13.1,
            "total": 47.9
          },
          "signedGap": {
            "day": -7.3,
            "evening": 1.1,
            "night": 0.1,
            "total": -6.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 0.1,
            "total": 1.2
          }
        },
        "high": {
          "bedBase": 249,
          "occupancy": 1,
          "occupiedBeds": 249,
          "required": {
            "day": 24.9,
            "evening": 19.2,
            "night": 16.6,
            "total": 60.7
          },
          "signedGap": {
            "day": -2.1,
            "evening": 5.2,
            "night": 3.6,
            "total": 6.7
          },
          "shortage": {
            "day": 0,
            "evening": 5.2,
            "night": 3.6,
            "total": 8.8
          }
        }
      }
    },
    {
      "code": "1532040066",
      "name": "怡仁綜合醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 150,
        "occupancy": 0.586,
        "current": {
          "day": 11.9,
          "evening": 9,
          "night": 7.1,
          "total": 28
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 9.8,
          "night": 12.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 150,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 150,
          "occupancy": 0.586,
          "occupiedBeds": 87.9,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": -3.1,
            "evening": -2.2,
            "night": -1.2,
            "total": -6.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 150,
          "occupancy": 0.586,
          "occupiedBeds": 87.9,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": -3.1,
            "evening": -2.2,
            "night": -1.2,
            "total": -6.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 150,
          "occupancy": 1,
          "occupiedBeds": 150,
          "required": {
            "day": 15,
            "evening": 11.5,
            "night": 10,
            "total": 36.5
          },
          "signedGap": {
            "day": 3.1,
            "evening": 2.5,
            "night": 2.9,
            "total": 8.5
          },
          "shortage": {
            "day": 3.1,
            "evening": 2.5,
            "night": 2.9,
            "total": 8.5
          }
        }
      }
    },
    {
      "code": "1532011154",
      "name": "敏盛綜合醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 71,
        "need": 110,
        "gap": -39,
        "vacancies": 135
      },
      "acute": {
        "reportedBeds": 455,
        "occupancy": 0.49,
        "current": {
          "day": 29,
          "evening": 19,
          "night": 16,
          "total": 64
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 11.7,
          "night": 13.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 455,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 455,
          "occupancy": 0.49,
          "occupiedBeds": 223,
          "required": {
            "day": 31.9,
            "evening": 20.3,
            "night": 17.2,
            "total": 69.3
          },
          "signedGap": {
            "day": 2.8,
            "evening": 1.3,
            "night": 1.1,
            "total": 5.3
          },
          "shortage": {
            "day": 2.8,
            "evening": 1.3,
            "night": 1.1,
            "total": 5.3
          }
        },
        "mid": {
          "bedBase": 455,
          "occupancy": 0.49,
          "occupiedBeds": 223,
          "required": {
            "day": 31.9,
            "evening": 20.3,
            "night": 17.2,
            "total": 69.3
          },
          "signedGap": {
            "day": 2.8,
            "evening": 1.3,
            "night": 1.1,
            "total": 5.3
          },
          "shortage": {
            "day": 2.8,
            "evening": 1.3,
            "night": 1.1,
            "total": 5.3
          }
        },
        "high": {
          "bedBase": 455,
          "occupancy": 1,
          "occupiedBeds": 455,
          "required": {
            "day": 65,
            "evening": 41.4,
            "night": 35,
            "total": 141.4
          },
          "signedGap": {
            "day": 36,
            "evening": 22.4,
            "night": 19,
            "total": 77.4
          },
          "shortage": {
            "day": 36,
            "evening": 22.4,
            "night": 19,
            "total": 77.4
          }
        }
      }
    },
    {
      "code": "1538030037",
      "name": "曾漢棋綜合醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 35,
        "occupancy": 0.24,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 4.2,
          "evening": 4.2,
          "night": 4.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": -15,
      "scenarios": {
        "low": {
          "bedBase": 35,
          "occupancy": 0.24,
          "occupiedBeds": 8.4,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.6,
            "total": 2
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.4,
            "night": -1.4,
            "total": -4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.24,
          "occupiedBeds": 4.8,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -1.7,
            "total": -4.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1531010279",
      "name": "板橋中興醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 74,
        "occupancy": 0.647,
        "current": {
          "day": 6,
          "evening": 5,
          "night": 4,
          "total": 15
        },
        "actualRatio": {
          "day": 8,
          "evening": 9.6,
          "night": 12
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 50,
      "openBedDelta": -24,
      "scenarios": {
        "low": {
          "bedBase": 74,
          "occupancy": 0.647,
          "occupiedBeds": 47.9,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.3,
            "night": -0.8,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 50,
          "occupancy": 0.647,
          "occupiedBeds": 32.4,
          "required": {
            "day": 3.2,
            "evening": 2.5,
            "night": 2.2,
            "total": 7.9
          },
          "signedGap": {
            "day": -2.8,
            "evening": -2.5,
            "night": -1.8,
            "total": -7.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 50,
          "occupancy": 1,
          "occupiedBeds": 50,
          "required": {
            "day": 5,
            "evening": 3.8,
            "night": 3.3,
            "total": 12.2
          },
          "signedGap": {
            "day": -1,
            "evening": -1.2,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1536100081",
      "name": "清泉醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 27,
        "need": 45,
        "gap": -18,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 137,
        "occupancy": 0.38299999999999995,
        "current": {
          "day": 5.4,
          "evening": 4.1,
          "night": 4.1,
          "total": 13.6
        },
        "actualRatio": {
          "day": 9.7,
          "evening": 12.8,
          "night": 12.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 137,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 137,
          "occupancy": 0.383,
          "occupiedBeds": 52.5,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.5,
            "total": 12.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.1,
            "night": -0.6,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 137,
          "occupancy": 0.383,
          "occupiedBeds": 52.5,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.5,
            "total": 12.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.1,
            "night": -0.6,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 137,
          "occupancy": 1,
          "occupiedBeds": 137,
          "required": {
            "day": 13.7,
            "evening": 10.5,
            "night": 9.1,
            "total": 33.4
          },
          "signedGap": {
            "day": 8.3,
            "evening": 6.4,
            "night": 5,
            "total": 19.8
          },
          "shortage": {
            "day": 8.3,
            "evening": 6.4,
            "night": 5,
            "total": 19.8
          }
        }
      }
    },
    {
      "code": "1517011112",
      "name": "澄清綜合醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 88,
        "need": 119,
        "gap": -31,
        "vacancies": 25
      },
      "acute": {
        "reportedBeds": 249,
        "occupancy": 0.664,
        "current": {
          "day": 22,
          "evening": 13.5,
          "night": 10,
          "total": 45.5
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 12.2,
          "night": 16.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 249,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 249,
          "occupancy": 0.664,
          "occupiedBeds": 165.3,
          "required": {
            "day": 23.6,
            "evening": 15,
            "night": 12.7,
            "total": 51.4
          },
          "signedGap": {
            "day": 1.6,
            "evening": 1.5,
            "night": 2.7,
            "total": 5.9
          },
          "shortage": {
            "day": 1.6,
            "evening": 1.5,
            "night": 2.7,
            "total": 5.9
          }
        },
        "mid": {
          "bedBase": 249,
          "occupancy": 0.664,
          "occupiedBeds": 165.3,
          "required": {
            "day": 23.6,
            "evening": 15,
            "night": 12.7,
            "total": 51.4
          },
          "signedGap": {
            "day": 1.6,
            "evening": 1.5,
            "night": 2.7,
            "total": 5.9
          },
          "shortage": {
            "day": 1.6,
            "evening": 1.5,
            "night": 2.7,
            "total": 5.9
          }
        },
        "high": {
          "bedBase": 249,
          "occupancy": 1,
          "occupiedBeds": 249,
          "required": {
            "day": 35.6,
            "evening": 22.6,
            "night": 19.2,
            "total": 77.4
          },
          "signedGap": {
            "day": 13.6,
            "evening": 9.1,
            "night": 9.2,
            "total": 31.9
          },
          "shortage": {
            "day": 13.6,
            "evening": 9.1,
            "night": 9.2,
            "total": 31.9
          }
        }
      }
    },
    {
      "code": "1517061032",
      "name": "澄清綜合醫院中港分院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 183,
        "need": 189,
        "gap": -6,
        "vacancies": 26
      },
      "acute": {
        "reportedBeds": 500,
        "occupancy": 0.696,
        "current": {
          "day": 48.5,
          "evening": 37,
          "night": 27,
          "total": 112.5
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 9.4,
          "night": 12.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 499,
      "openBedDelta": -1,
      "scenarios": {
        "low": {
          "bedBase": 500,
          "occupancy": 0.696,
          "occupiedBeds": 348,
          "required": {
            "day": 49.7,
            "evening": 31.6,
            "night": 26.8,
            "total": 108.1
          },
          "signedGap": {
            "day": 1.2,
            "evening": -5.4,
            "night": -0.2,
            "total": -4.4
          },
          "shortage": {
            "day": 1.2,
            "evening": 0,
            "night": 0,
            "total": 1.2
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.696,
          "occupiedBeds": 347.3,
          "required": {
            "day": 49.6,
            "evening": 31.6,
            "night": 26.7,
            "total": 107.9
          },
          "signedGap": {
            "day": 1.1,
            "evening": -5.4,
            "night": -0.3,
            "total": -4.6
          },
          "shortage": {
            "day": 1.1,
            "evening": 0,
            "night": 0,
            "total": 1.1
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 71.3,
            "evening": 45.4,
            "night": 38.4,
            "total": 155
          },
          "signedGap": {
            "day": 22.8,
            "evening": 8.4,
            "night": 11.4,
            "total": 42.5
          },
          "shortage": {
            "day": 22.8,
            "evening": 8.4,
            "night": 11.4,
            "total": 42.5
          }
        }
      }
    },
    {
      "code": "1536190076",
      "name": "賢德醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 149,
        "need": 149,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 222,
        "occupancy": 0.486,
        "current": {
          "day": 18,
          "evening": 10,
          "night": 10,
          "total": 38
        },
        "actualRatio": {
          "day": 6,
          "evening": 10.8,
          "night": 10.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 222,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 222,
          "occupancy": 0.486,
          "occupiedBeds": 107.9,
          "required": {
            "day": 10.8,
            "evening": 8.3,
            "night": 7.2,
            "total": 26.3
          },
          "signedGap": {
            "day": -7.2,
            "evening": -1.7,
            "night": -2.8,
            "total": -11.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 222,
          "occupancy": 0.486,
          "occupiedBeds": 107.9,
          "required": {
            "day": 10.8,
            "evening": 8.3,
            "night": 7.2,
            "total": 26.3
          },
          "signedGap": {
            "day": -7.2,
            "evening": -1.7,
            "night": -2.8,
            "total": -11.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 222,
          "occupancy": 1,
          "occupiedBeds": 222,
          "required": {
            "day": 22.2,
            "evening": 17.1,
            "night": 14.8,
            "total": 54.1
          },
          "signedGap": {
            "day": 4.2,
            "evening": 7.1,
            "night": 4.8,
            "total": 16.1
          },
          "shortage": {
            "day": 4.2,
            "evening": 7.1,
            "night": 4.8,
            "total": 16.1
          }
        }
      }
    },
    {
      "code": "1521031104",
      "name": "郭綜合醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 56,
        "need": 61,
        "gap": -5,
        "vacancies": 19
      },
      "acute": {
        "reportedBeds": 236,
        "occupancy": 0.41600000000000004,
        "current": {
          "day": 13.1,
          "evening": 7.9,
          "night": 7.9,
          "total": 28.9
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 12.4,
          "night": 12.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 236,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 236,
          "occupancy": 0.416,
          "occupiedBeds": 98.2,
          "required": {
            "day": 9.8,
            "evening": 7.6,
            "night": 6.5,
            "total": 23.9
          },
          "signedGap": {
            "day": -3.3,
            "evening": -0.3,
            "night": -1.4,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 236,
          "occupancy": 0.416,
          "occupiedBeds": 98.2,
          "required": {
            "day": 9.8,
            "evening": 7.6,
            "night": 6.5,
            "total": 23.9
          },
          "signedGap": {
            "day": -3.3,
            "evening": -0.3,
            "night": -1.4,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 236,
          "occupancy": 1,
          "occupiedBeds": 236,
          "required": {
            "day": 23.6,
            "evening": 18.2,
            "night": 15.7,
            "total": 57.5
          },
          "signedGap": {
            "day": 10.5,
            "evening": 10.3,
            "night": 7.8,
            "total": 28.6
          },
          "shortage": {
            "day": 10.5,
            "evening": 10.3,
            "night": 7.8,
            "total": 28.6
          }
        }
      }
    },
    {
      "code": "1136200015",
      "name": "仁愛醫療財團法人大里仁愛醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 110,
        "need": 98,
        "gap": 12,
        "vacancies": 25
      },
      "acute": {
        "reportedBeds": 488,
        "occupancy": 0.501,
        "current": {
          "day": 36.9,
          "evening": 23.2,
          "night": 19.7,
          "total": 79.8
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 10.5,
          "night": 12.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 320,
      "openBedDelta": -168,
      "scenarios": {
        "low": {
          "bedBase": 488,
          "occupancy": 0.501,
          "occupiedBeds": 244.5,
          "required": {
            "day": 34.9,
            "evening": 22.2,
            "night": 18.8,
            "total": 76
          },
          "signedGap": {
            "day": -2,
            "evening": -1,
            "night": -0.9,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 320,
          "occupancy": 0.501,
          "occupiedBeds": 160.3,
          "required": {
            "day": 22.9,
            "evening": 14.6,
            "night": 12.3,
            "total": 49.8
          },
          "signedGap": {
            "day": -14,
            "evening": -8.6,
            "night": -7.4,
            "total": -30
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 320,
          "occupancy": 1,
          "occupiedBeds": 320,
          "required": {
            "day": 45.7,
            "evening": 29.1,
            "night": 24.6,
            "total": 99.4
          },
          "signedGap": {
            "day": 8.8,
            "evening": 5.9,
            "night": 4.9,
            "total": 19.6
          },
          "shortage": {
            "day": 8.8,
            "evening": 5.9,
            "night": 4.9,
            "total": 19.6
          }
        }
      }
    },
    {
      "code": "1136090519",
      "name": "佛教慈濟醫療財團法人台中慈濟醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 212,
        "need": 209,
        "gap": 3,
        "vacancies": 160
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.789,
        "current": {
          "day": 56.6,
          "evening": 35.9,
          "night": 30.3,
          "total": 122.8
        },
        "actualRatio": {
          "day": 7,
          "evening": 11,
          "night": 13
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.789,
          "occupiedBeds": 393.7,
          "required": {
            "day": 56.2,
            "evening": 35.8,
            "night": 30.3,
            "total": 122.3
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.1,
            "night": 0,
            "total": -0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.789,
          "occupiedBeds": 393.7,
          "required": {
            "day": 56.2,
            "evening": 35.8,
            "night": 30.3,
            "total": 122.3
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.1,
            "night": 0,
            "total": -0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 71.3,
            "evening": 45.4,
            "night": 38.4,
            "total": 155
          },
          "signedGap": {
            "day": 14.7,
            "evening": 9.5,
            "night": 8.1,
            "total": 32.2
          },
          "shortage": {
            "day": 14.7,
            "evening": 9.5,
            "night": 8.1,
            "total": 32.2
          }
        }
      }
    },
    {
      "code": "1131050515",
      "name": "佛教慈濟醫療財團法人台北慈濟醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 225,
        "need": 277,
        "gap": -52,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.7609999999999999,
        "current": {
          "day": 70.4,
          "evening": 40.4,
          "night": 29.1,
          "total": 139.9
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 9.4,
          "night": 13
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.761,
          "occupiedBeds": 379.7,
          "required": {
            "day": 63.3,
            "evening": 42.2,
            "night": 34.5,
            "total": 140
          },
          "signedGap": {
            "day": -7.1,
            "evening": 1.8,
            "night": 5.4,
            "total": 0.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.8,
            "night": 5.4,
            "total": 7.2
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.761,
          "occupiedBeds": 379.7,
          "required": {
            "day": 63.3,
            "evening": 42.2,
            "night": 34.5,
            "total": 140
          },
          "signedGap": {
            "day": -7.1,
            "evening": 1.8,
            "night": 5.4,
            "total": 0.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.8,
            "night": 5.4,
            "total": 7.2
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 83.2,
            "evening": 55.4,
            "night": 45.4,
            "total": 184
          },
          "signedGap": {
            "day": 12.8,
            "evening": 15,
            "night": 16.3,
            "total": 44.1
          },
          "shortage": {
            "day": 12.8,
            "evening": 15,
            "night": 16.3,
            "total": 44.1
          }
        }
      }
    },
    {
      "code": "1140030012",
      "name": "佛教慈濟醫療財團法人大林慈濟醫院",
      "level": "醫學中心",
      "region": "南區",
      "city": "嘉義縣",
      "survey": {
        "current": 210,
        "need": 354,
        "gap": -144,
        "vacancies": 88
      },
      "acute": {
        "reportedBeds": 600,
        "occupancy": 0.624,
        "current": {
          "day": 64.5,
          "evening": 37,
          "night": 33,
          "total": 134.5
        },
        "actualRatio": {
          "day": 5.8,
          "evening": 10.1,
          "night": 11.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 600,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 600,
          "occupancy": 0.624,
          "occupiedBeds": 374.4,
          "required": {
            "day": 62.4,
            "evening": 41.6,
            "night": 34,
            "total": 138
          },
          "signedGap": {
            "day": -2.1,
            "evening": 4.6,
            "night": 1,
            "total": 3.5
          },
          "shortage": {
            "day": 0,
            "evening": 4.6,
            "night": 1,
            "total": 5.6
          }
        },
        "mid": {
          "bedBase": 600,
          "occupancy": 0.624,
          "occupiedBeds": 374.4,
          "required": {
            "day": 62.4,
            "evening": 41.6,
            "night": 34,
            "total": 138
          },
          "signedGap": {
            "day": -2.1,
            "evening": 4.6,
            "night": 1,
            "total": 3.5
          },
          "shortage": {
            "day": 0,
            "evening": 4.6,
            "night": 1,
            "total": 5.6
          }
        },
        "high": {
          "bedBase": 600,
          "occupancy": 1,
          "occupiedBeds": 600,
          "required": {
            "day": 100,
            "evening": 66.7,
            "night": 54.5,
            "total": 221.2
          },
          "signedGap": {
            "day": 35.5,
            "evening": 29.7,
            "night": 21.5,
            "total": 86.7
          },
          "shortage": {
            "day": 35.5,
            "evening": 29.7,
            "night": 21.5,
            "total": 86.7
          }
        }
      }
    },
    {
      "code": "1145010010",
      "name": "佛教慈濟醫療財團法人花蓮慈濟醫院",
      "level": "醫學中心",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 236,
        "need": 296,
        "gap": -60,
        "vacancies": 230
      },
      "acute": {
        "reportedBeds": 500,
        "occupancy": 0.778,
        "current": {
          "day": 66.3,
          "evening": 42.2,
          "night": 32.6,
          "total": 141.1
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 9.2,
          "night": 11.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 500,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 500,
          "occupancy": 0.778,
          "occupiedBeds": 389,
          "required": {
            "day": 64.8,
            "evening": 43.2,
            "night": 35.4,
            "total": 143.4
          },
          "signedGap": {
            "day": -1.5,
            "evening": 1,
            "night": 2.8,
            "total": 2.3
          },
          "shortage": {
            "day": 0,
            "evening": 1,
            "night": 2.8,
            "total": 3.8
          }
        },
        "mid": {
          "bedBase": 500,
          "occupancy": 0.778,
          "occupiedBeds": 389,
          "required": {
            "day": 64.8,
            "evening": 43.2,
            "night": 35.4,
            "total": 143.4
          },
          "signedGap": {
            "day": -1.5,
            "evening": 1,
            "night": 2.8,
            "total": 2.3
          },
          "shortage": {
            "day": 0,
            "evening": 1,
            "night": 2.8,
            "total": 3.8
          }
        },
        "high": {
          "bedBase": 500,
          "occupancy": 1,
          "occupiedBeds": 500,
          "required": {
            "day": 83.3,
            "evening": 55.6,
            "night": 45.5,
            "total": 184.3
          },
          "signedGap": {
            "day": 17,
            "evening": 13.4,
            "night": 12.9,
            "total": 43.2
          },
          "shortage": {
            "day": 17,
            "evening": 13.4,
            "night": 12.9,
            "total": 43.2
          }
        }
      }
    },
    {
      "code": "1146030516",
      "name": "佛教慈濟醫療財團法人關山慈濟醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 7,
        "need": 7,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 27,
        "occupancy": 0.434,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1.6,
          "total": 5.6
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 5.9,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 27,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 27,
          "occupancy": 0.434,
          "occupiedBeds": 11.7,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -0.8,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 27,
          "occupancy": 0.434,
          "occupiedBeds": 11.7,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -0.8,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 27,
          "occupancy": 1,
          "occupiedBeds": 27,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.1,
            "night": 0.2,
            "total": 1
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.1,
            "night": 0.2,
            "total": 1
          }
        }
      }
    },
    {
      "code": "1121010018",
      "name": "台灣基督長老教會新樓醫療財團法人台南新樓醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 103,
        "need": 103,
        "gap": 0,
        "vacancies": 82
      },
      "acute": {
        "reportedBeds": 285,
        "occupancy": 0.643,
        "current": {
          "day": 29.4,
          "evening": 19.1,
          "night": 14.5,
          "total": 63
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 9.6,
          "night": 12.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 285,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 285,
          "occupancy": 0.643,
          "occupiedBeds": 183.3,
          "required": {
            "day": 26.2,
            "evening": 16.7,
            "night": 14.1,
            "total": 56.9
          },
          "signedGap": {
            "day": -3.2,
            "evening": -2.4,
            "night": -0.4,
            "total": -6.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 285,
          "occupancy": 0.643,
          "occupiedBeds": 183.3,
          "required": {
            "day": 26.2,
            "evening": 16.7,
            "night": 14.1,
            "total": 56.9
          },
          "signedGap": {
            "day": -3.2,
            "evening": -2.4,
            "night": -0.4,
            "total": -6.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 285,
          "occupancy": 1,
          "occupiedBeds": 285,
          "required": {
            "day": 40.7,
            "evening": 25.9,
            "night": 21.9,
            "total": 88.5
          },
          "signedGap": {
            "day": 11.3,
            "evening": 6.8,
            "night": 7.4,
            "total": 25.5
          },
          "shortage": {
            "day": 11.3,
            "evening": 6.8,
            "night": 7.4,
            "total": 25.5
          }
        }
      }
    },
    {
      "code": "1105040016",
      "name": "台灣基督長老教會新樓醫療財團法人麻豆新樓醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 81,
        "need": 102,
        "gap": -21,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 298,
        "occupancy": 0.413,
        "current": {
          "day": 15.7,
          "evening": 11.9,
          "night": 9.4,
          "total": 37
        },
        "actualRatio": {
          "day": 7.8,
          "evening": 10.3,
          "night": 13.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 243,
      "openBedDelta": -55,
      "scenarios": {
        "low": {
          "bedBase": 298,
          "occupancy": 0.413,
          "occupiedBeds": 123.1,
          "required": {
            "day": 12.3,
            "evening": 9.5,
            "night": 8.2,
            "total": 30
          },
          "signedGap": {
            "day": -3.4,
            "evening": -2.4,
            "night": -1.2,
            "total": -7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 243,
          "occupancy": 0.413,
          "occupiedBeds": 100.4,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.4
          },
          "signedGap": {
            "day": -5.7,
            "evening": -4.2,
            "night": -2.7,
            "total": -12.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 243,
          "occupancy": 1,
          "occupiedBeds": 243,
          "required": {
            "day": 24.3,
            "evening": 18.7,
            "night": 16.2,
            "total": 59.2
          },
          "signedGap": {
            "day": 8.6,
            "evening": 6.8,
            "night": 6.8,
            "total": 22.2
          },
          "shortage": {
            "day": 8.6,
            "evening": 6.8,
            "night": 6.8,
            "total": 22.2
          }
        }
      }
    },
    {
      "code": "1146010014",
      "name": "台灣基督長老教會馬偕醫療財團法人台東馬偕紀念醫院",
      "level": "區域醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 144,
        "need": 152,
        "gap": -8,
        "vacancies": 18
      },
      "acute": {
        "reportedBeds": 337,
        "occupancy": 0.843,
        "current": {
          "day": 40.7,
          "evening": 30.1,
          "night": 22,
          "total": 92.8
        },
        "actualRatio": {
          "day": 7,
          "evening": 9.4,
          "night": 12.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 337,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 337,
          "occupancy": 0.843,
          "occupiedBeds": 284.1,
          "required": {
            "day": 40.6,
            "evening": 25.8,
            "night": 21.9,
            "total": 88.3
          },
          "signedGap": {
            "day": -0.1,
            "evening": -4.3,
            "night": -0.1,
            "total": -4.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 337,
          "occupancy": 0.843,
          "occupiedBeds": 284.1,
          "required": {
            "day": 40.6,
            "evening": 25.8,
            "night": 21.9,
            "total": 88.3
          },
          "signedGap": {
            "day": -0.1,
            "evening": -4.3,
            "night": -0.1,
            "total": -4.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 337,
          "occupancy": 1,
          "occupiedBeds": 337,
          "required": {
            "day": 48.1,
            "evening": 30.6,
            "night": 25.9,
            "total": 104.7
          },
          "signedGap": {
            "day": 7.4,
            "evening": 0.5,
            "night": 3.9,
            "total": 11.9
          },
          "shortage": {
            "day": 7.4,
            "evening": 0.5,
            "night": 3.9,
            "total": 11.9
          }
        }
      }
    },
    {
      "code": "1112010519",
      "name": "台灣基督長老教會馬偕醫療財團法人新竹馬偕紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 141,
        "need": 158,
        "gap": -17,
        "vacancies": 105
      },
      "acute": {
        "reportedBeds": 353,
        "occupancy": 0.75,
        "current": {
          "day": 36,
          "evening": 26.7,
          "night": 22.3,
          "total": 85
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 9.9,
          "night": 11.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 353,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 353,
          "occupancy": 0.75,
          "occupiedBeds": 264.8,
          "required": {
            "day": 37.8,
            "evening": 24.1,
            "night": 20.4,
            "total": 82.3
          },
          "signedGap": {
            "day": 1.8,
            "evening": -2.6,
            "night": -1.9,
            "total": -2.7
          },
          "shortage": {
            "day": 1.8,
            "evening": 0,
            "night": 0,
            "total": 1.8
          }
        },
        "mid": {
          "bedBase": 353,
          "occupancy": 0.75,
          "occupiedBeds": 264.8,
          "required": {
            "day": 37.8,
            "evening": 24.1,
            "night": 20.4,
            "total": 82.3
          },
          "signedGap": {
            "day": 1.8,
            "evening": -2.6,
            "night": -1.9,
            "total": -2.7
          },
          "shortage": {
            "day": 1.8,
            "evening": 0,
            "night": 0,
            "total": 1.8
          }
        },
        "high": {
          "bedBase": 353,
          "occupancy": 1,
          "occupiedBeds": 353,
          "required": {
            "day": 50.4,
            "evening": 32.1,
            "night": 27.2,
            "total": 109.7
          },
          "signedGap": {
            "day": 14.4,
            "evening": 5.4,
            "night": 4.9,
            "total": 24.7
          },
          "shortage": {
            "day": 14.4,
            "evening": 5.4,
            "night": 4.9,
            "total": 24.7
          }
        }
      }
    },
    {
      "code": "1131100010",
      "name": "台灣基督長老教會馬偕醫療財團法人淡水馬偕紀念醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 313,
        "need": 399,
        "gap": -86,
        "vacancies": 169
      },
      "acute": {
        "reportedBeds": 696,
        "occupancy": 0.759,
        "current": {
          "day": 89.5,
          "evening": 59.5,
          "night": 46.5,
          "total": 195.5
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 8.9,
          "night": 11.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 685,
      "openBedDelta": -11,
      "scenarios": {
        "low": {
          "bedBase": 696,
          "occupancy": 0.759,
          "occupiedBeds": 528.3,
          "required": {
            "day": 88,
            "evening": 58.7,
            "night": 48,
            "total": 194.8
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.8,
            "night": 1.5,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.5,
            "total": 1.5
          }
        },
        "mid": {
          "bedBase": 685,
          "occupancy": 0.759,
          "occupiedBeds": 519.9,
          "required": {
            "day": 86.7,
            "evening": 57.8,
            "night": 47.3,
            "total": 191.7
          },
          "signedGap": {
            "day": -2.8,
            "evening": -1.7,
            "night": 0.8,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.8,
            "total": 0.8
          }
        },
        "high": {
          "bedBase": 685,
          "occupancy": 1,
          "occupiedBeds": 685,
          "required": {
            "day": 114.2,
            "evening": 76.1,
            "night": 62.3,
            "total": 252.6
          },
          "signedGap": {
            "day": 24.7,
            "evening": 16.6,
            "night": 15.8,
            "total": 57.1
          },
          "shortage": {
            "day": 24.7,
            "evening": 16.6,
            "night": 15.8,
            "total": 57.1
          }
        }
      }
    },
    {
      "code": "1101100020",
      "name": "台灣基督長老教會馬偕醫療財團法人馬偕兒童醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 46,
        "need": 48,
        "gap": -2,
        "vacancies": 33
      },
      "acute": {
        "reportedBeds": 88,
        "occupancy": 0.701,
        "current": {
          "day": 15,
          "evening": 12,
          "night": 8,
          "total": 35
        },
        "actualRatio": {
          "day": 4.1,
          "evening": 5.1,
          "night": 7.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 88,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 88,
          "occupancy": 0.701,
          "occupiedBeds": 61.7,
          "required": {
            "day": 10.3,
            "evening": 6.9,
            "night": 5.6,
            "total": 22.7
          },
          "signedGap": {
            "day": -4.7,
            "evening": -5.1,
            "night": -2.4,
            "total": -12.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 88,
          "occupancy": 0.701,
          "occupiedBeds": 61.7,
          "required": {
            "day": 10.3,
            "evening": 6.9,
            "night": 5.6,
            "total": 22.7
          },
          "signedGap": {
            "day": -4.7,
            "evening": -5.1,
            "night": -2.4,
            "total": -12.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 88,
          "occupancy": 1,
          "occupiedBeds": 88,
          "required": {
            "day": 14.7,
            "evening": 9.8,
            "night": 8,
            "total": 32.4
          },
          "signedGap": {
            "day": -0.3,
            "evening": -2.2,
            "night": 0,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1101100011",
      "name": "台灣基督長老教會馬偕醫療財團法人馬偕紀念醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 276,
        "need": 378,
        "gap": -102,
        "vacancies": 169
      },
      "acute": {
        "reportedBeds": 682,
        "occupancy": 0.63,
        "current": {
          "day": 80,
          "evening": 59,
          "night": 48,
          "total": 187
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 7.3,
          "night": 9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 601,
      "openBedDelta": -81,
      "scenarios": {
        "low": {
          "bedBase": 682,
          "occupancy": 0.63,
          "occupiedBeds": 429.7,
          "required": {
            "day": 71.6,
            "evening": 47.7,
            "night": 39.1,
            "total": 158.4
          },
          "signedGap": {
            "day": -8.4,
            "evening": -11.3,
            "night": -8.9,
            "total": -28.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 601,
          "occupancy": 0.63,
          "occupiedBeds": 378.6,
          "required": {
            "day": 63.1,
            "evening": 42.1,
            "night": 34.4,
            "total": 139.6
          },
          "signedGap": {
            "day": -16.9,
            "evening": -16.9,
            "night": -13.6,
            "total": -47.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 601,
          "occupancy": 1,
          "occupiedBeds": 601,
          "required": {
            "day": 100.2,
            "evening": 66.8,
            "night": 54.6,
            "total": 221.6
          },
          "signedGap": {
            "day": 20.2,
            "evening": 7.8,
            "night": 6.6,
            "total": 34.6
          },
          "shortage": {
            "day": 20.2,
            "evening": 7.8,
            "night": 6.6,
            "total": 34.6
          }
        }
      }
    },
    {
      "code": "1101020018",
      "name": "國泰醫療財團法人國泰綜合醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 170,
        "need": 307,
        "gap": -137,
        "vacancies": 200
      },
      "acute": {
        "reportedBeds": 556,
        "occupancy": 0.5870000000000001,
        "current": {
          "day": 61,
          "evening": 37,
          "night": 27.5,
          "total": 125.5
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 8.8,
          "night": 11.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 551,
      "openBedDelta": -5,
      "scenarios": {
        "low": {
          "bedBase": 556,
          "occupancy": 0.587,
          "occupiedBeds": 326.4,
          "required": {
            "day": 54.4,
            "evening": 36.3,
            "night": 29.7,
            "total": 120.3
          },
          "signedGap": {
            "day": -6.6,
            "evening": -0.7,
            "night": 2.2,
            "total": -5.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 2.2,
            "total": 2.2
          }
        },
        "mid": {
          "bedBase": 551,
          "occupancy": 0.587,
          "occupiedBeds": 323.4,
          "required": {
            "day": 53.9,
            "evening": 35.9,
            "night": 29.4,
            "total": 119.2
          },
          "signedGap": {
            "day": -7.1,
            "evening": -1.1,
            "night": 1.9,
            "total": -6.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.9,
            "total": 1.9
          }
        },
        "high": {
          "bedBase": 551,
          "occupancy": 1,
          "occupiedBeds": 551,
          "required": {
            "day": 91.8,
            "evening": 61.2,
            "night": 50.1,
            "total": 203.1
          },
          "signedGap": {
            "day": 30.8,
            "evening": 24.2,
            "night": 22.6,
            "total": 77.6
          },
          "shortage": {
            "day": 30.8,
            "evening": 24.2,
            "night": 22.6,
            "total": 77.6
          }
        }
      }
    },
    {
      "code": "1112010528",
      "name": "國泰醫療財團法人新竹國泰綜合醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 71,
        "need": 88,
        "gap": -17,
        "vacancies": 38
      },
      "acute": {
        "reportedBeds": 217,
        "occupancy": 0.479,
        "current": {
          "day": 15,
          "evening": 10,
          "night": 8,
          "total": 33
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 10.4,
          "night": 13
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 217,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 217,
          "occupancy": 0.479,
          "occupiedBeds": 103.9,
          "required": {
            "day": 10.4,
            "evening": 8,
            "night": 6.9,
            "total": 25.3
          },
          "signedGap": {
            "day": -4.6,
            "evening": -2,
            "night": -1.1,
            "total": -7.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 217,
          "occupancy": 0.479,
          "occupiedBeds": 103.9,
          "required": {
            "day": 10.4,
            "evening": 8,
            "night": 6.9,
            "total": 25.3
          },
          "signedGap": {
            "day": -4.6,
            "evening": -2,
            "night": -1.1,
            "total": -7.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 217,
          "occupancy": 1,
          "occupiedBeds": 217,
          "required": {
            "day": 21.7,
            "evening": 16.7,
            "night": 14.5,
            "total": 52.9
          },
          "signedGap": {
            "day": 6.7,
            "evening": 6.7,
            "night": 6.5,
            "total": 19.9
          },
          "shortage": {
            "day": 6.7,
            "evening": 6.7,
            "night": 6.5,
            "total": 19.9
          }
        }
      }
    },
    {
      "code": "1131110516",
      "name": "國泰醫療財團法人汐止國泰綜合醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 96,
        "need": 165,
        "gap": -69,
        "vacancies": 70
      },
      "acute": {
        "reportedBeds": 433,
        "occupancy": 0.504,
        "current": {
          "day": 30.3,
          "evening": 17,
          "night": 15.6,
          "total": 62.9
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 12.8,
          "night": 14
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 431,
      "openBedDelta": -2,
      "scenarios": {
        "low": {
          "bedBase": 433,
          "occupancy": 0.504,
          "occupiedBeds": 218.2,
          "required": {
            "day": 31.2,
            "evening": 19.8,
            "night": 16.8,
            "total": 67.8
          },
          "signedGap": {
            "day": 0.9,
            "evening": 2.8,
            "night": 1.2,
            "total": 4.9
          },
          "shortage": {
            "day": 0.9,
            "evening": 2.8,
            "night": 1.2,
            "total": 4.9
          }
        },
        "mid": {
          "bedBase": 431,
          "occupancy": 0.504,
          "occupiedBeds": 217.2,
          "required": {
            "day": 31,
            "evening": 19.7,
            "night": 16.7,
            "total": 67.5
          },
          "signedGap": {
            "day": 0.7,
            "evening": 2.7,
            "night": 1.1,
            "total": 4.6
          },
          "shortage": {
            "day": 0.7,
            "evening": 2.7,
            "night": 1.1,
            "total": 4.6
          }
        },
        "high": {
          "bedBase": 431,
          "occupancy": 1,
          "occupiedBeds": 431,
          "required": {
            "day": 61.6,
            "evening": 39.2,
            "night": 33.2,
            "total": 133.9
          },
          "signedGap": {
            "day": 31.3,
            "evening": 22.2,
            "night": 17.6,
            "total": 71
          },
          "shortage": {
            "day": 31.3,
            "evening": 22.2,
            "night": 17.6,
            "total": 71
          }
        }
      }
    },
    {
      "code": "1138020015",
      "name": "埔基醫療財團法人埔里基督教醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 49,
        "need": 55,
        "gap": -6,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 268,
        "occupancy": 0.43,
        "current": {
          "day": 11.4,
          "evening": 11.5,
          "night": 8.5,
          "total": 31.4
        },
        "actualRatio": {
          "day": 10.1,
          "evening": 10,
          "night": 13.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 268,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 268,
          "occupancy": 0.43,
          "occupiedBeds": 115.2,
          "required": {
            "day": 16.5,
            "evening": 10.5,
            "night": 8.9,
            "total": 35.8
          },
          "signedGap": {
            "day": 5.1,
            "evening": -1,
            "night": 0.4,
            "total": 4.4
          },
          "shortage": {
            "day": 5.1,
            "evening": 0,
            "night": 0.4,
            "total": 5.4
          }
        },
        "mid": {
          "bedBase": 268,
          "occupancy": 0.43,
          "occupiedBeds": 115.2,
          "required": {
            "day": 16.5,
            "evening": 10.5,
            "night": 8.9,
            "total": 35.8
          },
          "signedGap": {
            "day": 5.1,
            "evening": -1,
            "night": 0.4,
            "total": 4.4
          },
          "shortage": {
            "day": 5.1,
            "evening": 0,
            "night": 0.4,
            "total": 5.4
          }
        },
        "high": {
          "bedBase": 268,
          "occupancy": 1,
          "occupiedBeds": 268,
          "required": {
            "day": 38.3,
            "evening": 24.4,
            "night": 20.6,
            "total": 83.3
          },
          "signedGap": {
            "day": 26.9,
            "evening": 12.9,
            "night": 12.1,
            "total": 51.9
          },
          "shortage": {
            "day": 26.9,
            "evening": 12.9,
            "night": 12.1,
            "total": 51.9
          }
        }
      }
    },
    {
      "code": "1101010021",
      "name": "基督復臨安息日會醫療財團法人臺安醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 102,
        "need": 86,
        "gap": 16,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 256,
        "occupancy": 0.446,
        "current": {
          "day": 18,
          "evening": 14,
          "night": 12,
          "total": 44
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 8.2,
          "night": 9.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 256,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 256,
          "occupancy": 0.446,
          "occupiedBeds": 114.2,
          "required": {
            "day": 16.3,
            "evening": 10.4,
            "night": 8.8,
            "total": 35.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -3.6,
            "night": -3.2,
            "total": -8.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 256,
          "occupancy": 0.446,
          "occupiedBeds": 114.2,
          "required": {
            "day": 16.3,
            "evening": 10.4,
            "night": 8.8,
            "total": 35.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -3.6,
            "night": -3.2,
            "total": -8.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 256,
          "occupancy": 1,
          "occupiedBeds": 256,
          "required": {
            "day": 36.6,
            "evening": 23.3,
            "night": 19.7,
            "total": 79.5
          },
          "signedGap": {
            "day": 18.6,
            "evening": 9.3,
            "night": 7.7,
            "total": 35.5
          },
          "shortage": {
            "day": 18.6,
            "evening": 9.3,
            "night": 7.7,
            "total": 35.5
          }
        }
      }
    },
    {
      "code": "1122010021",
      "name": "天主教中華聖母修女會醫療財團法人天主教聖馬爾定醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 114,
        "need": 120,
        "gap": -6,
        "vacancies": 35
      },
      "acute": {
        "reportedBeds": 381,
        "occupancy": 0.665,
        "current": {
          "day": 33,
          "evening": 23,
          "night": 18,
          "total": 74
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 11,
          "night": 14.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 381,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 381,
          "occupancy": 0.665,
          "occupiedBeds": 253.4,
          "required": {
            "day": 36.2,
            "evening": 23,
            "night": 19.5,
            "total": 78.7
          },
          "signedGap": {
            "day": 3.2,
            "evening": 0,
            "night": 1.5,
            "total": 4.7
          },
          "shortage": {
            "day": 3.2,
            "evening": 0,
            "night": 1.5,
            "total": 4.7
          }
        },
        "mid": {
          "bedBase": 381,
          "occupancy": 0.665,
          "occupiedBeds": 253.4,
          "required": {
            "day": 36.2,
            "evening": 23,
            "night": 19.5,
            "total": 78.7
          },
          "signedGap": {
            "day": 3.2,
            "evening": 0,
            "night": 1.5,
            "total": 4.7
          },
          "shortage": {
            "day": 3.2,
            "evening": 0,
            "night": 1.5,
            "total": 4.7
          }
        },
        "high": {
          "bedBase": 381,
          "occupancy": 1,
          "occupiedBeds": 381,
          "required": {
            "day": 54.4,
            "evening": 34.6,
            "night": 29.3,
            "total": 118.4
          },
          "signedGap": {
            "day": 21.4,
            "evening": 11.6,
            "night": 11.3,
            "total": 44.4
          },
          "shortage": {
            "day": 21.4,
            "evening": 11.6,
            "night": 11.3,
            "total": 44.4
          }
        }
      }
    },
    {
      "code": "1133060019",
      "name": "天主教仁慈醫療財團法人仁慈醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 19,
        "need": 28,
        "gap": -9,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 110,
        "occupancy": 0.601,
        "current": {
          "day": 6.8,
          "evening": 4.9,
          "night": 3.9,
          "total": 15.6
        },
        "actualRatio": {
          "day": 9.7,
          "evening": 13.5,
          "night": 17
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 80,
      "openBedDelta": -30,
      "scenarios": {
        "low": {
          "bedBase": 110,
          "occupancy": 0.601,
          "occupiedBeds": 66.1,
          "required": {
            "day": 6.6,
            "evening": 5.1,
            "night": 4.4,
            "total": 16.1
          },
          "signedGap": {
            "day": -0.2,
            "evening": 0.2,
            "night": 0.5,
            "total": 0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.5,
            "total": 0.7
          }
        },
        "mid": {
          "bedBase": 80,
          "occupancy": 0.601,
          "occupiedBeds": 48.1,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": -2,
            "evening": -1.2,
            "night": -0.7,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 80,
          "occupancy": 1,
          "occupiedBeds": 80,
          "required": {
            "day": 8,
            "evening": 6.2,
            "night": 5.3,
            "total": 19.5
          },
          "signedGap": {
            "day": 1.2,
            "evening": 1.3,
            "night": 1.4,
            "total": 3.9
          },
          "shortage": {
            "day": 1.2,
            "evening": 1.3,
            "night": 1.4,
            "total": 3.9
          }
        }
      }
    },
    {
      "code": "1107350015",
      "name": "天主教聖功醫療財團法人聖功醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 32,
        "need": 52,
        "gap": -20,
        "vacancies": 38
      },
      "acute": {
        "reportedBeds": 154,
        "occupancy": 0.502,
        "current": {
          "day": 7.9,
          "evening": 7.5,
          "night": 5.5,
          "total": 20.9
        },
        "actualRatio": {
          "day": 9.8,
          "evening": 10.3,
          "night": 14.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 154,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 154,
          "occupancy": 0.502,
          "occupiedBeds": 77.3,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.2,
            "total": 18.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": -1.6,
            "night": -0.3,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 154,
          "occupancy": 0.502,
          "occupiedBeds": 77.3,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.2,
            "total": 18.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": -1.6,
            "night": -0.3,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 154,
          "occupancy": 1,
          "occupiedBeds": 154,
          "required": {
            "day": 15.4,
            "evening": 11.8,
            "night": 10.3,
            "total": 37.5
          },
          "signedGap": {
            "day": 7.5,
            "evening": 4.3,
            "night": 4.8,
            "total": 16.6
          },
          "shortage": {
            "day": 7.5,
            "evening": 4.3,
            "night": 4.8,
            "total": 16.6
          }
        }
      }
    },
    {
      "code": "1139030015",
      "name": "天主教若瑟醫療財團法人若瑟醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 60,
        "need": 74,
        "gap": -14,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 235,
        "occupancy": 0.49700000000000005,
        "current": {
          "day": 15.9,
          "evening": 10.9,
          "night": 10.6,
          "total": 37.4
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 10.7,
          "night": 11
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 235,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 235,
          "occupancy": 0.497,
          "occupiedBeds": 116.8,
          "required": {
            "day": 11.7,
            "evening": 9,
            "night": 7.8,
            "total": 28.5
          },
          "signedGap": {
            "day": -4.2,
            "evening": -1.9,
            "night": -2.8,
            "total": -8.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 235,
          "occupancy": 0.497,
          "occupiedBeds": 116.8,
          "required": {
            "day": 11.7,
            "evening": 9,
            "night": 7.8,
            "total": 28.5
          },
          "signedGap": {
            "day": -4.2,
            "evening": -1.9,
            "night": -2.8,
            "total": -8.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 235,
          "occupancy": 1,
          "occupiedBeds": 235,
          "required": {
            "day": 23.5,
            "evening": 18.1,
            "night": 15.7,
            "total": 57.2
          },
          "signedGap": {
            "day": 7.6,
            "evening": 7.2,
            "night": 5.1,
            "total": 19.8
          },
          "shortage": {
            "day": 7.6,
            "evening": 7.2,
            "night": 5.1,
            "total": 19.8
          }
        }
      }
    },
    {
      "code": "1134020028",
      "name": "天主教靈醫會醫療財團法人羅東聖母醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 169,
        "need": 218,
        "gap": -49,
        "vacancies": 89
      },
      "acute": {
        "reportedBeds": 388,
        "occupancy": 0.637,
        "current": {
          "day": 30.9,
          "evening": 24.9,
          "night": 22.8,
          "total": 78.6
        },
        "actualRatio": {
          "day": 8,
          "evening": 9.9,
          "night": 10.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 420,
      "openBedDelta": 32,
      "scenarios": {
        "low": {
          "bedBase": 388,
          "occupancy": 0.637,
          "occupiedBeds": 247.2,
          "required": {
            "day": 35.3,
            "evening": 22.5,
            "night": 19,
            "total": 76.8
          },
          "signedGap": {
            "day": 4.4,
            "evening": -2.4,
            "night": -3.8,
            "total": -1.8
          },
          "shortage": {
            "day": 4.4,
            "evening": 0,
            "night": 0,
            "total": 4.4
          }
        },
        "mid": {
          "bedBase": 420,
          "occupancy": 0.637,
          "occupiedBeds": 267.5,
          "required": {
            "day": 38.2,
            "evening": 24.3,
            "night": 20.6,
            "total": 83.1
          },
          "signedGap": {
            "day": 7.3,
            "evening": -0.6,
            "night": -2.2,
            "total": 4.5
          },
          "shortage": {
            "day": 7.3,
            "evening": 0,
            "night": 0,
            "total": 7.3
          }
        },
        "high": {
          "bedBase": 420,
          "occupancy": 1,
          "occupiedBeds": 420,
          "required": {
            "day": 60,
            "evening": 38.2,
            "night": 32.3,
            "total": 130.5
          },
          "signedGap": {
            "day": 29.1,
            "evening": 13.3,
            "night": 9.5,
            "total": 51.9
          },
          "shortage": {
            "day": 29.1,
            "evening": 13.3,
            "night": 9.5,
            "total": 51.9
          }
        }
      }
    },
    {
      "code": "1141310019",
      "name": "奇美醫療財團法人奇美醫院",
      "level": "醫學中心",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 517,
        "need": 479,
        "gap": 38,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 867,
        "occupancy": 0.8690000000000001,
        "current": {
          "day": 154.6,
          "evening": 95.9,
          "night": 73.3,
          "total": 323.8
        },
        "actualRatio": {
          "day": 4.9,
          "evening": 7.9,
          "night": 10.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 867,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 867,
          "occupancy": 0.869,
          "occupiedBeds": 753.4,
          "required": {
            "day": 125.6,
            "evening": 83.7,
            "night": 68.5,
            "total": 277.8
          },
          "signedGap": {
            "day": -29,
            "evening": -12.2,
            "night": -4.8,
            "total": -46
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 867,
          "occupancy": 0.869,
          "occupiedBeds": 753.4,
          "required": {
            "day": 125.6,
            "evening": 83.7,
            "night": 68.5,
            "total": 277.8
          },
          "signedGap": {
            "day": -29,
            "evening": -12.2,
            "night": -4.8,
            "total": -46
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 867,
          "occupancy": 1,
          "occupiedBeds": 867,
          "required": {
            "day": 144.5,
            "evening": 96.3,
            "night": 78.8,
            "total": 319.7
          },
          "signedGap": {
            "day": -10.1,
            "evening": 0.4,
            "night": 5.5,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.4,
            "night": 5.5,
            "total": 6
          }
        }
      }
    },
    {
      "code": "1141090512",
      "name": "奇美醫療財團法人柳營奇美醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 265,
        "need": 286,
        "gap": -21,
        "vacancies": 55
      },
      "acute": {
        "reportedBeds": 670,
        "occupancy": 0.846,
        "current": {
          "day": 81,
          "evening": 53.9,
          "night": 38.1,
          "total": 173
        },
        "actualRatio": {
          "day": 7,
          "evening": 10.5,
          "night": 14.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 670,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 670,
          "occupancy": 0.846,
          "occupiedBeds": 566.8,
          "required": {
            "day": 81,
            "evening": 51.5,
            "night": 43.6,
            "total": 176.1
          },
          "signedGap": {
            "day": 0,
            "evening": -2.4,
            "night": 5.5,
            "total": 3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 5.5,
            "total": 5.5
          }
        },
        "mid": {
          "bedBase": 670,
          "occupancy": 0.846,
          "occupiedBeds": 566.8,
          "required": {
            "day": 81,
            "evening": 51.5,
            "night": 43.6,
            "total": 176.1
          },
          "signedGap": {
            "day": 0,
            "evening": -2.4,
            "night": 5.5,
            "total": 3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 5.5,
            "total": 5.5
          }
        },
        "high": {
          "bedBase": 670,
          "occupancy": 1,
          "occupiedBeds": 670,
          "required": {
            "day": 95.7,
            "evening": 60.9,
            "night": 51.5,
            "total": 208.2
          },
          "signedGap": {
            "day": 14.7,
            "evening": 7,
            "night": 13.4,
            "total": 35.2
          },
          "shortage": {
            "day": 14.7,
            "evening": 7,
            "night": 13.4,
            "total": 35.2
          }
        }
      }
    },
    {
      "code": "1101020036",
      "name": "宏恩醫療財團法人宏恩綜合醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.63,
        "current": {
          "day": 7,
          "evening": 5,
          "night": 5,
          "total": 17
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 12.5,
          "night": 12.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 99,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.63,
          "occupiedBeds": 62.4,
          "required": {
            "day": 6.2,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.2
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.2,
            "night": -0.8,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.63,
          "occupiedBeds": 62.4,
          "required": {
            "day": 6.2,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.2
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.2,
            "night": -0.8,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": 2.9,
            "evening": 2.6,
            "night": 1.6,
            "total": 7.1
          },
          "shortage": {
            "day": 2.9,
            "evening": 2.6,
            "night": 1.6,
            "total": 7.1
          }
        }
      }
    },
    {
      "code": "1143010012",
      "name": "屏基醫療財團法人屏東基督教醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 141,
        "need": 174,
        "gap": -33,
        "vacancies": 145
      },
      "acute": {
        "reportedBeds": 356,
        "occupancy": 0.764,
        "current": {
          "day": 38.6,
          "evening": 24.7,
          "night": 19.7,
          "total": 83
        },
        "actualRatio": {
          "day": 7,
          "evening": 11,
          "night": 13.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 356,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 356,
          "occupancy": 0.764,
          "occupiedBeds": 272,
          "required": {
            "day": 38.9,
            "evening": 24.7,
            "night": 20.9,
            "total": 84.5
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0,
            "night": 1.2,
            "total": 1.5
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 1.2,
            "total": 1.5
          }
        },
        "mid": {
          "bedBase": 356,
          "occupancy": 0.764,
          "occupiedBeds": 272,
          "required": {
            "day": 38.9,
            "evening": 24.7,
            "night": 20.9,
            "total": 84.5
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0,
            "night": 1.2,
            "total": 1.5
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 1.2,
            "total": 1.5
          }
        },
        "high": {
          "bedBase": 356,
          "occupancy": 1,
          "occupiedBeds": 356,
          "required": {
            "day": 50.9,
            "evening": 32.4,
            "night": 27.4,
            "total": 110.6
          },
          "signedGap": {
            "day": 12.3,
            "evening": 7.7,
            "night": 7.7,
            "total": 27.6
          },
          "shortage": {
            "day": 12.3,
            "evening": 7.7,
            "night": 7.7,
            "total": 27.6
          }
        }
      }
    },
    {
      "code": "1101110026",
      "name": "康寧醫療財團法人康寧醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 12,
        "need": 25,
        "gap": -13,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 145,
        "occupancy": 0.187,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 2.5,
          "total": 8.5
        },
        "actualRatio": {
          "day": 9,
          "evening": 9,
          "night": 10.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 145,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 145,
          "occupancy": 0.187,
          "occupiedBeds": 27.1,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.9,
            "night": -0.7,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 145,
          "occupancy": 0.187,
          "occupiedBeds": 27.1,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.9,
            "night": -0.7,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 145,
          "occupancy": 1,
          "occupiedBeds": 145,
          "required": {
            "day": 14.5,
            "evening": 11.2,
            "night": 9.7,
            "total": 35.3
          },
          "signedGap": {
            "day": 11.5,
            "evening": 8.2,
            "night": 7.2,
            "total": 26.8
          },
          "shortage": {
            "day": 11.5,
            "evening": 8.2,
            "night": 7.2,
            "total": 26.8
          }
        }
      }
    },
    {
      "code": "1137080017",
      "name": "彰化基督教醫療財團法人二林基督教醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 47,
        "need": 54,
        "gap": -7,
        "vacancies": 33
      },
      "acute": {
        "reportedBeds": 173,
        "occupancy": 0.606,
        "current": {
          "day": 13,
          "evening": 10.2,
          "night": 9.3,
          "total": 32.5
        },
        "actualRatio": {
          "day": 8.1,
          "evening": 10.3,
          "night": 11.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 143,
      "openBedDelta": -30,
      "scenarios": {
        "low": {
          "bedBase": 173,
          "occupancy": 0.606,
          "occupiedBeds": 104.8,
          "required": {
            "day": 10.5,
            "evening": 8.1,
            "night": 7,
            "total": 25.5
          },
          "signedGap": {
            "day": -2.5,
            "evening": -2.1,
            "night": -2.3,
            "total": -7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 143,
          "occupancy": 0.606,
          "occupiedBeds": 86.7,
          "required": {
            "day": 8.7,
            "evening": 6.7,
            "night": 5.8,
            "total": 21.1
          },
          "signedGap": {
            "day": -4.3,
            "evening": -3.5,
            "night": -3.5,
            "total": -11.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 143,
          "occupancy": 1,
          "occupiedBeds": 143,
          "required": {
            "day": 14.3,
            "evening": 11,
            "night": 9.5,
            "total": 34.8
          },
          "signedGap": {
            "day": 1.3,
            "evening": 0.8,
            "night": 0.2,
            "total": 2.3
          },
          "shortage": {
            "day": 1.3,
            "evening": 0.8,
            "night": 0.2,
            "total": 2.3
          }
        }
      }
    },
    {
      "code": "1137050019",
      "name": "彰化基督教醫療財團法人員林基督教醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 119,
        "need": 98,
        "gap": 21,
        "vacancies": 49
      },
      "acute": {
        "reportedBeds": 265,
        "occupancy": 0.7909999999999999,
        "current": {
          "day": 31.7,
          "evening": 21.4,
          "night": 16.6,
          "total": 69.7
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 9.8,
          "night": 12.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 265,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 265,
          "occupancy": 0.791,
          "occupiedBeds": 209.6,
          "required": {
            "day": 21,
            "evening": 16.1,
            "night": 14,
            "total": 51.1
          },
          "signedGap": {
            "day": -10.7,
            "evening": -5.3,
            "night": -2.6,
            "total": -18.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 265,
          "occupancy": 0.791,
          "occupiedBeds": 209.6,
          "required": {
            "day": 21,
            "evening": 16.1,
            "night": 14,
            "total": 51.1
          },
          "signedGap": {
            "day": -10.7,
            "evening": -5.3,
            "night": -2.6,
            "total": -18.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 265,
          "occupancy": 1,
          "occupiedBeds": 265,
          "required": {
            "day": 26.5,
            "evening": 20.4,
            "night": 17.7,
            "total": 64.6
          },
          "signedGap": {
            "day": -5.2,
            "evening": -1,
            "night": 1.1,
            "total": -5.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.1,
            "total": 1.1
          }
        }
      }
    },
    {
      "code": "1137010042",
      "name": "彰化基督教醫療財團法人彰化基督教兒童醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 56,
        "need": 45,
        "gap": 11,
        "vacancies": 19
      },
      "acute": {
        "reportedBeds": 113,
        "occupancy": 0.731,
        "current": {
          "day": 17.6,
          "evening": 12,
          "night": 8.5,
          "total": 38.1
        },
        "actualRatio": {
          "day": 4.7,
          "evening": 6.9,
          "night": 9.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 113,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 113,
          "occupancy": 0.731,
          "occupiedBeds": 82.6,
          "required": {
            "day": 13.8,
            "evening": 9.2,
            "night": 7.5,
            "total": 30.5
          },
          "signedGap": {
            "day": -3.8,
            "evening": -2.8,
            "night": -1,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 113,
          "occupancy": 0.731,
          "occupiedBeds": 82.6,
          "required": {
            "day": 13.8,
            "evening": 9.2,
            "night": 7.5,
            "total": 30.5
          },
          "signedGap": {
            "day": -3.8,
            "evening": -2.8,
            "night": -1,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 113,
          "occupancy": 1,
          "occupiedBeds": 113,
          "required": {
            "day": 18.8,
            "evening": 12.6,
            "night": 10.3,
            "total": 41.7
          },
          "signedGap": {
            "day": 1.2,
            "evening": 0.6,
            "night": 1.8,
            "total": 3.6
          },
          "shortage": {
            "day": 1.2,
            "evening": 0.6,
            "night": 1.8,
            "total": 3.6
          }
        }
      }
    },
    {
      "code": "1137010024",
      "name": "彰化基督教醫療財團法人彰化基督教醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 430,
        "need": 412,
        "gap": 18,
        "vacancies": 162
      },
      "acute": {
        "reportedBeds": 776,
        "occupancy": 0.9540000000000001,
        "current": {
          "day": 131.2,
          "evening": 88.4,
          "night": 67.8,
          "total": 287.4
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 8.4,
          "night": 10.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 784,
      "openBedDelta": 8,
      "scenarios": {
        "low": {
          "bedBase": 776,
          "occupancy": 0.954,
          "occupiedBeds": 740.3,
          "required": {
            "day": 123.4,
            "evening": 82.3,
            "night": 67.3,
            "total": 272.9
          },
          "signedGap": {
            "day": -7.8,
            "evening": -6.1,
            "night": -0.5,
            "total": -14.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 784,
          "occupancy": 0.954,
          "occupiedBeds": 747.9,
          "required": {
            "day": 124.7,
            "evening": 83.1,
            "night": 68,
            "total": 275.8
          },
          "signedGap": {
            "day": -6.5,
            "evening": -5.3,
            "night": 0.2,
            "total": -11.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 784,
          "occupancy": 1,
          "occupiedBeds": 784,
          "required": {
            "day": 130.7,
            "evening": 87.1,
            "night": 71.3,
            "total": 289.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -1.3,
            "night": 3.5,
            "total": 1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 3.5,
            "total": 3.5
          }
        }
      }
    },
    {
      "code": "1139040011",
      "name": "彰化基督教醫療財團法人雲林基督教醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 47,
        "need": 47,
        "gap": 0,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 200,
        "occupancy": 0.541,
        "current": {
          "day": 14.4,
          "evening": 10.5,
          "night": 7.8,
          "total": 32.7
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 10.3,
          "night": 13.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 200,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 200,
          "occupancy": 0.541,
          "occupiedBeds": 108.2,
          "required": {
            "day": 10.8,
            "evening": 8.3,
            "night": 7.2,
            "total": 26.4
          },
          "signedGap": {
            "day": -3.6,
            "evening": -2.2,
            "night": -0.6,
            "total": -6.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 200,
          "occupancy": 0.541,
          "occupiedBeds": 108.2,
          "required": {
            "day": 10.8,
            "evening": 8.3,
            "night": 7.2,
            "total": 26.4
          },
          "signedGap": {
            "day": -3.6,
            "evening": -2.2,
            "night": -0.6,
            "total": -6.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 200,
          "occupancy": 1,
          "occupiedBeds": 200,
          "required": {
            "day": 20,
            "evening": 15.4,
            "night": 13.3,
            "total": 48.7
          },
          "signedGap": {
            "day": 5.6,
            "evening": 4.9,
            "night": 5.5,
            "total": 16
          },
          "shortage": {
            "day": 5.6,
            "evening": 4.9,
            "night": 5.5,
            "total": 16
          }
        }
      }
    },
    {
      "code": "1137020520",
      "name": "彰化基督教醫療財團法人鹿港基督教醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 51,
        "need": 51,
        "gap": 0,
        "vacancies": 35
      },
      "acute": {
        "reportedBeds": 180,
        "occupancy": 0.654,
        "current": {
          "day": 13.5,
          "evening": 11.5,
          "night": 11,
          "total": 36
        },
        "actualRatio": {
          "day": 8.7,
          "evening": 10.2,
          "night": 10.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 160,
      "openBedDelta": -20,
      "scenarios": {
        "low": {
          "bedBase": 180,
          "occupancy": 0.654,
          "occupiedBeds": 117.7,
          "required": {
            "day": 11.8,
            "evening": 9.1,
            "night": 7.8,
            "total": 28.7
          },
          "signedGap": {
            "day": -1.7,
            "evening": -2.4,
            "night": -3.2,
            "total": -7.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 160,
          "occupancy": 0.654,
          "occupiedBeds": 104.6,
          "required": {
            "day": 10.5,
            "evening": 8,
            "night": 7,
            "total": 25.5
          },
          "signedGap": {
            "day": -3,
            "evening": -3.5,
            "night": -4,
            "total": -10.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 160,
          "occupancy": 1,
          "occupiedBeds": 160,
          "required": {
            "day": 16,
            "evening": 12.3,
            "night": 10.7,
            "total": 39
          },
          "signedGap": {
            "day": 2.5,
            "evening": 0.8,
            "night": -0.3,
            "total": 3
          },
          "shortage": {
            "day": 2.5,
            "evening": 0.8,
            "night": 0,
            "total": 3.3
          }
        }
      }
    },
    {
      "code": "1122010012",
      "name": "戴德森醫療財團法人嘉義基督教醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 332,
        "need": 282,
        "gap": 50,
        "vacancies": 63
      },
      "acute": {
        "reportedBeds": 601,
        "occupancy": 0.7879999999999999,
        "current": {
          "day": 83.4,
          "evening": 51.6,
          "night": 39.2,
          "total": 174.2
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 9.2,
          "night": 12.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 601,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 601,
          "occupancy": 0.788,
          "occupiedBeds": 473.6,
          "required": {
            "day": 67.7,
            "evening": 43.1,
            "night": 36.4,
            "total": 147.1
          },
          "signedGap": {
            "day": -15.7,
            "evening": -8.5,
            "night": -2.8,
            "total": -27.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 601,
          "occupancy": 0.788,
          "occupiedBeds": 473.6,
          "required": {
            "day": 67.7,
            "evening": 43.1,
            "night": 36.4,
            "total": 147.1
          },
          "signedGap": {
            "day": -15.7,
            "evening": -8.5,
            "night": -2.8,
            "total": -27.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 601,
          "occupancy": 1,
          "occupiedBeds": 601,
          "required": {
            "day": 85.9,
            "evening": 54.6,
            "night": 46.2,
            "total": 186.7
          },
          "signedGap": {
            "day": 2.5,
            "evening": 3,
            "night": 7,
            "total": 12.5
          },
          "shortage": {
            "day": 2.5,
            "evening": 3,
            "night": 7,
            "total": 12.5
          }
        }
      }
    },
    {
      "code": "1101160017",
      "name": "振興醫療財團法人振興醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 259,
        "need": 389,
        "gap": -130,
        "vacancies": 142
      },
      "acute": {
        "reportedBeds": 777,
        "occupancy": 0.71,
        "current": {
          "day": 69.5,
          "evening": 53.5,
          "night": 43.5,
          "total": 166.5
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 10.3,
          "night": 12.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 777,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 777,
          "occupancy": 0.71,
          "occupiedBeds": 551.7,
          "required": {
            "day": 78.8,
            "evening": 50.2,
            "night": 42.4,
            "total": 171.4
          },
          "signedGap": {
            "day": 9.3,
            "evening": -3.3,
            "night": -1.1,
            "total": 4.9
          },
          "shortage": {
            "day": 9.3,
            "evening": 0,
            "night": 0,
            "total": 9.3
          }
        },
        "mid": {
          "bedBase": 777,
          "occupancy": 0.71,
          "occupiedBeds": 551.7,
          "required": {
            "day": 78.8,
            "evening": 50.2,
            "night": 42.4,
            "total": 171.4
          },
          "signedGap": {
            "day": 9.3,
            "evening": -3.3,
            "night": -1.1,
            "total": 4.9
          },
          "shortage": {
            "day": 9.3,
            "evening": 0,
            "night": 0,
            "total": 9.3
          }
        },
        "high": {
          "bedBase": 777,
          "occupancy": 1,
          "occupiedBeds": 777,
          "required": {
            "day": 111,
            "evening": 70.6,
            "night": 59.8,
            "total": 241.4
          },
          "signedGap": {
            "day": 41.5,
            "evening": 17.1,
            "night": 16.3,
            "total": 74.9
          },
          "shortage": {
            "day": 41.5,
            "evening": 17.1,
            "night": 16.3,
            "total": 74.9
          }
        }
      }
    },
    {
      "code": "1101150011",
      "name": "新光醫療財團法人新光吳火獅紀念醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 272,
        "need": 319,
        "gap": -47,
        "vacancies": 457
      },
      "acute": {
        "reportedBeds": 518,
        "occupancy": 0.835,
        "current": {
          "day": 77.3,
          "evening": 49.2,
          "night": 39.6,
          "total": 166.1
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 8.8,
          "night": 10.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 518,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 518,
          "occupancy": 0.835,
          "occupiedBeds": 432.5,
          "required": {
            "day": 72.1,
            "evening": 48.1,
            "night": 39.3,
            "total": 159.5
          },
          "signedGap": {
            "day": -5.2,
            "evening": -1.1,
            "night": -0.3,
            "total": -6.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 518,
          "occupancy": 0.835,
          "occupiedBeds": 432.5,
          "required": {
            "day": 72.1,
            "evening": 48.1,
            "night": 39.3,
            "total": 159.5
          },
          "signedGap": {
            "day": -5.2,
            "evening": -1.1,
            "night": -0.3,
            "total": -6.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 518,
          "occupancy": 1,
          "occupiedBeds": 518,
          "required": {
            "day": 86.3,
            "evening": 57.6,
            "night": 47.1,
            "total": 191
          },
          "signedGap": {
            "day": 9,
            "evening": 8.4,
            "night": 7.5,
            "total": 24.9
          },
          "shortage": {
            "day": 9,
            "evening": 8.4,
            "night": 7.5,
            "total": 24.9
          }
        }
      }
    },
    {
      "code": "1132010024",
      "name": "沙爾德聖保祿修女會醫療財團法人聖保祿醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 90,
        "need": 118,
        "gap": -28,
        "vacancies": 16
      },
      "acute": {
        "reportedBeds": 252,
        "occupancy": 0.815,
        "current": {
          "day": 27,
          "evening": 18,
          "night": 12,
          "total": 57
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 11.4,
          "night": 17.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 264,
      "openBedDelta": 12,
      "scenarios": {
        "low": {
          "bedBase": 252,
          "occupancy": 0.815,
          "occupiedBeds": 205.4,
          "required": {
            "day": 29.3,
            "evening": 18.7,
            "night": 15.8,
            "total": 63.8
          },
          "signedGap": {
            "day": 2.3,
            "evening": 0.7,
            "night": 3.8,
            "total": 6.8
          },
          "shortage": {
            "day": 2.3,
            "evening": 0.7,
            "night": 3.8,
            "total": 6.8
          }
        },
        "mid": {
          "bedBase": 264,
          "occupancy": 0.815,
          "occupiedBeds": 215.2,
          "required": {
            "day": 30.7,
            "evening": 19.6,
            "night": 16.6,
            "total": 66.8
          },
          "signedGap": {
            "day": 3.7,
            "evening": 1.6,
            "night": 4.6,
            "total": 9.8
          },
          "shortage": {
            "day": 3.7,
            "evening": 1.6,
            "night": 4.6,
            "total": 9.8
          }
        },
        "high": {
          "bedBase": 264,
          "occupancy": 1,
          "occupiedBeds": 264,
          "required": {
            "day": 37.7,
            "evening": 24,
            "night": 20.3,
            "total": 82
          },
          "signedGap": {
            "day": 10.7,
            "evening": 6,
            "night": 8.3,
            "total": 25
          },
          "shortage": {
            "day": 10.7,
            "evening": 6,
            "night": 8.3,
            "total": 25
          }
        }
      }
    },
    {
      "code": "1135050020",
      "name": "為恭醫療財團法人為恭紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 110,
        "need": 131,
        "gap": -21,
        "vacancies": 66
      },
      "acute": {
        "reportedBeds": 300,
        "occupancy": 0.66,
        "current": {
          "day": 26.3,
          "evening": 13.8,
          "night": 12.1,
          "total": 52.2
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 14.3,
          "night": 16.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 340,
      "openBedDelta": 40,
      "scenarios": {
        "low": {
          "bedBase": 300,
          "occupancy": 0.66,
          "occupiedBeds": 198,
          "required": {
            "day": 28.3,
            "evening": 18,
            "night": 15.2,
            "total": 61.5
          },
          "signedGap": {
            "day": 2,
            "evening": 4.2,
            "night": 3.1,
            "total": 9.3
          },
          "shortage": {
            "day": 2,
            "evening": 4.2,
            "night": 3.1,
            "total": 9.3
          }
        },
        "mid": {
          "bedBase": 340,
          "occupancy": 0.66,
          "occupiedBeds": 224.4,
          "required": {
            "day": 32.1,
            "evening": 20.4,
            "night": 17.3,
            "total": 69.7
          },
          "signedGap": {
            "day": 5.8,
            "evening": 6.6,
            "night": 5.2,
            "total": 17.5
          },
          "shortage": {
            "day": 5.8,
            "evening": 6.6,
            "night": 5.2,
            "total": 17.5
          }
        },
        "high": {
          "bedBase": 340,
          "occupancy": 1,
          "occupiedBeds": 340,
          "required": {
            "day": 48.6,
            "evening": 30.9,
            "night": 26.2,
            "total": 105.6
          },
          "signedGap": {
            "day": 22.3,
            "evening": 17.1,
            "night": 14.1,
            "total": 53.4
          },
          "shortage": {
            "day": 22.3,
            "evening": 17.1,
            "night": 14.1,
            "total": 53.4
          }
        }
      }
    },
    {
      "code": "1137020511",
      "name": "秀傳醫療財團法人彰濱秀傳紀念醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 107,
        "need": 143,
        "gap": -36,
        "vacancies": 71
      },
      "acute": {
        "reportedBeds": 416,
        "occupancy": 0.517,
        "current": {
          "day": 33,
          "evening": 18,
          "night": 15.5,
          "total": 66.5
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 11.9,
          "night": 13.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 419,
      "openBedDelta": 3,
      "scenarios": {
        "low": {
          "bedBase": 416,
          "occupancy": 0.517,
          "occupiedBeds": 215.1,
          "required": {
            "day": 30.7,
            "evening": 19.6,
            "night": 16.5,
            "total": 66.8
          },
          "signedGap": {
            "day": -2.3,
            "evening": 1.6,
            "night": 1,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 1.6,
            "night": 1,
            "total": 2.6
          }
        },
        "mid": {
          "bedBase": 419,
          "occupancy": 0.517,
          "occupiedBeds": 216.6,
          "required": {
            "day": 30.9,
            "evening": 19.7,
            "night": 16.7,
            "total": 67.3
          },
          "signedGap": {
            "day": -2.1,
            "evening": 1.7,
            "night": 1.2,
            "total": 0.8
          },
          "shortage": {
            "day": 0,
            "evening": 1.7,
            "night": 1.2,
            "total": 2.9
          }
        },
        "high": {
          "bedBase": 419,
          "occupancy": 1,
          "occupiedBeds": 419,
          "required": {
            "day": 59.9,
            "evening": 38.1,
            "night": 32.2,
            "total": 130.2
          },
          "signedGap": {
            "day": 26.9,
            "evening": 20.1,
            "night": 16.7,
            "total": 63.7
          },
          "shortage": {
            "day": 26.9,
            "evening": 20.1,
            "night": 16.7,
            "total": 63.7
          }
        }
      }
    },
    {
      "code": "1142120001",
      "name": "義大醫療財團法人義大醫院",
      "level": "醫學中心",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 1210,
        "need": 1210,
        "gap": 0,
        "vacancies": 325
      },
      "acute": {
        "reportedBeds": 900,
        "occupancy": 0.516,
        "current": {
          "day": 72.1,
          "evening": 46.8,
          "night": 35.8,
          "total": 154.7
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 9.9,
          "night": 13
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 900,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 900,
          "occupancy": 0.516,
          "occupiedBeds": 464.4,
          "required": {
            "day": 77.4,
            "evening": 51.6,
            "night": 42.2,
            "total": 171.2
          },
          "signedGap": {
            "day": 5.3,
            "evening": 4.8,
            "night": 6.4,
            "total": 16.5
          },
          "shortage": {
            "day": 5.3,
            "evening": 4.8,
            "night": 6.4,
            "total": 16.5
          }
        },
        "mid": {
          "bedBase": 900,
          "occupancy": 0.516,
          "occupiedBeds": 464.4,
          "required": {
            "day": 77.4,
            "evening": 51.6,
            "night": 42.2,
            "total": 171.2
          },
          "signedGap": {
            "day": 5.3,
            "evening": 4.8,
            "night": 6.4,
            "total": 16.5
          },
          "shortage": {
            "day": 5.3,
            "evening": 4.8,
            "night": 6.4,
            "total": 16.5
          }
        },
        "high": {
          "bedBase": 900,
          "occupancy": 1,
          "occupiedBeds": 900,
          "required": {
            "day": 150,
            "evening": 100,
            "night": 81.8,
            "total": 331.8
          },
          "signedGap": {
            "day": 77.9,
            "evening": 53.2,
            "night": 46,
            "total": 177.1
          },
          "shortage": {
            "day": 77.9,
            "evening": 53.2,
            "night": 46,
            "total": 177.1
          }
        }
      }
    },
    {
      "code": "1145010038",
      "name": "臺灣基督教門諾會醫療財團法人門諾醫院",
      "level": "區域醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 113,
        "need": 141,
        "gap": -28,
        "vacancies": 52
      },
      "acute": {
        "reportedBeds": 300,
        "occupancy": 0.77,
        "current": {
          "day": 35.9,
          "evening": 20.4,
          "night": 15.2,
          "total": 71.5
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 11.3,
          "night": 15.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 300,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 300,
          "occupancy": 0.77,
          "occupiedBeds": 231,
          "required": {
            "day": 33,
            "evening": 21,
            "night": 17.8,
            "total": 71.8
          },
          "signedGap": {
            "day": -2.9,
            "evening": 0.6,
            "night": 2.6,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.6,
            "night": 2.6,
            "total": 3.2
          }
        },
        "mid": {
          "bedBase": 300,
          "occupancy": 0.77,
          "occupiedBeds": 231,
          "required": {
            "day": 33,
            "evening": 21,
            "night": 17.8,
            "total": 71.8
          },
          "signedGap": {
            "day": -2.9,
            "evening": 0.6,
            "night": 2.6,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.6,
            "night": 2.6,
            "total": 3.2
          }
        },
        "high": {
          "bedBase": 300,
          "occupancy": 1,
          "occupiedBeds": 300,
          "required": {
            "day": 42.9,
            "evening": 27.3,
            "night": 23.1,
            "total": 93.2
          },
          "signedGap": {
            "day": 7,
            "evening": 6.9,
            "night": 7.9,
            "total": 21.7
          },
          "shortage": {
            "day": 7,
            "evening": 6.9,
            "night": 7.9,
            "total": 21.7
          }
        }
      }
    },
    {
      "code": "1131090019",
      "name": "行天宮醫療志業醫療財團法人恩主公醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 163,
        "need": 170,
        "gap": -7,
        "vacancies": 60
      },
      "acute": {
        "reportedBeds": 312,
        "occupancy": 0.73,
        "current": {
          "day": 32.8,
          "evening": 22.7,
          "night": 18.1,
          "total": 73.6
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 10,
          "night": 12.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 312,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 312,
          "occupancy": 0.73,
          "occupiedBeds": 227.8,
          "required": {
            "day": 32.5,
            "evening": 20.7,
            "night": 17.5,
            "total": 70.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -2,
            "night": -0.6,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 312,
          "occupancy": 0.73,
          "occupiedBeds": 227.8,
          "required": {
            "day": 32.5,
            "evening": 20.7,
            "night": 17.5,
            "total": 70.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -2,
            "night": -0.6,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 312,
          "occupancy": 1,
          "occupiedBeds": 312,
          "required": {
            "day": 44.6,
            "evening": 28.4,
            "night": 24,
            "total": 96.9
          },
          "signedGap": {
            "day": 11.8,
            "evening": 5.7,
            "night": 5.9,
            "total": 23.3
          },
          "shortage": {
            "day": 11.8,
            "evening": 5.7,
            "night": 5.9,
            "total": 23.3
          }
        }
      }
    },
    {
      "code": "1134010022",
      "name": "宜蘭仁愛醫療財團法人宜蘭仁愛醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 14,
        "need": 16,
        "gap": -2,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 47,
        "occupancy": 0.409,
        "current": {
          "day": 3,
          "evening": 2.5,
          "night": 2,
          "total": 7.5
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 7.7,
          "night": 9.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 47,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 47,
          "occupancy": 0.409,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 47,
          "occupancy": 0.409,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 47,
          "occupancy": 1,
          "occupiedBeds": 47,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": 1.7,
            "evening": 1.1,
            "night": 1.1,
            "total": 3.9
          },
          "shortage": {
            "day": 1.7,
            "evening": 1.1,
            "night": 1.1,
            "total": 3.9
          }
        }
      }
    },
    {
      "code": "1131010011",
      "name": "醫療財團法人徐元智先生醫藥基金會亞東紀念醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 446,
        "need": 525,
        "gap": -79,
        "vacancies": 458
      },
      "acute": {
        "reportedBeds": 826,
        "occupancy": 0.9009999999999999,
        "current": {
          "day": 134,
          "evening": 84,
          "night": 70,
          "total": 288
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 8.9,
          "night": 10.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 826,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 826,
          "occupancy": 0.901,
          "occupiedBeds": 744.2,
          "required": {
            "day": 124,
            "evening": 82.7,
            "night": 67.7,
            "total": 274.4
          },
          "signedGap": {
            "day": -10,
            "evening": -1.3,
            "night": -2.3,
            "total": -13.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 826,
          "occupancy": 0.901,
          "occupiedBeds": 744.2,
          "required": {
            "day": 124,
            "evening": 82.7,
            "night": 67.7,
            "total": 274.4
          },
          "signedGap": {
            "day": -10,
            "evening": -1.3,
            "night": -2.3,
            "total": -13.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 826,
          "occupancy": 1,
          "occupiedBeds": 826,
          "required": {
            "day": 137.7,
            "evening": 91.8,
            "night": 75.1,
            "total": 304.5
          },
          "signedGap": {
            "day": 3.7,
            "evening": 7.8,
            "night": 5.1,
            "total": 16.5
          },
          "shortage": {
            "day": 3.7,
            "evening": 7.8,
            "night": 5.1,
            "total": 16.5
          }
        }
      }
    },
    {
      "code": "1134020019",
      "name": "醫療財團法人羅許基金會羅東博愛醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 243,
        "need": 261,
        "gap": -18,
        "vacancies": 65
      },
      "acute": {
        "reportedBeds": 555,
        "occupancy": 0.7809999999999999,
        "current": {
          "day": 69.1,
          "evening": 41,
          "night": 34.7,
          "total": 144.8
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 10.6,
          "night": 12.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 556,
      "openBedDelta": 1,
      "scenarios": {
        "low": {
          "bedBase": 555,
          "occupancy": 0.781,
          "occupiedBeds": 433.5,
          "required": {
            "day": 61.9,
            "evening": 39.4,
            "night": 33.3,
            "total": 134.7
          },
          "signedGap": {
            "day": -7.2,
            "evening": -1.6,
            "night": -1.4,
            "total": -10.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 556,
          "occupancy": 0.781,
          "occupiedBeds": 434.2,
          "required": {
            "day": 62,
            "evening": 39.5,
            "night": 33.4,
            "total": 134.9
          },
          "signedGap": {
            "day": -7.1,
            "evening": -1.5,
            "night": -1.3,
            "total": -9.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 556,
          "occupancy": 1,
          "occupiedBeds": 556,
          "required": {
            "day": 79.4,
            "evening": 50.5,
            "night": 42.8,
            "total": 172.7
          },
          "signedGap": {
            "day": 10.3,
            "evening": 9.5,
            "night": 8.1,
            "total": 27.9
          },
          "shortage": {
            "day": 10.3,
            "evening": 9.5,
            "night": 8.1,
            "total": 27.9
          }
        }
      }
    },
    {
      "code": "1101160026",
      "name": "醫療財團法人辜公亮基金會和信治癌中心醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 252,
        "occupancy": 0.5670000000000001,
        "current": {
          "day": 31.4,
          "evening": 31.4,
          "night": 15.7,
          "total": 78.5
        },
        "actualRatio": {
          "day": 4.6,
          "evening": 4.6,
          "night": 9.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 252,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 252,
          "occupancy": 0.567,
          "occupiedBeds": 142.9,
          "required": {
            "day": 20.4,
            "evening": 13,
            "night": 11,
            "total": 44.4
          },
          "signedGap": {
            "day": -11,
            "evening": -18.4,
            "night": -4.7,
            "total": -34.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 252,
          "occupancy": 0.567,
          "occupiedBeds": 142.9,
          "required": {
            "day": 20.4,
            "evening": 13,
            "night": 11,
            "total": 44.4
          },
          "signedGap": {
            "day": -11,
            "evening": -18.4,
            "night": -4.7,
            "total": -34.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 252,
          "occupancy": 1,
          "occupiedBeds": 252,
          "required": {
            "day": 36,
            "evening": 22.9,
            "night": 19.4,
            "total": 78.3
          },
          "signedGap": {
            "day": 4.6,
            "evening": -8.5,
            "night": 3.7,
            "total": -0.2
          },
          "shortage": {
            "day": 4.6,
            "evening": 0,
            "night": 3.7,
            "total": 8.3
          }
        }
      }
    },
    {
      "code": "1101010012",
      "name": "長庚醫療財團法人台北長庚紀念醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 108
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1140010510",
      "name": "長庚醫療財團法人嘉義長庚紀念醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "嘉義縣",
      "survey": {
        "current": 366,
        "need": 450,
        "gap": -84,
        "vacancies": 84
      },
      "acute": {
        "reportedBeds": 908,
        "occupancy": 0.877,
        "current": {
          "day": 112.3,
          "evening": 77.7,
          "night": 59.1,
          "total": 249.1
        },
        "actualRatio": {
          "day": 7.1,
          "evening": 10.2,
          "night": 13.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 908,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 908,
          "occupancy": 0.877,
          "occupiedBeds": 796.3,
          "required": {
            "day": 113.8,
            "evening": 72.4,
            "night": 61.3,
            "total": 247.4
          },
          "signedGap": {
            "day": 1.5,
            "evening": -5.3,
            "night": 2.2,
            "total": -1.7
          },
          "shortage": {
            "day": 1.5,
            "evening": 0,
            "night": 2.2,
            "total": 3.6
          }
        },
        "mid": {
          "bedBase": 908,
          "occupancy": 0.877,
          "occupiedBeds": 796.3,
          "required": {
            "day": 113.8,
            "evening": 72.4,
            "night": 61.3,
            "total": 247.4
          },
          "signedGap": {
            "day": 1.5,
            "evening": -5.3,
            "night": 2.2,
            "total": -1.7
          },
          "shortage": {
            "day": 1.5,
            "evening": 0,
            "night": 2.2,
            "total": 3.6
          }
        },
        "high": {
          "bedBase": 908,
          "occupancy": 1,
          "occupiedBeds": 908,
          "required": {
            "day": 129.7,
            "evening": 82.5,
            "night": 69.8,
            "total": 282.1
          },
          "signedGap": {
            "day": 17.4,
            "evening": 4.8,
            "night": 10.7,
            "total": 33
          },
          "shortage": {
            "day": 17.4,
            "evening": 4.8,
            "night": 10.7,
            "total": 33
          }
        }
      }
    },
    {
      "code": "1111060015",
      "name": "長庚醫療財團法人基隆長庚紀念醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 247,
        "need": 284,
        "gap": -37,
        "vacancies": 80
      },
      "acute": {
        "reportedBeds": 789,
        "occupancy": 0.741,
        "current": {
          "day": 82.2,
          "evening": 54.2,
          "night": 41.8,
          "total": 178.2
        },
        "actualRatio": {
          "day": 7.1,
          "evening": 10.8,
          "night": 14
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 503,
      "openBedDelta": -286,
      "scenarios": {
        "low": {
          "bedBase": 789,
          "occupancy": 0.741,
          "occupiedBeds": 584.6,
          "required": {
            "day": 83.5,
            "evening": 53.1,
            "night": 45,
            "total": 181.6
          },
          "signedGap": {
            "day": 1.3,
            "evening": -1.1,
            "night": 3.2,
            "total": 3.4
          },
          "shortage": {
            "day": 1.3,
            "evening": 0,
            "night": 3.2,
            "total": 4.5
          }
        },
        "mid": {
          "bedBase": 503,
          "occupancy": 0.741,
          "occupiedBeds": 372.7,
          "required": {
            "day": 53.2,
            "evening": 33.9,
            "night": 28.7,
            "total": 115.8
          },
          "signedGap": {
            "day": -29,
            "evening": -20.3,
            "night": -13.1,
            "total": -62.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 503,
          "occupancy": 1,
          "occupiedBeds": 503,
          "required": {
            "day": 71.9,
            "evening": 45.7,
            "night": 38.7,
            "total": 156.3
          },
          "signedGap": {
            "day": -10.3,
            "evening": -8.5,
            "night": -3.1,
            "total": -21.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1132070011",
      "name": "長庚醫療財團法人林口長庚紀念醫院",
      "level": "醫學中心",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 1308,
        "need": 1426,
        "gap": -118,
        "vacancies": 450
      },
      "acute": {
        "reportedBeds": 2583,
        "occupancy": 0.835,
        "current": {
          "day": 403,
          "evening": 269,
          "night": 206.1,
          "total": 878.1
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 8,
          "night": 10.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 2545,
      "openBedDelta": -38,
      "scenarios": {
        "low": {
          "bedBase": 2583,
          "occupancy": 0.835,
          "occupiedBeds": 2156.8,
          "required": {
            "day": 359.5,
            "evening": 239.6,
            "night": 196.1,
            "total": 795.2
          },
          "signedGap": {
            "day": -43.5,
            "evening": -29.4,
            "night": -10,
            "total": -82.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 2545,
          "occupancy": 0.835,
          "occupiedBeds": 2125.1,
          "required": {
            "day": 354.2,
            "evening": 236.1,
            "night": 193.2,
            "total": 783.5
          },
          "signedGap": {
            "day": -48.8,
            "evening": -32.9,
            "night": -12.9,
            "total": -94.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 2545,
          "occupancy": 1,
          "occupiedBeds": 2545,
          "required": {
            "day": 424.2,
            "evening": 282.8,
            "night": 231.4,
            "total": 938.3
          },
          "signedGap": {
            "day": 21.2,
            "evening": 13.8,
            "night": 25.3,
            "total": 60.2
          },
          "shortage": {
            "day": 21.2,
            "evening": 13.8,
            "night": 25.3,
            "total": 60.2
          }
        }
      }
    },
    {
      "code": "1142100017",
      "name": "長庚醫療財團法人高雄長庚紀念醫院",
      "level": "醫學中心",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 618,
        "need": 617,
        "gap": 1,
        "vacancies": 150
      },
      "acute": {
        "reportedBeds": 1388,
        "occupancy": 0.8220000000000001,
        "current": {
          "day": 199.4,
          "evening": 138.2,
          "night": 108.1,
          "total": 445.7
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 8.3,
          "night": 10.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 1388,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 1388,
          "occupancy": 0.822,
          "occupiedBeds": 1140.9,
          "required": {
            "day": 190.2,
            "evening": 126.8,
            "night": 103.7,
            "total": 420.6
          },
          "signedGap": {
            "day": -9.2,
            "evening": -11.4,
            "night": -4.4,
            "total": -25.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 1388,
          "occupancy": 0.822,
          "occupiedBeds": 1140.9,
          "required": {
            "day": 190.2,
            "evening": 126.8,
            "night": 103.7,
            "total": 420.6
          },
          "signedGap": {
            "day": -9.2,
            "evening": -11.4,
            "night": -4.4,
            "total": -25.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 1388,
          "occupancy": 1,
          "occupiedBeds": 1388,
          "required": {
            "day": 231.3,
            "evening": 154.2,
            "night": 126.2,
            "total": 511.7
          },
          "signedGap": {
            "day": 31.9,
            "evening": 16,
            "night": 18.1,
            "total": 66
          },
          "shortage": {
            "day": 31.9,
            "evening": 16,
            "night": 18.1,
            "total": 66
          }
        }
      }
    },
    {
      "code": "1102110011",
      "name": "高雄市立小港醫院(委託財團法人私立高雄醫學大學經營)",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 150,
        "need": 221,
        "gap": -71,
        "vacancies": 85
      },
      "acute": {
        "reportedBeds": 446,
        "occupancy": 0.677,
        "current": {
          "day": 43.5,
          "evening": 25.8,
          "night": 23.4,
          "total": 92.7
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 11.7,
          "night": 12.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 496,
      "openBedDelta": 50,
      "scenarios": {
        "low": {
          "bedBase": 446,
          "occupancy": 0.677,
          "occupiedBeds": 301.9,
          "required": {
            "day": 43.1,
            "evening": 27.4,
            "night": 23.2,
            "total": 93.8
          },
          "signedGap": {
            "day": -0.4,
            "evening": 1.6,
            "night": -0.2,
            "total": 1.1
          },
          "shortage": {
            "day": 0,
            "evening": 1.6,
            "night": 0,
            "total": 1.6
          }
        },
        "mid": {
          "bedBase": 496,
          "occupancy": 0.677,
          "occupiedBeds": 335.8,
          "required": {
            "day": 48,
            "evening": 30.5,
            "night": 25.8,
            "total": 104.3
          },
          "signedGap": {
            "day": 4.5,
            "evening": 4.7,
            "night": 2.4,
            "total": 11.6
          },
          "shortage": {
            "day": 4.5,
            "evening": 4.7,
            "night": 2.4,
            "total": 11.6
          }
        },
        "high": {
          "bedBase": 496,
          "occupancy": 1,
          "occupiedBeds": 496,
          "required": {
            "day": 70.9,
            "evening": 45.1,
            "night": 38.2,
            "total": 154.1
          },
          "signedGap": {
            "day": 27.4,
            "evening": 19.3,
            "night": 14.8,
            "total": 61.4
          },
          "shortage": {
            "day": 27.4,
            "evening": 19.3,
            "night": 14.8,
            "total": 61.4
          }
        }
      }
    },
    {
      "code": "1231030015",
      "name": "天主教耕莘醫療財團法人永和耕莘醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 59,
        "need": 77,
        "gap": -18,
        "vacancies": 40
      },
      "acute": {
        "reportedBeds": 230,
        "occupancy": 0.556,
        "current": {
          "day": 14.6,
          "evening": 10,
          "night": 9.7,
          "total": 34.3
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 12.8,
          "night": 13.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 230,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 230,
          "occupancy": 0.556,
          "occupiedBeds": 127.9,
          "required": {
            "day": 12.8,
            "evening": 9.8,
            "night": 8.5,
            "total": 31.2
          },
          "signedGap": {
            "day": -1.8,
            "evening": -0.2,
            "night": -1.2,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 230,
          "occupancy": 0.556,
          "occupiedBeds": 127.9,
          "required": {
            "day": 12.8,
            "evening": 9.8,
            "night": 8.5,
            "total": 31.2
          },
          "signedGap": {
            "day": -1.8,
            "evening": -0.2,
            "night": -1.2,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 230,
          "occupancy": 1,
          "occupiedBeds": 230,
          "required": {
            "day": 23,
            "evening": 17.7,
            "night": 15.3,
            "total": 56
          },
          "signedGap": {
            "day": 8.4,
            "evening": 7.7,
            "night": 5.6,
            "total": 21.7
          },
          "shortage": {
            "day": 8.4,
            "evening": 7.7,
            "night": 5.6,
            "total": 21.7
          }
        }
      }
    },
    {
      "code": "1231050017",
      "name": "天主教耕莘醫療財團法人耕莘醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 162,
        "need": 340,
        "gap": -178,
        "vacancies": 339
      },
      "acute": {
        "reportedBeds": 249,
        "occupancy": 0.275,
        "current": {
          "day": 9,
          "evening": 5.7,
          "night": 5.1,
          "total": 19.8
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 12,
          "night": 13.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 476,
      "openBedDelta": 227,
      "scenarios": {
        "low": {
          "bedBase": 249,
          "occupancy": 0.275,
          "occupiedBeds": 68.5,
          "required": {
            "day": 6.8,
            "evening": 5.3,
            "night": 4.6,
            "total": 16.7
          },
          "signedGap": {
            "day": -2.2,
            "evening": -0.4,
            "night": -0.5,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 476,
          "occupancy": 0.275,
          "occupiedBeds": 130.9,
          "required": {
            "day": 13.1,
            "evening": 10.1,
            "night": 8.7,
            "total": 31.9
          },
          "signedGap": {
            "day": 4.1,
            "evening": 4.4,
            "night": 3.6,
            "total": 12.1
          },
          "shortage": {
            "day": 4.1,
            "evening": 4.4,
            "night": 3.6,
            "total": 12.1
          }
        },
        "high": {
          "bedBase": 476,
          "occupancy": 1,
          "occupiedBeds": 476,
          "required": {
            "day": 47.6,
            "evening": 36.6,
            "night": 31.7,
            "total": 115.9
          },
          "signedGap": {
            "day": 38.6,
            "evening": 30.9,
            "night": 26.6,
            "total": 96.1
          },
          "shortage": {
            "day": 38.6,
            "evening": 30.9,
            "night": 26.6,
            "total": 96.1
          }
        }
      }
    },
    {
      "code": "1303260014",
      "name": "中國醫藥大學兒童醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 55,
        "need": 33,
        "gap": 22,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 120,
        "occupancy": 0.618,
        "current": {
          "day": 14.2,
          "evening": 8.1,
          "night": 6,
          "total": 28.3
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 9.2,
          "night": 12.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 120,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 120,
          "occupancy": 0.618,
          "occupiedBeds": 74.2,
          "required": {
            "day": 12.4,
            "evening": 8.2,
            "night": 6.7,
            "total": 27.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": 0.1,
            "night": 0.7,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0.7,
            "total": 0.9
          }
        },
        "mid": {
          "bedBase": 120,
          "occupancy": 0.618,
          "occupiedBeds": 74.2,
          "required": {
            "day": 12.4,
            "evening": 8.2,
            "night": 6.7,
            "total": 27.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": 0.1,
            "night": 0.7,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0.7,
            "total": 0.9
          }
        },
        "high": {
          "bedBase": 120,
          "occupancy": 1,
          "occupiedBeds": 120,
          "required": {
            "day": 20,
            "evening": 13.3,
            "night": 10.9,
            "total": 44.2
          },
          "signedGap": {
            "day": 5.8,
            "evening": 5.2,
            "night": 4.9,
            "total": 15.9
          },
          "shortage": {
            "day": 5.8,
            "evening": 5.2,
            "night": 4.9,
            "total": 15.9
          }
        }
      }
    },
    {
      "code": "1339060017",
      "name": "中國醫藥大學北港附設醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 150,
        "need": 132,
        "gap": 18,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 396,
        "occupancy": 0.48100000000000004,
        "current": {
          "day": 30,
          "evening": 17.7,
          "night": 14.7,
          "total": 62.4
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 10.8,
          "night": 13
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 396,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 396,
          "occupancy": 0.481,
          "occupiedBeds": 190.5,
          "required": {
            "day": 27.2,
            "evening": 17.3,
            "night": 14.7,
            "total": 59.2
          },
          "signedGap": {
            "day": -2.8,
            "evening": -0.4,
            "night": 0,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 396,
          "occupancy": 0.481,
          "occupiedBeds": 190.5,
          "required": {
            "day": 27.2,
            "evening": 17.3,
            "night": 14.7,
            "total": 59.2
          },
          "signedGap": {
            "day": -2.8,
            "evening": -0.4,
            "night": 0,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 396,
          "occupancy": 1,
          "occupiedBeds": 396,
          "required": {
            "day": 56.6,
            "evening": 36,
            "night": 30.5,
            "total": 123
          },
          "signedGap": {
            "day": 26.6,
            "evening": 18.3,
            "night": 15.8,
            "total": 60.6
          },
          "shortage": {
            "day": 26.6,
            "evening": 18.3,
            "night": 15.8,
            "total": 60.6
          }
        }
      }
    },
    {
      "code": "1333050017",
      "name": "中國醫藥大學新竹附設醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 92,
        "need": 86,
        "gap": 6,
        "vacancies": 120
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.389,
        "current": {
          "day": 20.9,
          "evening": 15.2,
          "night": 14.4,
          "total": 50.5
        },
        "actualRatio": {
          "day": 9.3,
          "evening": 12.8,
          "night": 13.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.389,
          "occupiedBeds": 194.1,
          "required": {
            "day": 19.4,
            "evening": 14.9,
            "night": 12.9,
            "total": 47.3
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.3,
            "night": -1.5,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.389,
          "occupiedBeds": 194.1,
          "required": {
            "day": 19.4,
            "evening": 14.9,
            "night": 12.9,
            "total": 47.3
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.3,
            "night": -1.5,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 49.9,
            "evening": 38.4,
            "night": 33.3,
            "total": 121.6
          },
          "signedGap": {
            "day": 29,
            "evening": 23.2,
            "night": 18.9,
            "total": 71.1
          },
          "shortage": {
            "day": 29,
            "evening": 23.2,
            "night": 18.9,
            "total": 71.1
          }
        }
      }
    },
    {
      "code": "1317050017",
      "name": "中國醫藥大學附設醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 608,
        "need": 562,
        "gap": 46,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 1210,
        "occupancy": 0.782,
        "current": {
          "day": 167.7,
          "evening": 104.3,
          "night": 80.7,
          "total": 352.7
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 9.1,
          "night": 11.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 1285,
      "openBedDelta": 75,
      "scenarios": {
        "low": {
          "bedBase": 1210,
          "occupancy": 0.782,
          "occupiedBeds": 946.2,
          "required": {
            "day": 157.7,
            "evening": 105.1,
            "night": 86,
            "total": 348.9
          },
          "signedGap": {
            "day": -10,
            "evening": 0.8,
            "night": 5.3,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0.8,
            "night": 5.3,
            "total": 6.2
          }
        },
        "mid": {
          "bedBase": 1285,
          "occupancy": 0.782,
          "occupiedBeds": 1004.9,
          "required": {
            "day": 167.5,
            "evening": 111.7,
            "night": 91.4,
            "total": 370.5
          },
          "signedGap": {
            "day": -0.2,
            "evening": 7.4,
            "night": 10.7,
            "total": 17.8
          },
          "shortage": {
            "day": 0,
            "evening": 7.4,
            "night": 10.7,
            "total": 18
          }
        },
        "high": {
          "bedBase": 1285,
          "occupancy": 1,
          "occupiedBeds": 1285,
          "required": {
            "day": 214.2,
            "evening": 142.8,
            "night": 116.8,
            "total": 473.8
          },
          "signedGap": {
            "day": 46.5,
            "evening": 38.5,
            "night": 36.1,
            "total": 121.1
          },
          "shortage": {
            "day": 46.5,
            "evening": 38.5,
            "night": 36.1,
            "total": 121.1
          }
        }
      }
    },
    {
      "code": "1301110511",
      "name": "中國醫藥大學附設醫院臺北分院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 33,
        "need": 36,
        "gap": -3,
        "vacancies": 11
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.396,
        "current": {
          "day": 3.5,
          "evening": 2.8,
          "night": 2,
          "total": 8.3
        },
        "actualRatio": {
          "day": 11.2,
          "evening": 14,
          "night": 19.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 99,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.396,
          "occupiedBeds": 39.2,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.2,
            "night": 0.6,
            "total": 1.2
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.2,
            "night": 0.6,
            "total": 1.2
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.396,
          "occupiedBeds": 39.2,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.2,
            "night": 0.6,
            "total": 1.2
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.2,
            "night": 0.6,
            "total": 1.2
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": 6.4,
            "evening": 4.8,
            "night": 4.6,
            "total": 15.8
          },
          "shortage": {
            "day": 6.4,
            "evening": 4.8,
            "night": 4.6,
            "total": 15.8
          }
        }
      }
    },
    {
      "code": "1317040011",
      "name": "中山醫學大學附設醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 353,
        "need": 438,
        "gap": -85,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 792,
        "occupancy": 0.81,
        "current": {
          "day": 108,
          "evening": 71.9,
          "night": 55.9,
          "total": 235.8
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 8.9,
          "night": 11.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 792,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 792,
          "occupancy": 0.81,
          "occupiedBeds": 641.5,
          "required": {
            "day": 106.9,
            "evening": 71.3,
            "night": 58.3,
            "total": 236.5
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.6,
            "night": 2.4,
            "total": 0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 2.4,
            "total": 2.4
          }
        },
        "mid": {
          "bedBase": 792,
          "occupancy": 0.81,
          "occupiedBeds": 641.5,
          "required": {
            "day": 106.9,
            "evening": 71.3,
            "night": 58.3,
            "total": 236.5
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.6,
            "night": 2.4,
            "total": 0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 2.4,
            "total": 2.4
          }
        },
        "high": {
          "bedBase": 792,
          "occupancy": 1,
          "occupiedBeds": 792,
          "required": {
            "day": 132,
            "evening": 88,
            "night": 72,
            "total": 292
          },
          "signedGap": {
            "day": 24,
            "evening": 16.1,
            "night": 16.1,
            "total": 56.2
          },
          "shortage": {
            "day": 24,
            "evening": 16.1,
            "night": 16.1,
            "total": 56.2
          }
        }
      }
    },
    {
      "code": "1303180011",
      "name": "亞洲大學附屬醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 145,
        "need": 161,
        "gap": -16,
        "vacancies": 120
      },
      "acute": {
        "reportedBeds": 350,
        "occupancy": 0.772,
        "current": {
          "day": 32.6,
          "evening": 22.7,
          "night": 17.5,
          "total": 72.8
        },
        "actualRatio": {
          "day": 8.3,
          "evening": 11.9,
          "night": 15.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 350,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 350,
          "occupancy": 0.772,
          "occupiedBeds": 270.2,
          "required": {
            "day": 38.6,
            "evening": 24.6,
            "night": 20.8,
            "total": 83.9
          },
          "signedGap": {
            "day": 6,
            "evening": 1.9,
            "night": 3.3,
            "total": 11.1
          },
          "shortage": {
            "day": 6,
            "evening": 1.9,
            "night": 3.3,
            "total": 11.1
          }
        },
        "mid": {
          "bedBase": 350,
          "occupancy": 0.772,
          "occupiedBeds": 270.2,
          "required": {
            "day": 38.6,
            "evening": 24.6,
            "night": 20.8,
            "total": 83.9
          },
          "signedGap": {
            "day": 6,
            "evening": 1.9,
            "night": 3.3,
            "total": 11.1
          },
          "shortage": {
            "day": 6,
            "evening": 1.9,
            "night": 3.3,
            "total": 11.1
          }
        },
        "high": {
          "bedBase": 350,
          "occupancy": 1,
          "occupiedBeds": 350,
          "required": {
            "day": 50,
            "evening": 31.8,
            "night": 26.9,
            "total": 108.7
          },
          "signedGap": {
            "day": 17.4,
            "evening": 9.1,
            "night": 9.4,
            "total": 35.9
          },
          "shortage": {
            "day": 17.4,
            "evening": 9.1,
            "night": 9.4,
            "total": 35.9
          }
        }
      }
    },
    {
      "code": "1301200010",
      "name": "臺北市立萬芳醫院-委託臺北醫學大學辦理",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 226,
        "need": 279,
        "gap": -53,
        "vacancies": 203
      },
      "acute": {
        "reportedBeds": 500,
        "occupancy": 0.701,
        "current": {
          "day": 68.1,
          "evening": 37.8,
          "night": 29.7,
          "total": 135.6
        },
        "actualRatio": {
          "day": 5.1,
          "evening": 9.3,
          "night": 11.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 500,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 500,
          "occupancy": 0.701,
          "occupiedBeds": 350.5,
          "required": {
            "day": 58.4,
            "evening": 38.9,
            "night": 31.9,
            "total": 129.2
          },
          "signedGap": {
            "day": -9.7,
            "evening": 1.1,
            "night": 2.2,
            "total": -6.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 2.2,
            "total": 3.3
          }
        },
        "mid": {
          "bedBase": 500,
          "occupancy": 0.701,
          "occupiedBeds": 350.5,
          "required": {
            "day": 58.4,
            "evening": 38.9,
            "night": 31.9,
            "total": 129.2
          },
          "signedGap": {
            "day": -9.7,
            "evening": 1.1,
            "night": 2.2,
            "total": -6.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 2.2,
            "total": 3.3
          }
        },
        "high": {
          "bedBase": 500,
          "occupancy": 1,
          "occupiedBeds": 500,
          "required": {
            "day": 83.3,
            "evening": 55.6,
            "night": 45.5,
            "total": 184.3
          },
          "signedGap": {
            "day": 15.2,
            "evening": 17.8,
            "night": 15.8,
            "total": 48.7
          },
          "shortage": {
            "day": 15.2,
            "evening": 17.8,
            "night": 15.8,
            "total": 48.7
          }
        }
      }
    },
    {
      "code": "1301170017",
      "name": "臺北醫學大學附設醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 191,
        "need": 220,
        "gap": -29,
        "vacancies": 93
      },
      "acute": {
        "reportedBeds": 500,
        "occupancy": 0.741,
        "current": {
          "day": 67.2,
          "evening": 30.9,
          "night": 30.1,
          "total": 128.2
        },
        "actualRatio": {
          "day": 5.5,
          "evening": 12,
          "night": 12.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 500,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 500,
          "occupancy": 0.741,
          "occupiedBeds": 370.5,
          "required": {
            "day": 61.8,
            "evening": 41.2,
            "night": 33.7,
            "total": 136.6
          },
          "signedGap": {
            "day": -5.5,
            "evening": 10.3,
            "night": 3.6,
            "total": 8.4
          },
          "shortage": {
            "day": 0,
            "evening": 10.3,
            "night": 3.6,
            "total": 13.8
          }
        },
        "mid": {
          "bedBase": 500,
          "occupancy": 0.741,
          "occupiedBeds": 370.5,
          "required": {
            "day": 61.8,
            "evening": 41.2,
            "night": 33.7,
            "total": 136.6
          },
          "signedGap": {
            "day": -5.5,
            "evening": 10.3,
            "night": 3.6,
            "total": 8.4
          },
          "shortage": {
            "day": 0,
            "evening": 10.3,
            "night": 3.6,
            "total": 13.8
          }
        },
        "high": {
          "bedBase": 500,
          "occupancy": 1,
          "occupiedBeds": 500,
          "required": {
            "day": 83.3,
            "evening": 55.6,
            "night": 45.5,
            "total": 184.3
          },
          "signedGap": {
            "day": 16.1,
            "evening": 24.7,
            "night": 15.4,
            "total": 56.1
          },
          "shortage": {
            "day": 16.1,
            "evening": 24.7,
            "night": 15.4,
            "total": 56.1
          }
        }
      }
    },
    {
      "code": "0131020016",
      "name": "新北市立聯合醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 95,
        "need": 111,
        "gap": -16,
        "vacancies": 58
      },
      "acute": {
        "reportedBeds": 326,
        "occupancy": 0.552,
        "current": {
          "day": 23.5,
          "evening": 15.4,
          "night": 14.8,
          "total": 53.7
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 11.7,
          "night": 12.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 303,
      "openBedDelta": -23,
      "scenarios": {
        "low": {
          "bedBase": 326,
          "occupancy": 0.552,
          "occupiedBeds": 180,
          "required": {
            "day": 25.7,
            "evening": 16.4,
            "night": 13.8,
            "total": 55.9
          },
          "signedGap": {
            "day": 2.2,
            "evening": 1,
            "night": -1,
            "total": 2.2
          },
          "shortage": {
            "day": 2.2,
            "evening": 1,
            "night": 0,
            "total": 3.2
          }
        },
        "mid": {
          "bedBase": 303,
          "occupancy": 0.552,
          "occupiedBeds": 167.3,
          "required": {
            "day": 23.9,
            "evening": 15.2,
            "night": 12.9,
            "total": 52
          },
          "signedGap": {
            "day": 0.4,
            "evening": -0.2,
            "night": -1.9,
            "total": -1.7
          },
          "shortage": {
            "day": 0.4,
            "evening": 0,
            "night": 0,
            "total": 0.4
          }
        },
        "high": {
          "bedBase": 303,
          "occupancy": 1,
          "occupiedBeds": 303,
          "required": {
            "day": 43.3,
            "evening": 27.5,
            "night": 23.3,
            "total": 94.1
          },
          "signedGap": {
            "day": 19.8,
            "evening": 12.1,
            "night": 8.5,
            "total": 40.4
          },
          "shortage": {
            "day": 19.8,
            "evening": 12.1,
            "night": 8.5,
            "total": 40.4
          }
        }
      }
    },
    {
      "code": "0101090517",
      "name": "臺北市立聯合醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 642,
        "need": 598,
        "gap": 44,
        "vacancies": 140
      },
      "acute": {
        "reportedBeds": 27,
        "occupancy": 0.098,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 2.6,
          "evening": 2.6,
          "night": 2.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 453,
      "openBedDelta": 426,
      "scenarios": {
        "low": {
          "bedBase": 27,
          "occupancy": 0.098,
          "occupiedBeds": 2.6,
          "required": {
            "day": 0.4,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.8
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.8,
            "night": -0.8,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 453,
          "occupancy": 0.098,
          "occupiedBeds": 44.4,
          "required": {
            "day": 6.3,
            "evening": 4,
            "night": 3.4,
            "total": 13.8
          },
          "signedGap": {
            "day": 5.3,
            "evening": 3,
            "night": 2.4,
            "total": 10.8
          },
          "shortage": {
            "day": 5.3,
            "evening": 3,
            "night": 2.4,
            "total": 10.8
          }
        },
        "high": {
          "bedBase": 453,
          "occupancy": 1,
          "occupiedBeds": 453,
          "required": {
            "day": 64.7,
            "evening": 41.2,
            "night": 34.8,
            "total": 140.7
          },
          "signedGap": {
            "day": 63.7,
            "evening": 40.2,
            "night": 33.8,
            "total": 137.7
          },
          "shortage": {
            "day": 63.7,
            "evening": 40.2,
            "night": 33.8,
            "total": 137.7
          }
        }
      }
    },
    {
      "code": "0138010027",
      "name": "衛生福利部南投醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 100,
        "need": 127,
        "gap": -27,
        "vacancies": 27
      },
      "acute": {
        "reportedBeds": 262,
        "occupancy": 0.7290000000000001,
        "current": {
          "day": 27.8,
          "evening": 17.3,
          "night": 13.4,
          "total": 58.5
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 11,
          "night": 14.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 262,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 262,
          "occupancy": 0.729,
          "occupiedBeds": 191,
          "required": {
            "day": 27.3,
            "evening": 17.4,
            "night": 14.7,
            "total": 59.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0.1,
            "night": 1.3,
            "total": 0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 1.3,
            "total": 1.4
          }
        },
        "mid": {
          "bedBase": 262,
          "occupancy": 0.729,
          "occupiedBeds": 191,
          "required": {
            "day": 27.3,
            "evening": 17.4,
            "night": 14.7,
            "total": 59.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0.1,
            "night": 1.3,
            "total": 0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 1.3,
            "total": 1.4
          }
        },
        "high": {
          "bedBase": 262,
          "occupancy": 1,
          "occupiedBeds": 262,
          "required": {
            "day": 37.4,
            "evening": 23.8,
            "night": 20.2,
            "total": 81.4
          },
          "signedGap": {
            "day": 9.6,
            "evening": 6.5,
            "night": 6.8,
            "total": 22.9
          },
          "shortage": {
            "day": 9.6,
            "evening": 6.5,
            "night": 6.8,
            "total": 22.9
          }
        }
      }
    },
    {
      "code": "0111070010",
      "name": "衛生福利部基隆醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 109,
        "need": 120,
        "gap": -11,
        "vacancies": 48
      },
      "acute": {
        "reportedBeds": 267,
        "occupancy": 0.7120000000000001,
        "current": {
          "day": 25.1,
          "evening": 14.9,
          "night": 13.4,
          "total": 53.4
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 12.8,
          "night": 14.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 263,
      "openBedDelta": -4,
      "scenarios": {
        "low": {
          "bedBase": 267,
          "occupancy": 0.712,
          "occupiedBeds": 190.1,
          "required": {
            "day": 27.2,
            "evening": 17.3,
            "night": 14.6,
            "total": 59.1
          },
          "signedGap": {
            "day": 2.1,
            "evening": 2.4,
            "night": 1.2,
            "total": 5.7
          },
          "shortage": {
            "day": 2.1,
            "evening": 2.4,
            "night": 1.2,
            "total": 5.7
          }
        },
        "mid": {
          "bedBase": 263,
          "occupancy": 0.712,
          "occupiedBeds": 187.3,
          "required": {
            "day": 26.8,
            "evening": 17,
            "night": 14.4,
            "total": 58.2
          },
          "signedGap": {
            "day": 1.7,
            "evening": 2.1,
            "night": 1,
            "total": 4.8
          },
          "shortage": {
            "day": 1.7,
            "evening": 2.1,
            "night": 1,
            "total": 4.8
          }
        },
        "high": {
          "bedBase": 263,
          "occupancy": 1,
          "occupiedBeds": 263,
          "required": {
            "day": 37.6,
            "evening": 23.9,
            "night": 20.2,
            "total": 81.7
          },
          "signedGap": {
            "day": 12.5,
            "evening": 9,
            "night": 6.8,
            "total": 28.3
          },
          "shortage": {
            "day": 12.5,
            "evening": 9,
            "night": 6.8,
            "total": 28.3
          }
        }
      }
    },
    {
      "code": "0143010011",
      "name": "衛生福利部屏東醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 411,
        "need": 5,
        "gap": 406,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 300,
        "occupancy": 0.762,
        "current": {
          "day": 35.3,
          "evening": 18,
          "night": 18.1,
          "total": 71.4
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 12.7,
          "night": 12.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 300,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 300,
          "occupancy": 0.762,
          "occupiedBeds": 228.6,
          "required": {
            "day": 32.7,
            "evening": 20.8,
            "night": 17.6,
            "total": 71
          },
          "signedGap": {
            "day": -2.6,
            "evening": 2.8,
            "night": -0.5,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 2.8,
            "night": 0,
            "total": 2.8
          }
        },
        "mid": {
          "bedBase": 300,
          "occupancy": 0.762,
          "occupiedBeds": 228.6,
          "required": {
            "day": 32.7,
            "evening": 20.8,
            "night": 17.6,
            "total": 71
          },
          "signedGap": {
            "day": -2.6,
            "evening": 2.8,
            "night": -0.5,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 2.8,
            "night": 0,
            "total": 2.8
          }
        },
        "high": {
          "bedBase": 300,
          "occupancy": 1,
          "occupiedBeds": 300,
          "required": {
            "day": 42.9,
            "evening": 27.3,
            "night": 23.1,
            "total": 93.2
          },
          "signedGap": {
            "day": 7.6,
            "evening": 9.3,
            "night": 5,
            "total": 21.8
          },
          "shortage": {
            "day": 7.6,
            "evening": 9.3,
            "night": 5,
            "total": 21.8
          }
        }
      }
    },
    {
      "code": "0141010013",
      "name": "衛生福利部新營醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 28,
        "need": 33,
        "gap": -5,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 83,
        "occupancy": 0.514,
        "current": {
          "day": 6.5,
          "evening": 3.8,
          "night": 3,
          "total": 13.3
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 11.2,
          "night": 14.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 83,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 83,
          "occupancy": 0.514,
          "occupiedBeds": 42.7,
          "required": {
            "day": 4.3,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.4
          },
          "signedGap": {
            "day": -2.2,
            "evening": -0.5,
            "night": -0.2,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 83,
          "occupancy": 0.514,
          "occupiedBeds": 42.7,
          "required": {
            "day": 4.3,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.4
          },
          "signedGap": {
            "day": -2.2,
            "evening": -0.5,
            "night": -0.2,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 83,
          "occupancy": 1,
          "occupiedBeds": 83,
          "required": {
            "day": 8.3,
            "evening": 6.4,
            "night": 5.5,
            "total": 20.2
          },
          "signedGap": {
            "day": 1.8,
            "evening": 2.6,
            "night": 2.5,
            "total": 6.9
          },
          "shortage": {
            "day": 1.8,
            "evening": 2.6,
            "night": 2.5,
            "total": 6.9
          }
        }
      }
    },
    {
      "code": "0142030019",
      "name": "衛生福利部旗山醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 75,
        "need": 83,
        "gap": -8,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 220,
        "occupancy": 0.758,
        "current": {
          "day": 19,
          "evening": 15,
          "night": 12,
          "total": 46
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 11.1,
          "night": 13.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 220,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 220,
          "occupancy": 0.758,
          "occupiedBeds": 166.8,
          "required": {
            "day": 23.8,
            "evening": 15.2,
            "night": 12.8,
            "total": 51.8
          },
          "signedGap": {
            "day": 4.8,
            "evening": 0.2,
            "night": 0.8,
            "total": 5.8
          },
          "shortage": {
            "day": 4.8,
            "evening": 0.2,
            "night": 0.8,
            "total": 5.8
          }
        },
        "mid": {
          "bedBase": 220,
          "occupancy": 0.758,
          "occupiedBeds": 166.8,
          "required": {
            "day": 23.8,
            "evening": 15.2,
            "night": 12.8,
            "total": 51.8
          },
          "signedGap": {
            "day": 4.8,
            "evening": 0.2,
            "night": 0.8,
            "total": 5.8
          },
          "shortage": {
            "day": 4.8,
            "evening": 0.2,
            "night": 0.8,
            "total": 5.8
          }
        },
        "high": {
          "bedBase": 220,
          "occupancy": 1,
          "occupiedBeds": 220,
          "required": {
            "day": 31.4,
            "evening": 20,
            "night": 16.9,
            "total": 68.4
          },
          "signedGap": {
            "day": 12.4,
            "evening": 5,
            "night": 4.9,
            "total": 22.4
          },
          "shortage": {
            "day": 12.4,
            "evening": 5,
            "night": 4.9,
            "total": 22.4
          }
        }
      }
    },
    {
      "code": "0132010014",
      "name": "衛生福利部桃園醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 318,
        "need": 310,
        "gap": 8,
        "vacancies": 76
      },
      "acute": {
        "reportedBeds": 720,
        "occupancy": 0.8009999999999999,
        "current": {
          "day": 99.8,
          "evening": 64.8,
          "night": 55.1,
          "total": 219.7
        },
        "actualRatio": {
          "day": 5.8,
          "evening": 8.9,
          "night": 10.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 720,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 720,
          "occupancy": 0.801,
          "occupiedBeds": 576.7,
          "required": {
            "day": 82.4,
            "evening": 52.4,
            "night": 44.4,
            "total": 179.2
          },
          "signedGap": {
            "day": -17.4,
            "evening": -12.4,
            "night": -10.7,
            "total": -40.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 720,
          "occupancy": 0.801,
          "occupiedBeds": 576.7,
          "required": {
            "day": 82.4,
            "evening": 52.4,
            "night": 44.4,
            "total": 179.2
          },
          "signedGap": {
            "day": -17.4,
            "evening": -12.4,
            "night": -10.7,
            "total": -40.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 720,
          "occupancy": 1,
          "occupiedBeds": 720,
          "required": {
            "day": 102.9,
            "evening": 65.5,
            "night": 55.4,
            "total": 223.7
          },
          "signedGap": {
            "day": 3.1,
            "evening": 0.7,
            "night": 0.3,
            "total": 4
          },
          "shortage": {
            "day": 3.1,
            "evening": 0.7,
            "night": 0.3,
            "total": 4
          }
        }
      }
    },
    {
      "code": "0144010015",
      "name": "衛生福利部澎湖醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "澎湖縣",
      "survey": {
        "current": 23,
        "need": 22,
        "gap": 1,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 79,
        "occupancy": 0.41,
        "current": {
          "day": 5,
          "evening": 3,
          "night": 3,
          "total": 11
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 10.8,
          "night": 10.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 66,
      "openBedDelta": -13,
      "scenarios": {
        "low": {
          "bedBase": 79,
          "occupancy": 0.41,
          "occupiedBeds": 32.4,
          "required": {
            "day": 3.2,
            "evening": 2.5,
            "night": 2.2,
            "total": 7.9
          },
          "signedGap": {
            "day": -1.8,
            "evening": -0.5,
            "night": -0.8,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 66,
          "occupancy": 0.41,
          "occupiedBeds": 27.1,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": -2.3,
            "evening": -0.9,
            "night": -1.2,
            "total": -4.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 66,
          "occupancy": 1,
          "occupiedBeds": 66,
          "required": {
            "day": 6.6,
            "evening": 5.1,
            "night": 4.4,
            "total": 16.1
          },
          "signedGap": {
            "day": 1.6,
            "evening": 2.1,
            "night": 1.4,
            "total": 5.1
          },
          "shortage": {
            "day": 1.6,
            "evening": 2.1,
            "night": 1.4,
            "total": 5.1
          }
        }
      }
    },
    {
      "code": "0117030010",
      "name": "衛生福利部臺中醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 103,
        "need": 124,
        "gap": -21,
        "vacancies": 25
      },
      "acute": {
        "reportedBeds": 358,
        "occupancy": 0.659,
        "current": {
          "day": 40.2,
          "evening": 22.8,
          "night": 20.1,
          "total": 83.1
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 10.3,
          "night": 11.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 358,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 358,
          "occupancy": 0.659,
          "occupiedBeds": 235.9,
          "required": {
            "day": 33.7,
            "evening": 21.4,
            "night": 18.1,
            "total": 73.3
          },
          "signedGap": {
            "day": -6.5,
            "evening": -1.4,
            "night": -2,
            "total": -9.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 358,
          "occupancy": 0.659,
          "occupiedBeds": 235.9,
          "required": {
            "day": 33.7,
            "evening": 21.4,
            "night": 18.1,
            "total": 73.3
          },
          "signedGap": {
            "day": -6.5,
            "evening": -1.4,
            "night": -2,
            "total": -9.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 358,
          "occupancy": 1,
          "occupiedBeds": 358,
          "required": {
            "day": 51.1,
            "evening": 32.5,
            "night": 27.5,
            "total": 111.2
          },
          "signedGap": {
            "day": 10.9,
            "evening": 9.7,
            "night": 7.4,
            "total": 28.1
          },
          "shortage": {
            "day": 10.9,
            "evening": 9.7,
            "night": 7.4,
            "total": 28.1
          }
        }
      }
    },
    {
      "code": "0131060029",
      "name": "衛生福利部臺北醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 157,
        "need": 175,
        "gap": -18,
        "vacancies": 35
      },
      "acute": {
        "reportedBeds": 345,
        "occupancy": 0.94,
        "current": {
          "day": 40.8,
          "evening": 25.5,
          "night": 24.3,
          "total": 90.6
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 12.7,
          "night": 13.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 345,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 345,
          "occupancy": 0.94,
          "occupiedBeds": 324.3,
          "required": {
            "day": 46.3,
            "evening": 29.5,
            "night": 24.9,
            "total": 100.8
          },
          "signedGap": {
            "day": 5.5,
            "evening": 4,
            "night": 0.6,
            "total": 10.2
          },
          "shortage": {
            "day": 5.5,
            "evening": 4,
            "night": 0.6,
            "total": 10.2
          }
        },
        "mid": {
          "bedBase": 345,
          "occupancy": 0.94,
          "occupiedBeds": 324.3,
          "required": {
            "day": 46.3,
            "evening": 29.5,
            "night": 24.9,
            "total": 100.8
          },
          "signedGap": {
            "day": 5.5,
            "evening": 4,
            "night": 0.6,
            "total": 10.2
          },
          "shortage": {
            "day": 5.5,
            "evening": 4,
            "night": 0.6,
            "total": 10.2
          }
        },
        "high": {
          "bedBase": 345,
          "occupancy": 1,
          "occupiedBeds": 345,
          "required": {
            "day": 49.3,
            "evening": 31.4,
            "night": 26.5,
            "total": 107.2
          },
          "signedGap": {
            "day": 8.5,
            "evening": 5.9,
            "night": 2.2,
            "total": 16.6
          },
          "shortage": {
            "day": 8.5,
            "evening": 5.9,
            "night": 2.2,
            "total": 16.6
          }
        }
      }
    },
    {
      "code": "0121050011",
      "name": "衛生福利部臺南醫院",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 91,
        "need": 120,
        "gap": -29,
        "vacancies": 77
      },
      "acute": {
        "reportedBeds": 386,
        "occupancy": 0.601,
        "current": {
          "day": 34.3,
          "evening": 16.3,
          "night": 16.6,
          "total": 67.2
        },
        "actualRatio": {
          "day": 6.8,
          "evening": 14.2,
          "night": 14
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 386,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 386,
          "occupancy": 0.601,
          "occupiedBeds": 232,
          "required": {
            "day": 33.1,
            "evening": 21.1,
            "night": 17.8,
            "total": 72.1
          },
          "signedGap": {
            "day": -1.2,
            "evening": 4.8,
            "night": 1.2,
            "total": 4.9
          },
          "shortage": {
            "day": 0,
            "evening": 4.8,
            "night": 1.2,
            "total": 6
          }
        },
        "mid": {
          "bedBase": 386,
          "occupancy": 0.601,
          "occupiedBeds": 232,
          "required": {
            "day": 33.1,
            "evening": 21.1,
            "night": 17.8,
            "total": 72.1
          },
          "signedGap": {
            "day": -1.2,
            "evening": 4.8,
            "night": 1.2,
            "total": 4.9
          },
          "shortage": {
            "day": 0,
            "evening": 4.8,
            "night": 1.2,
            "total": 6
          }
        },
        "high": {
          "bedBase": 386,
          "occupancy": 1,
          "occupiedBeds": 386,
          "required": {
            "day": 55.1,
            "evening": 35.1,
            "night": 29.7,
            "total": 119.9
          },
          "signedGap": {
            "day": 20.8,
            "evening": 18.8,
            "night": 13.1,
            "total": 52.7
          },
          "shortage": {
            "day": 20.8,
            "evening": 18.8,
            "night": 13.1,
            "total": 52.7
          }
        }
      }
    },
    {
      "code": "0146010013",
      "name": "衛生福利部臺東醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 36,
        "need": 42,
        "gap": -6,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 102,
        "occupancy": 0.41600000000000004,
        "current": {
          "day": 4.7,
          "evening": 3.3,
          "night": 2.7,
          "total": 10.7
        },
        "actualRatio": {
          "day": 9,
          "evening": 12.9,
          "night": 15.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 102,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 102,
          "occupancy": 0.416,
          "occupiedBeds": 42.4,
          "required": {
            "day": 4.2,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0,
            "night": 0.1,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 102,
          "occupancy": 0.416,
          "occupiedBeds": 42.4,
          "required": {
            "day": 4.2,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0,
            "night": 0.1,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 102,
          "occupancy": 1,
          "occupiedBeds": 102,
          "required": {
            "day": 10.2,
            "evening": 7.8,
            "night": 6.8,
            "total": 24.8
          },
          "signedGap": {
            "day": 5.5,
            "evening": 4.5,
            "night": 4.1,
            "total": 14.1
          },
          "shortage": {
            "day": 5.5,
            "evening": 4.5,
            "night": 4.1,
            "total": 14.1
          }
        }
      }
    },
    {
      "code": "0135010016",
      "name": "衛生福利部苗栗醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 78,
        "need": 104,
        "gap": -26,
        "vacancies": 38
      },
      "acute": {
        "reportedBeds": 222,
        "occupancy": 0.665,
        "current": {
          "day": 22.6,
          "evening": 10,
          "night": 10,
          "total": 42.6
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 14.8,
          "night": 14.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 201,
      "openBedDelta": -21,
      "scenarios": {
        "low": {
          "bedBase": 222,
          "occupancy": 0.665,
          "occupiedBeds": 147.6,
          "required": {
            "day": 21.1,
            "evening": 13.4,
            "night": 11.4,
            "total": 45.9
          },
          "signedGap": {
            "day": -1.5,
            "evening": 3.4,
            "night": 1.4,
            "total": 3.3
          },
          "shortage": {
            "day": 0,
            "evening": 3.4,
            "night": 1.4,
            "total": 4.8
          }
        },
        "mid": {
          "bedBase": 201,
          "occupancy": 0.665,
          "occupiedBeds": 133.7,
          "required": {
            "day": 19.1,
            "evening": 12.2,
            "night": 10.3,
            "total": 41.5
          },
          "signedGap": {
            "day": -3.5,
            "evening": 2.2,
            "night": 0.3,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 2.2,
            "night": 0.3,
            "total": 2.4
          }
        },
        "high": {
          "bedBase": 201,
          "occupancy": 1,
          "occupiedBeds": 201,
          "required": {
            "day": 28.7,
            "evening": 18.3,
            "night": 15.5,
            "total": 62.4
          },
          "signedGap": {
            "day": 6.1,
            "evening": 8.3,
            "night": 5.5,
            "total": 19.8
          },
          "shortage": {
            "day": 6.1,
            "evening": 8.3,
            "night": 5.5,
            "total": 19.8
          }
        }
      }
    },
    {
      "code": "0136010010",
      "name": "衛生福利部豐原醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 166,
        "need": 182,
        "gap": -16,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 430,
        "occupancy": 0.78,
        "current": {
          "day": 58.8,
          "evening": 24.7,
          "night": 18.4,
          "total": 101.9
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 13.6,
          "night": 18.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 430,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 430,
          "occupancy": 0.78,
          "occupiedBeds": 335.4,
          "required": {
            "day": 47.9,
            "evening": 30.5,
            "night": 25.8,
            "total": 104.2
          },
          "signedGap": {
            "day": -10.9,
            "evening": 5.8,
            "night": 7.4,
            "total": 2.3
          },
          "shortage": {
            "day": 0,
            "evening": 5.8,
            "night": 7.4,
            "total": 13.2
          }
        },
        "mid": {
          "bedBase": 430,
          "occupancy": 0.78,
          "occupiedBeds": 335.4,
          "required": {
            "day": 47.9,
            "evening": 30.5,
            "night": 25.8,
            "total": 104.2
          },
          "signedGap": {
            "day": -10.9,
            "evening": 5.8,
            "night": 7.4,
            "total": 2.3
          },
          "shortage": {
            "day": 0,
            "evening": 5.8,
            "night": 7.4,
            "total": 13.2
          }
        },
        "high": {
          "bedBase": 430,
          "occupancy": 1,
          "occupiedBeds": 430,
          "required": {
            "day": 61.4,
            "evening": 39.1,
            "night": 33.1,
            "total": 133.6
          },
          "signedGap": {
            "day": 2.6,
            "evening": 14.4,
            "night": 14.7,
            "total": 31.7
          },
          "shortage": {
            "day": 2.6,
            "evening": 14.4,
            "night": 14.7,
            "total": 31.7
          }
        }
      }
    },
    {
      "code": "0102080017",
      "name": "高雄市立民生醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 70,
        "need": 106,
        "gap": -36,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 308,
        "occupancy": 0.705,
        "current": {
          "day": 25.5,
          "evening": 13,
          "night": 13,
          "total": 51.5
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 16.7,
          "night": 16.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 295,
      "openBedDelta": -13,
      "scenarios": {
        "low": {
          "bedBase": 308,
          "occupancy": 0.705,
          "occupiedBeds": 217.1,
          "required": {
            "day": 21.7,
            "evening": 16.7,
            "night": 14.5,
            "total": 52.9
          },
          "signedGap": {
            "day": -3.8,
            "evening": 3.7,
            "night": 1.5,
            "total": 1.4
          },
          "shortage": {
            "day": 0,
            "evening": 3.7,
            "night": 1.5,
            "total": 5.2
          }
        },
        "mid": {
          "bedBase": 295,
          "occupancy": 0.705,
          "occupiedBeds": 208,
          "required": {
            "day": 20.8,
            "evening": 16,
            "night": 13.9,
            "total": 50.7
          },
          "signedGap": {
            "day": -4.7,
            "evening": 3,
            "night": 0.9,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 3,
            "night": 0.9,
            "total": 3.9
          }
        },
        "high": {
          "bedBase": 295,
          "occupancy": 1,
          "occupiedBeds": 295,
          "required": {
            "day": 29.5,
            "evening": 22.7,
            "night": 19.7,
            "total": 71.9
          },
          "signedGap": {
            "day": 4,
            "evening": 9.7,
            "night": 6.7,
            "total": 20.4
          },
          "shortage": {
            "day": 4,
            "evening": 9.7,
            "night": 6.7,
            "total": 20.4
          }
        }
      }
    },
    {
      "code": "0102020011",
      "name": "高雄市立聯合醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 60,
        "need": 79,
        "gap": -19,
        "vacancies": 58
      },
      "acute": {
        "reportedBeds": 230,
        "occupancy": 0.585,
        "current": {
          "day": 19.1,
          "evening": 13.2,
          "night": 11.7,
          "total": 44
        },
        "actualRatio": {
          "day": 7,
          "evening": 10.2,
          "night": 11.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 230,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 230,
          "occupancy": 0.585,
          "occupiedBeds": 134.5,
          "required": {
            "day": 19.2,
            "evening": 12.2,
            "night": 10.3,
            "total": 41.8
          },
          "signedGap": {
            "day": 0.1,
            "evening": -1,
            "night": -1.4,
            "total": -2.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 230,
          "occupancy": 0.585,
          "occupiedBeds": 134.5,
          "required": {
            "day": 19.2,
            "evening": 12.2,
            "night": 10.3,
            "total": 41.8
          },
          "signedGap": {
            "day": 0.1,
            "evening": -1,
            "night": -1.4,
            "total": -2.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 230,
          "occupancy": 1,
          "occupiedBeds": 230,
          "required": {
            "day": 32.9,
            "evening": 20.9,
            "night": 17.7,
            "total": 71.5
          },
          "signedGap": {
            "day": 13.8,
            "evening": 7.7,
            "night": 6,
            "total": 27.5
          },
          "shortage": {
            "day": 13.8,
            "evening": 7.7,
            "night": 6,
            "total": 27.5
          }
        }
      }
    },
    {
      "code": "0401180014",
      "name": "國立台灣大學醫學院附設醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 1126,
        "need": 1031,
        "gap": 95,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 1680,
        "occupancy": 0.9129999999999999,
        "current": {
          "day": 348.6,
          "evening": 167.1,
          "night": 112.4,
          "total": 628.1
        },
        "actualRatio": {
          "day": 4.4,
          "evening": 9.2,
          "night": 13.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 1679,
      "openBedDelta": -1,
      "scenarios": {
        "low": {
          "bedBase": 1680,
          "occupancy": 0.913,
          "occupiedBeds": 1533.8,
          "required": {
            "day": 255.6,
            "evening": 170.4,
            "night": 139.4,
            "total": 565.5
          },
          "signedGap": {
            "day": -93,
            "evening": 3.3,
            "night": 27,
            "total": -62.6
          },
          "shortage": {
            "day": 0,
            "evening": 3.3,
            "night": 27,
            "total": 30.4
          }
        },
        "mid": {
          "bedBase": 1679,
          "occupancy": 0.913,
          "occupiedBeds": 1532.9,
          "required": {
            "day": 255.5,
            "evening": 170.3,
            "night": 139.4,
            "total": 565.2
          },
          "signedGap": {
            "day": -93.1,
            "evening": 3.2,
            "night": 27,
            "total": -62.9
          },
          "shortage": {
            "day": 0,
            "evening": 3.2,
            "night": 27,
            "total": 30.2
          }
        },
        "high": {
          "bedBase": 1679,
          "occupancy": 1,
          "occupiedBeds": 1679,
          "required": {
            "day": 279.8,
            "evening": 186.6,
            "night": 152.6,
            "total": 619
          },
          "signedGap": {
            "day": -68.8,
            "evening": 19.5,
            "night": 40.2,
            "total": -9.1
          },
          "shortage": {
            "day": 0,
            "evening": 19.5,
            "night": 40.2,
            "total": 59.7
          }
        }
      }
    },
    {
      "code": "0421040011",
      "name": "國立成功大學醫學院附設醫院",
      "level": "醫學中心",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 513,
        "need": 540,
        "gap": -27,
        "vacancies": 153
      },
      "acute": {
        "reportedBeds": 916,
        "occupancy": 0.879,
        "current": {
          "day": 165,
          "evening": 94.1,
          "night": 71.6,
          "total": 330.7
        },
        "actualRatio": {
          "day": 4.9,
          "evening": 8.6,
          "night": 11.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 916,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 916,
          "occupancy": 0.879,
          "occupiedBeds": 805.2,
          "required": {
            "day": 134.2,
            "evening": 89.5,
            "night": 73.2,
            "total": 296.9
          },
          "signedGap": {
            "day": -30.8,
            "evening": -4.6,
            "night": 1.6,
            "total": -33.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.6,
            "total": 1.6
          }
        },
        "mid": {
          "bedBase": 916,
          "occupancy": 0.879,
          "occupiedBeds": 805.2,
          "required": {
            "day": 134.2,
            "evening": 89.5,
            "night": 73.2,
            "total": 296.9
          },
          "signedGap": {
            "day": -30.8,
            "evening": -4.6,
            "night": 1.6,
            "total": -33.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.6,
            "total": 1.6
          }
        },
        "high": {
          "bedBase": 916,
          "occupancy": 1,
          "occupiedBeds": 916,
          "required": {
            "day": 152.7,
            "evening": 101.8,
            "night": 83.3,
            "total": 337.7
          },
          "signedGap": {
            "day": -12.3,
            "evening": 7.7,
            "night": 11.7,
            "total": 7
          },
          "shortage": {
            "day": 0,
            "evening": 7.7,
            "night": 11.7,
            "total": 19.4
          }
        }
      }
    },
    {
      "code": "0439010527",
      "name": "國立成功大學醫學院附設醫院斗六分院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 42,
        "need": 50,
        "gap": -8,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 144,
        "occupancy": 0.6,
        "current": {
          "day": 10,
          "evening": 6.6,
          "night": 6,
          "total": 22.6
        },
        "actualRatio": {
          "day": 8.6,
          "evening": 13.1,
          "night": 14.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 144,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 144,
          "occupancy": 0.6,
          "occupiedBeds": 86.4,
          "required": {
            "day": 8.6,
            "evening": 6.6,
            "night": 5.8,
            "total": 21
          },
          "signedGap": {
            "day": -1.4,
            "evening": 0,
            "night": -0.2,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 144,
          "occupancy": 0.6,
          "occupiedBeds": 86.4,
          "required": {
            "day": 8.6,
            "evening": 6.6,
            "night": 5.8,
            "total": 21
          },
          "signedGap": {
            "day": -1.4,
            "evening": 0,
            "night": -0.2,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 144,
          "occupancy": 1,
          "occupiedBeds": 144,
          "required": {
            "day": 14.4,
            "evening": 11.1,
            "night": 9.6,
            "total": 35.1
          },
          "signedGap": {
            "day": 4.4,
            "evening": 4.5,
            "night": 3.6,
            "total": 12.5
          },
          "shortage": {
            "day": 4.4,
            "evening": 4.5,
            "night": 3.6,
            "total": 12.5
          }
        }
      }
    },
    {
      "code": "0401020013",
      "name": "國立臺灣大學醫學院附設醫院癌醫中心分院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 133,
        "need": 230,
        "gap": -97,
        "vacancies": 173
      },
      "acute": {
        "reportedBeds": 432,
        "occupancy": 0.516,
        "current": {
          "day": 46.4,
          "evening": 25.5,
          "night": 20.8,
          "total": 92.7
        },
        "actualRatio": {
          "day": 4.8,
          "evening": 8.7,
          "night": 10.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 432,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 432,
          "occupancy": 0.516,
          "occupiedBeds": 222.9,
          "required": {
            "day": 31.8,
            "evening": 20.3,
            "night": 17.1,
            "total": 69.3
          },
          "signedGap": {
            "day": -14.6,
            "evening": -5.2,
            "night": -3.7,
            "total": -23.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 432,
          "occupancy": 0.516,
          "occupiedBeds": 222.9,
          "required": {
            "day": 31.8,
            "evening": 20.3,
            "night": 17.1,
            "total": 69.3
          },
          "signedGap": {
            "day": -14.6,
            "evening": -5.2,
            "night": -3.7,
            "total": -23.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 432,
          "occupancy": 1,
          "occupiedBeds": 432,
          "required": {
            "day": 61.7,
            "evening": 39.3,
            "night": 33.2,
            "total": 134.2
          },
          "signedGap": {
            "day": 15.3,
            "evening": 13.8,
            "night": 12.4,
            "total": 41.5
          },
          "shortage": {
            "day": 15.3,
            "evening": 13.8,
            "night": 12.4,
            "total": 41.5
          }
        }
      }
    },
    {
      "code": "0401180023",
      "name": "國立臺灣大學醫學院附設醫院兒童醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 70,
        "need": 68,
        "gap": 2,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 133,
        "occupancy": 0.7559999999999999,
        "current": {
          "day": 21.5,
          "evening": 11.9,
          "night": 8.1,
          "total": 41.5
        },
        "actualRatio": {
          "day": 4.7,
          "evening": 8.4,
          "night": 12.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 133,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 133,
          "occupancy": 0.756,
          "occupiedBeds": 100.5,
          "required": {
            "day": 16.8,
            "evening": 11.2,
            "night": 9.1,
            "total": 37.1
          },
          "signedGap": {
            "day": -4.7,
            "evening": -0.7,
            "night": 1,
            "total": -4.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1,
            "total": 1
          }
        },
        "mid": {
          "bedBase": 133,
          "occupancy": 0.756,
          "occupiedBeds": 100.5,
          "required": {
            "day": 16.8,
            "evening": 11.2,
            "night": 9.1,
            "total": 37.1
          },
          "signedGap": {
            "day": -4.7,
            "evening": -0.7,
            "night": 1,
            "total": -4.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1,
            "total": 1
          }
        },
        "high": {
          "bedBase": 133,
          "occupancy": 1,
          "occupiedBeds": 133,
          "required": {
            "day": 22.2,
            "evening": 14.8,
            "night": 12.1,
            "total": 49
          },
          "signedGap": {
            "day": 0.7,
            "evening": 2.9,
            "night": 4,
            "total": 7.5
          },
          "shortage": {
            "day": 0.7,
            "evening": 2.9,
            "night": 4,
            "total": 7.5
          }
        }
      }
    },
    {
      "code": "0401190010",
      "name": "國立臺灣大學醫學院附設醫院北護分院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 10,
        "need": 11,
        "gap": -1,
        "vacancies": 9
      },
      "acute": {
        "reportedBeds": 31,
        "occupancy": 0.7090000000000001,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 11,
          "evening": 11,
          "night": 11
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 31,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 31,
          "occupancy": 0.709,
          "occupiedBeds": 22,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.4
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.3,
            "night": -0.5,
            "total": -0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 31,
          "occupancy": 0.709,
          "occupiedBeds": 22,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.4
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.3,
            "night": -0.5,
            "total": -0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 31,
          "occupancy": 1,
          "occupiedBeds": 31,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.6
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.6
          }
        }
      }
    },
    {
      "code": "0412040012",
      "name": "國立臺灣大學醫學院附設醫院新竹臺大分院新竹醫院",
      "level": "醫學中心",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 215,
        "need": 339,
        "gap": -124,
        "vacancies": 137
      },
      "acute": {
        "reportedBeds": 550,
        "occupancy": 0.64,
        "current": {
          "day": 72,
          "evening": 34.9,
          "night": 32.7,
          "total": 139.6
        },
        "actualRatio": {
          "day": 4.9,
          "evening": 10.1,
          "night": 10.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 536,
      "openBedDelta": -14,
      "scenarios": {
        "low": {
          "bedBase": 550,
          "occupancy": 0.64,
          "occupiedBeds": 352,
          "required": {
            "day": 58.7,
            "evening": 39.1,
            "night": 32,
            "total": 129.8
          },
          "signedGap": {
            "day": -13.3,
            "evening": 4.2,
            "night": -0.7,
            "total": -9.8
          },
          "shortage": {
            "day": 0,
            "evening": 4.2,
            "night": 0,
            "total": 4.2
          }
        },
        "mid": {
          "bedBase": 536,
          "occupancy": 0.64,
          "occupiedBeds": 343,
          "required": {
            "day": 57.2,
            "evening": 38.1,
            "night": 31.2,
            "total": 126.5
          },
          "signedGap": {
            "day": -14.8,
            "evening": 3.2,
            "night": -1.5,
            "total": -13.1
          },
          "shortage": {
            "day": 0,
            "evening": 3.2,
            "night": 0,
            "total": 3.2
          }
        },
        "high": {
          "bedBase": 536,
          "occupancy": 1,
          "occupiedBeds": 536,
          "required": {
            "day": 89.3,
            "evening": 59.6,
            "night": 48.7,
            "total": 197.6
          },
          "signedGap": {
            "day": 17.3,
            "evening": 24.7,
            "night": 16,
            "total": 58
          },
          "shortage": {
            "day": 17.3,
            "evening": 24.7,
            "night": 16,
            "total": 58
          }
        }
      }
    },
    {
      "code": "0439010518",
      "name": "國立臺灣大學醫學院附設醫院雲林分院",
      "level": "醫學中心",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 246,
        "need": 254,
        "gap": -8,
        "vacancies": 29
      },
      "acute": {
        "reportedBeds": 544,
        "occupancy": 0.821,
        "current": {
          "day": 79.2,
          "evening": 45.4,
          "night": 33.8,
          "total": 158.4
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 9.8,
          "night": 13.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 327,
      "openBedDelta": -217,
      "scenarios": {
        "low": {
          "bedBase": 544,
          "occupancy": 0.821,
          "occupiedBeds": 446.6,
          "required": {
            "day": 74.4,
            "evening": 49.6,
            "night": 40.6,
            "total": 164.7
          },
          "signedGap": {
            "day": -4.8,
            "evening": 4.2,
            "night": 6.8,
            "total": 6.3
          },
          "shortage": {
            "day": 0,
            "evening": 4.2,
            "night": 6.8,
            "total": 11
          }
        },
        "mid": {
          "bedBase": 327,
          "occupancy": 0.821,
          "occupiedBeds": 268.5,
          "required": {
            "day": 44.7,
            "evening": 29.8,
            "night": 24.4,
            "total": 99
          },
          "signedGap": {
            "day": -34.5,
            "evening": -15.6,
            "night": -9.4,
            "total": -59.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 327,
          "occupancy": 1,
          "occupiedBeds": 327,
          "required": {
            "day": 54.5,
            "evening": 36.3,
            "night": 29.7,
            "total": 120.6
          },
          "signedGap": {
            "day": -24.7,
            "evening": -9.1,
            "night": -4.1,
            "total": -37.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0501010019",
      "name": "三軍總醫院松山分院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 62,
        "need": 107,
        "gap": -45,
        "vacancies": 12
      },
      "acute": {
        "reportedBeds": 187,
        "occupancy": 0.585,
        "current": {
          "day": 18.5,
          "evening": 11.4,
          "night": 10.3,
          "total": 40.2
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 9.6,
          "night": 10.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 216,
      "openBedDelta": 29,
      "scenarios": {
        "low": {
          "bedBase": 187,
          "occupancy": 0.585,
          "occupiedBeds": 109.4,
          "required": {
            "day": 15.6,
            "evening": 9.9,
            "night": 8.4,
            "total": 34
          },
          "signedGap": {
            "day": -2.9,
            "evening": -1.5,
            "night": -1.9,
            "total": -6.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 216,
          "occupancy": 0.585,
          "occupiedBeds": 126.4,
          "required": {
            "day": 18.1,
            "evening": 11.5,
            "night": 9.7,
            "total": 39.3
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0.1,
            "night": -0.6,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 216,
          "occupancy": 1,
          "occupiedBeds": 216,
          "required": {
            "day": 30.9,
            "evening": 19.6,
            "night": 16.6,
            "total": 67.1
          },
          "signedGap": {
            "day": 12.4,
            "evening": 8.2,
            "night": 6.3,
            "total": 26.9
          },
          "shortage": {
            "day": 12.4,
            "evening": 8.2,
            "night": 6.3,
            "total": 26.9
          }
        }
      }
    },
    {
      "code": "0544010031",
      "name": "三軍總醫院澎湖分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "高屏",
      "city": "澎湖縣",
      "survey": {
        "current": 33,
        "need": 53,
        "gap": -20,
        "vacancies": 22
      },
      "acute": {
        "reportedBeds": 138,
        "occupancy": 0.409,
        "current": {
          "day": 6.9,
          "evening": 5,
          "night": 4.7,
          "total": 16.6
        },
        "actualRatio": {
          "day": 8.2,
          "evening": 11.3,
          "night": 12
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 138,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 138,
          "occupancy": 0.409,
          "occupiedBeds": 56.4,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.8,
            "total": 13.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.7,
            "night": -0.9,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 138,
          "occupancy": 0.409,
          "occupiedBeds": 56.4,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.8,
            "total": 13.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.7,
            "night": -0.9,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 138,
          "occupancy": 1,
          "occupiedBeds": 138,
          "required": {
            "day": 13.8,
            "evening": 10.6,
            "night": 9.2,
            "total": 33.6
          },
          "signedGap": {
            "day": 6.9,
            "evening": 5.6,
            "night": 4.5,
            "total": 17
          },
          "shortage": {
            "day": 6.9,
            "evening": 5.6,
            "night": 4.5,
            "total": 17
          }
        }
      }
    },
    {
      "code": "0511040010",
      "name": "三軍總醫院基隆分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 29,
        "need": 30,
        "gap": -1,
        "vacancies": 9
      },
      "acute": {
        "reportedBeds": 100,
        "occupancy": 0.5329999999999999,
        "current": {
          "day": 8.2,
          "evening": 3.9,
          "night": 3.4,
          "total": 15.5
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 13.7,
          "night": 15.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 100,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 100,
          "occupancy": 0.533,
          "occupiedBeds": 53.3,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.6,
            "total": 13
          },
          "signedGap": {
            "day": -2.9,
            "evening": 0.2,
            "night": 0.2,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.4
          }
        },
        "mid": {
          "bedBase": 100,
          "occupancy": 0.533,
          "occupiedBeds": 53.3,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.6,
            "total": 13
          },
          "signedGap": {
            "day": -2.9,
            "evening": 0.2,
            "night": 0.2,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.4
          }
        },
        "high": {
          "bedBase": 100,
          "occupancy": 1,
          "occupiedBeds": 100,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.4
          },
          "signedGap": {
            "day": 1.8,
            "evening": 3.8,
            "night": 3.3,
            "total": 8.9
          },
          "shortage": {
            "day": 1.8,
            "evening": 3.8,
            "night": 3.3,
            "total": 8.9
          }
        }
      }
    },
    {
      "code": "0501110514",
      "name": "三軍總醫院附設民眾診療服務處",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 620,
        "need": 756,
        "gap": -136,
        "vacancies": 327
      },
      "acute": {
        "reportedBeds": 1250,
        "occupancy": 0.674,
        "current": {
          "day": 156.6,
          "evening": 112.5,
          "night": 96.8,
          "total": 365.9
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 7.5,
          "night": 8.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 1250,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 1250,
          "occupancy": 0.674,
          "occupiedBeds": 842.5,
          "required": {
            "day": 140.4,
            "evening": 93.6,
            "night": 76.6,
            "total": 310.6
          },
          "signedGap": {
            "day": -16.2,
            "evening": -18.9,
            "night": -20.2,
            "total": -55.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 1250,
          "occupancy": 0.674,
          "occupiedBeds": 842.5,
          "required": {
            "day": 140.4,
            "evening": 93.6,
            "night": 76.6,
            "total": 310.6
          },
          "signedGap": {
            "day": -16.2,
            "evening": -18.9,
            "night": -20.2,
            "total": -55.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 1250,
          "occupancy": 1,
          "occupiedBeds": 1250,
          "required": {
            "day": 208.3,
            "evening": 138.9,
            "night": 113.6,
            "total": 460.9
          },
          "signedGap": {
            "day": 51.7,
            "evening": 26.4,
            "night": 16.8,
            "total": 95
          },
          "shortage": {
            "day": 51.7,
            "evening": 26.4,
            "night": 16.8,
            "total": 95
          }
        }
      }
    },
    {
      "code": "0517050010",
      "name": "國軍臺中總醫院中清分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 18,
        "need": 20,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 70,
        "occupancy": 0.447,
        "current": {
          "day": 3.7,
          "evening": 2.8,
          "night": 2.5,
          "total": 9
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 11.2,
          "night": 12.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 70,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 70,
          "occupancy": 0.447,
          "occupiedBeds": 31.3,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 70,
          "occupancy": 0.447,
          "occupiedBeds": 31.3,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 70,
          "occupancy": 1,
          "occupiedBeds": 70,
          "required": {
            "day": 7,
            "evening": 5.4,
            "night": 4.7,
            "total": 17.1
          },
          "signedGap": {
            "day": 3.3,
            "evening": 2.6,
            "night": 2.2,
            "total": 8.1
          },
          "shortage": {
            "day": 3.3,
            "evening": 2.6,
            "night": 2.2,
            "total": 8.1
          }
        }
      }
    },
    {
      "code": "0512040014",
      "name": "國軍桃園總醫院新竹分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 28,
        "need": 38,
        "gap": -10,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 165,
        "occupancy": 0.32,
        "current": {
          "day": 7.2,
          "evening": 5,
          "night": 4.1,
          "total": 16.3
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 10.6,
          "night": 12.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 101,
      "openBedDelta": -64,
      "scenarios": {
        "low": {
          "bedBase": 165,
          "occupancy": 0.32,
          "occupiedBeds": 52.8,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.5,
            "total": 12.9
          },
          "signedGap": {
            "day": -1.9,
            "evening": -0.9,
            "night": -0.6,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 101,
          "occupancy": 0.32,
          "occupiedBeds": 32.3,
          "required": {
            "day": 3.2,
            "evening": 2.5,
            "night": 2.2,
            "total": 7.9
          },
          "signedGap": {
            "day": -4,
            "evening": -2.5,
            "night": -1.9,
            "total": -8.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 101,
          "occupancy": 1,
          "occupiedBeds": 101,
          "required": {
            "day": 10.1,
            "evening": 7.8,
            "night": 6.7,
            "total": 24.6
          },
          "signedGap": {
            "day": 2.9,
            "evening": 2.8,
            "night": 2.6,
            "total": 8.3
          },
          "shortage": {
            "day": 2.9,
            "evening": 2.8,
            "night": 2.6,
            "total": 8.3
          }
        }
      }
    },
    {
      "code": "0536190011",
      "name": "國軍臺中總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 82,
        "need": 103,
        "gap": -21,
        "vacancies": 20
      },
      "acute": {
        "reportedBeds": 244,
        "occupancy": 0.66,
        "current": {
          "day": 23.3,
          "evening": 14.9,
          "night": 12.8,
          "total": 51
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 10.8,
          "night": 12.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 292,
      "openBedDelta": 48,
      "scenarios": {
        "low": {
          "bedBase": 244,
          "occupancy": 0.66,
          "occupiedBeds": 161,
          "required": {
            "day": 23,
            "evening": 14.6,
            "night": 12.4,
            "total": 50
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.3,
            "night": -0.4,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 292,
          "occupancy": 0.66,
          "occupiedBeds": 192.7,
          "required": {
            "day": 27.5,
            "evening": 17.5,
            "night": 14.8,
            "total": 59.9
          },
          "signedGap": {
            "day": 4.2,
            "evening": 2.6,
            "night": 2,
            "total": 8.9
          },
          "shortage": {
            "day": 4.2,
            "evening": 2.6,
            "night": 2,
            "total": 8.9
          }
        },
        "high": {
          "bedBase": 292,
          "occupancy": 1,
          "occupiedBeds": 292,
          "required": {
            "day": 41.7,
            "evening": 26.5,
            "night": 22.5,
            "total": 90.7
          },
          "signedGap": {
            "day": 18.4,
            "evening": 11.6,
            "night": 9.7,
            "total": 39.7
          },
          "shortage": {
            "day": 18.4,
            "evening": 11.6,
            "night": 9.7,
            "total": 39.7
          }
        }
      }
    },
    {
      "code": "0545040515",
      "name": "國軍花蓮總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 33,
        "need": 85,
        "gap": -52,
        "vacancies": 30
      },
      "acute": {
        "reportedBeds": 177,
        "occupancy": 0.301,
        "current": {
          "day": 7.4,
          "evening": 4.9,
          "night": 4.9,
          "total": 17.2
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 10.9,
          "night": 10.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 177,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 177,
          "occupancy": 0.301,
          "occupiedBeds": 53.3,
          "required": {
            "day": 7.6,
            "evening": 4.8,
            "night": 4.1,
            "total": 16.6
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.1,
            "night": -0.8,
            "total": -0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 177,
          "occupancy": 0.301,
          "occupiedBeds": 53.3,
          "required": {
            "day": 7.6,
            "evening": 4.8,
            "night": 4.1,
            "total": 16.6
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.1,
            "night": -0.8,
            "total": -0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 177,
          "occupancy": 1,
          "occupiedBeds": 177,
          "required": {
            "day": 25.3,
            "evening": 16.1,
            "night": 13.6,
            "total": 55
          },
          "signedGap": {
            "day": 17.9,
            "evening": 11.2,
            "night": 8.7,
            "total": 37.8
          },
          "shortage": {
            "day": 17.9,
            "evening": 11.2,
            "night": 8.7,
            "total": 37.8
          }
        }
      }
    },
    {
      "code": "0502030015",
      "name": "國軍左營總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 155,
        "need": 128,
        "gap": 27,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 345,
        "occupancy": 0.675,
        "current": {
          "day": 36.7,
          "evening": 21.3,
          "night": 19.3,
          "total": 77.3
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 10.9,
          "night": 12.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 345,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 345,
          "occupancy": 0.675,
          "occupiedBeds": 232.9,
          "required": {
            "day": 33.3,
            "evening": 21.2,
            "night": 17.9,
            "total": 72.4
          },
          "signedGap": {
            "day": -3.4,
            "evening": -0.1,
            "night": -1.4,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 345,
          "occupancy": 0.675,
          "occupiedBeds": 232.9,
          "required": {
            "day": 33.3,
            "evening": 21.2,
            "night": 17.9,
            "total": 72.4
          },
          "signedGap": {
            "day": -3.4,
            "evening": -0.1,
            "night": -1.4,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 345,
          "occupancy": 1,
          "occupiedBeds": 345,
          "required": {
            "day": 49.3,
            "evening": 31.4,
            "night": 26.5,
            "total": 107.2
          },
          "signedGap": {
            "day": 12.6,
            "evening": 10.1,
            "night": 7.2,
            "total": 29.9
          },
          "shortage": {
            "day": 12.6,
            "evening": 10.1,
            "night": 7.2,
            "total": 29.9
          }
        }
      }
    },
    {
      "code": "0502080015",
      "name": "國軍高雄總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 211,
        "need": 234,
        "gap": -23,
        "vacancies": 83
      },
      "acute": {
        "reportedBeds": 413,
        "occupancy": 0.794,
        "current": {
          "day": 52.9,
          "evening": 30.1,
          "night": 27.9,
          "total": 110.9
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 10.9,
          "night": 11.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 479,
      "openBedDelta": 66,
      "scenarios": {
        "low": {
          "bedBase": 413,
          "occupancy": 0.794,
          "occupiedBeds": 327.9,
          "required": {
            "day": 46.8,
            "evening": 29.8,
            "night": 25.2,
            "total": 101.9
          },
          "signedGap": {
            "day": -6.1,
            "evening": -0.3,
            "night": -2.7,
            "total": -9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 479,
          "occupancy": 0.794,
          "occupiedBeds": 380.3,
          "required": {
            "day": 54.3,
            "evening": 34.6,
            "night": 29.3,
            "total": 118.2
          },
          "signedGap": {
            "day": 1.4,
            "evening": 4.5,
            "night": 1.4,
            "total": 7.3
          },
          "shortage": {
            "day": 1.4,
            "evening": 4.5,
            "night": 1.4,
            "total": 7.3
          }
        },
        "high": {
          "bedBase": 479,
          "occupancy": 1,
          "occupiedBeds": 479,
          "required": {
            "day": 68.4,
            "evening": 43.5,
            "night": 36.8,
            "total": 148.8
          },
          "signedGap": {
            "day": 15.5,
            "evening": 13.4,
            "night": 8.9,
            "total": 37.9
          },
          "shortage": {
            "day": 15.5,
            "evening": 13.4,
            "night": 8.9,
            "total": 37.9
          }
        }
      }
    },
    {
      "code": "0617060018",
      "name": "臺中榮民總醫院",
      "level": "醫學中心",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 731,
        "need": 670,
        "gap": 61,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 975,
        "occupancy": 0.95,
        "current": {
          "day": 183.7,
          "evening": 110.6,
          "night": 81,
          "total": 375.3
        },
        "actualRatio": {
          "day": 5,
          "evening": 8.4,
          "night": 11.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 975,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 975,
          "occupancy": 0.95,
          "occupiedBeds": 926.3,
          "required": {
            "day": 154.4,
            "evening": 102.9,
            "night": 84.2,
            "total": 341.5
          },
          "signedGap": {
            "day": -29.3,
            "evening": -7.7,
            "night": 3.2,
            "total": -33.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 3.2,
            "total": 3.2
          }
        },
        "mid": {
          "bedBase": 975,
          "occupancy": 0.95,
          "occupiedBeds": 926.3,
          "required": {
            "day": 154.4,
            "evening": 102.9,
            "night": 84.2,
            "total": 341.5
          },
          "signedGap": {
            "day": -29.3,
            "evening": -7.7,
            "night": 3.2,
            "total": -33.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 3.2,
            "total": 3.2
          }
        },
        "high": {
          "bedBase": 975,
          "occupancy": 1,
          "occupiedBeds": 975,
          "required": {
            "day": 162.5,
            "evening": 108.3,
            "night": 88.6,
            "total": 359.5
          },
          "signedGap": {
            "day": -21.2,
            "evening": -2.3,
            "night": 7.6,
            "total": -15.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 7.6,
            "total": 7.6
          }
        }
      }
    },
    {
      "code": "0622020017",
      "name": "臺中榮民總醫院嘉義分院",
      "level": "區域醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 45,
        "need": 52,
        "gap": -7,
        "vacancies": 37
      },
      "acute": {
        "reportedBeds": 250,
        "occupancy": 0.446,
        "current": {
          "day": 15.6,
          "evening": 9.5,
          "night": 8,
          "total": 33.1
        },
        "actualRatio": {
          "day": 7.1,
          "evening": 11.7,
          "night": 13.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 250,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 250,
          "occupancy": 0.446,
          "occupiedBeds": 111.5,
          "required": {
            "day": 15.9,
            "evening": 10.1,
            "night": 8.6,
            "total": 34.6
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0.6,
            "night": 0.6,
            "total": 1.5
          },
          "shortage": {
            "day": 0.3,
            "evening": 0.6,
            "night": 0.6,
            "total": 1.5
          }
        },
        "mid": {
          "bedBase": 250,
          "occupancy": 0.446,
          "occupiedBeds": 111.5,
          "required": {
            "day": 15.9,
            "evening": 10.1,
            "night": 8.6,
            "total": 34.6
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0.6,
            "night": 0.6,
            "total": 1.5
          },
          "shortage": {
            "day": 0.3,
            "evening": 0.6,
            "night": 0.6,
            "total": 1.5
          }
        },
        "high": {
          "bedBase": 250,
          "occupancy": 1,
          "occupiedBeds": 250,
          "required": {
            "day": 35.7,
            "evening": 22.7,
            "night": 19.2,
            "total": 77.7
          },
          "signedGap": {
            "day": 20.1,
            "evening": 13.2,
            "night": 11.2,
            "total": 44.6
          },
          "shortage": {
            "day": 20.1,
            "evening": 13.2,
            "night": 11.2,
            "total": 44.6
          }
        }
      }
    },
    {
      "code": "0638020014",
      "name": "臺中榮民總醫院埔里分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 48,
        "need": 48,
        "gap": 0,
        "vacancies": 12
      },
      "acute": {
        "reportedBeds": 146,
        "occupancy": 0.7859999999999999,
        "current": {
          "day": 13.5,
          "evening": 9,
          "night": 9,
          "total": 31.5
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 12.8,
          "night": 12.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 121,
      "openBedDelta": -25,
      "scenarios": {
        "low": {
          "bedBase": 146,
          "occupancy": 0.786,
          "occupiedBeds": 114.8,
          "required": {
            "day": 11.5,
            "evening": 8.8,
            "night": 7.7,
            "total": 28
          },
          "signedGap": {
            "day": -2,
            "evening": -0.2,
            "night": -1.3,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 121,
          "occupancy": 0.786,
          "occupiedBeds": 95.1,
          "required": {
            "day": 9.5,
            "evening": 7.3,
            "night": 6.3,
            "total": 23.2
          },
          "signedGap": {
            "day": -4,
            "evening": -1.7,
            "night": -2.7,
            "total": -8.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 121,
          "occupancy": 1,
          "occupiedBeds": 121,
          "required": {
            "day": 12.1,
            "evening": 9.3,
            "night": 8.1,
            "total": 29.5
          },
          "signedGap": {
            "day": -1.4,
            "evening": 0.3,
            "night": -0.9,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0.3,
            "night": 0,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "0601160016",
      "name": "臺北榮民總醫院",
      "level": "醫學中心",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 1245,
        "need": 1062,
        "gap": 183,
        "vacancies": 74
      },
      "acute": {
        "reportedBeds": 2404,
        "occupancy": 0.7759999999999999,
        "current": {
          "day": 336.9,
          "evening": 216.1,
          "night": 158.5,
          "total": 711.5
        },
        "actualRatio": {
          "day": 5.5,
          "evening": 8.6,
          "night": 11.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 2404,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 2404,
          "occupancy": 0.776,
          "occupiedBeds": 1865.5,
          "required": {
            "day": 310.9,
            "evening": 207.3,
            "night": 169.6,
            "total": 687.8
          },
          "signedGap": {
            "day": -26,
            "evening": -8.8,
            "night": 11.1,
            "total": -23.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 11.1,
            "total": 11.1
          }
        },
        "mid": {
          "bedBase": 2404,
          "occupancy": 0.776,
          "occupiedBeds": 1865.5,
          "required": {
            "day": 310.9,
            "evening": 207.3,
            "night": 169.6,
            "total": 687.8
          },
          "signedGap": {
            "day": -26,
            "evening": -8.8,
            "night": 11.1,
            "total": -23.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 11.1,
            "total": 11.1
          }
        },
        "high": {
          "bedBase": 2404,
          "occupancy": 1,
          "occupiedBeds": 2404,
          "required": {
            "day": 400.7,
            "evening": 267.1,
            "night": 218.5,
            "total": 886.3
          },
          "signedGap": {
            "day": 63.8,
            "evening": 51,
            "night": 60,
            "total": 174.8
          },
          "shortage": {
            "day": 63.8,
            "evening": 51,
            "night": 60,
            "total": 174.8
          }
        }
      }
    },
    {
      "code": "0634070018",
      "name": "臺北榮民總醫院員山分院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 30,
        "need": 30,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 104,
        "occupancy": 0.647,
        "current": {
          "day": 7,
          "evening": 6,
          "night": 5,
          "total": 18
        },
        "actualRatio": {
          "day": 9.6,
          "evening": 11.2,
          "night": 13.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 88,
      "openBedDelta": -16,
      "scenarios": {
        "low": {
          "bedBase": 104,
          "occupancy": 0.647,
          "occupiedBeds": 67.3,
          "required": {
            "day": 6.7,
            "evening": 5.2,
            "night": 4.5,
            "total": 16.4
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.8,
            "night": -0.5,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 88,
          "occupancy": 0.647,
          "occupiedBeds": 56.9,
          "required": {
            "day": 5.7,
            "evening": 4.4,
            "night": 3.8,
            "total": 13.9
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.6,
            "night": -1.2,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 88,
          "occupancy": 1,
          "occupiedBeds": 88,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": 1.8,
            "evening": 0.8,
            "night": 0.9,
            "total": 3.4
          },
          "shortage": {
            "day": 1.8,
            "evening": 0.8,
            "night": 0.9,
            "total": 3.4
          }
        }
      }
    },
    {
      "code": "0633030010",
      "name": "臺北榮民總醫院新竹分院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 35,
        "need": 65,
        "gap": -30,
        "vacancies": 21
      },
      "acute": {
        "reportedBeds": 145,
        "occupancy": 0.6809999999999999,
        "current": {
          "day": 11,
          "evening": 8.6,
          "night": 7.9,
          "total": 27.5
        },
        "actualRatio": {
          "day": 9,
          "evening": 11.5,
          "night": 12.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 145,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 145,
          "occupancy": 0.681,
          "occupiedBeds": 98.7,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1,
            "night": -1.3,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 145,
          "occupancy": 0.681,
          "occupiedBeds": 98.7,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1,
            "night": -1.3,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 145,
          "occupancy": 1,
          "occupiedBeds": 145,
          "required": {
            "day": 14.5,
            "evening": 11.2,
            "night": 9.7,
            "total": 35.3
          },
          "signedGap": {
            "day": 3.5,
            "evening": 2.6,
            "night": 1.8,
            "total": 7.8
          },
          "shortage": {
            "day": 3.5,
            "evening": 2.6,
            "night": 1.8,
            "total": 7.8
          }
        }
      }
    },
    {
      "code": "0632010014",
      "name": "臺北榮民總醫院桃園分院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 63,
        "need": 64,
        "gap": -1,
        "vacancies": 12
      },
      "acute": {
        "reportedBeds": 286,
        "occupancy": 0.469,
        "current": {
          "day": 16.8,
          "evening": 11.7,
          "night": 10,
          "total": 38.5
        },
        "actualRatio": {
          "day": 8,
          "evening": 11.5,
          "night": 13.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 286,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 286,
          "occupancy": 0.469,
          "occupiedBeds": 134.1,
          "required": {
            "day": 19.2,
            "evening": 12.2,
            "night": 10.3,
            "total": 41.7
          },
          "signedGap": {
            "day": 2.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 3.2
          },
          "shortage": {
            "day": 2.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 3.2
          }
        },
        "mid": {
          "bedBase": 286,
          "occupancy": 0.469,
          "occupiedBeds": 134.1,
          "required": {
            "day": 19.2,
            "evening": 12.2,
            "night": 10.3,
            "total": 41.7
          },
          "signedGap": {
            "day": 2.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 3.2
          },
          "shortage": {
            "day": 2.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 3.2
          }
        },
        "high": {
          "bedBase": 286,
          "occupancy": 1,
          "occupiedBeds": 286,
          "required": {
            "day": 40.9,
            "evening": 26,
            "night": 22,
            "total": 88.9
          },
          "signedGap": {
            "day": 24.1,
            "evening": 14.3,
            "night": 12,
            "total": 50.4
          },
          "shortage": {
            "day": 24.1,
            "evening": 14.3,
            "night": 12,
            "total": 50.4
          }
        }
      }
    },
    {
      "code": "0602030026",
      "name": "高雄榮民總醫院",
      "level": "醫學中心",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 515,
        "need": 515,
        "gap": 0,
        "vacancies": 48
      },
      "acute": {
        "reportedBeds": 971,
        "occupancy": 0.851,
        "current": {
          "day": 152,
          "evening": 85.7,
          "night": 57.6,
          "total": 295.3
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 9.6,
          "night": 14.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 971,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 971,
          "occupancy": 0.851,
          "occupiedBeds": 826.3,
          "required": {
            "day": 137.7,
            "evening": 91.8,
            "night": 75.1,
            "total": 304.7
          },
          "signedGap": {
            "day": -14.3,
            "evening": 6.1,
            "night": 17.5,
            "total": 9.4
          },
          "shortage": {
            "day": 0,
            "evening": 6.1,
            "night": 17.5,
            "total": 23.6
          }
        },
        "mid": {
          "bedBase": 971,
          "occupancy": 0.851,
          "occupiedBeds": 826.3,
          "required": {
            "day": 137.7,
            "evening": 91.8,
            "night": 75.1,
            "total": 304.7
          },
          "signedGap": {
            "day": -14.3,
            "evening": 6.1,
            "night": 17.5,
            "total": 9.4
          },
          "shortage": {
            "day": 0,
            "evening": 6.1,
            "night": 17.5,
            "total": 23.6
          }
        },
        "high": {
          "bedBase": 971,
          "occupancy": 1,
          "occupiedBeds": 971,
          "required": {
            "day": 161.8,
            "evening": 107.9,
            "night": 88.3,
            "total": 358
          },
          "signedGap": {
            "day": 9.8,
            "evening": 22.2,
            "night": 30.7,
            "total": 62.7
          },
          "shortage": {
            "day": 9.8,
            "evening": 22.2,
            "night": 30.7,
            "total": 62.7
          }
        }
      }
    },
    {
      "code": "0643130018",
      "name": "屏東榮民總醫院龍泉分院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 22,
        "need": 22,
        "gap": 0,
        "vacancies": 35
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.45899999999999996,
        "current": {
          "day": 5.9,
          "evening": 4,
          "night": 4,
          "total": 13.9
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 11.4,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 99,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.459,
          "occupiedBeds": 45.4,
          "required": {
            "day": 4.5,
            "evening": 3.5,
            "night": 3,
            "total": 11.1
          },
          "signedGap": {
            "day": -1.4,
            "evening": -0.5,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.459,
          "occupiedBeds": 45.4,
          "required": {
            "day": 4.5,
            "evening": 3.5,
            "night": 3,
            "total": 11.1
          },
          "signedGap": {
            "day": -1.4,
            "evening": -0.5,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": 4,
            "evening": 3.6,
            "night": 2.6,
            "total": 10.2
          },
          "shortage": {
            "day": 4,
            "evening": 3.6,
            "night": 2.6,
            "total": 10.2
          }
        }
      }
    },
    {
      "code": "0641310018",
      "name": "高雄榮民總醫院臺南分院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 78,
        "need": 97,
        "gap": -19,
        "vacancies": 40
      },
      "acute": {
        "reportedBeds": 200,
        "occupancy": 0.627,
        "current": {
          "day": 19.5,
          "evening": 11,
          "night": 10,
          "total": 40.5
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 11.4,
          "night": 12.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 200,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 200,
          "occupancy": 0.627,
          "occupiedBeds": 125.4,
          "required": {
            "day": 12.5,
            "evening": 9.6,
            "night": 8.4,
            "total": 30.5
          },
          "signedGap": {
            "day": -7,
            "evening": -1.4,
            "night": -1.6,
            "total": -10
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 200,
          "occupancy": 0.627,
          "occupiedBeds": 125.4,
          "required": {
            "day": 12.5,
            "evening": 9.6,
            "night": 8.4,
            "total": 30.5
          },
          "signedGap": {
            "day": -7,
            "evening": -1.4,
            "night": -1.6,
            "total": -10
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 200,
          "occupancy": 1,
          "occupiedBeds": 200,
          "required": {
            "day": 20,
            "evening": 15.4,
            "night": 13.3,
            "total": 48.7
          },
          "signedGap": {
            "day": 0.5,
            "evening": 4.4,
            "night": 3.3,
            "total": 8.2
          },
          "shortage": {
            "day": 0.5,
            "evening": 4.4,
            "night": 3.3,
            "total": 8.2
          }
        }
      }
    },
    {
      "code": "0901020013",
      "name": "中山醫療社團法人中山醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 38,
        "need": 55,
        "gap": -17,
        "vacancies": 22
      },
      "acute": {
        "reportedBeds": 134,
        "occupancy": 0.6559999999999999,
        "current": {
          "day": 13.7,
          "evening": 12.1,
          "night": 12.3,
          "total": 38.1
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 7.3,
          "night": 7.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 134,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 134,
          "occupancy": 0.656,
          "occupiedBeds": 87.9,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": -4.9,
            "evening": -5.3,
            "night": -6.4,
            "total": -16.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 134,
          "occupancy": 0.656,
          "occupiedBeds": 87.9,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": -4.9,
            "evening": -5.3,
            "night": -6.4,
            "total": -16.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 134,
          "occupancy": 1,
          "occupiedBeds": 134,
          "required": {
            "day": 13.4,
            "evening": 10.3,
            "night": 8.9,
            "total": 32.6
          },
          "signedGap": {
            "day": -0.3,
            "evening": -1.8,
            "night": -3.4,
            "total": -5.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0938030016",
      "name": "佑民醫療社團法人佑民醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 26,
        "need": 21,
        "gap": 5,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 176,
        "occupancy": 0.389,
        "current": {
          "day": 10,
          "evening": 7,
          "night": 6,
          "total": 23
        },
        "actualRatio": {
          "day": 6.8,
          "evening": 9.8,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 132,
      "openBedDelta": -44,
      "scenarios": {
        "low": {
          "bedBase": 176,
          "occupancy": 0.389,
          "occupiedBeds": 68.5,
          "required": {
            "day": 6.8,
            "evening": 5.3,
            "night": 4.6,
            "total": 16.7
          },
          "signedGap": {
            "day": -3.2,
            "evening": -1.7,
            "night": -1.4,
            "total": -6.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 132,
          "occupancy": 0.389,
          "occupiedBeds": 51.3,
          "required": {
            "day": 5.1,
            "evening": 3.9,
            "night": 3.4,
            "total": 12.5
          },
          "signedGap": {
            "day": -4.9,
            "evening": -3.1,
            "night": -2.6,
            "total": -10.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 132,
          "occupancy": 1,
          "occupiedBeds": 132,
          "required": {
            "day": 13.2,
            "evening": 10.2,
            "night": 8.8,
            "total": 32.2
          },
          "signedGap": {
            "day": 3.2,
            "evening": 3.2,
            "night": 2.8,
            "total": 9.2
          },
          "shortage": {
            "day": 3.2,
            "evening": 3.2,
            "night": 2.8,
            "total": 9.2
          }
        }
      }
    },
    {
      "code": "0936050029",
      "name": "光田醫療社團法人光田綜合醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 263,
        "need": 295,
        "gap": -32,
        "vacancies": 62
      },
      "acute": {
        "reportedBeds": 745,
        "occupancy": 0.575,
        "current": {
          "day": 81,
          "evening": 36.5,
          "night": 29.5,
          "total": 147
        },
        "actualRatio": {
          "day": 5.3,
          "evening": 11.7,
          "night": 14.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 448,
      "openBedDelta": -297,
      "scenarios": {
        "low": {
          "bedBase": 745,
          "occupancy": 0.575,
          "occupiedBeds": 428.4,
          "required": {
            "day": 61.2,
            "evening": 38.9,
            "night": 33,
            "total": 133.1
          },
          "signedGap": {
            "day": -19.8,
            "evening": 2.4,
            "night": 3.5,
            "total": -13.9
          },
          "shortage": {
            "day": 0,
            "evening": 2.4,
            "night": 3.5,
            "total": 5.9
          }
        },
        "mid": {
          "bedBase": 448,
          "occupancy": 0.575,
          "occupiedBeds": 257.6,
          "required": {
            "day": 36.8,
            "evening": 23.4,
            "night": 19.8,
            "total": 80
          },
          "signedGap": {
            "day": -44.2,
            "evening": -13.1,
            "night": -9.7,
            "total": -67
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 448,
          "occupancy": 1,
          "occupiedBeds": 448,
          "required": {
            "day": 64,
            "evening": 40.7,
            "night": 34.5,
            "total": 139.2
          },
          "signedGap": {
            "day": -17,
            "evening": 4.2,
            "night": 5,
            "total": -7.8
          },
          "shortage": {
            "day": 0,
            "evening": 4.2,
            "night": 5,
            "total": 9.2
          }
        }
      }
    },
    {
      "code": "0905320023",
      "name": "台南市立醫院(委託秀傳醫療社團法人經營)",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 136,
        "need": 140,
        "gap": -4,
        "vacancies": 46
      },
      "acute": {
        "reportedBeds": 346,
        "occupancy": 0.769,
        "current": {
          "day": 43.1,
          "evening": 26.9,
          "night": 22,
          "total": 92
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 9.9,
          "night": 12.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 346,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 346,
          "occupancy": 0.769,
          "occupiedBeds": 266.1,
          "required": {
            "day": 38,
            "evening": 24.2,
            "night": 20.5,
            "total": 82.7
          },
          "signedGap": {
            "day": -5.1,
            "evening": -2.7,
            "night": -1.5,
            "total": -9.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 346,
          "occupancy": 0.769,
          "occupiedBeds": 266.1,
          "required": {
            "day": 38,
            "evening": 24.2,
            "night": 20.5,
            "total": 82.7
          },
          "signedGap": {
            "day": -5.1,
            "evening": -2.7,
            "night": -1.5,
            "total": -9.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 346,
          "occupancy": 1,
          "occupiedBeds": 346,
          "required": {
            "day": 49.4,
            "evening": 31.5,
            "night": 26.6,
            "total": 107.5
          },
          "signedGap": {
            "day": 6.3,
            "evening": 4.6,
            "night": 4.6,
            "total": 15.5
          },
          "shortage": {
            "day": 6.3,
            "evening": 4.6,
            "night": 4.6,
            "total": 15.5
          }
        }
      }
    },
    {
      "code": "0943030019",
      "name": "安泰醫療社團法人安泰醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 150,
        "need": 210,
        "gap": -60,
        "vacancies": 69
      },
      "acute": {
        "reportedBeds": 450,
        "occupancy": 0.397,
        "current": {
          "day": 26,
          "evening": 19.6,
          "night": 16.3,
          "total": 61.9
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 9.1,
          "night": 11
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 450,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 450,
          "occupancy": 0.397,
          "occupiedBeds": 178.7,
          "required": {
            "day": 25.5,
            "evening": 16.2,
            "night": 13.7,
            "total": 55.5
          },
          "signedGap": {
            "day": -0.5,
            "evening": -3.4,
            "night": -2.6,
            "total": -6.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 450,
          "occupancy": 0.397,
          "occupiedBeds": 178.7,
          "required": {
            "day": 25.5,
            "evening": 16.2,
            "night": 13.7,
            "total": 55.5
          },
          "signedGap": {
            "day": -0.5,
            "evening": -3.4,
            "night": -2.6,
            "total": -6.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 450,
          "occupancy": 1,
          "occupiedBeds": 450,
          "required": {
            "day": 64.3,
            "evening": 40.9,
            "night": 34.6,
            "total": 139.8
          },
          "signedGap": {
            "day": 38.3,
            "evening": 21.3,
            "night": 18.3,
            "total": 77.9
          },
          "shortage": {
            "day": 38.3,
            "evening": 21.3,
            "night": 18.3,
            "total": 77.9
          }
        }
      }
    },
    {
      "code": "0943010017",
      "name": "寶建醫療社團法人寶建醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 88,
        "need": 110,
        "gap": -22,
        "vacancies": 60
      },
      "acute": {
        "reportedBeds": 278,
        "occupancy": 0.665,
        "current": {
          "day": 27.9,
          "evening": 13.9,
          "night": 14,
          "total": 55.8
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 13.3,
          "night": 13.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 278,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 278,
          "occupancy": 0.665,
          "occupiedBeds": 184.9,
          "required": {
            "day": 26.4,
            "evening": 16.8,
            "night": 14.2,
            "total": 57.4
          },
          "signedGap": {
            "day": -1.5,
            "evening": 2.9,
            "night": 0.2,
            "total": 1.6
          },
          "shortage": {
            "day": 0,
            "evening": 2.9,
            "night": 0.2,
            "total": 3.1
          }
        },
        "mid": {
          "bedBase": 278,
          "occupancy": 0.665,
          "occupiedBeds": 184.9,
          "required": {
            "day": 26.4,
            "evening": 16.8,
            "night": 14.2,
            "total": 57.4
          },
          "signedGap": {
            "day": -1.5,
            "evening": 2.9,
            "night": 0.2,
            "total": 1.6
          },
          "shortage": {
            "day": 0,
            "evening": 2.9,
            "night": 0.2,
            "total": 3.1
          }
        },
        "high": {
          "bedBase": 278,
          "occupancy": 1,
          "occupiedBeds": 278,
          "required": {
            "day": 39.7,
            "evening": 25.3,
            "night": 21.4,
            "total": 86.4
          },
          "signedGap": {
            "day": 11.8,
            "evening": 11.4,
            "night": 7.4,
            "total": 30.6
          },
          "shortage": {
            "day": 11.8,
            "evening": 11.4,
            "night": 7.4,
            "total": 30.6
          }
        }
      }
    },
    {
      "code": "0936030018",
      "name": "李綜合醫療社團法人大甲李綜合醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 47,
        "need": 49,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 194,
        "occupancy": 0.494,
        "current": {
          "day": 12,
          "evening": 10,
          "night": 8,
          "total": 30
        },
        "actualRatio": {
          "day": 8,
          "evening": 9.6,
          "night": 12
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 194,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 194,
          "occupancy": 0.494,
          "occupiedBeds": 95.8,
          "required": {
            "day": 13.7,
            "evening": 8.7,
            "night": 7.4,
            "total": 29.8
          },
          "signedGap": {
            "day": 1.7,
            "evening": -1.3,
            "night": -0.6,
            "total": -0.2
          },
          "shortage": {
            "day": 1.7,
            "evening": 0,
            "night": 0,
            "total": 1.7
          }
        },
        "mid": {
          "bedBase": 194,
          "occupancy": 0.494,
          "occupiedBeds": 95.8,
          "required": {
            "day": 13.7,
            "evening": 8.7,
            "night": 7.4,
            "total": 29.8
          },
          "signedGap": {
            "day": 1.7,
            "evening": -1.3,
            "night": -0.6,
            "total": -0.2
          },
          "shortage": {
            "day": 1.7,
            "evening": 0,
            "night": 0,
            "total": 1.7
          }
        },
        "high": {
          "bedBase": 194,
          "occupancy": 1,
          "occupiedBeds": 194,
          "required": {
            "day": 27.7,
            "evening": 17.6,
            "night": 14.9,
            "total": 60.3
          },
          "signedGap": {
            "day": 15.7,
            "evening": 7.6,
            "night": 6.9,
            "total": 30.3
          },
          "shortage": {
            "day": 15.7,
            "evening": 7.6,
            "night": 6.9,
            "total": 30.3
          }
        }
      }
    },
    {
      "code": "0935020027",
      "name": "李綜合醫療社團法人苑裡李綜合醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 35,
        "need": 45,
        "gap": -10,
        "vacancies": 20
      },
      "acute": {
        "reportedBeds": 183,
        "occupancy": 0.47600000000000003,
        "current": {
          "day": 14.7,
          "evening": 6,
          "night": 3,
          "total": 23.7
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 14.5,
          "night": 29
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 117,
      "openBedDelta": -66,
      "scenarios": {
        "low": {
          "bedBase": 183,
          "occupancy": 0.476,
          "occupiedBeds": 87.1,
          "required": {
            "day": 8.7,
            "evening": 6.7,
            "night": 5.8,
            "total": 21.2
          },
          "signedGap": {
            "day": -6,
            "evening": 0.7,
            "night": 2.8,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0.7,
            "night": 2.8,
            "total": 3.5
          }
        },
        "mid": {
          "bedBase": 117,
          "occupancy": 0.476,
          "occupiedBeds": 55.7,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.7,
            "total": 13.6
          },
          "signedGap": {
            "day": -9.1,
            "evening": -1.7,
            "night": 0.7,
            "total": -10.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.7,
            "total": 0.7
          }
        },
        "high": {
          "bedBase": 117,
          "occupancy": 1,
          "occupiedBeds": 117,
          "required": {
            "day": 11.7,
            "evening": 9,
            "night": 7.8,
            "total": 28.5
          },
          "signedGap": {
            "day": -3,
            "evening": 3,
            "night": 4.8,
            "total": 4.8
          },
          "shortage": {
            "day": 0,
            "evening": 3,
            "night": 4.8,
            "total": 7.8
          }
        }
      }
    },
    {
      "code": "0933050018",
      "name": "東元醫療社團法人東元綜合醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 96,
        "need": 87,
        "gap": 9,
        "vacancies": 42
      },
      "acute": {
        "reportedBeds": 279,
        "occupancy": 0.373,
        "current": {
          "day": 16.5,
          "evening": 11.5,
          "night": 11.5,
          "total": 39.5
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 9,
          "night": 9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 279,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 279,
          "occupancy": 0.373,
          "occupiedBeds": 104.1,
          "required": {
            "day": 14.9,
            "evening": 9.5,
            "night": 8,
            "total": 32.3
          },
          "signedGap": {
            "day": -1.6,
            "evening": -2,
            "night": -3.5,
            "total": -7.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 279,
          "occupancy": 0.373,
          "occupiedBeds": 104.1,
          "required": {
            "day": 14.9,
            "evening": 9.5,
            "night": 8,
            "total": 32.3
          },
          "signedGap": {
            "day": -1.6,
            "evening": -2,
            "night": -3.5,
            "total": -7.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 279,
          "occupancy": 1,
          "occupiedBeds": 279,
          "required": {
            "day": 39.9,
            "evening": 25.4,
            "night": 21.5,
            "total": 86.7
          },
          "signedGap": {
            "day": 23.4,
            "evening": 13.9,
            "night": 10,
            "total": 47.2
          },
          "shortage": {
            "day": 23.4,
            "evening": 13.9,
            "night": 10,
            "total": 47.2
          }
        }
      }
    },
    {
      "code": "0917070029",
      "name": "林新醫療社團法人林新醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 412,
        "occupancy": 0.511,
        "current": {
          "day": 32,
          "evening": 22,
          "night": 19,
          "total": 73
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 9.6,
          "night": 11.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 412,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 412,
          "occupancy": 0.511,
          "occupiedBeds": 210.5,
          "required": {
            "day": 30.1,
            "evening": 19.1,
            "night": 16.2,
            "total": 65.4
          },
          "signedGap": {
            "day": -1.9,
            "evening": -2.9,
            "night": -2.8,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 412,
          "occupancy": 0.511,
          "occupiedBeds": 210.5,
          "required": {
            "day": 30.1,
            "evening": 19.1,
            "night": 16.2,
            "total": 65.4
          },
          "signedGap": {
            "day": -1.9,
            "evening": -2.9,
            "night": -2.8,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 412,
          "occupancy": 1,
          "occupiedBeds": 412,
          "required": {
            "day": 58.9,
            "evening": 37.5,
            "night": 31.7,
            "total": 128
          },
          "signedGap": {
            "day": 26.9,
            "evening": 15.5,
            "night": 12.7,
            "total": 55
          },
          "shortage": {
            "day": 26.9,
            "evening": 15.5,
            "night": 12.7,
            "total": 55
          }
        }
      }
    },
    {
      "code": "0903150014",
      "name": "林新醫療社團法人烏日林新醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 100,
        "need": 63,
        "gap": 37,
        "vacancies": 50
      },
      "acute": {
        "reportedBeds": 300,
        "occupancy": 0.5870000000000001,
        "current": {
          "day": 17,
          "evening": 11,
          "night": 11,
          "total": 39
        },
        "actualRatio": {
          "day": 10.4,
          "evening": 16,
          "night": 16
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 300,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 300,
          "occupancy": 0.587,
          "occupiedBeds": 176.1,
          "required": {
            "day": 17.6,
            "evening": 13.5,
            "night": 11.7,
            "total": 42.9
          },
          "signedGap": {
            "day": 0.6,
            "evening": 2.5,
            "night": 0.7,
            "total": 3.9
          },
          "shortage": {
            "day": 0.6,
            "evening": 2.5,
            "night": 0.7,
            "total": 3.9
          }
        },
        "mid": {
          "bedBase": 300,
          "occupancy": 0.587,
          "occupiedBeds": 176.1,
          "required": {
            "day": 17.6,
            "evening": 13.5,
            "night": 11.7,
            "total": 42.9
          },
          "signedGap": {
            "day": 0.6,
            "evening": 2.5,
            "night": 0.7,
            "total": 3.9
          },
          "shortage": {
            "day": 0.6,
            "evening": 2.5,
            "night": 0.7,
            "total": 3.9
          }
        },
        "high": {
          "bedBase": 300,
          "occupancy": 1,
          "occupiedBeds": 300,
          "required": {
            "day": 30,
            "evening": 23.1,
            "night": 20,
            "total": 73.1
          },
          "signedGap": {
            "day": 13,
            "evening": 12.1,
            "night": 9,
            "total": 34.1
          },
          "shortage": {
            "day": 13,
            "evening": 12.1,
            "night": 9,
            "total": 34.1
          }
        }
      }
    },
    {
      "code": "0937010019",
      "name": "秀傳醫療社團法人秀傳紀念醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 153,
        "need": 156,
        "gap": -3,
        "vacancies": 39
      },
      "acute": {
        "reportedBeds": 594,
        "occupancy": 0.518,
        "current": {
          "day": 44.1,
          "evening": 26.7,
          "night": 27.1,
          "total": 97.9
        },
        "actualRatio": {
          "day": 7,
          "evening": 11.5,
          "night": 11.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 594,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 594,
          "occupancy": 0.518,
          "occupiedBeds": 307.7,
          "required": {
            "day": 44,
            "evening": 28,
            "night": 23.7,
            "total": 95.6
          },
          "signedGap": {
            "day": -0.1,
            "evening": 1.3,
            "night": -3.4,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 1.3,
            "night": 0,
            "total": 1.3
          }
        },
        "mid": {
          "bedBase": 594,
          "occupancy": 0.518,
          "occupiedBeds": 307.7,
          "required": {
            "day": 44,
            "evening": 28,
            "night": 23.7,
            "total": 95.6
          },
          "signedGap": {
            "day": -0.1,
            "evening": 1.3,
            "night": -3.4,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 1.3,
            "night": 0,
            "total": 1.3
          }
        },
        "high": {
          "bedBase": 594,
          "occupancy": 1,
          "occupiedBeds": 594,
          "required": {
            "day": 84.9,
            "evening": 54,
            "night": 45.7,
            "total": 184.5
          },
          "signedGap": {
            "day": 40.8,
            "evening": 27.3,
            "night": 18.6,
            "total": 86.6
          },
          "shortage": {
            "day": 40.8,
            "evening": 27.3,
            "night": 18.6,
            "total": 86.6
          }
        }
      }
    },
    {
      "code": "0936060016",
      "name": "童綜合醫療社團法人童綜合醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 317,
        "need": 350,
        "gap": -33,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 702,
        "occupancy": 0.738,
        "current": {
          "day": 91,
          "evening": 48,
          "night": 38,
          "total": 177
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 10.8,
          "night": 13.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 702,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 702,
          "occupancy": 0.738,
          "occupiedBeds": 518.1,
          "required": {
            "day": 74,
            "evening": 47.1,
            "night": 39.9,
            "total": 161
          },
          "signedGap": {
            "day": -17,
            "evening": -0.9,
            "night": 1.9,
            "total": -16
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.9,
            "total": 1.9
          }
        },
        "mid": {
          "bedBase": 702,
          "occupancy": 0.738,
          "occupiedBeds": 518.1,
          "required": {
            "day": 74,
            "evening": 47.1,
            "night": 39.9,
            "total": 161
          },
          "signedGap": {
            "day": -17,
            "evening": -0.9,
            "night": 1.9,
            "total": -16
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 1.9,
            "total": 1.9
          }
        },
        "high": {
          "bedBase": 702,
          "occupancy": 1,
          "occupiedBeds": 702,
          "required": {
            "day": 100.3,
            "evening": 63.8,
            "night": 54,
            "total": 218.1
          },
          "signedGap": {
            "day": 9.3,
            "evening": 15.8,
            "night": 16,
            "total": 41.1
          },
          "shortage": {
            "day": 9.3,
            "evening": 15.8,
            "night": 16,
            "total": 41.1
          }
        }
      }
    },
    {
      "code": "0901190010",
      "name": "西園醫療社團法人西園醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 42,
        "need": 42,
        "gap": 0,
        "vacancies": 22
      },
      "acute": {
        "reportedBeds": 115,
        "occupancy": 0.5539999999999999,
        "current": {
          "day": 13,
          "evening": 9,
          "night": 7,
          "total": 29
        },
        "actualRatio": {
          "day": 4.9,
          "evening": 7.1,
          "night": 9.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 115,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 115,
          "occupancy": 0.554,
          "occupiedBeds": 63.7,
          "required": {
            "day": 6.4,
            "evening": 4.9,
            "night": 4.2,
            "total": 15.5
          },
          "signedGap": {
            "day": -6.6,
            "evening": -4.1,
            "night": -2.8,
            "total": -13.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 115,
          "occupancy": 0.554,
          "occupiedBeds": 63.7,
          "required": {
            "day": 6.4,
            "evening": 4.9,
            "night": 4.2,
            "total": 15.5
          },
          "signedGap": {
            "day": -6.6,
            "evening": -4.1,
            "night": -2.8,
            "total": -13.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 115,
          "occupancy": 1,
          "occupiedBeds": 115,
          "required": {
            "day": 11.5,
            "evening": 8.8,
            "night": 7.7,
            "total": 28
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.2,
            "night": 0.7,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.7,
            "total": 0.7
          }
        }
      }
    },
    {
      "code": "0902080013",
      "name": "阮綜合醫療社團法人阮綜合醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 117,
        "need": 122,
        "gap": -5,
        "vacancies": 29
      },
      "acute": {
        "reportedBeds": 433,
        "occupancy": 0.732,
        "current": {
          "day": 40.6,
          "evening": 26.5,
          "night": 21.8,
          "total": 88.9
        },
        "actualRatio": {
          "day": 7.8,
          "evening": 12,
          "night": 14.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 432,
      "openBedDelta": -1,
      "scenarios": {
        "low": {
          "bedBase": 433,
          "occupancy": 0.732,
          "occupiedBeds": 317,
          "required": {
            "day": 45.3,
            "evening": 28.8,
            "night": 24.4,
            "total": 98.5
          },
          "signedGap": {
            "day": 4.7,
            "evening": 2.3,
            "night": 2.6,
            "total": 9.6
          },
          "shortage": {
            "day": 4.7,
            "evening": 2.3,
            "night": 2.6,
            "total": 9.6
          }
        },
        "mid": {
          "bedBase": 432,
          "occupancy": 0.732,
          "occupiedBeds": 316.2,
          "required": {
            "day": 45.2,
            "evening": 28.7,
            "night": 24.3,
            "total": 98.2
          },
          "signedGap": {
            "day": 4.6,
            "evening": 2.2,
            "night": 2.5,
            "total": 9.3
          },
          "shortage": {
            "day": 4.6,
            "evening": 2.2,
            "night": 2.5,
            "total": 9.3
          }
        },
        "high": {
          "bedBase": 432,
          "occupancy": 1,
          "occupiedBeds": 432,
          "required": {
            "day": 61.7,
            "evening": 39.3,
            "night": 33.2,
            "total": 134.2
          },
          "signedGap": {
            "day": 21.1,
            "evening": 12.8,
            "night": 11.4,
            "total": 45.3
          },
          "shortage": {
            "day": 21.1,
            "evening": 12.8,
            "night": 11.4,
            "total": 45.3
          }
        }
      }
    },
    {
      "code": "1101020027",
      "name": "中心診所醫療財團法人中心綜合醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 26,
        "need": 38,
        "gap": -12,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 109,
        "occupancy": 0.449,
        "current": {
          "day": 6,
          "evening": 4,
          "night": 4,
          "total": 14
        },
        "actualRatio": {
          "day": 8.2,
          "evening": 12.2,
          "night": 12.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 109,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 109,
          "occupancy": 0.449,
          "occupiedBeds": 48.9,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.2,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 109,
          "occupancy": 0.449,
          "occupiedBeds": 48.9,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.2,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 109,
          "occupancy": 1,
          "occupiedBeds": 109,
          "required": {
            "day": 10.9,
            "evening": 8.4,
            "night": 7.3,
            "total": 26.6
          },
          "signedGap": {
            "day": 4.9,
            "evening": 4.4,
            "night": 3.3,
            "total": 12.6
          },
          "shortage": {
            "day": 4.9,
            "evening": 4.4,
            "night": 3.3,
            "total": 12.6
          }
        }
      }
    },
    {
      "code": "1117010019",
      "name": "仁愛醫療財團法人台中仁愛醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 17,
        "need": 16,
        "gap": 1,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 70,
        "occupancy": 0.545,
        "current": {
          "day": 4.1,
          "evening": 4,
          "night": 4,
          "total": 12.1
        },
        "actualRatio": {
          "day": 9.3,
          "evening": 9.5,
          "night": 9.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": -22,
      "scenarios": {
        "low": {
          "bedBase": 70,
          "occupancy": 0.545,
          "occupiedBeds": 38.2,
          "required": {
            "day": 3.8,
            "evening": 2.9,
            "night": 2.5,
            "total": 9.3
          },
          "signedGap": {
            "day": -0.3,
            "evening": -1.1,
            "night": -1.5,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.545,
          "occupiedBeds": 26.2,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.4
          },
          "signedGap": {
            "day": -1.5,
            "evening": -2,
            "night": -2.3,
            "total": -5.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 0.7,
            "evening": -0.3,
            "night": -0.8,
            "total": -0.4
          },
          "shortage": {
            "day": 0.7,
            "evening": 0,
            "night": 0,
            "total": 0.7
          }
        }
      }
    },
    {
      "code": "0122020517",
      "name": "衛生福利部嘉義醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 46,
        "need": 66,
        "gap": -20,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 249,
        "occupancy": 0.49200000000000005,
        "current": {
          "day": 15.6,
          "evening": 11.5,
          "night": 9.5,
          "total": 36.6
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 10.7,
          "night": 12.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 290,
      "openBedDelta": 41,
      "scenarios": {
        "low": {
          "bedBase": 249,
          "occupancy": 0.492,
          "occupiedBeds": 122.5,
          "required": {
            "day": 12.3,
            "evening": 9.4,
            "night": 8.2,
            "total": 29.8
          },
          "signedGap": {
            "day": -3.3,
            "evening": -2.1,
            "night": -1.3,
            "total": -6.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 290,
          "occupancy": 0.492,
          "occupiedBeds": 142.7,
          "required": {
            "day": 14.3,
            "evening": 11,
            "night": 9.5,
            "total": 34.8
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.5,
            "night": 0,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 290,
          "occupancy": 1,
          "occupiedBeds": 290,
          "required": {
            "day": 29,
            "evening": 22.3,
            "night": 19.3,
            "total": 70.6
          },
          "signedGap": {
            "day": 13.4,
            "evening": 10.8,
            "night": 9.8,
            "total": 34
          },
          "shortage": {
            "day": 13.4,
            "evening": 10.8,
            "night": 9.8,
            "total": 34
          }
        }
      }
    },
    {
      "code": "0137170515",
      "name": "衛生福利部彰化醫院",
      "level": "區域醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 91,
        "need": 105,
        "gap": -14,
        "vacancies": 14
      },
      "acute": {
        "reportedBeds": 275,
        "occupancy": 0.665,
        "current": {
          "day": 29.5,
          "evening": 14.4,
          "night": 11.7,
          "total": 55.6
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 12.7,
          "night": 15.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 275,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 275,
          "occupancy": 0.665,
          "occupiedBeds": 182.9,
          "required": {
            "day": 26.1,
            "evening": 16.6,
            "night": 14.1,
            "total": 56.8
          },
          "signedGap": {
            "day": -3.4,
            "evening": 2.2,
            "night": 2.4,
            "total": 1.2
          },
          "shortage": {
            "day": 0,
            "evening": 2.2,
            "night": 2.4,
            "total": 4.6
          }
        },
        "mid": {
          "bedBase": 275,
          "occupancy": 0.665,
          "occupiedBeds": 182.9,
          "required": {
            "day": 26.1,
            "evening": 16.6,
            "night": 14.1,
            "total": 56.8
          },
          "signedGap": {
            "day": -3.4,
            "evening": 2.2,
            "night": 2.4,
            "total": 1.2
          },
          "shortage": {
            "day": 0,
            "evening": 2.2,
            "night": 2.4,
            "total": 4.6
          }
        },
        "high": {
          "bedBase": 275,
          "occupancy": 1,
          "occupiedBeds": 275,
          "required": {
            "day": 39.3,
            "evening": 25,
            "night": 21.2,
            "total": 85.4
          },
          "signedGap": {
            "day": 9.8,
            "evening": 10.6,
            "night": 9.5,
            "total": 29.8
          },
          "shortage": {
            "day": 9.8,
            "evening": 10.6,
            "night": 9.5,
            "total": 29.8
          }
        }
      }
    },
    {
      "code": "0143040019",
      "name": "衛生福利部恆春旅遊醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 14,
        "need": 18,
        "gap": -4,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 34,
        "occupancy": 0.7390000000000001,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 8.4,
          "evening": 8.4,
          "night": 8.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 46,
      "openBedDelta": 12,
      "scenarios": {
        "low": {
          "bedBase": 34,
          "occupancy": 0.739,
          "occupiedBeds": 25.1,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -1.1,
            "night": -1.3,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 46,
          "occupancy": 0.739,
          "occupiedBeds": 34,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.3,
            "total": 8.3
          },
          "signedGap": {
            "day": 0.4,
            "evening": -0.4,
            "night": -0.7,
            "total": -0.7
          },
          "shortage": {
            "day": 0.4,
            "evening": 0,
            "night": 0,
            "total": 0.4
          }
        },
        "high": {
          "bedBase": 46,
          "occupancy": 1,
          "occupiedBeds": 46,
          "required": {
            "day": 4.6,
            "evening": 3.5,
            "night": 3.1,
            "total": 11.2
          },
          "signedGap": {
            "day": 1.6,
            "evening": 0.5,
            "night": 0.1,
            "total": 2.2
          },
          "shortage": {
            "day": 1.6,
            "evening": 0.5,
            "night": 0.1,
            "total": 2.2
          }
        }
      }
    },
    {
      "code": "0140010028",
      "name": "衛生福利部朴子醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義縣",
      "survey": {
        "current": 24,
        "need": 30,
        "gap": -6,
        "vacancies": 17
      },
      "acute": {
        "reportedBeds": 70,
        "occupancy": 0.7040000000000001,
        "current": {
          "day": 5.5,
          "evening": 3.8,
          "night": 3.7,
          "total": 13
        },
        "actualRatio": {
          "day": 9,
          "evening": 13,
          "night": 13.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 70,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 70,
          "occupancy": 0.704,
          "occupiedBeds": 49.3,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 12
          },
          "signedGap": {
            "day": -0.6,
            "evening": 0,
            "night": -0.4,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 70,
          "occupancy": 0.704,
          "occupiedBeds": 49.3,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 12
          },
          "signedGap": {
            "day": -0.6,
            "evening": 0,
            "night": -0.4,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 70,
          "occupancy": 1,
          "occupiedBeds": 70,
          "required": {
            "day": 7,
            "evening": 5.4,
            "night": 4.7,
            "total": 17.1
          },
          "signedGap": {
            "day": 1.5,
            "evening": 1.6,
            "night": 1,
            "total": 4.1
          },
          "shortage": {
            "day": 1.5,
            "evening": 1.6,
            "night": 1,
            "total": 4.1
          }
        }
      }
    },
    {
      "code": "0132110519",
      "name": "衛生福利部桃園醫院新屋分院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 43,
        "need": 42,
        "gap": 1,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 126,
        "occupancy": 0.797,
        "current": {
          "day": 13.5,
          "evening": 8.8,
          "night": 7.3,
          "total": 29.6
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 11.4,
          "night": 13.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 126,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 126,
          "occupancy": 0.797,
          "occupiedBeds": 100.4,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.5
          },
          "signedGap": {
            "day": -3.5,
            "evening": -1.1,
            "night": -0.6,
            "total": -5.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 126,
          "occupancy": 0.797,
          "occupiedBeds": 100.4,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.5
          },
          "signedGap": {
            "day": -3.5,
            "evening": -1.1,
            "night": -0.6,
            "total": -5.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 126,
          "occupancy": 1,
          "occupiedBeds": 126,
          "required": {
            "day": 12.6,
            "evening": 9.7,
            "night": 8.4,
            "total": 30.7
          },
          "signedGap": {
            "day": -0.9,
            "evening": 0.9,
            "night": 1.1,
            "total": 1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.9,
            "night": 1.1,
            "total": 2
          }
        }
      }
    },
    {
      "code": "0131060010",
      "name": "衛生福利部樂生療養院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 181,
        "need": 198,
        "gap": -17,
        "vacancies": 17
      },
      "acute": {
        "reportedBeds": 193,
        "occupancy": 0.7879999999999999,
        "current": {
          "day": 12.3,
          "evening": 11.5,
          "night": 10.1,
          "total": 33.9
        },
        "actualRatio": {
          "day": 12.4,
          "evening": 13.2,
          "night": 15.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 193,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 193,
          "occupancy": 0.788,
          "occupiedBeds": 152.1,
          "required": {
            "day": 15.2,
            "evening": 11.7,
            "night": 10.1,
            "total": 37
          },
          "signedGap": {
            "day": 2.9,
            "evening": 0.2,
            "night": 0,
            "total": 3.1
          },
          "shortage": {
            "day": 2.9,
            "evening": 0.2,
            "night": 0,
            "total": 3.1
          }
        },
        "mid": {
          "bedBase": 193,
          "occupancy": 0.788,
          "occupiedBeds": 152.1,
          "required": {
            "day": 15.2,
            "evening": 11.7,
            "night": 10.1,
            "total": 37
          },
          "signedGap": {
            "day": 2.9,
            "evening": 0.2,
            "night": 0,
            "total": 3.1
          },
          "shortage": {
            "day": 2.9,
            "evening": 0.2,
            "night": 0,
            "total": 3.1
          }
        },
        "high": {
          "bedBase": 193,
          "occupancy": 1,
          "occupiedBeds": 193,
          "required": {
            "day": 19.3,
            "evening": 14.8,
            "night": 12.9,
            "total": 47
          },
          "signedGap": {
            "day": 7,
            "evening": 3.3,
            "night": 2.8,
            "total": 13.1
          },
          "shortage": {
            "day": 7,
            "evening": 3.3,
            "night": 2.8,
            "total": 13.1
          }
        }
      }
    },
    {
      "code": "0141270019",
      "name": "衛生福利部胸腔病院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 15,
        "need": 15,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 52,
        "occupancy": 0.5589999999999999,
        "current": {
          "day": 3.4,
          "evening": 2.4,
          "night": 2.2,
          "total": 8
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 12.1,
          "night": 13.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 52,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 52,
          "occupancy": 0.559,
          "occupiedBeds": 29.1,
          "required": {
            "day": 2.9,
            "evening": 2.2,
            "night": 1.9,
            "total": 7.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.2,
            "night": -0.3,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 52,
          "occupancy": 0.559,
          "occupiedBeds": 29.1,
          "required": {
            "day": 2.9,
            "evening": 2.2,
            "night": 1.9,
            "total": 7.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.2,
            "night": -0.3,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 52,
          "occupancy": 1,
          "occupiedBeds": 52,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.5,
            "total": 12.7
          },
          "signedGap": {
            "day": 1.8,
            "evening": 1.6,
            "night": 1.3,
            "total": 4.7
          },
          "shortage": {
            "day": 1.8,
            "evening": 1.6,
            "night": 1.3,
            "total": 4.7
          }
        }
      }
    },
    {
      "code": "0141060513",
      "name": "衛生福利部臺南醫院新化分院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 47,
        "occupancy": 0.424,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 10,
          "evening": 10,
          "night": 10
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 47,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 47,
          "occupancy": 0.424,
          "occupiedBeds": 19.9,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 47,
          "occupancy": 0.424,
          "occupiedBeds": 19.9,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 47,
          "occupancy": 1,
          "occupiedBeds": 47,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": 2.7,
            "evening": 1.6,
            "night": 1.1,
            "total": 5.4
          },
          "shortage": {
            "day": 2.7,
            "evening": 1.6,
            "night": 1.1,
            "total": 5.4
          }
        }
      }
    },
    {
      "code": "0146020537",
      "name": "衛生福利部臺東醫院成功分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 12,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 8,
      "scenarios": {
        "low": {
          "bedBase": 12,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "0145010019",
      "name": "衛生福利部花蓮醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 63,
        "need": 80,
        "gap": -17,
        "vacancies": 22
      },
      "acute": {
        "reportedBeds": 136,
        "occupancy": 0.588,
        "current": {
          "day": 8.3,
          "evening": 6.1,
          "night": 6.1,
          "total": 20.5
        },
        "actualRatio": {
          "day": 9.6,
          "evening": 13.1,
          "night": 13.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 148,
      "openBedDelta": 12,
      "scenarios": {
        "low": {
          "bedBase": 136,
          "occupancy": 0.588,
          "occupiedBeds": 80,
          "required": {
            "day": 8,
            "evening": 6.2,
            "night": 5.3,
            "total": 19.5
          },
          "signedGap": {
            "day": -0.3,
            "evening": 0.1,
            "night": -0.8,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 148,
          "occupancy": 0.588,
          "occupiedBeds": 87,
          "required": {
            "day": 8.7,
            "evening": 6.7,
            "night": 5.8,
            "total": 21.2
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.6,
            "night": -0.3,
            "total": 0.7
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0,
            "total": 1
          }
        },
        "high": {
          "bedBase": 148,
          "occupancy": 1,
          "occupiedBeds": 148,
          "required": {
            "day": 14.8,
            "evening": 11.4,
            "night": 9.9,
            "total": 36.1
          },
          "signedGap": {
            "day": 6.5,
            "evening": 5.3,
            "night": 3.8,
            "total": 15.6
          },
          "shortage": {
            "day": 6.5,
            "evening": 5.3,
            "night": 3.8,
            "total": 15.6
          }
        }
      }
    },
    {
      "code": "0145080011",
      "name": "衛生福利部花蓮醫院豐濱原住民分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 6,
        "need": 7,
        "gap": -1,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "0190030516",
      "name": "衛生福利部金門醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "金門縣",
      "survey": {
        "current": 43,
        "need": 48,
        "gap": -5,
        "vacancies": 18
      },
      "acute": {
        "reportedBeds": 113,
        "occupancy": 0.797,
        "current": {
          "day": 11.9,
          "evening": 9.3,
          "night": 7.4,
          "total": 28.6
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 9.7,
          "night": 12.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 113,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 113,
          "occupancy": 0.797,
          "occupiedBeds": 90.1,
          "required": {
            "day": 9,
            "evening": 6.9,
            "night": 6,
            "total": 21.9
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.4,
            "night": -1.4,
            "total": -6.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 113,
          "occupancy": 0.797,
          "occupiedBeds": 90.1,
          "required": {
            "day": 9,
            "evening": 6.9,
            "night": 6,
            "total": 21.9
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.4,
            "night": -1.4,
            "total": -6.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 113,
          "occupancy": 1,
          "occupiedBeds": 113,
          "required": {
            "day": 11.3,
            "evening": 8.7,
            "night": 7.5,
            "total": 27.5
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.6,
            "night": 0.1,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        }
      }
    },
    {
      "code": "0211070012",
      "name": "基隆市立醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 7,
        "need": 9,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 17,
        "occupancy": 0.825,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 7,
          "evening": 14,
          "night": 14
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 17,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 17,
          "occupancy": 0.825,
          "occupiedBeds": 14,
          "required": {
            "day": 1.4,
            "evening": 1.1,
            "night": 0.9,
            "total": 3.4
          },
          "signedGap": {
            "day": -0.6,
            "evening": 0.1,
            "night": -0.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 17,
          "occupancy": 0.825,
          "occupiedBeds": 14,
          "required": {
            "day": 1.4,
            "evening": 1.1,
            "night": 0.9,
            "total": 3.4
          },
          "signedGap": {
            "day": -0.6,
            "evening": 0.1,
            "night": -0.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 17,
          "occupancy": 1,
          "occupiedBeds": 17,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": -0.3,
            "evening": 0.3,
            "night": 0.1,
            "total": 0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.3,
            "night": 0.1,
            "total": 0.4
          }
        }
      }
    },
    {
      "code": "0291010010",
      "name": "連江縣立醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "連江縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 26,
        "occupancy": 0.065,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 1.7,
          "evening": 1.7,
          "night": 1.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 26,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 26,
          "occupancy": 0.065,
          "occupiedBeds": 1.7,
          "required": {
            "day": 0.2,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 26,
          "occupancy": 0.065,
          "occupiedBeds": 1.7,
          "required": {
            "day": 0.2,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 26,
          "occupancy": 1,
          "occupiedBeds": 26,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "signedGap": {
            "day": 1.6,
            "evening": 1,
            "night": 0.7,
            "total": 3.3
          },
          "shortage": {
            "day": 1.6,
            "evening": 1,
            "night": 0.7,
            "total": 3.3
          }
        }
      }
    },
    {
      "code": "0431270012",
      "name": "國立臺灣大學醫學院附設醫院金山分院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 11,
        "need": 13,
        "gap": -2,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.401,
        "current": {
          "day": 3.4,
          "evening": 3.1,
          "night": 2,
          "total": 8.5
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 6.2,
          "night": 9.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.401,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -0.7,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.401,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -0.7,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 1.4,
            "evening": 0.6,
            "night": 1.2,
            "total": 3.2
          },
          "shortage": {
            "day": 1.4,
            "evening": 0.6,
            "night": 1.2,
            "total": 3.2
          }
        }
      }
    },
    {
      "code": "0434010518",
      "name": "國立陽明交通大學附設醫院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 149,
        "need": 210,
        "gap": -61,
        "vacancies": 86
      },
      "acute": {
        "reportedBeds": 400,
        "occupancy": 0.8270000000000001,
        "current": {
          "day": 47,
          "evening": 30.2,
          "night": 22,
          "total": 99.2
        },
        "actualRatio": {
          "day": 7,
          "evening": 11,
          "night": 15
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 400,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 400,
          "occupancy": 0.827,
          "occupiedBeds": 330.8,
          "required": {
            "day": 47.3,
            "evening": 30.1,
            "night": 25.4,
            "total": 102.8
          },
          "signedGap": {
            "day": 0.3,
            "evening": -0.1,
            "night": 3.4,
            "total": 3.6
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 3.4,
            "total": 3.7
          }
        },
        "mid": {
          "bedBase": 400,
          "occupancy": 0.827,
          "occupiedBeds": 330.8,
          "required": {
            "day": 47.3,
            "evening": 30.1,
            "night": 25.4,
            "total": 102.8
          },
          "signedGap": {
            "day": 0.3,
            "evening": -0.1,
            "night": 3.4,
            "total": 3.6
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 3.4,
            "total": 3.7
          }
        },
        "high": {
          "bedBase": 400,
          "occupancy": 1,
          "occupiedBeds": 400,
          "required": {
            "day": 57.1,
            "evening": 36.4,
            "night": 30.8,
            "total": 124.3
          },
          "signedGap": {
            "day": 10.1,
            "evening": 6.2,
            "night": 8.8,
            "total": 25.1
          },
          "shortage": {
            "day": 10.1,
            "evening": 6.2,
            "night": 8.8,
            "total": 25.1
          }
        }
      }
    },
    {
      "code": "0501160014",
      "name": "三軍總醫院北投分院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0532090029",
      "name": "國軍桃園總醫院附設民眾診療服務處",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 107,
        "need": 107,
        "gap": 0,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 343,
        "occupancy": 0.585,
        "current": {
          "day": 28,
          "evening": 18.1,
          "night": 17.6,
          "total": 63.7
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 11.1,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 340,
      "openBedDelta": -3,
      "scenarios": {
        "low": {
          "bedBase": 343,
          "occupancy": 0.585,
          "occupiedBeds": 200.7,
          "required": {
            "day": 28.7,
            "evening": 18.2,
            "night": 15.4,
            "total": 62.3
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.1,
            "night": -2.2,
            "total": -1.4
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.1,
            "night": 0,
            "total": 0.8
          }
        },
        "mid": {
          "bedBase": 340,
          "occupancy": 0.585,
          "occupiedBeds": 198.9,
          "required": {
            "day": 28.4,
            "evening": 18.1,
            "night": 15.3,
            "total": 61.8
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0,
            "night": -2.3,
            "total": -1.9
          },
          "shortage": {
            "day": 0.4,
            "evening": 0,
            "night": 0,
            "total": 0.4
          }
        },
        "high": {
          "bedBase": 340,
          "occupancy": 1,
          "occupiedBeds": 340,
          "required": {
            "day": 48.6,
            "evening": 30.9,
            "night": 26.2,
            "total": 105.6
          },
          "signedGap": {
            "day": 20.6,
            "evening": 12.8,
            "night": 8.6,
            "total": 41.9
          },
          "shortage": {
            "day": 20.6,
            "evening": 12.8,
            "night": 8.6,
            "total": 41.9
          }
        }
      }
    },
    {
      "code": "0542020011",
      "name": "國軍左營總醫院岡山分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 20,
        "need": 26,
        "gap": -6,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 68,
        "occupancy": 0.521,
        "current": {
          "day": 4.5,
          "evening": 3.6,
          "night": 3.6,
          "total": 11.7
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 9.8,
          "night": 9.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 79,
      "openBedDelta": 11,
      "scenarios": {
        "low": {
          "bedBase": 68,
          "occupancy": 0.521,
          "occupiedBeds": 35.4,
          "required": {
            "day": 3.5,
            "evening": 2.7,
            "night": 2.4,
            "total": 8.6
          },
          "signedGap": {
            "day": -1,
            "evening": -0.9,
            "night": -1.2,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 79,
          "occupancy": 0.521,
          "occupiedBeds": 41.2,
          "required": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.7,
            "total": 10
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.4,
            "night": -0.9,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 79,
          "occupancy": 1,
          "occupiedBeds": 79,
          "required": {
            "day": 7.9,
            "evening": 6.1,
            "night": 5.3,
            "total": 19.2
          },
          "signedGap": {
            "day": 3.4,
            "evening": 2.5,
            "night": 1.7,
            "total": 7.5
          },
          "shortage": {
            "day": 3.4,
            "evening": 2.5,
            "night": 1.7,
            "total": 7.5
          }
        }
      }
    },
    {
      "code": "0543010019",
      "name": "國軍高雄總醫院屏東分院附設民眾診療服務處",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 71,
        "need": 84,
        "gap": -13,
        "vacancies": 24
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.518,
        "current": {
          "day": 2.9,
          "evening": 2,
          "night": 2,
          "total": 6.9
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 12.7,
          "night": 12.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.518,
          "occupiedBeds": 25.4,
          "required": {
            "day": 2.5,
            "evening": 2,
            "night": 1.7,
            "total": 6.2
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.518,
          "occupiedBeds": 25.4,
          "required": {
            "day": 2.5,
            "evening": 2,
            "night": 1.7,
            "total": 6.2
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.8,
            "night": 1.3,
            "total": 5
          },
          "shortage": {
            "day": 2,
            "evening": 1.8,
            "night": 1.3,
            "total": 5
          }
        }
      }
    },
    {
      "code": "0640140012",
      "name": "臺中榮民總醫院灣橋分院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義縣",
      "survey": {
        "current": 10,
        "need": 10,
        "gap": 0,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 40,
        "occupancy": 0.469,
        "current": {
          "day": 2.9,
          "evening": 2,
          "night": 2,
          "total": 6.9
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 9.4,
          "night": 9.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 40,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 40,
          "occupancy": 0.469,
          "occupiedBeds": 18.8,
          "required": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 40,
          "occupancy": 0.469,
          "occupiedBeds": 18.8,
          "required": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 40,
          "occupancy": 1,
          "occupiedBeds": 40,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.7
          },
          "signedGap": {
            "day": 1.1,
            "evening": 1.1,
            "night": 0.7,
            "total": 2.8
          },
          "shortage": {
            "day": 1.1,
            "evening": 1.1,
            "night": 0.7,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "0646010013",
      "name": "臺北榮民總醫院臺東分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 22,
        "need": 24,
        "gap": -2,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.445,
        "current": {
          "day": 3.4,
          "evening": 2.5,
          "night": 2.1,
          "total": 8
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 8.5,
          "night": 10.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.445,
          "occupiedBeds": 21.4,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.2
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.9,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.445,
          "occupiedBeds": 21.4,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.2
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.9,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 1.4,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.7
          },
          "shortage": {
            "day": 1.4,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.7
          }
        }
      }
    },
    {
      "code": "0634030014",
      "name": "臺北榮民總醫院蘇澳分院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 20,
        "need": 20,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 58,
        "occupancy": 0.578,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 3,
          "total": 10
        },
        "actualRatio": {
          "day": 8.4,
          "evening": 11.2,
          "night": 11.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 58,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 58,
          "occupancy": 0.578,
          "occupiedBeds": 33.5,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.2,
            "total": 8.2
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.4,
            "night": -0.8,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 58,
          "occupancy": 0.578,
          "occupiedBeds": 33.5,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.2,
            "total": 8.2
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.4,
            "night": -0.8,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 58,
          "occupancy": 1,
          "occupiedBeds": 58,
          "required": {
            "day": 5.8,
            "evening": 4.5,
            "night": 3.9,
            "total": 14.1
          },
          "signedGap": {
            "day": 1.8,
            "evening": 1.5,
            "night": 0.9,
            "total": 4.1
          },
          "shortage": {
            "day": 1.8,
            "evening": 1.5,
            "night": 0.9,
            "total": 4.1
          }
        }
      }
    },
    {
      "code": "0645020015",
      "name": "臺北榮民總醫院鳳林分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 7,
        "need": 9,
        "gap": -2,
        "vacancies": 16
      },
      "acute": {
        "reportedBeds": 32,
        "occupancy": 0.457,
        "current": {
          "day": 1.9,
          "evening": 1.2,
          "night": 1.1,
          "total": 4.2
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 12.2,
          "night": 13.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 24,
      "openBedDelta": -8,
      "scenarios": {
        "low": {
          "bedBase": 32,
          "occupancy": 0.457,
          "occupiedBeds": 14.6,
          "required": {
            "day": 1.5,
            "evening": 1.1,
            "night": 1,
            "total": 3.6
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.1,
            "night": -0.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 24,
          "occupancy": 0.457,
          "occupiedBeds": 11,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 24,
          "occupancy": 1,
          "occupiedBeds": 24,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.6
          },
          "shortage": {
            "day": 0.5,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.6
          }
        }
      }
    },
    {
      "code": "0717070516",
      "name": "法務部矯正署臺中監獄附設培德醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 20,
        "need": 25,
        "gap": -5,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 63,
        "occupancy": 0.392,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 12.3,
          "evening": 12.3,
          "night": 12.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 63,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 63,
          "occupancy": 0.392,
          "occupiedBeds": 24.7,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.6,
            "total": 6
          },
          "signedGap": {
            "day": 0.5,
            "evening": -0.1,
            "night": -0.4,
            "total": 0
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0,
            "total": 0.5
          }
        },
        "mid": {
          "bedBase": 63,
          "occupancy": 0.392,
          "occupiedBeds": 24.7,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.6,
            "total": 6
          },
          "signedGap": {
            "day": 0.5,
            "evening": -0.1,
            "night": -0.4,
            "total": 0
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0,
            "total": 0.5
          }
        },
        "high": {
          "bedBase": 63,
          "occupancy": 1,
          "occupiedBeds": 63,
          "required": {
            "day": 6.3,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.3
          },
          "signedGap": {
            "day": 4.3,
            "evening": 2.8,
            "night": 2.2,
            "total": 9.3
          },
          "shortage": {
            "day": 4.3,
            "evening": 2.8,
            "night": 2.2,
            "total": 9.3
          }
        }
      }
    },
    {
      "code": "0931010016",
      "name": "中英醫療社團法人中英醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 13,
        "need": 17,
        "gap": -4,
        "vacancies": 27
      },
      "acute": {
        "reportedBeds": 38,
        "occupancy": 0.7490000000000001,
        "current": {
          "day": 3,
          "evening": 2.4,
          "night": 2,
          "total": 7.4
        },
        "actualRatio": {
          "day": 9.5,
          "evening": 11.9,
          "night": 14.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 38,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 38,
          "occupancy": 0.749,
          "occupiedBeds": 28.5,
          "required": {
            "day": 2.8,
            "evening": 2.2,
            "night": 1.9,
            "total": 6.9
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.2,
            "night": -0.1,
            "total": -0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 38,
          "occupancy": 0.749,
          "occupiedBeds": 28.5,
          "required": {
            "day": 2.8,
            "evening": 2.2,
            "night": 1.9,
            "total": 6.9
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.2,
            "night": -0.1,
            "total": -0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 38,
          "occupancy": 1,
          "occupiedBeds": 38,
          "required": {
            "day": 3.8,
            "evening": 2.9,
            "night": 2.5,
            "total": 9.3
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.9
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "0931010025",
      "name": "中英醫療社團法人板英醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.966,
        "current": {
          "day": 2,
          "evening": 1.5,
          "night": 1.5,
          "total": 5
        },
        "actualRatio": {
          "day": 9.7,
          "evening": 12.9,
          "night": 12.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.966,
          "occupiedBeds": 19.3,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": -0.2,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.966,
          "occupiedBeds": 19.3,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": -0.2,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": -0.2,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0922020013",
      "name": "仁德醫療社團法人陳仁德醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 5,
        "need": 6,
        "gap": -1,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.556,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 11.1,
          "night": 11.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.556,
          "occupiedBeds": 11.1,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.1,
            "night": -0.3,
            "total": -1.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.556,
          "occupiedBeds": 11.1,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.1,
            "night": -0.3,
            "total": -1.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "0905320014",
      "name": "仁愛醫療社團法人仁愛醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "0943010035",
      "name": "優生醫療社團法人優生醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 8,
        "need": 9,
        "gap": -1,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 37,
        "occupancy": 0.23,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 2.8,
          "evening": 4.3,
          "night": 4.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 37,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 37,
          "occupancy": 0.23,
          "occupiedBeds": 8.5,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          },
          "signedGap": {
            "day": -2.1,
            "evening": -1.3,
            "night": -1.4,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 37,
          "occupancy": 0.23,
          "occupiedBeds": 8.5,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          },
          "signedGap": {
            "day": -2.1,
            "evening": -1.3,
            "night": -1.4,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 37,
          "occupancy": 1,
          "occupiedBeds": 37,
          "required": {
            "day": 3.7,
            "evening": 2.8,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.5,
            "total": 2
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.5,
            "total": 2
          }
        }
      }
    },
    {
      "code": "0943040015",
      "name": "南門醫療社團法人南門醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 7,
        "need": 3,
        "gap": 4,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 33,
        "occupancy": 0.47600000000000003,
        "current": {
          "day": 2.5,
          "evening": 2.5,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 6.3,
          "night": 7.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 26,
      "openBedDelta": -7,
      "scenarios": {
        "low": {
          "bedBase": 33,
          "occupancy": 0.476,
          "occupiedBeds": 15.7,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1,
            "total": 3.8
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.3,
            "night": -1,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 26,
          "occupancy": 0.476,
          "occupiedBeds": 12.4,
          "required": {
            "day": 1.2,
            "evening": 1,
            "night": 0.8,
            "total": 3
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.5,
            "night": -1.2,
            "total": -4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 26,
          "occupancy": 1,
          "occupiedBeds": 26,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.5,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.1
          }
        }
      }
    },
    {
      "code": "0937050014",
      "name": "員榮醫療社團法人員榮醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 60,
        "need": 60,
        "gap": 0,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 248,
        "occupancy": 0.408,
        "current": {
          "day": 17,
          "evening": 11.5,
          "night": 8.5,
          "total": 37
        },
        "actualRatio": {
          "day": 6,
          "evening": 8.8,
          "night": 11.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 122,
      "openBedDelta": -126,
      "scenarios": {
        "low": {
          "bedBase": 248,
          "occupancy": 0.408,
          "occupiedBeds": 101.2,
          "required": {
            "day": 10.1,
            "evening": 7.8,
            "night": 6.7,
            "total": 24.6
          },
          "signedGap": {
            "day": -6.9,
            "evening": -3.7,
            "night": -1.8,
            "total": -12.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 122,
          "occupancy": 0.408,
          "occupiedBeds": 49.8,
          "required": {
            "day": 5,
            "evening": 3.8,
            "night": 3.3,
            "total": 12.1
          },
          "signedGap": {
            "day": -12,
            "evening": -7.7,
            "night": -5.2,
            "total": -24.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 122,
          "occupancy": 1,
          "occupiedBeds": 122,
          "required": {
            "day": 12.2,
            "evening": 9.4,
            "night": 8.1,
            "total": 29.7
          },
          "signedGap": {
            "day": -4.8,
            "evening": -2.1,
            "night": -0.4,
            "total": -7.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0932020025",
      "name": "天成醫療社團法人天晟醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 92,
        "need": 132,
        "gap": -40,
        "vacancies": 25
      },
      "acute": {
        "reportedBeds": 255,
        "occupancy": 0.34700000000000003,
        "current": {
          "day": 12,
          "evening": 9,
          "night": 8,
          "total": 29
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 9.8,
          "night": 11.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 255,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 255,
          "occupancy": 0.347,
          "occupiedBeds": 88.5,
          "required": {
            "day": 12.6,
            "evening": 8,
            "night": 6.8,
            "total": 27.5
          },
          "signedGap": {
            "day": 0.6,
            "evening": -1,
            "night": -1.2,
            "total": -1.5
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 255,
          "occupancy": 0.347,
          "occupiedBeds": 88.5,
          "required": {
            "day": 12.6,
            "evening": 8,
            "night": 6.8,
            "total": 27.5
          },
          "signedGap": {
            "day": 0.6,
            "evening": -1,
            "night": -1.2,
            "total": -1.5
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 255,
          "occupancy": 1,
          "occupiedBeds": 255,
          "required": {
            "day": 36.4,
            "evening": 23.2,
            "night": 19.6,
            "total": 79.2
          },
          "signedGap": {
            "day": 24.4,
            "evening": 14.2,
            "night": 11.6,
            "total": 50.2
          },
          "shortage": {
            "day": 24.4,
            "evening": 14.2,
            "night": 11.6,
            "total": 50.2
          }
        }
      }
    },
    {
      "code": "0943010026",
      "name": "安和醫療社團法人安和醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 43,
        "occupancy": 0.11699999999999999,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 5,
          "evening": 5,
          "night": 5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 39,
      "openBedDelta": -4,
      "scenarios": {
        "low": {
          "bedBase": 43,
          "occupancy": 0.117,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 39,
          "occupancy": 0.117,
          "occupiedBeds": 4.6,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 39,
          "occupancy": 1,
          "occupiedBeds": 39,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": 2.9,
            "evening": 2,
            "night": 1.6,
            "total": 6.5
          },
          "shortage": {
            "day": 2.9,
            "evening": 2,
            "night": 1.6,
            "total": 6.5
          }
        }
      }
    },
    {
      "code": "0943020013",
      "name": "安泰醫療社團法人潮州安泰醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 15,
        "need": 14,
        "gap": 1,
        "vacancies": 9
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.48,
        "current": {
          "day": 3.1,
          "evening": 2.6,
          "night": 2,
          "total": 7.7
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 8.9,
          "night": 11.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.48,
          "occupiedBeds": 23,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.5,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.48,
          "occupiedBeds": 23,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.5,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 1.7,
            "evening": 1.1,
            "night": 1.2,
            "total": 4
          },
          "shortage": {
            "day": 1.7,
            "evening": 1.1,
            "night": 1.2,
            "total": 4
          }
        }
      }
    },
    {
      "code": "0937050024",
      "name": "惠來醫療社團法人宏仁醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 30,
        "need": 20,
        "gap": 10,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 73,
        "occupancy": 0.81,
        "current": {
          "day": 8,
          "evening": 6,
          "night": 6,
          "total": 20
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 9.9,
          "night": 9.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 73,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 73,
          "occupancy": 0.81,
          "occupiedBeds": 59.1,
          "required": {
            "day": 5.9,
            "evening": 4.5,
            "night": 3.9,
            "total": 14.4
          },
          "signedGap": {
            "day": -2.1,
            "evening": -1.5,
            "night": -2.1,
            "total": -5.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 73,
          "occupancy": 0.81,
          "occupiedBeds": 59.1,
          "required": {
            "day": 5.9,
            "evening": 4.5,
            "night": 3.9,
            "total": 14.4
          },
          "signedGap": {
            "day": -2.1,
            "evening": -1.5,
            "night": -2.1,
            "total": -5.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 73,
          "occupancy": 1,
          "occupiedBeds": 73,
          "required": {
            "day": 7.3,
            "evening": 5.6,
            "night": 4.9,
            "total": 17.8
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.4,
            "night": -1.1,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0922020022",
      "name": "慶昇醫療社團法人慶昇醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.6579999999999999,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 13.2,
          "evening": 13.2,
          "night": 13.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.658,
          "occupiedBeds": 13.2,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0,
            "night": -0.1,
            "total": 0.2
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 0,
            "total": 0.3
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.658,
          "occupiedBeds": 13.2,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": 0.3,
            "evening": 0,
            "night": -0.1,
            "total": 0.2
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 0,
            "total": 0.3
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "0931060016",
      "name": "新仁醫療社團法人新仁醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 7,
        "need": 6,
        "gap": 1,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 22,
        "occupancy": 0.7290000000000001,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 8,
          "evening": 8,
          "night": 8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 22,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 22,
          "occupancy": 0.729,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 22,
          "occupancy": 0.729,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 22,
          "occupancy": 1,
          "occupiedBeds": 22,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.4
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.3,
            "night": -0.5,
            "total": -0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        }
      }
    },
    {
      "code": "0932020034",
      "name": "新國民醫療社團法人新國民醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 9,
        "need": 7,
        "gap": 2,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 37,
        "occupancy": 0.525,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 9.7,
          "night": 9.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 37,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 37,
          "occupancy": 0.525,
          "occupiedBeds": 19.4,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 37,
          "occupancy": 0.525,
          "occupiedBeds": 19.4,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 37,
          "occupancy": 1,
          "occupiedBeds": 37,
          "required": {
            "day": 3.7,
            "evening": 2.8,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.5,
            "total": 2
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.5,
            "total": 2
          }
        }
      }
    },
    {
      "code": "0941010019",
      "name": "新興醫療社團法人新興醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 15,
        "need": 19,
        "gap": -4,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.7040000000000001,
        "current": {
          "day": 4.2,
          "evening": 3,
          "night": 2.9,
          "total": 10.1
        },
        "actualRatio": {
          "day": 8.2,
          "evening": 11.5,
          "night": 11.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.704,
          "occupiedBeds": 34.5,
          "required": {
            "day": 3.4,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.704,
          "occupiedBeds": 34.5,
          "required": {
            "day": 3.4,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.4,
            "total": 1.8
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.8,
            "night": 0.4,
            "total": 1.8
          }
        }
      }
    },
    {
      "code": "0943160012",
      "name": "枋寮醫療社團法人枋寮醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 33,
        "need": 10,
        "gap": 23,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 154,
        "occupancy": 0.652,
        "current": {
          "day": 10,
          "evening": 10,
          "night": 8,
          "total": 28
        },
        "actualRatio": {
          "day": 10,
          "evening": 10,
          "night": 12.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 146,
      "openBedDelta": -8,
      "scenarios": {
        "low": {
          "bedBase": 154,
          "occupancy": 0.652,
          "occupiedBeds": 100.4,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.5
          },
          "signedGap": {
            "day": 0,
            "evening": -2.3,
            "night": -1.3,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 146,
          "occupancy": 0.652,
          "occupiedBeds": 95.2,
          "required": {
            "day": 9.5,
            "evening": 7.3,
            "night": 6.3,
            "total": 23.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -2.7,
            "night": -1.7,
            "total": -4.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 146,
          "occupancy": 1,
          "occupiedBeds": 146,
          "required": {
            "day": 14.6,
            "evening": 11.2,
            "night": 9.7,
            "total": 35.6
          },
          "signedGap": {
            "day": 4.6,
            "evening": 1.2,
            "night": 1.7,
            "total": 7.6
          },
          "shortage": {
            "day": 4.6,
            "evening": 1.2,
            "night": 1.7,
            "total": 7.6
          }
        }
      }
    },
    {
      "code": "0935010012",
      "name": "梓榮醫療社團法人弘大醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 27,
        "need": 30,
        "gap": -3,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 80,
        "occupancy": 0.33399999999999996,
        "current": {
          "day": 3,
          "evening": 2.6,
          "night": 2,
          "total": 7.6
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 10.3,
          "night": 13.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 80,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 80,
          "occupancy": 0.334,
          "occupiedBeds": 26.7,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.5
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.5,
            "night": -0.2,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 80,
          "occupancy": 0.334,
          "occupiedBeds": 26.7,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.5
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.5,
            "night": -0.2,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 80,
          "occupancy": 1,
          "occupiedBeds": 80,
          "required": {
            "day": 8,
            "evening": 6.2,
            "night": 5.3,
            "total": 19.5
          },
          "signedGap": {
            "day": 5,
            "evening": 3.6,
            "night": 3.3,
            "total": 11.9
          },
          "shortage": {
            "day": 5,
            "evening": 3.6,
            "night": 3.3,
            "total": 11.9
          }
        }
      }
    },
    {
      "code": "0931090014",
      "name": "永聖醫療社團法人文化醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 11,
        "need": 11,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.73,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 3,
          "total": 10
        },
        "actualRatio": {
          "day": 5.5,
          "evening": 7.3,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.73,
          "occupiedBeds": 21.9,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": -1.3,
            "night": -1.5,
            "total": -4.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.73,
          "occupiedBeds": 21.9,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": -1.3,
            "night": -1.5,
            "total": -4.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": -1,
            "evening": -0.7,
            "night": -1,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0941310014",
      "name": "永達醫療社團法人永達醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 3,
        "need": 3,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "0937080012",
      "name": "洪宗鄰醫療社團法人洪宗鄰醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 0,
        "need": 5,
        "gap": -5,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "0937030012",
      "name": "道周醫療社團法人道周醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 7,
        "need": 0,
        "gap": 7,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.11800000000000001,
        "current": {
          "day": 1.2,
          "evening": 1.1,
          "night": 1,
          "total": 3.3
        },
        "actualRatio": {
          "day": 4.8,
          "evening": 5.3,
          "night": 5.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.118,
          "occupiedBeds": 5.8,
          "required": {
            "day": 0.6,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.4
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.6,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.118,
          "occupiedBeds": 5.8,
          "required": {
            "day": 0.6,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.4
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.6,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 3.7,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.6
          },
          "shortage": {
            "day": 3.7,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.6
          }
        }
      }
    },
    {
      "code": "0901180023",
      "name": "郵政醫院（委託中英醫療社團法人經營）",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 14,
        "need": 15,
        "gap": -1,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 40,
        "occupancy": 0.436,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 2,
          "total": 8
        },
        "actualRatio": {
          "day": 5.8,
          "evening": 5.8,
          "night": 8.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 40,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 40,
          "occupancy": 0.436,
          "occupiedBeds": 17.4,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.2,
            "total": 4.2
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.7,
            "night": -0.8,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 40,
          "occupancy": 0.436,
          "occupiedBeds": 17.4,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.2,
            "total": 4.2
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.7,
            "night": -0.8,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 40,
          "occupancy": 1,
          "occupiedBeds": 40,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.7
          },
          "signedGap": {
            "day": 1,
            "evening": 0.1,
            "night": 0.7,
            "total": 1.7
          },
          "shortage": {
            "day": 1,
            "evening": 0.1,
            "night": 0.7,
            "total": 1.7
          }
        }
      }
    },
    {
      "code": "0942020019",
      "name": "高雄市立岡山醫院（委託秀傳醫療社團法人經營）",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 88,
        "need": 58,
        "gap": 30,
        "vacancies": 26
      },
      "acute": {
        "reportedBeds": 64,
        "occupancy": 0.735,
        "current": {
          "day": 6,
          "evening": 5,
          "night": 4,
          "total": 15
        },
        "actualRatio": {
          "day": 7.8,
          "evening": 9.4,
          "night": 11.8
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 64,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 64,
          "occupancy": 0.735,
          "occupiedBeds": 47,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.5
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.4,
            "night": -0.9,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 64,
          "occupancy": 0.735,
          "occupiedBeds": 47,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.5
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.4,
            "night": -0.9,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 64,
          "occupancy": 1,
          "occupiedBeds": 64,
          "required": {
            "day": 6.4,
            "evening": 4.9,
            "night": 4.3,
            "total": 15.6
          },
          "signedGap": {
            "day": 0.4,
            "evening": -0.1,
            "night": 0.3,
            "total": 0.6
          },
          "shortage": {
            "day": 0.4,
            "evening": 0,
            "night": 0.3,
            "total": 0.7
          }
        }
      }
    },
    {
      "code": "1139010013",
      "name": "佛教慈濟醫療財團法人斗六慈濟醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 63,
        "need": 63,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.23199999999999998,
        "current": {
          "day": 1.8,
          "evening": 1,
          "night": 1,
          "total": 3.8
        },
        "actualRatio": {
          "day": 3.9,
          "evening": 7,
          "night": 7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.232,
          "occupiedBeds": 7,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.5,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.232,
          "occupiedBeds": 7,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.5,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1.2,
            "evening": 1.3,
            "night": 1,
            "total": 3.5
          },
          "shortage": {
            "day": 1.2,
            "evening": 1.3,
            "night": 1,
            "total": 3.5
          }
        }
      }
    },
    {
      "code": "1145030012",
      "name": "佛教慈濟醫療財團法人玉里慈濟醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 24,
        "occupancy": 0.382,
        "current": {
          "day": 1.6,
          "evening": 1.1,
          "night": 1,
          "total": 3.7
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 8.3,
          "night": 9.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 24,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 24,
          "occupancy": 0.382,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 24,
          "occupancy": 0.382,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 24,
          "occupancy": 1,
          "occupiedBeds": 24,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          }
        }
      }
    },
    {
      "code": "1139020019",
      "name": "天主教中華道明修女會醫療財團法人天主教福安醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 10,
        "need": 8,
        "gap": 2,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 21,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 42,
      "openBedDelta": 21,
      "scenarios": {
        "low": {
          "bedBase": 21,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 42,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 42,
          "occupancy": 1,
          "occupiedBeds": 42,
          "required": {
            "day": 4.2,
            "evening": 3.2,
            "night": 2.8,
            "total": 10.2
          },
          "signedGap": {
            "day": 4.2,
            "evening": 3.2,
            "night": 2.8,
            "total": 10.2
          },
          "shortage": {
            "day": 4.2,
            "evening": 3.2,
            "night": 2.8,
            "total": 10.2
          }
        }
      }
    },
    {
      "code": "1146010041",
      "name": "天主教花蓮教區醫療財團法人台東聖母醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 12,
        "occupancy": 0.054000000000000006,
        "current": {
          "day": 0.5,
          "evening": 0.5,
          "night": 0.5,
          "total": 1.5
        },
        "actualRatio": {
          "day": 1.3,
          "evening": 1.3,
          "night": 1.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 12,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 12,
          "occupancy": 0.054,
          "occupiedBeds": 0.6,
          "required": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.5,
            "total": -1.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 12,
          "occupancy": 0.054,
          "occupiedBeds": 0.6,
          "required": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.5,
            "total": -1.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 12,
          "occupancy": 1,
          "occupiedBeds": 12,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.4
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1105050012",
      "name": "奇美醫療財團法人佳里奇美醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 96,
        "need": 99,
        "gap": -3,
        "vacancies": 20
      },
      "acute": {
        "reportedBeds": 228,
        "occupancy": 0.823,
        "current": {
          "day": 26,
          "evening": 18,
          "night": 13,
          "total": 57
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 10.4,
          "night": 14.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 228,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 228,
          "occupancy": 0.823,
          "occupiedBeds": 187.6,
          "required": {
            "day": 18.8,
            "evening": 14.4,
            "night": 12.5,
            "total": 45.7
          },
          "signedGap": {
            "day": -7.2,
            "evening": -3.6,
            "night": -0.5,
            "total": -11.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 228,
          "occupancy": 0.823,
          "occupiedBeds": 187.6,
          "required": {
            "day": 18.8,
            "evening": 14.4,
            "night": 12.5,
            "total": 45.7
          },
          "signedGap": {
            "day": -7.2,
            "evening": -3.6,
            "night": -0.5,
            "total": -11.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 228,
          "occupancy": 1,
          "occupiedBeds": 228,
          "required": {
            "day": 22.8,
            "evening": 17.5,
            "night": 15.2,
            "total": 55.5
          },
          "signedGap": {
            "day": -3.2,
            "evening": -0.5,
            "night": 2.2,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 2.2,
            "total": 2.2
          }
        }
      }
    },
    {
      "code": "1143040010",
      "name": "恆基醫療財團法人恆春基督教醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 10,
        "need": 5,
        "gap": 5,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 29,
        "occupancy": 0.37799999999999995,
        "current": {
          "day": 1.8,
          "evening": 1.8,
          "night": 1.8,
          "total": 5.4
        },
        "actualRatio": {
          "day": 6.1,
          "evening": 6.1,
          "night": 6.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 29,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 29,
          "occupancy": 0.378,
          "occupiedBeds": 11,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -1.1,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 29,
          "occupancy": 0.378,
          "occupiedBeds": 11,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -1.1,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 29,
          "occupancy": 1,
          "occupiedBeds": 29,
          "required": {
            "day": 2.9,
            "evening": 2.2,
            "night": 1.9,
            "total": 7.1
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.7
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.7
          }
        }
      }
    },
    {
      "code": "1146010032",
      "name": "東基醫療財團法人台東基督教醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "臺東縣",
      "survey": {
        "current": 37,
        "need": 32,
        "gap": 5,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 110,
        "occupancy": 0.59,
        "current": {
          "day": 10.5,
          "evening": 7.8,
          "night": 6.6,
          "total": 24.9
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 8.3,
          "night": 9.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 110,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 110,
          "occupancy": 0.59,
          "occupiedBeds": 64.9,
          "required": {
            "day": 6.5,
            "evening": 5,
            "night": 4.3,
            "total": 15.8
          },
          "signedGap": {
            "day": -4,
            "evening": -2.8,
            "night": -2.3,
            "total": -9.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 110,
          "occupancy": 0.59,
          "occupiedBeds": 64.9,
          "required": {
            "day": 6.5,
            "evening": 5,
            "night": 4.3,
            "total": 15.8
          },
          "signedGap": {
            "day": -4,
            "evening": -2.8,
            "night": -2.3,
            "total": -9.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 110,
          "occupancy": 1,
          "occupiedBeds": 110,
          "required": {
            "day": 11,
            "evening": 8.5,
            "night": 7.3,
            "total": 26.8
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0.7,
            "night": 0.7,
            "total": 1.9
          },
          "shortage": {
            "day": 0.5,
            "evening": 0.7,
            "night": 0.7,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1107320017",
      "name": "義大醫療財團法人義大大昌醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 383,
        "need": 383,
        "gap": 0,
        "vacancies": 129
      },
      "acute": {
        "reportedBeds": 220,
        "occupancy": 0.446,
        "current": {
          "day": 15.7,
          "evening": 10.8,
          "night": 8.9,
          "total": 35.4
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 9.1,
          "night": 11
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 220,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 220,
          "occupancy": 0.446,
          "occupiedBeds": 98.1,
          "required": {
            "day": 9.8,
            "evening": 7.5,
            "night": 6.5,
            "total": 23.9
          },
          "signedGap": {
            "day": -5.9,
            "evening": -3.3,
            "night": -2.4,
            "total": -11.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 220,
          "occupancy": 0.446,
          "occupiedBeds": 98.1,
          "required": {
            "day": 9.8,
            "evening": 7.5,
            "night": 6.5,
            "total": 23.9
          },
          "signedGap": {
            "day": -5.9,
            "evening": -3.3,
            "night": -2.4,
            "total": -11.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 220,
          "occupancy": 1,
          "occupiedBeds": 220,
          "required": {
            "day": 22,
            "evening": 16.9,
            "night": 14.7,
            "total": 53.6
          },
          "signedGap": {
            "day": 6.3,
            "evening": 6.1,
            "night": 5.8,
            "total": 18.2
          },
          "shortage": {
            "day": 6.3,
            "evening": 6.1,
            "night": 5.8,
            "total": 18.2
          }
        }
      }
    },
    {
      "code": "1107120017",
      "name": "義大醫療財團法人義大癌治療醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 529,
        "need": 529,
        "gap": 0,
        "vacancies": 245
      },
      "acute": {
        "reportedBeds": 400,
        "occupancy": 0.445,
        "current": {
          "day": 24.8,
          "evening": 16.9,
          "night": 13.1,
          "total": 54.8
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 10.5,
          "night": 13.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 400,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 400,
          "occupancy": 0.445,
          "occupiedBeds": 178,
          "required": {
            "day": 25.4,
            "evening": 16.2,
            "night": 13.7,
            "total": 55.3
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.7,
            "night": 0.6,
            "total": 0.5
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0.6,
            "total": 1.2
          }
        },
        "mid": {
          "bedBase": 400,
          "occupancy": 0.445,
          "occupiedBeds": 178,
          "required": {
            "day": 25.4,
            "evening": 16.2,
            "night": 13.7,
            "total": 55.3
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.7,
            "night": 0.6,
            "total": 0.5
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0.6,
            "total": 1.2
          }
        },
        "high": {
          "bedBase": 400,
          "occupancy": 1,
          "occupiedBeds": 400,
          "required": {
            "day": 57.1,
            "evening": 36.4,
            "night": 30.8,
            "total": 124.3
          },
          "signedGap": {
            "day": 32.3,
            "evening": 19.5,
            "night": 17.7,
            "total": 69.5
          },
          "shortage": {
            "day": 32.3,
            "evening": 19.5,
            "night": 17.7,
            "total": 69.5
          }
        }
      }
    },
    {
      "code": "1132071036",
      "name": "長庚醫療財團法人桃園長庚紀念醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 35,
        "need": 33,
        "gap": 2,
        "vacancies": 11
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.698,
        "current": {
          "day": 9,
          "evening": 6.5,
          "night": 5.5,
          "total": 21
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 10.6,
          "night": 12.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 149,
      "openBedDelta": 50,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.698,
          "occupiedBeds": 69.1,
          "required": {
            "day": 9.9,
            "evening": 6.3,
            "night": 5.3,
            "total": 21.5
          },
          "signedGap": {
            "day": 0.9,
            "evening": -0.2,
            "night": -0.2,
            "total": 0.5
          },
          "shortage": {
            "day": 0.9,
            "evening": 0,
            "night": 0,
            "total": 0.9
          }
        },
        "mid": {
          "bedBase": 149,
          "occupancy": 0.698,
          "occupiedBeds": 104,
          "required": {
            "day": 14.9,
            "evening": 9.5,
            "night": 8,
            "total": 32.3
          },
          "signedGap": {
            "day": 5.9,
            "evening": 3,
            "night": 2.5,
            "total": 11.3
          },
          "shortage": {
            "day": 5.9,
            "evening": 3,
            "night": 2.5,
            "total": 11.3
          }
        },
        "high": {
          "bedBase": 149,
          "occupancy": 1,
          "occupiedBeds": 149,
          "required": {
            "day": 21.3,
            "evening": 13.5,
            "night": 11.5,
            "total": 46.3
          },
          "signedGap": {
            "day": 12.3,
            "evening": 7,
            "night": 6,
            "total": 25.3
          },
          "shortage": {
            "day": 12.3,
            "evening": 7,
            "night": 6,
            "total": 25.3
          }
        }
      }
    },
    {
      "code": "1139130010",
      "name": "長庚醫療財團法人雲林長庚紀念醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 35,
        "need": 39,
        "gap": -4,
        "vacancies": 9
      },
      "acute": {
        "reportedBeds": 116,
        "occupancy": 0.43700000000000006,
        "current": {
          "day": 7.4,
          "evening": 4.5,
          "night": 4.1,
          "total": 16
        },
        "actualRatio": {
          "day": 6.9,
          "evening": 11.3,
          "night": 12.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 116,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 116,
          "occupancy": 0.437,
          "occupiedBeds": 50.7,
          "required": {
            "day": 5.1,
            "evening": 3.9,
            "night": 3.4,
            "total": 12.3
          },
          "signedGap": {
            "day": -2.3,
            "evening": -0.6,
            "night": -0.7,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 116,
          "occupancy": 0.437,
          "occupiedBeds": 50.7,
          "required": {
            "day": 5.1,
            "evening": 3.9,
            "night": 3.4,
            "total": 12.3
          },
          "signedGap": {
            "day": -2.3,
            "evening": -0.6,
            "night": -0.7,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 116,
          "occupancy": 1,
          "occupiedBeds": 116,
          "required": {
            "day": 11.6,
            "evening": 8.9,
            "night": 7.7,
            "total": 28.3
          },
          "signedGap": {
            "day": 4.2,
            "evening": 4.4,
            "night": 3.6,
            "total": 12.3
          },
          "shortage": {
            "day": 4.2,
            "evening": 4.4,
            "night": 3.6,
            "total": 12.3
          }
        }
      }
    },
    {
      "code": "1142010518",
      "name": "高雄市立鳳山醫院（委託長庚醫療財團法人經營）",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 34,
        "need": 34,
        "gap": 0,
        "vacancies": 60
      },
      "acute": {
        "reportedBeds": 100,
        "occupancy": 0.7709999999999999,
        "current": {
          "day": 8.8,
          "evening": 6.8,
          "night": 5.6,
          "total": 21.2
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 11.3,
          "night": 13.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 100,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 100,
          "occupancy": 0.771,
          "occupiedBeds": 77.1,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.1,
            "total": 18.8
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.9,
            "night": -0.5,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 100,
          "occupancy": 0.771,
          "occupiedBeds": 77.1,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.1,
            "total": 18.8
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.9,
            "night": -0.5,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 100,
          "occupancy": 1,
          "occupiedBeds": 100,
          "required": {
            "day": 10,
            "evening": 7.7,
            "night": 6.7,
            "total": 24.4
          },
          "signedGap": {
            "day": 1.2,
            "evening": 0.9,
            "night": 1.1,
            "total": 3.2
          },
          "shortage": {
            "day": 1.2,
            "evening": 0.9,
            "night": 1.1,
            "total": 3.2
          }
        }
      }
    },
    {
      "code": "1202080029",
      "name": "信義醫療財團法人高雄基督教醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.14400000000000002,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 1.4,
          "evening": 2.9,
          "night": 2.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.144,
          "occupiedBeds": 2.9,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.7
          },
          "signedGap": {
            "day": -1.7,
            "evening": -0.8,
            "night": -0.8,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.144,
          "occupiedBeds": 2.9,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.7
          },
          "signedGap": {
            "day": -1.7,
            "evening": -0.8,
            "night": -0.8,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1317020519",
      "name": "中國醫藥大學附設醫院台中東區分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 18,
        "need": 22,
        "gap": -4,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 46,
        "occupancy": 0.948,
        "current": {
          "day": 5,
          "evening": 4,
          "night": 3,
          "total": 12
        },
        "actualRatio": {
          "day": 8.7,
          "evening": 10.9,
          "night": 14.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 46,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 46,
          "occupancy": 0.948,
          "occupiedBeds": 43.6,
          "required": {
            "day": 4.4,
            "evening": 3.4,
            "night": 2.9,
            "total": 10.6
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.6,
            "night": -0.1,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 46,
          "occupancy": 0.948,
          "occupiedBeds": 43.6,
          "required": {
            "day": 4.4,
            "evening": 3.4,
            "night": 2.9,
            "total": 10.6
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.6,
            "night": -0.1,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 46,
          "occupancy": 1,
          "occupiedBeds": 46,
          "required": {
            "day": 4.6,
            "evening": 3.5,
            "night": 3.1,
            "total": 11.2
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": 0.1,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        }
      }
    },
    {
      "code": "1317040039",
      "name": "中山醫學大學附設醫院中興分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 33,
        "need": 33,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.546,
        "current": {
          "day": 7.1,
          "evening": 6,
          "night": 6,
          "total": 19.1
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 9,
          "night": 9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 99,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.546,
          "occupiedBeds": 54.1,
          "required": {
            "day": 5.4,
            "evening": 4.2,
            "night": 3.6,
            "total": 13.2
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.8,
            "night": -2.4,
            "total": -5.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.546,
          "occupiedBeds": 54.1,
          "required": {
            "day": 5.4,
            "evening": 4.2,
            "night": 3.6,
            "total": 13.2
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.8,
            "night": -2.4,
            "total": -5.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": 2.8,
            "evening": 1.6,
            "night": 0.6,
            "total": 5
          },
          "shortage": {
            "day": 2.8,
            "evening": 1.6,
            "night": 0.6,
            "total": 5
          }
        }
      }
    },
    {
      "code": "1307370011",
      "name": "高雄市立旗津醫院(委託財團法人私立高雄醫學大學經營)",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 6,
        "gap": -1,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.3,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 6,
          "evening": 6,
          "night": 6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.3,
          "occupiedBeds": 6,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.3,
          "occupiedBeds": 6,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1436020013",
      "name": "東勢區農會附設農民醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 13,
        "need": 18,
        "gap": -5,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 54,
        "occupancy": 0.565,
        "current": {
          "day": 4.1,
          "evening": 2.5,
          "night": 2.3,
          "total": 8.9
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 12.2,
          "night": 13.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 54,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 54,
          "occupancy": 0.565,
          "occupiedBeds": 30.5,
          "required": {
            "day": 3.1,
            "evening": 2.3,
            "night": 2,
            "total": 7.4
          },
          "signedGap": {
            "day": -1,
            "evening": -0.2,
            "night": -0.3,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 54,
          "occupancy": 0.565,
          "occupiedBeds": 30.5,
          "required": {
            "day": 3.1,
            "evening": 2.3,
            "night": 2,
            "total": 7.4
          },
          "signedGap": {
            "day": -1,
            "evening": -0.2,
            "night": -0.3,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 54,
          "occupancy": 1,
          "occupiedBeds": 54,
          "required": {
            "day": 5.4,
            "evening": 4.2,
            "night": 3.6,
            "total": 13.2
          },
          "signedGap": {
            "day": 1.3,
            "evening": 1.7,
            "night": 1.3,
            "total": 4.3
          },
          "shortage": {
            "day": 1.3,
            "evening": 1.7,
            "night": 1.3,
            "total": 4.3
          }
        }
      }
    },
    {
      "code": "1401190011",
      "name": "財團法人台灣省私立台北仁濟院附設仁濟醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.037000000000000005,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0.7,
          "evening": 0.7,
          "night": 0.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.037,
          "occupiedBeds": 0.7,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.9,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.037,
          "occupiedBeds": 0.7,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.9,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1412040022",
      "name": "財團法人台灣省私立桃園仁愛之家附設新竹新生醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 21,
        "need": 18,
        "gap": 3,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 40,
        "occupancy": 0.85,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 11.3,
          "evening": 17,
          "night": 17
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 40,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 40,
          "occupancy": 0.85,
          "occupiedBeds": 34,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.3,
            "total": 8.3
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.3,
            "total": 1.3
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.3,
            "total": 1.3
          }
        },
        "mid": {
          "bedBase": 40,
          "occupancy": 0.85,
          "occupiedBeds": 34,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.3,
            "total": 8.3
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.3,
            "total": 1.3
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.3,
            "total": 1.3
          }
        },
        "high": {
          "bedBase": 40,
          "occupancy": 1,
          "occupiedBeds": 40,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.7
          },
          "signedGap": {
            "day": 1,
            "evening": 1.1,
            "night": 0.7,
            "total": 2.7
          },
          "shortage": {
            "day": 1,
            "evening": 1.1,
            "night": 0.7,
            "total": 2.7
          }
        }
      }
    },
    {
      "code": "1435010013",
      "name": "財團法人台灣省私立桃園仁愛之家附設苗栗新生醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 12,
        "need": 18,
        "gap": -6,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1411030013",
      "name": "醫療財團法人臺灣區煤礦業基金會臺灣礦工醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 9,
        "need": 6,
        "gap": 3,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.47700000000000004,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 11.4,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.477,
          "occupiedBeds": 22.9,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.2,
            "night": -0.5,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.477,
          "occupiedBeds": 22.9,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.2,
            "night": -0.5,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 1.8,
            "evening": 1.7,
            "night": 1.2,
            "total": 4.7
          },
          "shortage": {
            "day": 1.8,
            "evening": 1.7,
            "night": 1.2,
            "total": 4.7
          }
        }
      }
    },
    {
      "code": "1507330011",
      "name": "七賢脊椎外科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 54,
        "need": 13,
        "gap": 41,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.373,
        "current": {
          "day": 5,
          "evening": 3,
          "night": 3,
          "total": 11
        },
        "actualRatio": {
          "day": 3.7,
          "evening": 6.1,
          "night": 6.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.373,
          "occupiedBeds": 18.3,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.5
          },
          "signedGap": {
            "day": -3.2,
            "evening": -1.6,
            "night": -1.8,
            "total": -6.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.373,
          "occupiedBeds": 18.3,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.5
          },
          "signedGap": {
            "day": -3.2,
            "evening": -1.6,
            "night": -1.8,
            "total": -6.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0.8,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.8,
            "night": 0.3,
            "total": 1
          }
        }
      }
    },
    {
      "code": "1542040050",
      "name": "三聖醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1531021165",
      "name": "三重中興醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 6,
        "need": 8,
        "gap": -2,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.948,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 9.5,
          "evening": 9.5,
          "night": 9.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.948,
          "occupiedBeds": 19,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.948,
          "occupiedBeds": 19,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1532021338",
      "name": "中壢長榮醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 16,
        "need": 18,
        "gap": -2,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 75,
        "occupancy": 0.336,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 3,
          "total": 10
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 8.4,
          "night": 8.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 75,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 75,
          "occupancy": 0.336,
          "occupiedBeds": 25.2,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.1,
            "night": -1.3,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 75,
          "occupancy": 0.336,
          "occupiedBeds": 25.2,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.1,
            "night": -1.3,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 75,
          "occupancy": 1,
          "occupiedBeds": 75,
          "required": {
            "day": 7.5,
            "evening": 5.8,
            "night": 5,
            "total": 18.3
          },
          "signedGap": {
            "day": 3.5,
            "evening": 2.8,
            "night": 2,
            "total": 8.3
          },
          "shortage": {
            "day": 3.5,
            "evening": 2.8,
            "night": 2,
            "total": 8.3
          }
        }
      }
    },
    {
      "code": "1531040259",
      "name": "中祥醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 1,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 10,
          "evening": 10,
          "night": 10
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1532021392",
      "name": "中美醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.053,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 1.1,
          "evening": 1.1,
          "night": 1.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.053,
          "occupiedBeds": 1.1,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.053,
          "occupiedBeds": 1.1,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1537070028",
      "name": "仁和醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 21,
        "occupancy": 0.349,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 7.3,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 21,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 21,
          "occupancy": 0.349,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 21,
          "occupancy": 0.349,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 21,
          "occupancy": 1,
          "occupiedBeds": 21,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.6,
            "night": 0.4,
            "total": 2.1
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.6,
            "night": 0.4,
            "total": 2.1
          }
        }
      }
    },
    {
      "code": "1531130105",
      "name": "仁安醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 12,
        "need": 14,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.009000000000000001,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0.2,
          "evening": 0.2,
          "night": 0.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.009,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.009,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1542011246",
      "name": "新上琳醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1521051179",
      "name": "仁村醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.365,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 7.3,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.365,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.365,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1532021310",
      "name": "仁祥醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1537100012",
      "name": "伸港忠孝醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.25,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 2.5,
          "evening": 5,
          "night": 5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.25,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.25,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1541011162",
      "name": "信一骨科醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.053,
        "current": {
          "day": 0.3,
          "evening": 0.3,
          "night": 0.3,
          "total": 0.9
        },
        "actualRatio": {
          "day": 3.5,
          "evening": 3.5,
          "night": 3.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.053,
          "occupiedBeds": 1.1,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.2,
            "night": -0.2,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.053,
          "occupiedBeds": 1.1,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.2,
            "night": -0.2,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1.7,
            "evening": 1.2,
            "night": 1,
            "total": 4
          },
          "shortage": {
            "day": 1.7,
            "evening": 1.2,
            "night": 1,
            "total": 4
          }
        }
      }
    },
    {
      "code": "1537010040",
      "name": "信生醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.08900000000000001,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 1.8,
          "evening": 1.8,
          "night": 1.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.089,
          "occupiedBeds": 1.8,
          "required": {
            "day": 0.2,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.089,
          "occupiedBeds": 1.8,
          "required": {
            "day": 0.2,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.4
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.9,
            "night": -0.9,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1502070118",
      "name": "健新醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 7,
        "need": 4,
        "gap": 3,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 45,
        "occupancy": 0.11699999999999999,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 5.3,
          "evening": 5.3,
          "night": 5.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 45,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 45,
          "occupancy": 0.117,
          "occupiedBeds": 5.3,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 45,
          "occupancy": 0.117,
          "occupiedBeds": 5.3,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 45,
          "occupancy": 1,
          "occupiedBeds": 45,
          "required": {
            "day": 4.5,
            "evening": 3.5,
            "night": 3,
            "total": 11
          },
          "signedGap": {
            "day": 3.5,
            "evening": 2.5,
            "night": 2,
            "total": 8
          },
          "shortage": {
            "day": 3.5,
            "evening": 2.5,
            "night": 2,
            "total": 8
          }
        }
      }
    },
    {
      "code": "1531131139",
      "name": "元復醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 1,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 10,
          "evening": 10,
          "night": 10
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1517080091",
      "name": "全民醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 33,
        "occupancy": 0.152,
        "current": {
          "day": 1.5,
          "evening": 1,
          "night": 1,
          "total": 3.5
        },
        "actualRatio": {
          "day": 3.3,
          "evening": 5,
          "night": 5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": -3,
      "scenarios": {
        "low": {
          "bedBase": 33,
          "occupancy": 0.152,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.152,
          "occupiedBeds": 4.6,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1.5,
            "evening": 1.3,
            "night": 1,
            "total": 3.8
          },
          "shortage": {
            "day": 1.5,
            "evening": 1.3,
            "night": 1,
            "total": 3.8
          }
        }
      }
    },
    {
      "code": "1539060011",
      "name": "全生醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 4,
        "need": 6,
        "gap": -2,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1537010175",
      "name": "冠華醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.019,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0.4,
          "evening": 0.4,
          "night": 0.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.019,
          "occupiedBeds": 0.4,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.019,
          "occupiedBeds": 0.4,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1542020067",
      "name": "光雄長安醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 7,
        "gap": -1,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 41,
        "occupancy": 0.326,
        "current": {
          "day": 3,
          "evening": 1,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 4.5,
          "evening": 13.4,
          "night": 13.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 24,
      "openBedDelta": -17,
      "scenarios": {
        "low": {
          "bedBase": 41,
          "occupancy": 0.326,
          "occupiedBeds": 13.4,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.3
          },
          "signedGap": {
            "day": -1.7,
            "evening": 0,
            "night": -0.1,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 24,
          "occupancy": 0.326,
          "occupiedBeds": 7.8,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.9
          },
          "signedGap": {
            "day": -2.2,
            "evening": -0.4,
            "night": -0.5,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 24,
          "occupancy": 1,
          "occupiedBeds": 24,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": -0.6,
            "evening": 0.8,
            "night": 0.6,
            "total": 0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0.8,
            "night": 0.6,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1542020058",
      "name": "劉嘉修醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 25,
        "occupancy": 0.659,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 8.2,
          "evening": 8.2,
          "night": 8.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 25,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 25,
          "occupancy": 0.659,
          "occupiedBeds": 16.5,
          "required": {
            "day": 1.6,
            "evening": 1.3,
            "night": 1.1,
            "total": 4
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.7,
            "night": -0.9,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 25,
          "occupancy": 0.659,
          "occupiedBeds": 16.5,
          "required": {
            "day": 1.6,
            "evening": 1.3,
            "night": 1.1,
            "total": 4
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.7,
            "night": -0.9,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 25,
          "occupancy": 1,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": 0.5,
            "evening": -0.1,
            "night": -0.3,
            "total": 0.1
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0,
            "total": 0.5
          }
        }
      }
    },
    {
      "code": "1517051107",
      "name": "勝美醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 10,
        "need": 12,
        "gap": -2,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 36,
        "occupancy": 0.818,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 14.7,
          "evening": 14.7,
          "night": 14.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 36,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 36,
          "occupancy": 0.818,
          "occupiedBeds": 29.4,
          "required": {
            "day": 2.9,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.3,
            "night": 0,
            "total": 1.2
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.3,
            "night": 0,
            "total": 1.2
          }
        },
        "mid": {
          "bedBase": 36,
          "occupancy": 0.818,
          "occupiedBeds": 29.4,
          "required": {
            "day": 2.9,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.3,
            "night": 0,
            "total": 1.2
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.3,
            "night": 0,
            "total": 1.2
          }
        },
        "high": {
          "bedBase": 36,
          "occupancy": 1,
          "occupiedBeds": 36,
          "required": {
            "day": 3.6,
            "evening": 2.8,
            "night": 2.4,
            "total": 8.8
          },
          "signedGap": {
            "day": 1.6,
            "evening": 0.8,
            "night": 0.4,
            "total": 2.8
          },
          "shortage": {
            "day": 1.6,
            "evening": 0.8,
            "night": 0.4,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "1539061072",
      "name": "北港仁一醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 1,
        "need": 1,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.252,
        "current": {
          "day": 1.6,
          "evening": 1,
          "night": 1,
          "total": 3.6
        },
        "actualRatio": {
          "day": 3.2,
          "evening": 5,
          "night": 5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.252,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.252,
          "occupiedBeds": 5,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.6,
            "night": -0.7,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.3
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.3
          }
        }
      }
    },
    {
      "code": "1537040066",
      "name": "卓醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 7,
        "need": 7,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.57,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 11.4,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 28,
      "openBedDelta": 8,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.57,
          "occupiedBeds": 11.4,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.1,
            "night": -0.2,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 28,
          "occupancy": 0.57,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0.2,
            "night": 0.1,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.3
          }
        },
        "high": {
          "bedBase": 28,
          "occupancy": 1,
          "occupiedBeds": 28,
          "required": {
            "day": 2.8,
            "evening": 2.2,
            "night": 1.9,
            "total": 6.8
          },
          "signedGap": {
            "day": 0.8,
            "evening": 1.2,
            "night": 0.9,
            "total": 2.8
          },
          "shortage": {
            "day": 0.8,
            "evening": 1.2,
            "night": 0.9,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "1501100037",
      "name": "協和婦女醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 4,
        "need": 3,
        "gap": 1,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.254,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 5.1,
          "evening": 5.1,
          "night": 5.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.254,
          "occupiedBeds": 5.1,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.254,
          "occupiedBeds": 5.1,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.7,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1535010024",
      "name": "協和醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 7,
        "need": 9,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 32,
        "occupancy": 0.34,
        "current": {
          "day": 2,
          "evening": 1.5,
          "night": 1.5,
          "total": 5
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 7.3,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 32,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 32,
          "occupancy": 0.34,
          "occupiedBeds": 10.9,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.7,
            "night": -0.8,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 32,
          "occupancy": 0.34,
          "occupiedBeds": 10.9,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.7,
            "night": -0.8,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 32,
          "occupancy": 1,
          "occupiedBeds": 32,
          "required": {
            "day": 3.2,
            "evening": 2.5,
            "night": 2.1,
            "total": 7.8
          },
          "signedGap": {
            "day": 1.2,
            "evening": 1,
            "night": 0.6,
            "total": 2.8
          },
          "shortage": {
            "day": 1.2,
            "evening": 1,
            "night": 0.6,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "1517081141",
      "name": "博愛外科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.184,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 3.7,
          "evening": 3.7,
          "night": 3.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.184,
          "occupiedBeds": 3.7,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.2,
            "total": 0.9
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.8,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.184,
          "occupiedBeds": 3.7,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.2,
            "total": 0.9
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.8,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1507300022",
      "name": "博愛蕙馨醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 10,
        "need": 10,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 40,
        "occupancy": 0.542,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 2,
          "total": 8
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 7.2,
          "night": 10.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 40,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 40,
          "occupancy": 0.542,
          "occupiedBeds": 21.7,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.4,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.3,
            "night": -0.6,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 40,
          "occupancy": 0.542,
          "occupiedBeds": 21.7,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.4,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.3,
            "night": -0.6,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 40,
          "occupancy": 1,
          "occupiedBeds": 40,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.7
          },
          "signedGap": {
            "day": 1,
            "evening": 0.1,
            "night": 0.7,
            "total": 1.7
          },
          "shortage": {
            "day": 1,
            "evening": 0.1,
            "night": 0.7,
            "total": 1.7
          }
        }
      }
    },
    {
      "code": "1502060112",
      "name": "原祿骨科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.013000000000000001,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 0.1,
          "evening": 0.1,
          "night": 0.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.013,
          "occupiedBeds": 0.3,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -2,
            "evening": -2,
            "night": -1,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.013,
          "occupiedBeds": 0.3,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -2,
            "evening": -2,
            "night": -1,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1517020040",
      "name": "台新醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 27,
        "occupancy": 0.856,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 11.6,
          "evening": 11.6,
          "night": 11.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 27,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 27,
          "occupancy": 0.856,
          "occupiedBeds": 23.1,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": 0.3,
            "evening": -0.2,
            "night": -0.5,
            "total": -0.4
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 0,
            "total": 0.3
          }
        },
        "mid": {
          "bedBase": 27,
          "occupancy": 0.856,
          "occupiedBeds": 23.1,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": 0.3,
            "evening": -0.2,
            "night": -0.5,
            "total": -0.4
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 0,
            "total": 0.3
          }
        },
        "high": {
          "bedBase": 27,
          "occupancy": 1,
          "occupiedBeds": 27,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.1,
            "night": -0.2,
            "total": 0.6
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.1,
            "night": 0,
            "total": 0.8
          }
        }
      }
    },
    {
      "code": "1502041117",
      "name": "右昌聯合醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 16,
        "need": 20,
        "gap": -4,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 93,
        "occupancy": 0.555,
        "current": {
          "day": 5.2,
          "evening": 4,
          "night": 3.4,
          "total": 12.6
        },
        "actualRatio": {
          "day": 9.9,
          "evening": 12.9,
          "night": 15.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 93,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 93,
          "occupancy": 0.555,
          "occupiedBeds": 51.6,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.4,
            "total": 12.6
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 93,
          "occupancy": 0.555,
          "occupiedBeds": 51.6,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.4,
            "total": 12.6
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 93,
          "occupancy": 1,
          "occupiedBeds": 93,
          "required": {
            "day": 9.3,
            "evening": 7.2,
            "night": 6.2,
            "total": 22.7
          },
          "signedGap": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.8,
            "total": 10.1
          },
          "shortage": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.8,
            "total": 10.1
          }
        }
      }
    },
    {
      "code": "1531050077",
      "name": "同仁醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 4,
        "need": 6,
        "gap": -2,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.337,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 6.7,
          "evening": 6.7,
          "night": 6.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.337,
          "occupiedBeds": 6.7,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.6
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.337,
          "occupiedBeds": 6.7,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.6
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1502090209",
      "name": "吳昆哲婦產小兒科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 10,
        "need": 10,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 37,
        "occupancy": 0.14300000000000002,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 1.8,
          "evening": 1.8,
          "night": 1.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 37,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 37,
          "occupancy": 0.143,
          "occupiedBeds": 5.3,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -2.5,
            "evening": -2.6,
            "night": -2.6,
            "total": -7.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 37,
          "occupancy": 0.143,
          "occupiedBeds": 5.3,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -2.5,
            "evening": -2.6,
            "night": -2.6,
            "total": -7.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 37,
          "occupancy": 1,
          "occupiedBeds": 37,
          "required": {
            "day": 3.7,
            "evening": 2.8,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": 0.7,
            "evening": -0.2,
            "night": -0.5,
            "total": 0
          },
          "shortage": {
            "day": 0.7,
            "evening": 0,
            "night": 0,
            "total": 0.7
          }
        }
      }
    },
    {
      "code": "1537050071",
      "name": "員林何醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 26,
        "need": 30,
        "gap": -4,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 35,
        "occupancy": 0.54,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 9.5,
          "night": 9.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 35,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 35,
          "occupancy": 0.54,
          "occupiedBeds": 18.9,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 35,
          "occupancy": 0.54,
          "occupiedBeds": 18.9,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 35,
          "occupancy": 1,
          "occupiedBeds": 35,
          "required": {
            "day": 3.5,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.5
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0.7,
            "night": 0.3,
            "total": 1.5
          },
          "shortage": {
            "day": 0.5,
            "evening": 0.7,
            "night": 0.3,
            "total": 1.5
          }
        }
      }
    },
    {
      "code": "1502051426",
      "name": "四季台安醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 15,
        "need": 12,
        "gap": 3,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.758,
        "current": {
          "day": 4.8,
          "evening": 3,
          "night": 2.9,
          "total": 10.7
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 12.4,
          "night": 12.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.758,
          "occupiedBeds": 37.1,
          "required": {
            "day": 3.7,
            "evening": 2.9,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.1,
            "night": -0.4,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.758,
          "occupiedBeds": 37.1,
          "required": {
            "day": 3.7,
            "evening": 2.9,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.1,
            "night": -0.4,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 0.1,
            "evening": 0.8,
            "night": 0.4,
            "total": 1.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0.8,
            "night": 0.4,
            "total": 1.2
          }
        }
      }
    },
    {
      "code": "1532061065",
      "name": "大園敏盛醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 21,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 21,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 21,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 21,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 21,
          "occupancy": 1,
          "occupiedBeds": 21,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.6,
            "night": 0.4,
            "total": 2.1
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.6,
            "night": 0.4,
            "total": 2.1
          }
        }
      }
    },
    {
      "code": "1505340019",
      "name": "大安婦幼醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.635,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 6.4,
          "night": 12.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.635,
          "occupiedBeds": 12.7,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -0.2,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.635,
          "occupiedBeds": 12.7,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -0.2,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1533051063",
      "name": "大安醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 13,
        "need": 15,
        "gap": -2,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.809,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 2,
          "total": 9
        },
        "actualRatio": {
          "day": 9.7,
          "evening": 12.9,
          "night": 19.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.809,
          "occupiedBeds": 38.8,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": 0.6,
            "total": 0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.6,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.809,
          "occupiedBeds": 38.8,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": 0.6,
            "total": 0.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.6,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.7,
            "night": 1.2,
            "total": 2.7
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.7,
            "night": 1.2,
            "total": 2.7
          }
        }
      }
    },
    {
      "code": "1543110033",
      "name": "大新醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 2,
        "need": 1,
        "gap": 1,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.76,
        "current": {
          "day": 1.5,
          "evening": 1.5,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 10.1,
          "evening": 10.1,
          "night": 15.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.76,
          "occupiedBeds": 15.2,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": 0,
            "evening": -0.3,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.76,
          "occupiedBeds": 15.2,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": 0,
            "evening": -0.3,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1532070019",
      "name": "大明醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 14,
        "occupancy": 0.43799999999999994,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 3.1,
          "evening": 6.1,
          "night": 6.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 22,
      "openBedDelta": 8,
      "scenarios": {
        "low": {
          "bedBase": 14,
          "occupancy": 0.438,
          "occupiedBeds": 6.1,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -1.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 22,
          "occupancy": 0.438,
          "occupiedBeds": 9.6,
          "required": {
            "day": 1,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.3
          },
          "signedGap": {
            "day": -1,
            "evening": -0.3,
            "night": -0.4,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 22,
          "occupancy": 1,
          "occupiedBeds": 22,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.4
          },
          "signedGap": {
            "day": 0.2,
            "evening": 0.7,
            "night": 0.5,
            "total": 1.4
          },
          "shortage": {
            "day": 0.2,
            "evening": 0.7,
            "night": 0.5,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1535040086",
      "name": "大眾醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 7,
        "need": 4,
        "gap": 3,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 39,
        "occupancy": 0.237,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 4.6,
          "evening": 4.6,
          "night": 9.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 39,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 39,
          "occupancy": 0.237,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.3
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1.3,
            "night": -0.4,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 39,
          "occupancy": 0.237,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.3
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1.3,
            "night": -0.4,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 39,
          "occupancy": 1,
          "occupiedBeds": 39,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": 1.9,
            "evening": 1,
            "night": 1.6,
            "total": 4.5
          },
          "shortage": {
            "day": 1.9,
            "evening": 1,
            "night": 1.6,
            "total": 4.5
          }
        }
      }
    },
    {
      "code": "1535081078",
      "name": "大順醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.27,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 5.4,
          "evening": 5.4,
          "night": 5.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.27,
          "occupiedBeds": 5.4,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.27,
          "occupiedBeds": 5.4,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.4,
            "total": 1.3
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1532040039",
      "name": "天成醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 75,
        "need": 60,
        "gap": 15,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 140,
        "occupancy": 0.36200000000000004,
        "current": {
          "day": 6,
          "evening": 6,
          "night": 4,
          "total": 16
        },
        "actualRatio": {
          "day": 8.4,
          "evening": 8.4,
          "night": 12.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 140,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 140,
          "occupancy": 0.362,
          "occupiedBeds": 50.7,
          "required": {
            "day": 5.1,
            "evening": 3.9,
            "night": 3.4,
            "total": 12.3
          },
          "signedGap": {
            "day": -0.9,
            "evening": -2.1,
            "night": -0.6,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 140,
          "occupancy": 0.362,
          "occupiedBeds": 50.7,
          "required": {
            "day": 5.1,
            "evening": 3.9,
            "night": 3.4,
            "total": 12.3
          },
          "signedGap": {
            "day": -0.9,
            "evening": -2.1,
            "night": -0.6,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 140,
          "occupancy": 1,
          "occupiedBeds": 140,
          "required": {
            "day": 14,
            "evening": 10.8,
            "night": 9.3,
            "total": 34.1
          },
          "signedGap": {
            "day": 8,
            "evening": 4.8,
            "night": 5.3,
            "total": 18.1
          },
          "shortage": {
            "day": 8,
            "evening": 4.8,
            "night": 5.3,
            "total": 18.1
          }
        }
      }
    },
    {
      "code": "1502110064",
      "name": "安泰醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 10,
        "need": 8,
        "gap": 2,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 38,
        "occupancy": 0.306,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 5.8,
          "evening": 5.8,
          "night": 5.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 38,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 38,
          "occupancy": 0.306,
          "occupiedBeds": 11.6,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -1.2,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 38,
          "occupancy": 0.306,
          "occupiedBeds": 11.6,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -1.2,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 38,
          "occupancy": 1,
          "occupiedBeds": 38,
          "required": {
            "day": 3.8,
            "evening": 2.9,
            "night": 2.5,
            "total": 9.3
          },
          "signedGap": {
            "day": 1.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 3.3
          },
          "shortage": {
            "day": 1.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 3.3
          }
        }
      }
    },
    {
      "code": "1539010057",
      "name": "安生醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1532101108",
      "name": "宋俊宏婦幼醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 35,
        "occupancy": 0.375,
        "current": {
          "day": 2,
          "evening": 1.6,
          "night": 1.2,
          "total": 4.8
        },
        "actualRatio": {
          "day": 6.6,
          "evening": 8.2,
          "night": 10.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 35,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 35,
          "occupancy": 0.375,
          "occupiedBeds": 13.1,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.6,
            "night": -0.3,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 35,
          "occupancy": 0.375,
          "occupiedBeds": 13.1,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.6,
            "night": -0.3,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 35,
          "occupancy": 1,
          "occupiedBeds": 35,
          "required": {
            "day": 3.5,
            "evening": 2.7,
            "night": 2.3,
            "total": 8.5
          },
          "signedGap": {
            "day": 1.5,
            "evening": 1.1,
            "night": 1.1,
            "total": 3.7
          },
          "shortage": {
            "day": 1.5,
            "evening": 1.1,
            "night": 1.1,
            "total": 3.7
          }
        }
      }
    },
    {
      "code": "1537081085",
      "name": "宋志懿醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.008,
        "current": {
          "day": 0.1,
          "evening": 0.1,
          "night": 0.1,
          "total": 0.3
        },
        "actualRatio": {
          "day": 1.6,
          "evening": 1.6,
          "night": 1.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.008,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.1,
            "night": -0.1,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.008,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.1,
            "night": -0.1,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.6
          },
          "shortage": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.6
          }
        }
      }
    },
    {
      "code": "1517040015",
      "name": "宏恩醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 29,
        "need": 10,
        "gap": 19,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 29,
        "occupancy": 0.75,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 1,
          "total": 6
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 10.9,
          "night": 21.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 29,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 29,
          "occupancy": 0.75,
          "occupiedBeds": 21.8,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": 0.5,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.5,
            "total": 0.5
          }
        },
        "mid": {
          "bedBase": 29,
          "occupancy": 0.75,
          "occupiedBeds": 21.8,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": 0.5,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.5,
            "total": 0.5
          }
        },
        "high": {
          "bedBase": 29,
          "occupancy": 1,
          "occupiedBeds": 29,
          "required": {
            "day": 2.9,
            "evening": 2.2,
            "night": 1.9,
            "total": 7.1
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0.2,
            "night": 0.9,
            "total": 1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.9,
            "total": 1.2
          }
        }
      }
    },
    {
      "code": "1541070045",
      "name": "宏科醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1531130052",
      "name": "廣川醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 17,
        "occupancy": 0.22699999999999998,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 3.9,
          "evening": 3.9,
          "night": 3.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 17,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 17,
          "occupancy": 0.227,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 0.9
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 17,
          "occupancy": 0.227,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 0.9
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 17,
          "occupancy": 1,
          "occupiedBeds": 17,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.3,
            "night": 0.1,
            "total": 1.1
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.3,
            "night": 0.1,
            "total": 1.1
          }
        }
      }
    },
    {
      "code": "1542050056",
      "name": "建佑醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 30,
        "need": 30,
        "gap": 0,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 143,
        "occupancy": 0.326,
        "current": {
          "day": 9,
          "evening": 5,
          "night": 5,
          "total": 19
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 9.3,
          "night": 9.3
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 120,
      "openBedDelta": -23,
      "scenarios": {
        "low": {
          "bedBase": 143,
          "occupancy": 0.326,
          "occupiedBeds": 46.6,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": -4.3,
            "evening": -1.4,
            "night": -1.9,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 120,
          "occupancy": 0.326,
          "occupiedBeds": 39.1,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": -5.1,
            "evening": -2,
            "night": -2.4,
            "total": -9.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 120,
          "occupancy": 1,
          "occupiedBeds": 120,
          "required": {
            "day": 12,
            "evening": 9.2,
            "night": 8,
            "total": 29.2
          },
          "signedGap": {
            "day": 3,
            "evening": 4.2,
            "night": 3,
            "total": 10.2
          },
          "shortage": {
            "day": 3,
            "evening": 4.2,
            "night": 3,
            "total": 10.2
          }
        }
      }
    },
    {
      "code": "1532011163",
      "name": "德仁醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.67,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.7,
          "evening": 10.1,
          "night": 10.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.67,
          "occupiedBeds": 20.1,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.67,
          "occupiedBeds": 20.1,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 0,
            "evening": 0.3,
            "night": 0,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.3,
            "night": 0,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1502050045",
      "name": "德謙醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.358,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 3.6,
          "evening": 3.6,
          "night": 3.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.358,
          "occupiedBeds": 7.2,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.4,
            "night": -1.5,
            "total": -4.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.358,
          "occupiedBeds": 7.2,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.4,
            "night": -1.5,
            "total": -4.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1521040050",
      "name": "志誠醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 10,
        "need": 0,
        "gap": 10,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.024,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 0.2,
          "evening": 0.2,
          "night": 0.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.024,
          "occupiedBeds": 0.5,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -2,
            "evening": -2,
            "night": -1,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.024,
          "occupiedBeds": 0.5,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -2,
            "evening": -2,
            "night": -1,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1536061114",
      "name": "忠港醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 8,
        "need": 4,
        "gap": 4,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.768,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 15.4,
          "night": 15.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.768,
          "occupiedBeds": 15.4,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0.2,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.768,
          "occupiedBeds": 15.4,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0.2,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1531041390",
      "name": "怡和醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 14,
        "need": 14,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 34,
        "occupancy": 0.9,
        "current": {
          "day": 3.2,
          "evening": 2.4,
          "night": 2.1,
          "total": 7.7
        },
        "actualRatio": {
          "day": 9.6,
          "evening": 12.8,
          "night": 14.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 34,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 34,
          "occupancy": 0.9,
          "occupiedBeds": 30.6,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2,
            "total": 7.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": -0.1,
            "total": -0.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 34,
          "occupancy": 0.9,
          "occupiedBeds": 30.6,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2,
            "total": 7.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": 0,
            "night": -0.1,
            "total": -0.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 34,
          "occupancy": 1,
          "occupiedBeds": 34,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.3,
            "total": 8.3
          },
          "signedGap": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          },
          "shortage": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          }
        }
      }
    },
    {
      "code": "1531131157",
      "name": "恩樺醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 31,
        "need": 36,
        "gap": -5,
        "vacancies": 12
      },
      "acute": {
        "reportedBeds": 77,
        "occupancy": 0.9590000000000001,
        "current": {
          "day": 8,
          "evening": 7.6,
          "night": 7.6,
          "total": 23.2
        },
        "actualRatio": {
          "day": 9.2,
          "evening": 9.7,
          "night": 9.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 77,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 77,
          "occupancy": 0.959,
          "occupiedBeds": 73.8,
          "required": {
            "day": 7.4,
            "evening": 5.7,
            "night": 4.9,
            "total": 18
          },
          "signedGap": {
            "day": -0.6,
            "evening": -1.9,
            "night": -2.7,
            "total": -5.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 77,
          "occupancy": 0.959,
          "occupiedBeds": 73.8,
          "required": {
            "day": 7.4,
            "evening": 5.7,
            "night": 4.9,
            "total": 18
          },
          "signedGap": {
            "day": -0.6,
            "evening": -1.9,
            "night": -2.7,
            "total": -5.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 77,
          "occupancy": 1,
          "occupiedBeds": 77,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.1,
            "total": 18.8
          },
          "signedGap": {
            "day": -0.3,
            "evening": -1.7,
            "night": -2.5,
            "total": -4.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1542021171",
      "name": "惠川醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 3,
        "need": 0,
        "gap": 3,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.7559999999999999,
        "current": {
          "day": 1.5,
          "evening": 1.5,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 10.1,
          "evening": 10.1,
          "night": 15.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.756,
          "occupiedBeds": 15.1,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": 0,
            "evening": -0.3,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.756,
          "occupiedBeds": 15.1,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": 0,
            "evening": -0.3,
            "night": 0,
            "total": -0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1542011237",
      "name": "惠德醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 23,
        "occupancy": 0.654,
        "current": {
          "day": 2,
          "evening": 1.3,
          "night": 1.2,
          "total": 4.5
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 11.6,
          "night": 12.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": -3,
      "scenarios": {
        "low": {
          "bedBase": 23,
          "occupancy": 0.654,
          "occupiedBeds": 15,
          "required": {
            "day": 1.5,
            "evening": 1.2,
            "night": 1,
            "total": 3.7
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.654,
          "occupiedBeds": 13.1,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.3,
            "night": -0.3,
            "total": -1.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.4
          }
        }
      }
    },
    {
      "code": "1535040068",
      "name": "慈祐醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 21,
        "need": 22,
        "gap": -1,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 41,
        "occupancy": 0.406,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 2,
          "total": 8
        },
        "actualRatio": {
          "day": 5.5,
          "evening": 5.5,
          "night": 8.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 41,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 41,
          "occupancy": 0.406,
          "occupiedBeds": 16.6,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.7,
            "night": -0.9,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 41,
          "occupancy": 0.406,
          "occupiedBeds": 16.6,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.7,
            "night": -0.9,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 41,
          "occupancy": 1,
          "occupiedBeds": 41,
          "required": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.7,
            "total": 10
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.2,
            "night": 0.7,
            "total": 2
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.2,
            "night": 0.7,
            "total": 2
          }
        }
      }
    },
    {
      "code": "1537010219",
      "name": "成美醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 7,
        "gap": -2,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 40,
        "occupancy": 0,
        "current": {
          "day": 1.3,
          "evening": 1.5,
          "night": 1,
          "total": 3.8
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 40,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 40,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.5,
            "night": -1,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 40,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1.3,
            "evening": -1.5,
            "night": -1,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 40,
          "occupancy": 1,
          "occupiedBeds": 40,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.7
          },
          "signedGap": {
            "day": 2.7,
            "evening": 1.6,
            "night": 1.7,
            "total": 5.9
          },
          "shortage": {
            "day": 2.7,
            "evening": 1.6,
            "night": 1.7,
            "total": 5.9
          }
        }
      }
    },
    {
      "code": "1532021285",
      "name": "承安醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.17,
        "current": {
          "day": 1.1,
          "evening": 1.1,
          "night": 1.2,
          "total": 3.4
        },
        "actualRatio": {
          "day": 3.1,
          "evening": 3.1,
          "night": 2.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.17,
          "occupiedBeds": 3.4,
          "required": {
            "day": 0.3,
            "evening": 0.3,
            "night": 0.2,
            "total": 0.8
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -1,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.17,
          "occupiedBeds": 3.4,
          "required": {
            "day": 0.3,
            "evening": 0.3,
            "night": 0.2,
            "total": 0.8
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -1,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.5
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.4,
            "night": 0.1,
            "total": 1.5
          }
        }
      }
    },
    {
      "code": "1532010013",
      "name": "振生醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 10,
        "need": 10,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.008,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 1,
          "total": 8
        },
        "actualRatio": {
          "day": 0,
          "evening": 0.1,
          "night": 0.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.008,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -3,
            "night": -1,
            "total": -8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.008,
          "occupiedBeds": 0.2,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -3,
            "night": -1,
            "total": -8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -2,
            "evening": -1.5,
            "night": 0.3,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1502050296",
      "name": "文雄醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.43,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 8.6,
          "evening": 8.6,
          "night": 8.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.43,
          "occupiedBeds": 8.6,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.3,
            "night": -0.4,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.43,
          "occupiedBeds": 8.6,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.1
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.3,
            "night": -0.4,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1512040051",
      "name": "新中興醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.195,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 3.9,
          "evening": 3.9,
          "night": 3.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.195,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.195,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1517050084",
      "name": "新亞東婦產科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 24,
        "occupancy": 0.733,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 8.8,
          "night": 17.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 24,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 24,
          "occupancy": 0.733,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.6,
            "night": 0.2,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 24,
          "occupancy": 0.733,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.6,
            "night": 0.2,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 24,
          "occupancy": 1,
          "occupiedBeds": 24,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": 0.4,
            "evening": -0.2,
            "night": 0.6,
            "total": 0.8
          },
          "shortage": {
            "day": 0.4,
            "evening": 0,
            "night": 0.6,
            "total": 1
          }
        }
      }
    },
    {
      "code": "1531051172",
      "name": "新北仁康醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.888,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 17.8,
          "night": 17.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.888,
          "occupiedBeds": 17.8,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": 0.4,
            "night": 0.2,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.4,
            "night": 0.2,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.888,
          "occupiedBeds": 17.8,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": 0.4,
            "night": 0.2,
            "total": 0.3
          },
          "shortage": {
            "day": 0,
            "evening": 0.4,
            "night": 0.2,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1503190039",
      "name": "新太平澄清醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 44,
        "occupancy": 0.903,
        "current": {
          "day": 4.1,
          "evening": 2,
          "night": 2,
          "total": 8.1
        },
        "actualRatio": {
          "day": 9.7,
          "evening": 19.9,
          "night": 19.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 44,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 44,
          "occupancy": 0.903,
          "occupiedBeds": 39.7,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.6,
            "total": 9.7
          },
          "signedGap": {
            "day": -0.1,
            "evening": 1.1,
            "night": 0.6,
            "total": 1.6
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 0.6,
            "total": 1.7
          }
        },
        "mid": {
          "bedBase": 44,
          "occupancy": 0.903,
          "occupiedBeds": 39.7,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.6,
            "total": 9.7
          },
          "signedGap": {
            "day": -0.1,
            "evening": 1.1,
            "night": 0.6,
            "total": 1.6
          },
          "shortage": {
            "day": 0,
            "evening": 1.1,
            "night": 0.6,
            "total": 1.7
          }
        },
        "high": {
          "bedBase": 44,
          "occupancy": 1,
          "occupiedBeds": 44,
          "required": {
            "day": 4.4,
            "evening": 3.4,
            "night": 2.9,
            "total": 10.7
          },
          "signedGap": {
            "day": 0.3,
            "evening": 1.4,
            "night": 0.9,
            "total": 2.6
          },
          "shortage": {
            "day": 0.3,
            "evening": 1.4,
            "night": 0.9,
            "total": 2.6
          }
        }
      }
    },
    {
      "code": "1536011276",
      "name": "新惠生醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 15,
        "need": 15,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 43,
        "occupancy": 0.69,
        "current": {
          "day": 3.5,
          "evening": 3,
          "night": 3,
          "total": 9.5
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 9.9,
          "night": 9.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 43,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 43,
          "occupancy": 0.69,
          "occupiedBeds": 29.7,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.7,
            "night": -1,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 43,
          "occupancy": 0.69,
          "occupiedBeds": 29.7,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.7,
            "night": -1,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 43,
          "occupancy": 1,
          "occupiedBeds": 43,
          "required": {
            "day": 4.3,
            "evening": 3.3,
            "night": 2.9,
            "total": 10.5
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.3,
            "night": -0.1,
            "total": 1
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.3,
            "night": 0,
            "total": 1.1
          }
        }
      }
    },
    {
      "code": "1511010068",
      "name": "新昆明醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 16,
        "occupancy": 0.26,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 4.2,
          "evening": 4.2,
          "night": 4.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 16,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 16,
          "occupancy": 0.26,
          "occupiedBeds": 4.2,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 16,
          "occupancy": 0.26,
          "occupiedBeds": 4.2,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 16,
          "occupancy": 1,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": 0.6,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.9
          },
          "shortage": {
            "day": 0.6,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1507360028",
      "name": "新正薪醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 6,
        "gap": -1,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.35600000000000004,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 3.6,
          "evening": 7.1,
          "night": 7.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.356,
          "occupiedBeds": 7.1,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.5,
            "night": -0.5,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.356,
          "occupiedBeds": 7.1,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.5,
            "night": -0.5,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1532100012",
      "name": "新永和醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 44,
        "occupancy": 0.512,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 2,
          "total": 9
        },
        "actualRatio": {
          "day": 5.6,
          "evening": 7.5,
          "night": 11.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 44,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 44,
          "occupancy": 0.512,
          "occupiedBeds": 22.5,
          "required": {
            "day": 2.3,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.3,
            "night": -0.5,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 44,
          "occupancy": 0.512,
          "occupiedBeds": 22.5,
          "required": {
            "day": 2.3,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.3,
            "night": -0.5,
            "total": -3.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 44,
          "occupancy": 1,
          "occupiedBeds": 44,
          "required": {
            "day": 4.4,
            "evening": 3.4,
            "night": 2.9,
            "total": 10.7
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.4,
            "night": 0.9,
            "total": 1.7
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.4,
            "night": 0.9,
            "total": 1.7
          }
        }
      }
    },
    {
      "code": "1531060073",
      "name": "新莊英仁醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 3,
        "need": 3,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1502061208",
      "name": "新華醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 7,
        "need": 7,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.929,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 9.3,
          "evening": 9.3,
          "night": 9.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.929,
          "occupiedBeds": 18.6,
          "required": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.6,
            "night": -0.8,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.929,
          "occupiedBeds": 18.6,
          "required": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.5
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.6,
            "night": -0.8,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1507320015",
      "name": "新高醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 18,
        "need": 22,
        "gap": -4,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 81,
        "occupancy": 0.525,
        "current": {
          "day": 5,
          "evening": 4,
          "night": 4,
          "total": 13
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 10.6,
          "night": 10.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 81,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 81,
          "occupancy": 0.525,
          "occupiedBeds": 42.5,
          "required": {
            "day": 4.3,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.4
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.7,
            "night": -1.2,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 81,
          "occupancy": 0.525,
          "occupiedBeds": 42.5,
          "required": {
            "day": 4.3,
            "evening": 3.3,
            "night": 2.8,
            "total": 10.4
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.7,
            "night": -1.2,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 81,
          "occupancy": 1,
          "occupiedBeds": 81,
          "required": {
            "day": 8.1,
            "evening": 6.2,
            "night": 5.4,
            "total": 19.7
          },
          "signedGap": {
            "day": 3.1,
            "evening": 2.2,
            "night": 1.4,
            "total": 6.7
          },
          "shortage": {
            "day": 3.1,
            "evening": 2.2,
            "night": 1.4,
            "total": 6.7
          }
        }
      }
    },
    {
      "code": "1507010014",
      "name": "新高鳳醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.625,
        "current": {
          "day": 1.3,
          "evening": 1.1,
          "night": 1,
          "total": 3.4
        },
        "actualRatio": {
          "day": 9.6,
          "evening": 11.4,
          "night": 12.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.625,
          "occupiedBeds": 12.5,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.625,
          "occupiedBeds": 12.5,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.5
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.5
          }
        }
      }
    },
    {
      "code": "1536060037",
      "name": "明德醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 7,
        "need": 7,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 31,
        "occupancy": 0.235,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 3.6,
          "evening": 7.3,
          "night": 7.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 31,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 31,
          "occupancy": 0.235,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 31,
          "occupancy": 0.235,
          "occupiedBeds": 7.3,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.8
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.4,
            "night": -0.5,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 31,
          "occupancy": 1,
          "occupiedBeds": 31,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": 1.1,
            "evening": 1.4,
            "night": 1.1,
            "total": 3.6
          },
          "shortage": {
            "day": 1.1,
            "evening": 1.4,
            "night": 1.1,
            "total": 3.6
          }
        }
      }
    },
    {
      "code": "1501201020",
      "name": "景美醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 9,
        "need": 10,
        "gap": -1,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 39,
        "occupancy": 0.358,
        "current": {
          "day": 4.6,
          "evening": 3.4,
          "night": 3,
          "total": 11
        },
        "actualRatio": {
          "day": 3,
          "evening": 4.1,
          "night": 4.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 39,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 39,
          "occupancy": 0.358,
          "occupiedBeds": 14,
          "required": {
            "day": 1.4,
            "evening": 1.1,
            "night": 0.9,
            "total": 3.4
          },
          "signedGap": {
            "day": -3.2,
            "evening": -2.3,
            "night": -2.1,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 39,
          "occupancy": 0.358,
          "occupiedBeds": 14,
          "required": {
            "day": 1.4,
            "evening": 1.1,
            "night": 0.9,
            "total": 3.4
          },
          "signedGap": {
            "day": -3.2,
            "evening": -2.3,
            "night": -2.1,
            "total": -7.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 39,
          "occupancy": 1,
          "occupiedBeds": 39,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.4,
            "night": -0.4,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1536181139",
      "name": "本堂澄清醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.426,
        "current": {
          "day": 4,
          "evening": 2,
          "night": 2,
          "total": 8
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 10.4,
          "night": 10.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.426,
          "occupiedBeds": 20.9,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": -1.9,
            "evening": -0.4,
            "night": -0.6,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.426,
          "occupiedBeds": 20.9,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": -1.9,
            "evening": -0.4,
            "night": -0.6,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 0.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 3.9
          },
          "shortage": {
            "day": 0.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 3.9
          }
        }
      }
    },
    {
      "code": "1542011282",
      "name": "杏和醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 15,
        "need": 20,
        "gap": -5,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.835,
        "current": {
          "day": 4.5,
          "evening": 4,
          "night": 4,
          "total": 12.5
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 10,
          "night": 10
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.835,
          "occupiedBeds": 40.1,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.8
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1.3,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.835,
          "occupiedBeds": 40.1,
          "required": {
            "day": 4,
            "evening": 3.1,
            "night": 2.7,
            "total": 9.8
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1.3,
            "total": -2.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 0.3,
            "evening": -0.3,
            "night": -0.8,
            "total": -0.8
          },
          "shortage": {
            "day": 0.3,
            "evening": 0,
            "night": 0,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1531010082",
      "name": "板新醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1531011310",
      "name": "板橋國泰醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 12,
        "need": 12,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 25,
        "occupancy": 0.877,
        "current": {
          "day": 4,
          "evening": 4,
          "night": 4,
          "total": 12
        },
        "actualRatio": {
          "day": 5.5,
          "evening": 5.5,
          "night": 5.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 25,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 25,
          "occupancy": 0.877,
          "occupiedBeds": 21.9,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": -2.3,
            "night": -2.5,
            "total": -6.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 25,
          "occupancy": 0.877,
          "occupiedBeds": 21.9,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.3
          },
          "signedGap": {
            "day": -1.8,
            "evening": -2.3,
            "night": -2.5,
            "total": -6.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 25,
          "occupancy": 1,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -1.5,
            "evening": -2.1,
            "night": -2.3,
            "total": -5.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1517030055",
      "name": "林森醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 10,
        "need": 10,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.43,
        "current": {
          "day": 2.5,
          "evening": 2,
          "night": 2,
          "total": 6.5
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 6.5,
          "night": 6.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.43,
          "occupiedBeds": 12.9,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.1
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1,
            "night": -1.1,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.43,
          "occupiedBeds": 12.9,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.1
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1,
            "night": -1.1,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0.3,
            "night": 0,
            "total": 0.8
          },
          "shortage": {
            "day": 0.5,
            "evening": 0.3,
            "night": 0,
            "total": 0.8
          }
        }
      }
    },
    {
      "code": "1533030028",
      "name": "林醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1532010120",
      "name": "聯新國際醫院桃新分院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.218,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 4.4,
          "evening": 4.4,
          "night": 4.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.218,
          "occupiedBeds": 4.4,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.218,
          "occupiedBeds": 4.4,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1542061077",
      "name": "樂生婦幼醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.313,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 3.1,
          "evening": 6.3,
          "night": 6.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.313,
          "occupiedBeds": 6.3,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -1.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.313,
          "occupiedBeds": 6.3,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -1.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1502020065",
      "name": "正大醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 7,
        "gap": -1,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.835,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 8.4,
          "evening": 8.4,
          "night": 16.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.835,
          "occupiedBeds": 16.7,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.7,
            "night": 0.1,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.835,
          "occupiedBeds": 16.7,
          "required": {
            "day": 1.7,
            "evening": 1.3,
            "night": 1.1,
            "total": 4.1
          },
          "signedGap": {
            "day": -0.3,
            "evening": -0.7,
            "night": 0.1,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1543010190",
      "name": "民眾醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 16,
        "need": 16,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 34,
        "occupancy": 0.8809999999999999,
        "current": {
          "day": 4,
          "evening": 4,
          "night": 4,
          "total": 12
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 7.5,
          "night": 7.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 34,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 34,
          "occupancy": 0.881,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": -1,
            "evening": -1.7,
            "night": -2,
            "total": -4.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 34,
          "occupancy": 0.881,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": -1,
            "evening": -1.7,
            "night": -2,
            "total": -4.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 34,
          "occupancy": 1,
          "occupiedBeds": 34,
          "required": {
            "day": 3.4,
            "evening": 2.6,
            "night": 2.3,
            "total": 8.3
          },
          "signedGap": {
            "day": -0.6,
            "evening": -1.4,
            "night": -1.7,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1531031278",
      "name": "永和復康醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.879,
        "current": {
          "day": 2,
          "evening": 1.5,
          "night": 1.5,
          "total": 5
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 11.7,
          "night": 11.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.879,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.1,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.879,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.1,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": -0.2,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1521050010",
      "name": "永川醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 0,
          "night": 0,
          "total": 1
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": 0,
            "night": 0,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": 0,
            "night": 0,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 1.5,
            "night": 1.3,
            "total": 3.9
          },
          "shortage": {
            "day": 1,
            "evening": 1.5,
            "night": 1.3,
            "total": 3.9
          }
        }
      }
    },
    {
      "code": "1521030081",
      "name": "洪外科醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1539010048",
      "name": "洪揚醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.16699999999999998,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 4.1,
          "evening": 4.1,
          "night": 4.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.167,
          "occupiedBeds": 8.2,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.5,
            "total": 2
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.4,
            "night": -1.5,
            "total": -4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.167,
          "occupiedBeds": 8.2,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.5,
            "total": 2
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.4,
            "night": -1.5,
            "total": -4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 2.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 5.9
          },
          "shortage": {
            "day": 2.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 5.9
          }
        }
      }
    },
    {
      "code": "1542030116",
      "name": "溪洲醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 9,
        "gap": -4,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.242,
        "current": {
          "day": 1.4,
          "evening": 1.4,
          "night": 1,
          "total": 3.8
        },
        "actualRatio": {
          "day": 3.5,
          "evening": 3.5,
          "night": 4.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.242,
          "occupiedBeds": 4.8,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1,
            "night": -0.7,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.242,
          "occupiedBeds": 4.8,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1,
            "night": -0.7,
            "total": -2.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.6,
            "evening": 0.1,
            "night": 0.3,
            "total": 1.1
          },
          "shortage": {
            "day": 0.6,
            "evening": 0.1,
            "night": 0.3,
            "total": 1.1
          }
        }
      }
    },
    {
      "code": "1542150033",
      "name": "溫賀睿和醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1503010036",
      "name": "漢忠醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 7,
        "need": 12,
        "gap": -5,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 25,
        "occupancy": 0.243,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 6.1,
          "evening": 6.1,
          "night": 6.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 25,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 25,
          "occupancy": 0.243,
          "occupiedBeds": 6.1,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 25,
          "occupancy": 0.243,
          "occupiedBeds": 6.1,
          "required": {
            "day": 0.6,
            "evening": 0.5,
            "night": 0.4,
            "total": 1.5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.5,
            "night": -0.6,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 25,
          "occupancy": 1,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": 1.5,
            "evening": 0.9,
            "night": 0.7,
            "total": 3.1
          },
          "shortage": {
            "day": 1.5,
            "evening": 0.9,
            "night": 0.7,
            "total": 3.1
          }
        }
      }
    },
    {
      "code": "1536151042",
      "name": "烏日澄清醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.35200000000000004,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 10.6,
          "evening": 10.6,
          "night": 10.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.352,
          "occupiedBeds": 10.6,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.6
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.2,
            "night": -0.3,
            "total": -0.4
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.352,
          "occupiedBeds": 10.6,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.6
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.2,
            "night": -0.3,
            "total": -0.4
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          },
          "shortage": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          }
        }
      }
    },
    {
      "code": "1541011126",
      "name": "營新醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 8,
        "need": 10,
        "gap": -2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 37,
        "occupancy": 0.21899999999999997,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 4.1,
          "evening": 8.1,
          "night": 8.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 37,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 37,
          "occupancy": 0.219,
          "occupiedBeds": 8.1,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.5,
            "total": 2
          },
          "signedGap": {
            "day": -1.2,
            "evening": -0.4,
            "night": -0.5,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 37,
          "occupancy": 0.219,
          "occupiedBeds": 8.1,
          "required": {
            "day": 0.8,
            "evening": 0.6,
            "night": 0.5,
            "total": 2
          },
          "signedGap": {
            "day": -1.2,
            "evening": -0.4,
            "night": -0.5,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 37,
          "occupancy": 1,
          "occupiedBeds": 37,
          "required": {
            "day": 3.7,
            "evening": 2.8,
            "night": 2.5,
            "total": 9
          },
          "signedGap": {
            "day": 1.7,
            "evening": 1.8,
            "night": 1.5,
            "total": 5
          },
          "shortage": {
            "day": 1.7,
            "evening": 1.8,
            "night": 1.5,
            "total": 5
          }
        }
      }
    },
    {
      "code": "1542061148",
      "name": "瑞生醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 17,
        "need": 5,
        "gap": 12,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.21100000000000002,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 4.2,
          "evening": 4.2,
          "night": 4.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.211,
          "occupiedBeds": 4.2,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.211,
          "occupiedBeds": 4.2,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1507360019",
      "name": "瑞祥醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1531120038",
      "name": "瑞芳礦工醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 6,
        "gap": 2,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.061,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 0.6,
          "evening": 0.6,
          "night": 0.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.061,
          "occupiedBeds": 1.2,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -1.9,
            "evening": -1.9,
            "night": -1.9,
            "total": -5.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.061,
          "occupiedBeds": 1.2,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -1.9,
            "evening": -1.9,
            "night": -1.9,
            "total": -5.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1505310011",
      "name": "璟馨婦幼醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 8,
        "need": 6,
        "gap": 2,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.42,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 6.3,
          "evening": 6.3,
          "night": 6.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.42,
          "occupiedBeds": 12.6,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -1.2,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.42,
          "occupiedBeds": 12.6,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.8,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1,
            "night": -1.2,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1,
            "evening": 0.3,
            "night": 0,
            "total": 1.3
          },
          "shortage": {
            "day": 1,
            "evening": 0.3,
            "night": 0,
            "total": 1.3
          }
        }
      }
    },
    {
      "code": "1507290012",
      "name": "生安婦產小兒科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 13,
        "need": 13,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.079,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 1.3,
          "evening": 1.3,
          "night": 1.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.079,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 0.9
          },
          "signedGap": {
            "day": -2.6,
            "evening": -2.7,
            "night": -2.7,
            "total": -8.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.079,
          "occupiedBeds": 3.9,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 0.9
          },
          "signedGap": {
            "day": -2.6,
            "evening": -2.7,
            "night": -2.7,
            "total": -8.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 1.9,
            "evening": 0.8,
            "night": 0.3,
            "total": 2.9
          },
          "shortage": {
            "day": 1.9,
            "evening": 0.8,
            "night": 0.3,
            "total": 2.9
          }
        }
      }
    },
    {
      "code": "1537051274",
      "name": "皓生醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 2,
        "need": 2,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.16,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 1.1,
          "evening": 1.1,
          "night": 1.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.16,
          "occupiedBeds": 3.2,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.8
          },
          "signedGap": {
            "day": -2.7,
            "evening": -2.8,
            "night": -2.8,
            "total": -8.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.16,
          "occupiedBeds": 3.2,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.8
          },
          "signedGap": {
            "day": -2.7,
            "evening": -2.8,
            "night": -2.8,
            "total": -8.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -1,
            "evening": -1.5,
            "night": -1.7,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1531061230",
      "name": "益民醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 25,
        "occupancy": 0.9470000000000001,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 11.8,
          "night": 11.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 25,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 25,
          "occupancy": 0.947,
          "occupiedBeds": 23.7,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.2,
            "night": -0.4,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 25,
          "occupancy": 0.947,
          "occupiedBeds": 23.7,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.2,
            "night": -0.4,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 25,
          "occupancy": 1,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.1,
            "night": -0.3,
            "total": -0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1532020215",
      "name": "祐民醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.5720000000000001,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 5.7,
          "evening": 5.7,
          "night": 11.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.572,
          "occupiedBeds": 11.4,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.1,
            "night": -0.2,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.572,
          "occupiedBeds": 11.4,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.1,
            "night": -0.2,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.3
          }
        }
      }
    },
    {
      "code": "1502050170",
      "name": "祐生醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 9,
        "need": 13,
        "gap": -4,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 38,
        "occupancy": 0.46299999999999997,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 8.8,
          "evening": 8.8,
          "night": 8.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 38,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 38,
          "occupancy": 0.463,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.6,
            "night": -0.8,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 38,
          "occupancy": 0.463,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.6,
            "night": -0.8,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 38,
          "occupancy": 1,
          "occupiedBeds": 38,
          "required": {
            "day": 3.8,
            "evening": 2.9,
            "night": 2.5,
            "total": 9.3
          },
          "signedGap": {
            "day": 1.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 3.3
          },
          "shortage": {
            "day": 1.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 3.3
          }
        }
      }
    },
    {
      "code": "1536011294",
      "name": "祥恩醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 14,
        "need": 15,
        "gap": -1,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 39,
        "occupancy": 0.927,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 12.1,
          "evening": 12.1,
          "night": 12.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 39,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 39,
          "occupancy": 0.927,
          "occupiedBeds": 36.2,
          "required": {
            "day": 3.6,
            "evening": 2.8,
            "night": 2.4,
            "total": 8.8
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.2,
            "night": -0.6,
            "total": -0.2
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 39,
          "occupancy": 0.927,
          "occupiedBeds": 36.2,
          "required": {
            "day": 3.6,
            "evening": 2.8,
            "night": 2.4,
            "total": 8.8
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.2,
            "night": -0.6,
            "total": -0.2
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 39,
          "occupancy": 1,
          "occupiedBeds": 39,
          "required": {
            "day": 3.9,
            "evening": 3,
            "night": 2.6,
            "total": 9.5
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0,
            "night": -0.4,
            "total": 0.5
          },
          "shortage": {
            "day": 0.9,
            "evening": 0,
            "night": 0,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1501021219",
      "name": "秀傳醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 8,
        "need": 6,
        "gap": 2,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 23,
        "occupancy": 0.884,
        "current": {
          "day": 2.5,
          "evening": 2.5,
          "night": 2.5,
          "total": 7.5
        },
        "actualRatio": {
          "day": 8.1,
          "evening": 8.1,
          "night": 8.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 23,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 23,
          "occupancy": 0.884,
          "occupiedBeds": 20.3,
          "required": {
            "day": 2,
            "evening": 1.6,
            "night": 1.4,
            "total": 5
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1.1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 23,
          "occupancy": 0.884,
          "occupiedBeds": 20.3,
          "required": {
            "day": 2,
            "evening": 1.6,
            "night": 1.4,
            "total": 5
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1.1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 23,
          "occupancy": 1,
          "occupiedBeds": 23,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.7,
            "night": -1,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1532101117",
      "name": "秉坤婦幼醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 7,
        "need": 6,
        "gap": 1,
        "vacancies": 8
      },
      "acute": {
        "reportedBeds": 25,
        "occupancy": 0.8270000000000001,
        "current": {
          "day": 2.5,
          "evening": 2,
          "night": 1.5,
          "total": 6
        },
        "actualRatio": {
          "day": 8.3,
          "evening": 10.3,
          "night": 13.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 25,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 25,
          "occupancy": 0.827,
          "occupiedBeds": 20.7,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.4,
            "night": -0.1,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 25,
          "occupancy": 0.827,
          "occupiedBeds": 20.7,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.4,
            "night": -0.1,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 25,
          "occupancy": 1,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": 0,
            "evening": -0.1,
            "night": 0.2,
            "total": 0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        }
      }
    },
    {
      "code": "1533030046",
      "name": "竹信醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 24,
        "occupancy": 0,
        "current": {
          "day": 7,
          "evening": 0,
          "night": 0,
          "total": 7
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 24,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 24,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -7,
            "evening": 0,
            "night": 0,
            "total": -7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 24,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -7,
            "evening": 0,
            "night": 0,
            "total": -7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 24,
          "occupancy": 1,
          "occupiedBeds": 24,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": -4.6,
            "evening": 1.8,
            "night": 1.6,
            "total": -1.2
          },
          "shortage": {
            "day": 0,
            "evening": 1.8,
            "night": 1.6,
            "total": 3.4
          }
        }
      }
    },
    {
      "code": "1517011103",
      "name": "第一醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 3,
        "need": 5,
        "gap": -2,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 12,
        "occupancy": 0.16699999999999998,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 2,
          "evening": 2,
          "night": 2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 12,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 12,
          "occupancy": 0.167,
          "occupiedBeds": 2,
          "required": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.5
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 12,
          "occupancy": 0.167,
          "occupiedBeds": 2,
          "required": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.5
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 12,
          "occupancy": 1,
          "occupiedBeds": 12,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.1
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        }
      }
    },
    {
      "code": "1517080019",
      "name": "聯安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 10,
        "need": 13,
        "gap": -3,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 38,
        "occupancy": 0.732,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 9.3,
          "evening": 13.9,
          "night": 13.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 38,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 38,
          "occupancy": 0.732,
          "occupiedBeds": 27.8,
          "required": {
            "day": 2.8,
            "evening": 2.1,
            "night": 1.9,
            "total": 6.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": 0.1,
            "night": -0.1,
            "total": -0.2
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 38,
          "occupancy": 0.732,
          "occupiedBeds": 27.8,
          "required": {
            "day": 2.8,
            "evening": 2.1,
            "night": 1.9,
            "total": 6.8
          },
          "signedGap": {
            "day": -0.2,
            "evening": 0.1,
            "night": -0.1,
            "total": -0.2
          },
          "shortage": {
            "day": 0,
            "evening": 0.1,
            "night": 0,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 38,
          "occupancy": 1,
          "occupiedBeds": 38,
          "required": {
            "day": 3.8,
            "evening": 2.9,
            "night": 2.5,
            "total": 9.3
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 2.3
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.9,
            "night": 0.5,
            "total": 2.3
          }
        }
      }
    },
    {
      "code": "1501160042",
      "name": "臺北市北投健康管理醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 24,
        "need": 29,
        "gap": -5,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1517021074",
      "name": "臺安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 11,
        "need": 10,
        "gap": 1,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 41,
        "occupancy": 0.39,
        "current": {
          "day": 2.5,
          "evening": 2.5,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 6.4,
          "night": 8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 41,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 41,
          "occupancy": 0.39,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.3,
            "night": -0.9,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 41,
          "occupancy": 0.39,
          "occupiedBeds": 16,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.3,
            "night": -0.9,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 41,
          "occupancy": 1,
          "occupiedBeds": 41,
          "required": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.7,
            "total": 10
          },
          "signedGap": {
            "day": 1.6,
            "evening": 0.7,
            "night": 0.7,
            "total": 3
          },
          "shortage": {
            "day": 1.6,
            "evening": 0.7,
            "night": 0.7,
            "total": 3
          }
        }
      }
    },
    {
      "code": "1503260018",
      "name": "臺安醫院雙十分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 19,
        "need": 20,
        "gap": -1,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 56,
        "occupancy": 0.48700000000000004,
        "current": {
          "day": 4.5,
          "evening": 3.5,
          "night": 2.5,
          "total": 10.5
        },
        "actualRatio": {
          "day": 6.1,
          "evening": 7.8,
          "night": 10.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 56,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 56,
          "occupancy": 0.487,
          "occupiedBeds": 27.3,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": -1.8,
            "evening": -1.4,
            "night": -0.7,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 56,
          "occupancy": 0.487,
          "occupiedBeds": 27.3,
          "required": {
            "day": 2.7,
            "evening": 2.1,
            "night": 1.8,
            "total": 6.6
          },
          "signedGap": {
            "day": -1.8,
            "evening": -1.4,
            "night": -0.7,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 56,
          "occupancy": 1,
          "occupiedBeds": 56,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.7,
            "total": 13.6
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.8,
            "night": 1.2,
            "total": 3.1
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.8,
            "night": 1.2,
            "total": 3.1
          }
        }
      }
    },
    {
      "code": "1503290025",
      "name": "茂盛醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 12,
        "need": 14,
        "gap": -2,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 36,
        "occupancy": 0.7759999999999999,
        "current": {
          "day": 3.2,
          "evening": 2.2,
          "night": 2,
          "total": 7.4
        },
        "actualRatio": {
          "day": 8.7,
          "evening": 12.7,
          "night": 14
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 36,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 36,
          "occupancy": 0.776,
          "occupiedBeds": 27.9,
          "required": {
            "day": 2.8,
            "evening": 2.1,
            "night": 1.9,
            "total": 6.8
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.1,
            "night": -0.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 36,
          "occupancy": 0.776,
          "occupiedBeds": 27.9,
          "required": {
            "day": 2.8,
            "evening": 2.1,
            "night": 1.9,
            "total": 6.8
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.1,
            "night": -0.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 36,
          "occupancy": 1,
          "occupiedBeds": 36,
          "required": {
            "day": 3.6,
            "evening": 2.8,
            "night": 2.4,
            "total": 8.8
          },
          "signedGap": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.4,
            "total": 1.4
          },
          "shortage": {
            "day": 0.4,
            "evening": 0.6,
            "night": 0.4,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1543020105",
      "name": "茂隆骨科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 19,
        "need": 0,
        "gap": 19,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 66,
        "occupancy": 0.36,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 2,
          "total": 9
        },
        "actualRatio": {
          "day": 5.9,
          "evening": 7.9,
          "night": 11.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": -17,
      "scenarios": {
        "low": {
          "bedBase": 66,
          "occupancy": 0.36,
          "occupiedBeds": 23.8,
          "required": {
            "day": 2.4,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.8
          },
          "signedGap": {
            "day": -1.6,
            "evening": -1.2,
            "night": -0.4,
            "total": -3.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.36,
          "occupiedBeds": 17.6,
          "required": {
            "day": 1.8,
            "evening": 1.4,
            "night": 1.2,
            "total": 4.3
          },
          "signedGap": {
            "day": -2.2,
            "evening": -1.6,
            "night": -0.8,
            "total": -4.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 0.9,
            "evening": 0.8,
            "night": 1.3,
            "total": 2.9
          },
          "shortage": {
            "day": 0.9,
            "evening": 0.8,
            "night": 1.3,
            "total": 2.9
          }
        }
      }
    },
    {
      "code": "1532021365",
      "name": "華揚醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 13,
        "need": 13,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.53,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 8.7,
          "evening": 13,
          "night": 13
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.53,
          "occupiedBeds": 26,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.53,
          "occupiedBeds": 26,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "signedGap": {
            "day": -0.4,
            "evening": 0,
            "night": -0.3,
            "total": -0.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 1.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 1.9,
            "evening": 1.8,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1539050015",
      "name": "蔡醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.1,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 2,
          "evening": 2,
          "night": 2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.1,
          "occupiedBeds": 2,
          "required": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.5
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.1,
          "occupiedBeds": 2,
          "required": {
            "day": 0.2,
            "evening": 0.2,
            "night": 0.1,
            "total": 0.5
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1531041363",
      "name": "蕙生醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 15,
        "need": 15,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.07,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 0.5,
          "evening": 0.5,
          "night": 0.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.07,
          "occupiedBeds": 1.4,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.9,
            "night": -2.9,
            "total": -8.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.07,
          "occupiedBeds": 1.4,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.9,
            "night": -2.9,
            "total": -8.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -1,
            "evening": -1.5,
            "night": -1.7,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1531010108",
      "name": "蕭中正醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.96,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 6.4,
          "evening": 9.6,
          "night": 9.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.96,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.96,
          "occupiedBeds": 19.2,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.7
          },
          "signedGap": {
            "day": -1.1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -1,
            "evening": -0.5,
            "night": -0.7,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1539061063",
      "name": "諸元內科醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.507,
        "current": {
          "day": 2.5,
          "evening": 1.5,
          "night": 1,
          "total": 5
        },
        "actualRatio": {
          "day": 4.1,
          "evening": 6.8,
          "night": 10.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.507,
          "occupiedBeds": 10.1,
          "required": {
            "day": 1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.5
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.7,
            "night": -0.3,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.507,
          "occupiedBeds": 10.1,
          "required": {
            "day": 1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.5
          },
          "signedGap": {
            "day": -1.5,
            "evening": -0.7,
            "night": -0.3,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -0.5,
            "evening": 0,
            "night": 0.3,
            "total": -0.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.3,
            "total": 0.4
          }
        }
      }
    },
    {
      "code": "1502051337",
      "name": "謝外科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.131,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 2.6,
          "evening": 2.6,
          "night": 2.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.131,
          "occupiedBeds": 2.6,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.8,
            "night": -0.8,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.131,
          "occupiedBeds": 2.6,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.8,
            "night": -0.8,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1536010046",
      "name": "豐安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 1
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1531051163",
      "name": "豐榮醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 28,
        "need": 28,
        "gap": 0,
        "vacancies": 13
      },
      "acute": {
        "reportedBeds": 94,
        "occupancy": 0.894,
        "current": {
          "day": 10,
          "evening": 8,
          "night": 10,
          "total": 28
        },
        "actualRatio": {
          "day": 8.4,
          "evening": 10.5,
          "night": 8.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 94,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 94,
          "occupancy": 0.894,
          "occupiedBeds": 84,
          "required": {
            "day": 8.4,
            "evening": 6.5,
            "night": 5.6,
            "total": 20.5
          },
          "signedGap": {
            "day": -1.6,
            "evening": -1.5,
            "night": -4.4,
            "total": -7.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 94,
          "occupancy": 0.894,
          "occupiedBeds": 84,
          "required": {
            "day": 8.4,
            "evening": 6.5,
            "night": 5.6,
            "total": 20.5
          },
          "signedGap": {
            "day": -1.6,
            "evening": -1.5,
            "night": -4.4,
            "total": -7.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 94,
          "occupancy": 1,
          "occupiedBeds": 94,
          "required": {
            "day": 9.4,
            "evening": 7.2,
            "night": 6.3,
            "total": 22.9
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.8,
            "night": -3.7,
            "total": -5.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1535031041",
      "name": "通霄光田醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.297,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 8.9,
          "night": 8.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.297,
          "occupiedBeds": 8.9,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.3,
            "night": -0.4,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.297,
          "occupiedBeds": 8.9,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -0.1,
            "evening": -0.3,
            "night": -0.4,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          },
          "shortage": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          }
        }
      }
    },
    {
      "code": "1537061065",
      "name": "道安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 0,
        "need": 7,
        "gap": -7,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 26,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 26,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 26,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 26,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 26,
          "occupancy": 1,
          "occupiedBeds": 26,
          "required": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "signedGap": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          },
          "shortage": {
            "day": 2.6,
            "evening": 2,
            "night": 1.7,
            "total": 6.3
          }
        }
      }
    },
    {
      "code": "1536200022",
      "name": "達明眼科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1535051178",
      "name": "重光醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 26,
        "need": 26,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 80,
        "occupancy": 0.387,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 2,
          "total": 9
        },
        "actualRatio": {
          "day": 7.7,
          "evening": 10.3,
          "night": 15.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 80,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 80,
          "occupancy": 0.387,
          "occupiedBeds": 31,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.5
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.6,
            "night": 0.1,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 80,
          "occupancy": 0.387,
          "occupiedBeds": 31,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.5
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.6,
            "night": 0.1,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 80,
          "occupancy": 1,
          "occupiedBeds": 80,
          "required": {
            "day": 8,
            "evening": 6.2,
            "night": 5.3,
            "total": 19.5
          },
          "signedGap": {
            "day": 4,
            "evening": 3.2,
            "night": 3.3,
            "total": 10.5
          },
          "shortage": {
            "day": 4,
            "evening": 3.2,
            "night": 3.3,
            "total": 10.5
          }
        }
      }
    },
    {
      "code": "1542030018",
      "name": "重安醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 5,
        "need": 0,
        "gap": 5,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.037000000000000005,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 0.4,
          "evening": 0.7,
          "night": 0.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.037,
          "occupiedBeds": 0.7,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -1.9,
            "evening": -0.9,
            "night": -1,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.037,
          "occupiedBeds": 0.7,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -1.9,
            "evening": -0.9,
            "night": -1,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0,
            "evening": 0.5,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1507310019",
      "name": "金安心醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.537,
        "current": {
          "day": 1.5,
          "evening": 1.5,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 7.2,
          "night": 10.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.537,
          "occupiedBeds": 10.7,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.6
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.7,
            "night": -0.3,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.537,
          "occupiedBeds": 10.7,
          "required": {
            "day": 1.1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.6
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.7,
            "night": -0.3,
            "total": -1.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          },
          "shortage": {
            "day": 0.5,
            "evening": 0,
            "night": 0.3,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1503190020",
      "name": "長安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 33,
        "need": 35,
        "gap": -2,
        "vacancies": 11
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.6809999999999999,
        "current": {
          "day": 9.4,
          "evening": 5.7,
          "night": 4.6,
          "total": 19.7
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 11.8,
          "night": 14.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 99,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.681,
          "occupiedBeds": 67.4,
          "required": {
            "day": 6.7,
            "evening": 5.2,
            "night": 4.5,
            "total": 16.4
          },
          "signedGap": {
            "day": -2.7,
            "evening": -0.5,
            "night": -0.1,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 99,
          "occupancy": 0.681,
          "occupiedBeds": 67.4,
          "required": {
            "day": 6.7,
            "evening": 5.2,
            "night": 4.5,
            "total": 16.4
          },
          "signedGap": {
            "day": -2.7,
            "evening": -0.5,
            "night": -0.1,
            "total": -3.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 99,
          "occupancy": 1,
          "occupiedBeds": 99,
          "required": {
            "day": 9.9,
            "evening": 7.6,
            "night": 6.6,
            "total": 24.1
          },
          "signedGap": {
            "day": 0.5,
            "evening": 1.9,
            "night": 2,
            "total": 4.4
          },
          "shortage": {
            "day": 0.5,
            "evening": 1.9,
            "night": 2,
            "total": 4.4
          }
        }
      }
    },
    {
      "code": "1532021374",
      "name": "長慎醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1502041108",
      "name": "長春醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 22,
        "occupancy": 0.59,
        "current": {
          "day": 2,
          "evening": 1,
          "night": 1,
          "total": 4
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 13,
          "night": 13
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 22,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 22,
          "occupancy": 0.59,
          "occupiedBeds": 13,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": 0,
            "night": -0.1,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 22,
          "occupancy": 0.59,
          "occupiedBeds": 13,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.2
          },
          "signedGap": {
            "day": -0.7,
            "evening": 0,
            "night": -0.1,
            "total": -0.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 22,
          "occupancy": 1,
          "occupiedBeds": 22,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.5,
            "total": 5.4
          },
          "signedGap": {
            "day": 0.2,
            "evening": 0.7,
            "night": 0.5,
            "total": 1.4
          },
          "shortage": {
            "day": 0.2,
            "evening": 0.7,
            "night": 0.5,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1521041137",
      "name": "開元寺慈愛醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 1,
        "need": 6,
        "gap": -5,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.247,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 2.5,
          "evening": 2.5,
          "night": 2.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.247,
          "occupiedBeds": 4.9,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -1.7,
            "total": -4.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.247,
          "occupiedBeds": 4.9,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.2
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -1.7,
            "total": -4.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1505350015",
      "name": "陳澤彥婦產科醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 12,
        "need": 9,
        "gap": 3,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.5760000000000001,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 3,
          "total": 10
        },
        "actualRatio": {
          "day": 2.9,
          "evening": 3.8,
          "night": 3.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.576,
          "occupiedBeds": 11.5,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -2.8,
            "evening": -2.1,
            "night": -2.2,
            "total": -7.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.576,
          "occupiedBeds": 11.5,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.8
          },
          "signedGap": {
            "day": -2.8,
            "evening": -2.1,
            "night": -2.2,
            "total": -7.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -2,
            "evening": -1.5,
            "night": -1.7,
            "total": -5.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1522011115",
      "name": "陽明醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 29,
        "need": 30,
        "gap": -1,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 235,
        "occupancy": 0.27,
        "current": {
          "day": 8,
          "evening": 6,
          "night": 4,
          "total": 18
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 10.6,
          "night": 15.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 235,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 235,
          "occupancy": 0.27,
          "occupiedBeds": 63.5,
          "required": {
            "day": 6.3,
            "evening": 4.9,
            "night": 4.2,
            "total": 15.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.1,
            "night": 0.2,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 235,
          "occupancy": 0.27,
          "occupiedBeds": 63.5,
          "required": {
            "day": 6.3,
            "evening": 4.9,
            "night": 4.2,
            "total": 15.5
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.1,
            "night": 0.2,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.2,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 235,
          "occupancy": 1,
          "occupiedBeds": 235,
          "required": {
            "day": 23.5,
            "evening": 18.1,
            "night": 15.7,
            "total": 57.2
          },
          "signedGap": {
            "day": 15.5,
            "evening": 12.1,
            "night": 11.7,
            "total": 39.2
          },
          "shortage": {
            "day": 15.5,
            "evening": 12.1,
            "night": 11.7,
            "total": 39.2
          }
        }
      }
    },
    {
      "code": "1532101091",
      "name": "陽明醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 17,
        "need": 18,
        "gap": -1,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 70,
        "occupancy": 0.9420000000000001,
        "current": {
          "day": 6,
          "evening": 6,
          "night": 5,
          "total": 17
        },
        "actualRatio": {
          "day": 11,
          "evening": 11,
          "night": 13.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 70,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 70,
          "occupancy": 0.942,
          "occupiedBeds": 65.9,
          "required": {
            "day": 6.6,
            "evening": 5.1,
            "night": 4.4,
            "total": 16.1
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.9,
            "night": -0.6,
            "total": -0.9
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "mid": {
          "bedBase": 70,
          "occupancy": 0.942,
          "occupiedBeds": 65.9,
          "required": {
            "day": 6.6,
            "evening": 5.1,
            "night": 4.4,
            "total": 16.1
          },
          "signedGap": {
            "day": 0.6,
            "evening": -0.9,
            "night": -0.6,
            "total": -0.9
          },
          "shortage": {
            "day": 0.6,
            "evening": 0,
            "night": 0,
            "total": 0.6
          }
        },
        "high": {
          "bedBase": 70,
          "occupancy": 1,
          "occupiedBeds": 70,
          "required": {
            "day": 7,
            "evening": 5.4,
            "night": 4.7,
            "total": 17.1
          },
          "signedGap": {
            "day": 1,
            "evening": -0.6,
            "night": -0.3,
            "total": 0.1
          },
          "shortage": {
            "day": 1,
            "evening": 0,
            "night": 0,
            "total": 1
          }
        }
      }
    },
    {
      "code": "1542051151",
      "name": "霖園醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 7,
        "need": 7,
        "gap": 0,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.429,
        "current": {
          "day": 1.5,
          "evening": 1.3,
          "night": 1.3,
          "total": 4.1
        },
        "actualRatio": {
          "day": 8.6,
          "evening": 9.9,
          "night": 9.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.429,
          "occupiedBeds": 12.9,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.3,
            "night": -0.4,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.429,
          "occupiedBeds": 12.9,
          "required": {
            "day": 1.3,
            "evening": 1,
            "night": 0.9,
            "total": 3.1
          },
          "signedGap": {
            "day": -0.2,
            "evening": -0.3,
            "night": -0.4,
            "total": -1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1.5,
            "evening": 1,
            "night": 0.7,
            "total": 3.2
          },
          "shortage": {
            "day": 1.5,
            "evening": 1,
            "night": 0.7,
            "total": 3.2
          }
        }
      }
    },
    {
      "code": "1503200012",
      "name": "霧峰澄清醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 37,
        "need": 34,
        "gap": 3,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 87,
        "occupancy": 0.618,
        "current": {
          "day": 8.7,
          "evening": 6.5,
          "night": 5,
          "total": 20.2
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 8.3,
          "night": 10.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 87,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 87,
          "occupancy": 0.618,
          "occupiedBeds": 53.8,
          "required": {
            "day": 5.4,
            "evening": 4.1,
            "night": 3.6,
            "total": 13.1
          },
          "signedGap": {
            "day": -3.3,
            "evening": -2.4,
            "night": -1.4,
            "total": -7.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 87,
          "occupancy": 0.618,
          "occupiedBeds": 53.8,
          "required": {
            "day": 5.4,
            "evening": 4.1,
            "night": 3.6,
            "total": 13.1
          },
          "signedGap": {
            "day": -3.3,
            "evening": -2.4,
            "night": -1.4,
            "total": -7.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 87,
          "occupancy": 1,
          "occupiedBeds": 87,
          "required": {
            "day": 8.7,
            "evening": 6.7,
            "night": 5.8,
            "total": 21.2
          },
          "signedGap": {
            "day": 0,
            "evening": 0.2,
            "night": 0.8,
            "total": 1
          },
          "shortage": {
            "day": 0,
            "evening": 0.2,
            "night": 0.8,
            "total": 1
          }
        }
      }
    },
    {
      "code": "1503030010",
      "name": "順安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 12,
        "need": 12,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.539,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 8.1,
          "evening": 8.1,
          "night": 8.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.539,
          "occupiedBeds": 16.2,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.539,
          "occupiedBeds": 16.2,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1.1,
            "total": 3.9
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.8,
            "night": -0.9,
            "total": -2.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1,
            "evening": 0.3,
            "night": 0,
            "total": 1.3
          },
          "shortage": {
            "day": 1,
            "evening": 0.3,
            "night": 0,
            "total": 1.3
          }
        }
      }
    },
    {
      "code": "1537010237",
      "name": "順安醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1502040076",
      "name": "顏威裕醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.032,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0.6,
          "evening": 0.6,
          "night": 0.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.032,
          "occupiedBeds": 0.6,
          "required": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.032,
          "occupiedBeds": 0.6,
          "required": {
            "day": 0.1,
            "evening": 0,
            "night": 0,
            "total": 0.2
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1,
            "night": -1,
            "total": -2.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1502031095",
      "name": "馨蕙馨醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 30,
        "occupancy": 0.086,
        "current": {
          "day": 1.5,
          "evening": 1.5,
          "night": 1.5,
          "total": 4.5
        },
        "actualRatio": {
          "day": 1.7,
          "evening": 1.7,
          "night": 1.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 30,
          "occupancy": 0.086,
          "occupiedBeds": 2.6,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.3,
            "night": -1.3,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.086,
          "occupiedBeds": 2.6,
          "required": {
            "day": 0.3,
            "evening": 0.2,
            "night": 0.2,
            "total": 0.6
          },
          "signedGap": {
            "day": -1.2,
            "evening": -1.3,
            "night": -1.3,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 1.5,
            "evening": 0.8,
            "night": 0.5,
            "total": 2.8
          },
          "shortage": {
            "day": 1.5,
            "evening": 0.8,
            "night": 0.5,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "1542150042",
      "name": "高新醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 2,
        "need": 0,
        "gap": 2,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.605,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 12.1,
          "evening": 12.1,
          "night": 12.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.605,
          "occupiedBeds": 12.1,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.1
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.605,
          "occupiedBeds": 12.1,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.1,
            "night": -0.2,
            "total": -0.1
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1532091081",
      "name": "龍潭敏盛醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 7,
        "need": 9,
        "gap": -2,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 23,
        "occupancy": 0.311,
        "current": {
          "day": 1.5,
          "evening": 1,
          "night": 1,
          "total": 3.5
        },
        "actualRatio": {
          "day": 4.8,
          "evening": 7.2,
          "night": 7.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 23,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 23,
          "occupancy": 0.311,
          "occupiedBeds": 7.2,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 23,
          "occupancy": 0.311,
          "occupiedBeds": 7.2,
          "required": {
            "day": 0.7,
            "evening": 0.6,
            "night": 0.5,
            "total": 1.7
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.4,
            "night": -0.5,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 23,
          "occupancy": 1,
          "occupiedBeds": 23,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": 0.8,
            "evening": 0.8,
            "night": 0.5,
            "total": 2.1
          },
          "shortage": {
            "day": 0.8,
            "evening": 0.8,
            "night": 0.5,
            "total": 2.1
          }
        }
      }
    },
    {
      "code": "0932020016",
      "name": "宏其醫療社團法人宏其婦幼醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 19,
        "need": 10,
        "gap": 9,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 41,
        "occupancy": 0.76,
        "current": {
          "day": 4,
          "evening": 3.8,
          "night": 2,
          "total": 9.8
        },
        "actualRatio": {
          "day": 7.8,
          "evening": 8.2,
          "night": 15.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 41,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 41,
          "occupancy": 0.76,
          "occupiedBeds": 31.2,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.4,
            "night": 0.1,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 41,
          "occupancy": 0.76,
          "occupiedBeds": 31.2,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -0.9,
            "evening": -1.4,
            "night": 0.1,
            "total": -2.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "high": {
          "bedBase": 41,
          "occupancy": 1,
          "occupiedBeds": 41,
          "required": {
            "day": 4.1,
            "evening": 3.2,
            "night": 2.7,
            "total": 10
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.6,
            "night": 0.7,
            "total": 0.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0.7,
            "total": 0.8
          }
        }
      }
    },
    {
      "code": "1521051160",
      "name": "永和醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.205,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 4.1,
          "evening": 4.1,
          "night": 4.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.205,
          "occupiedBeds": 4.1,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.205,
          "occupiedBeds": 4.1,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -0.6,
            "evening": -0.7,
            "night": -0.7,
            "total": -2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1502111089",
      "name": "戴銘浚醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.46,
        "current": {
          "day": 4,
          "evening": 3,
          "night": 2,
          "total": 9
        },
        "actualRatio": {
          "day": 2.3,
          "evening": 3.1,
          "night": 4.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.46,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -3.1,
            "evening": -2.3,
            "night": -1.4,
            "total": -6.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.46,
          "occupiedBeds": 9.2,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -3.1,
            "evening": -2.3,
            "night": -1.4,
            "total": -6.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -2,
            "evening": -1.5,
            "night": -0.7,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1502031102",
      "name": "柏仁醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.44,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 7,
          "evening": 10.6,
          "night": 10.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.44,
          "occupiedBeds": 21.1,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.4,
            "night": -0.6,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.44,
          "occupiedBeds": 21.1,
          "required": {
            "day": 2.1,
            "evening": 1.6,
            "night": 1.4,
            "total": 5.1
          },
          "signedGap": {
            "day": -0.9,
            "evening": -0.4,
            "night": -0.6,
            "total": -1.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": 1.8,
            "evening": 1.7,
            "night": 1.2,
            "total": 4.7
          },
          "shortage": {
            "day": 1.8,
            "evening": 1.7,
            "night": 1.2,
            "total": 4.7
          }
        }
      }
    },
    {
      "code": "0138030010",
      "name": "衛生福利部草屯療養院",
      "level": "區域醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 7
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0102080026",
      "name": "高雄市立凱旋醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 158,
        "need": 168,
        "gap": -10,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0645030011",
      "name": "臺北榮民總醫院玉里分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 56,
        "need": 56,
        "gap": 0,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 111,
        "occupancy": 0.792,
        "current": {
          "day": 12.9,
          "evening": 9.2,
          "night": 8.7,
          "total": 30.8
        },
        "actualRatio": {
          "day": 6.8,
          "evening": 9.6,
          "night": 10.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 79,
      "openBedDelta": -32,
      "scenarios": {
        "low": {
          "bedBase": 111,
          "occupancy": 0.792,
          "occupiedBeds": 87.9,
          "required": {
            "day": 8.8,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.4
          },
          "signedGap": {
            "day": -4.1,
            "evening": -2.4,
            "night": -2.8,
            "total": -9.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 79,
          "occupancy": 0.792,
          "occupiedBeds": 62.6,
          "required": {
            "day": 6.3,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.2
          },
          "signedGap": {
            "day": -6.6,
            "evening": -4.4,
            "night": -4.5,
            "total": -15.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 79,
          "occupancy": 1,
          "occupiedBeds": 79,
          "required": {
            "day": 7.9,
            "evening": 6.1,
            "night": 5.3,
            "total": 19.2
          },
          "signedGap": {
            "day": -5,
            "evening": -3.1,
            "night": -3.4,
            "total": -11.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1536040535",
      "name": "陽光精神科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 18,
        "need": 18,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0939010018",
      "name": "信安醫療社團法人信安醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "雲林縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 1
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0931100015",
      "name": "北新醫療社團法人北新醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0933010014",
      "name": "培靈醫療社團法人關西醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 17,
        "need": 0,
        "gap": 17,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0935010021",
      "name": "大千醫療社團法人南勢醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "苗栗縣",
      "survey": {
        "current": 19,
        "need": 22,
        "gap": -3,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0943060017",
      "name": "屏安醫療社團法人屏安醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0931050010",
      "name": "怡濟慈園醫療社團法人宏濟神經精神科醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 18,
        "need": 12,
        "gap": 6,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0934060027",
      "name": "海天醫療社團法人海天醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0907120012",
      "name": "燕巢靜和醫療社團法人燕巢靜和醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0911010010",
      "name": "維德醫療社團法人基隆維德醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 10,
        "need": 0,
        "gap": 10,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0917050027",
      "name": "維新醫療社團法人台中維新醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1143130019",
      "name": "佑青醫療財團法人佑青醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 17,
        "need": 12,
        "gap": 5,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1536040553",
      "name": "清濱醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1145060029",
      "name": "臺灣基督教門諾會醫療財團法人門諾醫院壽豐分院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 13,
        "need": 4,
        "gap": 9,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1143150011",
      "name": "迦樂醫療財團法人迦樂醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 22,
        "need": 35,
        "gap": -13,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1536120010",
      "name": "清海醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 12,
        "need": 15,
        "gap": -3,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1417030017",
      "name": "財團法人台灣省私立台中仁愛之家附設靜和醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1431060017",
      "name": "財團法人台灣省私立台北仁濟院附設新莊仁濟醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1441060010",
      "name": "財團法人台灣省私立台南仁愛之家附設仁馨醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1511060022",
      "name": "南光神經精神科醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1542020129",
      "name": "樂安醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 10,
        "need": 2,
        "gap": 8,
        "vacancies": 1
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1501010029",
      "name": "培靈醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 12,
        "need": 10,
        "gap": 2,
        "vacancies": 1
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1503250012",
      "name": "宏恩醫院龍安分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 15,
        "need": 12,
        "gap": 3,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1531050086",
      "name": "宏慈療養院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 1
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1532060031",
      "name": "居善醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1537051265",
      "name": "敦仁醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 21,
        "need": 21,
        "gap": 0,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0145030020",
      "name": "衛生福利部玉里醫院",
      "level": "地區醫院",
      "region": "東區",
      "city": "花蓮縣",
      "survey": {
        "current": 16,
        "need": 15,
        "gap": 1,
        "vacancies": 6
      },
      "acute": {
        "reportedBeds": 48,
        "occupancy": 0.975,
        "current": {
          "day": 7,
          "evening": 2,
          "night": 2,
          "total": 11
        },
        "actualRatio": {
          "day": 6.7,
          "evening": 23.4,
          "night": 23.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 48,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 48,
          "occupancy": 0.975,
          "occupiedBeds": 46.8,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": -2.3,
            "evening": 1.6,
            "night": 1.1,
            "total": 0.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.6,
            "night": 1.1,
            "total": 2.7
          }
        },
        "mid": {
          "bedBase": 48,
          "occupancy": 0.975,
          "occupiedBeds": 46.8,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": -2.3,
            "evening": 1.6,
            "night": 1.1,
            "total": 0.4
          },
          "shortage": {
            "day": 0,
            "evening": 1.6,
            "night": 1.1,
            "total": 2.7
          }
        },
        "high": {
          "bedBase": 48,
          "occupancy": 1,
          "occupiedBeds": 48,
          "required": {
            "day": 4.8,
            "evening": 3.7,
            "night": 3.2,
            "total": 11.7
          },
          "signedGap": {
            "day": -2.2,
            "evening": 1.7,
            "night": 1.2,
            "total": 0.7
          },
          "shortage": {
            "day": 0,
            "evening": 1.7,
            "night": 1.2,
            "total": 2.9
          }
        }
      }
    },
    {
      "code": "0132010023",
      "name": "衛生福利部桃園療養院",
      "level": "區域醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1511060040",
      "name": "暘基醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "基隆市",
      "survey": {
        "current": 9,
        "need": 10,
        "gap": -1,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0131230012",
      "name": "衛生福利部八里療養院",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 19
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0141270028",
      "name": "衛生福利部嘉南療養院",
      "level": "區域醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 64,
        "need": 69,
        "gap": -5,
        "vacancies": 11
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1442060014",
      "name": "財團法人台灣省私立高雄仁愛之家附設慈惠醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 7
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1537150512",
      "name": "員林郭醫院大村分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 19,
        "occupancy": 0.061,
        "current": {
          "day": 0.8,
          "evening": 0.6,
          "night": 0.5,
          "total": 1.9
        },
        "actualRatio": {
          "day": 1.4,
          "evening": 1.9,
          "night": 2.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 19,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 19,
          "occupancy": 0.061,
          "occupiedBeds": 1.2,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.5,
            "night": -0.4,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 19,
          "occupancy": 0.061,
          "occupiedBeds": 1.2,
          "required": {
            "day": 0.1,
            "evening": 0.1,
            "night": 0.1,
            "total": 0.3
          },
          "signedGap": {
            "day": -0.7,
            "evening": -0.5,
            "night": -0.4,
            "total": -1.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 19,
          "occupancy": 1,
          "occupiedBeds": 19,
          "required": {
            "day": 1.9,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.6
          },
          "signedGap": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.7
          },
          "shortage": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.7
          }
        }
      }
    },
    {
      "code": "1531060046",
      "name": "大順醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1522021237",
      "name": "世華醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0701160518",
      "name": "臺北市立關渡醫院─委託臺北榮民總醫院經營",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 16,
        "need": 16,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 45,
        "occupancy": 0.6609999999999999,
        "current": {
          "day": 3.8,
          "evening": 2.8,
          "night": 2.1,
          "total": 8.7
        },
        "actualRatio": {
          "day": 7.8,
          "evening": 10.6,
          "night": 14.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 45,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 45,
          "occupancy": 0.661,
          "occupiedBeds": 29.7,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.5,
            "night": -0.1,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 45,
          "occupancy": 0.661,
          "occupiedBeds": 29.7,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.2
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.5,
            "night": -0.1,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 45,
          "occupancy": 1,
          "occupiedBeds": 45,
          "required": {
            "day": 4.5,
            "evening": 3.5,
            "night": 3,
            "total": 11
          },
          "signedGap": {
            "day": 0.7,
            "evening": 0.7,
            "night": 0.9,
            "total": 2.3
          },
          "shortage": {
            "day": 0.7,
            "evening": 0.7,
            "night": 0.9,
            "total": 2.3
          }
        }
      }
    },
    {
      "code": "0912040012",
      "name": "平和醫療社團法人和平醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 4
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0941310023",
      "name": "晉生醫療社團法人晉生慢性醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1401190039",
      "name": "同仁院醫療財團法人萬華醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1134070019",
      "name": "宜蘭員山醫療財團法人宜蘭員山醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 8,
        "need": 8,
        "gap": 0,
        "vacancies": 8
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0433050018",
      "name": "國立臺灣大學醫學院附設醫院新竹臺大分院生醫醫院",
      "level": "區域醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 162,
        "need": 154,
        "gap": 8,
        "vacancies": 104
      },
      "acute": {
        "reportedBeds": 400,
        "occupancy": 0.5920000000000001,
        "current": {
          "day": 35.6,
          "evening": 25.2,
          "night": 20.2,
          "total": 81
        },
        "actualRatio": {
          "day": 6.7,
          "evening": 9.4,
          "night": 11.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 259,
      "openBedDelta": -141,
      "scenarios": {
        "low": {
          "bedBase": 400,
          "occupancy": 0.592,
          "occupiedBeds": 236.8,
          "required": {
            "day": 33.8,
            "evening": 21.5,
            "night": 18.2,
            "total": 73.6
          },
          "signedGap": {
            "day": -1.8,
            "evening": -3.7,
            "night": -2,
            "total": -7.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 259,
          "occupancy": 0.592,
          "occupiedBeds": 153.3,
          "required": {
            "day": 21.9,
            "evening": 13.9,
            "night": 11.8,
            "total": 47.6
          },
          "signedGap": {
            "day": -13.7,
            "evening": -11.3,
            "night": -8.4,
            "total": -33.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 259,
          "occupancy": 1,
          "occupiedBeds": 259,
          "required": {
            "day": 37,
            "evening": 23.5,
            "night": 19.9,
            "total": 80.5
          },
          "signedGap": {
            "day": 1.4,
            "evening": -1.7,
            "night": -0.3,
            "total": -0.5
          },
          "shortage": {
            "day": 1.4,
            "evening": 0,
            "night": 0,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "0905290020",
      "name": "吉安醫療社團法人吉安醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "臺南市",
      "survey": {
        "current": 5,
        "need": 5,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 4,
          "evening": 2,
          "night": 2,
          "total": 8
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -2,
            "night": -2,
            "total": -8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -2,
            "night": -2,
            "total": -8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -2,
            "evening": -0.5,
            "night": -0.7,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0922020031",
      "name": "祥太醫療社團法人祥太醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0943010044",
      "name": "復興醫療社團法人復興醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 0,
          "evening": 0,
          "night": 0,
          "total": 0
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "shortage": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          }
        }
      }
    },
    {
      "code": "1103280012",
      "name": "醫療財團法人正德癌症醫療基金會佛教正德醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 22,
        "need": 22,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 60,
        "occupancy": 0.518,
        "current": {
          "day": 6,
          "evening": 5,
          "night": 4,
          "total": 15
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 6.2,
          "night": 7.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 60,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 60,
          "occupancy": 0.518,
          "occupiedBeds": 31.1,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.6,
            "night": -1.9,
            "total": -7.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 60,
          "occupancy": 0.518,
          "occupiedBeds": 31.1,
          "required": {
            "day": 3.1,
            "evening": 2.4,
            "night": 2.1,
            "total": 7.6
          },
          "signedGap": {
            "day": -2.9,
            "evening": -2.6,
            "night": -1.9,
            "total": -7.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 60,
          "occupancy": 1,
          "occupiedBeds": 60,
          "required": {
            "day": 6,
            "evening": 4.6,
            "night": 4,
            "total": 14.6
          },
          "signedGap": {
            "day": 0,
            "evening": -0.4,
            "night": 0,
            "total": -0.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1131130018",
      "name": "新北市立土城醫院(委託長庚醫療財團法人興建經營)",
      "level": "區域醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 131,
        "need": 178,
        "gap": -47,
        "vacancies": 204
      },
      "acute": {
        "reportedBeds": 499,
        "occupancy": 0.616,
        "current": {
          "day": 43.7,
          "evening": 28.2,
          "night": 23.5,
          "total": 95.4
        },
        "actualRatio": {
          "day": 7,
          "evening": 10.9,
          "night": 13.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 499,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 499,
          "occupancy": 0.616,
          "occupiedBeds": 307.4,
          "required": {
            "day": 43.9,
            "evening": 27.9,
            "night": 23.6,
            "total": 95.5
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.3,
            "night": 0.1,
            "total": 0.1
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0.1,
            "total": 0.4
          }
        },
        "mid": {
          "bedBase": 499,
          "occupancy": 0.616,
          "occupiedBeds": 307.4,
          "required": {
            "day": 43.9,
            "evening": 27.9,
            "night": 23.6,
            "total": 95.5
          },
          "signedGap": {
            "day": 0.2,
            "evening": -0.3,
            "night": 0.1,
            "total": 0.1
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0.1,
            "total": 0.4
          }
        },
        "high": {
          "bedBase": 499,
          "occupancy": 1,
          "occupiedBeds": 499,
          "required": {
            "day": 71.3,
            "evening": 45.4,
            "night": 38.4,
            "total": 155
          },
          "signedGap": {
            "day": 27.6,
            "evening": 17.2,
            "night": 14.9,
            "total": 59.6
          },
          "shortage": {
            "day": 27.6,
            "evening": 17.2,
            "night": 14.9,
            "total": 59.6
          }
        }
      }
    },
    {
      "code": "1137010051",
      "name": "彰化基督教醫療財團法人漢銘基督教醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 42,
        "need": 44,
        "gap": -2,
        "vacancies": 20
      },
      "acute": {
        "reportedBeds": 130,
        "occupancy": 0.8079999999999999,
        "current": {
          "day": 14,
          "evening": 8.9,
          "night": 6.9,
          "total": 29.8
        },
        "actualRatio": {
          "day": 7.5,
          "evening": 11.8,
          "night": 15.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 120,
      "openBedDelta": -10,
      "scenarios": {
        "low": {
          "bedBase": 130,
          "occupancy": 0.808,
          "occupiedBeds": 105,
          "required": {
            "day": 10.5,
            "evening": 8.1,
            "night": 7,
            "total": 25.6
          },
          "signedGap": {
            "day": -3.5,
            "evening": -0.8,
            "night": 0.1,
            "total": -4.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.1,
            "total": 0.1
          }
        },
        "mid": {
          "bedBase": 120,
          "occupancy": 0.808,
          "occupiedBeds": 97,
          "required": {
            "day": 9.7,
            "evening": 7.5,
            "night": 6.5,
            "total": 23.6
          },
          "signedGap": {
            "day": -4.3,
            "evening": -1.4,
            "night": -0.4,
            "total": -6.2
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 120,
          "occupancy": 1,
          "occupiedBeds": 120,
          "required": {
            "day": 12,
            "evening": 9.2,
            "night": 8,
            "total": 29.2
          },
          "signedGap": {
            "day": -2,
            "evening": 0.3,
            "night": 1.1,
            "total": -0.6
          },
          "shortage": {
            "day": 0,
            "evening": 0.3,
            "night": 1.1,
            "total": 1.4
          }
        }
      }
    },
    {
      "code": "1138010019",
      "name": "彰化基督教醫療財團法人南投基督教醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 42,
        "need": 37,
        "gap": 5,
        "vacancies": 16
      },
      "acute": {
        "reportedBeds": 89,
        "occupancy": 0.845,
        "current": {
          "day": 8.8,
          "evening": 6,
          "night": 6,
          "total": 20.8
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 12.5,
          "night": 12.5
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 89,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 89,
          "occupancy": 0.845,
          "occupiedBeds": 75.2,
          "required": {
            "day": 7.5,
            "evening": 5.8,
            "night": 5,
            "total": 18.3
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.2,
            "night": -1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 89,
          "occupancy": 0.845,
          "occupiedBeds": 75.2,
          "required": {
            "day": 7.5,
            "evening": 5.8,
            "night": 5,
            "total": 18.3
          },
          "signedGap": {
            "day": -1.3,
            "evening": -0.2,
            "night": -1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 89,
          "occupancy": 1,
          "occupiedBeds": 89,
          "required": {
            "day": 8.9,
            "evening": 6.8,
            "night": 5.9,
            "total": 21.7
          },
          "signedGap": {
            "day": 0.1,
            "evening": 0.8,
            "night": -0.1,
            "total": 0.9
          },
          "shortage": {
            "day": 0.1,
            "evening": 0.8,
            "night": 0,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1144010016",
      "name": "天主教靈醫會醫療財團法人惠民醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "澎湖縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1507300059",
      "name": "維馨乳房外科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 13,
        "need": 13,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.56,
        "current": {
          "day": 4,
          "evening": 4,
          "night": 4,
          "total": 12
        },
        "actualRatio": {
          "day": 2.8,
          "evening": 2.8,
          "night": 2.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.56,
          "occupiedBeds": 11.2,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -2.9,
            "evening": -3.1,
            "night": -3.3,
            "total": -9.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.56,
          "occupiedBeds": 11.2,
          "required": {
            "day": 1.1,
            "evening": 0.9,
            "night": 0.7,
            "total": 2.7
          },
          "signedGap": {
            "day": -2.9,
            "evening": -3.1,
            "night": -3.3,
            "total": -9.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": -2,
            "evening": -2.5,
            "night": -2.7,
            "total": -7.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1507300068",
      "name": "鈞安婦幼聯合醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.214,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 2.1,
          "evening": 2.1,
          "night": 2.1
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.214,
          "occupiedBeds": 4.3,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -1.6,
            "evening": -1.7,
            "night": -1.7,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.214,
          "occupiedBeds": 4.3,
          "required": {
            "day": 0.4,
            "evening": 0.3,
            "night": 0.3,
            "total": 1
          },
          "signedGap": {
            "day": -1.6,
            "evening": -1.7,
            "night": -1.7,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "0938040012",
      "name": "竹山秀傳醫療社團法人竹山秀傳醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 55,
        "need": 72,
        "gap": -17,
        "vacancies": 20
      },
      "acute": {
        "reportedBeds": 193,
        "occupancy": 0.59,
        "current": {
          "day": 15.5,
          "evening": 10,
          "night": 8.1,
          "total": 33.6
        },
        "actualRatio": {
          "day": 7.3,
          "evening": 11.4,
          "night": 14.1
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 193,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 193,
          "occupancy": 0.59,
          "occupiedBeds": 113.9,
          "required": {
            "day": 11.4,
            "evening": 8.8,
            "night": 7.6,
            "total": 27.7
          },
          "signedGap": {
            "day": -4.1,
            "evening": -1.2,
            "night": -0.5,
            "total": -5.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 193,
          "occupancy": 0.59,
          "occupiedBeds": 113.9,
          "required": {
            "day": 11.4,
            "evening": 8.8,
            "night": 7.6,
            "total": 27.7
          },
          "signedGap": {
            "day": -4.1,
            "evening": -1.2,
            "night": -0.5,
            "total": -5.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 193,
          "occupancy": 1,
          "occupiedBeds": 193,
          "required": {
            "day": 19.3,
            "evening": 14.8,
            "night": 12.9,
            "total": 47
          },
          "signedGap": {
            "day": 3.8,
            "evening": 4.8,
            "night": 4.8,
            "total": 13.4
          },
          "shortage": {
            "day": 3.8,
            "evening": 4.8,
            "night": 4.8,
            "total": 13.4
          }
        }
      }
    },
    {
      "code": "1134050026",
      "name": "天主教靈醫會醫療財團法人礁溪杏和醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "宜蘭縣",
      "survey": {
        "current": 4,
        "need": 4,
        "gap": 0,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.016,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 0.3,
          "evening": 0.3,
          "night": 0.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.016,
          "occupiedBeds": 0.3,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.016,
          "occupiedBeds": 0.3,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0.1
          },
          "signedGap": {
            "day": -1,
            "evening": -1,
            "night": -1,
            "total": -2.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          },
          "shortage": {
            "day": 1,
            "evening": 0.5,
            "night": 0.3,
            "total": 1.9
          }
        }
      }
    },
    {
      "code": "1503010045",
      "name": "惠盛醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 9,
        "need": 15,
        "gap": -6,
        "vacancies": 7
      },
      "acute": {
        "reportedBeds": 36,
        "occupancy": 0.335,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 6,
          "evening": 6,
          "night": 6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 36,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 36,
          "occupancy": 0.335,
          "occupiedBeds": 12.1,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -1.2,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 36,
          "occupancy": 0.335,
          "occupiedBeds": 12.1,
          "required": {
            "day": 1.2,
            "evening": 0.9,
            "night": 0.8,
            "total": 2.9
          },
          "signedGap": {
            "day": -0.8,
            "evening": -1.1,
            "night": -1.2,
            "total": -3.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 36,
          "occupancy": 1,
          "occupiedBeds": 36,
          "required": {
            "day": 3.6,
            "evening": 2.8,
            "night": 2.4,
            "total": 8.8
          },
          "signedGap": {
            "day": 1.6,
            "evening": 0.8,
            "night": 0.4,
            "total": 2.8
          },
          "shortage": {
            "day": 1.6,
            "evening": 0.8,
            "night": 0.4,
            "total": 2.8
          }
        }
      }
    },
    {
      "code": "1503270014",
      "name": "澄清復健醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 65,
        "occupancy": 0.858,
        "current": {
          "day": 5,
          "evening": 4.2,
          "night": 4,
          "total": 13.2
        },
        "actualRatio": {
          "day": 11.2,
          "evening": 13.3,
          "night": 13.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 65,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 65,
          "occupancy": 0.858,
          "occupiedBeds": 55.8,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.7,
            "total": 13.6
          },
          "signedGap": {
            "day": 0.6,
            "evening": 0.1,
            "night": -0.3,
            "total": 0.4
          },
          "shortage": {
            "day": 0.6,
            "evening": 0.1,
            "night": 0,
            "total": 0.7
          }
        },
        "mid": {
          "bedBase": 65,
          "occupancy": 0.858,
          "occupiedBeds": 55.8,
          "required": {
            "day": 5.6,
            "evening": 4.3,
            "night": 3.7,
            "total": 13.6
          },
          "signedGap": {
            "day": 0.6,
            "evening": 0.1,
            "night": -0.3,
            "total": 0.4
          },
          "shortage": {
            "day": 0.6,
            "evening": 0.1,
            "night": 0,
            "total": 0.7
          }
        },
        "high": {
          "bedBase": 65,
          "occupancy": 1,
          "occupiedBeds": 65,
          "required": {
            "day": 6.5,
            "evening": 5,
            "night": 4.3,
            "total": 15.8
          },
          "signedGap": {
            "day": 1.5,
            "evening": 0.8,
            "night": 0.3,
            "total": 2.6
          },
          "shortage": {
            "day": 1.5,
            "evening": 0.8,
            "night": 0.3,
            "total": 2.6
          }
        }
      }
    },
    {
      "code": "1507300077",
      "name": "博田國際醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 15,
        "need": 17,
        "gap": -2,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 49,
        "occupancy": 0.58,
        "current": {
          "day": 4.7,
          "evening": 3.4,
          "night": 2.9,
          "total": 11
        },
        "actualRatio": {
          "day": 6,
          "evening": 8.4,
          "night": 9.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 49,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 49,
          "occupancy": 0.58,
          "occupiedBeds": 28.4,
          "required": {
            "day": 2.8,
            "evening": 2.2,
            "night": 1.9,
            "total": 6.9
          },
          "signedGap": {
            "day": -1.9,
            "evening": -1.2,
            "night": -1,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 49,
          "occupancy": 0.58,
          "occupiedBeds": 28.4,
          "required": {
            "day": 2.8,
            "evening": 2.2,
            "night": 1.9,
            "total": 6.9
          },
          "signedGap": {
            "day": -1.9,
            "evening": -1.2,
            "night": -1,
            "total": -4.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 49,
          "occupancy": 1,
          "occupiedBeds": 49,
          "required": {
            "day": 4.9,
            "evening": 3.8,
            "night": 3.3,
            "total": 11.9
          },
          "signedGap": {
            "day": 0.2,
            "evening": 0.4,
            "night": 0.4,
            "total": 0.9
          },
          "shortage": {
            "day": 0.2,
            "evening": 0.4,
            "night": 0.4,
            "total": 0.9
          }
        }
      }
    },
    {
      "code": "1507310037",
      "name": "高大美杏生醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 9,
        "need": 6,
        "gap": 3,
        "vacancies": 5
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.45299999999999996,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 4.5,
          "evening": 4.5,
          "night": 4.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.453,
          "occupiedBeds": 9.1,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1.3,
            "night": -1.4,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.453,
          "occupiedBeds": 9.1,
          "required": {
            "day": 0.9,
            "evening": 0.7,
            "night": 0.6,
            "total": 2.2
          },
          "signedGap": {
            "day": -1.1,
            "evening": -1.3,
            "night": -1.4,
            "total": -3.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1507330039",
      "name": "忠孝泌尿專科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 6,
        "need": 6,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.23399999999999999,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 2.3,
          "evening": 2.3,
          "night": 2.3
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.234,
          "occupiedBeds": 4.7,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -1.7,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.234,
          "occupiedBeds": 4.7,
          "required": {
            "day": 0.5,
            "evening": 0.4,
            "night": 0.3,
            "total": 1.1
          },
          "signedGap": {
            "day": -1.5,
            "evening": -1.6,
            "night": -1.7,
            "total": -4.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1507340053",
      "name": "重仁骨科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 12,
        "need": 9,
        "gap": 3,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 47,
        "occupancy": 0.14400000000000002,
        "current": {
          "day": 1.1,
          "evening": 1.1,
          "night": 1.1,
          "total": 3.3
        },
        "actualRatio": {
          "day": 6.2,
          "evening": 6.2,
          "night": 6.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 47,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 47,
          "occupancy": 0.144,
          "occupiedBeds": 6.8,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.6
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 47,
          "occupancy": 0.144,
          "occupiedBeds": 6.8,
          "required": {
            "day": 0.7,
            "evening": 0.5,
            "night": 0.5,
            "total": 1.6
          },
          "signedGap": {
            "day": -0.4,
            "evening": -0.6,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 47,
          "occupancy": 1,
          "occupiedBeds": 47,
          "required": {
            "day": 4.7,
            "evening": 3.6,
            "night": 3.1,
            "total": 11.4
          },
          "signedGap": {
            "day": 3.6,
            "evening": 2.5,
            "night": 2,
            "total": 8.1
          },
          "shortage": {
            "day": 3.6,
            "evening": 2.5,
            "night": 2,
            "total": 8.1
          }
        }
      }
    },
    {
      "code": "1531091149",
      "name": "清福醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 6,
        "need": 8,
        "gap": -2,
        "vacancies": 3
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 1,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 10,
          "evening": 10,
          "night": 10
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1537051318",
      "name": "常春醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 27,
        "need": 17,
        "gap": 10,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 79,
        "occupancy": 0.7559999999999999,
        "current": {
          "day": 7,
          "evening": 5,
          "night": 5,
          "total": 17
        },
        "actualRatio": {
          "day": 8.5,
          "evening": 11.9,
          "night": 11.9
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 79,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 79,
          "occupancy": 0.756,
          "occupiedBeds": 59.7,
          "required": {
            "day": 6,
            "evening": 4.6,
            "night": 4,
            "total": 14.5
          },
          "signedGap": {
            "day": -1,
            "evening": -0.4,
            "night": -1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 79,
          "occupancy": 0.756,
          "occupiedBeds": 59.7,
          "required": {
            "day": 6,
            "evening": 4.6,
            "night": 4,
            "total": 14.5
          },
          "signedGap": {
            "day": -1,
            "evening": -0.4,
            "night": -1,
            "total": -2.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 79,
          "occupancy": 1,
          "occupiedBeds": 79,
          "required": {
            "day": 7.9,
            "evening": 6.1,
            "night": 5.3,
            "total": 19.2
          },
          "signedGap": {
            "day": 0.9,
            "evening": 1.1,
            "night": 0.3,
            "total": 2.2
          },
          "shortage": {
            "day": 0.9,
            "evening": 1.1,
            "night": 0.3,
            "total": 2.2
          }
        }
      }
    },
    {
      "code": "1538031114",
      "name": "惠和醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 8,
        "need": 9,
        "gap": -1,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.737,
        "current": {
          "day": 2,
          "evening": 2,
          "night": 2,
          "total": 6
        },
        "actualRatio": {
          "day": 7.4,
          "evening": 7.4,
          "night": 7.4
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 20,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.737,
          "occupiedBeds": 14.7,
          "required": {
            "day": 1.5,
            "evening": 1.1,
            "night": 1,
            "total": 3.6
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 20,
          "occupancy": 0.737,
          "occupiedBeds": 14.7,
          "required": {
            "day": 1.5,
            "evening": 1.1,
            "night": 1,
            "total": 3.6
          },
          "signedGap": {
            "day": -0.5,
            "evening": -0.9,
            "night": -1,
            "total": -2.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 20,
          "occupancy": 1,
          "occupiedBeds": 20,
          "required": {
            "day": 2,
            "evening": 1.5,
            "night": 1.3,
            "total": 4.9
          },
          "signedGap": {
            "day": 0,
            "evening": -0.5,
            "night": -0.7,
            "total": -1.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1538041209",
      "name": "東華醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "南投縣",
      "survey": {
        "current": 28,
        "need": 28,
        "gap": 0,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 72,
        "occupancy": 0.8740000000000001,
        "current": {
          "day": 8,
          "evening": 6,
          "night": 5,
          "total": 19
        },
        "actualRatio": {
          "day": 7.9,
          "evening": 10.5,
          "night": 12.6
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 72,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 72,
          "occupancy": 0.874,
          "occupiedBeds": 62.9,
          "required": {
            "day": 6.3,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.3
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.2,
            "night": -0.8,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 72,
          "occupancy": 0.874,
          "occupiedBeds": 62.9,
          "required": {
            "day": 6.3,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.3
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.2,
            "night": -0.8,
            "total": -3.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 72,
          "occupancy": 1,
          "occupiedBeds": 72,
          "required": {
            "day": 7.2,
            "evening": 5.5,
            "night": 4.8,
            "total": 17.5
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.5,
            "night": -0.2,
            "total": -1.5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        }
      }
    },
    {
      "code": "1701110019",
      "name": "德威國際牙醫口腔醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "臺北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 2
      },
      "acute": {
        "reportedBeds": 10,
        "occupancy": 0,
        "current": {
          "day": 4,
          "evening": 5,
          "night": 0,
          "total": 9
        },
        "actualRatio": {
          "day": 0,
          "evening": 0,
          "night": 0
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 10,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 10,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -5,
            "night": 0,
            "total": -9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 10,
          "occupancy": 0,
          "occupiedBeds": 0,
          "required": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          },
          "signedGap": {
            "day": -4,
            "evening": -5,
            "night": 0,
            "total": -9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 10,
          "occupancy": 1,
          "occupiedBeds": 10,
          "required": {
            "day": 1,
            "evening": 0.8,
            "night": 0.7,
            "total": 2.4
          },
          "signedGap": {
            "day": -3,
            "evening": -4.2,
            "night": 0.7,
            "total": -6.6
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0.7,
            "total": 0.7
          }
        }
      }
    },
    {
      "code": "0643010011",
      "name": "屏東榮民總醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "屏東縣",
      "survey": {
        "current": 427,
        "need": 295,
        "gap": 132,
        "vacancies": 100
      },
      "acute": {
        "reportedBeds": 260,
        "occupancy": 0.67,
        "current": {
          "day": 27,
          "evening": 17,
          "night": 14,
          "total": 58
        },
        "actualRatio": {
          "day": 6.5,
          "evening": 10.2,
          "night": 12.4
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 302,
      "openBedDelta": 42,
      "scenarios": {
        "low": {
          "bedBase": 260,
          "occupancy": 0.67,
          "occupiedBeds": 174.2,
          "required": {
            "day": 24.9,
            "evening": 15.8,
            "night": 13.4,
            "total": 54.1
          },
          "signedGap": {
            "day": -2.1,
            "evening": -1.2,
            "night": -0.6,
            "total": -3.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 302,
          "occupancy": 0.67,
          "occupiedBeds": 202.3,
          "required": {
            "day": 28.9,
            "evening": 18.4,
            "night": 15.6,
            "total": 62.9
          },
          "signedGap": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.6,
            "total": 4.9
          },
          "shortage": {
            "day": 1.9,
            "evening": 1.4,
            "night": 1.6,
            "total": 4.9
          }
        },
        "high": {
          "bedBase": 302,
          "occupancy": 1,
          "occupiedBeds": 302,
          "required": {
            "day": 43.1,
            "evening": 27.5,
            "night": 23.2,
            "total": 93.8
          },
          "signedGap": {
            "day": 16.1,
            "evening": 10.5,
            "night": 9.2,
            "total": 35.8
          },
          "shortage": {
            "day": 16.1,
            "evening": 10.5,
            "night": 9.2,
            "total": 35.8
          }
        }
      }
    },
    {
      "code": "1112010537",
      "name": "新竹市立馬偕兒童醫院(委託台灣基督長老教會馬偕醫療財團法人興建經營)",
      "level": "區域醫院",
      "region": "北區",
      "city": "新竹市",
      "survey": {
        "current": 52,
        "need": 70,
        "gap": -18,
        "vacancies": 45
      },
      "acute": {
        "reportedBeds": 143,
        "occupancy": 0.574,
        "current": {
          "day": 11.5,
          "evening": 10.4,
          "night": 9.3,
          "total": 31.2
        },
        "actualRatio": {
          "day": 7.1,
          "evening": 7.9,
          "night": 8.8
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 143,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 143,
          "occupancy": 0.574,
          "occupiedBeds": 82.1,
          "required": {
            "day": 11.7,
            "evening": 7.5,
            "night": 6.3,
            "total": 25.5
          },
          "signedGap": {
            "day": 0.2,
            "evening": -2.9,
            "night": -3,
            "total": -5.7
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "mid": {
          "bedBase": 143,
          "occupancy": 0.574,
          "occupiedBeds": 82.1,
          "required": {
            "day": 11.7,
            "evening": 7.5,
            "night": 6.3,
            "total": 25.5
          },
          "signedGap": {
            "day": 0.2,
            "evening": -2.9,
            "night": -3,
            "total": -5.7
          },
          "shortage": {
            "day": 0.2,
            "evening": 0,
            "night": 0,
            "total": 0.2
          }
        },
        "high": {
          "bedBase": 143,
          "occupancy": 1,
          "occupiedBeds": 143,
          "required": {
            "day": 20.4,
            "evening": 13,
            "night": 11,
            "total": 44.4
          },
          "signedGap": {
            "day": 8.9,
            "evening": 2.6,
            "night": 1.7,
            "total": 13.2
          },
          "shortage": {
            "day": 8.9,
            "evening": 2.6,
            "night": 1.7,
            "total": 13.2
          }
        }
      }
    },
    {
      "code": "1503030065",
      "name": "美德醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1507010023",
      "name": "澄清國際眼科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1507290021",
      "name": "高禾醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1531061249",
      "name": "新泰綜合醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 27,
        "need": 33,
        "gap": -6,
        "vacancies": 15
      },
      "acute": {
        "reportedBeds": 98,
        "occupancy": 0.826,
        "current": {
          "day": 8,
          "evening": 6.5,
          "night": 5,
          "total": 19.5
        },
        "actualRatio": {
          "day": 10.1,
          "evening": 12.5,
          "night": 16.2
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 98,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 98,
          "occupancy": 0.826,
          "occupiedBeds": 80.9,
          "required": {
            "day": 8.1,
            "evening": 6.2,
            "night": 5.4,
            "total": 19.7
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.3,
            "night": 0.4,
            "total": 0.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0.4,
            "total": 0.5
          }
        },
        "mid": {
          "bedBase": 98,
          "occupancy": 0.826,
          "occupiedBeds": 80.9,
          "required": {
            "day": 8.1,
            "evening": 6.2,
            "night": 5.4,
            "total": 19.7
          },
          "signedGap": {
            "day": 0.1,
            "evening": -0.3,
            "night": 0.4,
            "total": 0.2
          },
          "shortage": {
            "day": 0.1,
            "evening": 0,
            "night": 0.4,
            "total": 0.5
          }
        },
        "high": {
          "bedBase": 98,
          "occupancy": 1,
          "occupiedBeds": 98,
          "required": {
            "day": 9.8,
            "evening": 7.5,
            "night": 6.5,
            "total": 23.9
          },
          "signedGap": {
            "day": 1.8,
            "evening": 1,
            "night": 1.5,
            "total": 4.4
          },
          "shortage": {
            "day": 1.8,
            "evening": 1,
            "night": 1.5,
            "total": 4.4
          }
        }
      }
    },
    {
      "code": "1531061258",
      "name": "祥顥醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 30,
        "need": 30,
        "gap": 0,
        "vacancies": 10
      },
      "acute": {
        "reportedBeds": 79,
        "occupancy": 0.674,
        "current": {
          "day": 6,
          "evening": 6,
          "night": 6,
          "total": 18
        },
        "actualRatio": {
          "day": 8.9,
          "evening": 8.9,
          "night": 8.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 79,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 79,
          "occupancy": 0.674,
          "occupiedBeds": 53.2,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.5,
            "total": 13
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1.9,
            "night": -2.5,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 79,
          "occupancy": 0.674,
          "occupiedBeds": 53.2,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.5,
            "total": 13
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1.9,
            "night": -2.5,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 79,
          "occupancy": 1,
          "occupiedBeds": 79,
          "required": {
            "day": 7.9,
            "evening": 6.1,
            "night": 5.3,
            "total": 19.2
          },
          "signedGap": {
            "day": 1.9,
            "evening": 0.1,
            "night": -0.7,
            "total": 1.2
          },
          "shortage": {
            "day": 1.9,
            "evening": 0.1,
            "night": 0,
            "total": 2
          }
        }
      }
    },
    {
      "code": "1532011172",
      "name": "桃園秉坤婦幼醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 32,
        "occupancy": 0.679,
        "current": {
          "day": 3,
          "evening": 2,
          "night": 2,
          "total": 7
        },
        "actualRatio": {
          "day": 7.2,
          "evening": 10.9,
          "night": 10.9
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 32,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 32,
          "occupancy": 0.679,
          "occupiedBeds": 21.7,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.4,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 32,
          "occupancy": 0.679,
          "occupiedBeds": 21.7,
          "required": {
            "day": 2.2,
            "evening": 1.7,
            "night": 1.4,
            "total": 5.3
          },
          "signedGap": {
            "day": -0.8,
            "evening": -0.3,
            "night": -0.6,
            "total": -1.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 32,
          "occupancy": 1,
          "occupiedBeds": 32,
          "required": {
            "day": 3.2,
            "evening": 2.5,
            "night": 2.1,
            "total": 7.8
          },
          "signedGap": {
            "day": 0.2,
            "evening": 0.5,
            "night": 0.1,
            "total": 0.8
          },
          "shortage": {
            "day": 0.2,
            "evening": 0.5,
            "night": 0.1,
            "total": 0.8
          }
        }
      }
    },
    {
      "code": "0937050032",
      "name": "員郭醫療社團法人員郭醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 28,
        "need": 18,
        "gap": 10,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 79,
        "occupancy": 0.677,
        "current": {
          "day": 7,
          "evening": 6,
          "night": 5,
          "total": 18
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 8.9,
          "night": 10.7
        },
        "skillMixed": true
      },
      "acuteOpenBeds": 77,
      "openBedDelta": -2,
      "scenarios": {
        "low": {
          "bedBase": 79,
          "occupancy": 0.677,
          "occupiedBeds": 53.5,
          "required": {
            "day": 5.3,
            "evening": 4.1,
            "night": 3.6,
            "total": 13
          },
          "signedGap": {
            "day": -1.7,
            "evening": -1.9,
            "night": -1.4,
            "total": -5
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 77,
          "occupancy": 0.677,
          "occupiedBeds": 52.1,
          "required": {
            "day": 5.2,
            "evening": 4,
            "night": 3.5,
            "total": 12.7
          },
          "signedGap": {
            "day": -1.8,
            "evening": -2,
            "night": -1.5,
            "total": -5.3
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 77,
          "occupancy": 1,
          "occupiedBeds": 77,
          "required": {
            "day": 7.7,
            "evening": 5.9,
            "night": 5.1,
            "total": 18.8
          },
          "signedGap": {
            "day": 0.7,
            "evening": -0.1,
            "night": 0.1,
            "total": 0.8
          },
          "shortage": {
            "day": 0.7,
            "evening": 0,
            "night": 0.1,
            "total": 0.8
          }
        }
      }
    },
    {
      "code": "1531021183",
      "name": "全民醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 9,
        "need": 13,
        "gap": -4,
        "vacancies": 4
      },
      "acute": {
        "reportedBeds": 20,
        "occupancy": 0.7759999999999999,
        "current": {
          "day": 1,
          "evening": 1,
          "night": 1,
          "total": 3
        },
        "actualRatio": {
          "day": 15.5,
          "evening": 15.5,
          "night": 15.5
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 30,
      "openBedDelta": 10,
      "scenarios": {
        "low": {
          "bedBase": 20,
          "occupancy": 0.776,
          "occupiedBeds": 15.5,
          "required": {
            "day": 1.6,
            "evening": 1.2,
            "night": 1,
            "total": 3.8
          },
          "signedGap": {
            "day": 0.6,
            "evening": 0.2,
            "night": 0,
            "total": 0.8
          },
          "shortage": {
            "day": 0.6,
            "evening": 0.2,
            "night": 0,
            "total": 0.8
          }
        },
        "mid": {
          "bedBase": 30,
          "occupancy": 0.776,
          "occupiedBeds": 23.3,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.6,
            "total": 5.7
          },
          "signedGap": {
            "day": 1.3,
            "evening": 0.8,
            "night": 0.6,
            "total": 2.7
          },
          "shortage": {
            "day": 1.3,
            "evening": 0.8,
            "night": 0.6,
            "total": 2.7
          }
        },
        "high": {
          "bedBase": 30,
          "occupancy": 1,
          "occupiedBeds": 30,
          "required": {
            "day": 3,
            "evening": 2.3,
            "night": 2,
            "total": 7.3
          },
          "signedGap": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          },
          "shortage": {
            "day": 2,
            "evening": 1.3,
            "night": 1,
            "total": 4.3
          }
        }
      }
    },
    {
      "code": "1537071098",
      "name": "建元醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "彰化縣",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0933050036",
      "name": "竹北新仁醫療社團法人新仁醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "新竹縣",
      "survey": {
        "current": 18,
        "need": 26,
        "gap": -8,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 69,
        "occupancy": 0.332,
        "current": {
          "day": 3,
          "evening": 3,
          "night": 3,
          "total": 9
        },
        "actualRatio": {
          "day": 7.6,
          "evening": 7.6,
          "night": 7.6
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 69,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 69,
          "occupancy": 0.332,
          "occupiedBeds": 22.9,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1.2,
            "night": -1.5,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 69,
          "occupancy": 0.332,
          "occupiedBeds": 22.9,
          "required": {
            "day": 2.3,
            "evening": 1.8,
            "night": 1.5,
            "total": 5.6
          },
          "signedGap": {
            "day": -0.7,
            "evening": -1.2,
            "night": -1.5,
            "total": -3.4
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 69,
          "occupancy": 1,
          "occupiedBeds": 69,
          "required": {
            "day": 6.9,
            "evening": 5.3,
            "night": 4.6,
            "total": 16.8
          },
          "signedGap": {
            "day": 3.9,
            "evening": 2.3,
            "night": 1.6,
            "total": 7.8
          },
          "shortage": {
            "day": 3.9,
            "evening": 2.3,
            "night": 1.6,
            "total": 7.8
          }
        }
      }
    },
    {
      "code": "1531021192",
      "name": "宏仁醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 20,
        "need": 37,
        "gap": -17,
        "vacancies": 25
      },
      "acute": {
        "reportedBeds": 107,
        "occupancy": 0.514,
        "current": {
          "day": 6.7,
          "evening": 4.5,
          "night": 4,
          "total": 15.2
        },
        "actualRatio": {
          "day": 8.2,
          "evening": 12.2,
          "night": 13.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 107,
      "openBedDelta": 0,
      "scenarios": {
        "low": {
          "bedBase": 107,
          "occupancy": 0.514,
          "occupiedBeds": 55,
          "required": {
            "day": 5.5,
            "evening": 4.2,
            "night": 3.7,
            "total": 13.4
          },
          "signedGap": {
            "day": -1.2,
            "evening": -0.3,
            "night": -0.3,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 107,
          "occupancy": 0.514,
          "occupiedBeds": 55,
          "required": {
            "day": 5.5,
            "evening": 4.2,
            "night": 3.7,
            "total": 13.4
          },
          "signedGap": {
            "day": -1.2,
            "evening": -0.3,
            "night": -0.3,
            "total": -1.8
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 107,
          "occupancy": 1,
          "occupiedBeds": 107,
          "required": {
            "day": 10.7,
            "evening": 8.2,
            "night": 7.1,
            "total": 26.1
          },
          "signedGap": {
            "day": 4,
            "evening": 3.7,
            "night": 3.1,
            "total": 10.9
          },
          "shortage": {
            "day": 4,
            "evening": 3.7,
            "night": 3.1,
            "total": 10.9
          }
        }
      }
    },
    {
      "code": "0107340027",
      "name": "高雄市立大同醫院",
      "level": "區域醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 112,
        "need": 131,
        "gap": -19,
        "vacancies": 31
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0907150029",
      "name": "秀傳醫療社團法人高雄秀傳紀念醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 259,
        "need": 227,
        "gap": 32,
        "vacancies": 0
      },
      "acute": {
        "reportedBeds": 50,
        "occupancy": 0.5,
        "current": {
          "day": 9,
          "evening": 8,
          "night": 6,
          "total": 23
        },
        "actualRatio": {
          "day": 2.8,
          "evening": 3.1,
          "night": 4.2
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 126,
      "openBedDelta": 76,
      "scenarios": {
        "low": {
          "bedBase": 50,
          "occupancy": 0.5,
          "occupiedBeds": 25,
          "required": {
            "day": 2.5,
            "evening": 1.9,
            "night": 1.7,
            "total": 6.1
          },
          "signedGap": {
            "day": -6.5,
            "evening": -6.1,
            "night": -4.3,
            "total": -16.9
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 126,
          "occupancy": 0.5,
          "occupiedBeds": 63,
          "required": {
            "day": 6.3,
            "evening": 4.8,
            "night": 4.2,
            "total": 15.3
          },
          "signedGap": {
            "day": -2.7,
            "evening": -3.2,
            "night": -1.8,
            "total": -7.7
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "high": {
          "bedBase": 126,
          "occupancy": 1,
          "occupiedBeds": 126,
          "required": {
            "day": 12.6,
            "evening": 9.7,
            "night": 8.4,
            "total": 30.7
          },
          "signedGap": {
            "day": 3.6,
            "evening": 1.7,
            "night": 2.4,
            "total": 7.7
          },
          "shortage": {
            "day": 3.6,
            "evening": 1.7,
            "night": 2.4,
            "total": 7.7
          }
        }
      }
    },
    {
      "code": "1307020025",
      "name": "財團法人私立高雄醫學大學附設高醫岡山醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 70,
        "need": 117,
        "gap": -47,
        "vacancies": 112
      },
      "acute": {
        "reportedBeds": 99,
        "occupancy": 0.9490000000000001,
        "current": {
          "day": 18,
          "evening": 11,
          "night": 8,
          "total": 37
        },
        "actualRatio": {
          "day": 5.2,
          "evening": 8.5,
          "night": 11.7
        },
        "skillMixed": false
      },
      "acuteOpenBeds": 350,
      "openBedDelta": 251,
      "scenarios": {
        "low": {
          "bedBase": 99,
          "occupancy": 0.949,
          "occupiedBeds": 94,
          "required": {
            "day": 9.4,
            "evening": 7.2,
            "night": 6.3,
            "total": 22.9
          },
          "signedGap": {
            "day": -8.6,
            "evening": -3.8,
            "night": -1.7,
            "total": -14.1
          },
          "shortage": {
            "day": 0,
            "evening": 0,
            "night": 0,
            "total": 0
          }
        },
        "mid": {
          "bedBase": 350,
          "occupancy": 0.949,
          "occupiedBeds": 332.2,
          "required": {
            "day": 33.2,
            "evening": 25.6,
            "night": 22.1,
            "total": 80.9
          },
          "signedGap": {
            "day": 15.2,
            "evening": 14.6,
            "night": 14.1,
            "total": 43.9
          },
          "shortage": {
            "day": 15.2,
            "evening": 14.6,
            "night": 14.1,
            "total": 43.9
          }
        },
        "high": {
          "bedBase": 350,
          "occupancy": 1,
          "occupiedBeds": 350,
          "required": {
            "day": 35,
            "evening": 26.9,
            "night": 23.3,
            "total": 85.3
          },
          "signedGap": {
            "day": 17,
            "evening": 15.9,
            "night": 15.3,
            "total": 48.3
          },
          "shortage": {
            "day": 17,
            "evening": 15.9,
            "night": 15.3,
            "total": 48.3
          }
        }
      }
    },
    {
      "code": "1532021418",
      "name": "天祥醫院",
      "level": "地區醫院",
      "region": "北區",
      "city": "桃園市",
      "survey": {
        "current": 29,
        "need": 34,
        "gap": -5,
        "vacancies": 11
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0922020040",
      "name": "安心醫療社團法人安心醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 9,
        "need": 9,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "0922020059",
      "name": "亞人醫療社團法人盧亞人醫院",
      "level": "地區醫院",
      "region": "南區",
      "city": "嘉義市",
      "survey": {
        "current": 9,
        "need": 11,
        "gap": -2,
        "vacancies": 4
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1303010014",
      "name": "亞洲大學附屬醫院豐中分院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 7,
        "need": 12,
        "gap": -5,
        "vacancies": 10
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1303290012",
      "name": "臺中市立老人復健綜合醫院(委託財團法人中國醫藥大學興建經營)",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 39,
        "need": 40,
        "gap": -1,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1503290034",
      "name": "定國骨科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1503290043",
      "name": "君銓骨科醫院",
      "level": "地區醫院",
      "region": "中區",
      "city": "臺中市",
      "survey": {
        "current": 3,
        "need": 3,
        "gap": 0,
        "vacancies": 0
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1507010032",
      "name": "杏永醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 11,
        "need": 23,
        "gap": -12,
        "vacancies": 18
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1507340062",
      "name": "中正脊椎骨科醫院",
      "level": "地區醫院",
      "region": "高屏",
      "city": "高雄市",
      "survey": {
        "current": 29,
        "need": 27,
        "gap": 2,
        "vacancies": 5
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    },
    {
      "code": "1531210037",
      "name": "台安醫院",
      "level": "地區醫院",
      "region": "臺北",
      "city": "新北市",
      "survey": {
        "current": 0,
        "need": 0,
        "gap": 0,
        "vacancies": 3
      },
      "acute": null,
      "acuteOpenBeds": null,
      "openBedDelta": null,
      "scenarios": {
        "low": null,
        "mid": null,
        "high": null
      }
    }
  ]
};
