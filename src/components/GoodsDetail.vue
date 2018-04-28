/**
* created by frank on 2018/4/27
*/
<template>
    <div class="GoodsDetail">
        这里是商品详情
      {{count}}
      <p>这是另外一个{{countAlias}}</p>
      <p>这个是本地的{{secondCount}}</p>
      <p v-for="(thing,index) in doneTodo" :key="index">{{thing.text}}和你的{{thing.done}}</p>
      <p>现在选择的是</p>
      <p>{{nowChoose.text}}和你的{{nowChoose.done}}</p>
      <button @click="increment">12332</button>
      <button @click="clickNew">button new</button>
    </div>
</template>

<script>

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'GoodsDetail',
  data () {
    return {
      localCount: 2
    }
  },
  methods: {
    async clickNew () {
      const res = await this.$store.dispatch('loginInfo')
      alert(res)
    },
    ...mapMutations({add: 'increment'}),
    ...mapActions(['increment', 'incrementBy'])
  },
  computed: {
    secondCount () {
      return this.localCount + 1
    },
    nowChoose () {
      return this.$store.getters.getTodoById(2)
    },
    ...mapState({
      count: state => state.count,
      countAlias: 'count'
    }),
    ...mapGetters({
      doneTodo: 'doneTodo',
      getTodoById: 'getTodoById'
    })
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
    .GoodsDetail {

    }
</style>
