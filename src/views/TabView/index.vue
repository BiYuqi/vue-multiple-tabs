<template>
  <div class="tag-view-wrap">
    <el-tag
      class="tag-view"
      v-for="item in tagList"
      :key="item.id"
      :class="{ active: item.name === $route.name }"
      @click.native="jump(item)"
      @close="close(item.name)"
      :closable="item.name !== 'dashboard_index'"
    >
      {{ item.meta.title }}
    </el-tag>
  </div>
</template>

<script>
import utils from "@/utils";
export default {
  computed: {
    tagList() {
      return this.$store.state.pageOpendList;
    }
  },
  methods: {
    jump(item) {
      const { params, query } = item;
      /**
       * @description
       * 下面四种情况考虑到参数传递的问题，所以单独处理
       */
      if (params) {
        this.$router.push({
          name: item.name,
          params: params
        });
        return;
      }
      if (query) {
        this.$router.push({
          name: item.name,
          query: query
        });
        return;
      }
      if (query && params) {
        this.$router.push({
          name: item.name,
          params: params,
          query: query
        });
        return;
      }
      this.$router.push({
        name: item.name
      });
    },
    close(name) {
      utils.removeRouter(this, name);
    }
  }
};
</script>

<style lang="scss">
.tag-view-wrap {
  padding: 4px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
  .tag-view {
    border-radius: 0;
    margin: 0 2px;
    border: 1px solid #eee;
    color: #495060;
    height: 26px;
    line-height: 26px;
    background-color: #fff;
    transition: all 0.2s;
    cursor: pointer;
    &.active {
      background-color: #1fc7c7;
      color: #fff;
      .el-tag__close {
        color: #fff;
      }
    }
  }
}
</style>
