import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const library = () => import('../pages/library.vue')
const process = () => import('../pages/process.vue')
const headcount = () => import('../pages/headcount.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/library'
  },
  {
    path: "/library",
    name: "library",
    component: library
  },
  {
    path: "/process",
    name: "process",
    component: process
  },
  {
    path: "/headcount",
    name: "headcount",
    component: headcount
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})