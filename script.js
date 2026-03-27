/* ===================================
   VeriPromise ESG 2026 - Main Script
   =================================== */

// ===================================
// Co-Organizers Data & Modal Logic
// ===================================

const CO_ORGANIZERS = [
  {
    id: 20,
    region: "workshop",
    name_ch: "臺北市立大學",
    name_en: "University of Taipei",
    logo: "img/co-organizer/臺北市立大學.png",
    intro:
      "臺北市立大學於2013年由臺北市立教育大學與臺北市立體育學院合併成立，為臺灣歷史最悠久之高等教育機構。本校結合師資培育典範、菁英運動員培訓基地及都市研究智庫等三大特色，致力於學術研究產能提升、卓越教學成效確保、國際學術交流深化以及產學合作模式創新。校務發展以教學卓越與國際化為核心指標，旨在建構具備全球競爭力之都會大學，並落實社會責任，培育具備專業素養與國際視野之現代公民。",
    link: "https://www.utaipei.edu.tw",
  },
  {
    id: 21,
    region: "workshop",
    name_ch: "靜宜大學",
    name_en: "Providence University",
    logo: "img/co-organizer/靜宜大學.jpg",
    intro:
      "靜宜大學秉承天主教利他精神與進德修業校訓，致力於推動全人教育並培育具備利他思維之社會公民。校務發展計畫結合聯合國永續發展目標，透過涵育良善美德、尊重多元文化、追求專業學識與探索生活知能等四大素養，發展生命省思及科技運用等七項核心能力。本校推動以院為核心之發展特色與全英文專業課程模組，旨在強化學生國際競爭力與專業就業能力，轉型為具備社會責任、教學卓越與特色研究之國際化大學。",
    link: "https://www.pu.edu.tw",
  },
  {
    id: 22,
    region: "workshop",
    name_ch: "國立高雄科技大學",
    name_en: "National Kaohsiung University of Science and Technology",
    logo: "img/co-organizer/國立高雄科技大學.png",
    intro:
      "國立高雄科技大學於2018年由國立高雄應用科技大學、國立高雄第一科技大學及國立高雄海洋科技大學合併成立，為臺灣規模最大之技術型大學。該校設有建工、燕巢、第一、楠梓及旗津等五大校區，學術領域涵蓋工學、電資、管理、財金、外語、人文社會、水圈及海事等多元範疇。憑藉優越之地理位置與完整之校區機能，本校致力於提供優質學習環境，並透過學術資源整合與跨領域協作，深耕專業人才培育與產業實務研發。",
    link: "https://www.nkust.edu.tw",
  },
  {
    id: 15,
    region: "featured",
    name_ch: "SITCON 學生計算機年會",
    name_en: "Students' Information Technology Conference",
    logo: "img/co-organizer/SITCON 學生計算機年會.png",
    intro:
      "SITCON 以學生為本、由學生自發舉辦，我們不只是學生「學以致用，教學相長」的實際展現，更冀望所有對資訊有興趣的學生，能夠在年會裡齊聚一堂，彼此激盪、傳承、啟發，讓更多人可以一起學習資訊的美妙之處。",
    link: "http://sitcon.org",
  },
  {
    id: 1,
    region: "north",
    name_ch: "Google 學生開發者社群 - 臺北大學",
    name_en: "Google Developer Groups (GDG) on Campus NTPU",
    logo: "img/co-organizer/GDG on Campus NTPU.png",
    intro:
      "我們是 Google 支持的學生開發者社群，也是你踏入科技業的敲門磚～\n本社致力於推廣開源技術、AI 等跨領域創新應用，將創意化為實際成果。\n無論是專案開發、跨校合作活動，還是業師講座、實作工作坊、企業參訪，都精彩可期！",
    link: "https://www.instagram.com/gdg.ntpu/",
  },
  {
    id: 4,
    region: "north",
    name_ch: "Google Developer Group on Campus TMU",
    name_en: "Google Developer Group on Campus TMU",
    logo: "img/co-organizer/Google Developer Group on Campus TMU.png",
    intro:
      "本社創辦於 110 年，鑑於本校在科技教育相對缺乏，我們期望透過 Google 開發者社群計劃，匯聚對資訊科技領域有興趣的師生，並致力於將科技結合醫療專業打造跨領域創新的智慧醫療應用。",
    link: "https://www.instagram.com/tmu_gdgoncampus/",
  },
  {
    id: 12,
    region: "north",
    name_ch: "臺科大 Google 學生開發者社群",
    name_en: "GDG on Campus NTUST",
    logo: "img/co-organizer/臺科大 Google 學生開發者社群.png",
    intro:
      "想學程式卻不知從何入手？我們是一群熱愛技術與分享的學生，透過與各校社團及企業的聯手合作，從日常生活常見的主題切入，致力於打造一個跨領域的友善學習環境。\n加入我們，一起成長為開發者，為開源社群貢獻一份心力吧！",
    link: "https://gdg-ntust.org/",
  },
  {
    id: 13,
    region: "north",
    name_ch: "國立臺北科技大學程式設計研究社",
    name_en:
      "National Taipei University of Technology (NTUT) Programming Club / NPC",
    logo: "img/co-organizer/國立臺北科技大學程式設計研究社.png",
    intro:
      "北科程式設計研究社致力於推動校內程式教育與資訊素養培養，提供系統化學習資源與實作機會，協助學生建立扎實的邏輯思考與問題解決能力。\n社團重視互助合作與友善交流氛圍，透過課程、競賽與專題分享，促進對程式設計有興趣之學生彼此交流與成長，強化實務能力與跨領域應用視野。",
    link: "",
  },
  {
    id: 14,
    region: "north",
    name_ch: "大同大學科學開源服務社",
    name_en: "TTUSSC",
    logo: "img/co-organizer/大同大學科學開源服務社.png",
    logoStyle: "width: 500%; height: 500%; object-fit: contain;",
    intro:
      "本社是一個結合開源、技術型社課與營隊服務活動的社團。\n我們致力於推廣開源文化，積極實踐開放教育理念，透過舉辦營隊將教育資源傳遞給更多資源不足的群體。",
    link: "https://ttussc.org/",
  },
  {
    id: 11,
    region: "north",
    name_ch: "Google Developer Group On Campus NCU",
    name_en: "Google Developer Group On Campus NCU",
    logo: "img/co-organizer/Google Developer Group On Campus NCU.png",
    intro:
      "GDG On Campus NCU 作為 Google 在學術型大學推動的開發者社群之一，致力於鼓勵學生學習，了解開源文化，並以推廣 Google 技術及參與各種賽事為目標，開展相關活動，是學生們學習和分享技術的理想社群。",
    link: "https://www.instagram.com/gdscncu/",
  },
  {
    id: 8,
    region: "north",
    name_ch: "中原大學 開源軟體開發社",
    name_en: "Google Developer Groups on Campus CYCU",
    logo: "img/co-organizer/中原大學 開源軟體開發社.png",
    intro:
      "中原大學 開源軟體開發社 × GDG on Campus CYCU 是一個由 Google 官方支持的學生開發者社群，致力於推廣資訊技術、軟體開發與 AI 等前沿領域，提供社課、工作坊、實作專案與技術交流平臺，讓中原學生從零開始學習程式、AI、資安等技能，並與志同道合的夥伴一起成長與合作。",
    link: "https://www.instagram.com/gdg.on.campus_cycu",
  },
  {
    id: 16,
    region: "north",
    name_ch: "臺北市立大學 UT GDGoC",
    name_en: "GDG On Campus University of Taipei",
    logo: "img/co-organizer/GDG On Campus University of Taipei.png",
    intro:
      "GDG On Campus University of Taipei 是一個擁抱多元、促進跨領域成長的學生組織。\n我們聚焦於創新創業、教育數位轉型與 AI 賦能，透過理論與實務兼顧的工作坊、專案導向的學習體驗、適合初學者與進階者的雙軌並行學習模式以及與各產業專業人士的深度連結，致力於打造資源豐富的學習環境，縮短學術與產業之間的距離。",
    link: "https://gdg.community.dev/gdg-on-campus-university-of-taipei-taipei-taiwan/",
  },
  {
    id: 9,
    region: "central",
    name_ch: "中興大學資訊科學研習社",
    name_en: "GDG on Campus NCHU",
    logo: "img/co-organizer/中興大學資訊科學研習社.png",
    intro:
      "中興大學資訊社（GDG on Campus NCHU）為中興大學最具代表性的技術社群，其中 GDG 分會更獲得 Google 官方認證。\n我們致力於打造一個開放的技術學習環境，透過工作坊、技術講座與專案實作，帶領學生探索 AI、雲端運算與 Web 技術。\n我們強調技術的實務應用與跨領域交流，期許能激發學生的創造力，運用科技解決現實問題。",
    link: "",
  },
  {
    id: 7,
    region: "central",
    name_ch: "Google Developer Group on Campus NCUE",
    name_en: "Google Developer Group on Campus NCUE",
    logo: "img/co-organizer/Google Developer Group on Campus NCUE.png",
    intro:
      "Google Developer Group on Campus NCUE 為彰師大規模最大的資訊開發社群。結合業界資源與 10 餘項系統開發實績，我們致力於優化校園行政流程，並透過專業講座與知識分享，以技術力全面推動校園數位轉型。",
    link: "https://gdg.ncuesa.org.tw",
  },
  {
    id: 2,
    region: "south",
    name_ch: "Google 學生開發者社群 STUST",
    name_en: "GDG on Campus STUST",
    logo: "img/co-organizer/Google 學生開發者社群 STUST.png",
    intro: "",
    link: "https://gdsc-stust.web.app",
  },
  {
    id: 10,
    region: "south",
    name_ch: "中山大學 GDG",
    name_en: "GDG on Campus: NSYSU｜Google Developer Student Club",
    logo: "img/co-organizer/中山大學 GDG.png",
    intro: "由 Google 官方支持、在中山大學推動的學生開發者社群，我們致力於打造一個自由、開放、充滿創意的技術交流平臺。\n在這裡，你不只能接觸到 Google 最新的開發技術、參與各式各樣的實作工作坊與專案開發，還有機會獲得由 Google 提供的官方證書，為你的履歷增添亮點！\nGDG 鼓勵創新思維與跨領域合作，無論你是程式新手還是開發老手，都能在這裡找到屬於自己的舞臺。我們目前與「程式研習社」共同推動課程與活動，歡迎你一起加入，探索更多技術的可能！",
    link: ""
  },
];

function renderCoOrganizers() {
  const grid = document.getElementById("coOrgGrid");
  if (!grid) return;
  const isZh = i18next.language === "zh";

  const regionLabels = {
    workshop: { zh: "巡迴課程合作學校", en: "Workshop Partner Universities" },
    featured: { zh: "其他", en: "Other" },
    north: { zh: "北區", en: "Northern Region" },
    central: { zh: "中區", en: "Central Region" },
    south: { zh: "南區", en: "Southern Region" },
  };

  let html = "";
  let currentRegion = null;

  CO_ORGANIZERS.forEach((org) => {
    const displayName = isZh
      ? org.name_ch || org.name_en
      : org.name_en || org.name_ch;

    // 插入標籤（featured 不插，換 region 才插）
    if (org.region !== currentRegion) {
      currentRegion = org.region;
      const label = isZh
        ? regionLabels[org.region].zh
        : regionLabels[org.region].en;
      html += `<div class="co-org-region-label">${label}</div>`;
    }
    const isFeatured = org.region === "featured";
    html += `
      <div class="co-org-card" role="button" tabindex="0" aria-label="${displayName}"
        onclick="openCoOrgModal(${org.id})"
        onkeydown="if(event.key==='Enter'||event.key===' ')openCoOrgModal(${org.id})">
        <div class="co-org-logo-wrap">
          <img src="${org.logo}" alt="${displayName}" loading="lazy"
            style="${org.logoStyle || ""}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
          <div class="co-org-logo-fallback" style="display:none"><span>${displayName.charAt(0)}</span></div>
        </div>
        <div class="co-org-tooltip">${displayName}</div>
      </div>`;
  });

  grid.innerHTML = html;
}

function openCoOrgModal(id) {
  const org = CO_ORGANIZERS.find((o) => o.id === id);
  if (!org) return;
  const isZh = i18next.language === "zh";
  const displayName = isZh
    ? org.name_ch || org.name_en
    : org.name_en || org.name_ch;
  document.getElementById("modalLogo").src = org.logo;
  document.getElementById("modalLogo").alt = displayName;
  document.getElementById("modalLogo").style.cssText = org.logoStyle || "";
  document.getElementById("modalName").textContent = displayName;
  const introEl = document.getElementById("modalIntro");
  introEl.textContent = org.intro || "";
  introEl.style.display = org.intro ? "block" : "none";
  document.getElementById("modalLink").href = org.link;
  const linkEl = document.getElementById("modalLink");
  linkEl.href = org.link;

  // 偵錯用：確保連結有成功換成 https://gdsc-stust.web.app 等網址
  console.log("Current Link:", linkEl.href);

  const overlay = document.getElementById("coOrgModalOverlay");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("coOrgModalClose").focus();
}

function closeCoOrgModal(event) {
  // 取得背景元素
  const overlay = document.getElementById("coOrgModalOverlay");

  // 嚴格判定：只有當點擊的目標 (event.target) 確實是背景本身時才執行關閉
  // 這樣點擊內部的 modal 內容或按鈕時，就不會誤觸關閉邏輯
  if (event && event.target === overlay) {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
}

// Escape 鍵關閉 modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const overlay = document.getElementById("coOrgModalOverlay");
    if (overlay && overlay.classList.contains("is-open")) {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }
  }
});

// 關閉按鈕監聽
document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("coOrgModalClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const overlay = document.getElementById("coOrgModalOverlay");
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  }
});

// ===================================
// i18next 翻譯系統配置
// ===================================

const translations = {
  zh: {
    translation: {
      nav: {
        title: "AI CUP 2026",
        home: "首頁",
        about: "競賽簡介",
        tasks: "任務說明",
        dataset: "數據集",
        evaluation: "評估方式",
        timeline: "時程表",
        team: "主辦團隊",
        coOrganizers: "協辦單位",
        examples: "標註範例",
        contact: "聯絡我們",
        faq: "常見問題",
        resources: "學術成果",
        competition: "競賽資訊",
        people: "團隊",
        info: "相關資源",
        workshops: "巡迴課程",
      },
      hero: {
        subtitle_top: "VeriPromiseESG 2026",
        title: " ESG 永續承諾驗證競賽",
        subtitle: "運用 AI 技術驗證企業永續承諾，推動 ESG 報告透明化與可信度",
        cta: "了解更多",
        aicupLink: "AI CUP 官網",
aideaLink: "AIdea 競賽平臺",
registerLink: "AI Cup 報名系統",
date: "2026.03.05 ~ 2026.07.23",
      },
      about: {
        title: "競賽簡介",
        intro:
          "在全球 ESG（環境、社會與治理）浪潮下，企業永續報告的真實性與可信度日益重要。本競賽旨在透過 AI 技術建立自動化的永續承諾驗證系統。",
        goalLabel: "競賽全名：",
        goalContent: "VeriPromise ESG 2026 - ESG 永續承諾驗證競賽",
        objectiveLabel: "競賽目標：",
        objectiveContent:
          "開發能夠自動識別、分析和驗證企業永續承諾的 AI 系統，透過四大核心任務（承諾識別、證據支持、清晰度評估、時機預測）完整評估 ESG 報告的真實性與可信度。",
        stat1: "競賽子任務",
        stat2: "標註數據量",
        stat3: "臺灣龍頭企業",
        stat4: "產業領域",
        card1: {
          title: "實務應用",
          desc: "解決企業「漂綠」(Greenwashing) 問題，提升 ESG 報告可信度，協助投資者與利害關係人做出更明智的決策。",
        },
        card2: {
          title: "技術挑戰",
          desc: "結合自然語言處理、大型語言模型與多任務學習，完成承諾識別、證據連結、清晰度評估與時機預測四大挑戰任務。",
        },
        card3: {
          title: "國際合作",
          desc: "由臺日頂尖學術機構聯合主辦，同時作為 NTCIR-19 International Track 項目，提供高品質多語言數據集，促進全球 ESG AI 研究發展。",
        },
      },
      tasks: {
        title: "競賽任務",
        intro:
          "本競賽包含四個核心子任務，從承諾識別、證據評估、清晰度分析到時機預測，完整涵蓋 ESG 報告驗證流程",
        codeZh: "中文版檔案",
        codeEn: "英文版檔案",
        codeLabel: "範例程式碼可參考",
        task1: {
          title: " 子任務一：承諾語句識別",
          goalLabel: "任務目標：",
          goal: "判斷給定句子是否表達企業對未來行動的明確承諾",
          outputLabel: "輸出類別",
          output1Label: "是 (Yes)：",
          output1: "包含明確承諾的陳述",
          output2Label: "否 (No)：",
          output2: "不包含承諾的一般性陳述",
          metricLabel: "評估指標",
          metric: "Macro-F1（精確率與召回率的調和平均）",
          exampleLabel: "範例",
          example1Label: "承諾：",
          example1: "我們承諾在 2030 年前達成碳中和目標",
          example2Label: "非承諾：",
          example2: "我們重視環境保護的重要性",
        },
        task2: {
          title: "子任務二：支持證據連結",
          goalLabel: "任務目標：",
          goal: "判斷已識別的承諾語句是否附有具體執行計畫或支持佐證",
          outputLabel: "輸出類別",
          output1Label: "是 (Yes)：",
          output1: "承諾有具體證據支持",
          output2Label: "否 (No)：",
          output2: "承諾缺乏具體佐證",
          output3Label: "不適用 (N/A)：",
          output3: "該語句非承諾，無需判斷",
          metricLabel: "評估指標",
          metric: "Macro-F1（語意關聯性判斷能力）",
          exampleLabel: "範例",
          promiseLabel: "承諾：",
          promise:
            "推動低碳價值鏈轉型，持續強化供應商節電、減碳、省水及減廢輔導",
          evidenceLabel: "證據：",
          evidence: "要求訂定中長期減量目標並提出具體行動 → ",
          result: "有證據支持",
        },
        task3: {
          title: "子任務三：清晰度分類",
          goalLabel: "任務目標：",
          goal: "評估承諾語句是否語意明確、無模糊字眼，辨識潛在「漂綠」風險",
          outputLabel: "輸出類別",
          output1Label: "清楚 (Clear)：",
          output1: "語意明確、可驗證",
          output2Label: "不清楚 (Not Clear)：",
          output2: "語意模糊、難以量化",
          output3Label: "誤導 (Misleading)：",
          output3: "可能有誤導性表述",
          output4Label: "不適用 (N/A)：",
          output4: "該語句非承諾，無需判斷",
          metricLabel: "評估指標",
          metric: "Macro-F1（四分類平均表現）",
          valueLabel: "實務價值",
          value: "協助識別企業「漂綠」行為，提升 ESG 報告可信度",
        },
        task4: {
          title: "子任務四：預期驗證時機推論",
          goalLabel: "任務目標：",
          goal: "根據語句推論承諾的預期完成時間，協助建立追蹤機制",
          outputLabel: "輸出類別",
          output1Label: "已實行 (Already)：",
          output1: "承諾已實現（當期可驗證）",
          output2Label: "2年內 (Within 2 years)：",
          output2: "短期目標",
          output3Label: "2-5年 (Between 2 and 5 years)：",
          output3: "中期目標",
          output4Label: "5年以上 (More than 5 years)：",
          output4: "長期目標",
          output5Label: "不適用 (N/A)：",
          output5: "該語句非承諾，無需判斷",
          metricLabel: "評估指標",
          metric: "Macro-F1（五分類時間推論能力）",
        },
        relevanceTitle: "任務關聯性與實務價值",
        job1: {
          title: "ESG 資料分析師",
          skillLabel: "對應技能：",
          skill: "子任務一",
          desc: "關鍵資訊抽取、文本分類、永續報告書編撰",
        },
        job2: {
          title: "永續投資分析師",
          skillLabel: "對應技能：",
          skill: "子任務二",
          desc: "語意關聯性判斷、邏輯推理、盡職調查",
        },
        job3: {
          title: "金融監管審查員",
          skillLabel: "對應技能：",
          skill: "子任務三",
          desc: "漂綠風險識別、語意品質評估、法遵審核",
        },
        job4: {
          title: "企業永續專員",
          skillLabel: "對應技能：",
          skill: "子任務四",
          desc: "時間資訊抽取、目標管理與追蹤、專案規劃",
        },
      },
      dataset: {
        title: "數據集介紹",
        intro:
          "VeriPromiseESG4K - 全球首個針對大規模繁體中文設計的永續承諾驗證標註數據集，來自臺灣 50 指數成分股，橫跨 15 個產業的真實 ESG 報告書",
        featuresTitle: "數據集特色",
        feature1: {
          title: "臺灣龍頭企業",
          desc: "來自臺灣 50 指數（0050）成分股，涵蓋臺灣前 50 大上市公司的真實永續報告書。",
        },
        feature2: {
          title: "跨產業多元性",
          desc: "橫跨 15 個不同產業領域，包含科技、金融、製造、能源等，提供豐富的產業視角。",
        },
        feature3: {
          title: "高品質標註",
          desc: "由國立臺北大學團隊與臺北市立大學團隊合作執行，經過多階段品質控制，使用 Krippendorff's Alpha 確保標註一致性。",
        },
        scaleTitle: "數據規模",
        nameLabel: "數據集名稱：",
        name: "VeriPromiseESG4K（全球首個大規模繁體中文永續承諾驗證數據集）",
        sizeLabel: "總數據量：",
        size: "4,000 筆高品質標註數據",
        sourceLabel: "資料來源：",
        source: "臺灣 50 指數（0050）成分股，涵蓋前 50 大上市公司",
        industryLabel: "產業涵蓋：",
        industry: "橫跨 15 個產業領域（科技、金融、製造、能源等）",
        annotationLabel: "標註維度：",
        annotation: "四個子任務（承諾識別、證據支持、清晰度評估、驗證時機）",
        splitLabel: "數據分割：",
        split: "訓練集 + 測試集（Public & Private）",
        processTitle: "標註流程",
        phase1: {
          title: "第一階段：初步標註",
          item1: "專業標註團隊進行初步標記",
          item2: "建立標註規範與指引",
          item3: "進行標註者訓練",
        },
        phase2: {
          title: "第二階段：交叉驗證",
          item1: "多位標註者獨立標註",
          item2: "計算標註者間一致性",
          item3: "解決標註歧異",
        },
        phase3: {
          title: "第三階段：專家審核",
          item1: "領域專家最終審核",
          item2: "品質控制與修正",
          item3: "數據集發布",
        },
      },
      evaluation: {
        title: "評估方式",
        intro: "採用多任務綜合評分機制，全面衡量模型在四個子任務上的表現",
        metricsTitle: "各子任務評估指標",
        task1: {
          title: "子任務一：承諾識別",
          metricLabel: "評估指標",
          metric1Label: "Macro-F1：",
          metric1: "精確率與召回率的調和平均",
          desc: "衡量模型識別 ESG 承諾語句的能力",
        },
        task2: {
          title: "子任務二：證據支持判斷",
          metricLabel: "評估指標",
          metric1Label: "Macro-F1：",
          metric1: "判斷承諾是否具備充分支持證據",
          desc: "核心實務能力評估",
        },
        task3: {
          title: "子任務三：清晰度評估",
          metricLabel: "評估指標",
          metric1Label: "Macro-F1：",
          metric1: "三分類（清楚/不清楚/誤導）平均表現",
          desc: "最具挑戰性任務，辨識漂綠風險能力",
        },
        task4: {
          title: "子任務四：驗證時機預測",
          metricLabel: "評估指標",
          metric1Label: "Macro-F1：",
          metric1: "四分類時間推論能力",
          desc: "評估模型對承諾時間軸的理解",
        },
        awardsTitle: "🏅 獎項設置（學生組）",
        award1: {
          title: "🥇 第一名",
          slotsLabel: "名額：",
          slots: "1 名",
          prizeLabel: "獎金：",
          prize: "新臺幣 8 萬元",
          certLabel: "獎狀：",
          cert: "教育部紙本與電子獎狀",
        },
        award2: {
          title: "🥈 第二名",
          slotsLabel: "名額：",
          slots: "1 名",
          prizeLabel: "獎金：",
          prize: "新臺幣 5 萬元",
          certLabel: "獎狀：",
          cert: "教育部紙本與電子獎狀",
        },
        award3: {
          title: "🥉 第三名",
          slotsLabel: "名額：",
          slots: "1 名",
          prizeLabel: "獎金：",
          prize: "新臺幣 3 萬元",
          certLabel: "獎狀：",
          cert: "教育部紙本與電子獎狀",
        },
        award4: {
          title: "🎖️ 優等",
          slotsLabel: "名額：",
          slots: "2 名",
          prizeLabel: "獎金：",
          prize: "新臺幣 1 萬元",
          certLabel: "獎狀：",
          cert: "教育部紙本獎狀",
        },
        award5: {
          title: "🏅 佳作",
          slotsLabel: "名額：",
          slots: "10 名",
          prizeLabel: "獎金：",
          prize: "新臺幣 7 千元",
          certLabel: "獎狀：",
          cert: "教育部紙本獎狀",
        },
        noteLabel: "※ 備註：",
        note: "「社會人士組」無法領取獎金，且獎狀(紙)為電子版本。",
        rulesLabel: "排名規則：",
        rule1: "• 最終排名以 Private Dataset 測試結果為準",
        rule2: "• Public Dataset 僅供競賽期間參考使用",
        rule3: "• 前 25% 且超過 Baseline 的隊伍可獲得計畫辦公室電子獎狀",
      },
      timeline: {
        title: "競賽時程",
        item1: {
          date: "2026.03.05 ~ 2026.04.28",
          title: "開放報名",
          desc: "同時開放<a href='https://github.com/veripromiseesg/veripromiseesgdataset/blob/main/vpesg4ktrain1000v1.json' target='_blank' style='color:#667eea;'>訓練集下載</a>",
        },
        item2: {
          date: "2026.03",
          title: "巡迴實作課程",
          desc: "• 北區：臺北市立大學<br>• 中區：靜宜大學<br>• 南區：高雄科技大學",
        },
        item3: {
          date: "2026.06.03 ~ 2026.06.10",
          title: "驗證集下載",
          desc: "開放下載",
        },
        item4: {
          date: "2026.06.10 ~ 2026.06.17",
          title: "競賽測試集下載與預測結果上傳",
          desc: "• 競賽測試集將於 6 月 10 日（三）上午 11:00 開放下載<br>• 6 月 10 日（三）上午 11:00 至 6 月 17 日（三）晚上 23:59:59 期間，可上傳競賽測試集預測結果，逾時不候<br>• 公開版排行榜（Public Leaderboard）將實時更新各組最高評分",
        },
        item5: {
          date: "2026.06.23",
          title: "初步結果公佈",
          desc: "公佈私有版排行榜（Private Leaderboard）成績",
        },
        item6: {
          date: "2026.06.24 ~ 2026.06.30",
          title: "其餘作品繳交",
          desc: "各隊伍提交預測模型的說明文件、自製之訓練資料集與程式碼",
        },
        item8: {
          date: "2026.07.23",
          title: "公佈最終名次",
          desc: "",
        },
        item9: {
          date: "2027.03（日期待定）",
          title: "頒獎典禮",
          desc: "各得獎隊伍須派代表/代理人參加頒獎典禮，以領取實體獎狀（典禮細節另行通知）",
        },
      },
      team: {
        title: "主辦團隊",
        intro: "由臺日頂尖學術機構與業界專家共同主辦",
        piTitle: "計畫主持人",
        pi: {
          name: "戴敏育 教授 ",
          role: "計畫主持人",
          affiliation: "資訊管理研究所<br>國立臺北大學",
          desc: "專精於人工智慧、Agentic AI、永續綠色金融科技。現任金融科技暨綠色金融研究中心主任。",
          link: "個人網站",
        },
        copiTitle: "協同主持人",
        copi1: {
          name: "陳重吉 博士",
          role: "協同主持人",
          affiliation: "人工智慧研究中心<br>產業技術綜合研究所 (AIST) 研究員",
          desc: "ACL SIG-FinTech 創始人，專精於金融論證挖掘與自然語言處理。",
          link: "個人網站",
        },
        copi2: {
          name: "Yohei Seki 教授",
          role: "協同主持人",
          affiliation: "圖書館情報媒體科學系<br>日本筑波大學",
          desc: "專精於自然語言處理與資訊檢索，曾組織 NTCIR 多語言觀點分析任務。",
          link: "個人網站",
        },
        raTitle: "兼任研究助理",
        ra1: {
          name: "Hsin-Ting LU",
          role: "研究助理",
          link: "個人網站",
        },
        ra2: {
          name: "Wen-Ze Chen",
          role: "研究助理",
          link: "個人網站",
        },
        ra3: {
          name: "Wei-Chun Huang",
          role: "研究助理",
          link: "個人網站",
        },
        ra4: {
          name: "Yu-Han Huang",
          role: "研究助理",
          link: "個人網站",
        },
        ra5: {
          name: "Jun-Yu Wu",
          role: "研究助理",
          link: "個人網站",
        },
        orgTitle: "合作機構",
        org1: {
          name: "國立臺北大學",
          dept: "<a href='https://www.mis.ntpu.edu.tw/' target='_blank' style='color:inherit;'>資訊管理研究所</a><br><a href='https://www.aacsb.ntpu.edu.tw/fintech/' target='_blank' style='color:inherit;'>金融科技暨綠色金融研究中心</a>",
        },
        org2: {
          name: "臺北市立大學",
          dept: "<a href='https://cs.utaipei.edu.tw/' target='_blank' style='color:inherit;'>資訊科學系</a>",
        },
        org3: {
          name: "日本產業技術綜合研究所",
          dept: "<a href='https://www.aist.go.jp/index_en.html' target='_blank' style='color:inherit;'>人工智慧研究中心</a>",
        },
        org4: {
          name: "日本筑波大學",
          dept: "<a href='https://www.tsukuba.ac.jp/en/' target='_blank' style='color:inherit;'>圖書館情報媒體科學系</a>",
        },
      },
      coOrg: {
        title: "協辦單位",
        intro: "感謝以下單位 / 組織的支持與協辦",
        visitPage: "前往頁面",
      },
      examples: {
        title: "標註範例說明",
        intro:
          "以下提供 E、S、G 三類文本的標註範例，協助參賽者理解標註規則與判斷標準",
        categoryLabel: "ESG 類別",
        typeLabel: "類型",
        contentLabel: "段落內容",
        promiseLabel: "承諾狀態",
        evidenceLabel: "證據狀態",
        qualityLabel: "證據品質",
        timelineLabel: "驗證時間軸",
        noteLabel: "註解",
        yes: "是 (Yes)",
        no: "否 (No)",
        na: "不適用 (N/A)",
        clear: "清晰 (Clear)",
        notClear: "不清晰 (Not Clear)",
        misleading: "誤導 (Misleading)",
        already: "已執行 (already)",
        within2: "2年內 (within_2_years)",
        between2and5: "2-5年 (between_2_and_5_years)",
        moreThan5: "5年以上 (more_than_5_years)",
        e1: {
          type: "有承諾 - 有證據",
          content:
            "承諾遵循國際人權公約與基本勞動人權原則，落實性別平等、結社自由，並致力於消弭歧視與強迫勞動。",
          note: "有制度性承諾與明確人權框架。",
        },
        e2: {
          type: "有承諾 - 有證據",
          content:
            "除非資金明確用於綠能轉型計畫，不再新增投資燃煤比重超過 50% 的電廠；同時針對燃料煤相關產業制定嚴格准入與撤資標準，積極引導資金流向低碳與可再生能源領域。",
          note: "行動方向明確，但量化成效與第三方驗證描述不足。",
        },
        e3: {
          type: "有承諾 - 無證據",
          content:
            "落實環境永續、實踐永續承諾是本公司的企業使命，將以 2050 年淨零排放為首要目標，致力實現多項環境永續承諾。",
          note: "屬於願景型承諾，未提供具體行動或成果。",
        },
        e4: {
          type: "無承諾",
          content: "應用人工智慧強化良率監控，輔助辦識模型有效性達 98%。",
          note: "僅敘述產品效果，未有行動承諾。",
        },
        s1: {
          type: "有承諾 - 有證據",
          content:
            "我們將持續推動零職災文化，完善承攬商納管與教育訓練機制，並加強現場稽核頻率，以降低高風險作業事故率。為此，我們正調整標準作業流程並提高稽核覆蓋率。",
          note: "明確表達企業將持續推動零職災文化，屬於清楚的行動承諾；相關行動未提供量化指標、明確頻率或制度細節，證據支撐力道有限。",
        },
        s2: {
          type: "有承諾 - 無證據",
          content:
            "制定企業內部衝突礦產管理聲明，承諾遵守 RBA 不使用衝突礦產政策。",
          note: "有制度性承諾與明確人權框架。",
        },
        s3: {
          type: "無承諾",
          content:
            "推出金來寶小額終身壽險，提供高齡者基本保險保障與終身壽險服務。",
          note: "僅是產品描述，未包含未來承諾語句。",
        },
        g1: {
          type: "有承諾 - 有證據",
          content:
            "我們將設立由三位獨立董事組成的永續委員會，每季檢視重大風險議題與對應計畫，並在年度股東會前完成報告揭露與外部查驗。",
          note: "明確表達企業將設立永續委員會，並規劃其運作方式，屬於具體且可執行的治理承諾；清楚說明組織架構、執行頻率及查驗機制。",
        },
        g2: {
          type: "有承諾 - 有證據",
          content: "未來改選董事時將提高女性董事席次，以增進董事會性別多元化。",
          note: "有明確方向，但缺乏具體目標與追蹤機制。",
        },
        g3: {
          type: "無承諾",
          content:
            "2024 年研發人員數達 446 人，完成研發專案 17 件，智慧財產權累計 202 件。",
          note: "營運成果描述，非治理承諾。",
        },
      },
      contact: {
        title: "聯絡我們",
        intro: "如有任何問題，歡迎隨時與我們聯繫",
        email: {
          title: "電子郵件",
        },
        website: {
          title: "官方網站",
          link: "國立臺北大學",
        },
        code: {
          title: "Sample Code",
        },
        slides: {
          title: "宣傳投影片",
          link: "Google Drive",
        },
        platform: {
          title: "競賽平臺",
          link: "AI CUP 報名系統",
        },
        importantLabel: "重要提醒：",
        note1:
          "• 請於 AI CUP 報名系統 (https://go.aicup.tw/) 完成報名登錄",
        note2: "• 參賽隊伍 1-5 人，報名後不可更換成員",
        note3:
          "• 測試集提交期間：2026/6/10 11:00 - 2026/6/17 23:59:59（每日限 3 次）",
      },
      faq: {
        title: "常見問題",
        q1: "VeriPromise ESG 競賽的目標是什麼？",
        a1: "本競賽專注於利用人工智慧技術，自動識別與驗證企業永續報告中的承諾，解決漂綠問題並提升報告可信度。",
        q2: "誰可以參加？",
        a2: "競賽對所有學生、學術研究人員以及產業界人士開放。每隊成員可為 1 到 5 人。",
        q3: "競賽提供什麼數據集？",
        a3: "VeriPromiseESG4K 數據集，包含 4,000 筆來自臺灣 50 指數成分股企業的真實 ESG 報告標註數據。"
      },
      workshops: {
        title: "校園巡迴課程",
        intro:
          "AI CUP 2026 ESG 永續承諾驗證競賽校園巡迴課程，歡迎各地學生報名參加",
        onlineLink: "線上參與連結",
        register: "立即報名校園巡迴工作坊",
        north: {
          title:
            "北區｜<a href='https://www.utaipei.edu.tw/' target='_blank' style='color:inherit;'>臺北市立大學</a>",
          details:
            "日期：2026 年 3 月 6 日（五）12:00–14:00\n地點：博愛校區 公誠樓 G315 教室\n場地上限：44 人\n開放全校學生報名",
          yt: "▶ 課程錄影：<a href='https://youtu.be/6_oHFTOznY8' target='_blank' style='color:#e53e3e; font-weight:bold;'>https://youtu.be/6_oHFTOznY8</a>",
        },
        central: {
          title:
            "中區｜<a href='https://www.pu.edu.tw/' target='_blank' style='color:inherit;'>靜宜大學</a>",
          details:
            "日期：2026 年 3 月 20 日（五）12:00–14:00\n地點：任垣樓 120 任垣講堂\n場地上限：200 人\n開放全校學生報名，請自備筆電",
          slides: "📊 巡迴課程投影片：<a href='https://docs.google.com/presentation/d/1d1Agns8bGzCyIr7VRtPvmOZX7hpGYnWRbI7PRmz8TX4/edit?usp=sharing' target='_blank' style='color:#3182ce; font-weight:bold;'>點此開啟</a>",
          yt: "▶ 課程錄影：敬請期待",
        },
        south: {
          title:
            "南區｜<a href='https://www.nkust.edu.tw/' target='_blank' style='color:inherit;'>國立高雄科技大學</a>",
          details:
            "日期：2026 年 3 月 27 日（五）14:30–16:20 / 19:30–21:00\n地點：雙科館 B1 電機系小劇場、1F 慧芳講堂\n總參與人數：150 人\n僅開放修課同學報名",
          slides: "📊 巡迴課程投影片：<a href='https://docs.google.com/presentation/d/1nGkZACQxYM5JFJyrgg6sUrUI6_tdzEfpGfY1EbWQn5Y/edit?usp=drivesdk' target='_blank' style='color:#3182ce; font-weight:bold;'>點此開啟</a>",
          yt: "▶ 課程錄影：敬請期待",
        },
      },
      resources: {
        title: "學術成果",
        intro: "重要競賽與研究論文連結",
        item_mlpromise: {
          title: "ML-Promise: 多語言企業承諾驗證數據集",
          desc: "EMNLP 2025 關於多語言承諾驗證的最新論文",
        },
        item1: {
          desc: "SemEval 2025 承諾驗證共享任務",
        },
        item2: {
          title: "多語言 ESG 議題識別",
          desc: "FNP@IJCAI-2023 ESG 議題識別論文",
        },
        item3: {
          title: "多語言 ESG 影響類型識別",
          desc: "FNP@IJCAI-2023 ESG 影響類型分類論文",
        },
        item4: {
          title: "多語言 ESG 影響期限推論",
          desc: "FNP@EMNLP-2024 ESG 影響期限預測論文",
        },
        item5: {
          desc: "NTCIR-19 法規合規任務",
        },
      },
      footer: {
        copyright: "© 2025-2026 AI CUP - ESG 永續承諾驗證競賽",
        backToTop: "返回頂部",
        supervising: "競賽指導單位：教育部 資訊及科技教育司",
        organizing: "競賽運籌單位：教育部 人工智慧競賽與標註資料蒐集計畫",
        topic:
          "議題提供單位（主辦單位）：國立臺北大學 資訊管理研究所、金融科技暨綠色金融研究中心",
        contactNote: "如有任何問題，歡迎隨時與我們聯繫：",
      },
    },
  },
  en: {
    translation: {
      nav: {
        title: "AI CUP 2026",
        home: "Home",
        about: "About",
        tasks: "Tasks",
        dataset: "Dataset",
        evaluation: "Evaluation",
        timeline: "Timeline",
        team: "Organizing Team",
        coOrganizers: "Co-Organizers",
        examples: "Annotation Examples",
        contact: "Contact",
        faq: "FAQ",
        resources: "Academic Outputs",
        competition: "Competition",
        people: "Team",
        info: "Info",
        workshops: "Workshops",
      },
      hero: {
        subtitle_top: "VeriPromiseESG 2026",
        title: "ESG Promise Verification Competition",
        subtitle:
          "Leverage AI technology to verify corporate sustainability commitments and enhance ESG report transparency and credibility",
        cta: "Learn More",
        aicupLink: "AI CUP Official Website",
aideaLink: "AIdea Competition Platform",
registerLink: "AI Cup Registration",
date: "2026.03.05 ~ 2026.07.23",
      },
      about: {
        title: "Competition Overview",
        intro:
          "In the era of global ESG (Environmental, Social, and Governance) focus, the authenticity and credibility of corporate sustainability reports are increasingly important. This competition aims to establish an automated sustainability commitment verification system using AI technology.",
        goalLabel: "Full Name:",
        goalContent:
          "VeriPromiseESG 2026 - ESG Promise Verification Competition",
        objectiveLabel: "Objective:",
        objectiveContent:
          "Develop an AI system capable of automatically identifying, analyzing, and verifying corporate sustainability commitments through four core tasks (promise recognition, evidence support, clarity assessment, and timeline prediction) to comprehensively evaluate the authenticity and credibility of ESG reports.",
        stat1: "Competition Tasks",
        stat2: "Annotated Data",
        stat3: "Leading Companies",
        stat4: "Industry Sectors",
        card1: {
          title: "Practical Application",
          desc: "Address corporate 'Greenwashing' issues, enhance ESG report credibility, and help investors and stakeholders make more informed decisions.",
        },
        card2: {
          title: "Technical Challenge",
          desc: "Combine natural language processing, large language models, and multi-task learning to complete four challenge tasks: promise recognition, evidence linkage, clarity assessment, and timeline prediction.",
        },
        card3: {
          title: "International Collaboration",
          desc: "Co-hosted by top academic institutions from Taiwan and Japan, featured as an NTCIR-19 International Track project, providing high-quality multilingual datasets to promote global ESG AI research.",
        },
      },
      tasks: {
        title: "Competition Tasks",
        intro:
          "This competition comprises four core subtasks, covering the complete ESG report verification process from promise recognition to evidence assessment, clarity analysis, and timeline prediction",
        codeZh: "Chinese Version",
        codeEn: "English Version",
        codeLabel: "Sample code available: ",
        task1: {
          title: "Subtask 1: Commitment Classification",
          goalLabel: "Objective:",
          goal: "Determine whether a given sentence expresses a clear corporate commitment to future actions",
          outputLabel: "Output Categories",
          output1Label: "Yes:",
          output1: "Statements containing explicit commitments",
          output2Label: "No:",
          output2: "General statements without commitments",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 (harmonic mean of precision and recall)",
          exampleLabel: "Examples",
          example1Label: "Promise:",
          example1: '"We commit to achieving carbon neutrality by 2030"',
          example2Label: "Non-Promise:",
          example2: '"We value the importance of environmental protection"',
        },
        task2: {
          title: "Subtask 2: Evidence Identification",
          goalLabel: "Objective:",
          goal: "Determine whether identified promise statements are accompanied by specific action plans or supporting evidence",
          outputLabel: "Output Categories",
          output1Label: "Yes:",
          output1: "Promise has concrete evidence support",
          output2Label: "No:",
          output2: "Promise lacks specific evidence",
          output3Label: "N/A:",
          output3: "Statement is not a promise, not applicable",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 (semantic association judgment capability)",
          exampleLabel: "Example",
          promiseLabel: "Promise:",
          promise:
            '"Promote low-carbon value chain transformation, continuously strengthen supplier energy-saving, carbon reduction, water conservation, and waste reduction guidance"',
          evidenceLabel: "Evidence:",
          evidence:
            '"Require setting medium and long-term reduction targets and proposing specific actions" → ',
          result: "Evidence Supported",
        },
        task3: {
          title: "Subtask 3: Clarity Classification",
          goalLabel: "Objective:",
          goal: "Assess whether promise statements are semantically clear without ambiguous language, identifying potential 'greenwashing' risks",
          outputLabel: "Output Categories",
          output1Label: "Clear:",
          output1: "Semantically explicit and verifiable",
          output2Label: "Not Clear:",
          output2: "Semantically ambiguous and difficult to quantify",
          output3Label: "Misleading:",
          output3: "Potentially misleading statements",
          output4Label: "N/A:",
          output4: "Statement is not a promise, not applicable",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 (average performance across four categories)",
          valueLabel: "Practical Value",
          value:
            "Help identify corporate 'greenwashing' behavior and enhance ESG report credibility",
        },
        task4: {
          title: "Subtask 4: Timeline Classification",
          goalLabel: "Objective:",
          goal: "Infer the expected completion time of commitments based on statements to establish tracking mechanisms",
          outputLabel: "Output Categories",
          output1Label: "Already:",
          output1:
            "Commitment already fulfilled (verifiable in current period)",
          output2Label: "Within 2 years:",
          output2: "Short-term target",
          output3Label: "Between 2 and 5 years:",
          output3: "Medium-term target",
          output4Label: "More than 5 years:",
          output4: "Long-term target",
          output5Label: "N/A:",
          output5: "Statement is not a promise, not applicable",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 (five-category time inference capability)",
        },
        relevanceTitle: "Task Relevance and Practical Value",
        job1: {
          title: "ESG Data Analyst",
          skillLabel: "Corresponding Skills:",
          skill: "Subtask 1",
          desc: "Key information extraction, text classification, sustainability report writing",
        },
        job2: {
          title: "Sustainable Investment Analyst",
          skillLabel: "Corresponding Skills:",
          skill: "Subtask 2",
          desc: "Semantic association judgment, logical reasoning, due diligence",
        },
        job3: {
          title: "Financial Regulatory Examiner",
          skillLabel: "Corresponding Skills:",
          skill: "Subtask 3",
          desc: "Greenwashing risk identification, semantic quality assessment, compliance audit",
        },
        job4: {
          title: "Corporate Sustainability Specialist",
          skillLabel: "Corresponding Skills:",
          skill: "Subtask 4",
          desc: "Time information extraction, goal management and tracking, project planning",
        },
      },
      dataset: {
        title: "Dataset Introduction",
        intro:
          "VeriPromiseESG4K - The world's first Large Scale Traditional Chinese-designed sustainability commitment verification annotated dataset, sourced from Taiwan 50 Index constituents, spanning 15 industries' authentic ESG reports",
        featuresTitle: "Dataset Features",
        feature1: {
          title: "Taiwan's Leading Companies",
          desc: "Real sustainability reports from Taiwan 50 Index (0050) constituent stocks, covering Taiwan's top 50 listed companies.",
        },
        feature2: {
          title: "Cross-Industry Diversity",
          desc: "Spanning 15 different industry sectors including technology, finance, manufacturing, energy, etc., providing rich industry perspectives.",
        },
        feature3: {
          title: "High-Quality Annotation",
          desc: "Executed in collaboration between National Taipei University and University of Taipei teams, with multi-stage quality control and Krippendorff's Alpha ensuring annotation consistency.",
        },
        scaleTitle: "Dataset Scale",
        nameLabel: "Dataset Name:",
        name: "VeriPromiseESG4K (World's First Large Scale Traditional Chinese Sustainability Commitment Verification Dataset)",
        sizeLabel: "Total Data Volume:",
        size: "4,000 high-quality annotated data points",
        sourceLabel: "Data Source:",
        source:
          "Taiwan 50 Index (0050) constituent stocks, covering top 50 listed companies",
        industryLabel: "Industry Coverage:",
        industry:
          "Spanning 15 industry sectors (technology, finance, manufacturing, energy, etc.)",
        annotationLabel: "Annotation Dimensions:",
        annotation:
          "Four subtasks (promise recognition, evidence support, clarity assessment, timeline verification)",
        splitLabel: "Data Split:",
        split: "Training set + Test set (Public & Private)",
        processTitle: "Annotation Process",
        phase1: {
          title: "Phase 1: Initial Annotation",
          item1: "Professional annotation team performs initial marking",
          item2: "Establish annotation standards and guidelines",
          item3: "Conduct annotator training",
        },
        phase2: {
          title: "Phase 2: Cross-Validation",
          item1: "Multiple annotators independently annotate",
          item2: "Calculate inter-annotator consistency",
          item3: "Resolve annotation discrepancies",
        },
        phase3: {
          title: "Phase 3: Expert Review",
          item1: "Domain experts conduct final review",
          item2: "Quality control and corrections",
          item3: "Dataset release",
        },
      },
      evaluation: {
        title: "Evaluation Methods",
        intro:
          "Adopt a multi-task comprehensive scoring mechanism to fully assess model performance across four subtasks",
        metricsTitle: "Evaluation Metrics for Each Subtask",
        task1: {
          title: "Subtask 1: Commitment Classification",
          metricLabel: "Evaluation Metrics",
          metric1Label: "Macro-F1：",
          metric1: "Harmonic mean of precision and recall",
          desc: "Measures the model's ability to identify ESG promise statements",
        },
        task2: {
          title: "Subtask 2: Evidence Identification",
          metricLabel: "Evaluation Metrics",
          metric1Label: "Macro-F1：",
          metric1:
            "Determines whether promises have sufficient supporting evidence",
          desc: "Core practical capability assessment",
        },
        task3: {
          title: "Subtask 3: Clarity Classification",
          metricLabel: "Evaluation Metrics",
          metric1Label: "Macro-F1:",
          metric1:
            "Three-category (clear/unclear/misleading) average performance",
          desc: "Most challenging task, identifying greenwashing risk capability",
        },
        task4: {
          title: "Subtask 4: Timeline Classification",
          metricLabel: "Evaluation Metrics",
          metric1Label: "Macro-F1:",
          metric1: "Four-category time inference capability",
          desc: "Assesses model understanding of commitment timelines",
        },
        awardsTitle: "🏅 Award Structure (Student Category)",
        award1: {
          title: "🥇 First Place",
          slotsLabel: "Slots:",
          slots: "1 team",
          prizeLabel: "Prize:",
          prize: "NTD 80,000",
          certLabel: "Certificate:",
          cert: "Paper & Digital Certificate by Ministry of Education",
        },
        award2: {
          title: "🥈 Second Place",
          slotsLabel: "Slots:",
          slots: "1 team",
          prizeLabel: "Prize:",
          prize: "NTD 50,000",
          certLabel: "Certificate:",
          cert: "Paper & Digital Certificate by Ministry of Education",
        },
        award3: {
          title: "🥉 Third Place",
          slotsLabel: "Slots:",
          slots: "1 team",
          prizeLabel: "Prize:",
          prize: "NTD 30,000",
          certLabel: "Certificate:",
          cert: "Paper & Digital Certificate by Ministry of Education",
        },
        award4: {
          title: "🎖️ Excellence Awards",
          slotsLabel: "Slots:",
          slots: "2 teams",
          prizeLabel: "Prize:",
          prize: "NTD 10,000",
          certLabel: "Certificate:",
          cert: "Paper Certificate by Ministry of Education",
        },
        award5: {
          title: "🏅 Honorable Mentions",
          slotsLabel: "Slots:",
          slots: "10 teams",
          prizeLabel: "Prize:",
          prize: "NTD 7,000",
          certLabel: "Certificate:",
          cert: "Paper Certificate by Ministry of Education",
        },
        noteLabel: "※ Note:",
        note: "Industry professionals category: no prize money; paper certificates are digital only.",
        rulesLabel: "Ranking Rules:",
        rule1: "• Final ranking based on Private Dataset test results",
        rule2: "• Public Dataset for reference during competition only",
        rule3:
          "• Top 25% teams exceeding Baseline receive Program Office digital certificates",
      },
      timeline: {
        title: "Competition Schedule",
        item1: {
          date: "2026.03.05 ~ 2026.04.28",
          title: "Registration Opens",
          desc: "Training set available for <a href='https://github.com/veripromiseesg/veripromiseesgdataset/blob/main/vpesg4ktrain1000v1.json' target='_blank' style='color:#667eea;'>download</a>.",
        },
        item2: {
          date: "March 2026",
          title: "Hands-on Workshops",
          desc: "• Northern Region: University of Taipei (UTaipei)<br>• Central Region: Providence University (PU)<br>• Southern Region: National Kaohsiung University of Science and Technology (NKUST)",
        },
        item3: {
          date: "2026.06.03 ~ 2026.06.10",
          title: "Validation Set Release",
          desc: "Download available.",
        },
        item4: {
          date: "2026.06.10 ~ 2026.06.17",
          title: "Test Set Release & Prediction Submission",
          desc: "• Test set available for download at 11:00 AM on June 10.<br>• Predictions may be uploaded from June 10 (11:00 AM) to June 17 (23:59:59). Late submissions will not be accepted.<br>• The Public Leaderboard will update in real time.",
        },
        item5: {
          date: "2026.06.23",
          title: "Preliminary Results Announcement",
          desc: "Private Leaderboard results announced.",
        },
        item6: {
          date: "2026.06.24 ~ 2026.06.30",
          title: "Additional Deliverables Submission",
          desc: "Submission of model documentation, self-constructed training data, and source code.",
        },
        item8: {
          date: "2026.07.23",
          title: "Final Ranking Announcement",
          desc: "",
        },
        item9: {
          date: "2027.03 (To be determined)",
          title: "Award Ceremony",
          desc: "• Award-winning teams must send a representative to receive the physical certificate.",
        },
      },
      team: {
        title: "Organizing Team",
        intro:
          "Co-hosted by top academic institutions from Taiwan and Japan with industry experts",
        piTitle: "Principal Investigator",
        pi: {
          name: "Prof. Min-Yuh Day",
          role: "Principal Investigator",
          affiliation:
            "Graduate Institute of Information Management<br>National Taipei University",
          desc: "Specialized in artificial intelligence, agentic AI, and sustainable green fintech. Currently Director of Fintech and Green Finance Research Center.",
          link: "Website",
        },
        copiTitle: "Co-Principal Investigators",
        copi1: {
          name: "Dr. Chung-Chi Chen",
          role: "Co-Principal Investigator",
          affiliation:
            "Researcher, Artificial Intelligence Research Center,<br>National Institute of Advanced Industrial Science and Technology (AIST), Japan",
          desc: "Founder of ACL SIG-FinTech, specialized in financial opinion mining and natural language processing.",
          link: "Website",
        },
        copi2: {
          name: "Prof. Yohei Seki",
          role: "Co-Principal Investigator",
          affiliation:
            "Institute of Library, Information and Media Science<br>University of Tsukuba",
          desc: "Specialized in natural language processing and information retrieval, organized NTCIR multilingual opinion analysis tasks.",
          link: "Website",
        },
        raTitle: "Research Assistants",
        ra1: {
          name: "Hsin-Ting LU",
          role: "Researcher",
          link: "Website",
        },
        ra2: {
          name: "Wen-Ze Chen",
          role: "Researcher",
          link: "Website",
        },
        ra3: {
          name: "Wei-Chun Huang",
          role: "Researcher",
          link: "Website",
        },
        ra4: {
          name: "Yu-Han Huang",
          role: "Researcher",
          link: "Website",
        },
        ra5: {
          name: "Jun-Yu Wu",
          role: "Researcher",
          link: "Website",
        },
        orgTitle: "Partner Institutions",
        org1: {
          name: "National Taipei University",
          dept: "<a href='https://www.mis.ntpu.edu.tw/' target='_blank' style='color:inherit;'>Graduate Institute of Information Management</a><br><a href='https://www.aacsb.ntpu.edu.tw/fintech/' target='_blank' style='color:inherit;'>Fintech and Green Finance Research Center</a>",
        },
        org2: {
          name: "University of Taipei",
          dept: "<a href='https://cs.utaipei.edu.tw/' target='_blank' style='color:inherit;'>Department of Computer Science</a>",
        },
        org3: {
          name: "National Institute of Advanced Industrial Science and Technology (AIST)",
          dept: "<a href='https://www.aist.go.jp/index_en.html' target='_blank' style='color:inherit;'>Artificial Intelligence Research Center</a>",
        },
        org4: {
          name: "University of Tsukuba",
          dept: "<a href='https://www.tsukuba.ac.jp/en/' target='_blank' style='color:inherit;'>Faculty of Library, Information and Media Science</a>",
        },
      },
      coOrg: {
        title: "Co-Organizers",
        intro:
          "We gratefully acknowledge the support of the following organizations",
        visitPage: "Visit Page",
      },
      examples: {
        title: "Annotation Examples",
        intro:
          "Sample annotations for E, S, G categories to help participants understand labeling rules and criteria",
        categoryLabel: "ESG Category",
        typeLabel: "Type",
        contentLabel: "Content",
        promiseLabel: "Promise Status",
        evidenceLabel: "Evidence Status",
        qualityLabel: "Evidence Quality",
        timelineLabel: "Timeline",
        noteLabel: "Note",
        yes: "Yes",
        no: "No",
        na: "N/A",
        clear: "Clear",
        notClear: "Not Clear",
        misleading: "Misleading",
        already: "Already",
        within2: "Within 2 years",
        between2and5: "Between 2 and 5 years",
        moreThan5: "More than 5 years",
        e1: {
          type: "With Promise - With Evidence",
          content:
            "Committed to following international human rights conventions and basic labor rights principles, implementing gender equality, freedom of association, and working to eliminate discrimination and forced labor.",
          note: "Has institutional commitment and clear human rights framework.",
        },
        e2: {
          type: "With Promise - With Evidence",
          content:
            "Unless funds are explicitly used for green energy transition projects, no new investment in coal-fired power plants with over 50% coal proportion; simultaneously establish strict entry and divestment standards for coal-related industries, actively guiding funds towards low-carbon and renewable energy sectors.",
          note: "Clear direction of action, but insufficient description of quantified achievements and third-party verification.",
        },
        e3: {
          type: "With Promise - Without Evidence",
          content:
            "Implementing environmental sustainability and fulfilling sustainability commitments is our corporate mission, with net-zero emissions by 2050 as the primary goal, committed to achieving multiple environmental sustainability commitments.",
          note: "Vision-type commitment without specific actions or results.",
        },
        e4: {
          type: "No Promise",
          content:
            "Applying artificial intelligence to enhance yield monitoring, with model recognition effectiveness reaching 98%.",
          note: "Only describes product effectiveness, no action commitment.",
        },
        s1: {
          type: "With Promise - With Evidence",
          content:
            "We will continue to promote zero-accident culture, improve contractor management and training mechanisms, and increase on-site audit frequency to reduce high-risk operation accident rates. To this end, we are adjusting standard operating procedures and increasing audit coverage.",
          note: "Clearly expresses the company's commitment to continue promoting zero-accident culture, a clear action commitment; related actions lack quantitative indicators, clear frequency, or institutional details, with limited evidence support.",
        },
        s2: {
          type: "With Promise - Without Evidence",
          content:
            "Establish internal conflict mineral management statement, committing to comply with RBA policy of not using conflict minerals.",
          note: "Has institutional commitment and clear human rights framework.",
        },
        s3: {
          type: "No Promise",
          content:
            "Launched small-amount whole life insurance, providing basic insurance protection and whole life insurance services for the elderly.",
          note: "Only product description, no future commitment statement.",
        },
        g1: {
          type: "With Promise - With Evidence",
          content:
            "We will establish a sustainability committee composed of three independent directors, review major risk issues and corresponding plans quarterly, and complete report disclosure and external verification before the annual shareholders meeting.",
          note: "Clearly expresses the company's intention to establish a sustainability committee and plans its operation, a specific and executable governance commitment; clearly explains organizational structure, execution frequency, and verification mechanisms.",
        },
        g2: {
          type: "With Promise - With Evidence",
          content:
            "Will increase female director seats during future director re-elections to enhance board gender diversity.",
          note: "Has clear direction but lacks specific targets and tracking mechanisms.",
        },
        g3: {
          type: "No Promise",
          content:
            "In 2024, R&D personnel reached 446, completed 17 R&D projects, and accumulated 202 intellectual property rights.",
          note: "Operational results description, not governance commitment.",
        },
      },
      contact: {
        title: "Contact Us",
        intro: "Feel free to reach out with any questions",
        email: {
          title: "Email",
        },
        website: {
          title: "Official Website",
          link: "National Taipei University",
        },
        code: {
          title: "Sample Code",
        },
        slides: {
          title: "Promotional Slides",
          link: "Google Drive",
        },
        platform: {
          title: "Competition Platform",
          link: "AI CUP Registration System",
        },
        importantLabel: "Important Reminders:",
        note1:
          "• Register via AI CUP Registration System (https://go.aicup.tw/)",
        note2: "• Teams consist of 1-5 members; no changes after registration",
        note3:
          "• Test set submission period: 6/10/2026 11:00 - 6/17/2026 23:59:59 (3 submissions per day)",
      },
      faq: {
        title: "FAQ",
        q1: "What is VeriPromise ESG?",
        a1: "VeriPromise ESG is an AI competition focused on verifying corporate sustainability commitments using NLP technology.",
        q2: "Who can participate?",
        a2: "The competition is open to students, researchers, and industry professionals. Teams can consist of 1-5 members.",
        q3: "What is the dataset?",
        a3: "The VeriPromiseESG4K dataset contains 4,000 annotated data points from Taiwan 50 Index constituent stocks' ESG reports.",
      },
      workshops: {
        title: "Regional Hands-on Workshops",
        intro:
          "AI CUP 2026 VeriPromise ESG regional hands-on workshops. Welcome students from all regions to join!",
        onlineLink: "Join Online",
        register: "Register for Campus Workshop Tour",
        north: {
          title:
            "North｜<a href='https://www.utaipei.edu.tw/' target='_blank' style='color:inherit;'>University of Taipei</a>",
          details:
            "Date: March 6, 2026 (Friday) 12:00–14:00\nVenue: Gongcheng Building G315\nCapacity: 44\nOpen to all students",
          yt: "▶ Workshop Recording: <a href='https://youtu.be/6_oHFTOznY8' target='_blank' style='color:#e53e3e; font-weight:bold;'>https://youtu.be/6_oHFTOznY8</a>",
        },
        central: {
          title:
            "Central｜<a href='https://www.pu.edu.tw/' target='_blank' style='color:inherit;'>Providence University</a>",
          details:
            "Date: March 20, 2026 (Friday) 12:00–14:00\nVenue: Renyu Building, Lecture Hall 120\nCapacity: 200\nOpen to all students. Please bring your laptop.",
          slides: "📊 Workshop Slides: <a href='https://docs.google.com/presentation/d/1d1Agns8bGzCyIr7VRtPvmOZX7hpGYnWRbI7PRmz8TX4/edit?usp=sharing' target='_blank' style='color:#3182ce; font-weight:bold;'>Open Slides</a>",
          yt: "▶ Recording: Coming Soon",
        },
        south: {
          title:
            "South｜<a href='https://www.nkust.edu.tw/' target='_blank' style='color:inherit;'>National Kaohsiung University<br>of Science and Technology</a>",
          details:
            "Date: March 27, 2026 (Friday) 14:30–16:20 / 19:30–21:00\nVenue: B1 Small Theater & 1F Huifang Hall\nTotal: 150 participants\nCourse students only",
          slides: "📊 Workshop Slides: <a href='https://docs.google.com/presentation/d/1nGkZACQxYM5JFJyrgg6sUrUI6_tdzEfpGfY1EbWQn5Y/edit?usp=drivesdk' target='_blank' style='color:#3182ce; font-weight:bold;'>Open Slides</a>",
          yt: "▶ Recording: Coming Soon",
        },
      },
      resources: {
        title: "Academic Outputs",
        intro: "Important links to related competitions and research papers",
        item_mlpromise: {
          title:
            "ML-Promise: A Multilingual Dataset for Corporate Promise Verification",
          desc: "EMNLP 2025 paper on multilingual promise verification dataset",
        },
        item1: {
          desc: "SemEval 2025 shared task on promise verification",
        },
        item2: {
          title: "Multi-Lingual ESG Issue Identification",
          desc: "FNP@IJCAI-2023 paper on ESG issue identification",
        },
        item3: {
          title: "Multi-Lingual ESG Impact Type Identification",
          desc: "FNP@IJCAI-2023 paper on ESG impact type classification",
        },
        item4: {
          title: "Multi-Lingual ESG Impact Duration Inference",
          desc: "FNP@EMNLP-2024 paper on ESG impact duration prediction",
        },
        item5: {
          desc: "NTCIR-19 Regulatory Compliance task",
        },
      },
      footer: {
        copyright: "© 2025-2026 AI CUP - ESG Promise Verification Competition",
        backToTop: "Back to Top",
        supervising:
          "Supervising Organization: Department of Information and Technology Education, Ministry of Education",
        organizing:
          "Organizing Committee: Ministry of Education Artificial Intelligence Competition and Annotation Data Collection Project Office",
        topic:
          "Topic Provider (Host Organization): Graduate Institute of Information Management and The Fintech and Green Finance Center (FGFC), NTPU",
        contactNote: "For any questions, feel free to contact us: ",
      },
    },
  },
};

// ===================================
// i18next 初始化
// ===================================

i18next.init(
  {
    lng: "zh",
    fallbackLng: "en",
    resources: translations,
  },
  function (err, t) {
    updateContent();
    renderCoOrganizers();
  },
);

// ===================================
// 更新頁面內容
// ===================================

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = i18next.t(key);
    if (translation && translation !== key) {
      // Handle HTML content (for <br> tags)
      if (translation.includes("<br>") || translation.includes("<a")) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// ===================================
// 語言切換功能
// ===================================

function changeLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    updateContent();
    renderCoOrganizers();
    // Update button states
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(`btn-${lang}`).classList.add("active");
  });
}

// ===================================
// 平滑滾動
// ===================================

// ===================================
// 平滑滾動 - 修正版
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // 關鍵修正：確保 href 只有一個 "#" 或是空的 "#" 時不執行後續邏輯
    // 並且確保它不是一個完整的 URL
    if (href === "#" || !href.startsWith("#")) return;

    e.preventDefault();

    try {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // 如果手機選單開啟中，則關閉它
        const navLinks = document.getElementById("navLinks");
        if (navLinks) navLinks.classList.remove("active");
      }
    } catch (err) {
      console.error("平滑滾動選擇器錯誤:", err);
    }
  });
});

// ===================================
// 手機選單切換
// ===================================

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ===================================
// 導航高亮顯示
// ===================================

window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.style.opacity = "0.8";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.opacity = "1";
    }
  });
});

// ===================================
// Intersection Observer 動畫
// ===================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(
    ".card, .task-card, .timeline-item, .team-member, .faq-item",
  )
  .forEach((el) => {
    observer.observe(el);
  });
