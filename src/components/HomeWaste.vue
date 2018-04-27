/**
* created by frank on 2018/4/26
*/
<template>
    <div class="HomeWaste">
      <div class="title">列表组件</div>
      <ul>
        <slot
          name="item"
          v-for="item in items"
          :text="item.text"
        >
          列表为空
        </slot>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWaste',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style type='stylesheet/scss' lang="scss">
    .HomeWaste {
    }
</style>
