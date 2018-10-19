<template>
  <div class="good-detail">
    <h2>我是组件GoodDetail.vue</h2>
    <h3>商品编号 {{ $route.meta.params.id }}</h3>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$route.meta.params)
  }
}
</script>

<style scoped>
</style>
