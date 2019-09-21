export const storeSetting = {
  storeName: "tab-view-router-list",
  dynamicName: "dynamic-router-list"
};

/**
 * @description
 * 动态路由配置在此处
 * 可以全局使用
 */
export default {
  GoodDetail: () => import("@views/GoodDetail/GoodDetail.vue")
};
