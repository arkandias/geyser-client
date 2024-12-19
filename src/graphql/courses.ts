import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Archive on enseignement {
    year: annee
    courseId: id
    requests: demandes(
      where: { type: { _eq: "attribution" } }
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      ...RequestDetails
    }
  }

  fragment NestedArchives on enseignement {
    ...Archive
    parent {
      ...Archive
      parent {
        ...Archive
      }
    }
  }

  fragment CourseDetails on enseignement {
    courseId: id
    name: nom
    courseType: typeByType {
      value
      label
    }
    semester: semestre
    coordinators: responsables(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      ...Coordinator
    }
    program: mention {
      degree: cursus {
        name: nom
      }
      name: nom
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        ...Coordinator
      }
    }
    track: parcours {
      name: nom
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        ...Coordinator
      }
    }
    description
    requests: demandes(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      ...RequestDetails
    }
    priorities: priorites(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      ...Priority
    }
    parent {
      ...NestedArchives
    }
  }

  fragment CourseRow on enseignement {
    id
    name: nom
    shortName: nom_court
    visible
    program: mention {
      degree: cursus {
        id
        name: nom
        shortName: nom_court
        visible
      }
      id
      name: nom
      shortName: nom_court
      visible
    }
    track: parcours {
      id
      name: nom
      shortName: nom_court
      visible
    }
    courseType: typeByType {
      value
      label
    }
    semester: semestre
    hoursPerGroup: heures_corrigees
    numberOfGroups: groupes_corriges
    totalAssigned: demandes_aggregate(where: { type: { _eq: "attribution" } }) {
      ...RequestsTotalHours
    }
    totalPrimary: demandes_aggregate(where: { type: { _eq: "principale" } }) {
      ...RequestsTotalHours
    }
    totalSecondary: demandes_aggregate(where: { type: { _eq: "secondaire" } }) {
      ...RequestsTotalHours
    }
    totalPriority: demandes_aggregate(
      where: {
        _and: [{ type: { _eq: "principale" } }, { prioritaire: { _eq: true } }]
      }
    ) {
      ...RequestsTotalHours
    }
  }
`);

export const GET_COURSES_ROWS = graphql(/* GraphQL */ `
  query GetCoursesTableRows($year: Int!) {
    courses: enseignement(
      where: {
        _and: [
          { annee: { _eq: $year } }
          { heures_corrigees: { _gt: 0 } }
          { groupes_corriges: { _gt: 0 } }
        ]
      }
      order_by: [
        { mention: { cursus: { nom: asc } } }
        { mention: { nom: asc } }
        { parcours: { nom: asc } }
        { semestre: asc }
        { nom: asc }
        { type: asc }
      ]
    ) {
      ...CourseRow
    }
  }
`);

export const GET_COURSE_DETAILS = graphql(/* GraphQL */ `
  query GetCourseDetails($courseId: Int!) {
    course: enseignement_by_pk(id: $courseId) {
      ...CourseDetails
    }
  }
`);

export const UPDATE_DESCRIPTION = graphql(/* GraphQL */ `
  mutation UpdateDescription($courseId: Int!, $description: String) {
    course: update_enseignement_by_pk(
      pk_columns: { id: $courseId }
      _set: { description: $description }
    ) {
      id
    }
  }
`);
