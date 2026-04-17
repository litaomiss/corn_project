import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Every5 from '../pages/Every5Minutes.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/every-5-minutes', component: Every5 }
  ],
})

export default router
