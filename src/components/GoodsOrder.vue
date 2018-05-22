/**
* created by frank on 2018/5/22
*/
<template>
  <div class="goods-order bg-f5">
    <div class="goods-order-top bg-fff">
      <div class="goods-order-top-img">
        <img src="../assets/goodsimg.jpg" alt="">
      </div>
      <div class="goods-order-top-detail">
        <p class="goods-order-top-detail-title color-222 font-28">腾讯大排档 特惠4人餐</p>
        <router-link to="/goods/goodsDetail" class="goods-order-top-detail-btn font-28 color-f68">查看详情</router-link>
      </div>
    </div>
    <div class="goods-order-main">
      <div class="goods-order-main-item">
        <div class="goods-order-main_title bg-fff">
          <span class="title-left">请填写信息</span>
          <span class="title-right color-red">必填</span>
        </div>
        <div class="goods-order-main_detail bg-fff">
          <div class="detail-input">
            <i class="icon-order-user"></i>
            <input class="detail-input-item" type="text" placeholder="请输入您的姓名">
          </div>
          <div class="detail-input">
            <i class="icon-order-phone"></i>
            <input class="detail-input-item" type="text" placeholder="请输入您的手机号">
          </div>
          <div class="detail-input">
            <i class="icon-order-code"></i>
            <input class="detail-input-item" type="text" placeholder="请输入验证码">
            <button class="detail-input-code">获取验证码</button>
          </div>
        </div>
      </div>
      <div class="goods-order-main-item">
        <div class="goods-order-main_title bg-fff">
          <span class="title-left">购买信息</span>
        </div>
        <div class="goods-order-main_detail bg-fff">
          <div class="main-order">
            <div class="main-order-description">
              <div class="main-order-description-left">
                <p class="left-top font-36">小龙虾五人餐</p>
                <p class="left-bottom font-24">三人拼团</p>
              </div>
              <div class="main-order-description-right">
                <p class="right-top color-222 font-28">￥19.99</p>
                <p class="right-middle font-24">￥99.00</p>
                <p class="right-bottom font-24">x3</p>
              </div>
            </div>
            <div class="main-order-amount">
              <div class="amount-txt color-999">数量</div>
              <goodsAmount></goodsAmount>
            </div>
            <div class="main-order-money">
              <div class="main-order-money-text color-222 font-28">应付金额</div>
              <div class="main-order-money-amount color-red font-blod font-36">￥59.97</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="goods-order-commit text-center font-36 color-fff font-blod finish">确认支付</button>
  </div>
</template>

<script>
import goodsAmount from '@/components/GoodsAmount'
export default {
  name: 'goodsOrder',
  components: {
    goodsAmount
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .goods-order {
    .goods-order-top {
      display: flex;
      padding: 42px 24px 40px;
      .goods-order-top-img {
        width: 240px;
        height: 135px;
        img {
          width: 100%;
        }
      }
      .goods-order-top-detail {
        position: relative;
        margin-left: 30px;
        padding: 10px 0;
        flex: 1;
        .goods-order-top-detail-btn {
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
    .goods-order-main {
      .goods-order-main_title {
        margin-top: 20px;
        padding: 36px 24px;
        display: flex;
        justify-content: space-between;
        @include base-project-1px-b(#eee);
        font-size: 30px;
        .left {
          color: #222;
          font-weight: bold;
        }
      }
      .goods-order-main_detail {
        padding: 40px 24px;
        .detail-input {
          display: flex;
          margin-bottom: 24px;
          &:last-child {
            margin-bottom: 0;
          }
          i{
            margin-right: 10px;
          }
          .detail-input-item {
            flex: 1;
            min-width: 300px;
            background-color: #F5F5F5;
            border-radius: 10px;
            font-size: 30px;
            padding: 25px 24px;
            ::placeholder {
              color: #999;
            }
          }
          .detail-input-code{
            width: 218px;
            line-height: 80px;
            margin-left: 24px;
            text-align: center;
            background-color: #F6852F;
            color: #fff;
            border-radius: 10px;
          }
        }
        .main-order {
          .main-order-description {
            display: flex;
            padding: 30px 24px 24px;
            justify-content: space-between;
            background-color: #F5F7FA;
            border-radius: 10px;
            color: #999;
            .main-order-description-left {
              .left-top {
                color: #333;
                margin-bottom: 22px;
              }
              .left-bootom {
                font-size: 24px;
              }
            }
            .main-order-description-right {
              text-align: right;
              .right-middle {
                margin: 10px 0;
                text-decoration: line-through;
              }
            }
          }
          .main-order-amount{
            display: flex;
            height: 100px;
            padding: 0 24px 0 19px;
            align-items: center;
            justify-content: space-between;
            .GoodsAmount .middle .text{
              display: none;
            }
          }
          .main-order-money{
            height: 120px;
            margin-top: 42px;
            padding: 0 24px 0 19px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include base-project-1px-t(#eee)
          }
        }
      }
    }
    .goods-order-commit{
      margin-top: 100px;
      width: 100vw;
      height: 110px;
      line-height: 110px;
      &.finish{
        background-color: #63D760;
      }
      &.notfinish{
        background-color: #D6D6D6;
      }
    }
  }
</style>
