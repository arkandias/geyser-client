// sort-imports-ignore
import { createApp } from "vue";
import { Quasar } from "quasar";

import { i18n } from "@/services/i18n.ts";
import { quasarOptions } from "@/services/quasar.ts";
import { client } from "@/services/villus.ts";
import { router } from "@/services/router.ts";

import "quasar/src/css/index.sass";
import "@/css/main.scss";

import App from "@/App.vue";

if (import.meta.env.PROD) {
  console.debug = () => {
    // Intentionally empty to disable debug logging in production
  };
}

createApp(App)
  .use(i18n)
  .use(Quasar, quasarOptions)
  .use(client)
  .use(router)
  .mount("#app");
