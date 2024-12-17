import type { Archive, NestedArchives } from "@/types/demandes.ts";
import type { RowEnseignement, RowService } from "@/types/rows.ts";

export const demandeValue = (
  row: RowEnseignement,
  intervenant: RowService | null,
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
