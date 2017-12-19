import Vue from 'vue'
import VueRouter from 'vue-router'
import top from './page/top'
import question from './page/question'
import result from './page/result'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'question',
    component: Vue.component('question', question)
  },
  {
    path: '/result',
    name: 'result',
    component: Vue.component('result', result)
  }
]

export default new VueRouter({ routes })
