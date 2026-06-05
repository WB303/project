import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/edu', name: 'Edu', component: () => import('../views/Education.vue') },
  { path: '/project', name: 'Project', component: () => import('../views/Project.vue') },
  { path: '/skill', name: 'Skill', component: () => import('../views/Skill.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
