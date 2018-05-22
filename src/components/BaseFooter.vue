/**
* created by frank on 2018/5/10
*/
<template>
  <div class="BaseFooter">
    <div class="normal-buy">
      <div class="share"></div>
      <div class="phone"></div>
      <div class="single" v-show="false">
        <p class="price font-blod">29.99</p>
        <p class="title">单独购买</p>
      </div>
      <router-link :to="{path:'/group/groupStart'}" class="group">
        <p class="price font-blod">19.99</p>
        <p class="title">发起拼团</p>
      </router-link>
      <div class="amout">
        <GoodsAmount></GoodsAmount>
      </div>
    </div>
    <div class="group-buy">
      <div class="amount bg-fff">
        <GoodsAmount></GoodsAmount>
      </div>
      <div v-show="false" class="buy bg-red font-36">
        <p>19.99参与拼团</p>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsStore from '@/components/GoodsStore'
import GoodsAmount from '@/components/GoodsAmount'

export default {
  name: 'BaseFooter',
  components: {
    GoodsStore,
    GoodsAmount
  }
  // TODo：增加状态 团购 抢购 参与团购
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin.scss";
  .BaseFooter {
    height: 110px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    .normal-buy {
      display: flex;
      box-sizing: border-box;
      .share, .phone {
        width: 120px;
        height: 110px;
        background-size: 120px 110px;
      }
      .share {
        @include bg-img("../assets/icon_share_120")
      }
      .phone {
        @include bg-img("../assets/icon_phone_120");
        @include base-project-1px-l(#eee)
      }
      .single, .group {
        padding-top: 23px;
        text-align: center;
      }
      .single {
        width: 190px;
        color: #999;
        .price {
          margin-bottom: 6px;
          font-size: 28px;
        }
        .title {
          font-size: 26px;
        }
      }
      .group {
        flex: 1;
        color: #fff;
        background-color: #F22E3A;
        .price {
          margin-bottom: 6px;
          font-size: 28px;
        }
        .title {
          font-size: 26px;
        }
      }
      .amout {
        position: absolute;
        top: -100px;
        right: 40px;
        height: 80px;
        width: 240px;
        box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.2);
        background-color: #fff;
        display: flex;
        justify-content: center;
      }
    }
    .group-buy {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      .amount {
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .buy {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
      }
    }

  }
</style>
