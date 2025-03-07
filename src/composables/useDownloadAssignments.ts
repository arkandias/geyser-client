import { useClientHandle } from "@urql/vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { formatProgram } from "@/utils/format.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

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
        { service: { teacher: { lastname: ASC } } }
        { service: { teacher: { firstname: ASC } } }
      ]
    ) {
      course {
        name: nameDisplay
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
        semester
        type {
          label
        }
      }
      service {
        teacher {
          uid
          displayname
        }
      }
    }
  }
`);

export const useDownloadAssignments = () => {
  const { t } = useCustomI18n();
  const client = useClientHandle().client;

  const downloadAssignments = async (
    variables: GetAssignmentsQueryVariables,
    filename: string,
  ) => {
    const assignments = await client
      .query(GetAssignmentsDocument, variables, {
        requestPolicy: "network-only",
      })
      .then((result) => result.data?.assignments ?? []);

    const formattedAssignments = assignments.map((a) => ({
      [t("downloadAssignments.program")]: formatProgram(a.course.program),
      [t("downloadAssignments.track")]: a.course.track
        ? a.course.track.name
        : null,
      [t("downloadAssignments.course")]: a.course.name,
      [t("downloadAssignments.semester")]: a.course.semester,
      [t("downloadAssignments.type")]: a.course.type.label,
      [t("downloadAssignments.teacher")]: a.service.teacher.displayname,
      [t("downloadAssignments.email")]: a.service.teacher.uid,
    }));

    try {
      downloadCSV(filename, formattedAssignments);
    } catch (error) {
      notify(NotifyType.ERROR, {
        message: t("downloadAssignments.error.downloadFailed"),
        caption: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  return { downloadAssignments };
};
