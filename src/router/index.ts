import { createRouter, createWebHistory } from 'vue-router'
import AButtonView from '../views/AButtonView.vue'
import ACardView from '../views/ACardView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'button',
      component: AButtonView,
    },
    {
      path: '/card',
      name: 'card',
      component: ACardView,
    }
  ],
})

export default router
