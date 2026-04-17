import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Every5 from '../pages/Every5Minutes.vue'
import EveryDay from '../pages/EveryDayAtMidnight.vue'
import EveryWeekdy from '../pages/EveryWeekday.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/every-5-minutes', component: Every5 },
    { path: '/every-day-midnight', component: EveryDay },
    { path: '/every-weekday', component: EveryWeekdy }
  ],
})

export default router
