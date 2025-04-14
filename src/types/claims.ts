import type { Role } from "@/config/types/roles.ts";

export type HasuraClaims = {
  userId: string;
  defaultRole: Role;
  allowedRoles: Role[];
};
