import 'babel-polyfill'
import Vue from 'vue'
import router from './route'
import root from './App'
import store from './store'

const app = new Vue({
  store,
  router,
  render: h => h(root)
})
app.$mount('#js-app')
