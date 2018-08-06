<template>
  <div class="good-detail">
    商品详情 {{ $route.params.id }}
  </div>
</template>

<script>
  export default {
    mounted () {
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>

</style>