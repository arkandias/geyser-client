import type { UserName } from "@/types/user.ts";

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const formatUser = (user: UserName) =>
  user.alias ?? user.firstname + " " + user.lastname;

export const formatCoordinators = (
  coordinators: { username: UserName; comment?: string | null }[],
): string =>
  coordinators
    .map(
      ({ username, comment }) =>
        formatUser(username) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");

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

export const formatWH = (hours: number) => nf.format(hours) + " htd";
