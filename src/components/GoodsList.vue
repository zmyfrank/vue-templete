/**
* created by frank on 2018/4/26
*/
<template>
  <div class="GoodsList">
    <ul class="list">
      <li @click="goDetail" class="list-item">
        <goodsItem></goodsItem>
      </li>
      <li @click="goDetail" class="list-item">
        <goodsItem></goodsItem>
      </li>
      <li @click="goDetail" class="list-item">
        <goodsItem></goodsItem>
      </li>
      <li @click="goDetail" class="list-item">
        <goodsItem></goodsItem>
      </li>
    </ul>
    <div v-show="showLoader" class="wrapper">
      <div class="typing_loader"></div>
    </div>
    <baseTabbar></baseTabbar>
  </div>
</template>

<script>
import util from '@/common/utils.js'
import BaseTabbar from '@/components/BaseTabbar'
import goodsItem from '@/components/GoodsItem'

export default {
  name: 'Goods',
  data () {
    return {
      goodsList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      showLoader: false,
      timetest: new Date().getTime()
    }
  },
  computed: {
    testValue () {
      localStorage.item = JSON.parse(localStorage.item) || 1
      return JSON.parse(localStorage.item)
    }
  },
  methods: {
    goDetail () {
      this.$router.push({path: 'goodsDetail'})
    },
    handleScroll () {
      console.log(`当前滚动条高度${window.scrollY}，设备窗口高度${window.innerHeight}，滚动条总高度${document.body.scrollHeight}，
      当前是否满足${window.scrollY + window.innerHeight >= document.body.scrollHeight}`)
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight && !this.showLoader) {
        this.showLoader = true
        setTimeout(() => this.addList(), 1000)
      }
    },
    addList () {
      let length = this.goodsList.length
      let addArray = []
      for (let i = length - 1; i < length + 9; i++) {
        addArray.push(i + 2)
      }
      this.goodsList = [...this.goodsList, ...addArray]
      this.showLoader = false
    },
    test () {
      let intervalTimer = setInterval(() => {
        let remainTime = util.getRemainTime(new Date(1535244526979))
        console.log(remainTime)
        if (remainTime.total <= 0) {
          clearInterval(intervalTimer)
        }
      }, 1000)
    }
  },
  components: {
    BaseTabbar,
    goodsItem
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    setTimeout(() => {
      this.timetest = 1535244526979
    }, 3000)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  @import "../common/scss/mixin";

  .GoodsList {
    padding-top: 20px;
    padding-bottom: 120px;
    background-color: #f5f5f5;;
    .box-shadow-1px {
      box-shadow: inset 0px -1px 1px -1px #EBEBEB;
    }
    .list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      .list-item {
        margin-bottom: 20px;
        background-color: #fff;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
