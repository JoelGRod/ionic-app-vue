import { RouteRecordRaw } from "vue-router";

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/tabs/tab1",
  },
  {
    path: "tab1",
    component: () => import("@/domains/home/pages/Tab1.vue"),
  },
  {
    path: "tab2",
    component: () => import("@/domains/home/pages/Tab2.vue"),
  },
  {
    path: "tab3",
    component: () => import("@/domains/home/pages/Tab3.vue"),
  },
];

export default homeRoutes;
