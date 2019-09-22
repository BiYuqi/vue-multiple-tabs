/**
 * @storeSetting
 * 本地存储sessionStorage键值
 * @param {storeName} String 打开tab的本地存储name
 * @param {dynamicName} String 打开tab的动态路由存储name
 */
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
