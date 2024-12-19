import { graphql } from "@/gql";

export const GET_TEACHERS = graphql(/* GraphQL */ `
  query GetTeachers($year: Int!, $where: intervenant_bool_exp = {}) {
    teachers: intervenant(
      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...Profile
    }
  }
`);

export const GET_TEACHERS_ROWS = graphql(/* GraphQL */ `
  query GetTeachersRows($year: Int!, $where: intervenant_bool_exp = {}) {
    teachers: intervenant(
      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...Profile
      visible
      # limit: 1 car unique
      services(where: { annee: { _eq: $year } }, limit: 1) {
        ...Service
      }
      totalAssigned: demandes_aggregate(
        where: { _and: [{ type: { _eq: "attribution" } }] }
      ) {
        ...RequestsTotalHours
        ...RequestsTotalWeightedHours
      }
      totalPrimary: demandes_aggregate(
        where: { _and: [{ type: { _eq: "principale" } }] }
      ) {
        ...RequestsTotalHours
        ...RequestsTotalWeightedHours
      }
      totalSecondary: demandes_aggregate(
        where: { _and: [{ type: { _eq: "secondaire" } }] }
      ) {
        ...RequestsTotalHours
        ...RequestsTotalWeightedHours
      }
      messageCount: messages_aggregate(
        where: { annee: { _eq: $year } }
        limit: 1
      ) {
        aggregate {
          count
        }
      }
    }
  }
`);

export const GET_TEACHER_DETAILS = graphql(/* GraphQL */ `
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...Profile
      position: fonctionByFonction {
        value
        label
      }
      priorities: priorites(
        where: { enseignement: { annee: { _eq: $year } } }
        order_by: { ens_id: asc }
      ) {
        ...Priority
      }
      requests: demandes(
        where: { enseignement: { annee: { _eq: $year } } }
        order_by: [{ type: asc }, { ens_id: asc }]
      ) {
        ...RequestDetails
      }
      # limit: 1 car unique
      services(where: { annee: { _eq: $year } }, limit: 1) {
        ...ServiceDetails
      }
      # limit: 1 car unique
      messages(where: { annee: { _eq: $year } }, limit: 1) {
        ...Message
      }
    }
  }
`);
