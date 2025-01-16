import { ROLES } from "@/config/types/roles.ts";
import type { HasuraClaims } from "@/types/claims.ts";

export const version = import.meta.env.DEV
  ? "dev"
  : (import.meta.env.VITE_BUILD_VERSION ?? null);

export const bypassAuth =
  import.meta.env.DEV &&
  ["TRUE", "T", "1", "YES", "Y"].includes(
    (import.meta.env.VITE_BYPASS_AUTH ?? "").trim().toUpperCase(),
  );

export const bypassClaims: HasuraClaims = {
  allowedRoles: [ROLES.TEACHER, ROLES.ASSIGNER, ROLES.ADMIN],
  defaultRole: ROLES.ADMIN,
  userId: import.meta.env.VITE_HASURA_USER_ID ?? "",
} as const;
