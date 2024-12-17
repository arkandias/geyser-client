/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { Intervenant } from "@/types/intervenants.ts";
import type { Message } from "@/types/messages.ts";

type Identifiant = {
  id: number;
  nom: string;
  nomCourt: string | null;
};

type TotalHeures = {
  aggregate: {
    sum: {
      heures: number | null;
    } | null;
  } | null;
};

type TotalHeuresEQTD = {
  aggregate: {
    sum: {
      heuresEQTD: number | null;
    } | null;
  } | null;
};

export type RowEnseignement = Identifiant & {
  semestre: number;
  heures: number | null;
  groupes: number | null;
  mention: Identifiant & {
    cursus: Identifiant & { visible: boolean };
    visible: boolean;
  };
  parcours: (Identifiant & { visible: boolean }) | null;
  typeEnseignement: {
    label: string;
    labelCourt: string | null;
  };
  totalAttributions: TotalHeures;
  totalPrincipales: TotalHeures;
  totalSecondaires: TotalHeures;
  totalPrioritaire: TotalHeures;
  visible: boolean;
};

export type RowService = {
  id: number;
  heuresEQTD: number;
  modifications: {
    id: number;
    typeModification: string;
    heuresEQTD: number;
  }[];
  totalModifications: TotalHeuresEQTD;
  intervenant: Intervenant & {
    visible: boolean;
  };
  demandes: {
    id: number;
    ensId: number;
    typeDemande: string;
    heures: number;
    heuresEQTD: number | null;
  }[];
  totalAttributions: TotalHeures & TotalHeuresEQTD;
  totalPrincipales: TotalHeures & TotalHeuresEQTD;
  totalSecondaires: TotalHeures & TotalHeuresEQTD;
  messages: Message[];
};
