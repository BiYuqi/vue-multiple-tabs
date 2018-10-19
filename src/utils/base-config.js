import store from '@/store'
export default {
  /**
   * @method addOpendPage
   * @param vm 当前实例
   * @param name 当前路由name
   * @param query 查询参数
   * @param param 查询参数
   * 一般放在router BeforeAfter(BeforeEach) 执行
   */
  addOpendPage: (vm, name, params = '', query = '', meta = '', path = '') => {
    let pageOpendList = store.state.pageOpendList
    let opendLen = pageOpendList.length
    let i = 0
    let tagHasOpened = false
    if (opendLen > 0) {
      for (; i < opendLen; i++) {
        if (name === pageOpendList[i].name) {
          vm.$store.commit('setPageOpendList', {
            index: i,
            params,
            query,
            meta
          })
          tagHasOpened = true
          break
        }
      }
    }
    /**
     * 注入参数
     */
    if (!tagHasOpened && name) {
      let tag = {
        name: name
      }
      if (params) {
        tag.params = params
      }
      if (query) {
        tag.query = query
      }
      if (meta && meta.isTabView) {
        tag.meta = meta
      } else if (meta && !meta.isTabView) {
        return
      }
      if (path) {
        tag.path = path
      }
      store.commit('increateTag', tag)
    }
  }
}
