import type { NamedColor } from "quasar";

import type { Coordinator } from "@/types/coordinator.ts";
import type { CourseDetails } from "@/types/course.ts";
import type { Profile } from "@/types/profile.ts";
import type { TeacherRow } from "@/types/teacher.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const normalizeForSearch = (str: string) =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const formatProgram = (nomCursus: string, nomMention: string) =>
  nomCursus + " " + nomMention;

export const formatUser = (user: Profile) =>
  user.alias ?? user.firstname + " " + user.lastname;

export const formatCoordinators = (coordinators: Coordinator[]) =>
  coordinators
    .map(
      ({ profile, comment }) =>
        formatUser(profile) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");

export const formatCourseCaption = (details: CourseDetails) =>
  `${details.program.degree.name} — ${details.program.name} — ` +
  (details.track?.name ? `${details.track.name} — ` : "") +
  `S${String(details.semester)} — ` +
  details.courseType.label;

export const formatTeacherCaption = (row: TeacherRow) => {
  const service = String(
    (row.services[0]?.base ?? 0) -
      (row.services[0]?.totalModifications.aggregate?.sum?.weightedHours ?? 0),
  );
  const assigned = String(row.totalAssigned.aggregate?.sum?.weightedHours ?? 0);
  const primary = String(row.totalPrimary.aggregate?.sum?.weightedHours ?? 0);
  const secondary = String(
    row.totalSecondary.aggregate?.sum?.weightedHours ?? 0,
  );
  return (
    `Service : ${service} htd — ` +
    `Attributions : ${assigned} htd — ` +
    `Vœux principaux : ${primary} htd — ` +
    `Vœux secondaires : ${secondary} htd`
  );
};

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
