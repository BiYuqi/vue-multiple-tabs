<template>
  <div class="dash-board">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>模拟商品列表</span>
      </div>
      <div v-for="o in 4" :key="o" class="text-item" @click="jump(o)">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { jumpRouter } from '@/utils/router/jumpRouter'
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
       * @param { 路由name } name
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
.text-item{
  border-bottom: 1px solid rgb(35, 120, 160);
}
</style>