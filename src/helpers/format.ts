import type { NamedColor } from "quasar";

import { modifiedService, totalWH } from "@/helpers/hours.ts";
import type { Coordinator } from "@/types/coordinator.ts";
import type { CourseDetails } from "@/types/course.ts";
import type { Profile } from "@/types/profile.ts";
import type { TeacherRow } from "@/types/teacher.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

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

export const formatCourseCaption = (details: CourseDetails): string =>
  `${details.program.degree.name} — ${details.program.name} — ` +
  (details.track?.name ? `${details.track.name} — ` : "") +
  `S${String(details.semester)} — ` +
  details.courseType.label;

export const formatWH = (hours: number): string => nf.format(hours) + " htd";

export const formatTeacherCaption = (row: TeacherRow) =>
  `Service corrigé : ${formatWH(modifiedService(row.services[0]))} — ` +
  `Attributions : ${formatWH(totalWH(row.totalAssigned))} — ` +
  `Vœux principaux : ${formatWH(totalWH(row.totalPrimary))} — ` +
  `Vœux secondaires : ${formatWH(totalWH(row.totalSecondary))}`;

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
