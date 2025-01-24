export const ROLES = {
  ADMIN: "admin",
  ASSIGNER: "assigner",
  TEACHER: "teacher",
} as const;

export const ROLE_OPTIONS = [
  { value: ROLES.ADMIN, label: "Administrateur" },
  { value: ROLES.ASSIGNER, label: "Commissaire" },
  { value: ROLES.TEACHER, label: "Intervenant" },
] as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
