/**
* created by frank on 2018/5/9
*/
<template>
  <div class="GoodsCountdown" v-if="endTime">
    <span class="time-number color-red" :style="{backgroundColor:backgroundColor}">{{hours}}</span>
    <span class="time-dio" :style="{color:dioColor}">:</span>
    <span class="time-number color-red" :style="{backgroundColor:backgroundColor}">{{minutes}}</span>
    <span class="time-dio" :style="{color:dioColor}">:</span>
    <span class="time-number color-red" :style="{backgroundColor:backgroundColor}">{{seconds}}</span>
  </div>
</template>

<script>
// 倒计时插件

import util from '@/common/utils.js'

export default {
  name: 'GoodsCountdown',
  data () {
    return {
      hours: '-',
      minutes: '-',
      seconds: '-',
      intervalTimer: ''
    }
  },
  props: {
    dioColor: {
      type: String,
      default: '#fffF'
    },
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    endTime: {
      type: Number,
      require: true
    }
  },
  watch: {
    endTime () {
      if (this.intervalTimer !== '') {
        clearInterval(this.intervalTimer)
      }
      this.intervalTimer = setInterval(() => {
        let remainTime = util.getRemainTime(new Date(this.endTime))
        this.hours = remainTime.hours
        this.minutes = remainTime.minutes
        this.seconds = remainTime.seconds
        if (remainTime.total <= 0) {
          clearInterval(this.intervalTimer)
        }
      }, 1000)
    }
  },
  beforeDestroy () {
    if (this.intervalTimer !== '') {
      clearInterval(this.intervalTimer)
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .GoodsCountdown {
    font-size: 0;
    .time-text {
      display: inline-block;
      font-size: 28px;
      margin-right: 23px;
      vertical-align: top;
    }
    .time-number {
      min-width: 44px;
      display: inline-block;
      padding: 5px 0;
      font-size: 24px;
      background-color: #424242;
      text-align: center;
      border-radius: 4px;
      font-weight: bold;
    }
    .time-dio {
      display: inline-block;
      font-weight: bold;
      margin: 0 5px;
      font-size: 24px;
      color: #5F5F5F;
    }
  }
</style>
