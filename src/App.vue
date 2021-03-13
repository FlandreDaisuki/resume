<template>
  <header id="header">
    <img id="avatar" alt="avatar" src="./assets/avatar.jpg">
    <div class="grid text-left mr-auto">
      <span class="text-3xl">連俊豪</span>
      <span class="text-xl">Lien Chun-Hao</span>
    </div>
    <ul class="contact-list">
      <li @click="mailTo">
        <img src="./assets/envelope-solid.svg" alt="">
        <span class="e-mail">@</span>
      </li>
      <li @click="openToNewTab('https://github.com/FlandreDaisuki')">
        <img src="./assets/github-brands.svg" alt="">
        <span>FlandreDaisuki</span>
      </li>
      <li @click="openToNewTab('https://t.me/flandrekawaii')">
        <img src="./assets/telegram-brands.svg" alt="">
        <span>@flandrekawaii</span>
      </li>
    </ul>
  </header>

  <main class="md:layout-column-2 text-left">
    <section class="about">
      <h2>關於我</h2>
      <p>
        喜歡用網頁技術解決日常問題的前端工程師，開發環境是 Linux + vscode + Firefox。興趣是看動畫，因此大部分的玩具專案都跟動漫有關，並寫些小工具或自己架服務來提昇效率。
      </p>
      <p>
        認為美的程式碼應該是不需要開 IDE 就可以看完的，因此討厭 TypeScript 的複雜型別，但也認為 TypeScript 的簡單型別對平常開發很有幫助。
      </p>
      <p>
        平時會參與技術社群活動像 COSCUP 和各種語言或框架的 meetup 等，也常常在 telegram 的技術頻道中和其他人交流討論，也有訂閱如 JavaScript Weekly 等電子報學習新知。
      </p>
      <p>
        目前對雲服務、UX設計、後端架構及資料庫有興趣。
      </p>
    </section>
    <section class="experience">
      <h2>經驗</h2>
      <h3>
        <span class="title">神達電腦前端工程師</span>
        <span class="duration">2019.11 ~ 2021.3</span>
      </h3>
      <p>
        前半年專注於串接 IOT 裝置的控制及與設計合作完成 dashboard 及裝置數值的視覺化，也使用 joint.js 幾乎獨立完成整套圖控系統。
      </p>
      <p>
        下半年學習 kotlin 並完成數個服務並部屬到內部的 k8s 上、接觸 OpenVINO 並使用 python 改寫範例程式成為智慧點餐系統的核心模組。並為該模組應用設計了整套流程並實作了一套包含前後端服務的 PoC。也寫了一些腳本來自動部屬 kubeless function 和 userscript 來輔助開發。
      </p>
      <p>
        農曆年前後，使用 Hasura 和 Apollo client 串接 GraphQL 並在我們的 Vue2 專案導入 <a target="_blank" href="https://github.com/vuejs/composition-api">composition API</a> 並積極使用。
      </p>
      <h3>
        <span class="title">自學 JavaScript</span>
        <span class="duration">2015 ~ 2019</span>
      </h3>
    </section>
    <section class="education">
      <h2>學歷</h2>
      <h3>
        <span class="title">交大計算機圖學實驗室碩士</span>
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
          <img src="./assets/github-brands.svg" class="github-link-icon">
          <span>Patchouli</span>
        </a>
      </h3>
      <p>
        碩士班期間完成最大，也是目前星星數最多的專案。使用 Vue2 + rollup 撰寫的 userscript 腳本，主要功能是爬蟲跟自訂篩選條件。也是因為這一個專案讓我接觸開源專案的運作、熟練 git 操作、以及 JavaScript 生態系。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock">
          <img src="./assets/github-brands.svg" class="github-link-icon">
          <span>rollup-plugin-userscript-metablock</span>
        </a>
      </h3>
      <p>
        寫 <a target="_blank" href="https://github.com/FlandreDaisuki/Patchouli">Patchouli</a> 順便寫的 npm 包，意外地蠻多人使用。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/dmhy-subscribe">
          <img src="./assets/github-brands.svg" class="github-link-icon">
          <span>dmhy-subscribe</span>
        </a>
      </h3>
      <p>
        另一個爬蟲，這是解決我看動畫常常記不住看到第幾集寫出來的 CLI 工具。也是我第一個接觸及使用 docker 的專案。最近自架了 jellyfin 服務可以跟此 CLI 完美配合。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me">
          <img src="./assets/github-brands.svg" class="github-link-icon">
          <span>Facebook-Dont-Track-Me</span>
        </a>
      </h3>
      <p>
        Facebook 的 <code>fbclid</code> 剛出現時，把網址搞得難以閱讀而寫的 WebExtension。解決網址欄及網路請求的追蹤，程式碼有點醜但至今運作良好。
      </p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/My-Browser-Extensions">
          <img src="./assets/github-brands.svg" class="github-link-icon">
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
      <div class="image-grid">
        <img src="./assets/skills/LogosVue.svg" alt="vue">
        <img src="./assets/skills/VscodeIconsFileTypeCss.svg" alt="css">
        <img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js">
        <img src="./assets/skills/LogosGraphql.svg" alt="graphql">
        <img src="./assets/skills/LogosNodejsIcon.svg" alt="nodejs">
        <img src="./assets/skills/LogosRollupjs.svg" alt="rollup">
      </div>
      <h3>程式語言</h3>
      <div class="image-grid">
        <img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js">
        <img src="./assets/skills/VscodeIconsFileTypeKotlin.svg" alt="kotlin">
        <img src="./assets/skills/VscodeIconsFileTypePython.svg" alt="python">
      </div>
      <h3>其他開發相關</h3>
      <div class="image-grid">
        <img src="./assets/skills/LogosDockerIcon.svg" alt="docker">
        <img src="./assets/skills/LogosLinuxTux.svg" alt="linux server">
        <img src="./assets/skills/LogosOpengl.svg" alt="Computer Graphics">
        <img src="./assets/skills/VscodeIconsFileTypeGit.svg" alt="git">
      </div>
    </section>
  </main>
</template>

<script setup>
const openToNewTab = (url) => {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  a.remove();
};
const mailTo = () => openToNewTab(atob('bWFpbHRvOnZibm0xMjNjQGdtYWlsLmNvbQ=='));
</script>


<style scoped>
#header {
  @apply flex flex-wrap items-center justify-start my-4;
}

#avatar {
  @apply rounded-full w-16 h-16 inline-block mr-4;
}

.contact-list {
  @apply text-left grid gap-x-2 mt-6 ;
  @apply md:grid-cols-2 md:mt-0
}
.contact-list > li {
  @apply p-1;
}
.contact-list > li:hover {
  @apply text-green-700 cursor-pointer;
}
.contact-list > li > img {
  @apply w-6 h-6 inline-block mr-2;
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
section.works .github-link-icon {
  @apply w-6 mr-2;
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
