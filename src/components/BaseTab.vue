/**
* created by frank on 2018/5/15
*/
<template>
  <div class="baseTab bg-fff">
    <tab :line-width="1" default-color="#999" active-color="#333" custom-bar-width="10px">
      <tab-item v-for="(item,index) in tabArr" :key="index" @on-item-click="clickItem(index)" :selected="index===0">
        {{item}}
      </tab-item>
    </tab>
  </div>
</template>

<script>
import {Tab, TabItem} from 'vux'

export default {
  name: 'baseTab',
  props: {
    tabArr: {
      type: Array,
      require: true
    }
  },
  methods: {
    clickItem (index) {
      this.$emit('clickItem', index)
    }
  },
  components: {
    Tab,
    TabItem
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .baseTab {
    .vux-tab-wrap{
      z-index: 1000;
      width: 100%;
      position: fixed;
      top: 0;
      height: 100px;
      padding: 0;
    }
    .vux-tab-container {
      background-color: #fff;
      height: 100px;
    }
    .vux-tab {
      height: 100px;
      .vux-tab-item {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: bold;
        background:#fff;
      }
    }
    .vux-tab-ink-bar{
      background-color: #fff!important;
      height: 6px!important;
    }
    .vux-tab-bar-inner {
      width: 50px !important;
      height: 6px !important;
    }
  }
</style>
