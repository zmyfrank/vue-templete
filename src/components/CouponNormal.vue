/**
* created by frank on 2018/5/15
*/
<template>
  <div class="couponNormal" @click="handleClick" :class="bgClass">
      <div class="top color-fff">
        <p class="top-top font-26">解放碑购物节</p>
        <p class="font-blod font-42">九折通用券</p>
      </div>
    <div class="bottom color-fff">
      <div class="bottom-left">
        <div class="bottom-left-ava"></div>
        <div class="bottom-left-add font-26">龙湖时代天街</div>
      </div>
      <div class="bottom-right bg-fff text-center">一天后开始</div>
    </div>
  </div>
</template>

<script>
import filter from '@/common/utils'

export default {
  name: 'couponNormal',
  props: {
    color: {
      type: String,
      default: '#5784d0'
      // required: true
    },
    status: {
      // required: true
    },
    startTime: {
      // required: true
    },
    endTime: {
      // required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', this)
    }
  },
  computed: {
    bgClass () {
      if (this.status === 2 || this.status === 3) return 'pro-gray'
      if (this.color === '#ee903d') return 'pro-orange'
      if (this.color === '#61b457') return 'pro-green'
      if (this.color === '#cc443c') return 'pro-red'
      if (this.color === '#5784d0') return 'pro-blue'
      if (this.color === '#d09a43') return 'pro-brown'
    },
    time () {
      if (this.status === 2) return '已使用'
      if (this.status === 3) return '已过期'
      if (this.status === 1) {
        return filter.valideTime(this.startTime, this.endTime)
      }
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .couponNormal {
    height: 220px;
    width: 100%;
    background-size: 678px 220px;
    box-sizing: border-box;
    padding: 20px 30px 14px 30px;
    &.pro-gray {
      background-image: url(../assets/normal-coupon/pro-gray.png)
    }
    &.pro-red {
      background-image: url(../assets/normal-coupon/pro-red.png)
    }
    &.pro-green {
      background-image: url(../assets/normal-coupon/pro-green.png)
    }
    &.pro-blue {
      background-image: url(../assets/normal-coupon/pro-blue.png)
    }
    &.pro-brown {
      background-image: url(../assets/normal-coupon/pro-brown.png)
    }
    &.pro-orange {
      background-image: url(../assets/normal-coupon/pro-orange.png)
    }
    .top{
      margin-bottom: 49px;
      .top-top{
        margin-bottom: 21px;
      }
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bottom-left-ava,.bottom-left-add{
        display: inline-block;
        vertical-align: middle;
      }
      .bottom-left-ava{
        height: 45px;
        width: 45px;
        background-size: 45px 45px;
        border-radius: 50%;
        background-image: url("../assets/avter.jpeg");
      }
      .bottom-right{
        height: 45px;
        width: 163px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        border-radius: 26px;
        color: #406CFF;
      }
    }
  }
</style>
