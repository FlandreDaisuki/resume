<template>
  <nav>
    <select @change="onLocaleChange">
      <option value="zh-TW">
        繁體中文
      </option>
      <option value="en">
        English
      </option>
    </select>
  </nav>
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
      <h2>{{ t('about.title') }}</h2>
      <p>{{ t('about.paragraph[0]') }}</p>
      <i18n-t keypath="about.paragraph[1]" tag="p">
        <template #coscup>
          <a :href="t('url.COSCUP')" target="_blank">COSCUP</a>
        </template>
      </i18n-t>
      <p>{{ t('about.paragraph[2]') }}</p>
    </section>
    <section class="experience">
      <h2>{{ t('experience.title') }}</h2>
      <h3>
        <span class="subtitle">{{ t('experience.list[0].header') }}</span>
        <span class="duration">2019.11 ~ 2021.4</span>
      </h3>
      <i18n-t keypath="experience.list[0].paragraph[0]" tag="p">
        <template #jointjs>
          <a href="https://www.jointjs.com" target="_blank">joint.js</a>
        </template>
      </i18n-t>
      <i18n-t keypath="experience.list[0].paragraph[1]" tag="p">
        <template #openvino>
          <a href="https://software.intel.com/content/www/us/en/develop/tools/openvino-toolkit.html" target="_blank">OpenVINO</a>
        </template>
      </i18n-t>
      <p>{{ t('experience.list[0].paragraph[2]') }}</p>
      <i18n-t keypath="experience.list[0].paragraph[3]" tag="p">
        <template #hasura>
          <a href="https://hasura.io" target="_blank">Hasura</a>
        </template>
        <template #compositionAPI>
          <a href="https://github.com/vuejs/composition-api" target="_blank">Composition API</a>
        </template>
      </i18n-t>
      <h3>
        <span class="subtitle">{{ t('experience.list[1].header') }}</span>
        <span class="duration">2015 ~ 2019</span>
      </h3>
      <p>{{ t('experience.list[1].paragraph[0]') }}</p>
      <i18n-t keypath="experience.list[1].paragraph[1]" tag="p">
        <template #electron>
          <a href="https://www.electronjs.org" target="_blank">Electron</a>
        </template>
      </i18n-t>
    </section>
    <section class="education">
      <h2>{{ t('education.title') }}</h2>
      <h3>
        <span class="subtitle">{{ t('education.Master') }}</span>
        <span class="duration">2015 ~ 2019</span>
      </h3>
      <h3>
        <span class="subtitle">{{ t('education.Bachelor') }}</span>
        <span class="duration">2011 ~ 2015</span>
      </h3>
    </section>
    <section class="works">
      <h2>{{ t('works.title') }}</h2>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/Patchouli">
          <GitHubIcon class="github-icon" />
          <span>Patchouli</span>
        </a>
      </h3>
      <p>{{ t('works.Patchouli') }}</p>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/rollup-plugin-userscript-metablock">
          <GitHubIcon class="github-icon" />
          <span>rollup-plugin-userscript-metablock</span>
        </a>
      </h3>
      <i18n-t keypath="works.metablock" tag="p">
        <template #patchouli>
          <a target="_blank" href="https://github.com/FlandreDaisuki/Patchouli">Patchouli</a>
        </template>
        <template #lastWeekDownloads>
          <a target="_blank" href="https://www.npmjs.com/package/rollup-plugin-userscript-metablock">{{ t('lastWeekDownloads', {count:metablockDownloadsLastWeek}) }}</a>
        </template>
      </i18n-t>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/dmhy-subscribe">
          <GitHubIcon class="github-icon" />
          <span>dmhy-subscribe</span>
        </a>
      </h3>
      <i18n-t keypath="works.dmhy" tag="p">
        <template #jellyfin>
          <a target="_blank" href="https://jellyfin.org/">Jellyfin</a>
        </template>
      </i18n-t>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/Facebook-Dont-Track-Me">
          <GitHubIcon class="github-icon" />
          <span>Facebook-Dont-Track-Me</span>
        </a>
      </h3>
      <i18n-t keypath="works.Facebook" tag="p">
        <template #code>
          <code>fbclid</code>
        </template>
        <template #webextension>
          <a href="https://addons.mozilla.org/firefox/addon/facebook-dont-track-me/" target="_blank">WebExtension</a>
        </template>
      </i18n-t>
      <h3>
        <a target="_blank" href="https://github.com/FlandreDaisuki/My-Browser-Extensions">
          <GitHubIcon class="github-icon" />
          <span>My-Browser-Extensions</span>
        </a>
      </h3>
      <p>{{ t('works.my') }}</p>
    </section>
    <section class="skills">
      <h2>{{ t('skills.title') }}</h2>
      <h3>{{ t('skills.web') }}</h3>
      <ul>
        <li><img src="./assets/skills/LogosVue.svg" alt="vue"><span>Vue2 &amp; 3</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeCss.svg" alt="css"><span>CSS3</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js"><span>JavaScript (ES6)</span></li>
        <li><img src="./assets/skills/LogosGraphql.svg" alt="graphql"><span>GraphQL</span></li>
        <li><img src="./assets/skills/LogosNodejsIcon.svg" alt="nodejs"><span>NodeJS</span></li>
        <li><img src="./assets/skills/LogosRollupjs.svg" alt="rollup"><span>Rollup</span></li>
      </ul>
      <h3>{{ t('skills.languages') }}</h3>
      <ul>
        <li><img src="./assets/skills/VscodeIconsFileTypeJsOfficial.svg" alt="js"><span>JavaScript (ES6)</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypeKotlin.svg" alt="kotlin"><span>Kotlin</span></li>
        <li><img src="./assets/skills/VscodeIconsFileTypePython.svg" alt="python"><span>Python3</span></li>
      </ul>
      <h3>{{ t('skills.others') }}</h3>
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
import { useI18n } from 'vue-i18n';
import GitHubIcon from './components/IconGitHub.vue';
import EmailIcon from './components/IconEmail.vue';
import TelegramIcon from './components/IconTelegram.vue';

export default {
  components: { GitHubIcon, EmailIcon, TelegramIcon },
  setup() {
    const { t, locale } = useI18n();
    const email = 'dmJubTEyM2NAZ21haWwuY29t';

    const metablockDownloadsLastWeek = ref(' 30+ ');
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
      t,
      mailTo: `mailto:${atob(email)}`,
      metablockDownloadsLastWeek,
      onLocaleChange: ($event) => {
        locale.value = $event.target.value;
      },
    };
  },
};
</script>

<style scoped>
nav {
  @apply block w-full text-right;
  @apply print:hidden;
}
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
.contact-list a {
  @apply inline-flex items-center;
}
.contact-list a:hover {
  @apply text-green-700;
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
section > p > a {
  @apply text-indigo-800;
  @apply print:text-gray-900;
}

section.works > h3 > a {
  @apply inline-flex items-center max-h-7;
}
section.works .github-icon {
  @apply h-6 w-6 mr-2;
}

section.skills ul {
  @apply grid gap-3;
  grid-template-columns: repeat(2, max-content);
}
section.skills img {
  @apply px-2 inline-block w-10;
}

section.education > h3 {
  @apply block;
}

.duration {
  @apply pl-2 text-green-700 text-sm;
}
</style>
