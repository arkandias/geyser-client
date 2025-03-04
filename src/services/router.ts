import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import { i18n } from "@/services/i18n.ts";

import PageAdmin from "@/pages/PageAdmin.vue";
import PageCourses from "@/pages/PageCourses.vue";
import PageHome from "@/pages/PageHome.vue";
import PageTeacher from "@/pages/PageTeacher.vue";

const { t } = i18n.global;

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
    path: "/admin/:section(general|teachers|courses|requests|coordinations|roles)?",
    name: "admin",
    component: PageAdmin,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: PageHome,
    props: { alert: t("home.alert.page_not_found") },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
