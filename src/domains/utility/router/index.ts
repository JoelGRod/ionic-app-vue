import { RouteRecordRaw } from "vue-router";

const utilityRoutes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: { name: "GridPage" },
  },
  {
    path: "grid",
    name: "GridPage",
    component: () => import("@/domains/utility/pages/GridPage.vue"),
  },
  {
    path: "utils",
    name: "UtilsPage",
    component: () => import("@/domains/utility/pages/UtilsPage.vue"),
  },
];

export default utilityRoutes;
