import Main from '@/pages//Main.vue'
import routerMap from '@/utils/router/routerMap'
function addRouter (param) {
  const vm = param.vm
  const com = param.com
  const name = param.name
  const params = param.params
  const query = param.query
  const component = param.component
  const tab = {
    name: name,
    path: '/' + name,
    component: component,
    meta: {
      component: com,
      title: name,
      isTabView: true,
      params,
      query
    }
  }
  /**
   * 动态路由
   */
  // 判断是否已经存在该路由
  let flag = false
  const routes = []
  const routerItem = {
    path: '/',
    name: 'dynamic',
    component: Main,
    children: []
  }
  const dynamic = (sessionStorage.getItem('dynamic') && JSON.parse(sessionStorage.getItem('dynamic'))) || []
  if (dynamic.length > 0) {
    const len = dynamic.length
    for (let i = 0; i < len; i++) {
      if (dynamic[i].name === name) {
        flag = true
        break
      }
    }
  }
  /**
   * 如果未打开，则新增路由
   */
  if (!flag) {
    routerItem.children.push(tab)
    routes.push(routerItem)
    dynamic.push(tab)
    sessionStorage.setItem('dynamic', JSON.stringify(dynamic))
    vm.$router.addRoutes(routes)
  }
  /**
   * 跳转路由
   */
  vm.$router.push({
    name: name,
    params,
    query
  })
}

/**
 * 这里只是针对一个组件进行复用，实可根据业务进行动态传入组件name
 * 具体请看@/pages/DashBoard/index.vue 具体用法
 * @param {路由信息对象} message
 */
export function jumpRouter (message) {
  var obj = {
    vm: message.vm,
    component: routerMap[message.component],
    com: message.com,
    name: message.name,
    params: message.params,
    query: message.query
  }
  addRouter(obj)
}

/**
 * 防止页面刷新时， 路由丢失问题
 * @param { routerMap } 动态路由模板映射
 * @param { routes } 空数组，因为addRoutes只支持数组
 * @param { childrens } children 不多解释
 * @param {当前实例} vm
 */
export function refreshAddRouter (vm) {
  // 此处正则提取的是路由的文件夹名，请注意，是为了map映射取key, 会得到GoodDetail
  // GoodDetail: () => import('@/pages/GoodDetail/GoodDetail.vue')
  const dynamic = (sessionStorage.getItem('dynamic') && JSON.parse(sessionStorage.getItem('dynamic'))) || []
  const routes = []
  const routerItem = {
    path: '/',
    name: 'dynamic',
    component: Main,
    children: []
  }
  if (dynamic.length > 0) {
    for (let i = 0; i < dynamic.length; i++) {
      const FullPath = dynamic[i].meta.component
      const mapName = FullPath.substring(FullPath.lastIndexOf('/') + 1, FullPath.lastIndexOf('.'))
      dynamic[i].component = routerMap[mapName]
      routerItem.children.push(dynamic[i])
    }
    routes.push(routerItem)
    vm.$router.addRoutes(routes)
  }
}
