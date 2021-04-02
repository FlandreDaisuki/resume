import zhTW from '../locales/zh-TW';
import en from '../locales/en';
import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  // ref: https://vue-i18n.intlify.dev/guide/advanced/composition.html
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zhTW,
    'en': en,
  },
});
