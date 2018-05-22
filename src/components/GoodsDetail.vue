/**
* created by frank on 2018/4/27
*/
<template>
  <div class="GoodsDetail pd-bottom-230">
    <swiper :list="changeList" dots-position="center" :show-desc-mask="false"
            dots-class="dot"></swiper>
    <header class="header">
      <div class="price">
        <div class="price-left">
          <span class="pricenow-price">0.01</span>
        </div>
        <div class="price-middle">
          <div class="price-middle-top">2人成团</div>
          <div class="price-middle-bottom">
            <span class="price-middle-bottom-left">￥50.00</span>
            <span class="price-middle-bottom-right">9878已拼团</span>
          </div>
        </div>
      </div>
      <div class="time">
        <div class="time-top">距离结束还剩</div>
        <div class="time-bottom">
          <GoodsCountdown :end-time="timetest" backgroundColor="#fff" dioColor="#fff"></GoodsCountdown>
        </div>
      </div>
    </header>
    <main class="GoodsDetail-main">
      <div class="descriptions">
        <div class="descriptions-titles">
          <div class="title">两元代金券渝宗老火锅限量发放中就看</div>
          <div class="subtitle">新店开业全店通用无门槛新店开业全店通用无门槛新店</div>
        </div>
        <div class="border"></div>
        <div class="descriptions-option">
          <span class="descriptions-option-item">需预约</span>
          <span class="descriptions-option-item">随时退</span>
        </div>
      </div>
      <div class="store">
        <GoodsStore :list="false"></GoodsStore>
      </div>
      <div class="discount">
        <div class="discount-header">
          <div class="discount-header-title">优惠详情</div>
          <div class="discount-header-placeholder"></div>
        </div>
        <div class="discount-header-main"></div>
      </div>
    </main>
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import {Alert, Swiper} from 'vux'
import GoodsCountdown from '@/components/GoodsCountdown'
import GoodsStore from '@/components/GoodsStore'
import BaseFooter from '@/components/BaseFooter'

export default {
  name: 'GoodsDetail',
  data () {
    return {
      localCount: 2,
      show: false,
      changeList: [{
        url: 'javascript:',
        img: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1525856482&di=54bd13efbf3cb867bc4c57855db3c106&src=http://pic5.photophoto.cn/20071221/0042040377755194_b.jpg'
      }, {
        url: 'javascript:',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1525866570953&di=b6ca30f70c1f345bf6451ebd0ea06754&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F39%2F73%2F86Z58PICKcu_1024.jpg',
        title: '送你一次旅行'
        // fallbackImg: 'https://static.vux.li/demo/3.jpg'
      }],
      timetest: new Date().getTime()
    }
  },
  methods: {
    test () {
      this.show = !this.show
    },
    onShow () {
      console.log('on show')
    },
    onHide () {
      console.log('on hide')
    },
    async clickNew () {
      await this.$store.dispatch('loginInfo')
    },
    ...mapMutations({add: 'increment'}),
    ...mapActions(['increment', 'incrementBy'])
  },
  computed: {
    secondCount () {
      return this.localCount + 1
    },
    nowChoose () {
      return this.$store.getters.getTodoById(2)
    },
    ...mapState({
      count: state => state.count,
      countAlias: 'count'
    }),
    ...mapGetters({
      doneTodo: 'doneTodo',
      getTodoById: 'getTodoById'
    })
  },
  components: {
    Alert,
    Swiper,
    GoodsCountdown,
    GoodsStore,
    BaseFooter
  },
  mounted () {
    setTimeout(() => {
      this.timetest = 1526919967627
    }, 100)
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin.scss";
  .GoodsDetail {
    background-color: #F5F5F5;
    .vux-slider .vux-indicator-right > a > .vux-icon-dot, .vux-slider > .vux-indicator > a > .vux-icon-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #fff;
    }
    .vux-slider .vux-indicator-right > a > .vux-icon-dot.active, .vux-slider > .vux-indicator > a > .vux-icon-dot.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
    .vux-swiper {
      height: 542px !important;
    }
    .header {
      padding: 23px 24px;
      display: flex;
      justify-content: space-between;
      background-color: #F22E3A;
      border-radius: 12px 12px 0 0;
      .price {
        color: #fff;
        .price-left, .price-middle, .price-right {
          display: inline-block;
        }
        .price-left {
          display: inline-block;
          font-size: 72px;
          font-weight: 600;
          &::before {
            content: "￥";
            font-size: 32px;
            font-weight: 200;
          }
        }
        .price-middle {
          .price-middle-top {
            width: 90px;
            margin-bottom: 11px;
            padding: 4px 0;
            border: 1px solid #fff;
            border-radius: 4px;
            font-size: 22px;
            color: #fff;
            font-weight: normal;
            text-align: center;
          }
          .price-middle-bottom {
            font-size: 0;
            .price-middle-bottom-left {
              text-decoration: line-through;
              color: #000;
              font-size: 26px;
            }
            .price-middle-bottom-right {
              margin-left: 27px;
              color: #fff;
              font-size: 26px;
            }
          }
        }
      }
      .time {
        .time-top {
          text-align: right;
          font-size: 24px;
          color: #fff;
        }
        .time-bottom {
          margin-top: 11px;
          .GoodsCountdown {
            .time-number {
              vertical-align: inherit;
              color: #F22E3A;
            }
            .time-dio {
              color: #fff;
              vertical-align: inherit;
            }
          }
        }
      }
    }
    .GoodsDetail-main{
      .descriptions{
        background-color: #fff;
        padding: 50px 24px 37px 24px;
        .descriptions-titles{
          padding-bottom: 67px;
          @include border-1px(#eee);
          .title{
            font-size: 36px;
            color: #222;
            font-weight: bold;
          }
          .subtitle{
            margin-top: 19px;
            font-size: 28px;
            color: #F22E3A;
          }
        }
        .descriptions-option{
          padding-top: 35px;
          .descriptions-option-item{
            padding: 0 20px;
            border-right: 1px solid #999;
            font-size: 28px;
            color: #999;
            &:first-child{
              padding-left: 0;
            }
            &:last-child{
              border: none;
            }
          }
        }
      }
      .store{
        margin-top: 20px;
        padding: 0 24px;
        background-color: #fff;
      }
      .discount{
        margin-top: 20px;
        padding: 0 24px;
        background-color: #fff;
        .discount-header{
          padding: 34px 0;
          .discount-header-title{
            margin-bottom: 15px;
            font-size: 30px;
            font-weight: 600;
            color: #222;
            text-align: center;
          }
          .discount-header-placeholder{
            width: 60px;
            height: 8px;
            margin: 0 auto;
            background-color: #EBEBEB;
          }
        }
        .discount-header-main{
          height: 300px;
          padding-bottom: 32px;
        }
      }
    }
  }
</style>
