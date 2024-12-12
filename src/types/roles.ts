/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export const Role = {
  intervenant: { value: "intervenant", label: "Intervenant", order: 1 },
  commissaire: { value: "commissaire", label: "Commissaire", order: 2 },
  admin: { value: "admin", label: "Administrateur", order: 3 },
} as const;
export type Role = keyof typeof Role;
