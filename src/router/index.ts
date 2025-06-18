import { createRouter, createWebHistory } from 'vue-router';
import AButtonView from '../views/AButtonView.vue';
import ACardView from '../views/ACardView.vue';
import APanelView from '../views/APanelView.vue';
// import ADividerView from '../views/ADividerView.vue'

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
    },
    {
      path: '/panel',
      name: 'panel',
      component: APanelView,
    },
    // {
    //   path: '/divider',
    //   name: 'divider',
    //   component: ADividerView,
    // }
  ],
});

export default router;
