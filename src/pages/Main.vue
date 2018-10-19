<template>
  <div class="main-tabs">
    <header-area></header-area>
    <aside-area></aside-area>
    <div class="main-content">
      <tab-view></tab-view>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderArea from './HeaderArea'
import AsideArea from './AsideArea'
import TabView from './TabView'
export default{
  data () {
    return {}
  },
  components: {
    HeaderArea,
    AsideArea,
    TabView
  }
}
</script>
<style lang="scss">
.main-tabs{
  width: 100%;
  height: 100%;
  .main-content{
    margin-left: 180px;
  }
}
</style>
