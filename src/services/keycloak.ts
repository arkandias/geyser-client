import Keycloak from "keycloak-js";

import {
  HASURA_CLAIMS_NAMESPACE,
  HASURA_DEFAULT_USER_ID,
  KEYCLOAK_TOKEN_MIN_VALIDITY,
} from "@/config/constants.ts";
import {
  authURL,
  bypassAuth,
  hasuraAdminSecret,
  hasuraUserId,
} from "@/config/env.ts";
import { ROLES, type Role, isRole } from "@/config/types/roles.ts";
import { type HasuraClaims, isXHasuraClaims } from "@/types/claims.ts";

const keycloak = new Keycloak({
  url: authURL,
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
  if (bypassAuth) {
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
      console.error("Authentication failed");
      return;
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return;
  }
};

export const logout = async () => {
  if (!bypassAuth) {
    await keycloak.logout();
  }
};

export const refreshToken = async () => {
  if (bypassAuth) {
    return;
  }
  try {
    const refreshed = await keycloak.updateToken(KEYCLOAK_TOKEN_MIN_VALIDITY);
    console.debug(refreshed ? "Token was refreshed" : "Token is still valid");
  } catch (error) {
    console.error("Failed to refresh the token:", error);
    keycloak.clearToken();
  }
};

export const getAuthHeader = (): Record<string, string> =>
  bypassAuth
    ? {
        "X-Hasura-Admin-Secret": hasuraAdminSecret,
        "X-Hasura-User-Id": hasuraUserId || HASURA_DEFAULT_USER_ID,
      }
    : keycloak.token
      ? { Authorization: "Bearer " + keycloak.token }
      : {};

export const getClaims = (): HasuraClaims | null => {
  if (bypassAuth) {
    return {
      userId: hasuraUserId || HASURA_DEFAULT_USER_ID,
      defaultRole: ROLES.ADMIN,
      allowedRoles: [ROLES.TEACHER, ROLES.COMMISSIONER, ROLES.ADMIN],
    };
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
        console.error(`Invalid allowed role: ${role}`);
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
