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
