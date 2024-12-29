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
