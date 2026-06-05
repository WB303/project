import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/edu', name: 'Edu', component: () => import('../views/Education.vue') },
  { path: '/projects', name: 'Project', component: () => import('../views/Project.vue') },
  { path: '/skill', name: 'Skill', component: () => import('../views/Skill.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
