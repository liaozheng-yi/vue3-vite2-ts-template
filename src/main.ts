import { createApp } from 'vue'
import App from './App.vue'
import naive from './plugin/naive'
const app = createApp(App)
app.use(naive)
app.mount('#app')
