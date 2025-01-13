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
  query GetAssignments($year: Int!, $where: demande_bool_exp = {}) {
    assignments: demande(
      where: {
        _and: [
          { service: { annee: { _eq: $year } } }
          { type: { _eq: "attribution" } }
          $where
        ]
      }
      order_by: [
        { enseignement: { mention: { cursus: { nom: asc } } } }
        { enseignement: { mention: { nom: asc } } }
        { enseignement: { parcours: { nom: asc } } }
        { enseignement: { semestre: asc } }
        { enseignement: { nom: asc } }
        { enseignement: { typeByType: { label: asc } } }
        { service: { intervenant: { nom: asc } } }
        { service: { intervenant: { prenom: asc } } }
      ]
    ) {
      course: enseignement {
        name: nom
        shortName: nom_court
        program: mention {
          name: nom
          shortName: nom_court
          degree: cursus {
            name: nom
            shortName: nom_court
          }
        }
        track: parcours {
          name: nom
          shortName: nom_court
          program: mention {
            name: nom
            shortName: nom_court
            degree: cursus {
              name: nom
              shortName: nom_court
            }
          }
        }
        semester: semestre
        typeByType {
          label
        }
      }
      service {
        teacher: intervenant {
          uid
          firstname: prenom
          lastname: nom
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
