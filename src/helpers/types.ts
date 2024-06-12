/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { QTableProps } from "quasar";
import { MaybeRef } from "vue";

// Rows
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
  visible: boolean;
  semestre: number;
  heures: number;
  groupes: number | null;
  mention: Identifiant & {
    cursus: Identifiant;
  };
  parcours: Identifiant | null;
  typeEnseignement: {
    label: string;
    labelCourt: string | null;
  };
  totalAttributions: TotalHeures;
  totalPrincipales: TotalHeures;
  totalSecondaires: TotalHeures;
  totalPrioritaire: TotalHeures;
};
export type RowIntervenant = Intervenant & {
  visible: boolean;
  demandes: Array<{
    ensId: number;
    typeDemande: string;
    heures: number;
    heuresEQTD: number | null;
  }>;
  services: Array<{ heuresEQTD: number }>;
  totalModifications: TotalHeuresEQTD;
  totalAttributions: TotalHeures & TotalHeuresEQTD;
  totalPrincipales: TotalHeures & TotalHeuresEQTD;
  totalSecondaires: TotalHeures & TotalHeuresEQTD;
};

// Columns
type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
export type ColumnBase = ArrayElement<NonNullable<QTableProps["columns"]>> & {
  tooltip?: string;
  visible: MaybeRef<boolean>;
  searchable: boolean;
  abbreviable: boolean;
};
export type ColumnAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => { long: string; short: string | null };
};
export type ColumnNonAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => unknown;
};
export type Column<T> = ColumnAbbreviable<T> | ColumnNonAbbreviable<T>;
export const isAbbreviable = <T>(col: Column<T>): col is ColumnAbbreviable<T> =>
  col.abbreviable;

// Data types
export type Intervenant = {
  uid: string;
  nom: string;
  prenom: string;
  alias: string | null;
};
export type Responsable = {
  intervenant: Intervenant;
  commentaire: string | null;
};
export type Resume = {
  ensId: number;
  nom: string;
  responsables: Responsable[];
  mention: {
    nom: string;
    responsables: Responsable[];
    cursus: {
      nom: string;
    };
  };
  parcours: {
    nom: string;
    responsables: Responsable[];
  } | null;
  semestre: number;
  description: string | null;
};
export type Demande = {
  id: number;
  intervenant: Intervenant;
  enseignement: {
    id: number;
    heures: number;
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
export type Modification = {
  id: number;
  typeModification: string;
  heuresEQTD: number;
};
export type Message = {
  typeMessage: string;
  contenu: string;
};

// Miscellaneous
export type Nullable<T> = T | null;
export type Option<T> = {
  value: T;
  label: string;
};
export type OptionSearch<T> = Option<T> & {
  search: string;
};
