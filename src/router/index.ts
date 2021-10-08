import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import listsRoutes from '@/domains/lists/router';
import homeRoutes from '@/domains/home/router';
import utilityRoutes from '@/domains/utility/router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { name: "HomePage" }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/domains/home/layouts/HomeLayout.vue'),
    children: homeRoutes
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('@/domains/lists/layouts/ListsLayout.vue'),
    children: listsRoutes
  },
  {
    path: '/utils',
    name: 'Utils',
    component: () => import('@/domains/utility/layouts/UtilityLayout.vue'),
    children: utilityRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: "HomePage" }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
