import { createWebHashHistory } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/home/index.vue"),
    hidden: true,
  },
  {
    path: "/research",
    component: () => import("@/views/research/index.vue"),
    hidden: true,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export default router;
