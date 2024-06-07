/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import {
  Archive,
  NestedArchives,
  RowEnseignement,
  RowIntervenant,
} from "@/helpers/types.ts";

export const demandeValue = (
  row: RowEnseignement,
  intervenant: RowIntervenant | null,
  typeDemande: string,
): number => {
  if (intervenant) {
    return (
      intervenant.demandes.find(
        (demande) =>
          demande.ensId === row.id && demande.typeDemande === typeDemande,
      )?.heures ?? 0
    );
  }
  switch (typeDemande) {
    case "attribution":
      return row.totalAttributions.aggregate?.sum?.heures ?? 0;
    case "principale":
      return row.totalPrincipales.aggregate?.sum?.heures ?? 0;
    case "secondaire":
      return row.totalSecondaires.aggregate?.sum?.heures ?? 0;
    default:
      console.warn(`Type de demande '${typeDemande}' inconnu`);
      return 0;
  }
};

const getArchive = (archives: NestedArchives): Archive => {
  const { parent, ...archive } = archives;
  return archive;
};
export const processArchives = (
  archives: NestedArchives | null | undefined,
): Archive[] =>
  archives ? [getArchive(archives), ...processArchives(archives.parent)] : [];
