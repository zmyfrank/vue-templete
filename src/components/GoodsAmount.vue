/**
* created by frank on 2018/5/10
*/
<template>
  <div class="GoodsAmount">
    <div @click="subtraction" class="left">-</div>
    <div class="middle">
      <p class="num">{{amount}}</p>
      <p class="text">数量</p>
    </div>
    <div @click="plus" class="right">+</div>
  </div>
</template>

<script>
export default {
  name: 'GoodsAmount',
  data () {
    return {
      amount: 1
    }
  },
  methods: {
    subtraction () {
      if (this.amount < 2) {
        return false
      } else {
        this.amount--
      }
    },
    plus () {
      this.amount++
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .GoodsAmount {
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    .left, .right {
      width: 60px;
      height: 60px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      color: #999;
      background-color: #EBEBEB;
    }
    .left {
      margin-right: 32px;
      font-size: 60px;
    }
    .middle {
      text-align: center;
      .num {
        margin-bottom: 5px;
        font-size: 36px;
        color: #444;
      }
      .text {
        font-size: 18px;
        color: #999;
      }
    }
    .right {
      margin-left: 27px;
    }
  }
</style>
