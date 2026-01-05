import { createRouter, createWebHistory } from 'vue-router'
import ComingSoon from '../views/ComingSoon.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/activities',
      name: 'activities',
      component: ComingSoon,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ComingSoon,
    },
    {
      path: '/members',
      name: 'members',
      component: ComingSoon,
    },
    {
      path: '/join',
      name: 'join',
      component: ComingSoon,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ComingSoon,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ComingSoon,
    },
    {
      path: '/news',
      name: 'news',
      component: ComingSoon,
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ComingSoon, // Or a dedicated 404 page
    },
  ],
})

export default router
