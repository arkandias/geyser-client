export type HasuraRole = "admin" | "commissioner" | "teacher";

export type HasuraClaims = {
  userId: string;
  defaultRole: HasuraRole;
  allowedRoles: HasuraRole[];
};
