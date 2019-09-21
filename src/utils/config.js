export const storeSetting = {
  storeName: 'tab-view-router-list',
  dynamicName: 'dynamic-router-list'
};

/**
 * @description
 * 页面刷新路由回写，动态映射component组件
 */
export default {
  GoodDetail: () => import("@views/GoodDetail/GoodDetail.vue")
};
