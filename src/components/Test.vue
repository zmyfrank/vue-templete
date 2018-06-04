/**
* created by frank on 2018/6/4
*/
<template>
  <div class="Test">
    <el-radio-group v-model="radio2" @change="changeItem">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      radio2: 3
    }
  },
  methods: {
    changeItem (item) {
      console.log(item)
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
  .Test {

  }
</style>
