/**
* created by frank on 2018/5/15
*/
<template>
  <div class="myOrderList bg-f5">
      <div class="myOrderList-headaer">
        <base-tab :tabArr="tabs"></base-tab>
      </div>
    <div class="order-list">
      <div class="list-item">
        <my-order-list-item :type="2" img="../../static/111.jpg"></my-order-list-item>
      </div>
      <div class="list-item">
        <my-order-list-item :type="2" img="../../static/222.jpg"></my-order-list-item>
      </div>
      <div class="list-item">
        <my-order-list-item :type="3" ></my-order-list-item>
      </div>
      <div class="list-item">
        <my-order-list-item :type="3"></my-order-list-item>
      </div>
      <div class="list-item">
        <my-order-list-item :type="3"></my-order-list-item>
      </div>
    </div>
  </div>
</template>

<script>
import BaseTab from '@/components/BaseTab'
import myOrderListItem from '@/components/MyOrderListItem'

export default {
  name: 'myOrderList',
  data () {
    return {
      tabs: ['全部', '拼团']
    }
  },
  components: {
    BaseTab,
    myOrderListItem
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .myOrderList {
    padding: 100px 0 60px 0;
    min-height: 100vh;
    .order-list{
      margin-top: 21px;
      .list-item{
        margin-top: 20px;
        &:first-child{
          margin-top: 0;
        }
      }
    }
  }
</style>
