import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

import PageAccueil from "@/pages/PageAccueil.vue";
import PageEnseignements from "@/pages/PageEnseignements.vue";
import PageMessage from "@/pages/PageMessage.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "accueil",
    component: PageAccueil,
  },
  {
    path: "/enseignements",
    name: "enseignements",
    component: PageEnseignements,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "non-trouvee",
    component: PageMessage,
    props: { message: "Page non trouvée" },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
