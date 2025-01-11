import Keycloak from "keycloak-js";

import {
  HASURA_CLAIMS_NAMESPACE,
  KEYCLOAK_TOKEN_MIN_VALIDITY,
} from "@/config/constants.ts";
import { bypassClaims, bypassKeycloak } from "@/config/env.ts";
import { type Role, isRole } from "@/config/types/roles.ts";
import { type HasuraClaims, isXHasuraClaims } from "@/types/claims.ts";

if (bypassKeycloak) {
  if (import.meta.env.VITE_HASURA_ADMIN_SECRET === undefined) {
    throw new Error(
      "Missing VITE_HASURA_ADMIN_SECRET environment variable. This is required for local development when bypassing Keycloak authentication.",
    );
  }
  if (import.meta.env.VITE_HASURA_USER_ID === undefined) {
    throw new Error(
      "Missing VITE_HASURA_USER_ID environment variable. This is required for local development when bypassing Keycloak authentication.",
    );
  }
} else {
  if (import.meta.env.VITE_KEYCLOAK_URL === undefined) {
    throw new Error(
      "Missing VITE_KEYCLOAK_URL environment variable. This is required when using Keycloak authentication.",
    );
  }
}

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL ?? "",
  realm: "geyser",
  clientId: "hasura",
});

// Callback listeners
keycloak.onAuthLogout = () => {
  console.debug("Logged out");
};
keycloak.onTokenExpired = () => {
  console.debug("Token expired");
};

export const initKeycloak = async () => {
  if (bypassKeycloak) {
    console.debug("Bypassing Keycloak authentication");
    return;
  }
  try {
    const authenticated = await keycloak.init({
      onLoad: "login-required",
    });
    if (authenticated) {
      console.debug("Authenticated!");
      return;
    } else {
      console.warn("Authentication failed");
      return;
    }
  } catch (error: unknown) {
    console.error("Authentication error:", error);
    return;
  }
};

export const logout = async () => {
  if (!bypassKeycloak) {
    await keycloak.logout();
  }
};

export const refreshToken = async () => {
  if (bypassKeycloak) {
    return;
  }
  try {
    const refreshed = await keycloak.updateToken(KEYCLOAK_TOKEN_MIN_VALIDITY);
    console.debug(refreshed ? "Token was refreshed" : "Token is still valid");
  } catch (error: unknown) {
    console.error("Failed to refresh the token:", error);
    keycloak.clearToken();
  }
};

export const getAuthorizationHeader = (): Record<string, string> =>
  bypassKeycloak
    ? {
        "X-Hasura-Admin-Secret": import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "",
        "X-Hasura-User-Id": import.meta.env.VITE_HASURA_USER_ID ?? "",
      }
    : keycloak.token
      ? { Authorization: "Bearer " + keycloak.token }
      : {};

export const getClaims = () => {
  if (bypassKeycloak) {
    return bypassClaims;
  }
  if (keycloak.authenticated !== true) {
    console.error("Not authenticated");
    return null;
  }
  if (keycloak.tokenParsed === undefined) {
    console.error("No parsed token");
    return null;
  }
  return validateClaims(keycloak.tokenParsed);
};

const validateClaims = (
  tokenParsed: Record<string, unknown>,
): HasuraClaims | null => {
  if (!isXHasuraClaims(HASURA_CLAIMS_NAMESPACE, tokenParsed)) {
    console.error("No valid X-Hasura claims in parsed token");
    return null;
  }
  const claims = tokenParsed[HASURA_CLAIMS_NAMESPACE];
  const validRoles = claims["x-hasura-allowed-roles"].filter(
    (role): role is Role => {
      if (!isRole(role)) {
        console.warn(`Invalid allowed role: ${role}`);
        return false;
      }
      return true;
    },
  );
  if (!isRole(claims["x-hasura-default-role"])) {
    console.error(`Invalid default role: ${claims["x-hasura-default-role"]}`);
    return null;
  }
  if (!validRoles.includes(claims["x-hasura-default-role"])) {
    console.error(`Default role is not an allowed role`);
    return null;
  }
  return {
    userId: claims["x-hasura-user-id"],
    defaultRole: claims["x-hasura-default-role"],
    allowedRoles: validRoles,
  };
};
