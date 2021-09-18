import { LoadingBarApi } from 'naive-ui'
import { Ref } from '@vue/reactivity'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const loadingBarApiRef = {} as Ref<LoadingBarApi>

export default function createAppRouter(routes: RouteRecordRaw[]) {
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  router.beforeEach((to, from, next) => {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.start()
      }
    }
    next()
  })

  router.afterEach((to, from) => {
    if (!from || to.path !== from.path) {
      if (loadingBarApiRef.value) {
        loadingBarApiRef.value.finish()
      }
    }
  })

  return router
}
