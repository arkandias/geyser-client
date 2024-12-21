import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import PageCourses from "@/pages/PageCourses.vue";
import PageHome from "@/pages/PageHome.vue";
import PageMessage from "@/pages/PageMessage.vue";
import PageTeacher from "@/pages/PageTeacher.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: PageHome,
  },
  {
    path: "/teacher",
    name: "teacher",
    component: PageTeacher,
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
