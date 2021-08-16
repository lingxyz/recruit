import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const home = () => import('../pages/index.vue')
const status = () => import('../pages/status.vue')
const headcount = () => import('../pages/headcount.vue')

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: home
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