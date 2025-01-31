import { devtoolsExchange } from "@urql/devtools";
import {
  type ClientOptions,
  cacheExchange,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";

import { graphqlURL } from "@/config/env.ts";
import { ROLES, type Role } from "@/config/types/roles.ts";
import { getAuthHeader, refreshToken } from "@/services/keycloak.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

const roleHeader: { "X-Hasura-Role": Role } = {
  "X-Hasura-Role": ROLES.TEACHER,
};

export const setRole = (role: Role) => {
  roleHeader["X-Hasura-Role"] = role;
};

export const clientOptions: ClientOptions = {
  url: graphqlURL,
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
      ...getAuthHeader(),
      ...roleHeader,
    },
  }),
};
