import { createRouter, createWebHistory } from 'vue-router';
import AButtonView from '../views/AButtonView.vue';
import ACardView from '../views/ACardView.vue';
import ADividerView from '../views/ADividerView.vue'
import AInputMaskView from '../views/AInputMaskView.vue';
import AInputTextView from '../views/AInputTextView.vue';
import APanelView from '../views/APanelView.vue';
import ATextAreaView from '../views/ATextAreaView.vue';
import LandingPageView from '@/views/LandingPageView/LandingPageView.vue';

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
    {
      path: '/divider',
      name: 'divider',
      component: ADividerView,
    },
    {
      path: '/inputtext',
      name: 'inputtext',
      component: AInputTextView,
    },
    {
      path: '/inputmask',
      name: 'inputmask',
      component: AInputMaskView,
    },
    {
      path: '/textarea',
      name: 'textarea',
      component: ATextAreaView,
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPageView,
    }
  ],
});

export default router;
