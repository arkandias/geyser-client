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

// enable/disable Quasar notifications
const notifications: Ref<boolean> = ref(true);
export const disableNotifications = () => {
  notifications.value = false;
};
export const enableNotifications = () => {
  notifications.value = true;
};

export const createClientWithToken = (
  activeRole: Ref<string>,
  getToken: () => string,
  refreshToken: () => Promise<void>,
  errorNotify: (message: string) => void,
): Client =>
  createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      debugExchange,
      mapExchange({
        async onOperation(operation) {
          await refreshToken();
          return operation;
        },
        onError(error) {
          console.error(error);
          if (notifications.value) {
            errorNotify(error.toString());
          }
        },
      }),
      fetchExchange,
    ],
    fetchOptions: () => ({
      headers: {
        Authorization: "Bearer " + getToken(),
        ...(activeRole.value ? { "X-Hasura-Role": activeRole.value } : {}),
      },
    }),
  });

export const createClientWithAdminSecret = (
  uid: Ref<string>,
  activeRole: Ref<string>,
  errorNotify: (message: string) => void,
): Client =>
  createClient({
    url: import.meta.env.VITE_GRAPHQL_URL,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      debugExchange,
      mapExchange({
        onError(error) {
          console.error(error);
          if (notifications.value) {
            errorNotify(error.toString());
          }
        },
      }),
      fetchExchange,
    ],
    fetchOptions: () => ({
      headers: {
        "X-Hasura-Admin-Secret": import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "",
        ...(uid.value ? { "X-Hasura-User-Id": uid.value } : {}),
        ...(activeRole.value ? { "X-Hasura-Role": activeRole.value } : {}),
      },
    }),
  });
