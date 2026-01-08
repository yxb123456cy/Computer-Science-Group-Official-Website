import { createRouter, createWebHashHistory } from 'vue-router'
import ComingSoon from '../views/ComingSoon.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      component: () => import('../views/ResourcesView.vue'),
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
      component: () => import('../views/OnlineToolsView.vue'),
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/admin/login/login.vue'),
      meta: {
        hideFooter: true,
        hideNavBar: true,
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      redirect: { name: 'admin-home' },
      meta: {
        hideNavBar: true,
      },
      children: [
        {
          path: 'home',
          name: 'admin-home',
          component: () => import('../views/admin/Home.vue'),
          meta: { title: '首页', hideNavBar: true },
        },
        {
          path: 'analytics',
          name: 'admin-analytics',
          component: () => import('../views/admin/Analytics.vue'),
          meta: { title: '数据分析', hideNavBar: true },
        },
        {
          path: 'site/home',
          name: 'admin-site-home',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '首页设置', desc: '维护官网首页的展示信息、模块配置与入口内容', hideNavBar: true },
        },
        {
          path: 'site/about',
          name: 'admin-site-about',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '关于我们设置', desc: '维护社团介绍、组织架构与荣誉展示配置', hideNavBar: true },
        },
        {
          path: 'site/activities',
          name: 'admin-site-activities',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '核心活动设置', desc: '维护活动预告、往期回顾与展示样式配置', hideNavBar: true },
        },
        {
          path: 'site/projects',
          name: 'admin-site-projects',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '项目成功设置', desc: '维护项目列表、标签分类与展示内容配置', hideNavBar: true },
        },
        {
          path: 'site/members',
          name: 'admin-site-members',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '成员风采设置', desc: '维护核心成员、校友信息与展示模块配置', hideNavBar: true },
        },
        {
          path: 'site/join',
          name: 'admin-site-join',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '加入我们设置', desc: '维护招新流程、部门要求与FAQ内容配置', hideNavBar: true },
        },
        {
          path: 'site/resources',
          name: 'admin-site-resources',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '资源导航设置', desc: '维护资源分类、推荐资源与详情展示配置', hideNavBar: true },
        },
        {
          path: 'site/competition',
          name: 'admin-site-competition',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '竞赛大全设置', desc: '维护竞赛数据、标签体系与详情字段配置', hideNavBar: true },
        },
        {
          path: 'site/contact',
          name: 'admin-site-contact',
          component: () => import('../views/admin/SiteSettings.vue'),
          meta: { title: '联系我们设置', desc: '维护联系方式、社媒入口与表单展示配置', hideNavBar: true },
        },
      ],
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
