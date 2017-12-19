<template>
  <div class='l-top-large'>

    <a class="button start l-center" @click="onInitState">
      <router-link class='btn-next' tag="div" to="/question">dadsada</router-link>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
var top = {
  name: 'top',
  created: function() {
    this.onInitState()
  },
  methods: mapActions([
    'onInitState'
  ])
}
export default top
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 750px) {
  .top-title {
    position: relative;
    width: 580px;
    height: 480px;
    padding-top: 140px;
  }

  .balloon-img {
    position: absolute;
    z-index: 2;
    top: 360px;
    left: 70px;
  }

  .start {
    margin-top: 20px;
  }

  .start:hover {
  }

  .btn-next {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .aircon-yellow {
    position: absolute;
    z-index: -1;
    left: -100px;
    top: 80px;
  }

  .aircon-blue {
    position: absolute;
    z-index: -1;
    top: 400px;
    left: 50px;
  }

  .aircon-orange {
    position: absolute;
    z-index: -1;
    top: 50px;
    left: 740px;
  }

  .aircon-purple {
    position: absolute;
    z-index: -1;
    top: 350px;
    left: 680px;
  }
}

@media only screen and (max-width: 750px) {

  .top-title {
    box-sizing: border-box;
    background-size: contain;
    margin: 30px auto;
    padding-top: 20vw;
    position: relative;
    width: 92vw;
    height: 92vw;
  }

  .text-introduction {
    display: block;
    position: absolute;
    width: 80%;
    left: 10%;
    top: 9%;
  }

  .catch-img {
    width: 45%;
    margin-bottom: 2%;
  }

  .logo-img {
    width: 64%;
    margin-bottom: 5%;
  }

  .sp-description-img {
    display: block;
    width: 80%;
    margin: 0 auto 9%;
  }

  .balloon-img {
    position: absolute;
    z-index: 0;
    width: 24%;
    bottom: 13%;
    left: 12%;
  }

  .start {
    margin: 0 auto;
    background-size: contain;
    width: 55vw;
    height: 15.5vw;
  }

  .btn-next {
    width: 100%;
    height: 100%;
  }
}

</style>
