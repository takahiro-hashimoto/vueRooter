<template>
<div class="root simulater-wrapper l-bottom-middle l-bottom-large">
  <div class="root-inner">
     <router-view></router-view>
  </div>
</div>
</template>

<script></script>

<style>

.root {
  position: relative;
  margin: auto;
}

.is-hide {
  display: none;
}

/* text */
.text-bold {
  font-weight: bold;
}

.text-middle {
  font-size: 18px;
}

.text-large {
  font-size: 20px;
}

.text-xlarge {
  font-size: 24px;
}

.l-align-center {
  text-align: center;
}

.l-align-right {
  text-align: right;
}

.relative {
  position: relative;
}

.step {
  width: 151px;
  height: 126px;
  position: absolute;
  top: -30px;
  right: -20px;
}

.simulater-wrapper {
  background-color: #f8f2e9;
  padding: 30px;
}

.simulator-header-title {
  color: #5a2c12;
  font-size: 36px;
  display: table;
  margin: 0 auto;
}

.simulator-header-title > * {
  display: table-cell;
  vertical-align: middle;
}

.simulator-header-image {
  padding-right: 12px;
}

.simulator-header-text {
  color: #cd322d;
  font-weight: bold;
}

.simulator-container {
  box-sizing: border-box;
  background-color: #fff;
  border: 2px solid #5a2c12;
  border-radius: 2px;
}

/* layout */
.l-center {
  margin: 0 auto;
}

.l-left {
  float: left;
}

/* margin */
.l-bottom-small {
  margin-bottom: 10px !important;
}

.l-bottom-middle {
  margin-bottom: 20px !important;
}

.l-bottom-large {
  margin-bottom: 40px !important;
}

.l-bottom-middle {
  margin-top: 20px !important;
}

/* simulator-container */
.simulator-header {
  text-align: center;
}

.simulator-title {
  position: relative;
  color: #fff;
  background-color: #5a2c12;
  padding: 16px 0;
  text-align: center;
  font-weight: bold;
}

.simulator-title-image {
  position: absolute;
  bottom: 0;
  left: -15px;
}

.simulator-answer {
  padding: 80px 30px;
}

.button {
  display: block;
  width: 306px;
  height: 84px;
}

@media only screen and (max-width: 750px) {

  .text-wrap:before {
	  content: "\A" ;
	  white-space: pre ;
  }

  /* margin */
  .l-bottom-small {
    margin-bottom: 8px !important;
  }

  .l-bottom-middle {
    margin-bottom: 16px !important;
  }

  .l-bottom-large {
    margin-bottom: 32px !important;
  }

  .l-bottom-middle {
    margin-top: 20px !important;
  }

  .simulater-wrapper {
    padding: 6% 3%;
  }

  .simulator-header-title {
    font-size: 8vw;
    font-weight: bold;
    display: inline-block;
    margin: 0 auto;
  }
  .simulator-header-title > * {
    display: inline;
    vertical-align: baseline;
  }

  .simulator-header-image {
    width: 20%;
    height: auto;
    padding-right: 0;
  }

  .simulator-header-text {
    font-size: 3.2vw;
    text-align: center;
    color: #333;
  }

  .simulator-title p {
    font-size: 16px;
    padding: 0 20vw 0 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    line-height: 1.4;
    font-weight: bold;
    text-align: left;
    text-align: center;
  }

  .simulator-header {
    margin: 0;
  }

  .catch-img {
    width: 40vw;
  }

  .header-logo-img {
    width: 50vw;
  }

  .simulator-container {
    width: 100%;
  }

  .simulator-title {
    position: relative;
    height: 65px;
    padding: 0;
  }

  .simulator-title-image {
    display: none;
  }

  .simulator-answer {
    padding: 6%;
  }

  .answer-break {
    display: inline-block;
    box-sizing: border-box;
    padding: 5px;
    line-height: 16px;
  }

  .step {
    width: 70px !important;
    background-size: 100%;
    top: 2%;
    right: 0;
    height: 60px;
  }
}
</style>
