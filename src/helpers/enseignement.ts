import type { CourseRow } from "@/types/courses.ts";
import type { Archive, NestedArchives } from "@/types/requests.ts";
import type { TeacherRow } from "@/types/teachers.ts";

export const demandeValue = (
  row: CourseRow,
  intervenant: TeacherRow | null,
  typeDemande: string,
): number => {
  if (intervenant) {
    return (
      intervenant.requests.find(
        (demande) =>
          demande.courseId === row.id && demande.requestType === typeDemande,
      )?.hours ?? 0
    );
  }
  switch (typeDemande) {
    case "attribution":
      return row.totalAssigned.aggregate?.sum?.hours ?? 0;
    case "principale":
      return row.totalPrimary.aggregate?.sum?.hours ?? 0;
    case "secondaire":
      return row.totalSecondary.aggregate?.sum?.hours ?? 0;
    default:
      console.warn(`Type de demande '${typeDemande}' inconnu`);
      return 0;
  }
};

const getArchive = (archives: NestedArchives): Archive => {
  const { parent, ...archive } = archives;
  return archive;
};
export const processArchives = (
  archives: NestedArchives | null | undefined,
): Archive[] =>
  archives ? [getArchive(archives), ...processArchives(archives.parent)] : [];
