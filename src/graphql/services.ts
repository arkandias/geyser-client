import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Service on service {
    id
    teacher: intervenant {
      ...Profile
    }
    weightedHours: heures_eqtd
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
