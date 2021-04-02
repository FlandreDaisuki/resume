<template>
  <header>
    <img class="avatar" alt="avatar" src="./assets/avatar.jpg">
    <div class="grid text-left mr-auto">
      <span class="text-3xl">連俊豪</span>
      <span class="text-xl">Lien Chun-Hao</span>
    </div>
    <ul class="contact-list">
      <li>
        <a :href="mailTo" target="_blank">
          <EmailIcon class="icon" />
          <!-- prevent email spam -->
        <span class="e-mail">@</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/FlandreDaisuki" target="_blank">
          <GitHubIcon class="icon" />
        <span>FlandreDaisuki</span>
        </a>
      </li>
      <li>
        <a href="https://t.me/flandrekawaii" target="_blank">
          <TelegramIcon class="icon" />
        <span>@flandrekawaii</span>
        </a>
      </li>
    </ul>
  </header>

  <main class="print:layout-column-2 md:layout-column-2 text-left">
    <section class="about">
      <h2>關於我</h2>
      <p>
        喜歡用網頁技術解決日常問題的前端工程師，開發環境是 Linux + vscode + Firefox。開發過若干與個人興趣相關的玩具專案，並分享到社群中獲得好評。
      </p>
      <p>
        平時會參與技術社群活動像 COSCUP 和各種語言或框架的 meetup 等，常常在 telegram 的技術頻道中和其他人交流討論。
        也有訂閱如 JavaScript Weekly 等電子報學習新知。
      </p>
      <p>
        目前對雲服務、UX設計、後端架構及資料庫有興趣。
      </p>
    </section>
    <section class="experience">
      <h2>經驗</h2>
      <h3>
        <span class="title">神達電腦前端工程師</span>
        <span class="duration">2019.11 ~ 2021.4</span>
      </h3>
      <p>
        前半年專注於串接 IOT 裝置的控制及與設計合作完成 dashboard 及裝置數值視覺化，也使用 <a href="https://www.jointjs.com">joint.js</a> 幾乎獨立完成整套圖控系統。
      </p>
      <p>
        在前一個專案吿一段落後，能力受到主管的信賴而開始學習 Kotlin 語言跟電腦視覺的機器學習框架 <a href="https://software.intel.com/content/www/us/en/develop/tools/openvino-toolkit.html" target="_blank">OpenVINO</a> 。
        半年左右的時間完成數個 Spring Boot 服務並部屬到內部的 k8s 上。
      </p>
      <p>
        同時，使用 python 改寫 OpenVINO 範例程式成為智慧點餐系統的核心模組。
        也為該模組應用設計了從後端服務間溝通到前端呈現的整套流程 PoC，和一些 scripts 來自動部屬 kubeless function 和 userscript 來輔助開發。
      </p>
      <p>
        農曆年前後，使用 <a href="https://hasura.io" target="_blank">Hasura</a> 和 Apollo client 串接 GraphQL 並在我們的 Vue2 專案導入 <a href="https://github.com/vuejs/composition-api" target="_blank">composition API</a>，也在組內分享 composition API 的使用時機及實作細節。
        因為在串接 Firebase API 上遇到和 Vue lifecycle 及 GraphQL Auth 的非同步問題，由我負責從各個使用到的開源套件中查找原始碼並順利解決問題。
      </p>
      <h3>
        <span class="title">自學 JavaScript</span>
        <span class="duration">2015 ~ 2019</span>
      </h3>
      <p>碩士班期間因為研究的領域是 Computer Graphics 中的 Physical-Based Offline Rendering。相對於 Realtime Rendering，大部分時間都在等待計算結果，於是就有比較多時間來研究其他領域。</p>
      <p>當時 <a href="https://www.electronjs.org">Electron</a> 作為使用網頁技術打包成桌面程式的概念讓我有很大的動力開始研究網頁技術。</p>
    </section>
    <section class="education">
      <h2>學歷</h2>
      <h3>
        <span class="title">交大多媒體工程研究所碩士</span>
        <span class="duration">2015 ~ 2019</span>
      </h3>
      <h3>
        <span class="title">台師大資工系學士</span>
        <span class="duration">2011 ~ 2015</span>
      </h3>
    </section>
    <section class="works">
      <h2>作品集</h2>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/Patchouli">
          <GitHubIcon class="github-icon" />
          <span>Patchouli</span>
        </a>
      </h3>
      <p>
        碩士班期間完成最大，也是目前星星數最多的專案。使用 Vue2 + rollup 撰寫的 userscript 腳本，主要功能是爬蟲跟自訂篩選條件。也是因為這一個專案讓我接觸開源專案的運作、熟練 git 操作、以及 JavaScript 生態系。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock">
          <GitHubIcon class="github-icon" />
          <span>rollup-plugin-userscript-metablock</span>
        </a>
      </h3>
      <p>
        寫 <a target="_blank" href="https://github.com/FlandreDaisuki/Patchouli">Patchouli</a> 順便寫的 npm 包，受到 userscript 開發者的好評與反饋。
        <a target="_blank" href="https://www.npmjs.com/package/rollup-plugin-userscript-metablock">上週被下載{{ metablockDownloadsLastWeek }}次。</a>
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/dmhy-subscribe">
          <GitHubIcon class="github-icon" />
          <span>dmhy-subscribe</span>
        </a>
      </h3>
      <p>
        另一個爬蟲類專案，這是解決我看動畫常常記不住看到第幾集寫出來的 CLI 工具，也是我第一個接觸及使用 docker 的專案。
        最近自架了 <a target="_blank" href="https://jellyfin.org/">Jellyfin</a> 服務可以跟此 CLI 完美配合。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me">
          <GitHubIcon class="github-icon" />
          <span>Facebook-Dont-Track-Me</span>
        </a>
      </h3>
      <p>
        Facebook 的 <code>fbclid</code> 剛出現時，把網址搞得難以閱讀而寫的 <a href="https://addons.mozilla.org/zh-TW/firefox/addon/facebook-dont-track-me/" target="_blank">WebExtension</a>。
        解決網址欄及網路請求的追蹤參數，程式碼有點醜但至今運作良好，目前也有約 100 個使用者。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/My-Browser-Extensions">
          <GitHubIcon class="github-icon" />
          <span>My-Browser-Extensions</span>
        </a>
      </h3>
      <p>
        放一些很雜的 userscript 和 usercss 給自己平常瀏覽網站使用。
      </p>
    </section>
    <section class="skills">
      <h2>技能樹</h2>
      <h3>網頁技術</h3>
      <ul>
        <li><img src="./assets/skills/LogosVue.svg" alt="vue"><span>Vue2 &amp; 3</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeCss.svg" alt="css"><span>CSS3</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js"><span>JavaScript (ES6)</span></li>
        <li><img src="./assets/skills/LogosGraphql.svg" alt="graphql"><span>GraphQL</span></li>
        <li><img src="./assets/skills/LogosNodejsIcon.svg" alt="nodejs"><span>NodeJS</span></li>
        <li><img src="./assets/skills/LogosRollupjs.svg" alt="rollup"><span>Rollup</span></li>
      </ul>
      <h3>程式語言</h3>
      <ul>
        <li><img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js"><span>JavaScript (ES6)</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeKotlin.svg" alt="kotlin"><span>Kotlin</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypePython.svg" alt="python"><span>Python3</span></li>
      </ul>
      <h3>其他開發相關</h3>
      <ul>
        <li><img src="./assets/skills/VscodeIconsFileTypeGit.svg" alt="git"><span>Git</span></li>
        <li><img src="./assets/skills/LogosDockerIcon.svg" alt="docker"><span>Docker &amp; Docker Compose</span></li>
        <li><img src="./assets/skills/LogosLinuxTux.svg" alt="linux server"><span>Linux server</span></li>
        <li><img src="./assets/skills/LogosOpengl.svg" alt="Computer Graphics"><span>Computer Graphics</span></li>
      </ul>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue';
import GitHubIcon from './components/IconGitHub.vue';
import EmailIcon from './components/IconEmail.vue';
import TelegramIcon from './components/IconTelegram.vue';

export default {
  components: { GitHubIcon, EmailIcon, TelegramIcon },
  setup() {
const email = 'dmJubTEyM2NAZ21haWwuY29t';

    const metablockDownloadsLastWeek = ref('超過 30 ');
    (async() => {
      const url = 'https://api.npmjs.org/downloads/point/last-week/rollup-plugin-userscript-metablock';
      const resp = await fetch(url);
      if (!resp.ok) {
        const { status, statusText } = resp;
        throw new Error(`FetchError: ${status} ${statusText}`);
      }
      const data = await resp.json();
      if (!Number.isFinite(data.downloads)) {
        throw new Error(`TypeError: ${data}`);
      }
      metablockDownloadsLastWeek.value = ` ${data.downloads} `;
    })().catch(console.error);

    return {
      mailTo: `mailto:${atob(email)}`,
      metablockDownloadsLastWeek,
    };
  },
};

</script>

<style scoped>
header {
  @apply flex flex-wrap items-center justify-start p-2 relative;
}

.avatar {
  @apply rounded-full w-16 h-16 inline-block mr-4;
}

.contact-list {
  @apply text-left grid gap-x-2 mt-6 ;
  @apply md:grid-cols-2 md:mt-0;
  @apply print:grid-cols-2 print:mt-0;
}
.contact-list > li {
  @apply p-1;
}
.contact-list > li:hover {
  @apply text-green-700 cursor-pointer;
}
.contact-list .icon {
  @apply w-5 h-5 inline-block mr-2;
}
.e-mail {
  user-select: all;
}
.e-mail::before {
  content: 'vbnm123c';
}
.e-mail::after {
  content: 'gmail.com';
}

section {
  @apply p-2 text-gray-600;
  break-inside: avoid;
}
section > h2 {
  @apply my-3 text-xl text-green-500;
}
section > h3 {
  @apply flex my-3 text-lg items-baseline;
}
section > p {
  @apply my-2 text-gray-900;
  @apply ml-3 pl-4 border-0 border-l-2 border-dotted border-blue-800;
}

section.works > h3 > a {
  @apply inline-flex items-center max-h-7;
}
section.works .github-icon {
  @apply h-6 w-6 mr-2;
}
section.skills > .image-grid {
  @apply grid grid-cols-10 gap-4;
}
section.skills > .image-grid > img {
  @apply w-full my-auto;
}

.duration {
  @apply pl-2 text-green-700 text-sm;
}
</style>
