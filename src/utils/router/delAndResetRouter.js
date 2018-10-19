import VueRouter from 'vue-router'
import { refreshAddRouter } from './insertDynaminRouter'
import mainRoutes from '@/router/routes'
import store from '@/store'
const resetRouter = (vm) => {
  const routes = [
    ...mainRoutes
  ]
  let newRouter = new VueRouter({
    mode: 'hash',
    routes
  })
  vm.$router.matcher = newRouter.matcher
}
/**
 * @param name 动态路由编号，提交警单后删除本地存储的路由
 */
const delDynamicLocalRoutes = (name) => {
  const localRoutes = sessionStorage.getItem('dynamic') && JSON.parse(sessionStorage.getItem('dynamic'))
  if (localRoutes && localRoutes.length > 0) {
    for (let i = 0; i < localRoutes.length; i++) {
      if (localRoutes[i].name === name) {
        localRoutes.splice(i, 1)
        sessionStorage.setItem('dynamic', JSON.stringify(localRoutes))
        break
      }
    }
  }
}
/**
 * @param name 检查是否存在本地的动态路由
 * 暂未用到
 */
// const hasDynamicLocalRoutes = (name) => {
//   const localRoutes = sessionStorage.dynamic && JSON.parse(sessionStorage.dynamic)
//   let hasLocal = false
//   if (localRoutes && localRoutes.length > 0) {
//     for (let i = 0; i < localRoutes.length; i++) {
//       if (localRoutes[i].name === name) {
//         hasLocal = true
//         break
//       }
//     }
//   }
//   return hasLocal
// }
/**
 * @description 删除路由方法，同时包括删除页签，更新路由
 * @param {当前实例} vm
 * @param { 关闭删除的路由name} name
 * 处理思路：
 * 1.先删除本地动态路由
 * 2.重置系统路由
 * 3.重新整合剩余路由
 * 4.处理opendlist页签，跳转页面
 */
export function delAndResetRouter (vm, name) {
  // 1
  delDynamicLocalRoutes(name)
  // 2
  resetRouter(vm)
  // 3
  refreshAddRouter(vm)
  // 4
  store.commit('closeOpendList', {
    vm,
    name
  })
}
