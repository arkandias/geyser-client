/*
 * Configuration module that loads from environment variables and can be
 * overridden by config.json at runtime. Validates essential variables and
 * handles development mode.
 */
import { getRuntimeConfig } from "@/config/runtime.ts";

const runtimeConfig = await getRuntimeConfig();

export const version = import.meta.env.DEV
  ? "dev"
  : (import.meta.env.VITE_BUILD_VERSION ?? null);

export const graphqlURL =
  runtimeConfig.endpoints?.graphql ?? import.meta.env.VITE_GRAPHQL_URL ?? "";

if (!graphqlURL) {
  throw new Error(
    "GraphQL URL is not configured. Configure it either:\n" +
      "- at runtime: in config.json at the application root (same directory as index.html) as endpoints.graphql\n" +
      "- at build time: set VITE_GRAPHQL_URL environment variable",
  );
}

export const authURL =
  runtimeConfig.endpoints?.auth ?? import.meta.env.VITE_AUTH_URL ?? "";

export const bypassAuth =
  import.meta.env.DEV && import.meta.env.VITE_BYPASS_AUTH === "true";

if (!authURL && !bypassAuth) {
  throw new Error(
    "Authentication URL is not configured. Configure it either:\n" +
      "- at runtime: in config.json at the application root (same directory as index.html) with endpoints.auth\n" +
      "- at build time: set VITE_AUTH_URL environment variable\n" +
      "Alternatively, you can set VITE_BYPASS_AUTH=true to skip authentication in development mode.",
  );
}

export const hasuraAdminSecret = import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "";

if (bypassAuth && !hasuraAdminSecret) {
  throw new Error(
    "When bypassing authentication (VITE_BYPASS_AUTH=true), you must set VITE_HASURA_ADMIN_SECRET for API access in development mode.",
  );
}

export const hasuraUserId = import.meta.env.VITE_HASURA_USER_ID ?? null;
