<template>
  <div class="main-wrapper">
    <header-area></header-area>
    <aside-area></aside-area>
    <div class="main-container">
      <tab-view></tab-view>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderArea from "./HeaderArea";
import AsideArea from "./AsideArea";
import TabView from "./TabView";
export default {
  data() {
    return {};
  },
  components: {
    HeaderArea,
    AsideArea,
    TabView
  }
};
</script>
<style lang="scss">
.main-wrapper {
  width: 100%;
  height: 100%;
  .main-container {
    margin-left: 120px;
  }
  @media screen and (max-width: 800px) {
    .main-container {
      margin-left: 0;
    }
  }
}
</style>
