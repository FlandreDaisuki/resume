import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../_locales/en.json';
import zhTW from '../_locales/zh_TW.json';

Vue.use(VueI18n);

export default new VueI18n({
  fallbackLocale: 'en',
  locale: document.documentElement.lang.toLowerCase(),
  messages: {
    en,
    'zh-tw': zhTW,
  },
});
