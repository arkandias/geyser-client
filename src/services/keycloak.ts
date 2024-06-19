/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import Keycloak, { KeycloakTokenParsed } from "keycloak-js";
import { ComputedRef, computed } from "vue";

type CustomKeycloak = Keycloak & {
  tokenParsed?: KeycloakTokenParsed & {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles"?: string[];
      "x-hasura-default-role"?: string;
      "x-hasura-user-id"?: string;
      "x-hasura-last-name"?: string;
      "x-hasura-first-name"?: string;
      "x-hasura-alias"?: string;
    };
  };
};

export type KeycloakClaims = {
  allowedRoles: string[];
  defaultRole: string;
  userId: string;
  lastName: string | null;
  firstName: string | null;
  alias: string | null;
};

const keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: "master",
  clientId: "hasura",
}) as CustomKeycloak;

// callback listeners for some events
keycloak.onAuthLogout = () => {
  console.debug("Logged out");
};
keycloak.onTokenExpired = () => {
  console.debug("Token expired");
};

const claims: ComputedRef<KeycloakClaims | null> = computed(() =>
  keycloak.tokenParsed?.["https://hasura.io/jwt/claims"]
    ? {
        allowedRoles:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-allowed-roles"
          ] ?? [],
        defaultRole:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-default-role"
          ] ?? "",
        userId:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-user-id"
          ] ?? "",
        lastName:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-last-name"
          ] ?? null,
        firstName:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-first-name"
          ] ?? null,
        alias:
          keycloak.tokenParsed["https://hasura.io/jwt/claims"][
            "x-hasura-alias"
          ] ?? null,
      }
    : null,
);

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
