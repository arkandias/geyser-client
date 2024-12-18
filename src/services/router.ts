import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

import PageAccueil from "@/pages/PageAccueil.vue";
import PageEnseignements from "@/pages/PageEnseignements.vue";
import PageMessage from "@/pages/PageMessage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: PageAccueil,
  },
  {
    path: "/courses",
    name: "courses",
    component: PageEnseignements,
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
