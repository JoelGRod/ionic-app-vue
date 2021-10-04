import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import listsRoutes from '@/domains/lists/router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/lists/lists1'
  },
  {
    path: '/lists/',
    component: () => import('@/domains/lists/layouts/Tabs.vue'),
    children: listsRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
