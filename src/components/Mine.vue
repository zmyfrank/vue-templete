/**
* created by frank on 2018/5/15
*/
<template>
  <div class="mine bg-f5">
    <div class="header bg-fff">
      <div class="header-ava">
        <img src="../assets/avter.jpeg" alt="用户头像">
      </div>
      <div class="header-info">
        <div class="header-info-top font-blod font-42">卖企鹅的小马哥</div>
        <div class="hader-info-bottom">150 8669 9999</div>
      </div>
      <i class="icon-rightn"></i>
    </div>
    <div class="mine-coupon bg-fff">
      <couponNormal></couponNormal>
    </div>
    <div class="mine-main mg-top-20 bg-fff">
      <router-link to="/cardPackage" class="mine-main-item">
        <div class="mine-main-item-left">
          <i class="icon-mycard item-card"></i>
          <span class="text">我的卡包</span>
        </div>
        <i class="icon-rightn"></i>
      </router-link>
      <router-link to="/myOrderList" class="mine-main-item">
        <div class="mine-main-item-left">
          <i class="icon-myorder item-card"></i>
          <span class="text">我的订单</span>
        </div>
        <i class="icon-rightn"></i>
      </router-link>
    </div>
    <div class="foot">
      <BaseTabbar></BaseTabbar>
    </div>
  </div>
</template>

<script>
import couponNormal from '@/components/CouponNormal'
import BaseTabbar from '@/components/BaseTabbar'

export default {
  name: 'mine',
  components: {
    couponNormal,
    BaseTabbar
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";
  .mine {
    min-height: 100vh;
    .header {
      padding: 59px 36px 0 36px;
      position: relative;
      display: flex;
      align-items: center;
      .icon-rightn {
        position: absolute;
        top: 110px;
        right: 37px;
      }
      .header-ava {
        width: 120px;
        height: 120px;
        box-sizing: border-box;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #EBEBEB;
        margin-right: 30px;
        img {
          width: 100%;
        }
      }
      .header-info {
        .hader-info-bottom {
          margin-top: 25px;
          color: #666;
          font-size: 28px;
        }
      }
    }
    .mine-coupon {
      padding: 58px 36px 36px 36px;
    }
    .mine-main {
      padding: 0 36px 0 36px;
      .mine-main-item{
        height: 110px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @include border-1px(#eee);
        &:last-child{
          @include border-none()
        }
        .item-card{
          margin-right: 20px;
        }
        .mine-main-item-left{
          .text{
            display: inline-block;
            vertical-align: middle;
            font-size: 32px;
            color: #333;
          }
        }
      }
    }
  }
</style>
