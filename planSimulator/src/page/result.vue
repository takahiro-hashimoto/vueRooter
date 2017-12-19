<template>
  <div>
    <div class='simulator-header l-bottom-large'>
      <h1 class='simulator-header-title l-bottom-small'>
        <span><img class='simulator-header-image' src='../assets/icon-track.png'></span>
        <span>引越しプラン<span class='text-wrap'>シミュレーション</span></span>
      </h1>
      <p class='simulator-header-text'>いくつかの質問に回答するだけで、あなたの条件にピッタリ合う引越し業者のプランを紹介します！</p>
    </div>

    <div class='simulator-container'>
      <div class='simulator-title text-xlarge'>
        <img class='simulator-title-image' src='../assets/samurai-result.png'>
        <p>あなたにぴったりの引越しプランが見つかりました</p>
        <img class='step' src='../assets/result.png'>
      </div>
      <div class='simulator-result'>

        <div class='l-align-center l-bottom-large' :class="{'is-hide': $store.state.result.length === 1}">
          <p class='simulator-message'>あなたにはこちらの<span class='simulator-message-accent'>{{$store.state.result.length}}つのプランの<span class="text-wrap">組み合わせ</span>がオススメ！</span></p>
        </div>

        <div class='l-plan-bottom plan-wrapper'>
          <div class='plan' v-for='result in $store.state.result'>
            <div class='plan-thumbnail-wrapper'>
              <img class='plan-thumbnail' :src='result.item.img' :alt='result.item.alt'>
            </div>
            <div class='plan-content'>
              <p class='plan-title l-bottom-small'>{{result.item.name}}</p>
              <p class='plan-lead'>{{result.item.lead}}</p>
              <p class='plan-discription l-bottom-small'>{{result.item.description}}</p>
              <p class='plan-link-wrapper'>
                <a class='plan-link' v-bind:href="result.item.anchor">{{result.item.name}}の詳細を見る</a>
              </p>
            </div>
          </div>
        </div>

        <div class='l-align-center'>
          <p class='home-title l-bottom-small'><span class='home-title-accent'>こちらのプラン</span>に対応している<span class='text-wrap'><span class='home-title-accent'>引越し業者</span>を探す</span></p>
          <p><a class='btn btn-home' href="/">引越しの見積もりをする</a></p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  var result = {
    name: 'result',
    beforeRouteEnter: function(route, redirect, next) {
      if (redirect.name === 'question') {
        next()
      } else {
        window.location.href = '/plan/plan-simulation/'
      }
    },
    beforeRouteLeave: function (route, redirect, next) {
      window.location.href = '/plan/plan-simulation/'
    },
  }
  export default result
</script>


<style scoped>

.home-title {
  font-size: 24px;
  font-weight: bold;
}

.home-title-accent {
  color: #0066ff;
}

.home-title:before {
  content: url(/img_wp/useful_top_pic01.png);
  position: relative;
  padding-right: 10px;
  bottom: -5px;
}

.home-title:after {
  content: url(/img_wp/useful_top_pic02.png);
  position: relative;
  padding-left: 10px;
  bottom: -5px;
}

.simulator-result {
  padding: 40px 30px;
}

.simulator-message {
  font-size: 24px;
   font-weight: bold;
  border-bottom: 6px solid #f9cc55;
  display: inline-block;
}

.simulator-message-accent {
  color: #43954c;
}

.plan-wrapper {
  position: relative;
}

.plan-wrapper:after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: -50px;
  left: 50%;
  margin-left: -60px;
  border-style: solid;
  border-width: 30px 60px 0 60px;
  border-color: #ededed transparent transparent transparent;
}

.plan {
  display: table;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background-color: #f8f2e9;
  border: 1px solid #e48c4d;
  padding: 20px;
}

.plan:after {
  content: '';
  position: absolute;
  width: 76px;
  height: 76px;
  background: url('../assets/icon-plus.png') 0 0 no-repeat transparent;
  bottom: -64px;
  left: 50%;
  margin-left: -38px;
  background-size: 76px 76px;
  z-index: 1;
}

.plan:last-child:after {
  content:none;
}

.plan-thumbnail-wrapper {
  display: inline-block;
  vertical-align: top;
  padding-right: 20px;
}

.plan-thumbnail {
  width: 240px;
  height: auto;
}

.plan-content {
  vertical-align: top;
  display: inline-block;
  width: 520px;
}

.plan-title {
  color: #e48c4d;
  font-weight: bold;
  font-size: 24px;
}

.plan-discription {
  font-size: 18px;
  color: #333;
  word-wrap: break-word;
}

.plan-lead {
  font-size: 18px;
  color: #333;
  word-wrap: break-word;
}

.plan-link-wrapper {
  text-align: right;
}

.plan-link {
  font-size: 18px;
  font-weight: bold;
  color: #245fbb;
  text-decoration: none;
  position: relative;
  padding-right: 24px;
}

.plan-link:after {
  position: absolute;
  top: 46%;
  right: 10px;
  display: block;
  content: '';
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-top: 3px solid #245fbb;
  border-right: 3px solid #245fbb;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}


.plan-link:hover {
  text-decoration: underline;
}

.l-plan-bottom{
  margin-bottom: 80px;
}

.l-plan-bottom > * {
  margin-bottom: 50px;
}

.l-plan-bottom > *:last-child {
  margin-bottom: 0;
}

.btn {
  display: inline-block;
  padding: 20px 30px;
  background-color: #fff;
  border: 1px solid #9e9e9e;
  box-shadow: 0 3px 0 0 #9e9e9e;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  text-decoration: none !important;
  position: relative;
}

.btn-home {
  font-size: 28px;
  color: #3a5d8f;
  border: 1px solid #3a5d8f;
  border-right: 40px solid #3a5d8f;
  box-shadow: 0 3px 0 0 #3a5d8fbd;
  width: 500px;
  text-decoration: none !important;
  position: relative;
}

.btn:hover {
  top: 5px;
  box-shadow: 0 -5px 0 0 transparent;
}

.btn-home:after {
  position: absolute;
  top: 50%;
  right: -24px;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  margin-top: -4px;
  border-top: 4px solid #fff;
  border-right: 4px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

@media only screen and (max-width: 750px) {

  .l-bottom-large {
    margin-bottom: 20px !important;
  }

  .l-plan-bottom{
    margin-bottom: 64px;
  }

  .plan-thumbnail-wrapper {
    text-align: center;
    display: block;
    padding: 0 0 6%;
  }

  .plan-thumbnail {
    width: 100%;
    height: auto;
  }

  .simulator-message {
    font-size: 17px;
  }

  .plan {
    display: block !important;
    padding: 6%;
  }

  .l-plan-bottom > * {
    margin-bottom: 34px;
  }

  .plan:after {
    content: '';
    position: absolute;
    width: 56px;
    height: 56px;
    bottom: -46px;
    left: 50%;
    margin-left: -28px;
    background-size: 56px 56px;
    z-index: 1;
  }

  .plan-title {
    font-size: 20px;
  }

  .plan-discription,
  .plan-lead  {
    font-size: 14px;
  }

  .plan-content {
    width: 100% !important;
  }

  .plan-wrapper:after {
    left: 40%;
    margin-left: -30px;
  }

  .simulator-result {
    padding: 5% 5% 7%;
  }

  .plan-thumbnail-wrapper{
    text-align: center;
  }

  .plan-link {
    font-size: 14px;
    font-weight: bold;
    color: #245fbb;
    text-decoration: none;
    position: relative;
    padding-right: 12px;
  }

  .plan-link:after {
    position: absolute;
    top: 46%;
    right: 0;
}

  .home-title {
    font-size: 5vw;
    font-weight: bold;
    position: relative;
  }

  .home-title-accent {
    color: #0066ff;
  }

  .home-title:before {
    content: '＼';
    color: #f6cc55;
    position: absolute;
    bottom: 0;
    left: -8px;
    font-size: 8vw;
    font-weight: normal;
  }

  .home-title:after {
    content: '／';
    color: #f6cc55;
    position: absolute;
    bottom: 0;
    right: -8px;
    font-size: 8vw;
    font-weight: normal;
  }

  .btn-home {
    width: 100%;
    background-color: #0084b2;
    box-shadow: 0 6px 0 0 #005572;
    border: 0;
    font-size: 18px;
  }

  .btn-home:after {
    content: none;
  }

}
</style>
