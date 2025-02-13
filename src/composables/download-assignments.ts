import { useQuery } from "@urql/vue";

import { graphql } from "@/gql";
import {
  GetAssignmentsDocument,
  type GetAssignmentsQuery,
  type GetAssignmentsQueryVariables,
} from "@/gql/graphql.ts";
import { i18n } from "@/services/i18n.ts";
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

const { t } = i18n.global;

const headers = [
  t("course.program"),
  t("course.track"),
  t("course.label"),
  t("course.semester"),
  t("course.type"),
  t("role.teacher"),
  t("teacher.email"),
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

export const useDownloadAssignments = async (
  variables: GetAssignmentsQueryVariables,
  filename: string,
) => {
  const assignments = await useQuery({
    query: GetAssignmentsDocument,
    variables,
    context: { requestPolicy: "network-only" },
  }).then((result) => result.data.value?.assignments ?? null);
  if (!assignments) {
    console.error("Error while fetching assignments", variables);
    notify(NotifyType.ERROR, {
      message: t("download_assignments.error"),
    });
    return;
  }
  downloadCSV(formatAssignments(assignments), headers, filename);
};
