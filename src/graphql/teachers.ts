import { graphql } from "@/gql";

export const GET_TEACHER_DETAILS = graphql(/* GraphQL */ `
  query GetTeacherDetails($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...Profile
      position: fonctionByFonction {
        value
        label
        baseServiceHours: heures_eqtd_service_base
      }
      services(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...ServiceDetails
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
      messages(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        id
        uid
        body: contenu
      }
    }
  }
`);
