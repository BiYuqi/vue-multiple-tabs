<template>
  <div class="aside-container">
    <div class="aside-container__text">侧边栏</div>
  </div>
</template>

<style lang="scss" scoped>
.aside-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 120px;
  height: 100%;
  color: #fff;
  background-color: #304156;
  text-align: center;
  padding-top: 150px;

  &__text {
    width: 20px;
    margin: 0 auto;
    line-height: 24px;
    font-size: 20px;
  }
}
@media screen and (max-width: 800px) {
  .aside-container {
    display: none;
  }
}
</style>
