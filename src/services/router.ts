import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import PageAdmin from "@/pages/PageAdmin.vue";
import PageCourses from "@/pages/PageCourses.vue";
import PageHome from "@/pages/PageHome.vue";
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
    path: "/admin",
    name: "admin",
    component: PageAdmin,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageHome,
    props: { message: "Page non trouvée" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
