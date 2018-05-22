/**
* created by frank on 2018/5/11
*/
<template>
  <div class="GroupAvatars">
    <div v-for="(item,index) in avatarList" :key="index" class="avatar-wraper">
      <div class="avatar-item">
        <img v-show="item!==''" :src="item" alt="用户头像">
        <img v-show="item===''" src="../assets/icon_user@2x.png" alt="用户头像">
      </div>
      <i class="usertop" v-show="index===0"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroupAvatars',
  props: {
    amount: {
      type: Number,
      require: true
    },
    imgList: {
      type: Array,
      require: true
    }
  },
  computed: {
    avatarList () {
      let list = [...this.imgList]
      for (let i = this.imgList.length; i < this.amount; i++) {
        list.push('')
      }
      return list
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";
  .GroupAvatars {
    display: flex;
    justify-content: center;
    .avatar-wraper{
      position: relative;
      &:first-child .avatar-item{
        margin-left: 0;
      }
      &:first-child{
        .avatar-item{
          border: 1px solid #F22E3A;
        }
      }
      .avatar-item{
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #EBEBEB;
        margin-left: 20px;
        img{
          width: 100%;
        }
      }
      .usertop{
        position: absolute;
        left: 2px;
        top: 0;
        @include bg-imgall(36px,'../assets/icon-usertop')
      }
    }

  }
</style>
