import { storeSetting } from './config';

/**
 * @param name 动态路由编号，提交后删除本地存储的路由
 */
export const deleteLocalRouter = name => {
  const { dynamicName } = storeSetting
  const localRoutes =
    sessionStorage.getItem(dynamicName) &&
    JSON.parse(sessionStorage.getItem(dynamicName));
  if (localRoutes && localRoutes.length > 0) {
    for (let i = 0; i < localRoutes.length; i++) {
      if (localRoutes[i].name === name) {
        localRoutes.splice(i, 1);
        sessionStorage.setItem(dynamicName, JSON.stringify(localRoutes));
        break;
      }
    }
  }
};
