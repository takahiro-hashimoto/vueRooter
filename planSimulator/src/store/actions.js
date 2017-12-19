import { ANSWER, INIT, LOADING } from './mutation-types'

export default {
  onClickAnswer: ({ commit }, answer) => {
    commit(ANSWER, answer)
  },
  onInitState: ({ commit }) => {
    commit(INIT)
  }
}
