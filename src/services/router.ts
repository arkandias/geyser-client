/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import PageAccueil from "@/pages/PageAccueil.vue";
import PageEnseignements from "@/pages/PageEnseignements.vue";
import PageMessage from "@/pages/PageMessage.vue";
import PageService from "@/pages/PageService.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "accueil",
    component: PageAccueil,
  },
  {
    path: "/service",
    name: "service",
    component: PageService,
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
