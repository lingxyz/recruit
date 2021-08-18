import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const library = () => import('../pages/library.vue')
const status = () => import('../pages/status.vue')
const headcount = () => import('../pages/headcount.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Library'
  },
  {
    path: "/library",
    name: "library",
    component: library
  },
  {
    path: "/status",
    name: "status",
    component: status
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