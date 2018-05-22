/**
* created by frank on 2018/5/10
*/
<template>
  <div class="GoodsStoreList">
    <GoodsStore :list="true"></GoodsStore>
    <GoodsStore :list="true"></GoodsStore>
    <GoodsStore :list="true"></GoodsStore>
    <GoodsStore :list="true"></GoodsStore>
  </div>
</template>

<script>
import GoodsStore from '@/components/GoodsStore'

export default {
  name: 'GoodsStoreList',
  components: {
    GoodsStore
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .GoodsStoreList {
    padding: 0 24px;
  }
</style>
