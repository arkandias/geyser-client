import type { NamedColor } from "quasar";

import type { UserName } from "@/types/profile.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const formatProgram = (program: {
  name: string;
  shortName?: string | null;
  degree: {
    name: string;
    shortName?: string | null;
  };
}): string =>
  (program.degree.shortName ?? program.degree.name) +
  " " +
  (program.shortName ?? program.name);

export const formatUser = (user: UserName): string =>
  user.alias ?? user.firstname + " " + user.lastname;

export const formatWH = (hours: number): string => nf.format(hours) + " htd";

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
