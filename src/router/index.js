import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseSet from '@/utils/base-config'
import Main from '@/pages/Main'
Vue.use(VueRouter)
/**
 * @param isTabView 是否放入TabView
 */
const routes = [
  {
    path: '',
    name: 'home_index',
    component: Main,
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
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to, from, next) => {
  BaseSet.addOpendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
})

export default router