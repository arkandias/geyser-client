// sort-imports-ignore
import { createApp } from "vue";
import { Quasar } from "quasar";
import urql from "@urql/vue";

import { initKeycloak } from "@/services/keycloak.ts";
import { i18n } from "@/services/i18n.ts";
import { quasarOptions } from "@/services/quasar.ts";
import { clientOptions } from "@/services/urql.ts";
import { router } from "@/services/router.ts";

import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "quasar/src/css/index.sass";
import "@/css/main.scss";

import App from "@/App.vue";

if (import.meta.env.PROD) {
  console.debug = () => {
    // Intentionally empty to disable debug logging in production
  };
}

await initKeycloak();

createApp(App)
  .use(i18n)
  .use(Quasar, quasarOptions)
  .use(urql, clientOptions)
  .use(router)
  .mount("#app");
