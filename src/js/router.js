import Vue from 'vue';
import VueRouter from 'vue-router';

import ChooseLang from '../components/ChooseLang.vue';
import Resume from '../components/Resume.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', name: 'choose-lang', component: ChooseLang },
    { path: '/:lang', name: 'resume', component: Resume },
    { path: '*', redirect: '/', hidden: true },
  ],
});
