import { RouteRecordRaw } from "vue-router";

const listsRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/lists/lists1",
  },
  {
    path: "lists1",
    name: "Lists-1",
    component: () => import("@/domains/lists/pages/Tab1.vue"),
  },
  {
    path: "lists2",
    name: "Lists-2",
    component: () => import("@/domains/lists/pages/Tab2.vue"),
  },
];

export default listsRoutes;
