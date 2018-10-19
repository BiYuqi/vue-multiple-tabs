import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseSet from '@/utils/base-config'
import routes from './routes'
Vue.use(VueRouter)
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
