/**
* created by frank on 2018/5/15
*/
<template>
  <div class="cardPackage bg-f5">
    <div class="header">
      <baseTab :tabArr="tabs"></baseTab>
    </div>
    <div class="main">
      <div class="caritem">
        <couponNormal></couponNormal>
      </div>
      <div class="caritem">
        <couponNormal></couponNormal>
      </div>
      <div class="caritem">
        <couponNormal></couponNormal>
      </div>
      <div class="caritem">
        <couponNormal></couponNormal>
      </div>
      <div class="caritem">
        <couponNormal></couponNormal>
      </div>
    </div>
    <div class="foot">
      <BaseTabbar></BaseTabbar>
    </div>
  </div>
</template>

<script>
import BaseTab from '@/components/BaseTab'
import BaseTabbar from '@/components/BaseTabbar'
import couponNormal from '@/components/CouponNormal'

export default {
  name: 'cardPackage',
  data () {
    return {
      tabs: ['未使用', '已使用', '已过期']
    }
  },
  components: {
    BaseTab,
    BaseTabbar,
    couponNormal
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .cardPackage {
    min-height: 100vh;
    padding: 100px 0 120px 0;
    .main{
      padding: 0 36px;
      .caritem{
        margin-top: 36px;
        &:first-child{
          margin-top: 26px;
        }
      }
    }
  }
</style>
