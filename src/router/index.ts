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
      component: () => import('../views/ActivitiesView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('../views/MembersView.vue'),
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('../views/JoinUsView.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      component: ComingSoon,
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: ComingSoon,
    },
    {
      path: '/competition',
      name: 'competition',
      component: () => import('../views/CompetitionCenter.vue'),
    },
    {
      path: '/tool',
      name: 'tool',
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
