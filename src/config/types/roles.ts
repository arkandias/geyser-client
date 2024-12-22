export const ROLES = {
  USER: "intervenant",
  COMMISSIONER: "commissaire",
  ADMIN: "admin",
} as const;

export const ROLE_METADATA = {
  [ROLES.USER]: { order: 1, label: "Intervenant" },
  [ROLES.COMMISSIONER]: { order: 2, label: "Commissaire" },
  [ROLES.ADMIN]: { order: 3, label: "Administrateur" },
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
