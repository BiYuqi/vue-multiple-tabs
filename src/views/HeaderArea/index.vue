<template>
  <div class="header-container">
    Vue项目多tab标签实战
    <a href="https://github.com/BiYuqi/vue-multiple-tabs" target="_blank"
      >@author</a
    >
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-left: 120px;
  background-color: #fff;
  color: #666;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  a {
    color: #999;

    &:hover {
      color: #1fc7c7;
    }
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
}
</style>
