import { devtoolsExchange } from "@urql/devtools";
import {
  type ClientOptions,
  cacheExchange,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";

import type { Role } from "@/config/types/roles.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { getAuthorizationHeader, refreshToken } from "@/services/keycloak.ts";

export const roleHeader: { "X-Hasura-Role"?: Role } = {};

export const clientOptions: ClientOptions = {
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
        notify(NotifyType.ERROR, { message: error.toString() });
      },
    }),
    fetchExchange,
  ],
  fetchOptions: () => ({
    headers: {
      ...getAuthorizationHeader(),
      ...roleHeader,
    },
  }),
};
