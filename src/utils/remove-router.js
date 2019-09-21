import { resetRouter } from "./reset-router";
import { deleteLocalRouter } from "./delete-local-router";
import { refreshRouterSync } from "./refresh-router";
import store from "@/store";

export function removeRouter(vm, name) {
  deleteLocalRouter(name);
  resetRouter(vm);
  refreshRouterSync(vm);
  store.commit("closeOpendList", {
    vm,
    name
  });
}
