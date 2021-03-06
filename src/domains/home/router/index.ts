import { RouteRecordRaw } from "vue-router";

const homeRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: "",
  //   redirect: "/home/home",
  // },
  {
    path: "",
    name: "HomePage",
    component: () => import(
      /* webpackChunkName: "HomePage" */ 
      "@/domains/home/pages/HomePage.vue"
    ),
  },
];

export default homeRoutes;