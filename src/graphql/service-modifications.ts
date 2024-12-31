import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment ServiceModification on modification_service {
    id
    modificationType: typeByType {
      value
      label
      description
    }
    weightedHours: heures_eqtd
  }

  fragment ServiceModificationsTotalWeightedHours on modification_service_aggregate {
    aggregate {
      sum {
        weightedHours: heures_eqtd
      }
    }
  }
`);
