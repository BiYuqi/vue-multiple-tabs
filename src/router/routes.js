/**
 * @param isTabView 是否放入TabView
 */
export default [
  {
    path: '/',
    name: 'home_index',
    component: () => import('@/pages/Main.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        component: () => import('@/pages/DashBoard/index.vue'),
        meta: {
          isTabView: true,
          title: '首页'
        }
      }
    ]
  }
]
