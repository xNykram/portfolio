import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/projects",
      component: () => import("@/views/Projects.vue"),
    },
    {
      path: "/contact",
      component: () => import("@/views/Contact.vue"),
    },
  ],
});
