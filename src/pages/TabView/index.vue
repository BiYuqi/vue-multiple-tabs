<template>
  <div class="tag-view-wrap">
    <el-tag
      class="tag-view"
      v-for="item in tagList"
      :key="item.id"
      :class="{ active: item.name === $route.name }"
      @click.native="jump(item)"
      closable>
      {{ item.meta.title }}
    </el-tag>
  </div>
</template>

<script>
  export default {
    computed: {
      tagList () {
        return this.$store.state.pageOpendList
      }
    },
    methods: {
      jump (item) {
        const params = item.params
        const query = item.query
        if (params) { // 带有params参数
          this.$router.push({
            name: item.name,
            params: params
          })
          return
        }
        if (query) { // 带有query参数
          this.$router.push({
            name: item.name,
            query: query
          })
          return
        }
        if (query && params) { // 同时带有params&query参数
          this.$router.push({
            name: item.name,
            params: params,
            query: query
          })
          return
        }
        this.$router.push({ // 无参数
          name: item.name
        })
      }
    }
  }
</script>

<style lang="scss">
.tag-view-wrap{
  padding: 4px 0;
  border-bottom: 1px solid  rgb(230, 230, 230);
  .tag-view{
    cursor: pointer;
    margin: 0 4px;
    &.active{
      background-color: #409EFF;
      color: #fff;
    }
  }
}
</style>