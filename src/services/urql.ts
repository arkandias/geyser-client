/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

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
const notifications: Ref<boolean> = ref(true);
export const disableNotifications = () => {
  notifications.value = false;
};
export const enableNotifications = () => {
  notifications.value = true;
};

type CustomClientOptions = {
  activeRole: Ref<string | null>;
  getToken?: () => string;
  refreshToken?: () => Promise<void>;
  errorNotify?: (message: string) => void;
};

// custom urql client with keycloak token, X-Hasura-Role header,
// and Quasar notifications
export const createCustomClient = (opts: CustomClientOptions): Client =>
  createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      debugExchange,
      mapExchange({
        async onOperation(operation) {
          if (opts.refreshToken) {
            await opts.refreshToken();
          }
          return operation;
        },
        onError(error) {
          console.error(error);
          if (opts.errorNotify && notifications.value) {
            opts.errorNotify(error.toString());
          }
        },
      }),
      fetchExchange,
    ],
    fetchOptions: () => ({
      headers: {
        ...(opts.getToken
          ? { Authorization: "Bearer " + opts.getToken() }
          : {
              "X-Hasura-Admin-Secret":
                import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "",
            }),
        ...(opts.activeRole.value
          ? { "X-Hasura-Role": opts.activeRole.value }
          : {}),
      },
    }),
  });
