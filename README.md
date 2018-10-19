# [vue-multiple-tabs](http://loadingmore.com/vue-multiple-tabs)
## 介绍
> 该工程是基于vue的动态路由案例，复用一个组件，打开多个tab标签页，实现商品类组件复用，可以多tab打开

## 特性
- [x] 复用组件多tab打开
- [x] 刷新动态路由页面不丢失
- [x] 支持路由传参
- [x] 修复刷新时，动态路由参数丢失
- [x] 删除tab页签(包含注入的动态路由)
- [x] 功能实现文档编写
- [ ] 代码优化，整合，方便快速部署该功能
 
## 使用
* [预览效果](http://loadingmore.com/vue-multiple-tabs)
* 具体请看src/pages/DashBoard/index.vue 具体用法
```js
import { jumpRouter } from '@/utils/router/insertDynaminRouter'
/**
 * @param { 当前实例 } vm
 * @param { 当前动态路由模板名字 } component
 * @param { 临时缓存组件地址 } com
 * @param { 路由name } name 具体看业务是传订单号，还是name+时间戳 要求是不重复
 * @param { 具体传参数 } params
 * @param { 查询参数 } query
 */
var obj = {
  vm: this, // 当前实例
  component: 'GoodDetail', // 组件名字, 底层实现会自动截取[GoodDetail.vue] .vue前的单词作为name
  com: '@/pages/GoodDetail/GoodDetail.vue', // 真实的组件地址
  name: name, // 路由name
  params: {
    id: o
  },
  query: {}
}
jumpRouter(obj)
```

## 思路(关键的几个js)

* 利用vue提供的addRoutes方法进行动态的注入路由
* 解决页面刷新动态路由丢失(借助本地缓存，每次刷新进行比对)
* 提供一系列的操作方法
* 最终暴露两个方法，一个跳转路由，一个删除路由(tab页签)

##### **[utils/base-config.js](https://github.com/BiYuqi/vue-multiple-tabs-use-one-component/blob/master/src/utils/base-config.js)** 

主要作用是生成浏览记录，产生tab页签数据,不多做解释

##### **[utils/router/routerMap.js](https://github.com/BiYuqi/vue-multiple-tabs-use-one-component/blob/master/src/utils/router/routerMap.js)** 

主要作用是提供动态组件的模板页面, 每次页面刷新，重新注入路由，都需要该js提供的map组件,为什么用map结构？因为取值方便

##### **[utils/router/delAndResetRouter.js](https://github.com/BiYuqi/vue-multiple-tabs-use-one-component/blob/master/src/utils/router/delAndResetRouter.js)** 

主要作用是删除路由(即删除tab页签)，包括四步骤(四个方法)：
```js
// 删除本地路由
delDynamicLocalRoutes(name)
// 重置全局路由
resetRouter(vm)
// 重新实例化路由
refreshAddRouter(vm)
// 关闭页签，删除相关缓存
store.commit('closeOpendList', {
  vm,
  name
})

// 最终暴露一个方法 delAndResetRouter

// 页面使用
import { delAndResetRouter } from '@/utils/router/delAndResetRouter'

// 传递实例this, 路由name
delAndResetRouter(this, name)
```
##### **[utils/router/insertDynaminRouter.js](https://github.com/BiYuqi/vue-multiple-tabs-use-one-component/blob/master/src/utils/router/insertDynaminRouter.js)** 

主要作用是跳转页面(暴露一个对外方法jumpRouter)：
```js
import { jumpRouter } from '@/utils/router/insertDynaminRouter'

const name = 'list-' + o
/**
 * @param { 当前实例 } vm
 * @param { 当前动态路由模板名字 } component
 * @param { 临时缓存组件地址 } com
 * @param { 路由name } name 具体看业务是传订单号，还是name+时间戳 要求是不重复
 * @param { 具体传参数 } params
 * @param { 查询参数 } query
 */
var obj = {
  vm: this,
  component: 'GoodDetail',
  com: '@/pages/GoodDetail/GoodDetail.vue',
  name: name,
  params: {
    id: o
  },
  query: {}
}
jumpRouter(obj)
```

注： 可以加很多模板，只需要在routerMap.js配置即可，使用时注意以下两个参数
```js
// 不同的模板，注意引用不同的模板组件
component: 'GoodDetail', 
com: '@/pages/GoodDetail/GoodDetail.vue',
```

## 预览
[页面预览](vue-multiple-tabs)
![](http://oiukswkar.bkt.clouddn.com/dynamic-router.gif)

## 本地使用

``` bash
# download
git clone https://github.com/BiYuqi/vue-multiple-tabs-use-one-component.git
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
