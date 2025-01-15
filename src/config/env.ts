import { ROLES } from "@/config/types/roles.ts";
import type { HasuraClaims } from "@/types/claims.ts";

export const bypassKeycloak =
  import.meta.env.DEV &&
  ["TRUE", "T", "1", "YES", "Y"].includes(
    (import.meta.env.VITE_BYPASS_KEYCLOAK ?? "").trim().toUpperCase(),
  );

export const bypassClaims: HasuraClaims = {
  allowedRoles: [ROLES.TEACHER, ROLES.ASSIGNER, ROLES.ADMIN],
  defaultRole: ROLES.ADMIN,
  userId: import.meta.env.VITE_HASURA_USER_ID ?? "",
} as const;
