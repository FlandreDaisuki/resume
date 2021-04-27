import{c as e,a,o as t,b as s,d as l,r as n,w as o,e as r,u as i,f as c,g as u,p,h as d,i as h,j as m,v as g,t as w,k,F as b,l as f,m as v}from"./vendor.5c13e125.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const s=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,n)=>{const o=new URL(e,s);if(self[a].moduleMap[o])return t(self[a].moduleMap[o]);const r=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${e}`)),l(i)},onload(){t(self[a].moduleMap[o]),l(i)}});document.head.appendChild(i)})),self[a].moduleMap={}}}("/assets/");const y=e({legacy:!1,locale:"zh-TW",fallbackLocale:"en",messages:{"zh-TW":{docLang:"zh-Hant-TW",about:{title:"關於我",paragraph:["喜歡用網頁技術解決日常問題的前端工程師，開發環境是 Linux + vscode + Firefox。開發過若干與個人興趣相關的玩具專案，並分享到社群中獲得好評。","平時會參與技術社群活動像 {coscup} 和各種語言或框架的 meetup 等，常常在 telegram 的技術頻道中和其他人交流討論。\n      也有訂閱如 JavaScript Weekly 等電子報學習新知。","研究如何開發及維護跨平台前端程式碼的最佳實踐是我近期最大的學習目標。\n      除此之外，也對雲服務、後端架構及資料庫有興趣。"]},experience:{title:"經驗",list:[{header:"神達電腦軟體工程師",paragraph:["第一個專案使用了 {vuetify} 及 {echarts} 完成 IOT 裝置的控制頁面及儀表板統計資料，並且確保在不同裝置上都可以正常操作。\n        當時需要擴充一個難以維護的平面圖元件，和團隊討論後我使用 {jointjs} 幾乎獨立重寫整套圖控系統。","在前一個專案吿一段落後，開始學習 Kotlin 語言並完成數個 Spring Boot 服務並部屬到內部的 k8s 上。\n        同時，改寫 {openvino} 範例程式並設計一整套資料流 PoC 網站，最終成為新專案系統的核心模組。","完成以上任務後，因應後端架構轉為 {hasura}，我負責在我們的 Vue2 專案導入 {compositionAPI} 及 {apollo}。\n        並且寫了整個商品管理系統後台網頁來取代原本的解決方案。"]}]},education:{title:"學歷",Master:"交大多媒體工程研究所碩士",Bachelor:"台師大資工系學士"},works:{title:"作品集",Patchouli:"碩士班期間完成最大，也是目前星星數最多的專案。使用 Vue2 + Rollup 撰寫的 userscript 腳本，主要功能是爬蟲跟自訂篩選條件。\n    也是因為這一個專案讓我接觸開源專案的運作、熟練 git 操作、以及 JavaScript 生態系。",metablock:"寫 {patchouli} 順便寫的 npm 包，受到 userscript 開發者的好評與反饋。{lastWeekDownloads}",dmhy:"另一個爬蟲類專案，可以自動排程並下載動畫，也是我第一個接觸及使用 docker 的專案。\n    最近自架了 {jellyfin} 服務可以跟此工具完美配合。",Facebook:"主要解決 Facebook 的 {code} 把網址搞得難以閱讀而寫的 {webextension}。\n    功能是移除網址欄及網路請求的追蹤參數。目前約有 100 個使用者。",my:"放一些很雜的 userscript 和 usercss 給自己平常瀏覽網站使用。"},skills:{title:"技能樹",web:"網頁技術",languages:"程式語言",others:"其他開發相關",naturalLanguages:"自然語言",Mandarin:"中文",Japanese:"日文（JLPT N2）",English:"英文"},url:{COSCUP:"https://coscup.org/2020/zh-TW/"},lastWeekDownloads:"上週被下載 {count} 次。"},en:{docLang:"en",about:{title:"About me",paragraph:["I am a front-end engineer that like using web tech to simplify routines.\n      My favorite environment is Linux, Firefox and VSCode.\n      I built some personal side projects for my hobby and shared source on GitHub,\n      then surprisingly got feedbacks and thumbs from communities.","I usually participate in technical community activities or meetups, such as {coscup}.\n      I often learn new knowledge from newsletters like JavaScript Weekly and discuss with others on telegram groups.","My short-term goal is researching the best practice for cross-platform UI development.\n      Recently, I am also interested in cloud service, software architecture and DBMS."]},experience:{title:"Experience",list:[{header:"Software Engineer {'@'} MiTAC Inc.",paragraph:["I cooperated with designers to complete the IOT dashboard ans visualized devices status by {vuetify} and {echarts} in my first task.\n        We also tried our best to make it support multiple platforms.\n        Then, I rewrote the entire SCADA HMI by {jointjs} almost independently to replace a legacy floor plan component.","After previous task, I studied Kotlin and finished some services for Spring Boot and deployed to our internal k8s.\n        At the same time, I modified {openvino} examples and designed a PoC website that demonstrate the data flow.\n        It has finally become a core module in our new project.","Few weeks later, our leader decided to change back-end architecture to {hasura}.\n        I introduced {compositionAPI} and {apollo} to our Vue2 project\n        and built up a product management system website to replace the original one."]}]},education:{title:"Education",Master:"Master of Institute of Multimedia Engineering, NCTU",Bachelor:"Bachelor of Computer Science and Information Engineering, NTNU"},works:{title:"Works",Patchouli:"This is the largest project completed during the master's class and get the largest number of stars in GitHub.\n    The project is an userscript which crawls website and filters data, made by Vue2 and Rollup.\n    It is also the project making me familiar with open source collaboration, git commands and ecosystem of JavaScript.",metablock:"A helper npm package built for {patchouli} development,\n    which also receives good feedbacks from other userscript developers.\n    {lastWeekDownloads}",dmhy:"Another crawler toy project which is a CLI tool that help me remember which anime episode I've seen.\n    It is also my first project to contact and use docker.\n    Recently, I self-host {jellyfin} service and can work with this project perfectly.",Facebook:"The {webextension} solve the URL messed up by {code} from Facebook, and remove other tracker parameters.\n    It has about 100 users on Firefox.",my:"Store some useful userscript and usercss for my browser."},skills:{title:"Skills",web:"Web Technologies",languages:"Programming Languages",others:"Others",naturalLanguages:"Natural Languages",Mandarin:"Mandarin",Japanese:"Japanese (JLPT N2)",English:"English"},url:{COSCUP:"https://coscup.org/2020/en"},lastWeekDownloads:"Download {count} times last week."}}});const x={props:{enabled:Boolean},emits:["update:enabled"],setup:(e,{emit:t})=>({overlayStyleClass:a((()=>({hidden:!e.enabled,flex:e.enabled}))),onOutsidePointerDown:()=>t("update:enabled",!1)})},I=r()(((e,a,r,i,c,u)=>(t(),s("div",{class:["overlay",i.overlayStyleClass],onPointerdown:a[3]||(a[3]=(...e)=>i.onOutsidePointerDown&&i.onOutsidePointerDown(...e)),onTouchstart:a[4]||(a[4]=(...e)=>i.onOutsidePointerDown&&i.onOutsidePointerDown(...e))},[l("div",{class:"inner-overlay",onPointerdown:a[1]||(a[1]=o((()=>{}),["stop"])),onTouchstart:a[2]||(a[2]=o((()=>{}),["stop"]))},[n(e.$slots,"default",{},void 0,!0)],32)],34))));x.render=I,x.__scopeId="data-v-0b7cc3d0";const j={},D={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},T=l("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"},null,-1);j.render=function(e,a){return t(),s("svg",D,[T])};const L={},M={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--mdi",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_=l("path",{fill:"currentColor",d:"M20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"},null,-1);L.render=function(e,a){return t(),s("svg",M,[_])};const C={},F={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":"true",role:"img",class:"iconify iconify--uil",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},P=l("path",{fill:"currentColor",d:"M11.994 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10zm3.18 15.152a.705.705 0 0 1-1.002.352l-2.715-2.11l-1.742 1.608a.3.3 0 0 1-.285.039l.334-2.989l.01.009l.007-.059s4.885-4.448 5.084-4.637c.202-.189.135-.23.135-.23c.012-.23-.361 0-.361 0l-6.473 4.164l-2.695-.918s-.414-.148-.453-.475c-.041-.324.466-.5.466-.5l10.717-4.258s.881-.392.881.258z"},null,-1);C.render=function(e,a){return t(),s("svg",F,[P])};var E="/assets/VscodeIconsFileTypeJsOfficial.025cff3e.svg",S="/assets/TwemojiManGesturingOk.fcbaed46.svg";const O={components:{Overlay:x,GitHubIcon:j,EmailIcon:L,TelegramIcon:C},setup(){const{t:e,locale:t}=i(),s=c(" 30+ ");(async()=>{const e=await fetch("https://api.npmjs.org/downloads/point/last-week/rollup-plugin-userscript-metablock");if(!e.ok){const{status:a,statusText:t}=e;throw new Error(`FetchError: ${a} ${t}`)}const a=await e.json();if(!Number.isFinite(a.downloads))throw new Error(`TypeError: ${a}`);s.value=` ${a.downloads} `})().catch(console.error);const l=c(""),n=a((()=>l.value?`https://github.com/FlandreDaisuki/resume/releases/download/${l.value}/resume.${t.value}.pdf`:"https://github.com/FlandreDaisuki/resume/releases/latest"));(async()=>{const e=await fetch("https://api.github.com/repos/FlandreDaisuki/resume/releases/latest");if(!e.ok){const{status:a,statusText:t}=e;throw new Error(`FetchError: ${a} ${t}`)}const a=await e.json();l.value=a.tag_name})().catch(console.error),window.location.search&&(t.value=new URLSearchParams(window.location.search).get("lang")||"zh-TW");const o=c(!1),r=c("");return u((()=>{window.history.replaceState(null,"",`?lang=${t.value}`),document.documentElement.lang=e("docLang"),f.toDataURL(window.location.href,{margin:2},((e,a)=>{e?console.error(e):r.value=a}))})),{t:e,locale:t,mailTo:`mailto:${atob("dmJubTEyM2NAZ21haWwuY29t")}`,metablockDownloadsLastWeek:s,isQrcodeOverlayEnabled:o,qrcodeDataUrl:r,pdfDownloadUrl:n}}},U=r();p("data-v-871143a4");const W=l("option",{value:"zh-TW"}," 繁體中文 ",-1),A=l("option",{value:"en"}," English ",-1),R=l("img",{class:"avatar",alt:"avatar",src:"/assets/avatar.5db70201.jpg"},null,-1),V=l("div",{class:"grid text-left mr-auto"},[l("span",{class:"text-3xl"},"連俊豪"),l("span",{class:"text-xl"},"Lien Chun-Hao")],-1),J={class:"contact-list"},$=l("span",{class:"e-mail"},"@",-1),B={href:"https://github.com/FlandreDaisuki",target:"_blank"},z=l("span",null,"FlandreDaisuki",-1),G={href:"https://t.me/flandrekawaii",target:"_blank"},N=l("span",null,"@flandrekawaii",-1),H={class:"print:layout-column-2 md:layout-column-2 text-left"},Q={class:"about"},q={class:"experience"},K={class:"subtitle"},Y=l("span",{class:"duration"},"2019.11 ~ 2021.4",-1),Z=l("a",{href:"https://vuetifyjs.com",target:"_blank"},"Vuetify",-1),X=l("a",{href:"https://echarts.apache.org/",target:"_blank"},"Apache ECharts",-1),ee=l("a",{href:"https://www.jointjs.com",target:"_blank"},"joint.js",-1),ae=l("a",{href:"https://software.intel.com/content/www/us/en/develop/tools/openvino-toolkit.html",target:"_blank"},"OpenVINO",-1),te=l("a",{href:"https://hasura.io",target:"_blank"},"Hasura",-1),se=l("a",{href:"https://github.com/vuejs/composition-api",target:"_blank"},"Composition API",-1),le=l("a",{href:"https://www.apollographql.com/docs/react/",target:"_blank"},"Apollo Client",-1),ne={class:"education"},oe={class:"subtitle"},re=l("span",{class:"duration"},"2015 ~ 2019",-1),ie={class:"subtitle"},ce=l("span",{class:"duration"},"2011 ~ 2015",-1),ue={class:"works"},pe={target:"_blank",href:"https://github.com/FlandreDaisuki/Patchouli"},de=l("span",null,"Patchouli",-1),he={target:"_blank",href:"https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock"},me=l("span",null,"rollup-plugin-userscript-metablock",-1),ge=l("a",{target:"_blank",href:"https://github.com/FlandreDaisuki/Patchouli"},"Patchouli",-1),we={target:"_blank",href:"https://www.npmjs.com/package/rollup-plugin-userscript-metablock"},ke={target:"_blank",href:"https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me"},be=l("span",null,"Facebook-Dont-Track-Me",-1),fe=l("code",null,"fbclid",-1),ve=l("a",{href:"https://addons.mozilla.org/firefox/addon/facebook-dont-track-me/",target:"_blank"},"WebExtension",-1),ye={target:"_blank",href:"https://github.com/FlandreDaisuki/My-Browser-Extensions"},xe=l("span",null,"My-Browser-Extensions",-1),Ie={class:"skills"},je=l("ul",null,[l("li",null,[l("img",{src:"/assets/LogosVue.18379001.svg",alt:"vue"}),l("span",null,"Vue2 & 3")]),l("li",null,[l("img",{src:"/assets/VscodeIconsFileTypeCss.c3251b05.svg",alt:"css"}),l("span",null,"CSS3")]),l("li",null,[l("img",{src:E,alt:"js"}),l("span",null,"JavaScript")]),l("li",null,[l("img",{src:"/assets/LogosGraphql.25e9cf2c.svg",alt:"graphql"}),l("span",null,"GraphQL")]),l("li",null,[l("img",{src:"/assets/LogosNodejsIcon.5f764c61.svg",alt:"nodejs"}),l("span",null,"NodeJS")]),l("li",null,[l("img",{src:"/assets/LogosRollupjs.1d5cfb13.svg",alt:"rollup"}),l("span",null,"Rollup")])],-1),De=l("ul",null,[l("li",null,[l("img",{src:E,alt:"js"}),l("span",null,"JavaScript")]),l("li",null,[l("img",{src:"/assets/VscodeIconsFileTypeKotlin.46abc2cf.svg",alt:"kotlin"}),l("span",null,"Kotlin")]),l("li",null,[l("img",{src:"/assets/VscodeIconsFileTypePython.e1715dd6.svg",alt:"python"}),l("span",null,"Python3")])],-1),Te=l("ul",null,[l("li",null,[l("img",{src:"/assets/VscodeIconsFileTypeGit.731587ad.svg",alt:"git"}),l("span",null,"Git")]),l("li",null,[l("img",{src:"/assets/LogosDockerIcon.31e2a058.svg",alt:"docker"}),l("span",null,"Docker & Docker Compose")]),l("li",null,[l("img",{src:"/assets/LogosLinuxTux.72d7d16d.svg",alt:"linux server"}),l("span",null,"Linux server")]),l("li",null,[l("img",{src:"/assets/LogosOpengl.7610dda9.svg",alt:"Computer Graphics"}),l("span",null,"Computer Graphics")])],-1),Le=l("img",{src:S,alt:"can speak"},null,-1),Me=l("img",{src:S,alt:"can speak"},null,-1),_e=l("img",{src:S,alt:"can speak"},null,-1),Ce=l("img",{src:"/assets/MdiQrcodeScan.e847037f.svg",alt:"get QR code"},null,-1),Fe=l("img",{src:"/assets/CarbonDocumentPdf.750a64f9.svg",alt:"get PDF"},null,-1);d();const Pe=U(((e,a,n,o,r,i)=>{const c=h("EmailIcon"),u=h("GitHubIcon"),p=h("TelegramIcon"),d=h("i18n-t"),f=h("Overlay");return t(),s(b,null,[l("nav",null,[m(l("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.locale=e)},[W,A],512),[[g,o.locale]])]),l("header",null,[R,V,l("ul",J,[l("li",null,[l("a",{href:o.mailTo,target:"_blank"},[l(c,{class:"icon"}),$],8,["href"])]),l("li",null,[l("a",B,[l(u,{class:"icon"}),z])]),l("li",null,[l("a",G,[l(p,{class:"icon"}),N])])])]),l("main",H,[l("section",Q,[l("h2",null,w(o.t("about.title")),1),l("p",null,w(o.t("about.paragraph[0]")),1),l(d,{keypath:"about.paragraph[1]",tag:"p"},{coscup:U((()=>[l("a",{href:o.t("url.COSCUP"),target:"_blank"},"COSCUP",8,["href"])])),_:1}),l("p",null,w(o.t("about.paragraph[2]")),1)]),l("section",q,[l("h2",null,w(o.t("experience.title")),1),l("h3",null,[l("span",K,w(o.t("experience.list[0].header")),1),Y]),l(d,{keypath:"experience.list[0].paragraph[0]",tag:"p"},{vuetify:U((()=>[Z])),echarts:U((()=>[X])),jointjs:U((()=>[ee])),_:1}),l(d,{keypath:"experience.list[0].paragraph[1]",tag:"p"},{openvino:U((()=>[ae])),_:1}),l(d,{keypath:"experience.list[0].paragraph[2]",tag:"p"},{hasura:U((()=>[te])),compositionAPI:U((()=>[se])),apollo:U((()=>[le])),_:1})]),l("section",ne,[l("h2",null,w(o.t("education.title")),1),l("h3",null,[l("span",oe,w(o.t("education.Master")),1),re]),l("h3",null,[l("span",ie,w(o.t("education.Bachelor")),1),ce])]),l("section",ue,[l("h2",null,w(o.t("works.title")),1),l("h3",null,[l("a",pe,[l(u,{class:"github-icon"}),de])]),l("p",null,w(o.t("works.Patchouli")),1),l("h3",null,[l("a",he,[l(u,{class:"github-icon"}),me])]),l(d,{keypath:"works.metablock",tag:"p"},{patchouli:U((()=>[ge])),lastWeekDownloads:U((()=>[l("a",we,w(o.t("lastWeekDownloads",{count:o.metablockDownloadsLastWeek})),1)])),_:1}),l("h3",null,[l("a",ke,[l(u,{class:"github-icon"}),be])]),l(d,{keypath:"works.Facebook",tag:"p"},{code:U((()=>[fe])),webextension:U((()=>[ve])),_:1}),l("h3",null,[l("a",ye,[l(u,{class:"github-icon"}),xe])]),l("p",null,w(o.t("works.my")),1)]),l("section",Ie,[l("h2",null,w(o.t("skills.title")),1),l("h3",null,w(o.t("skills.web")),1),je,l("h3",null,w(o.t("skills.languages")),1),De,l("h3",null,w(o.t("skills.others")),1),Te,l("h3",null,w(o.t("skills.naturalLanguages")),1),l("ul",null,[l("li",null,[Le,k(w(o.t("skills.Mandarin")),1)]),l("li",null,[Me,k(w(o.t("skills.Japanese")),1)]),l("li",null,[_e,k(w(o.t("skills.English")),1)])])])]),l("footer",null,[l("ul",null,[l("li",null,[l("button",{onClick:a[2]||(a[2]=e=>o.isQrcodeOverlayEnabled=!0)},[Ce])]),l("li",null,[l("a",{target:"_blank",href:o.pdfDownloadUrl},[Fe],8,["href"])])]),l(f,{enabled:o.isQrcodeOverlayEnabled,"onUpdate:enabled":a[3]||(a[3]=e=>o.isQrcodeOverlayEnabled=e)},{default:U((()=>[l("img",{src:o.qrcodeDataUrl,alt:"QR code to this resume"},null,8,["src"])])),_:1},8,["enabled"])])],64)}));O.render=Pe,O.__scopeId="data-v-871143a4";v(O).use(y).mount("#app");
