import { type Client, useClientHandle } from "@urql/vue";

import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQuery,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { i18n } from "@/services/i18n.ts";
import { downloadCSV } from "@/utils/csv-export.ts";
import { displayName, formatProgram, formatUser } from "@/utils/format.ts";

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

const { t } = i18n.global;

const formatAssignments = (assignments: GetAssignmentsQuery["assignments"]) =>
  assignments.map((a) => ({
    [t("course.program")]: formatProgram(a.course.program),
    [t("course.track")]: a.course.track ? displayName(a.course.track) : null,
    [t("course.label")]: a.course.name,
    [t("course.semester")]: a.course.semester,
    [t("course.type")]: a.course.typeByType.label,
    [t("role.teacher")]: formatUser(a.service.teacher),
    [t("teacher.email")]: a.service.teacher.uid,
  }));

const downloadAssignments =
  (client: Client) =>
  async (variables: GetAssignmentsQueryVariables, filename: string) => {
    const assignments = await client
      .query(GetAssignmentsDocument, variables, {
        requestPolicy: "network-only",
      })
      .then((result) => result.data?.assignments ?? []);
    downloadCSV(filename, formatAssignments(assignments), [], {
      success: t("download_assignments.error", assignments.length),
      error: t("download_assignments.error"),
    });
  };

export const useDownloadAssignments = () => {
  const client = useClientHandle().client;
  return { downloadAssignments: downloadAssignments(client) };
};
