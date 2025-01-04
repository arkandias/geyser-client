import type { UserName } from "@/types/user.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const formatUser = (user: UserName) =>
  user.alias ?? user.firstname + " " + user.lastname;

type Coordinator = {
  username: UserName;
  comment?: string | null;
};

export const formatCoordinators = (coordinators: Coordinator[]) =>
  coordinators
    .map(
      ({ username, comment }) =>
        formatUser(username) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");

type DisplayName = {
  name: string;
  shortName?: string | null;
};

const displayName = (displayName: DisplayName) =>
  displayName.shortName ?? displayName.name;

type Program = DisplayName & {
  degree: DisplayName;
};

export const formatProgram = (program: Program) =>
  displayName(program.degree) + " " + displayName(program);

type Track = DisplayName & {
  program: Program;
};

type Course = DisplayName & {
  program: Program;
  track?: Track | null;
};

export const formatCourseExtra = (course: Course) =>
  formatProgram(course.program) +
  (course.track ? `, parcours ${displayName(course.track)}` : "");

type Responsibility = {
  program: Program | null;
  track: Track | null;
  course: Course | null;
  comment?: string | null;
};

export const formatResponsibilityType = (r: Responsibility) =>
  r.program ? "Mention" : r.track ? "Parcours" : r.course ? "UE" : "";

export const formatResponsibility = (r: Responsibility) =>
  (r.program
    ? formatProgram(r.program)
    : r.track
      ? displayName(r.track)
      : r.course
        ? displayName(r.course)
        : "") + (r.comment ? ` (${r.comment})` : "");

export const formatResponsibilityExtra = (r: Responsibility) =>
  r.track
    ? formatProgram(r.track.program)
    : r.course
      ? formatCourseExtra(r.course)
      : "";

export const formatWH = (hours: number) => nf.format(hours) + " htd";
