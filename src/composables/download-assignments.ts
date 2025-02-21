import { useClientHandle } from "@urql/vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { displayName, formatProgram, formatUser } from "@/utils/format.ts";
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
        { course: { typeByType: { label: ASC } } }
        { service: { teacher: { lastname: ASC } } }
        { service: { teacher: { firstname: ASC } } }
      ]
    ) {
      course {
        name
        nameShort
        program {
          name
          nameShort
          degree {
            name
            nameShort
          }
        }
        track {
          name
          nameShort
          program {
            name
            nameShort
            degree {
              name
              nameShort
            }
          }
        }
        semester
        typeByType {
          label
        }
      }
      service {
        teacher {
          uid
          firstname
          lastname
          alias
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
      [t("course.program")]: formatProgram(a.course.program),
      [t("course.track")]: a.course.track ? displayName(a.course.track) : null,
      [t("course.label")]: a.course.name,
      [t("course.semester")]: a.course.semester,
      [t("course.type")]: a.course.typeByType.label,
      [t("role.teacher")]: formatUser(a.service.teacher),
      [t("teacher.email")]: a.service.teacher.uid,
    }));

    try {
      downloadCSV(filename, formattedAssignments);
      // TODO: notifications
    } catch (error) {
      console.error("Export error:", error);
      notify(NotifyType.ERROR, {
        message: t("admin.export.invalid.message"), // TODO: replace with download
        caption: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  return { downloadAssignments };
};
