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
import { errorNotify } from "@/helpers/notify.ts";
import { boolFromString } from "@/helpers/utils.ts";
import {
  getToken,
  initKeycloak,
  KeycloakClaims,
  logout,
  refreshToken,
} from "@/services/keycloak.ts";
import { quasarOptions } from "@/services/quasar.ts";
import { router } from "@/services/router.ts";
import {
  createCustomClient,
  disableNotifications,
  enableNotifications,
} from "@/services/urql.ts";
import {
  activeRole,
  applyProfile,
  getProfile,
  login,
  updateProfile,
} from "@/stores/authentication.ts";

// disable debug logs in production
if (import.meta.env.PROD) {
  console.debug = () => {};
}

// bypass Keycloak in development
const bypassKeycloak = false;

// Login flow
let claims: Ref<KeycloakClaims | null>;
let client: Client;
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
if (import.meta.env.PROD || !bypassKeycloak) {
  claims = await initKeycloak();
  client = createCustomClient({
    activeRole,
    getToken,
    refreshToken,
    errorNotify,
  });
  const logged = login(claims, logout);
  if (logged) {
    disableNotifications();
    const profile = await getProfile(client);
    const importProfile = boolFromString(
      import.meta.env.VITE_IMPORT_PROFILE ?? "",
    );
    if (importProfile === null) {
      console.warn(
        "Environment variable VITE_IMPORT_PROFILE has an ambiguous value (defaulting to false):",
        import.meta.env.VITE_IMPORT_PROFILE,
      );
    }
    if (!profile || importProfile) {
      await updateProfile(profile, client);
    } else {
      applyProfile(profile);
    }
    enableNotifications();
  } else {
    disableNotifications();
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
  client = createCustomClient({
    activeRole: ref("admin"),
    errorNotify,
  });
  login(claims);
}

createApp(App)
  .use(Quasar, quasarOptions)
  .use(router)
  .use(urql, client)
  .mount("#app");
