import{p as s,a as l,o as a,c as e,b as t,F as n,w as i,d as c,e as o}from"./vendor.0e6c34fe.js";!function(s=".",l="__import__"){try{self[l]=new Function("u","return import(u)")}catch(a){const e=new URL(s,location),t=s=>{URL.revokeObjectURL(s.src),s.remove()};self[l]=s=>new Promise(((a,n)=>{const i=new URL(s,e);if(self[l].moduleMap[i])return a(self[l].moduleMap[i]);const c=new Blob([`import * as m from '${i}';`,`${l}.moduleMap['${i}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){n(new Error(`Failed to import: ${s}`)),t(o)},onload(){a(self[l].moduleMap[i]),t(o)}});document.head.appendChild(o)})),self[l].moduleMap={}}}("/assets/");var r="/assets/github-brands.fde2ab7c.svg",u="/assets/VscodeIconsFileTypeJsOfficial.025cff3e.svg";const p=i("data-v-2a9bcda7");s("data-v-2a9bcda7");const d={id:"header"},g=t("img",{id:"avatar",alt:"avatar",src:"/assets/avatar.5db70201.jpg"},null,-1),m=t("div",{class:"grid text-left mr-auto"},[t("span",{class:"text-3xl"},"連俊豪"),t("span",{class:"text-xl"},"Lien Chun-Hao")],-1),h={class:"contact-list"},b=t("img",{src:"/assets/envelope-solid.7d915278.svg",alt:""},null,-1),k=t("span",{class:"e-mail"},"@",-1),v=t("img",{src:r,alt:""},null,-1),f=t("span",null,"FlandreDaisuki",-1),y=t("img",{src:"/assets/telegram-brands.1a7540bf.svg",alt:""},null,-1),F=t("span",null,"@flandrekawaii",-1),L=t("main",{class:"print:layout-column-2 md:layout-column-2 text-left"},[t("section",{class:"about"},[t("h2",null,"關於我"),t("p",null," 喜歡用網頁技術解決日常問題的前端工程師，開發環境是 Linux + vscode + Firefox。興趣是看動畫，因此大部分的玩具專案都跟動漫有關，並寫些小工具或自己架服務來提昇效率。 "),t("p",null," 認為美的程式碼應該是不需要開 IDE 就可以看完的，因此討厭 TypeScript 的複雜型別，但也認為 TypeScript 的簡單型別對平常開發很有幫助。 "),t("p",null," 平時會參與技術社群活動像 COSCUP 和各種語言或框架的 meetup 等，也常常在 telegram 的技術頻道中和其他人交流討論，也有訂閱如 JavaScript Weekly 等電子報學習新知。 "),t("p",null," 目前對雲服務、UX設計、後端架構及資料庫有興趣。 ")]),t("section",{class:"experience"},[t("h2",null,"經驗"),t("h3",null,[t("span",{class:"title"},"神達電腦前端工程師"),t("span",{class:"duration"},"2019.11 ~ 2021.3")]),t("p",null," 前半年專注於串接 IOT 裝置的控制及與設計合作完成 dashboard 及裝置數值的視覺化，也使用 joint.js 幾乎獨立完成整套圖控系統。 "),t("p",null," 下半年學習 kotlin 並完成數個服務並部屬到內部的 k8s 上、接觸 OpenVINO 並使用 python 改寫範例程式成為智慧點餐系統的核心模組。並為該模組應用設計了整套流程並實作了一套包含前後端服務的 PoC。也寫了一些腳本來自動部屬 kubeless function 和 userscript 來輔助開發。 "),t("p",null,[c(" 農曆年前後，使用 Hasura 和 Apollo client 串接 GraphQL 並在我們的 Vue2 專案導入 "),t("a",{target:"_blank",href:"https://github.com/vuejs/composition-api"},"composition API"),c(" 並積極使用。 ")]),t("h3",null,[t("span",{class:"title"},"自學 JavaScript"),t("span",{class:"duration"},"2015 ~ 2019")])]),t("section",{class:"education"},[t("h2",null,"學歷"),t("h3",null,[t("span",{class:"title"},"交大計算機圖學實驗室碩士"),t("span",{class:"duration"},"2015 ~ 2019")]),t("h3",null,[t("span",{class:"title"},"台師大資工系學士"),t("span",{class:"duration"},"2011 ~ 2015")])]),t("section",{class:"works"},[t("h2",null,"作品集"),t("h3",null,[t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/Patchouli"},[t("img",{src:r,class:"github-link-icon"}),t("span",null,"Patchouli")])]),t("p",null," 碩士班期間完成最大，也是目前星星數最多的專案。使用 Vue2 + rollup 撰寫的 userscript 腳本，主要功能是爬蟲跟自訂篩選條件。也是因為這一個專案讓我接觸開源專案的運作、熟練 git 操作、以及 JavaScript 生態系。 "),t("h3",null,[t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock"},[t("img",{src:r,class:"github-link-icon"}),t("span",null,"rollup-plugin-userscript-metablock")])]),t("p",null,[c(" 寫 "),t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/Patchouli"},"Patchouli"),c(" 順便寫的 npm 包，意外地蠻多人使用。 ")]),t("h3",null,[t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/dmhy-subscribe"},[t("img",{src:r,class:"github-link-icon"}),t("span",null,"dmhy-subscribe")])]),t("p",null," 另一個爬蟲，這是解決我看動畫常常記不住看到第幾集寫出來的 CLI 工具。也是我第一個接觸及使用 docker 的專案。最近自架了 jellyfin 服務可以跟此 CLI 完美配合。 "),t("h3",null,[t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me"},[t("img",{src:r,class:"github-link-icon"}),t("span",null,"Facebook-Dont-Track-Me")])]),t("p",null,[c(" Facebook 的 "),t("code",null,"fbclid"),c(" 剛出現時，把網址搞得難以閱讀而寫的 WebExtension。解決網址欄及網路請求的追蹤，程式碼有點醜但至今運作良好。 ")]),t("h3",null,[t("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/My-Browser-Extensions"},[t("img",{src:r,class:"github-link-icon"}),t("span",null,"My-Browser-Extensions")])]),t("p",null," 放一些很雜的 userscript 和 usercss 給自己平常瀏覽網站使用。 ")]),t("section",{class:"skills"},[t("h2",null,"技能樹"),t("h3",null,"網頁技術"),t("div",{class:"image-grid"},[t("img",{src:"/assets/LogosVue.18379001.svg",alt:"vue"}),t("img",{src:"/assets/VscodeIconsFileTypeCss.c3251b05.svg",alt:"css"}),t("img",{src:u,alt:"js"}),t("img",{src:"/assets/LogosGraphql.25e9cf2c.svg",alt:"graphql"}),t("img",{src:"/assets/LogosNodejsIcon.5f764c61.svg",alt:"nodejs"}),t("img",{src:"/assets/LogosRollupjs.1d5cfb13.svg",alt:"rollup"})]),t("h3",null,"程式語言"),t("div",{class:"image-grid"},[t("img",{src:u,alt:"js"}),t("img",{src:"/assets/VscodeIconsFileTypeKotlin.46abc2cf.svg",alt:"kotlin"}),t("img",{src:"/assets/VscodeIconsFileTypePython.e1715dd6.svg",alt:"python"})]),t("h3",null,"其他開發相關"),t("div",{class:"image-grid"},[t("img",{src:"/assets/LogosDockerIcon.31e2a058.svg",alt:"docker"}),t("img",{src:"/assets/LogosLinuxTux.72d7d16d.svg",alt:"linux server"}),t("img",{src:"/assets/LogosOpengl.7610dda9.svg",alt:"Computer Graphics"}),t("img",{src:"/assets/VscodeIconsFileTypeGit.731587ad.svg",alt:"git"})])])],-1);l();const x={expose:[],setup(s){const l=s=>{const l=document.createElement("a");l.href=s,l.target="_blank",document.body.appendChild(l),l.click(),l.remove()},i=()=>l(atob("bWFpbHRvOnZibm0xMjNjQGdtYWlsLmNvbQ=="));return p(((s,c)=>(a(),e(n,null,[t("header",d,[g,m,t("ul",h,[t("li",{onClick:i},[b,k]),t("li",{onClick:c[1]||(c[1]=s=>l("https://github.com/FlandreDaisuki"))},[v,f]),t("li",{onClick:c[2]||(c[2]=s=>l("https://t.me/flandrekawaii"))},[y,F])])]),L],64))))},__scopeId:"data-v-2a9bcda7"};o(x).mount("#app");
