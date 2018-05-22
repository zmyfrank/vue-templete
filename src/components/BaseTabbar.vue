/**
* created by frank on 2018/5/14
*/
<template>
  <div class="baseTabbar">
    <tabbar>
      <tabbar-item link="/goods/goodsList" :selected="routeHome.choose">
        <img slot="icon" :src="routeHome.url">
        <span slot="label">热门</span>
      </tabbar-item>
      <tabbar-item link="/cardPackage" :selected="routeCard.choose">
        <img slot="icon" :src="routeCard.url">
        <span slot="label">卡包</span>
      </tabbar-item>
      <tabbar-item link="/mine" :selected="routeMine.choose">
        <img slot="icon" :src="routeMine.url">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux'

export default {
  name: 'baseTabbar',
  data () {
    return {
      routName: this.$route.path,
      imgBaseUrl: '../../static/basetabbar/'
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    routeHome () {
      let data = {}
      if (this.$route.path === '/goods/goodsList') {
        data.url = `${this.imgBaseUrl}icon_nav-home-active.png`
        data.choose = true
      } else {
        data.url = `${this.imgBaseUrl}icon_nav-home.png`
        data.choose = false
      }
      return data
    },
    routeCard () {
      let data = {}
      if (this.$route.path === '/cardPackage') {
        data.url = `${this.imgBaseUrl}icon_nav-card-active.png`
        data.choose = true
      } else {
        data.url = `${this.imgBaseUrl}icon_nav-card.png`
        data.choose = false
      }
      return data
    },
    routeMine () {
      let data = {}
      if (this.$route.path === '/mine') {
        data.url = `${this.imgBaseUrl}icon_nav-mine-active.png`
        data.choose = true
      } else {
        data.url = `${this.imgBaseUrl}icon_nav-mine.png`
        data.choose = false
      }
      return data
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .baseTabbar {
    background-color: #fff;
    .weui-tabbar {
      height: 120px;
      position: fixed;
      box-sizing: border-box;
      background-color: #fff;
    }
    .weui-tabbar__icon {
      width: 68px;
      height: 68px;
    }
    .weui-tabbar:before {
      display: none;
    }
    .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
      color: #F22E3A;
    }
    .weui-tabbar__label{
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
