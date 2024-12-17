import { graphql } from "@/gql";

export const GET_TYPES_MODIFICATION = graphql(/* GraphQL */ `
  query GetTypesModification {
    typesModification: type_modification(order_by: { label: asc }) {
      label
      description
    }
  }
`);

export const INSERT_MODIFICATION = graphql(/* GraphQL */ `
  mutation InsertModification(
    $serviceId: Int!
    $typeModification: String!
    $heuresEQTD: Float!
  ) {
    modificationService: insert_modification_service_one(
      object: {
        service_id: $serviceId
        type: $typeModification
        heures_eqtd: $heuresEQTD
      }
    ) {
      id
    }
  }
`);

export const DELETE_MODIFICATION = graphql(/* GraphQL */ `
  mutation DeleteModification($id: Int!) {
    modificationService: delete_modification_service_by_pk(id: $id) {
      id
    }
  }
`);
