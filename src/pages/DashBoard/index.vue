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
      var obj = {
        vm: this,
        component: () => import('@/pages/GoodDetail/index.vue'),
        com: '@/pages/GoodDetail/index.vue',
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