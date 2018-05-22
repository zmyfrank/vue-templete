/**
* created by frank on 2018/4/26
*/
<template>
  <div class="HomeList">
    <!--<header class="header">这里是头部</header>-->
    <!--<nav>-->
      <!--<router-link to="goodsList">商品</router-link>-->
      <!--<router-link to="goodsDetail">商品</router-link>-->
    <!--</nav>-->
    <div class="main">
      <!--<HomeWaste :items="items">-->
        <!--<li-->
          <!--slot="item"-->
          <!--slot-scope="props"-->
        <!--&gt;-->
          <!--{{props.text}}-->
        <!--</li>-->
      <!--</HomeWaste>-->
      <!--<input type="text">-->
      <router-view></router-view>
    </div>
    <!--<footer class="footer">这里是底部</footer>-->
  </div>
</template>

<script>
import HomeWaste from '@/components/HomeWaste'
export default {
  name: 'HomeList',
  render: (h) => h('h1', '你好'),
  data () {
    return {
      msg: '父元素标题',
      items: [{text: 1}, {text: 1}, {text: 1}, {text: 1}, {text: 1}, {text: 1}]
    }
  },
  methods: {
    handleScroll () {
      console.log(this.$el)
    }
  },
  components: {
    HomeWaste
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .HomeList {
    -webkit-overflow-scrolling:touch;
  }
</style>
