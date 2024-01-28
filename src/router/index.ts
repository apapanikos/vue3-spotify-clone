import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { layout: 'BlankLayout' },
      component: HomeView
    },
    {
      path: '/app',
      meta: { layout: 'MainLayout' },
      component: () => import('../views/HomeView.vue')
    }
  ]
})

export default router
