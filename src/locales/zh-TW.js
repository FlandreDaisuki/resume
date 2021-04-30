const message = {
  docLang: 'zh-Hant-TW',
  about: {
    title: '關於我',
    paragraph: [
      '喜歡用網頁技術解決日常問題的前端工程師，開發環境是 Linux + vscode + Firefox。開發過若干與個人興趣相關的玩具專案，並分享到社群中獲得好評。',
      `平時會參與技術社群活動像 {coscup} 和各種語言或框架的 meetup 等，常常在 telegram 的技術頻道中和其他人交流討論。
      也有訂閱如 JavaScript Weekly 等電子報學習新知。`,
      `接觸網頁開發及 JavaScript 五年以上，我近期最大的學習目標研究是如何開發及維護跨平台前端程式碼的最佳實踐。
      除此之外，也對雲服務、後端架構及資料庫有興趣。`,
    ],
  },
  experience: {
    title: '經驗',
    list: [{
      header: '神達電腦軟體工程師',
      paragraph: [
        `第一個專案使用了 {vuetify} 及 {echarts} 完成 IOT 裝置的控制頁面及儀表板統計資料，並且確保在不同裝置上都可以正常操作。
        當時需要擴充一個難以維護的平面圖元件，和團隊討論後我使用 {jointjs} 幾乎獨立重寫整套圖控系統。`,
        `在前一個專案吿一段落後，開始學習 Kotlin 語言並完成數個 Spring Boot 服務並部屬到內部的 k8s 上。
        同時，改寫 {openvino} 範例程式並設計一整套資料流 PoC 網站，最終成為新專案系統的核心模組。`,
        `完成以上任務後，因應後端架構轉為 {hasura}，我負責在我們的 Vue2 專案導入 {compositionAPI} 及 {apollo}。
        並且寫了整個商品管理系統後台網頁來取代原本的解決方案。`,
      ],
    }],
  },
  education: {
    title: '學歷',
    Master: '交大多媒體工程研究所碩士',
    Bachelor: '台師大資工系學士',
  },
  works: {
    title: '作品集',
    Patchouli: `碩士班期間完成最大，也是目前星星數最多的專案。使用 Vue2 + Rollup 撰寫的 userscript 腳本，主要功能是爬蟲跟自訂篩選條件。
    也是因為這一個專案讓我接觸開源專案的運作、熟練 git 操作、以及 JavaScript 生態系。`,
    metablock: '寫 {patchouli} 順便寫的 npm 包，受到 userscript 開發者的好評與反饋。{lastWeekDownloads}',
    dmhy: `另一個爬蟲類專案，可以自動排程並下載動畫，也是我第一個接觸及使用 docker 的專案。
    最近自架了 {jellyfin} 服務可以跟此工具完美配合。`,
    Facebook: `主要解決 Facebook 的 {code} 把網址搞得難以閱讀而寫的 {webextension}。
    功能是移除網址欄及網路請求的追蹤參數。目前約有 100 個使用者。`,
    my: '放一些很雜的 userscript 和 usercss 給自己平常瀏覽網站使用。',
  },
  skills: {
    title: '技能樹',
    web: '網頁技術',
    languages: '程式語言',
    others: '其他開發相關',
    naturalLanguages: '自然語言',
    Mandarin: '中文',
    Japanese: '日文（JLPT N2）',
    English: '英文',
  },
  url: {
    COSCUP: 'https://coscup.org/2020/zh-TW/',
  },
  lastWeekDownloads: '上週被下載 {count} 次。',
};

export default message;
