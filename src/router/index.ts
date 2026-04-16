import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/App.vue'
import Every5 from '@/pages/Every5Minutes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/every-5-minutes', component: Every5 }
  ],
})

export default router
