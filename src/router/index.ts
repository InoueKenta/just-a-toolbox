import { createRouter, createWebHistory } from 'vue-router'


import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LeftSidebarLayout from '@/layouts/LeftSidebarLayout.vue'


import HomeView from '@/views/Home/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

import RandomizerView from '@/views/Randomizer/RandomizerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => DefaultLayout,
      children: [
        {
          path: '',
          component: () => HomeView
        },
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => AboutView
        }
      ]
    },
    {
      path: '/tools',
      component: () => LeftSidebarLayout,
      children: [
        {
          path: 'randomizer',
          name: 'randomizer',
          component: () => RandomizerView
        }
      ]
    },
  ]
})

export default router
