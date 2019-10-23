import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

// 百度统计code
if (process.env.NODE_ENV === "production") {
  const _hmt = _hmt || [];
  (function() {
    const hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?417e3468daf68dcfa33329790b8f8fbf";
    const s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
