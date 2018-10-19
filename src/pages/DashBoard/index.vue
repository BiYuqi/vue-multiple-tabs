<template>
  <div class="dash-board">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>模拟商品列表</h2>
      </div>
      <div v-for="o in 4" :key="o" class="text-item" @click="jump(o)">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <div class="read-me">
    </div>
  </div>
</template>

<script>
import { jumpRouter } from '@/utils/router/insertDynaminRouter'
export default {
  data () {
    return {}
  },
  methods: {
    jump (o) {
      const name = 'list-' + o
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
        component: 'GoodDetail',
        com: '@/pages/GoodDetail/GoodDetail.vue',
        name: name,
        params: {
          id: o
        },
        query: {}
      }
      jumpRouter(obj)
    }
  }
}
</script>

<style lang="scss" scoped>
.text-item {
  border-bottom: 1px dashed rgb(44, 136, 179);
  cursor: pointer;
}
</style>
