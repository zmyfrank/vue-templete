/**
* created by frank on 2018/5/10
*/
<template>
  <div class="GoodsStore">
    <div class="store-head" v-show="!list">
      <span class="left">适用门店</span>
      <router-link to="/goods/goodsStoreList" class="right">查看所有分店</router-link>
    </div>
    <div class="store-detail" :class="list?'border':''">
      <div class="store-detail-top" :class="list?'specail':''">
        <span class="font-blod">渝宗老火锅-水郡丽城店</span>
        <span v-show="!list" class="alert">离你最近</span>
        <span v-show="list" class="color-999 font-26">20km</span>
      </div>
      <div class="store-detail-bottom">
        <span class="icon-address"></span>
        重庆 渝北区 锦橙路3号附9(近水晶郦城 静苑)
      </div>
      <div class="store-detail-img"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsStore',
  props: {
    list: {
      type: Boolean,
      require: true
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";
  .GoodsStore {
    background-color: #fff;
    .store-head {
      padding: 36px 0 24px 0;
      display: flex;
      justify-content: space-between;
      @include base-project-1px-b(#eee);
      font-size: 30px;
      .left {
        color: #222;
        font-weight: bold;
      }
      .right {
        color: #F6852F;
      }
    }
    .store-detail {
      padding: 44px 0;
      position: relative;
      &.border {
        @include border-1px(#eee);
      }
      .store-detail-top {
        width: 520px;
        margin-bottom: 10px;
        font-size: 30px;
        color: #222;
        &.specail{
          display: flex;
          justify-content: space-between;
        }
        .alert {
          display: inline-block;
          padding: 4px 11px;
          background-color: #F6852F;
          color: #fff;
          font-size: 20px;
          border-radius: 16px;
          vertical-align: top;
        }
      }
      .store-detail-bottom {
        width: 520px;
        font-size: 28px;
        line-height: 42px;
        color: #999;
      }
      .store-detail-img {
        position: absolute;
        width: 130px;
        height: 130px;
        background-size: 130px 130px;
        right: 20px;
        top: 40px;
        @include bg-img("../assets/icon_phone-130");
        border-left: 1px solid #eee;
      }
    }
  }
</style>
