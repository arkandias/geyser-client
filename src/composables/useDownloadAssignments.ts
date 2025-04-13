import { useQuery } from "@urql/vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { NotifyType, useNotify } from "@/composables/useNotify.ts";
import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { downloadCSV } from "@/utils/csv-export.ts";

graphql(`
  query GetAssignments($year: Int!, $where: RequestBoolExp = {}) {
    assignments: request(
      where: {
        _and: [
          { service: { year: { _eq: $year } } }
          { type: { _eq: "assignment" } }
          $where
        ]
      }
      orderBy: [
        { course: { program: { degree: { name: ASC } } } }
        { course: { program: { name: ASC } } }
        { course: { track: { name: ASC } } }
        { course: { semester: ASC } }
        { course: { name: ASC } }
        { course: { type: { label: ASC } } }
        { service: { teacher: { displayname: ASC } } }
      ]
    ) {
      course {
        program {
          name: nameDisplay
          degree {
            name: nameDisplay
          }
        }
        track {
          name: nameDisplay
          program {
            name: nameDisplay
            degree {
              name: nameDisplay
            }
          }
        }
        name: nameDisplay
        semester
        type {
          label
        }
      }
      service: vService {
        teacher: vTeacher {
          uid
          displayname
        }
      }
    }
  }
`);

export const useDownloadAssignments = () => {
  const { t } = useCustomI18n();
  const { notify } = useNotify();
  const getAssignments = useQuery({
    query: GetAssignmentsDocument,
    pause: true,
  });

  const downloadAssignments = async (
    variables: GetAssignmentsQueryVariables,
    filename: string,
  ) => {
    const assignments = await getAssignments
      .executeQuery({ variables, cachePolicy: "network-only" })
      .then((result) => result.data.value?.assignments ?? []);

    const formattedAssignments = assignments.map((a) => ({
      [t("downloadAssignments.program")]:
        `${a.course.program.degree.name} ${a.course.program.name}`,
      [t("downloadAssignments.track")]: a.course.track
        ? a.course.track.name
        : null,
      [t("downloadAssignments.course")]: a.course.name,
      [t("downloadAssignments.semester")]: a.course.semester,
      [t("downloadAssignments.type")]: a.course.type.label,
      [t("downloadAssignments.teacher")]: a.service?.teacher?.displayname,
      [t("downloadAssignments.email")]: a.service?.teacher?.uid,
    }));

    try {
      downloadCSV(filename, formattedAssignments);
    } catch (error) {
      notify(NotifyType.ERROR, {
        message: t("downloadAssignments.error.downloadFailed"),
        caption:
          error instanceof Error
            ? error.message
            : t("downloadAssignments.error.unknownError"),
      });
    }
  };

  return { downloadAssignments };
};
