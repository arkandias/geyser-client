export const ROLES = {
  ADMIN: "admin",
  COMMISSIONER: "commissioner",
  TEACHER: "teacher",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const isRole = (role: unknown): role is Role =>
  Object.values(ROLES).includes(role as Role);
