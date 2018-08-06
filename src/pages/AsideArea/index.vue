<template>
  <div class="aside-pan">
    侧边栏
    <el-button @click="jump">大杀四方</el-button>
  </div>
</template>

<script>
  export default {
    methods: {
      jump () {
        this.$router.push({
          name: 'test_index'
        })
      }
    }
  }
</script>

<style scoped>
.aside-pan{
  position: fixed;
  top: 60px;
  left: 0;
  width: 180px;
  height: 100%;
  color: #fff;
  background-color: darkslategray;
}
</style>