<template>
  <div id="resume">
    <div id="resume-container">
      <div id="profile">
        <div id="avatar">
          <img src="../assets/50123960_256-min.jpg" alt="avatar">
        </div>
        <h1 id="profile-name">
          連俊豪 Chun-Hao Lien
        </h1>
        <p id="intro">
          <template v-if="$i18n.locale ==='en'">
            <span>I think "Lazy" is a virtue of engineer, so I usually make side projects to automate my works.</span>
            <span>The most familiar language is JavaScript (self-learned in 4 years), and also attend to different technical party or conference.</span>
            <span>Recently, I'm interested in functional programming.</span>
          </template>
          <template v-if="$i18n.locale ==='zh-tw'">
            <span>認為懶惰是程式設計師的美德，常常撰寫玩具專案和工具讓日常瑣事自動化。</span>
            <span>熟悉 JavaScript (自學四年)，也常常參與技術小聚和研討會學習不熟悉的語言和技術知識。</span>
            <span>近期對函數式程式設計有濃厚的興趣。</span>
          </template>
        </p>
        <nav>
          <ul id="nav-list">
            <li class="nav-list-item">
              <a v-external-link href="https://github.com/FlandreDaisuki">
                <img src="../assets/github-brands.svg" alt="github-icon">
                <span class="nav-list-item-text">FlandreDaisuki</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a v-external-link href="https://www.facebook.com/flandredaisuki">
                <img src="../assets/facebook-square-brands.svg" alt="facebook-icon">
                <span class="nav-list-item-text">flandredaisuki</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a v-external-link href="https://t.me/flandrekawaii">
                <img src="../assets/telegram-brands.svg" alt="telegram-icon">
                <span class="nav-list-item-text">flandrekawaii</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;" @click="copyEmail">
                <img src="../assets/envelope-solid.svg" alt="email-icon">
              </a>
              <span id="printable-email" class="nav-list-item-text" />
            </li>
          </ul>
        </nav>
      </div>
      <div id="academic-degree">
        <h2>{{ $t('educationTitle') }}</h2>
        <ul>
          <li v-for="line in $t('educationList')" :key="line">
            {{ line }}
          </li>
        </ul>
      </div>
      <div id="skills">
        <h2>{{ $t('skillsTitle') }}</h2>
        <ul>
          <li class="skill-group">
            <h3>{{ $t('skills.PL') }}</h3>
            <ul>
              <li class="skill-item">
                JavaScript
              </li>
              <li class="skill-item">
                Python
              </li>
              <li class="skill-item">
                C
              </li>
            </ul>
          </li>
          <li class="skill-group">
            <h3>{{ $t('skills.WFE') }}</h3>
            <ul>
              <li class="skill-item">
                HTML5
              </li>
              <li class="skill-item">
                CSS3
              </li>
              <li class="skill-item">
                ES6
              </li>
              <li class="skill-item">
                Vue
              </li>
              <li class="skill-item">
                userscript
              </li>
              <li class="skill-item">
                WebExtension
              </li>
            </ul>
          </li>
          <li class="skill-group">
            <h3>{{ $t('skills.WBE') }}</h3>
            <ul>
              <li class="skill-item">
                NodeJS
              </li>
              <li class="skill-item">
                PHP
              </li>
              <li class="skill-item">
                nginx
              </li>
            </ul>
          </li>
          <li class="skill-group">
            <h3>{{ $t('skills.SYS') }}</h3>
            <ul>
              <li class="skill-item">
                Linux
              </li>
              <li class="skill-item">
                bash
              </li>
              <li class="skill-item">
                Docker
              </li>
              <li class="skill-item">
                Docker Compose
              </li>
            </ul>
          </li>
          <li class="skill-group">
            <h3>{{ $t('skills.MISC') }}</h3>
            <ul>
              <li class="skill-item">
                git
              </li>
              <li class="skill-item">
                Computer Graphics
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="works">
        <h2>{{ $t('projectsTitle') }}</h2>
        <h3 class="work-title">
          <a v-external-link href="https://github.com/FlandreDaisuki/Patchouli">Patchouli</a>
        </h3>
        <p>
          <template v-if="$i18n.locale ==='en'">
            This is my largest side project. Add a tool bar on pixiv pages by userscript and support keyword filtering, image carousel previewer, … functions.
            Then, bundle the whole vue project with rollup inject to react-based site.
            For this project, I also create a simple
            <a v-external-link href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock">rollup plugin</a>.
          </template>
          <template v-if="$i18n.locale ==='zh-tw'">
            目前最大的一個玩具專案。目的是利用 userscript 在 pixiv
            頁面增加一個工具列，功能有關鍵字過濾、大圖瀏覽等。 利用 rollup 與
            vuejs 打包建置，並插入到基於 reactjs 開發的網站中，為此還另外寫了一個
            <a v-external-link href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock">rollup plugin</a>。
          </template>
        </p>
        <h3 class="work-title">
          <a v-external-link href="https://github.com/FlandreDaisuki/dmhy-subscribe">dmhy-subscribe</a>
        </h3>
        <p>
          <template v-if="$i18n.locale ==='en'">
            The tool can remember which episode of anime I downloaded.
            It can be deployed by docker and support multiple downloaders.
          </template>
          <template v-if="$i18n.locale ==='zh-tw'">
            因為看動畫常常追很多新番，但常常忘記哪一部動畫看到第幾集，這個工具是幫我記住並自動下載最新一集的新番。
            為了讓朋友們也能使用，利用 docker 打包以方便建置，並支援多種下載器。
          </template>
        </p>
        <h3 class="work-title">
          <a v-external-link href="https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me">Facebook Don't Track Me</a>
        </h3>
        <p>
          <template v-if="$i18n.locale ==='en'">
            Facebook put search parameter <code>fbclid</code> to track users and make URL too long to identify.
            It probably causes security problem(SSRF).
            Many tools can handle the URL issue but not solve the tracking in requests, the web-extension can solve both of above.
          </template>
          <template v-if="$i18n.locale ==='zh-tw'">
            Facebook 利用在連結網址參數<code>fbclid</code>來追蹤使用者，讓網址變得難以識別，可能造成資安問題(SSRF)。
            很多工具只針對網址欄但並沒有解決網路請求對使用者的追蹤。此瀏覽器擴充套件就可以一次解決這兩個問題。
          </template>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    encodedEmail() {
      return this.$store.state.encodedEmail;
    },
    decodedEmail() {
      return window.atob(this.encodedEmail);
    },
  },
  mounted() {
    this.hotkeyHandler = this.hotkeyEventHandler.bind(this);
    document.addEventListener('keyup', this.hotkeyHandler);

    const style = document.createElement('style');
    style.textContent = `#printable-email::after{content: "${this.decodedEmail}";}`;
    document.head.appendChild(style);
    this.printableEmailStyle = style;
  },
  destroyed() {
    document.removeEventListener('keyup', this.hotkeyHandler);
    this.printableEmailStyle.remove();
  },
  methods: {
    copyEmail() {
      this.$copyText(this.decodedEmail).then(
        () => alert(this.$t('copiedToClipboard')),
        () => alert(this.decodedEmail),
      );
    },
    hotkeyEventHandler(event) {
      if (event.key === 'Backspace') {
        this.$router.back();
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$i18n.locale = to.params.lang;
    });
  },
};
</script>

<style scoped>
a {
  color: darkblue;
}
#resume {
  margin: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
#resume-container {
  max-width: 900px;
}
#profile {
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  max-width: 1280px;
}
#avatar {
  display: flex;
  justify-content: center;
}
#avatar > img {
  border-radius: 50%;
  max-width: 128px;
  max-height: 128px;
}
#intro > span {
  display: block;
}
#nav-list {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}
#nav-list img {
  height: 32px;
}
.nav-list-item {
  margin: 0 10px;
}
.nav-list-item,
.nav-list-item > a {
  display: inline-flex;
  align-items: center;
}
.nav-list-item > a,
.work-title > a {
  text-decoration: none;
}
.nav-list-item-text {
  display: none;
  margin-left: 5px;
  color: black;
}
.skill-group > h3 {
  margin: 4px 0;
}
.skill-group .skill-item:first-child {
  margin-left: 0;
}
.skill-item {
  display: inline-block;
  color: darkblue;
  margin: 2px 6px;
}
</style>
