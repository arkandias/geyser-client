// sort-imports-ignore
import { createApp } from "vue";
import { Quasar } from "quasar";
import type { Client } from "@urql/vue";
import urql from "@urql/vue";

import type { KeycloakClaims } from "@/services/keycloak.ts";
import {
  getToken,
  initKeycloak,
  logout,
  refreshToken,
} from "@/services/keycloak.ts";
import { quasarOptions } from "@/services/quasar.ts";
import { router } from "@/services/router.ts";
import {
  createClientWithAdminSecret,
  createClientWithToken,
  disableNotifications,
  enableNotifications,
} from "@/services/urql.ts";

import {
  login,
  setLogout,
  useAuthentication,
} from "@/stores/authentication.ts";

import { errorNotify } from "@/helpers/notify.ts";

import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "quasar/src/css/index.sass";
import "@/css/main.scss";

import App from "@/App.vue";

const { activeRole, uid } = useAuthentication();

if (import.meta.env.PROD) {
  console.debug = () => {
    /* Intentionally empty to disable debug logging in production */
  };
}

// bypass Keycloak in development
const bypassKeycloak = false;

// Login flow
let claims: KeycloakClaims | null;
let client: Client;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (import.meta.env.PROD || !bypassKeycloak) {
  claims = await initKeycloak();
  const flow = (import.meta.env.VITE_LOGIN_FLOW ?? "").trim().toUpperCase();
  client = createClientWithToken(
    activeRole,
    getToken,
    refreshToken,
    errorNotify,
  );
  disableNotifications();
  await login(claims, flow, client);
  enableNotifications();
  setLogout(logout);
} else {
  claims = {
    userId: "dev",
    lastName: "",
    firstName: "",
    alias: "Développeur",
    defaultRole: "admin",
    allowedRoles: ["intervenant", "commissaire", "admin"],
  };
  client = createClientWithAdminSecret(uid, activeRole, errorNotify);
  await login(claims);
}

createApp(App)
  .use(Quasar, quasarOptions)
  .use(router)
  .use(urql, client)
  .mount("#app");
