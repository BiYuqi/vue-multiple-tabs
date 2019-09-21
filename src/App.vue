<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import utils from "./utils";
export default {
  name: "app",
  data() {
    return {};
  },
  beforeCreate() {
    utils.refreshRouterSync(this);
    setTimeout(() => {
      this.$store.commit("setOpenedList");
    }, 0);
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
