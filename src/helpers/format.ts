import type { NamedColor } from "quasar";

import type { Coordinator } from "@/types/enseignements.ts";
import type { Profile } from "@/types/profile.ts";
import type { ServiceRow } from "@/types/rows.ts";

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

export const formatIntervenant = (intervenant: Profile): string =>
  intervenant.alias ?? intervenant.firstname + " " + intervenant.lastname;

export const formatResponsables = (responsables: Coordinator[]): string =>
  responsables
    .map(
      ({ profile, comment }) =>
        formatIntervenant(profile) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");

export const formatResumeIntervenant = (row: ServiceRow): string =>
  `Service : ${String(
    row.weightedHours -
      (row.totalModifications.aggregate?.sum?.weightedHours ?? 0),
  )} htd` +
  " \u2014 " +
  `Attributions : ${String(row.totalAssigned.aggregate?.sum?.weightedHours ?? 0)} htd` +
  " \u2014 " +
  `Vœux principaux : ${String(row.totalPrimary.aggregate?.sum?.weightedHours ?? 0)} htd` +
  " \u2014 " +
  `Vœux secondaires : ${String(row.totalSecondary.aggregate?.sum?.weightedHours ?? 0)} htd`;

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
