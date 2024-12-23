import type { Option } from "@/types/common.ts";

export const ROLES = {
  USER: "intervenant",
  COMMISSIONER: "commissaire",
  ADMIN: "admin",
} as const;

export const ROLE_OPTIONS: Option<Role>[] = [
  { value: ROLES.USER, label: "Intervenant" },
  { value: ROLES.COMMISSIONER, label: "Commissaire" },
  { value: ROLES.ADMIN, label: "Administrateur" },
] as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
