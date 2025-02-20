import { i18n } from "@/services/i18n.ts";

const { t, n } = i18n.global;

// todo: replace with i18n
export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type TeacherName = {
  firstname: string;
  lastname: string;
  alias?: string | null;
};

export const formatUser = (user: TeacherName) =>
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  user.alias || user.firstname + " " + user.lastname;

type DisplayName = {
  name: string;
  nameShort?: string | null;
};

export const displayName = (displayName: DisplayName) =>
  displayName.nameShort ?? displayName.name;

type Program = DisplayName & {
  degree: DisplayName;
};

export const formatProgram = (program: Program) =>
  displayName(program.degree) + " " + displayName(program);

export const formatWH = (hours: number) =>
  n(hours) + "\u00A0" + t("unit.weighted_hours");
