import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Service on service {
    id
    teacher: intervenant {
      ...Profile
    }
    weightedHours: heures_eqtd
  }

  fragment ServiceDetails on service {
    ...Service
    modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {
      ...ServiceModification
    }
    totalModifications: modifications_aggregate {
      ...ServiceModificationsTotalWeightedHours
    }
  }
`);
