import VueRouter from "vue-router";
import mainRoutes from "@/router/routes";

export const resetRouter = vm => {
  const routes = [...mainRoutes];
  let newRouter = new VueRouter({
    mode: "hash",
    routes
  });
  vm.$router.matcher = newRouter.matcher;
};
