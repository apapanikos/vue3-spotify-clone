import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import http from '@/shared/services/http/api'
import { AxiosKey } from '@/shared/services/http/symbols'

const app = createApp(App)
app.provide(AxiosKey, http)

app.use(createPinia())
app.use(router)

app.mount('#app')
