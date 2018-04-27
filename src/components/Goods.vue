/**
* created by frank on 2018/4/26
*/
<template>
  <div class="HomeList">
    <header class="header">这里是头部</header>
    <nav>
      <router-link to="goodsList">商品</router-link>
      <router-link to="goodsDetail">商品</router-link>
    </nav>
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
    <footer class="footer">这里是底部</footer>
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
  components: {
    HomeWaste
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .HomeList {
    .header,.footer{
      position: fixed;
      height: 40px;
      background-color: #000;
      width: 100%;
      color: #fff;
      text-align: center;
    }
    .header{
      top: 0;
    }
    .footer{
      bottom: 0;
    }
  }
</style>
