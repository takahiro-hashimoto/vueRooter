import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from 'js/pages/top.vue';
import About from 'js/pages/about.vue';
import Contact from 'js/pages/contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Top },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
