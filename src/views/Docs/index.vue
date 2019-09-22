<template>
  <div class="docs-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>普通路由</span>
      </div>
      <div>
        常规（未复用的组件）路由直接在路由表配置
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>动态路由</span>
      </div>
      <div>
        动态路由(需要复用的组件)，路由需要在utils/config配置,使用utils(utils/dunamic-router)导出的方法进行跳转，删除.具体请看Dashboard/ 组件 有两种使用方式
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.docs-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .box-card {
    width: 50%;
    margin: 0 10px;
  }
}
</style>
