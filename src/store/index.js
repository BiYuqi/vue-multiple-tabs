import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
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
   * @method tabOpendListInit 初始化设置tab 一般默认首页,页面加载时调用
   */
  setOpenedList(state) {
    const local = localStorage.pageOpendList && JSON.parse(localStorage.pageOpendList).length > 0
    if (local) {
      state.pageOpendList = JSON.parse(localStorage.pageOpendList)
    }
  },
  /**
   * 
   * @method setPageOpendList 每次打开页面都会经过此方法，用于合并参数
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
    localStorage.pageOpendList = JSON.stringify(state.pageOpendList)
  },
  increateTag (state, tag) {
    state.pageOpendList.push(tag)
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store