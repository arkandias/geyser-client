import type { AvailableLocale } from "@/config/types/locales.ts";

export const DEFAULT_LOCALE: AvailableLocale = "fr-FR";

export const HASURA_CLAIMS_NAMESPACE = "https://hasura.io/jwt/claims";
export const HASURA_DEFAULT_USER_ID = "admin";

export const KEYCLOAK_TOKEN_MIN_VALIDITY = 60; // in s

export const TOOLTIP_DELAY = 500; // in ms
