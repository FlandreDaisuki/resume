<template>
  <div id="app">
    <div id="app-container">
      <div id="profile">
        <div id="avatar">
          <img src="assets/50123960_256-min.jpg" alt="avatar" />
        </div>
        <h1 id="profile-name">連俊豪 Chun-Hao Lien</h1>
        <p>
          認為懶惰是程式設計師的美德，常常撰寫玩具專案和工具讓日常瑣事自動化。
          <br />熟悉
          JavaScript，也常常參與技術小聚和研討會學習不熟悉的語言和技術知識。
          <br />近期對函數式程式設計有濃厚的興趣。
        </p>
        <nav>
          <ul id="nav-list">
            <li class="nav-list-item">
              <a
                href="https://github.com/FlandreDaisuki"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="assets/github-brands.svg" alt="github-icon" />
                <span class="nav-list-item-text">FlandreDaisuki</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a
                href="https://www.facebook.com/flandredaisuki"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src="assets/facebook-square-brands.svg"
                  alt="facebook-icon"
                />
                <span class="nav-list-item-text">flandredaisuki</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a
                href="https://t.me/flandrekawaii"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="assets/telegram-brands.svg" alt="telegram-icon" />
                <span class="nav-list-item-text">flandrekawaii</span>
              </a>
            </li>
            <li class="nav-list-item">
              <a href="javascript:;" @click="copyEmail">
                <img src="assets/envelope-solid.svg" alt="email-icon" />
              </a>
              <span class="nav-list-item-text"></span>
            </li>
          </ul>
        </nav>
      </div>
      <div id="academic-degree">
        <h2>學歷</h2>
        <ul>
          <li>國立師範大學 資訊工程系 學士</li>
          <li>國立交通大學 多媒體工程研究所 碩士</li>
        </ul>
      </div>
      <div id="skills">
        <h2>技能</h2>
        <ul>
          <li>程式語言: JavaScript, Python, C</li>
          <li>網頁前端: HTML5, CSS3, ES6, Vue, userscript, webextension</li>
          <li>網頁後端: NodeJS, PHP, nginx</li>
          <li>系統: Linux, bash, Docker, Docker Compose</li>
          <li>其他: git, Computer Graphics</li>
        </ul>
      </div>
      <div id="works">
        <h2>作品集</h2>
        <h3 class="work-title">
          <a
            href="https://github.com/FlandreDaisuki/Patchouli"
            target="_blank"
            rel="noopener noreferrer"
            >Patchouli</a
          >
        </h3>
        <p>
          目前最大的一個玩具專案。目的是利用 userscript 在 pixiv
          頁面增加一個工具列，功能有關鍵字過濾、大圖瀏覽等。 利用 rollup 與
          vuejs 打包建置，並插入到基於 reactjs 開發的網站中，為此還另外寫了一個
          <a
            href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock"
            target="_blank"
            rel="noopener noreferrer"
            >rollup plugin</a
          >
          。
        </p>
        <h3 class="work-title">
          <a
            href="https://github.com/FlandreDaisuki/dmhy-subscribe"
            target="_blank"
            rel="noopener noreferrer"
            >dmhy-subscribe</a
          >
        </h3>
        <p>
          因為看動畫常常追很多新番，但常常忘記哪一部動畫看到第幾集，這個工具是幫我記住並自動下載最新一集的新番。
          為了讓朋友們也能使用，利用 docker 打包以方便建置，並支援多種下載器。
        </p>
        <h3 class="work-title">
          <a
            href="https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me"
            target="_blank"
            rel="noopener noreferrer"
            >Facebook Don't Track Me</a
          >
        </h3>
        <p>
          Facebook 利用在連結網址參數
          <code>fbclid</code>
          來追蹤使用者，讓網址變得難以識別，可能造成資安問題(SSRF)。
          很多工具只針對網址欄但並沒有解決網路請求對使用者的追蹤。此瀏覽器擴充套件就可以一次解決這兩個問題。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

export default Vue.extend({
  data() {
    return { encodedEmail: 'dmJubTEyM2MrcmVzdW1lQGdtYWlsLmNvbQ==' };
  },
  computed: {
    decodedEmail() {
      return window.atob(this.encodedEmail);
    },
  },
  mounted() {
    const style = document.createElement('style');
    style.textContent = `.nav-list-item:nth-child(4) > .nav-list-item-text::after {
      content: "${this.decodedEmail}";
    }`;
    document.head.appendChild(style);
  },
  methods: {
    copyEmail() {
      this.$copyText(this.decodedEmail).then(
        () => alert('已複製到剪貼簿'),
        () => alert(this.decodedEmail),
      );
    },
  },
});
</script>

<style scoped>
a {
  color: darkblue;
}
#app {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
#app-container {
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
</style>
