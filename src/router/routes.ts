import { RouteRecordRaw } from 'vue-router'

export const aRoutes = [
  {
    path: '/other',
    component: () => import('../pages/Home.vue')
  }
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../pages/Home.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/404.vue')
  }
]
