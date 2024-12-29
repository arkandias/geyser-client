import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Service on service {
    id
    year: annee
    uid
    base: heures_eqtd
    totalModifications: modifications_aggregate {
      ...ServiceModificationsTotalWeightedHours
    }
  }

  fragment ServiceDetails on service {
    ...Service
    modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {
      ...ServiceModification
    }
  }
`);

export const GET_SERVICE = graphql(/* GraphQL */ `
  query GetService($uid: String!, $year: Int!) {
    service(
      where: { _and: [{ uid: { _eq: $uid } }, { annee: { _eq: $year } }] }
      limit: 1
    ) {
      id
    }
  }
`);

export const UPSERT_SERVICE = graphql(/* GraphQL */ `
  mutation UpsertService($uid: String!, $year: Int!, $hours: Float!) {
    service: insert_service_one(
      object: { uid: $uid, annee: $year, heures_eqtd: $hours }
      on_conflict: {
        constraint: service_annee_uid_key
        update_columns: [heures_eqtd]
      }
    ) {
      id
    }
  }
`);
