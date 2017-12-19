import VueRouter from 'vue-router'
import constants, {results, Q1, Q2, Q3_A, Q3_B, Q3_C, Q4, totalAnswer} from '../constants';

export default {

  answer(state, args) {
    const { ans, router } = args;
    const questionNumber = 4
    if (state.answers.length < questionNumber) {
      state.answers.push(ans.id)
      state.questId ++
    }

    switch(state.questId > 0) {
      case (state.questId == 1):
        state.question = Q2;
        break;
      case (state.questId == 2 && state.answers[0] == 1):
        // Q2で「新築中である」を選択した場合のみ、質問項目から「学生の方」を削除
        if(state.answers[1] == 3) {
          Q3_A.answer.shift()
        }
        state.question = Q3_A;
        break;
      case (state.questId == 2 && state.answers[0] == 2 && state.answers[1] == 2 || state.questId == 2 && state.answers[0] == 2 && state.answers[1] == 1):
        state.question = Q3_B
        break;
      case (state.questId == 2 && state.answers[0] == 2 && state.answers[1] == 3):
        state.question = Q3_C
        break;
      case (state.questId == 3):
        state.question = Q4;
        break;
      case (state.questId == 4):
        state.loading = true
        let ansewr = state.answers.join('_')
        let totalAnswerID = [];
        let resultItem = [];

        const keys = Object.keys(totalAnswer);
        for (let i = 0; i < keys.length; i++) {
          if (keys[i] == ansewr) {
             totalAnswerID = totalAnswer[keys[i]];
          }
        }

        constants.results.forEach((result) => {
          if (totalAnswerID.indexOf(result.id) > -1) {
             resultItem.push(result);
          }
        })

        state.result = resultItem

        setTimeout(() => {
          state.loading = false
          router.push('result')
        }, 1600)
        break
    }
  },
  initialize (state) {
    state.answers = []
    state.questId = 0
  }
}
