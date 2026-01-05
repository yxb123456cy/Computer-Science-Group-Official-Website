import ArcoVue from '@arco-design/web-vue'
// 引入ARcoDesignVue Icon图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@arco-design/web-vue/dist/arco.css'
import './assets/global.less'

const app = createApp(App)
// 全量使用ArcoDesignVue
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
