import { i18n } from "@/services/i18n.ts";

const { t, n } = i18n.global;

export const formatProgram = (program: {
  name?: string | null | undefined;
  degree: { name?: string | null | undefined };
}) =>
  !program.degree.name || !program.name
    ? ""
    : program.degree.name + " " + program.name;

export const formatWH = (hours: number) =>
  n(hours) + "\u00A0" + t("unit.weightedHours");
