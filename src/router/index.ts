import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Every5 from '../pages/Every5Minutes.vue'
import EveryDay from '../pages/EveryDayAtMidnight.vue'
import EveryWeekdy from '../pages/EveryWeekday.vue'
import Every10 from '../pages/Every10Minutes.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/every-5-minutes', component: Every5 },
    { path: '/every-day-midnight', component: EveryDay },
    { path: '/every-weekday', component: EveryWeekdy },
    { path: '/every-10-minutes', component: Every10 }
  ],
})

export default router
