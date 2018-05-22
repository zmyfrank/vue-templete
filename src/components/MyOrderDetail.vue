/**
* created by frank on 2018/5/21
*/
<template>
  <div class="myOrderDetail bg-f5">
    <div class="myOrderDetail-header">
      <my-order-detail-header :type="1"></my-order-detail-header>
    </div>
    <div class="myOrderDetail-main">
      <div class="main-block">
        <div class="title">
          <span class="left">优惠详情</span>
        </div>
        <div class="main">
          <div class="main-img">
            <img src="../assets/goodsimg.jpg" alt="">
          </div>
          <div class="main-detail">
            <p class="main-detail-title color-222 font-28">腾讯大排档 特惠4人餐</p>
            <router-link to="/goods/goodsDetail" class="main-detail-btn font-28 color-f68">查看详情</router-link>
          </div>
        </div>
      </div>
      <div class="main-block">
        <GoodsStore :list="false"></GoodsStore>
      </div>
      <div class="main-block">
        <div class="title">
          <span class="left">订单详情</span>
        </div>
        <div class="order">
          <div class="order-cel color-999 font-28">
            <span class="order-cel-title">订单编号</span>
            <span class="order-cel-value">0123456789</span>
            <span class="order-cel-right color-f68">复制单号</span>
          </div>
          <div class="order-cel color-999 font-28">
            <span class="order-cel-title">订单编号</span>
            <span class="order-cel-value">0123456789</span>
          </div>
          <div class="order-cel color-999 font-28">
            <span class="order-cel-title">订单编号</span>
            <span class="order-cel-value">0123456789</span>
          </div>
          <div class="order-cel color-999 font-28">
            <span class="order-cel-title">订单编号</span>
            <span class="order-cel-value">0123456789</span>
          </div>
        </div>
      </div>
      <div class="main-block">
        <div class="title">
          <span class="left">票券</span>
          <span class="right font-28 color-red">拼团成功后您将获得</span>
        </div>
        <div class="main-coupon">
          <CouponNormal></CouponNormal>
        </div>
      </div>
    </div>
    <div class="myOrderDetail-footer bg-fff">
      <button class="myOrderDetail-footer-btn font-28 color-222 text-center">申请取消</button>
    </div>
  </div>
</template>

<script>
import GroupAvatars from '@/components/GroupAvatars'
import myOrderDetailHeader from '@/components/MyOrderDetailHeader'
import GoodsStore from '@/components/GoodsStore'
import CouponNormal from '@/components/CouponNormal'

export default {
  name: 'myOrderDetail',
  components: {
    GroupAvatars,
    myOrderDetailHeader,
    GoodsStore,
    CouponNormal
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .myOrderDetail {
    min-height: 100vh;
    padding-bottom: 211px;
    .myOrderDetail-main {
      .main-block {
        margin-top: 20px;
        padding: 0 24px;
        background-color: #fff;
        .title {
          padding: 36px 0 24px 0;
          display: flex;
          justify-content: space-between;
          @include base-project-1px-b(#eee);
          font-size: 30px;
          .left {
            color: #222;
            font-weight: bold;
          }
        }
        .order {
          padding-bottom: 30px;
          .order-cel {
            position: relative;
            margin-top: 20px;
            &:first-child{
              margin-top: 28px;
            }
            .order-cel-value {
              margin-left: 40px;
            }
            .order-cel-right {
              position: absolute;
              right: 0;
            }
          }
        }
        .main-coupon{
          margin: 30px auto;
          width: 678px;
          height: 220px;
        }
        .main {
          display: flex;
          padding-top: 42px;
          padding-bottom: 40px;
          .main-img {
            width: 249px;
            height: 140px;
            img {
              width: 100%;
            }
          }
          .main-detail {
            position: relative;
            margin-left: 30px;
            padding: 10px 0;
            flex: 1;
            .main-detail-btn {
              position: absolute;
              bottom: 0;
              left: 0;
            }
          }
        }
      }
    }
    .myOrderDetail-footer{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 111px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .myOrderDetail-footer-btn{
        background-color: #fff;
        width: 180px;
        padding: 10px 0;
        margin-right: 24px;
        border: 1px solid #999;
      }
    }
  }
</style>
