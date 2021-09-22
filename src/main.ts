import { createApp } from 'vue'
import AppRoot from './AppRoot.vue'
import naive from './plugin/naive'
import createAppRouter from './router'
import { routes } from './router/routes'
import store from './store/index' //vuex仓库
const app = createApp(AppRoot)
const router = createAppRouter(routes)

app.use(router).use(naive).use(store)

router.isReady().then(() => {
  app.mount('#app')
})
