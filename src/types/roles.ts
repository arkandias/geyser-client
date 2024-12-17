export const Role = {
  intervenant: { value: "intervenant", label: "Intervenant", order: 1 },
  commissaire: { value: "commissaire", label: "Commissaire", order: 2 },
  admin: { value: "admin", label: "Administrateur", order: 3 },
} as const;
export type Role = keyof typeof Role;
