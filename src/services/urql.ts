import { devtoolsExchange } from "@urql/devtools";
import {
  type ClientOptions,
  cacheExchange,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";

import { NotifyType, notify } from "@/helpers/notify.ts";
import { getAuthorizationHeaders, refreshToken } from "@/services/keycloak.ts";
import { activeRole } from "@/stores/authentication.ts";

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
        notify(NotifyType.Error, { message: error.toString() });
      },
    }),
    fetchExchange,
  ],
  fetchOptions: () => ({
    headers: {
      ...getAuthorizationHeaders(),
      ...(activeRole.value ? { "X-Hasura-Role": activeRole.value } : {}),
    },
  }),
};
