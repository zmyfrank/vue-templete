/**
* created by frank on 2018/5/15
*/
<template>
  <div class="myOrderListItem bg-fff">
    <div class="myOrderListItem-header">
      <div class="header-type color-fff font-24" :class="headerType.bgcolor">{{headerType.text}}</div>
      <div class="header-description" :class="typeData.finish===true?'color-222':'color-red'">{{typeData.description}}</div>
    </div>
    <div class="myOrderListItem-main">
      <div class="main-img">
        <img :src="img" alt="">
      </div>
      <div class="main-detail">
        <p class="main-detail-title color-222 font-28">腾讯大排档 特惠4人餐</p>
        <p class="main-detail-amount font-28">
          <span class="color-999">68元 x2</span>
          <span class="color222">136元</span>
        </p>
      </div>
    </div>
    <div class="myOrderListItem-footer" :style="{justifyContent: this.type!==3?'space-between':'flex-end'}">
      <div v-if="type!==3" class="myOrderListItem-footer-left">
        <GroupAvatars :amount="amount" :imgList="imgArr"></GroupAvatars>
      </div>
      <router-link to="/myOrderDetail" class="myOrderListItem-footer-right font-28" :class="footerType.type">{{footerType.text}}</router-link>
    </div>
  </div>
</template>

<script>
// TODO有三种情况，拼团未完成，拼团已完成，抢购已完成

import GroupAvatars from '@/components/GroupAvatars'

export default {
  name: 'myOrderListItem',
  data () {
    return {
      typeData: {},
      amount: 4,
      imgArr: ['../../static/333.jpg', '../../static/444.jpg']
    }
  },
  props: {
    type: {
      // 1拼团未完成，2拼团已完成，3抢购已完成
      type: Number,
      require: true
    },
    img: {
      type: String,
      require: false,
      default: '../../static/goodsimg.jpg'
    }
  },
  computed: {
    headerType () {
      let data = {}
      data.finish = this.typeData.finish
      if (this.typeData.type === 'group') {
        data.text = '拼'
        data.bgcolor = 'bg-red'
      } else {
        data.text = '抢'
        data.bgcolor = 'bg-green'
      }
      return data
    },
    footerType () {
      return {
        type: !this.typeData.finish ? ['bg-67c', 'color-fff', 'border-none'] : ['bg-fff', 'color-222'],
        text: !this.typeData.finish ? '召唤伙伴' : '查看票券'
      }
    }
  },
  components: {
    GroupAvatars
  },
  created () {
    let data = this.typeData
    switch (this.type) {
      case 1:
        data.type = 'group'
        data.finish = false
        data.description = '拼团中，还差2人'
        break
      case 2:
        data.type = 'group'
        data.finish = true
        data.description = '拼团成功'
        break
      case 3:
        data.type = 'single'
        data.finish = true
        data.description = '抢购成功'
        break
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .myOrderListItem {
    padding: 0 24px;
    .myOrderListItem-header {
      height: 100px;
      @include border-1px(#eee);
      display: flex;
      justify-content: space-between;
      align-items: center;
      .header-type {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
      }
      .header-description {
        font-size: 28px;
      }
    }
    .myOrderListItem-main {
      padding: 30px 0;
      display: flex;
      @include border-1px(#eee);
      .main-img {
        width: 249px;
        height: 140px;
        img{
          width: 100%;
        }
      }
      .main-detail{
        margin-left: 20px;
        padding: 10px 0;
        flex: 1;
        .main-detail-amount{
          padding-top: 64px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
    .myOrderListItem-footer{
      display: flex;
      padding: 30px 0;
      .GroupAvatars .avatar-wraper .usertop{
        display: none;
      }
      .GroupAvatars .avatar-wraper .avatar-item{
        width: 60px;
        height: 60px;
        margin-left: 5px;
      }
      .myOrderListItem-footer-right{
        width: 180px;
        padding: 16px 0;
        text-align: center;
        border: 1px solid #999;
        border-radius: 4px;
      }
    }
  }
</style>
