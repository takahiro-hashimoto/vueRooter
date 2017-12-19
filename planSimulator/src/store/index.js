import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import constants, {Q1, totalAnswer} from '../constants'

Vue.use(Vuex)

const state = {
  questId: 0,
  answers: [],
  result: [],
  data: constants.data,
  loading: false,
  question: Q1
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
