import Main from "@views/Main.vue";
import configMapping from "../config";
import { storeSetting } from "../config";

const { dynamicName } = storeSetting;

const addRouter = param => {
  const vm = param.vm;
  const com = param.com;
  const name = param.name;
  const params = param.params;
  const query = param.query;
  const component = param.component;
  const tab = {
    name: name,
    path: "/" + name,
    component: component,
    meta: {
      component: com,
      title: name,
      isTabView: true,
      params,
      query
    }
  };
  /**
   * 动态路由
   */
  // 判断是否已经存在该路由
  let flag = false;
  const routes = [];
  const routerItem = {
    path: "/",
    name: dynamicName,
    component: Main,
    children: []
  };
  const dynamic =
    (sessionStorage.getItem(dynamicName) &&
      JSON.parse(sessionStorage.getItem(dynamicName))) ||
    [];
  if (dynamic.length > 0) {
    const len = dynamic.length;
    for (let i = 0; i < len; i++) {
      if (dynamic[i].name === name) {
        flag = true;
        break;
      }
    }
  }
  /**
   * 如果未打开，则新增路由
   */
  if (!flag) {
    routerItem.children.push(tab);
    routes.push(routerItem);
    dynamic.push(tab);
    sessionStorage.setItem(dynamicName, JSON.stringify(dynamic));
    vm.$router.addRoutes(routes);
  }
  /**
   * 跳转路由
   */
  vm.$router.push({
    name: name,
    params,
    query
  });
};

/**
 * 这里只是针对一个组件进行复用，实可根据业务进行动态传入组件name
 * 具体请看@/pages/DashBoard/index.vue 具体用法
 * @param {路由信息对象} message
 */
export const insertRouter = message => {
  var obj = {
    vm: message.vm,
    component: configMapping[message.component],
    com: message.com,
    name: message.name,
    params: message.params,
    query: message.query
  };
  addRouter(obj);
};
