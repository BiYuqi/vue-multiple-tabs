<template>
  <div class="tag-view-wrap">
    <el-tag
      class="tag-view"
      v-for="item in tagList"
      :key="item.id"
      :class="{ active: item.name === $route.name }"
      @click.native="jump(item)"
      @close="close(item.name)"
      :closable="item.name !== 'dashboard_index'">
      {{ item.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import { delAndResetRouter } from '@/utils/router/delAndResetRouter'
export default {
  computed: {
    tagList () {
      return this.$store.state.pageOpendList
    }
  },
  methods: {
    jump (item) {
      const { params, query } = item
      /**
       * @description
       * 下面四种情况考虑到参数传递的问题，所以单独处理
       */
      if (params) {
        this.$router.push({
          name: item.name,
          params: params
        })
        return
      }
      if (query) {
        this.$router.push({
          name: item.name,
          query: query
        })
        return
      }
      if (query && params) {
        this.$router.push({
          name: item.name,
          params: params,
          query: query
        })
        return
      }
      this.$router.push({
        name: item.name
      })
    },
    close (name) {
      console.log(name)
      delAndResetRouter(this, name)
    }
  }
}
</script>

<style lang="scss">
.tag-view-wrap {
  padding: 4px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
  .tag-view {
    cursor: pointer;
    margin: 0 4px;
    &.active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
