export const ROLES = {
  ADMIN: "admin",
  COMMISSIONER: "commissioner",
  TEACHER: "teacher",
} as const;

export const ROLE_OPTIONS = [
  { value: ROLES.TEACHER, label: "Intervenant" },
  { value: ROLES.COMMISSIONER, label: "Commissaire" },
  { value: ROLES.ADMIN, label: "Administrateur" },
] as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
