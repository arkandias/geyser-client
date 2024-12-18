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

export const getRole = (role: Role): keyof typeof ROLES => {
  const entry = Object.entries(ROLES).find(([_, value]) => value === role);
  if (!entry) {
    throw new Error(`Invalid role '${role}'`);
  }
  return entry[0] as keyof typeof ROLES;
};

export const labelRole = (role: Role): string => ROLE_METADATA[role].label;

export const orderRole = (role: Role): number => ROLE_METADATA[role].order;
