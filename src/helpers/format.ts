import type { NamedColor } from "quasar";

import type { Coordinator } from "@/types/courses.ts";
import type { Profile } from "@/types/profile.ts";
import type { TeacherRow } from "@/types/teachers.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const normalizeForSearch = (str: string): string =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const formatRequestType = (requestType: string): string =>
  requestType === "attribution" ? "Attribution" : `Demande ${requestType}`;

export const formatProgram = (nomCursus: string, nomMention: string): string =>
  nomCursus + " " + nomMention;

export const formatUser = (user: Profile): string =>
  user.alias ?? user.firstname + " " + user.lastname;

export const formatCoordinators = (coordinators: Coordinator[]): string =>
  coordinators
    .map(
      ({ profile, comment }) =>
        formatUser(profile) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");

export const formatResumeIntervenant = (row: TeacherRow): string =>
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

export const buttonColor = (active: boolean): NamedColor =>
  active ? "accent" : "white";

export const priorityColor = (
  isPriority: boolean | null | undefined,
): NamedColor => {
  switch (isPriority) {
    case true:
      return "positive";
    case false:
      return "negative";
    default:
      return "warning";
  }
};
