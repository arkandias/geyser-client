import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment ServiceModification on modification_service {
    id
    modificationType: typeByType {
      ...ModificationType
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

export const INSERT_SERVICE_MODIFICATION = graphql(/* GraphQL */ `
  mutation InsertServiceModification(
    $serviceId: Int!
    $modificationType: String!
    $weightedHours: Float!
  ) {
    serviceModification: insert_modification_service_one(
      object: {
        service_id: $serviceId
        type: $modificationType
        heures_eqtd: $weightedHours
      }
    ) {
      id
    }
  }
`);

export const DELETE_SERVICE_MODIFICATION = graphql(/* GraphQL */ `
  mutation DeleteServiceModification($id: Int!) {
    serviceModification: delete_modification_service_by_pk(id: $id) {
      id
    }
  }
`);
