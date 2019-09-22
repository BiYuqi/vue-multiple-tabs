/**
 * @param isTabView 是否放入Tabs管理
 */
export default [
  {
    path: "/",
    name: "home_index",
    component: () => import("@views/Main.vue"),
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard_index",
        component: () => import("@views/DashBoard/index.vue"),
        meta: {
          isTabView: true,
          title: "首页"
        }
      },
      {
        path: "docs",
        name: "docs_index",
        component: () => import("@views/Docs/index.vue"),
        meta: {
          isTabView: true,
          title: "文档使用"
        }
      }
    ]
  }
];
