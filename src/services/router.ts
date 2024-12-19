import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import PageCourses from "@/pages/PageCourses.vue";
import PageHome from "@/pages/PageHome.vue";
import PageMessage from "@/pages/PageMessage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/courses",
    name: "courses",
    component: PageCourses,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageMessage,
    props: { message: "Page non trouvée" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
