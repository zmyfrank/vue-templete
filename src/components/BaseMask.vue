/**
* created by frank on 2018/5/21
*/
<template>
  <div class="BaseMask" v-show="showImgMask">
    <div class="BaseMask-img">
      <img src="../assets/start-group.png" alt="">
    </div>
    <div @click="close" class="BaseMask-btn color-fff font-32">确定</div>
  </div>
</template>

<script>
export default {
  name: 'BaseMask',
  props: {
    showImgMask: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .BaseMask {
    position: fixed;
    z-index: 1000;
    height: 100vh;
    width: 100vw;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);
    .BaseMask-img {
      width: 100vw;
      img{
        width: 100%;
      }
    }
    .BaseMask-btn{
      width: 100%;
      position: fixed;
      bottom: 128px;
      text-align: center;
    }
  }
</style>
