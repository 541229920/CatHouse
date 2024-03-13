import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children:[
        {
          path: '/',
          name: 'home',
          component:HomeView
        },
        {
          path:'/Admin',
          name:'admin',
          component:()=>import('@/views/Admin.vue')
        }
      ]
    },
  ]
})

export default router
