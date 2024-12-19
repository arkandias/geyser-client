import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment ServiceModificationType on type_modification_service {
    key
    label
    description
  }
`);

export const GET_SERVICE_MODIFICATION_TYPES = graphql(/* GraphQL */ `
  query GetServiceModificationTypes {
    serviceModificationTypes: type_modification_service(
      order_by: { key: asc }
    ) {
      ...ServiceModificationType
    }
  }
`);
