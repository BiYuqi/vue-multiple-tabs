<template>
  <div class="dash-board">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>模拟商品列表</h2>
      </div>
      <div v-for="o in 4" :key="o" class="text-item" @click="jump(o)">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <br />
    <el-button type="primary" @click="goToDocs">跳转到文档页[普通路由]</el-button>
  </div>
</template>

<script>
import utils from "@/utils";
export default {
  data() {
    return {};
  },
  methods: {
    jump(o) {
      const name = "listing" + o;
      /**
       * @param { 当前实例 } vm
       * @param { 当前动态路由模板名字 } component
       * @param { 临时缓存组件地址 } com
       * @param { 路由name } name 具体看业务是传订单号，还是name+时间戳 要求是不重复
       * @param { 具体传参数 } params
       * @param { 查询参数 } query
       */
      var obj = {
        vm: this,
        component: "GoodDetail",
        com: "@views/GoodDetail/GoodDetail.vue",
        name: name,
        params: {
          id: o
        },
        query: {}
      };
      utils.insertRouter(obj);
    },
    goToDocs() {
      this.$router.push({
        name: "docs_index"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.text-item {
  border-bottom: 1px dashed rgb(44, 136, 179);
  cursor: pointer;
}
</style>
