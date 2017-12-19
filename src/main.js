
import router from './router';
import App from './App.vue';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
