/**
* created by frank on 2018/5/11
*/
<template>
  <div class="couponMini" @click="$emit('click')" :class="nowImg">
    <div class="left">
      <p class="BaseCoupon-title color-fff font-32">星巴克8折券</p>
      <p class="BaseCoupon-deadline">还有5天开始</p>
    </div>
    <p class="amount color-fff">x5</p>
  </div>
</template>

<script>
export default {
  name: 'couponMini',
  props: {
    color: {
      type: String,
      require: true
    }
  },
  computed: {
    nowImg () {
      switch (this.color.toLowerCase()) {
        case '#5784d0':
          return 'blue'
        case '#d09a43':
          return 'brown'
        case 'gray':
          return 'gray'
        case '#61b457':
          return 'green'
        case '#ee903d':
          return 'orange'
        case '#cc443c':
          return 'red'
        default:
          return ''
      }
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .couponMini {
    width: 602px;
    height: 120px;
    margin: 0 auto;
    padding: 0 47px 0 32px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-size: 602px 120px;
    // 背景图片
    &.blue{
      background-image: url("../assets/mini-coupon/blue.png");
    }
    &.gray{
      background-image: url("../assets/mini-coupon/gray.png");
    }
    &.brown{
      background-image: url("../assets/mini-coupon/brown.png");
    }
    &.green{
      background-image: url("../assets/mini-coupon/green.png");
    }
    &.orange{
      background-image: url("../assets/mini-coupon/orange.png");
    }
    &.red{
      background-image: url("../assets/mini-coupon/red.png");
    }
    .BaseCoupon-title {
      margin-bottom: 12px;
    }
    .BaseCoupon-deadline {
      color: #000;
      font-size: 24px;
    }
    .amount {
      font-size: 48px;
    }
  }
</style>
