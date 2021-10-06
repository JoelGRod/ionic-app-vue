import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import listsRoutes from '@/domains/lists/router';
import homeRoutes from '@/domains/home/router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/domains/home/layouts/HomeLayout.vue'),
    children: homeRoutes
  },
  {
    path: '/lists',
    component: () => import('@/domains/lists/layouts/ListsLayout.vue'),
    children: listsRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
