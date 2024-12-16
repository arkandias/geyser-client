/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export const Phase = {
  voeux: { value: "voeux", label: "Vœux", order: 1 },
  commission: { value: "commission", label: "Commission", order: 2 },
  consultation: { value: "consultation", label: "Consultation", order: 3 },
  fermeture: { value: "fermeture", label: "Fermeture", order: 4 },
} as const;
export type Phase = keyof typeof Phase;

export const isPhase = (phase: string): phase is Phase => {
  if (!(phase in Phase)) {
    console.warn(`Phase ${phase} inconnue`);
  }
  return phase in Phase;
};
