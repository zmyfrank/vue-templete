/**
* created by frank on 2018/5/21
*/
<template>
  <div class="MyOrderDetailHeader" :class="type===1?'bg-red':'bg-67c'">
    <div v-if="type!==1" class="MyOrderDetailHeader-success" :class="{'pd-bottom-24':type===2}">
      <div class="MyOrderDetailHeader-success-text">
        <i class="icon-success-60"></i>
        <span class="text font-36 color-fff font-blod">{{type===2?'拼团':'抢购'}}成功</span>
      </div>
      <div v-if="type===2" class="MyOrderDetailHeader-success-ava bg-fff dsn">
        <GroupAvatars :amount="amount" :imgList="imgArr"></GroupAvatars>
      </div>
    </div>
    <div v-else class="MyOrderDetailHeader-false">
      <div class="MyOrderDetailHeader-false-top bg-fff text-center">
        <p class="top-title color-222 font-blod font-42">还差 <span class="color-red">3</span> 人，人满才算拼团成功</p>
        <p class="top-time-des color-999">距离活动结束</p>
        <p class="top-time-main color-222">{{days}}天 {{hours}}时 {{minutes}}分 {{seconds}}秒</p>
        <div class="top-ava">
          <GroupAvatars :amount="amount" :imgList="imgArr"></GroupAvatars>
        </div>
      </div>
      <button class="MyOrderDetailHeader-false-bottom color-fff bg-67c font-32 text-center">
        <i class="icon-wechat2"></i>
        召唤伙伴拼团
      </button>
    </div>
  </div>
</template>

<script>
import GroupAvatars from '@/components/GroupAvatars'
import util from '@/common/utils.js'

export default {
  name: 'MyOrderDetailHeader',
  data () {
    return {
      typeData: {},
      amount: 4,
      intervalTimer: '',
      hours: 0,
      days: 0,
      minutes: 0,
      seconds: 0,
      imgArr: ['https://img2.woyaogexing.com/2018/05/14/eb05f6ae18cd6a30!400x400_big.jpg', 'https://img2.woyaogexing.com/2018/05/14/3a7b51a2a480191e!400x400_big.jpg']
    }
  },
  props: {
    type: {
      // 1拼团未完成，2拼团已完成，3抢购已完成
      type: Number,
      default: 0,
      require: true
    },
    time: {
      type: Number,
      default: new Date().getTime() + 150002,
      require: false
    }
  },
  components: {
    GroupAvatars
  },
  mounted () {
    if (this.time) {
      this.intervalTimer = setInterval(() => {
        let remainTime = util.getRemainTime(new Date(this.time))
        this.hours = remainTime.hours
        this.minutes = remainTime.minutes
        this.seconds = remainTime.seconds
        this.days = remainTime.days
        if (remainTime.total <= 0) {
          clearInterval(this.intervalTimer)
        }
      }, 1000)
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .MyOrderDetailHeader {
    min-height: 220px;
    padding: 0 24px;
    .MyOrderDetailHeader-success-text {
      padding-top: 80px;
      text-align: center;
      .icon-success-60{
        margin-right: 20px;
      }
    }
    .MyOrderDetailHeader-success-ava{
      width: 100%;
      height: 160px;
      margin-top: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .MyOrderDetailHeader-false{
      padding: 24px 0;
      .MyOrderDetailHeader-false-top{
        padding: 50px 0 60px 0;
        .top-time-des{
          margin: 40px 0 12px 0;
          font-size: 30px;
        }
        .top-time-main{
          font-size: 30px;
          margin-bottom: 50px;
        }
      }
      .MyOrderDetailHeader-false-bottom{
        width: 100%;
        height: 90px;
        margin-top: 30px;
        border-radius: 10px;
      }
    }
  }
</style>
