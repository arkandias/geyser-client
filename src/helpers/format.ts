import type { NamedColor } from "quasar";

import type { Intervenant, Responsable } from "@/types/intervenants.ts";
import type { RowService } from "@/types/rows.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const normalizeForSearch = (str: string): string =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const formatTypeDemande = (typeDemande: string): string =>
  typeDemande === "attribution" ? "Attribution" : `Demande ${typeDemande}`;

export const formatFormation = (
  nomCursus: string,
  nomMention: string,
): string => nomCursus + " " + nomMention;

export const formatIntervenant = (intervenant: Intervenant): string =>
  intervenant.alias ?? intervenant.prenom + " " + intervenant.nom;

export const formatResponsables = (responsables: Responsable[]): string =>
  responsables
    .map(
      ({ intervenant, commentaire }) =>
        formatIntervenant(intervenant) +
        (commentaire ? ` (${commentaire})` : ""),
    )
    .join(", ");

export const formatResumeIntervenant = (row: RowService): string =>
  `Service : ${String(
    row.heuresEQTD - (row.totalModifications.aggregate?.sum?.heuresEQTD ?? 0),
  )} htd` +
  " \u2014 " +
  `Attributions : ${String(row.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0)} htd` +
  " \u2014 " +
  `Vœux principaux : ${String(row.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0)} htd` +
  " \u2014 " +
  `Vœux secondaires : ${String(row.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0)} htd`;

export const couleurBouton = (actif: boolean): NamedColor =>
  actif ? "accent" : "white";

export const couleurPriorite = (
  prioritaire: boolean | null | undefined,
): NamedColor => {
  switch (prioritaire) {
    case true:
      return "positive";
    case false:
      return "negative";
    default:
      return "warning";
  }
};
