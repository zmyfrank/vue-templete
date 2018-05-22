/**
* created by frank on 2018/5/15
*/
<template>
  <div class="groupInvite bg-f5">
    <div class="groupInvite-top bg-red">
      <div class="top-ava"></div>
      <div class="top-title color-fff font-32 text-center font-blod">小明向你发起拼团</div>
      <div class="top-time">
        <p class="top-itme-text font-24 color-fff">距离结束还剩</p>
        <GoodsCountdown :end-time="timetest"></GoodsCountdown>
      </div>
      <div class="top-detail bg-fff">
        <div class="text text-center font-blod">我还差<span class="color-red">2</span>人，就拼团成功啦</div>
        <GroupAvatars :amount="amount" :imgList="imgArr"></GroupAvatars>
      </div>
    </div>
    <div class="groupInvite-item mg-top-20">
      <goodsItem></goodsItem>
    </div>
    <div class="groupInvite-footer">
      <BaseFooter></BaseFooter>
    </div>
  </div>
</template>

<script>
import GoodsCountdown from '@/components/GoodsCountdown'
import GroupAvatars from '@/components/GroupAvatars'
import goodsItem from '@/components/GoodsItem'
import BaseFooter from '@/components/BaseFooter'

export default {
  name: 'groupInvite',
  data () {
    return {
      timetest: new Date().getTime(),
      amount: 4,
      imgArr: ['https://img2.woyaogexing.com/2018/05/14/eb05f6ae18cd6a30!400x400_big.jpg', 'https://img2.woyaogexing.com/2018/05/14/3a7b51a2a480191e!400x400_big.jpg']
    }
  },
  components: {
    GoodsCountdown,
    GroupAvatars,
    goodsItem,
    BaseFooter
  },
  created () {
    setTimeout(() => {
      this.timetest += 1000000
    }, 1000)
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .groupInvite {
    padding-bottom: 203px;
    .groupInvite-top {
      padding: 24px;
      .top-ava {
        margin: 0 auto;
        @include bg-img-normal(120px, '../assets/avter.jpeg');
        border-radius: 50%;
      }
      .top-title{
        margin: 20px 0;
      }
      .top-time{
        display: flex;
        justify-content: center;
        align-items: center;
        .top-itme-text{
          margin-right: 24px;
        }
      }
      .top-detail{
        margin-top: 40px;
        padding: 40px 0;
        .text{
          margin-bottom: 40px;
          font-size: 42px;
        }
      }
    }
    .groupInvite-item{}
  }
</style>
