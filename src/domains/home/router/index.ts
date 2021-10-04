import { RouteRecordRaw } from "vue-router";

const homeRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: "",
  //   redirect: "/home/home",
  // },
  {
    path: "home",
    name: "home-1",
    component: () => import("@/domains/home/pages/HomePage.vue"),
  },
];

export default homeRoutes;