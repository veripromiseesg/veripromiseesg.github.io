/* ===================================
   VeriPromise ESG 2026 - Main Script
   =================================== */

// ===================================
// i18next 翻譯系統配置
// ===================================

const translations = {
  zh: {
    translation: {
      nav: {
        title: "AI CUP 2026",
        about: "競賽簡介",
        tasks: "任務說明",
        dataset: "數據集",
        evaluation: "評估方式",
        timeline: "競賽時程",
        workshops: "巡迴課程",
        faq: "常見問題",
        team: "籌備團隊",
        resources: "相關資源",
      },
      hero: {
        block1: "VeriPromise ESG 2026",
        block2: "ESG 永續承諾驗證競賽",
        block3: "",
        description: "運用 AI 技術驗證企業永續承諾，<br>推動 ESG 報告透明化與可信度",
        linkAicup: "AI CUP 官方網站",
        linkRegistration: "競賽報名網站",
        linkPlatform: "競賽平臺",
        linkGuidelines: "雙語競賽簡章",
      },
      about: {
        title: "競賽簡介",
        highlightsTitle: "競賽亮點",
        intro:
          "在全球 ESG（環境、社會與治理）浪潮下，企業永續報告的真實性與可信度日益重要。本競賽旨在透過 AI 技術建立自動化的永續承諾驗證系統。",
        goalLabel: "競賽全名：",
        goalContent: "VeriPromise ESG 2026 - ESG 永續承諾驗證競賽",
        stat1: "競賽子任務",
        stat2: "標註數據量",
        stat3: "臺灣龍頭企業",
        stat4: "產業領域",
        card1: {
          title: "實務應用：",
          desc: "解決企業「漂綠」(Greenwashing) 問題，提升 ESG 報告可信度，協助投資者與利害關係人做出更明智的決策。",
        },
        card2: {
          title: "技術挑戰：",
          desc: "結合自然語言處理、大型語言模型與多任務學習，完成承諾識別、證據連結、清晰度評估與時機預測四大挑戰任務。",
        },
        card3: {
          title: "國際合作：",
          desc: "由臺日頂尖學術機構聯合主辦，同時作為 NTCIR-19 International Track 項目，提供高品質多語言數據集，促進全球 ESG AI 研究發展。",
        },
      },
      tasks: {
        title: "競賽任務",
        intro:
          "參賽者須開發能自動識別、分析和驗證企業永續承諾的 AI 系統，透過以下四大核心任務完整評估 ESG 報告的真實性與可信度。",
        task1: {
          title: " 承諾語句識別",
          goalLabel: "任務目標：",
          goal: "判斷給定句子是否表達企業對未來行動的明確承諾。",
          outputLabel: "輸出類別",
          output1Label: "是 (Yes)：",
          output1: "包含明確承諾的陳述",
          output2Label: "否 (No)：",
          output2: "不包含承諾的一般性陳述",
          metricLabel: "評估指標",
          metric: "Macro-F1 Score（精確率與召回率的調和平均）",
          exampleLabel: "範例",
          example1Label: "承諾：",
          example1: "我們承諾在 2030 年前達成碳中和目標",
          example2Label: "非承諾：",
          example2: "我們重視環境保護的重要性",
        },
        task2: {
          title: "支持證據連結",
          goalLabel: "任務目標：",
          goal: "判斷已識別的承諾語句是否附有具體執行計畫或支持佐證。",
          outputLabel: "輸出類別",
          output1Label: "是 (Yes)：",
          output1: "承諾有具體證據支持",
          output2Label: "否 (No)：",
          output2: "承諾缺乏具體佐證",
          metricLabel: "評估指標",
          metric: "Macro-F1 Score（語意關聯性判斷能力）",
          exampleLabel: "範例",
          promiseLabel: "承諾：",
          promise:
            "推動低碳價值鏈轉型，持續強化供應商節電、減碳、省水及減廢輔導",
          evidenceLabel: "證據（支持承諾之內容）：",
          evidence: "要求訂定中長期減量目標並提出具體行動",
        },
        task3: {
          title: "證據清晰度評估",
          goalLabel: "任務目標：",
          goal: "評估承諾語句是否語意明確、無模糊字眼，辨識潛在「漂綠」風險。",
          outputLabel: "輸出類別",
          output1Label: "清楚 (Clear)：",
          output1: "語意明確、可驗證",
          output2Label: "不清楚 (Not Clear)：",
          output2: "語意模糊、難以量化",
          output3Label: "誤導 (Misleading)：",
          output3: "可能有誤導性表述",
          metricLabel: "評估指標",
          metric: "Macro-F1 Score（三分類平均表現）",
          valueLabel: "實務價值",
          value: "協助識別企業「漂綠」行為，提升 ESG 報告可信度",
        },
        task4: {
          title: "預期驗證時機推論",
          goalLabel: "任務目標：",
          goal: "根據語句推論承諾的預期完成時間，協助建立追蹤機制。",
          outputLabel: "輸出類別",
          output1Label: "已實行 (Already)：",
          output1: "承諾已實現（當期可驗證）",
          output2Label: "2年內 (Within 2 years)：",
          output2: "短期目標",
          output3Label: "2-5年 (Between 2 and 5 years)：",
          output3: "中期目標",
          output4Label: "5年以上 (More than 5 years)：",
          output4: "長期目標",
          metricLabel: "評估指標",
          metric: "Macro-F1 Score（四分類時間推論能力）",
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
        intro: "所有參賽隊伍將透過主辦方提供之「VeriPromiseESG4K」語料庫進行開發。這是全球首個針對繁體中文文本，設計的大規模永續承諾驗證標註數據集，其數據來源於臺灣龍頭企業，參考臺灣 50 指數（0050）成分股，共計涵蓋臺灣前 50 大上市公司的真實永續報告書，橫跨 15 個不同產業領域，包含科技、金融、製造、能源等，提供豐富的產業視角。",
        processTitle: "標註流程",
        phase1: {
          title: "第一階段",
          stepName: "初步標註",
          item1: "專業標註團隊進行初步標記",
          item2: "建立標註規範與指引",
          item3: "進行標註者訓練",
        },
        phase2: {
          title: "第二階段",
          stepName: "交叉驗證",
          item1: "多位標註者獨立標註",
          item2: "計算標註者間一致性",
          item3: "解決標註歧異",
        },
        phase3: {
          title: "第三階段",
          stepName: "專家審核",
          item1: "領域專家最終審核",
          item2: "品質控制與修正",
          item3: "數據集發佈",
        },
      },
      evaluation: {
        title: "評估方式",
        intro: "採用多任務綜合評分機制，全面衡量模型在四個子任務上的表現。",
        chartTitle: "各子任務評分權重分佈",
        chartTooltip: {
          task1: { 
            meta: "子任務一 (20%)", 
            name: "承諾語句識別", 
            desc: "識別 ESG 承諾語句的精確度與召回率平衡。", 
            metric: "<strong>📊 指標：Macro-F1 Score</strong><br>（即精確率與召回率的調和平均）" 
          },
          task2: { 
            meta: "子任務二 (30%)", 
            name: "支持證據連結", 
            desc: "判斷承諾是否具備充分支持證據的能力。", 
            metric: "<strong>📊 指標：Macro-F1 Score</strong><br>（衡量語意關聯性判斷能力）" 
          },
          task3: { 
            meta: "子任務三 (35%)", 
            name: "證據清晰度評估", 
            desc: "評估證據品質的三分類分析能力。", 
            metric: "<strong>📊 指標：Macro-F1 Score</strong><br>（三分類平均表現）" 
          },
          task4: { 
            meta: "子任務四 (15%)", 
            name: "預期驗證時機推論", 
            desc: "評估承諾適當驗證時間點的四分類預測能力。", 
            metric: "<strong>📊 指標：Macro-F1 Score</strong><br>（四分類時間推論能力）" 
          }
        },
        awardsTitle: "🏅 獎項設置",
        studentTitle: "學生組",
        socialTitle: "社會人士組",
        infoTitle: "補充說明",
        tableHead: {
          award: "獎項",
          quota: "名額",
          prize: "每名額獎項"
        },
        awards: {
          gold: "第一名",
          silver: "第二名",
          bronze: "第三名",
          excellence: "優等",
          mention: "佳作"
        },
        prizes_student: {
          gold: "新臺幣 8 萬元 + 教育部紙本與電子獎狀",
          silver: "新臺幣 5 萬元 + 教育部紙本與電子獎狀",
          bronze: "新臺幣 3 萬元 + 教育部紙本與電子獎狀",
          excellence: "新臺幣 1 萬元 + 教育部紙本獎狀",
          mention: "新臺幣 7 千元 + 教育部紙本獎狀"
        },
        prizes_social: {
          social_desc: "所有獲獎隊伍（包含第一名至佳作）皆頒發：",
          social_prize: "教育部人工智慧競賽計畫辦公室電子獎狀乙張",
        },
        note: "社會人士組無法領取獎金，且僅頒發電子獎狀。",
        rule1: "最終排名以 Private Dataset 測試結果為準",
        rule2: "Public Dataset 僅供競賽期間參考使用",
        rule3: "前 25% 且超過 Baseline 的隊伍可獲得計畫辦公室電子獎狀",
        studentNote: "（註：本競賽所有參賽隊伍（含學生及社會人士）統一依最終成績進行排名，惟僅學生組參賽者可領取排名獎金，社會人士組得獎名次之獎金，將依排名遞補至下一名符合學生組資格之隊伍。）",
      },
      workshops: {
        title: "三區巡迴課程",
        intro: "為了讓各位能更順利地參與競賽，主辦單位將前往北、中、南三區大專院校，辦理巡迴課程！<br>在這些課程中，不僅會進行詳細的競賽內容介紹、帶領參加者實作範例程式碼（部分場次亦提供精美餐點），更將加開線上場次，即便沒辦法線下參與也不用擔心",
        regLink: "立刻報名巡迴課程",
        table: {
          school: "學校",
          time: "時間",
          location: "地點",
          deadline: "報名截止",
          capacity: "名額上限",
          note: "其他",
          links: "相關連結"
        },
        row1: {
          school: "臺北市立大學",
          time: "3/6 (五)<br>12:00-14:00",
          location: "公誠樓 G315 /<br>Google Meet",
          deadline: "3/5（四）12:00<br>（亦開放現場報名）",
          capacity: "44 人",
          note: "提供超商禮物卡<br>（暫定）",
          link1: "線上參與連結",
          link2: "課程錄影"
        },
        row2: {
          school: "靜宜大學",
          time: "3/20 (五)<br>12:00-14:00",
          location: "任垣樓 120 講堂 /<br>Google Meet",
          deadline: "3/18（三）12:00<br>（亦開放現場報名）",
          capacity: "200 人",
          note: "提供午餐<br>須自備筆電",
          link1: "線上參與連結",
          link2: "課程錄影：敬請期待"
        },
        row3: {
          school: "高雄科技大學",
          time1: "3/27 (五)<br>14:30-16:20",
          location1: "雙科館 B1 小劇場 /<br>Google Meet",
          time2: "3/27 (五)<br>19:30-21:00",
          location2: "雙科館 1F 慧芳講堂 /<br>Google Meet",
          deadline: "3/26（四）23:59",
          capacity: "實體場僅修課同學<br>可報名",
          note: "以專題演講<br>形式進行",
          link1: "線上參與連結",
          link2: "課程錄影：敬請期待"
        }
      },
      timeline: {
        title: "競賽時程",
        item1: {
          date: "2026.03.01 - 05.01",
          title: "開放報名 & 第一部分訓練集下載",
          desc: "開放隊伍報名，同時釋出第一部分訓練數據集",
        },
        item2: {
          date: "2026.03",
          title: "三區巡迴課程",
          desc: "舉辦競賽說明與技術培訓課程",
        },
        item3: {
          date: "2026.05.01 - 06.01",
          title: "第二部分訓練集下載",
          desc: "釋出第二部分訓練數據集",
        },
        item4: {
          date: "2026.06.01 - 06.15",
          title: "驗證集下載",
          desc: "提供驗證數據集供參賽者調整模型",
        },
        item5: {
          date: "2026.06.18 - 06.20",
          title: "競賽測試集下載與預測結果上傳",
          desc: "開放測試集下載，提交截止時間：6/20 23:59:59（每日限 3 次）",
        },
        item6: {
          date: "2026.06.23",
          title: "結果公佈",
          desc: "公佈初步競賽結果",
        },
        item7: {
          date: "2026.06.23 - 06.30",
          title: "上傳報告和程式碼",
          desc: "得獎候選隊伍上傳技術報告與實作程式碼",
        },
        item8: {
          date: "2026.06.30 - 07.14",
          title: "成績評估",
          desc: "評審團隊審核報告與程式碼，進行最終評估",
        },
        item9: {
          date: "2026.07.24",
          title: "公佈最後名次",
          desc: "公佈正式得獎名單",
        },
        item10: {
          date: "2027.03",
          title: "頒獎典禮（日期另行公告）",
          desc: "舉辦頒獎典禮與技術分享會",
        },
      },
      team: {
        title: "籌備團隊",
        piTitle: "計畫主持人",
        pi: {
          name: "戴敏育 教授 ",
          role: "計畫主持人",
          affiliation: "國立臺北大學 資訊管理研究所 教授兼所長、<br>金融科技暨綠色金融研究中心 主任",
          link: "個人網站",
        },
        copiTitle: "協同主持人",
        copi1: {
          name: "陳重吉 博士",
          role: "協同主持人",
          affiliation: "日本產業技術綜合研究所 (AIST)<br>人工智慧研究中心 研究員",
          link: "個人網站",
        },
        copi2: {
          name: "Yohei Seki 教授",
          role: "協同主持人",
          affiliation: "日本筑波大學 圖書館情報媒體科學系 教授",
          link: "個人網站",
        },
        raTitle: "研究助理",
        ra1: {
          name: "Hsin-Ting Lu",
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
        organizersTitle: "主辦單位",
        coOrgTitle: "協辦單位",
        org1: {
          name: "國立臺北大學",
          dept: "資訊管理研究所、金融科技暨綠色金融研究中心",
        },
        org2: {
          name: "臺北市立大學",
          dept: "資訊科學系",
        },
        org3: {
          name: "日本產業技術綜合研究所",
          dept: "人工智慧研究中心",
        },
        org4: {
          name: "日本筑波大學",
          dept: "圖書館情報媒體科學系",
        },
      },
      examples: {
        title: "標註範例說明",
        intro: "以下提供 E、S、G 三類文本的標註範例，協助參賽者理解標註規則與判斷標準",
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
          content: "承諾遵循國際人權公約與基本勞動人權原則，落實性別平等、結社自由，並致力於消弭歧視與強迫勞動。",
          note: "有制度性承諾與明確人權框架。"
        },
        e2: {
          type: "有承諾 - 有證據",
          content: "除非資金明確用於綠能轉型計畫，不再新增投資燃煤比重超過 50% 的電廠；同時針對燃料煤相關產業制定嚴格准入與撤資標準，積極引導資金流向低碳與可再生能源領域。",
          note: "行動方向明確，但量化成效與第三方驗證描述不足。"
        },
        e3: {
          type: "有承諾 - 無證據",
          content: "落實環境永續、實踐永續承諾是本公司的企業使命，將以 2050 年淨零排放為首要目標，致力實現多項環境永續承諾。",
          note: "屬於願景型承諾，未提供具體行動或成果。"
        },
        e4: {
          type: "無承諾",
          content: "應用人工智慧強化良率監控，輔助辦識模型有效性達 98%。",
          note: "僅敘述產品效果，未有行動承諾。"
        },
        s1: {
          type: "有承諾 - 有證據",
          content: "我們將持續推動零職災文化，完善承攬商納管與教育訓練機制，並加強現場稽核頻率，以降低高風險作業事故率。為此，我們正調整標準作業流程並提高稽核覆蓋率。",
          note: "明確表達企業將持續推動零職災文化，屬於清楚的行動承諾；相關行動未提供量化指標、明確頻率或制度細節，證據支撐力道有限。"
        },
        s2: {
          type: "有承諾 - 無證據",
          content: "制定企業內部衝突礦產管理聲明，承諾遵守 RBA 不使用衝突礦產政策。",
          note: "有制度性承諾與明確人權框架。"
        },
        s3: {
          type: "無承諾",
          content: "推出金來寶小額終身壽險，提供高齡者基本保險保障與終身壽險服務。",
          note: "僅是產品描述，未包含未來承諾語句。"
        },
        g1: {
          type: "有承諾 - 有證據",
          content: "我們將設立由三位獨立董事組成的永續委員會，每季檢視重大風險議題與對應計畫，並在年度股東會前完成報告揭露與外部查驗。",
          note: "明確表達企業將設立永續委員會，並規劃其運作方式，屬於具體且可執行的治理承諾；清楚說明組織架構、執行頻率及查驗機制。"
        },
        g2: {
          type: "有承諾 - 有證據",
          content: "未來改選董事時將提高女性董事席次，以增進董事會性別多元化。",
          note: "有明確方向，但缺乏具體目標與追蹤機制。"
        },
        g3: {
          type: "無承諾",
          content: "2024 年研發人員數達 446 人，完成研發專案 17 件，智慧財產權累計 202 件。",
          note: "營運成果描述，非治理承諾。"
        }
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
        platform: {
          title: "競賽平臺",
          link: "AI CUP 報名系統",
        },
        importantLabel: "重要提醒：",
        note1:
          "• 請於 AI CUP 報名系統 (https://go.aicup.tw/) 完成報名登錄",
        note2: "• 參賽隊伍 1-5 人，報名後不可更換成員",
        note3:
          "• 測試集提交期間：2026/6/18 11:00 - 2026/6/20 23:59:59（每日限 3 次）",
        note4: "• 需繳交技術報告、實作程式碼與執行環境說明",
        note5: "• 前 15 名全學生隊伍可獲教育部獎狀",
        note6: "• 可使用外部資料與預訓練模型，但須在報告中詳細說明",
      },
      faq: {
        title: "常見問題",
        intro: "競賽相關常見問題。",
        q1: "誰可以參加？",
        a1: "本競賽分為「學生組」與「社會人士組」兩大組別。每個參賽隊伍人數限制 1 至 4 人。",
        q2: "每天可以提交幾次？",
        a2: "公開資料集與私有資料集預測結果每日合計提交上限 3 次。",
        q3: "可以使用外部資料集或預訓練模型嗎？",
        a3: "可以。參賽者可使用自行製作的資料、公開可取得之外部資料或預訓練模型（包含大型語言模型）。但若使用額外的開源資料，須於書面報告書中提供相關來源。",
        q4: "報名後可以修改隊伍成員嗎？",
        a4: "不可以。報名截止後，不可再變更隊伍成員名單及人數。比賽期間，隊伍不可合併與分割。",
        q5: "需要繳交哪些檔案？",
        a5: "需繳交：(1) 書面報告書（Word 與 PDF 格式）、(2) 實作程式碼（GitHub/Google 雲端硬碟連結）、(3) 測試集執行結果（.csv 格式）。",
        q6: "可以手動標註測試資料集嗎？",
        a6: "不可以。嚴禁對測試資料集進行任何形式的人工標註或修正。所有預測結果必須由程式自動生成，以確保競賽公平性。",
        q7: "最終排名如何決定？",
        a7: "最終成績將以私有資料集測試結果為排名依據，公佈私有版排行榜（Private Leaderboard）名次。公開資料集僅供競賽期間參考使用。"
      },
      resources: {
        title: "相關資源",
        intro: "重要競賽與研究論文連結",
        item_mlpromise: {
          title: "ML-Promise: 多語言企業承諾驗證數據集",
          desc: "EMNLP 2025 關於多語言承諾驗證的最新論文"
        },
        item1: {
          desc: "SemEval 2025 承諾驗證共享任務"
        },
        item2: {
          title: "多語言 ESG 議題識別",
          desc: "FNP@IJCAI-2023 ESG 議題識別論文"
        },
        item3: {
          title: "多語言 ESG 影響類型識別",
          desc: "FNP@IJCAI-2023 ESG 影響類型分類論文"
        },
        item4: {
          title: "多語言 ESG 影響期限推論",
          desc: "FNP@EMNLP-2024 ESG 影響期限預測論文"
        },
        item5: {
          desc: "NTCIR-19 法規合規任務"
        }
      },
      footer: {
        copyright: "© 2026 AI CUP - ESG 永續承諾驗證競賽",
        organizer: "主辦單位：國立臺北大學 資訊管理研究所、金融科技暨綠色金融研究中心",
        contact: "如有任何問題，歡迎隨時與我們聯繫： yyteng@mail.ntpu.edu.tw",
        email: "聯絡信箱",
        sampleCode: "雙語範例程式碼",
        registration: "AI CUP 報名系統",
      },
    },
  },
  en: {
    translation: {
      nav: {
        title: "AI CUP 2026",
        about: "About",
        tasks: "Tasks",
        dataset: "Dataset",
        evaluation: "Evaluation",
        timeline: "Timeline",
        workshops: "Workshops",
        faq: "FAQ",
        team: "Team",
        resources: "Resources",
      },
      hero: {
        block1: "VeriPromise ESG 2026",
        block2: "ESG Promise Verification",
        block3: "Competition",
        description: "Leverage AI technology to verify corporate sustainability commitments<br>and enhance ESG report transparency and credibility",
        linkAicup: "AI CUP Official Website",
        linkRegistration: "Registration System",
        linkPlatform: "Competition Platform",
        linkGuidelines: "Competition Guidelines (Bilingual)",
      },
      about: {
        title: "Competition Overview",
        highlightsTitle: "Competition Highlights",
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
          title: "Practical Application: ",
          desc: "Address corporate 'Greenwashing' issues, enhance ESG report credibility, and help investors and stakeholders make more informed decisions.",
        },
        card2: {
          title: "Technical Challenge: ",
          desc: "Combine natural language processing, large language models, and multi-task learning to complete four challenge tasks: promise recognition, evidence linkage, clarity assessment, and timeline prediction.",
        },
        card3: {
          title: "International Collaboration: ",
          desc: "Co-hosted by top academic institutions from Taiwan and Japan, featured as an NTCIR-19 International Track project, providing high-quality multilingual datasets to promote global ESG AI research.",
        },
      },
      tasks: {
        title: "Competition Tasks",
        intro:
          "The contestants in this competition are required to develop an AI system capable of automatically identifying, analyzing, and verifying corporate sustainability commitments through four core subtasks: promise recognition, evidence identification, clarity assessment, and timeline prediction.",
        task1: {
          title: "Commitment Classification",
          goalLabel: "Objective:",
          goal: "Determine whether a given sentence expresses a clear corporate commitment to future actions",
          outputLabel: "Output Categories",
          output1Label: "Yes:",
          output1: "Statements containing explicit commitments",
          output2Label: "No:",
          output2: "General statements without commitments",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 Score (harmonic mean of precision and recall)",
          exampleLabel: "Examples",
          example1Label: "Promise:",
          example1: '"We commit to achieving carbon neutrality by 2030"',
          example2Label: "Non-Promise:",
          example2:
            '"We value the importance of environmental protection"',
        },
        task2: {
          title: "Evidence Identification",
          goalLabel: "Objective:",
          goal: "Determine whether identified promise statements are accompanied by specific action plans or supporting evidence",
          outputLabel: "Output Categories",
          output1Label: "Yes:",
          output1: "Promise has concrete evidence support",
          output2Label: "No:",
          output2: "Promise lacks specific evidence",
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 Score (semantic association judgment capability)",
          exampleLabel: "Example",
          promiseLabel: "Promise:",
          promise:
            '"Promote low-carbon value chain transformation, continuously strengthen supplier energy-saving, carbon reduction, water conservation, and waste reduction guidance"',
          evidenceLabel: "Evidence:",
          evidence:
            '"Require setting medium and long-term reduction targets and proposing specific actions"',
        },
        task3: {
          title: "Clarity Classification",
          goalLabel: "Objective:",
          goal: "Assess whether promise statements are semantically clear without ambiguous language, identifying potential 'greenwashing' risks",
          outputLabel: "Output Categories",
          output1Label: "Clear:",
          output1: "Semantically explicit and verifiable",
          output2Label: "Not Clear:",
          output2: "Semantically ambiguous and difficult to quantify",
          output3Label: "Misleading:",
          output3: "Potentially misleading statements",
          metricLabel: "Evaluation Metric",
          metric:
            "Macro-F1 Score (average performance across three categories)",
          valueLabel: "Practical Value",
          value:
            "Help identify corporate 'greenwashing' behavior and enhance ESG report credibility",
        },
        task4: {
          title: "Timeline Classification",
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
          metricLabel: "Evaluation Metric",
          metric: "Macro-F1 Score (four-category time inference capability)",
        },
        chartTooltip: {
          task1: { 
              meta: "Task 1 (20%)", 
              name: "Commitment Classification", 
              desc: "Balance of precision and recall in identifying ESG promises.", 
              metric: "📊 Metric: Macro-F1 Score" 
          },
          task2: { 
              meta: "Task 2 (30%)", 
              name: "Evidence Identification", 
              desc: "Ability to determine if promises have sufficient supporting evidence.", 
              metric: "📊 Metric: Macro-F1 Score" 
          },
          task3: { 
              meta: "Task 3 (35%)", 
              name: "Clarity Classification", 
              desc: "Three-category analysis capability for assessing evidence quality.", 
              metric: "📊 Metric: Macro-F1 Score" 
          },
          task4: { 
              meta: "Task 4 (15%)", 
              name: "Timeline Classification", 
              desc: "Four-category prediction capability for appropriate verification timing.", 
              metric: "📊 Metric: Macro-F1 Score" 
          }
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
        intro: "All participating teams will develop their solutions using the “VeriPromiseESG4K Corpora\" provided by the organizer. VeriPromiseESG4K is the world’s first large-scale, Traditional Chinese–designed sustainability commitment verification annotated dataset. The dataset is sourced from Taiwan’s leading enterprises, referencing the constituents of the Taiwan 50 Index (0050). It encompasses authentic sustainability reports from Taiwan’s top 50 listed companies, spanning 15 different industry sectors—including technology, finance, manufacturing, energy, and more—offering rich and diverse industry perspectives.",
        processTitle: "Annotation Process",
        phase1: {
          title: "Phase 1",
          stepName: "Initial Annotation",
          item1: "Professional annotation team performs initial marking",
          item2: "Establish annotation standards and guidelines",
          item3: "Conduct annotator training",
        },
        phase2: {
          title: "Phase 2",
          stepName: "Cross-Validation",
          item1: "Multiple annotators independently annotate",
          item2: "Calculate inter-annotator consistency",
          item3: "Resolve annotation discrepancies",
        },
        phase3: {
          title: "Phase 3",
          stepName: "Expert Review",
          item1: "Domain experts conduct final review",
          item2: "Quality control and corrections",
          item3: "Dataset release",
        },
      },
      evaluation: {
        title: "Evaluation Methods",
        intro: "Adopt a multi-task comprehensive scoring mechanism to fully assess model performance across four subtasks.",
        chartTooltip: {
          task1: {
            meta: "Task 1 (20%)",
            name: "Commitment Classification",
            desc: "Balance of precision and recall in identifying ESG promises.",
            metric: "<strong>📊 Metric: Macro-F1 Score</strong><br>(Harmonic mean of precision and recall)"
          },
          task2: {
            meta: "Task 2 (30%)",
            name: "Evidence Identification",
            desc: "Ability to determine if promises have sufficient supporting evidence.",
            metric: "<strong>📊 Metric: Macro-F1 Score</strong><br>(Measuring semantic relevance judgment)"
          },
          task3: {
            meta: "Task 3 (35%)",
            name: "Clarity Classification",
            desc: "Three-category analysis capability for assessing evidence quality.",
            metric: "<strong>📊 Metric: Macro-F1 Score</strong><br>(Average performance across three categories)"
          },
          task4: {
            meta: "Task 4 (15%)",
            name: "Timeline Classification",
            desc: "Four-category prediction capability for appropriate verification timing.",
            metric: "<strong>📊 Metric: Macro-F1 Score</strong><br>(Four-category timeline inference ability)"
          }
        },
        awardsTitle: "🏅 Award Structure",
        studentTitle: "Student Division",
        socialTitle: "General Public Division",
        infoTitle: "Additional Information",
        tableHead: {
          award: "Award",
          quota: "Quota",
          prize: "Prize & Certificate"
        },
        awards: {
          gold: "First Prize",
          silver: "Second Prize",
          bronze: "Third Prize",
          excellence: "Excellence Award",
          mention: "Honorable Mention"
        },
        prizes_student: {
          gold: "NT$80,000 + Printed & Electronic Certificate (MOE)",
          silver: "NT$50,000 + Printed & Electronic Certificate (MOE)",
          bronze: "NT$30,000 + Printed & Electronic Certificate (MOE)",
          excellence: "NT$10,000 + Printed Certificate (MOE)",
          mention: "NT$7,000 + Printed Certificate (MOE)"
        },
        prizes_social: {
          social_desc: "All winning teams (from First Prize to Honorable Mention) will receive:",
          social_prize: "Electronic certificate issued by the Ministry of Education AI Competition Project Office",
        },
        note: "General Public Division: no prize money; only digital certificates.",
        rule1: "Final ranking is based on Private Dataset test results.",
        rule2: "Public Dataset is for reference during the competition only.",
        rule3: "Top 25% teams exceeding Baseline receive Program Office digital certificates.",
        studentNote: "(Note: All participating teams (including students and members of the public) will be ranked uniformly based on their final scores. Only student participants are eligible to receive cash prizes. Prize money for winning teams in the public category will be awarded to the next eligible student team in the rankings.)",
      },
      workshops: {
        title: "Regional Hands-on Workshops",
        intro: "To help everyone participate more smoothly, the organizers will host a series of regional hands-on workshops across universities in Northern, Central, and Southern Taiwan!<br>In these sessions, we will not only provide a detailed overview of the competition and guide participants through the sample code (some sessions also provide meals), but we will also offer online streaming. Don't worry if you can't attend in person!",
        regLink: "Register for Workshops",
        table: {
          school: "School",
          time: "Time",
          location: "Location",
          deadline: "Registration Deadline",
          capacity: "Capacity",
          note: "Note",
          links: "Links"
        },
        row1: {
          school: "University of Taipei",
          time: "3/6 (Fri)<br>12:00-14:00",
          location: "Gongcheng Hall G315 /<br>Google Meet",
          deadline: "3/5 (Thu) 12:00<br>(Walk-ins also welcome)",
          capacity: "44",
          note: "Convenience store gift cards provided<br>(Tentative)",
          link1: "Online Participation Link",
          link2: "Session Recording"
        },
        row2: {
          school: "Providence University",
          time: "3/20 (Fri)<br>12:00-14:00",
          location: "Renyuan Hall 120 /<br>Google Meet",
          deadline: "3/18 (Wed) 12:00<br>(Walk-ins also welcome)",
          capacity: "200",
          note: "Lunch provided<br>BYOD (Bring your own device)",
          link1: "Online Participation Link",
          link2: "Recording: Coming Soon"
        },
        row3: {
          school: "NKUST",
          time1: "3/27 (Fri)<br>14:30-16:20",
          location1: "Shuang-Ke Hall B1 Mini Theater /<br>Google Meet",
          time2: "3/27 (Fri)<br>19:30-21:00",
          location2: "Shuang-Ke Hall 1F Huifang Lecture Hall /<br>Google Meet",
          deadline: "3/26 (Thu) 23:59",
          capacity: "In-person only for<br>enrolled students",
          note: "Seminar format",
          link1: "Online Participation Link",
          link2: "Recording: Coming Soon"
        }
      },
      timeline: {
        title: "Competition Schedule",
        item1: {
          date: "2026.03.01 - 05.01",
          title: "Registration Open & First Training Set Release",
          desc: "Team registration opens; first part of training dataset released",
        },
        item2: {
          date: "2026.03",
          title: "Regional Hands-on<br>Workshops",
          desc: "Competition briefing and technical training sessions",
        },
        item3: {
          date: "2026.05.01 - 06.01",
          title: "Second Training Set Release",
          desc: "Second part of training dataset released",
        },
        item4: {
          date: "2026.06.01 - 06.15",
          title: "Validation Set Release",
          desc: "Validation dataset provided for participants to adjust models",
        },
        item5: {
          date: "2026.06.18 - 06.20",
          title: "Test Set Release &<br>Submission Upload",
          desc: "Test set available; submission deadline: 6/20 23:59:59 (3 submissions per day)",
        },
        item6: {
          date: "2026.06.23",
          title: "Results Announcement",
          desc: "Preliminary competition results announced",
        },
        item7: {
          date: "2026.06.23 - 06.30",
          title: "Report &<br>Code Submission",
          desc: "Award candidate teams submit technical reports and implementation code",
        },
        item8: {
          date: "2026.06.30 - 07.14",
          title: "Final Evaluation",
          desc: "Jury reviews reports and code, conducts final assessment",
        },
        item9: {
          date: "2026.07.24",
          title: "Final Rankings<br>Announcement",
          desc: "Official award winners announced",
        },
        item10: {
          date: "2027.03",
          title: "Award Ceremony<br>(Date TBA)",
          desc: "Award ceremony and technical sharing session",
        },
      },
      team: {
        title: "Meet the Team",
        piTitle: "Principal Investigator",
        pi: {
          name: "Prof. Min-Yuh Day",
          role: "Principal Investigator",
          affiliation:
            "National Taipei University, Graduate Institute of Information Management<br>National Taipei University, Fintech and Green Finance Research Center, Director",
          link: "Website",
        },
        copiTitle: "Co-Principal Investigators",
        copi1: {
          name: "Dr. Chung-Chi Chen",
          role: "Co-Principal Investigator",
          affiliation: "National Institute of Advanced Industrial Science and Technology (AIST), Artificial Intelligence Research Center, Researcher",
          link: "Website",
        },
        copi2: {
          name: "Prof. Yohei Seki",
          role: "Co-Principal Investigator",
          affiliation:
            "University of Tsukuba, Institute of Library, Information and Media Science, Professor",
          link: "Website",
        },
        raTitle: "Research Assistants",
        ra1: {
          name: "Hsin-Ting Lu",
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
        organizersTitle: "Organizers",
        coOrgTitle: "Co-organizers",
        org1: {
          name: "National Taipei University",
          dept: "Graduate Institute of Information Management, The Fintech and Green Finance Research Center",
        },
        org2: {
          name: "University of Taipei",
          dept: "Department of Computer Science",
        },
        org3: {
          name: "National Institute of Advanced Industrial Science and Technology (AIST)",
          dept: "Artificial Intelligence Research Center",
        },
        org4: {
          name: "University of Tsukuba",
          dept: "Faculty of Library, Information and Media Science",
        },
      },
      examples: {
        title: "Annotation Examples",
        intro: "Sample annotations for E, S, G categories to help participants understand labeling rules and criteria",
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
          content: "Committed to following international human rights conventions and basic labor rights principles, implementing gender equality, freedom of association, and working to eliminate discrimination and forced labor.",
          note: "Has institutional commitment and clear human rights framework."
        },
        e2: {
          type: "With Promise - With Evidence",
          content: "Unless funds are explicitly used for green energy transition projects, no new investment in coal-fired power plants with over 50% coal proportion; simultaneously establish strict entry and divestment standards for coal-related industries, actively guiding funds towards low-carbon and renewable energy sectors.",
          note: "Clear direction of action, but insufficient description of quantified achievements and third-party verification."
        },
        e3: {
          type: "With Promise - Without Evidence",
          content: "Implementing environmental sustainability and fulfilling sustainability commitments is our corporate mission, with net-zero emissions by 2050 as the primary goal, committed to achieving multiple environmental sustainability commitments.",
          note: "Vision-type commitment without specific actions or results."
        },
        e4: {
          type: "No Promise",
          content: "Applying artificial intelligence to enhance yield monitoring, with model recognition effectiveness reaching 98%.",
          note: "Only describes product effectiveness, no action commitment."
        },
        s1: {
          type: "With Promise - With Evidence",
          content: "We will continue to promote zero-accident culture, improve contractor management and training mechanisms, and increase on-site audit frequency to reduce high-risk operation accident rates. To this end, we are adjusting standard operating procedures and increasing audit coverage.",
          note: "Clearly expresses the company's commitment to continue promoting zero-accident culture, a clear action commitment; related actions lack quantitative indicators, clear frequency, or institutional details, with limited evidence support."
        },
        s2: {
          type: "With Promise - Without Evidence",
          content: "Establish internal conflict mineral management statement, committing to comply with RBA policy of not using conflict minerals.",
          note: "Has institutional commitment and clear human rights framework."
        },
        s3: {
          type: "No Promise",
          content: "Launched small-amount whole life insurance, providing basic insurance protection and whole life insurance services for the elderly.",
          note: "Only product description, no future commitment statement."
        },
        g1: {
          type: "With Promise - With Evidence",
          content: "We will establish a sustainability committee composed of three independent directors, review major risk issues and corresponding plans quarterly, and complete report disclosure and external verification before the annual shareholders meeting.",
          note: "Clearly expresses the company's intention to establish a sustainability committee and plans its operation, a specific and executable governance commitment; clearly explains organizational structure, execution frequency, and verification mechanisms."
        },
        g2: {
          type: "With Promise - With Evidence",
          content: "Will increase female director seats during future director re-elections to enhance board gender diversity.",
          note: "Has clear direction but lacks specific targets and tracking mechanisms."
        },
        g3: {
          type: "No Promise",
          content: "In 2024, R&D personnel reached 446, completed 17 R&D projects, and accumulated 202 intellectual property rights.",
          note: "Operational results description, not governance commitment."
        }
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
        platform: {
          title: "Competition Platform",
          link: "AI CUP Registration System",
        },
        importantLabel: "Important Reminders:",
        note1:
          "• Register via AI CUP Registration System (https://go.aicup.tw/)",
        note2:
          "• Teams consist of 1-5 members; no changes after registration",
        note3:
          "• Test set submission period: 6/18/2026 11:00 - 6/20/2026 23:59:59 (3 submissions per day)",
        note4:
          "• Submit technical report, implementation code, and environment documentation",
        note5:
          "• Top 15 all-student teams receive Ministry of Education certificates",
        note6:
          "• External data and pre-trained models allowed; detailed disclosure required in report",
      },
      faq: {
        title: "FAQ",
        intro: "Frequently asked questions about the competition.",
        q1: "Who can participate?",
        a1: "The competition is divided into Student Division and General Public Division. Each team can have 1-4 members.",
        q2: "How many times can I submit per day?",
        a2: "Teams can submit up to 3 times per day (public + private datasets combined).",
        q3: "Can I use external datasets or pre-trained models?",
        a3: "Yes, you may use self-constructed datasets, publicly available external data, or pre-trained models (including large language models). However, you must clearly cite these sources in your technical report.",
        q4: "Can I modify my team after registration?",
        a4: "No. After the registration deadline, team member lists and team size cannot be modified. Teams cannot merge or split during the competition period.",
        q5: "What files do I need to submit?",
        a5: "You need to submit: (1) Written report (Word & PDF), (2) Implementation code (GitHub/Google Drive link), and (3) Test set prediction results (.csv format).",
        q6: "Can I manually annotate the test dataset?",
        a6: "No. Manual annotation or modification of the test dataset is strictly prohibited. All predictions must be automatically generated by programs to ensure fairness.",
        q7: "How is the final ranking determined?",
        a7: "The final ranking is based on the Private Leaderboard results. The public dataset is for reference during the competition only."
      },
      resources: {
        title: "Related Resources",
        intro: "Important links to related competitions and research papers",
        item_mlpromise: {
          title: "ML-Promise: A Multilingual Dataset for Corporate Promise Verification",
          desc: "EMNLP 2025 paper on multilingual promise verification dataset"
        },
        item1: {
          desc: "SemEval 2025 shared task on promise verification"
        },
        item2: {
          title: "Multi-Lingual ESG Issue Identification",
          desc: "FNP@IJCAI-2023 paper on ESG issue identification"
        },
        item3: {
          title: "Multi-Lingual ESG Impact Type Identification",
          desc: "FNP@IJCAI-2023 paper on ESG impact type classification"
        },
        item4: {
          title: "Multi-Lingual ESG Impact Duration Inference",
          desc: "FNP@EMNLP-2024 paper on ESG impact duration prediction"
        },
        item5: {
          desc: "NTCIR-19 Regulatory Compliance task"
        }
      },
      footer: {
        copyright:
          "© 2026 AI CUP - ESG Promise Verification Competition",
        organizer:
          "Organizer: Graduate Institute of Information Management & The Fintech and Green Finance Center (FGFC), NTPU",
        contact: "For any questions, feel free to contact us: yyteng@mail.ntpu.edu.tw",
        email: "Email",
        sampleCode: "Sample Code (Bilingual)",
        registration: "AI CUP Registration System",
      },
    },
  },
};

// ===================================
// i18next 初始化
// ===================================

// ===================================
// i18next 初始化
// ===================================

i18next.init(
  {
    lng: "zh",           // 預設語言設為中文
    fallbackLng: "en",
    resources: translations,
  },
  function (err, t) {
    updateContent();
    
    // 初始化時根據預設語言設定 body 屬性與導覽列樣式
    document.body.setAttribute('data-lang', 'zh');                // 確保初始就有 lang 屬性
    document.getElementById('navLinks').classList.add('zh-mode'); // 確保導覽列初始套用中文樣式
    
    initEvaluationChart();  
  }
);

// ===================================
// 更新頁面內容
// ===================================

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translation = i18next.t(key);

    // 檢查翻譯是否存在且不為空
    if (translation && translation.trim() !== "") {
      // 有內容 -> 顯示元素
      element.style.display = ""; 
      
      if (translation.includes("<br>")) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    } else {
      // 沒內容 (空字串) -> 隱藏中文版 block3 元素 (display: none)
      element.style.display = "none";
    }
  });
}

// ===================================
// 語言切換功能
// ===================================

function changeLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
    updateContent();

    // 設定 body 語言屬性
    document.body.setAttribute('data-lang', lang);
    
    // 更新按鈕狀態
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    document.getElementById(`btn-${lang}`).classList.add("active");

    // 切換導覽列的 Grid 模式
    const navLinks = document.getElementById('navLinks');
    if (lang === 'zh') {
      navLinks.classList.add('zh-mode');
    } else {
      navLinks.classList.remove('zh-mode');
    }

    updateChartLanguage();
    if (typeof renderOrganizers === 'function') renderOrganizers();
    if (typeof renderPartnerInstitutions === 'function') renderPartnerInstitutions();
  });
}

// ===================================
// 平滑滾動
// ===================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      document.getElementById("navLinks").classList.remove("active");
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
  rootMargin: "0px 0px -20px 0px", 
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
  .querySelectorAll(".card, .task-card, .timeline-item, .team-member, .faq-item")
  .forEach((el) => {
    observer.observe(el);
  });

/* ===================================
   Parallax Animation (GSAP)
   =================================== */

// 註冊 ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 簡單的視差效果
gsap.utils.toArray(".layer").forEach(layer => {
    const speed = layer.getAttribute("data-speed");
    
    gsap.to(layer, {
        y: (i, target) => ScrollTrigger.maxScroll(window) * speed * 0.2,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero-parallax",
            start: "top top",
            end: "bottom top",
            scrub: 0, // 平滑滾動
            // markers: true // 開發時可以打開這個看觸發點
        }
    });
});

// 下方區塊的 Reveal 動畫
gsap.utils.toArray("section:not(#home) .container").forEach(section => {
    gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 90%", 
            toggleActions: "play none none reverse"
        }
    });
});

/* ===================================
   Random Clouds Generator (Balanced Version)
   =================================== */

function initClouds() {
    const container = document.getElementById('cloud-container');
    if (!container) return; 

    // 清空容器，避免重複執行時雲朵越來越多
    container.innerHTML = '';

    const totalImages = 12; // 圖片總數 (cloud1.png ~ cloud12.png)
    const cloudsToShow = 5; // 雲的總數

    // 計算每個區塊的寬度 (例如 5 朵雲，每個區塊就是 20%)
    const sectionWidth = 100 / cloudsToShow;

    for (let i = 0; i < cloudsToShow; i++) {
        // 1. 隨機選一張圖
        const randomId = Math.floor(Math.random() * totalImages) + 1;
        
        // 2. 建立 img 元素
        const img = document.createElement('img');
        img.src = `img/clouds/cloud${randomId}.png`;
        img.className = 'floating-cloud';
        img.alt = 'Decorative cloud';
        
        // 3. 分區位置邏輯
        // 基礎位置 (Base) 是該區塊的起始點 (例如 0, 20, 40...)
        // 隨機偏移 (Offset) 是在該區塊內的隨機位置
        const sectionBase = i * sectionWidth;
        const randomOffset = Math.floor(Math.random() * (sectionWidth - 5)); 
        const finalLeft = sectionBase + randomOffset - 5; 
        
        // 垂直位置隨機 (-5% 到 60%)
        const randomTop = Math.floor(Math.random() * 65) - 5; 
        
        // 4. 隨機大小 (0.6 ~ 1.4 倍)
        const baseWidth = 150;
        const randomScale = 0.6 + Math.random() * 0.8; 
        const finalWidth = Math.floor(baseWidth * randomScale);
        
        // 5. 隨機動畫參數
        const randomDuration = 25 + Math.random() * 20;
        const randomDelay = Math.random() * -20; 
        
        // 套用樣式
        img.style.top = `${randomTop}%`;
        img.style.left = `${finalLeft}%`;
        img.style.width = `${finalWidth}px`;
        img.style.animationDuration = `${randomDuration}s`;
        img.style.animationDelay = `${randomDelay}s`;
        
        // 將雲朵加入容器
        container.appendChild(img);
    }
}

// 確保頁面載入後執行
window.addEventListener('load', initClouds);

/* ===================================
   Title Drop Animation (Falling Blocks)
   =================================== */

window.addEventListener('load', () => {
    // 1. 建立時間軸
    const tl = gsap.timeline();

    // 2. 方塊下墜 (這是第一個動作)
    tl.from(".title-box", {
        y: -600,       // 掉落起點
        opacity: 0,
        duration: 1.2, // 掉落時間
        stagger: 0.2,  // 掉落間隔
        ease: "bounce.out", // 彈跳效果
        clearProps: "transform" // 確保動畫結束後
    });

    // 3. 簡介文字浮現
    tl.from(".hero-desc-box", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.2"); // 稍微重疊時間
});

/* ===================================
   Back to Top Button Logic
   =================================== */

const backToTopBtn = document.getElementById("backToTopBtn");
const heroSection = document.getElementById("home");

// 監聽捲動事件
window.addEventListener("scroll", () => {
    // 取得 Hero Section 的高度
    const heroHeight = heroSection.offsetHeight;
    
    // 如果捲動超過 Hero Section 的高度 (代表 Hero 已經滾出畫面)
    if (window.scrollY > heroHeight - 100) { 
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// 監聽點擊事件
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 平滑捲動回頂部
    });
});

/* ===================================
   Generate Collage Leaf Dividers
   =================================== */

function generateLeafDividers() {
    const dividers = document.querySelectorAll('.collage-divider');
    
    // 顏色順序：綠*3, 橘*3, 紅*3
    const colorSequence = [
        'green', 'green', 'green',
        'orange', 'orange', 'orange',
        'red', 'red', 'red'
    ];

    const leafBaseWidth = 40;
    const overlap = 5;

    dividers.forEach((divider, index) => {
        divider.innerHTML = '';

        const colorName = colorSequence[index % colorSequence.length];
        const imageSrc = `img/leaves/leaf_${colorName}.png`;

        const containerWidth = divider.offsetWidth;
        const step = leafBaseWidth - overlap;
        const numLeaves = Math.ceil(containerWidth / step) + 4; 

        const rowStartOffset = -40 + (Math.random() * 20);

        for (let i = 0; i < numLeaves; i++) {
            const img = document.createElement('img');
            
            img.src = imageSrc;
            img.className = 'collage-leaf';
            img.alt = 'decorative leaf';

            const leftPos = (i * step) + rowStartOffset;
            
            const randomAngle = 10 + Math.floor(Math.random() * 40); 
            
            // 顏色大小調整邏輯
            let scaleMultiplier = 1;
            if (colorName === 'red') {
                scaleMultiplier = 1.15; // 紅色：稍微比標準大一點 (原 1.3 -> 1.15)
            } else if (colorName === 'orange') {
                scaleMultiplier = 0.85; // 橘色：縮小一點 (原 1.0 -> 0.85)
            }
            // 綠色維持預設 1.0
            
            // 基礎隨機大小 (0.9 ~ 1.2) * 顏色倍率
            const randomScale = (0.9 + Math.random() * 0.3) * scaleMultiplier;

            const randomZ = Math.floor(Math.random() * 10);

            img.style.left = `${leftPos}px`;
            img.style.transform = `rotate(${randomAngle}deg) scale(${randomScale})`;
            img.style.zIndex = randomZ;

            divider.appendChild(img);
        }
    });
}

// 確保頁面載入後執行生成葉子的動作
window.addEventListener('load', generateLeafDividers);

// 當視窗大小改變時，重新計算葉子數量
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(generateLeafDividers, 200);
});

/* ===================================
   Number Counter Animation (About Section)
   =================================== */

// 使用 ScrollTrigger 觸發動畫
gsap.registerPlugin(ScrollTrigger);

// 選擇所有計數器
const counters = document.querySelectorAll('.counter');

// 建立動畫
ScrollTrigger.create({
    trigger: "#about", // 當滑動到 about 區塊時觸發
    start: "top 75%",  // 視窗 75% 處開始
    once: true,        // 只執行一次
    onEnter: () => {
      counters.forEach(counter => {
          // 取得目標數字 (例如 4000)
          const target = +counter.getAttribute('data-target');
          
          // 建立一個代理物件來跑數值
          const countObj = { val: 1 }; // 從 1 開始

          gsap.to(countObj, {
            val: target,
            duration: 2, 
            ease: "linear",
            onUpdate: () => {
              counter.innerText = Math.ceil(countObj.val).toLocaleString();
            }
        });
      });
    }
});

/* ===================================
   Modal Logic (Task Details)
   =================================== */

// 開啟 Modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 禁止背景捲動
    }
}

// 關閉所有 Modal
function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = ''; // 恢復背景捲動
}

// 事件監聽：點擊關閉按鈕
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // 避免冒泡
        closeAllModals();
    });
});

// 事件監聽：點擊背景關閉
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeAllModals();
        }
    });
});

// 事件監聽：按 ESC 鍵關閉
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

/* ===================================
   Evaluation Pie Chart (Chart.js)
   =================================== */

let evaluationChart = null; 

function initEvaluationChart() {
    const ctx = document.getElementById('evaluationChart');
    if (!ctx) return;

    // 設定全域字型與顏色
    Chart.defaults.font.family = '"Noto Sans TC", sans-serif';
    Chart.defaults.color = '#666';

    const chartData = getChartData();

    // 確保在建立新圖表前銷毀舊圖表
    if (evaluationChart) {
        evaluationChart.destroy();
    }

    evaluationChart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: 10 },
            animation: {
                animateScale: true,
                animateRotate: true,
                duration: 1000,
                easing: 'easeOutQuart'
            },
            plugins: {
                legend: { display: false }, // 側邊已有文字，此處隱藏
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#333',
                    bodyColor: '#666',
                    borderColor: 'rgba(0,0,0,0.1)',
                    borderWidth: 1,
                    padding: 12,
                    usePointStyle: true,
                    bodyFont: { size: 14, weight: 'bold' },
                    callbacks: {
                        // 只顯示權重百分比
                        title: function() {
                            return '';  // 不顯示標題
                        },
                        label: function(context) {
                            let value = context.parsed;
                            return `權重：${value}%`;
                        }
                    }
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            }
        }
    });
}

// 取得數據的函式
function getChartData() {
    let lang = 'en';
    if (typeof i18next !== 'undefined' && i18next.language) {
        lang = i18next.language.startsWith('zh') ? 'zh' : 'en';
    }
    
    // 安全取得翻譯資料，對接您更新後的 chartTooltip 鍵值
    let taskInfo;
    try {
        taskInfo = translations[lang].translation.evaluation.chartTooltip;
        if (!taskInfo) taskInfo = translations['en'].translation.evaluation.chartTooltip;
    } catch (e) {
        taskInfo = translations['en'].translation.evaluation.chartTooltip;
    }

    // 從 chartTooltip 中提取各子任務的 "name" 作為圖表標籤
    const labels = [
        taskInfo.task1.name, 
        taskInfo.task2.name, 
        taskInfo.task3.name, 
        taskInfo.task4.name
    ];

    return {
        labels: labels,
        datasets: [{
            data: [20, 30, 35, 15],
            backgroundColor: [
                '#90cdf4', // Task 1
                '#667eea', // Task 2
                '#764ba2', // Task 3
                '#d6bcfa'  // Task 4
            ],
            borderWidth: 3,
            borderColor: '#ffffff',
            hoverOffset: 15 
        }]
    };
}

// 更新圖表語言
function updateChartLanguage() {
    if (evaluationChart) {
        initEvaluationChart();
    }
}

// 視窗縮放監聽
let resizeTimerChart;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimerChart);
    resizeTimerChart = setTimeout(initEvaluationChart, 300);
});

// 頁面載入後初始化圖表
window.addEventListener('load', initEvaluationChart);

/* ===================================
   Co-organizers (協辦單位) Functionality
   =================================== */

let coOrganizersData = [];

// 載入協辦單位資料
async function loadCoOrganizers() {
    try {
        const response = await fetch('teams/co-organizers.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        
        coOrganizersData = data.sort((a, b) => a.id - b.id);
        renderCoOrganizers();
    } catch (error) {
        console.error('Error loading co-organizers:', error);
    }
}

// 渲染協辦單位 logo (加入雙語 Tooltip)
function renderCoOrganizers() {
    const slider = document.getElementById('coOrgSlider');
    if (!slider) return;

    const logosHTML = coOrganizersData.map(org => {
        if (!org.logo || org.logo.trim() === '') return '';
        const logoPath = org.logo.replace('.ai', '.png');
        
        return `
            <div class="co-org-logo-wrapper" onclick="openCoOrgModal(${org.id})">
                <img src="${logoPath}" 
                     alt="${org.name_ch || org.name_en}" 
                     class="co-org-logo"
                     onerror="this.parentElement.style.display='none'">
                <div class="co-org-tooltip">
                    <span class="lang-zh">認識他們</span>
                    <span class="lang-en">View Details</span>
                </div>
            </div>
        `;
    }).join('');

    slider.innerHTML = logosHTML + logosHTML + logosHTML + logosHTML;
}

// 開啟協辦單位 modal
function openCoOrgModal(id, dataSource) {
    const sourceData = dataSource || coOrganizersData;
    const org = sourceData.find(o => o.id === id);
    if (!org) return;

    const modal = document.getElementById('coOrgModal');
    const modalLogo = document.getElementById('modalLogo');
    const modalNameCh = document.getElementById('modalNameCh');
    const modalNameEn = document.getElementById('modalNameEn');
    const modalIntro = document.getElementById('modalIntro');
    const modalLinkContainer = document.getElementById('modalLinkContainer');

    modalLogo.src = org.logo.replace('.ai', '.png');

    modalNameCh.textContent = org.name_ch || '';
    modalNameCh.style.display = org.name_ch ? 'block' : 'none';

    modalNameEn.textContent = org.name_en || '';
    modalNameEn.style.display = org.name_en ? 'block' : 'none';

    // 支援 intro_ch/intro_en 或舊的 intro
    const lang = (typeof i18next !== 'undefined' && i18next.language && i18next.language.startsWith('zh')) ? 'zh' : 'en';
    let introContent = [];
    if (lang === 'zh' && org.intro_ch) {
        introContent = Array.isArray(org.intro_ch) ? org.intro_ch : [org.intro_ch];
    } else if (lang === 'en' && org.intro_en) {
        introContent = Array.isArray(org.intro_en) ? org.intro_en : [org.intro_en];
    } else if (org.intro) {
        introContent = Array.isArray(org.intro) ? org.intro : [org.intro];
    }
    // Fallback: if selected lang content is empty, try the other
    if (!introContent.length || introContent.every(s => !s)) {
        const fallback = lang === 'zh' ? org.intro_en : org.intro_ch;
        if (fallback) introContent = Array.isArray(fallback) ? fallback : [fallback];
    }
    modalIntro.innerHTML = introContent.filter(Boolean).map(p => `<p>${p}</p>`).join('');

    if (org.link) {
        modalLinkContainer.innerHTML = `<a href="${org.link}" target="_blank">Visit Website</a>`;
    } else {
        modalLinkContainer.innerHTML = '';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 關閉協辦單位 modal
function closeCoOrgModal() {
    const modal = document.getElementById('coOrgModal');
    if(modal) {
        modal.classList.remove('active');
        // 只有當沒有其他 Task Modal 開啟時，才恢復捲動
        if(!document.querySelector('.modal-overlay.active')) {
            document.body.style.overflow = '';
        }
    }
}

// 點擊背景關閉協辦單位 modal
document.addEventListener('click', (e) => {
    const modal = document.getElementById('coOrgModal');
    if (e.target === modal) {
        closeCoOrgModal();
    }
});

window.addEventListener('load', loadCoOrganizers);

// Reset marquee animation when section scrolls into view (ensures id=1 is first)
const coOrgSection = document.getElementById('team');
if (coOrgSection) {
    const marqObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const slider = document.getElementById('coOrgSlider');
            if (!slider) return;
            if (entry.isIntersecting) {
                // Reset animation by re-cloning the element
                slider.style.animation = 'none';
                slider.offsetHeight; // reflow
                slider.style.animation = '';
            }
        });
    }, { threshold: 0.1 });
    marqObserver.observe(coOrgSection);
}

/* ===================================
   Organizers (主辦單位) Logo Grid
   =================================== */

let organizersData = [];

async function loadOrganizers() {
    try {
        const response = await fetch('teams/organizers.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        organizersData = data.sort((a, b) => a.id - b.id);
        renderOrganizers();
    } catch (error) {
        console.error('Error loading organizers:', error);
    }
}

// Label map by id (order: 1,2,3,4)
const organizerLabels = {
    zh: [
        "競賽指導單位",
        "競賽運籌單位",
        "議題提供單位",
        "議題提供單位"
    ],
    en: [
        "Supervising Organization",
        "Organizing Committee",
        "Topic Provider (Host Organization)",
        "Topic Provider (Host Organization)"
    ]
};

function renderOrganizers() {
    const grid = document.getElementById('organizersLogoGrid');
    if (!grid) return;

    const lang = (typeof i18next !== 'undefined' && i18next.language && i18next.language.startsWith('zh')) ? 'zh' : 'en';

    grid.innerHTML = organizersData.map((org, idx) => {
        const logoPath = org.logo.replace('.ai', '.png');
        const label = (organizerLabels[lang] && organizerLabels[lang][idx]) || '';
        const nameLine = lang === 'zh' ? (org.name_ch || org.name_en) : (org.name_en || org.name_ch);
        return `
            <div class="organizer-logo-item">
                <div class="organizer-logo-wrapper" onclick="openCoOrgModal(${org.id}, organizersData)">
                    <img src="${logoPath}" alt="${org.name_ch || org.name_en}" class="organizer-logo"
                         onerror="this.parentElement.style.display='none'">
                </div>
                <div class="organizer-label">
                    <div class="organizer-label-role">${label}</div>
                    <div class="organizer-label-name">${nameLine}</div>
                </div>
            </div>
        `;
    }).join('');
}

window.addEventListener('load', loadOrganizers);

/* ===================================
   Partner Institutions Logo Grid
   =================================== */

let partnerInstitutionsData = [];

async function loadPartnerInstitutions() {
    try {
        const response = await fetch('teams/partner-institutions.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        partnerInstitutionsData = data.sort((a, b) => a.id - b.id);
        renderPartnerInstitutions();
    } catch (error) {
        console.error('Error loading partner institutions:', error);
    }
}

// Partner institution logos for the 3 tour schools (prepended, link to co-organizers modal)
const tourSchoolLogos = [
    { src: 'img/partner-institution/臺北市立大學.png', coOrgId: 1, name_ch: '臺北市立大學', name_en: 'University of Taipei' },
    { src: 'img/partner-institution/靜宜大學.png',    coOrgId: 2, name_ch: '靜宜大學', name_en: 'Providence University' },
    { src: 'img/partner-institution/高雄科技大學.png', coOrgId: 3, name_ch: '高雄科技大學', name_en: 'NKUST' }
];

function renderPartnerInstitutions() {
    const grid = document.getElementById('partnerLogosGrid');
    if (!grid) return;

    // Prepend 3 tour school logos (modal uses coOrganizersData)
    const tourHTML = tourSchoolLogos.map(s => `
        <div class="partner-logo-item">
            <div class="partner-logo-wrapper" onclick="openCoOrgModal(${s.coOrgId}, coOrganizersData)">
                <img src="${s.src}" alt="${s.name_ch}" class="partner-inst-logo"
                     onerror="this.parentElement.style.display='none'">
            </div>
        </div>
    `).join('');

    // Existing partner-institutions.json logos
    const partnerHTML = partnerInstitutionsData.map(org => {
        const logoPath = org.logo.replace('.ai', '.png');
        return `
            <div class="partner-logo-item">
                <div class="partner-logo-wrapper" onclick="openCoOrgModal(${org.id}, partnerInstitutionsData)">
                    <img src="${logoPath}" alt="${org.name_ch || org.name_en}" class="partner-inst-logo"
                         onerror="this.parentElement.style.display='none'">
                </div>
            </div>
        `;
    }).join('');

    grid.innerHTML = tourHTML + partnerHTML;
}

window.addEventListener('load', loadPartnerInstitutions);

/* ===================================
   FAQ Toggle Functionality
   =================================== */
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    faqItem.classList.toggle('active');
}

/* ===================================
   全域 ESC 鍵關閉整合 (Tasks, CoOrg, FAQ)
   =================================== */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // 1. 關閉任務詳細彈窗
        if (typeof closeAllModals === "function") closeAllModals();
        
        // 2. 關閉協辦單位彈窗
        closeCoOrgModal();
        
        // 3. 收起所有展開的 FAQ
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});
