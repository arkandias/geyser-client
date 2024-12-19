import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment TeacherRow on intervenant {
    ...Profile
    visible
    # limit: 1 car unique
    services(where: { annee: { _eq: $year } }, limit: 1) {
      ...ServiceDetails
    }
    requests: demandes(order_by: [{ type: asc }, { ens_id: asc }]) {
      ...RequestDetails
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
    # limit: 1 car unique
    messages(where: { annee: { _eq: $year } }, limit: 1) {
      ...Message
    }
  }
`);

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

export const GET_TEACHERS_TABLE_ROWS = graphql(/* GraphQL */ `
  query GetTeachersTableRows($year: Int!, $where: intervenant_bool_exp = {}) {
    teachers: intervenant(
      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...TeacherRow
    }
  }
`);
