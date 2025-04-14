import { devtoolsExchange } from "@urql/devtools";
import {
  type ClientOptions,
  cacheExchange,
  debugExchange,
  fetchExchange,
  mapExchange,
} from "@urql/vue";

import { graphqlURL } from "@/config/env.ts";
import { RoleTypeEnum } from "@/gql/graphql.ts";
import { getAuthHeader, refreshToken } from "@/services/keycloak.ts";
import type { HasuraRole } from "@/types/claims.ts";

const roleHeader: { "X-Hasura-Role"?: HasuraRole } = {};

const roleToHeaderMap = {
  [RoleTypeEnum.Admin]: "admin",
  [RoleTypeEnum.Commissioner]: "commissioner",
  [RoleTypeEnum.Teacher]: "teacher",
} as const;

export const setRoleHeader = (role: RoleTypeEnum) => {
  roleHeader["X-Hasura-Role"] = roleToHeaderMap[role];
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
