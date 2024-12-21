import Keycloak from "keycloak-js";

import {
  HASURA_CLAIMS_NAMESPACE,
  KEYCLOAK_TOKEN_MIN_VALIDITY,
} from "@/config/constants.ts";
import { bypassClaims, bypassKeycloak } from "@/config/env.ts";
import { type Role, isRole } from "@/config/types/roles.ts";
import { type HasuraClaims, isXHasuraClaims } from "@/types/claim.ts";

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL ?? "",
  realm: "geyser",
  clientId: "hasura",
});

// callback listeners
keycloak.onAuthLogout = () => {
  console.debug("Logged out");
};
keycloak.onTokenExpired = () => {
  console.debug("Token expired");
};

export const initKeycloak = async (): Promise<void> => {
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

export const refreshToken = async (): Promise<void> => {
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

export const getAuthorizationHeaders = (): Record<string, string> =>
  bypassKeycloak
    ? {
        "X-Hasura-Admin-Secret": import.meta.env.VITE_HASURA_ADMIN_SECRET ?? "",
        "X-Hasura-User-Id": import.meta.env.VITE_HASURA_USER_ID ?? "",
      }
    : { Authorization: "Bearer " + (keycloak.token ?? "") };

export const getClaims = (): HasuraClaims | null => {
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
  if (!isXHasuraClaims(HASURA_CLAIMS_NAMESPACE, keycloak.tokenParsed)) {
    console.error("No valid X-Hasura claims in parsed token");
    return null;
  }
  const claims = keycloak.tokenParsed[HASURA_CLAIMS_NAMESPACE];
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
    allowedRoles: validRoles,
    defaultRole: claims["x-hasura-default-role"],
    userId: claims["x-hasura-user-id"],
  };
};

export const logout = async (): Promise<void> => {
  await keycloak.logout();
};
