<template>
  <div class="aside-pan">
    我是侧边栏
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.aside-pan {
  position: fixed;
  top: 60px;
  left: 0;
  width: 180px;
  height: 100%;
  color: #fff;
  background-color: #20435d;
  text-align: center;
  padding-top: 150px;
}
@media screen and (max-width: 800px) {
  .aside-pan {
    display: none;
  }
}

</style>
