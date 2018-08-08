# vue-multiple-tabs-use-one-component
## 介绍
> 该工程是基于vue的动态路由案例，复用一个组件，打开多个tab标签页，实现商品类组件复用，可以多tab打开

## TODO
- [x] 复用组件多tab打开
- [x] 刷新动态路由页面不丢失
- [x] 支持路由传参
- [x] 修复刷新时，动态路由参数丢失
- [x] 删除tab页签(包含注入的动态路由)
- [ ] 功能实现文档编写
- [ ] 代码优化，整合，方便快速部署该功能
 
## 使用
* 具体请看src/pages/DashBoard/index.vue 具体用法
* 所有动态路由参数均放在meta字段里

## Example
```js
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
```
## 预览
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
