import Main from "@views/Main.vue";
import configMapping from "./config";
import { storeSetting } from './config';

const { dynamicName } = storeSetting

/**
 * 防止页面刷新时， 路由丢失问题
 * @param { routerMap } 动态路由模板映射
 * @param { routes } 空数组，因为addRoutes只支持数组
 * @param { childrens } children 不多解释
 * @param {当前实例} vm
 */
export const refreshRouterSync = vm => {
  // 此处正则提取的是路由的文件夹名，请注意，是为了map映射取key, 会得到GoodDetail
  // GoodDetail: () => import('@views/GoodDetail/GoodDetail.vue')
  const dynamic =
    (sessionStorage.getItem(dynamicName) &&
      JSON.parse(sessionStorage.getItem(dynamicName))) ||
    [];
  const routes = [];
  const routerItem = {
    path: "/",
    name: dynamicName,
    component: Main,
    children: []
  };
  if (dynamic.length > 0) {
    for (let i = 0; i < dynamic.length; i++) {
      const FullPath = dynamic[i].meta.component;
      const mapName = FullPath.substring(
        FullPath.lastIndexOf("/") + 1,
        FullPath.lastIndexOf(".")
      );
      dynamic[i].component = configMapping[mapName];
      routerItem.children.push(dynamic[i]);
    }
    routes.push(routerItem);
    vm.$router.addRoutes(routes);
  }
};
