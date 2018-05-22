/**
* created by frank on 2018/5/10
*/
<template>
  <div class="GroupStart bg-f5">
    <!--顶部-->
    <div class="GroupStart-top bg-fff">
      <!--开始拼团-->
      <div class="dsn">
        <div class="title color-444 text-center font-blod">还差<span class="color-red">3</span>人，人满才算拼团成功</div>
        <div class="middle text-center">
          <p class="color-999">距离活动结束</p>
          <p class="time">1天 12时 26分 59秒</p>
          <div class="avatars">
            <GroupAvatars :amount="amount" :imgList="imgList"></GroupAvatars>
          </div>
        </div>
        <button @click="share" class="bottom color-fff bg-67c text-center"><i class="wechat"></i>召唤小伙伴拼团</button>
      </div>
      <!--拼团成功-->
      <div class="group-success">
        <div class="group-success-icon text-center">
          <i class="group-success-img"></i>
        </div>
        <p class="group-success-text font-blod font-36 color-222 text-center">拼团成功</p>
        <div class="group-success-av">
          <GroupAvatars :amount="amount" :imgList="imgList"></GroupAvatars>
        </div>
      </div>
      <!--购买成功-->
      <div class="group-success buy-success dsn">
        <div class="group-success-icon text-center">
          <i class="group-success-img"></i>
        </div>
        <p class="group-success-text font-blod font-36 color-222 text-center">拼团成功</p>
      </div>
    </div>
    <!--中部-->
    <div class="GroupStart-middle bg-fff mg-top-20">
      <div class="GroupStart-middle-title font-32 color-red text-center">拼团成功后您将获得</div>
      <coupon-mini :color="color"></coupon-mini>
    </div>
    <div class="GroupStart-detail bg-fff mg-top-20">
      <BaseOrderDetail></BaseOrderDetail>
    </div>
    <!--底部-->
    <div class="GroupStart-bottom">
      <button class="GroupStart-normal-bottom color-999 font-blod text-center dsn">返回首页</button>
      <router-link to="/cardPackage" class="gourp-success-bottom font-32 text-center color-red font-blod">查看票券</router-link>
    </div>
    <BaseMask @close="showMask=false" :showImgMask="showMask"></BaseMask>
  </div>
</template>

<script>
import GroupAvatars from '@/components/GroupAvatars'
import CouponMini from '@/components/CouponMini'
import BaseOrderDetail from '@/components/BaseOrderDetail'
import BaseMask from '@/components/BaseMask'

export default {
  name: 'GroupStart',
  data () {
    return {
      imgList: [
        'http://img5.duitang.com/uploads/item/201506/07/20150607110911_kY5cP.jpeg',
        'http://img3.duitang.com/uploads/item/201501/29/20150129144530_CiJ5Z.jpeg'
      ],
      amount: 4,
      color: '',
      showMask: false
    }
  },
  methods: {
    share () {
      this.showMask = true
    }
  },
  components: {
    GroupAvatars,
    CouponMini,
    BaseOrderDetail,
    BaseMask
  },
  mounted () {
    setTimeout(() => {
      this.color = '#d09a43'
    }, 1000)
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .GroupStart {
    min-height: 100vh;
    .GroupStart-top {
      padding: 0 24px;
      .title {
        margin-bottom: 20px;
        margin-top: 60px;
        font-size: 42px;
      }
      .middle {
        font-size: 30px;
        margin-bottom: 65px;
        .time {
          margin-top: 12px;
          color: #222;
        }
        .avatars {
          margin-top: 60px;
        }
      }
      .bottom {
        width: 100%;
        height: 90px;
        margin-bottom: 36px;
        line-height: 90px;
        font-size: 32px;
        border-radius: 10px;
        .wechat {
          margin-right: 20px;
          @include bg-imgall(48px, "../assets/icon-wechat")
        }
      }
      .group-success {
        .group-success-icon {
          margin-top: 50px;
          .group-success-img {
            @include bg-imgall(120px, "../assets/icon_success")
          }
        }
        .group-success-text {
          margin: 30px 0 50px 0;
        }
        .group-success-av {
          padding-bottom: 50px;
        }
      }
      .buy-success{
        .group-success-text{
          padding-bottom: 50px;
        }
      }
    }
    .GroupStart-middle {
      padding: 43px 0 50px 0;
      .GroupStart-middle-title {
        margin-bottom: 32px;
      }
    }
    .GroupStart-detail {
      margin: 20px 24px 0 24px;
    }
    .GroupStart-bottom {
      padding: 0 24px;
      .GroupStart-normal-bottom {
        width: 100%;
        font-size: 32px;
        box-sizing: border-box;
        margin-top: 129px;
        background-color: inherit;
      }
      .gourp-success-bottom {
        display: block;
        height: 90px;
        width: 100%;
        margin-top: 81px;
        line-height: 90px;
        border: 1px solid #F22E3A;
        border-radius: 10px;
        background-color: inherit;
      }
    }
  }
</style>
