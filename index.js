import Vue from 'vue';
import i18n from './src/js/i18n';
import store from './src/js/store';
import router from './src/js/router';
import VueClipboard from 'vue-clipboard2';

import App from './src/components/App.vue';

Vue.use(VueClipboard);
Vue.directive('external-link', (el) => {
  if (!(el instanceof HTMLAnchorElement)) {
    console.error('v-external-link should bind on <a>');
    return;
  }
  el.target = '_black';
  el.rel = 'noopener noreferrer';
});

window.vueInstance = new Vue({
  i18n,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
