import type { Role } from "@/types/roles.ts";
import type { KeycloakTokenParsed } from "keycloak-js";
import Keycloak from "keycloak-js";
import type { ComputedRef } from "vue";
import { computed } from "vue";

type CustomKeycloak = Keycloak & {
  tokenParsed?: KeycloakTokenParsed & {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": Role[];
      "x-hasura-default-role": Role;
      "x-hasura-user-id": string;
      "x-hasura-last-name"?: string;
      "x-hasura-first-name"?: string;
      "x-hasura-alias"?: string;
    };
  };
};

export type KeycloakClaims = {
  allowedRoles: Role[];
  defaultRole: Role;
  userId: string;
  lastName: string | null;
  firstName: string | null;
  alias: string | null;
};

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: "geyser",
  clientId: "hasura",
}) as CustomKeycloak;

// callback listeners for some events
keycloak.onAuthLogout = () => {
  console.debug("Logged out");
};
keycloak.onTokenExpired = () => {
  console.debug("Token expired");
};

const claims: ComputedRef<KeycloakClaims | null> = computed(() => {
  const hasuraClaims = keycloak.tokenParsed?.["https://hasura.io/jwt/claims"];
  if (!hasuraClaims) {
    return null;
  }
  return {
    allowedRoles: hasuraClaims["x-hasura-allowed-roles"],
    defaultRole: hasuraClaims["x-hasura-default-role"],
    userId: hasuraClaims["x-hasura-user-id"],
    lastName: hasuraClaims["x-hasura-last-name"] ?? null,
    firstName: hasuraClaims["x-hasura-first-name"] ?? null,
    alias: hasuraClaims["x-hasura-alias"] ?? null,
  };
});

export const getToken = (): string => keycloak.token ?? "";

// parameters for token refresh
const minValidity = 60;
export const refreshToken = async (): Promise<void> => {
  try {
    const refreshed = await keycloak.updateToken(minValidity);
    console.debug(refreshed ? "Token was refreshed" : "Token is still valid");
  } catch (error: unknown) {
    console.error("Failed to refresh the token:", error);
    keycloak.clearToken();
  }
};

export const logout = async (): Promise<void> => {
  await keycloak.logout();
};

export const initKeycloak = async (): Promise<KeycloakClaims | null> => {
  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
    });
    if (authenticated) {
      console.debug("Authenticated!");
      return claims.value;
    } else {
      console.warn("Authentication failed");
      return null;
    }
  } catch (error: unknown) {
    console.error("Authentication error:", error);
    return null;
  }
};
