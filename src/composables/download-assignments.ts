import { type Client, useClientHandle } from "@urql/vue";

import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQuery,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { downloadCSV } from "@/utils/csv.ts";
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

const headers = [
  "mention",
  "parcours",
  "enseignement",
  "semestre",
  "type",
  "intervenant",
  "email",
];

const formatAssignments = (assignments: GetAssignmentsQuery["assignments"]) =>
  assignments.map((assignment) => ({
    mention: formatProgram(assignment.course.program),
    parcours: assignment.course.track
      ? displayName(assignment.course.track)
      : null,
    enseignement: assignment.course.name,
    semestre: assignment.course.semester,
    type: assignment.course.typeByType.label,
    intervenant: formatUser(assignment.service.teacher),
    email: assignment.service.teacher.uid,
  }));

const downloadAssignments =
  (client: Client) =>
  async (variables: GetAssignmentsQueryVariables, filename: string) => {
    const result = await client.query(GetAssignmentsDocument, variables, {
      requestPolicy: "network-only",
    });
    if (!result.data) {
      console.error("Error while fetching assignments", variables);
      notify(NotifyType.ERROR, {
        message: "Erreur lors de la récupération des attributions",
      });
      return;
    }
    downloadCSV(formatAssignments(result.data.assignments), headers, filename);
  };

export const useDownloadAssignments = () => {
  const client = useClientHandle().client;
  return {
    downloadAssignments: downloadAssignments(client),
  };
};
