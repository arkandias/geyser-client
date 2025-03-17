import {
  type ClientPluginContext,
  createClient,
  defaultPlugins,
  definePlugin,
} from "villus";

import { graphqlURL } from "@/config/env.ts";
import { getAuthHeader } from "@/services/keycloak.ts";

const authPlugin = definePlugin(async ({ opContext }) => {
  Object.assign(opContext.headers, await getAuthHeader());
});

const debugPlugin = definePlugin((fn: ClientPluginContext) => {
  console.debug("Villus Debug Plugin", fn);
});

export const client = createClient({
  url: graphqlURL,
  use: [debugPlugin, authPlugin, ...defaultPlugins()],
});
