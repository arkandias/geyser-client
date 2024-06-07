/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { errorNotify } from "@/helpers/notify.ts";
import { devtoolsExchange } from "@urql/devtools";
import {
  cacheExchange,
  Client,
  createClient,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";
import { Ref, ref } from "vue";

// prevent using Quasar notifications before the plugin is installed
const notify: Ref<boolean> = ref(false);
export const enableNotifications = () => {
  notify.value = true;
};

// custom urql client with keycloak token, X-Hasura-Role header,
// and Quasar notifications
export const createCustomClient = (
  activeRole: Ref<string>,
  getToken?: () => string,
  refreshToken?: () => Promise<void>,
): Client =>
  createClient({
    url: import.meta.env.VITE_GRAPHQL_HTTP,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      debugExchange,
      mapExchange({
        async onOperation(operation) {
          if (refreshToken) {
            await refreshToken();
          }
          return operation;
        },
        onError(error) {
          console.error(error);
          if (notify.value) {
            errorNotify(error.toString());
          }
        },
      }),
      fetchExchange,
    ],
    fetchOptions: () => ({
      headers: {
        ...(getToken
          ? { Authorization: "Bearer " + getToken() }
          : {
              "X-Hasura-Admin-Secret":
                import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "",
            }),
        "X-Hasura-Role": activeRole.value,
      },
    }),
  });
