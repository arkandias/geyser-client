export const ROLES = {
  TEACHER: "teacher",
  ASSIGNER: "assigner",
  ADMIN: "admin",
} as const;

export const ROLE_OPTIONS = [
  { value: ROLES.TEACHER, label: "Intervenant", default: true },
  { value: ROLES.ASSIGNER, label: "Commissaire" },
  { value: ROLES.ADMIN, label: "Administrateur" },
] as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
