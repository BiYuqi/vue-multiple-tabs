import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  /**
   * 默认tabview 首页
   */
  pageOpendList: [
    {
      path: '/dashboard',
      name: 'dashboard_index',
      component: () => import('@/pages/DashBoard'),
      meta: {
        title: '首页',
        isTabView: true
      }
    }
  ]
}
const mutations = {
  /**
   * 初始化设置tab 一般默认首页,页面加载时调用
   * @method tabOpendListInit
   */
  setOpenedList (state) {
    const local = sessionStorage.pageOpendList && JSON.parse(sessionStorage.pageOpendList).length > 0
    if (local) {
      state.pageOpendList = JSON.parse(sessionStorage.pageOpendList)
    }
  },
  /**
   * 每次打开页面都会经过此方法，用于合并参数
   * @method setPageOpendList
   */
  setPageOpendList (state, res) {
    const {index, query, params, meta, path} = res
    let opendPage = state.pageOpendList[index]
    if (params) {
      opendPage.params = params
    }
    if (query) {
      opendPage.query = query
    }
    if (meta) {
      opendPage.meta = meta
    }
    if (path) {
      opendPage.path = path
    }
    state.pageOpendList.splice(index, 1, opendPage)
    sessionStorage.pageOpendList = JSON.stringify(state.pageOpendList)
  },
  increateTag (state, tag) {
    state.pageOpendList.push(tag)
  },
  /**
   * @param {*} state
   * @param {当前页签信息} obj
   * @param { 当前实例 } obj.vm
   * @param { 路由name} obj.name
   */
  closeOpendList (state, obj) {
    // 临时解决方案 后续再完善
    const lists = state.pageOpendList
    if (obj.name === 'dashboard_index') {
      return
    }
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].name === obj.name) {
        const lastName = state.pageOpendList[i - 1].name
        state.pageOpendList.splice(i, 1)
        sessionStorage.setItem('pageOpendList', JSON.stringify(state.pageOpendList))
        obj.vm.$router.push({
          name: lastName
        })
      }
    }
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
