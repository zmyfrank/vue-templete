<template>
  <div id="app">
    <div class="mask" v-show="showMask"></div>
    <keep-alive include="">
      <router-view class="router-wrapper"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    showMask () {
      return this.$store.state.isFetching
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .mask{
    position: fixed;
    z-index: 2;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
  .showMask{
    margin: 40px 0;
  }
</style>
