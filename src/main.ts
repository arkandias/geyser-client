/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import urql, { Client } from "@urql/vue";
import { Quasar } from "quasar";
import { createApp, ref, Ref } from "vue";

// styles
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "quasar/src/css/index.sass";
// custom
import "@/css/main.scss";

import App from "@/App.vue";
import { KeycloakClaims } from "@/helpers/types.ts";
import {
  getToken,
  initKeycloak,
  logout,
  refreshToken,
} from "@/services/keycloak.ts";
import { quasarOptions } from "@/services/quasar.ts";
import { router } from "@/services/router.ts";
import { createCustomClient, enableNotifications } from "@/services/urql.ts";
import {
  activeRole,
  getProfile,
  login,
  updateProfile,
} from "@/stores/authentication.ts";

// disable debug logs in production
if (import.meta.env.PROD) {
  console.debug = () => {};
}

// bypass Keycloak in development
const bypassKeycloak = true;

// Login flow
let claims: Ref<KeycloakClaims | null>;
let client: Client;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (import.meta.env.PROD || !bypassKeycloak) {
  claims = await initKeycloak();
  login(claims, logout);
  client = createCustomClient(activeRole, getToken, refreshToken);
  if (import.meta.env.VITE_IMPORT_PROFILE?.toLowerCase() === "true") {
    await updateProfile(client);
  } else {
    await getProfile(client);
  }
} else {
  claims = ref({
    userId: "",
    lastName: "",
    firstName: "",
    alias: "Développeur",
    defaultRole: "admin",
    allowedRoles: ["intervenant", "commissaire", "admin"],
  });
  login(claims);
  client = createCustomClient(ref("admin"));
}

enableNotifications();

createApp(App)
  .use(Quasar, quasarOptions)
  .use(router)
  .use(urql, client)
  .mount("#app");
