/**
* created by frank on 2018/5/11
*/
<template>
  <div class="BaseOrderDetail">
    <p class="BaseOrderDetail-cell color-999">
      <span class="title">订单编号</span>
      <span class="detail">0123575891</span>
    </p>
    <p class="BaseOrderDetail-cell color-999">
      <span class="title">订单编号</span>
      <span class="detail">0123575891</span>
    </p>
    <p class="BaseOrderDetail-cell color-999">
      <span class="title">订单编号</span>
      <span class="detail">0123575891</span>
    </p>
    <p class="BaseOrderDetail-cell color-999">
      <span class="title">订单编号</span>
      <span class="detail">0123575891</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseOrderDetail'
}
</script>

<style type='stylesheet/scss' lang="scss">
  .BaseOrderDetail {
    padding: 30px 24px;
    .BaseOrderDetail-cell {
      margin-bottom: 20px;
      font-size: 28px;
      display: flex;
      &:last-child {
        margin-bottom: 0;
      }
      .title{
        width: 160px;
        box-sizing: border-box;
      }
    }
  }
</style>
