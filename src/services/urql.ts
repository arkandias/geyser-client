import { devtoolsExchange } from "@urql/devtools";
import {
  type ClientOptions,
  cacheExchange,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";

import { ROLES, type Role } from "@/config/types/roles.ts";
import { NotifyType, notify } from "@/helpers/notify.ts";
import { getAuthorizationHeader, refreshToken } from "@/services/keycloak.ts";

if (import.meta.env.VITE_GRAPHQL_URL === undefined) {
  throw new Error(
    "Missing VITE_GRAPHQL_URL in environment variables. This URL is required to connect to your GraphQL API.",
  );
}

export const roleHeader: { "X-Hasura-Role": Role } = {
  "X-Hasura-Role": ROLES.USER,
};

export const clientOptions: ClientOptions = {
  url: import.meta.env.VITE_GRAPHQL_URL ?? "",
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
