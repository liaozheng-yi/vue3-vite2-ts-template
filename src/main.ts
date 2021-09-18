import { createApp } from 'vue'
import AppRoot from './AppRoot.vue'
import naive from './plugin/naive'
import createAppRouter from './router'
import { routes } from './router/routes'
const app = createApp(AppRoot)
const router = createAppRouter(routes)
app.use(router)
app.use(naive)

router.isReady().then(() => {
  app.mount('#app')
})
