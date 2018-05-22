/**
* created by frank on 2018/5/15
*/
<template>
  <div class="goodsItem">
    <div class="list-item-img">
      <div class="list-item-time" v-show="showTime">
        <GoodsCountdown backgroundColor="#fff" dioColor="#fff" :end-time="timetest"></GoodsCountdown>
        <div class="list-item-img-text color-fff">
          后结束
        </div>
      </div>
    </div>
    <div class="list-item-title">两元代金券渝宗老火锅限量发放中就看看健健康</div>
    <div class="list-item-subtitle">新店开业 全店通用 无门槛</div>
    <div class="list-item-price">
      <span class="list-item-price-left">￥50.00</span>
      <span class="list-item-price-right">
            <span class="font-36 font-blod">￥19.90</span>
            <span class="font-24 text">开团</span>
          </span>
    </div>
    <div class="list-item-alert">
      <div class="list-item-alert-description">
        <div class="description-avatar box-shadow-1px">
          <img src="../assets/avter.jpeg" alt="头像">
        </div>
        <div class="description-text">
          小柚子在江湖 已拼团
        </div>
      </div>
      <div class="list-item-alert-num">
        1145 已拼团
      </div>
    </div>
  </div>
</template>

<script>
import GoodsCountdown from '@/components/GoodsCountdown'

export default {
  name: 'goodsItem',
  data () {
    return {
      timetest: new Date().getTime() + 100000
    }
  },
  props: {
    showTime: {
      type: Boolean,
      default: true
    }
  },
  components: {
    GoodsCountdown
  },
  created () {
    setTimeout(() => {
      this.timetest += 100000
    })
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .goodsItem {
    background-color: #fff;
    padding: 30px 24px 40px 24px;
    .list-item-img {
      height: 395px;
      width: 702px;
      background-size: cover;
      background-image: url("../assets/goodsimg.jpg");
      .list-item-time {
        height: 78px;
        width: 285px;
        background-color: rgba(34, 34, 34, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 0 21px 0;
        .time-number {
          color: #222;
        }
        .time-dio {
          color: #fff;
        }
        .list-item-img-text {
          font-size: 24px;
          margin-left: 7px;
        }
      }
    }
    .list-item-title {
      margin: 30px 0 20px 0;
      font-size: 32px;
      font-weight: 600;
      color: #222;
    }
    .list-item-subtitle {
      margin-bottom: 30px;
      font-size: 26px;
      color: #F22E3A;
    }
    .list-item-price {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      .list-item-price-left {
        margin-right: 24px;
        font-size: 30px;
        color: #999;
        text-decoration: line-through;
      }
      .list-item-price-right {
        width: 220px;
        height: 70px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F22E3A;
        border-radius: 10px;
        color: #fff;
        .text {
          padding-top: 10px;
          padding-left: 20px;
        }
      }
    }
    .list-item-alert {
      display: flex;
      height: 80px;
      padding: 0 30px 0 24px;
      margin-top: 30px;
      background-color: rgba(249, 249, 249, 1);
      align-items: center;
      justify-content: space-between;
      color: #999;
      font-size: 0;
      .list-item-alert-description {
        .description-text, .description-avatar {
          display: inline-block;
          vertical-align: middle;
        }
        .description-text {
          font-size: 28px;
        }
        .description-avatar {
          @include base-project-1px(#EBEBEB);
          margin-right: 15px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .list-item-alert-num {
        font-size: 26px;
        text-align: right;
      }
    }
  }
</style>
