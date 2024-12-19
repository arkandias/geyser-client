import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import type { Archive, CourseRow, NestedArchives } from "@/types/courses.ts";
import type { TeacherRow } from "@/types/teachers.ts";

export const getRequestTotal = (
  row: CourseRow,
  requestType: RequestType,
  teacher?: TeacherRow,
) => {
  if (teacher) {
    return (
      teacher.requests.find(
        (request) =>
          request.course.id === row.id && request.requestType === requestType,
      )?.hours ?? 0
    );
  }
  switch (requestType) {
    case REQUEST_TYPES.ASSIGNMENT:
      return row.totalAssigned.aggregate?.sum?.hours ?? 0;
    case REQUEST_TYPES.PRIMARY:
      return row.totalPrimary.aggregate?.sum?.hours ?? 0;
    case REQUEST_TYPES.SECONDARY:
      return row.totalSecondary.aggregate?.sum?.hours ?? 0;
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
