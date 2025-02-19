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

const { t } = i18n.global;

const formatAssignments = (assignments: GetAssignmentsQuery["assignments"]) =>
  assignments.map((assignment) => ({
    [t("course.program")]: formatProgram(assignment.course.program),
    [t("course.track")]: assignment.course.track
      ? displayName(assignment.course.track)
      : null,
    [t("course.label")]: assignment.course.name,
    [t("course.semester")]: assignment.course.semester,
    [t("course.type")]: assignment.course.typeByType.label,
    [t("role.teacher")]: formatUser(assignment.service.teacher),
    [t("teacher.email")]: assignment.service.teacher.uid,
  }));

const downloadAssignments =
  (client: Client) =>
  async (variables: GetAssignmentsQueryVariables, filename: string) => {
    const assignments = await client
      .query(GetAssignmentsDocument, variables, {
        requestPolicy: "network-only",
      })
      .then((result) => result.data?.assignments ?? null);
    if (!assignments) {
      console.error("Error while fetching assignments", variables);
      notify(NotifyType.ERROR, {
        message: t("download_assignments.error"),
      });
      return;
    }
    downloadCSV(filename, formatAssignments(assignments));
  };

export const useDownloadAssignments = () => {
  const client = useClientHandle().client;
  return { downloadAssignments: downloadAssignments(client) };
};
