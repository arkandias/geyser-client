import { createClient, defaultPlugins, definePlugin } from "villus";

import { graphqlURL } from "@/config/env.ts";
import { getAuthHeader } from "@/services/keycloak.ts";

const authPlugin = definePlugin(async ({ opContext }) => {
  Object.assign(opContext.headers, await getAuthHeader());
});

export const client = createClient({
  url: graphqlURL,
  use: [authPlugin, ...defaultPlugins()],
});
