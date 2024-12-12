/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { Intervenant } from "./intervenants";

export const TypeDemande = {
  attribution: {
    value: "attribution",
    label: "Attribution",
    labelPlural: "Attributions",
    order: 1,
  },
  principale: {
    value: "principale",
    label: "Principale",
    labelPlural: "Principales",
    order: 2,
  },
  secondaire: {
    value: "secondaire",
    label: "Secondaire",
    labelPlural: "Secondaires",
    order: 3,
  },
} as const;
export type TypeDemande = keyof typeof TypeDemande;

export type Demande = {
  id: number;
  intervenant: Intervenant;
  enseignement: {
    id: number;
    heures: number | null;
  };
  typeDemande: string;
  heures: number;
  prioritaire: boolean | null;
};

export type Priorite = {
  id: number;
  intervenant: Intervenant;
  ensId: number;
  anciennete: number | null;
  prioritaire: boolean | null;
};

export type Archive = {
  annee: number;
  ensId: number;
  demandes: Demande[];
};

export type NestedArchives = Archive & {
  parent?: NestedArchives | null;
};
