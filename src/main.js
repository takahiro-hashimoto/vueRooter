import Vue from 'vue';
import router from '../src/rooter';
import App from '../src/App.vue';

new Vue({
  el: '#js-app',
  router,
  render: h => h(App)
});
