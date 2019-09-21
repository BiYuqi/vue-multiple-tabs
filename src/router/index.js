import Vue from "vue";
import VueRouter from "vue-router";
import utils from "@/utils/base-config";
import routes from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

router.afterEach(to => {
  utils.addOpendPage(
    router.app,
    to.name,
    to.params,
    to.query,
    to.meta,
    to.path
  );
});

export default router;
