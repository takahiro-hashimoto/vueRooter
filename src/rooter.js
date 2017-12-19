import Vue from 'vue';
import VueRouter from 'vue-router';
import Top from '../src/pages/Top';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Top
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
