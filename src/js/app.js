
import router from 'js/router';
import App from 'js/components/App.vue';

Vue.use(http, { store });

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
