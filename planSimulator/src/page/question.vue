<template>
  <div>
    <div class='loading' :class="{
      'is-show': $store.state.loading,
      'is-hide': !$store.state.loading
    }"></div>
    <div class='simulator-header l-bottom-large'>
      <h1 class='simulator-header-title l-bottom-small'>
        <span><img class='simulator-header-image' src='../assets/icon-track.png'></span>
        <span>引越しプラン<span class='text-wrap'>シミュレーション</span></span>
      </h1>
      <p class='simulator-header-text'>いくつかの質問に回答するだけで、<span class='text-wrap'>あなたの条件にピッタリ合う引越し業者のプランを紹介します！</span></p>
    </div>
    <div class='simulator-container'>
      <div class='simulator-title text-xlarge'>
        <img class='simulator-title-image' src='../assets/samurai-question.png'>
        <p>{{$store.state.question.question}}</p>
        <div class='step' :class="{
          'step1': $store.state.questId === 0 ,
          'step2' : $store.state.questId === 1,
          'step3' : $store.state.questId === 2,
          'step4' : $store.state.questId === 3,
        }"></div>
      </div>
      <div class='simulator-answer'>
        <div class='answer-list-container'>
          <ul class='list-answers l-center' :class="{
              'l-btn-half': $store.state.question.answer.length === 2,
              'l-btn-trisect' : $store.state.question.answer.length === 3,
              'l-btn-quater' : $store.state.question.answer.length === 4,
            }">
            <li class='l-text-center text-xlarge text-bold' v-for='answer in $store.state.question.answer'>
              <a @click="onClickAnswer(answer);" v-html="answer.text" class='' :class="{
                'st-aircon': $store.state.questId === 2 && answer.id === 1  }"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import VueRouter from 'vue-router'
var router = new VueRouter()

var question = {
  name: 'question',
  created: function() {
    this.onInitState()
  },
  beforeRouteEnter : function(route, redirect, next) {
    if (redirect.path === '/') {
        next()
    } else {
      router.push('/')
    }
  },
  methods: {
    ...mapActions([
      'onInitState'
    ]),
    onClickAnswer(ans) {
      this.$store.commit('answer', { ans, router: this.$router } )
    }
  }
}
export default question
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.answer-list-container {
  width: 100%;
}

.step {
  width: 151px;
  height: 126px;
}

.step1 {
  background-image: url('../assets/step-01.png');
  background-repeat: no-repeat;
}

.step2 {
  background-image: url('../assets/step-02.png');
  background-repeat: no-repeat;
}

.step3 {
  background-image: url('../assets/step-03.png');
  background-repeat: no-repeat;
}

.step4 {
  background-image: url('../assets/step-04.png');
  background-repeat: no-repeat;
}

.list-answers {
  padding: 0;
  overflow: hidden;
}

.list-answers li {
  background-color: #f8fff1;
  border: 3px solid #094;
  border-radius: 10px;
}

.list-answers li:hover {
  background-color: #fdf0e2;
  border: 3px solid #df792e;
}

.list-answers li a {
  display: block;
  color: #094;
  text-decoration: none;
  cursor: pointer;
  padding: 16px;
  font-size: 20px;
  text-align: center;
}

.list-answers li a:hover{
  color: #df792e;
}

.l-btn-half > * {
  width: 49%;
  margin-right: 2%;
  float: left;
  box-sizing: border-box;
}

.l-btn-half > *:last-child {
  margin-right: 0;
}

.l-btn-trisect  > * {
  width: 32%;
  margin-right: 2%;
  float: left;
  box-sizing: border-box;
}

.l-btn-trisect  > *:last-child {
  margin-right: 0;
}

.l-btn-quater > * {
  width: 49%;
  margin: 0 2% 2% 0;
  float: left;
  box-sizing: border-box;
}

.l-btn-quater > *:nth-child(even) {
  margin: 0 0 2% 0;
}

.l-btn-quater > *:last-child,
.l-btn-quater > *:nth-last-child(2) {
  margin-bottom: 0 !important;
}

.sub-container {
  border-top: 3px dashed #094;
  padding: 15px 0 15px 15px;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 999;
  color: #fff;
}

.loading.is-show {
  display: block;
}

.loading.is-hide {
  display: none;
}

@media only screen and (max-width: 750px) {

  .l-btn-half > *,
  .l-btn-trisect  > *,
  .l-btn-quater > * {
    width: 100% !important;
    margin: 0 0 16px !important;
  }

  .l-btn-half > *:last-child,
  .l-btn-trisect  > *:last-child,
  .l-btn-quater > *:last-child {
    margin: 0 !important;
  }

  .l-btn-quater > *:nth-last-child(2) {
    margin: 0 0 16px !important;;
  }

  .list-answers {
    width: 100%;
    margin: 0 auto;
  }

  .list-answers li:hover {
    background-color: #f8fff1;
    border: 3px solid #094;
  }

  .list-answers li a {
    font-size: 16px;
  }

  .list-answers li a:hover{
    color: #094;
  }

}

</style>
