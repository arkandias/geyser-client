import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment ModificationType on type_modification_service {
    value
    label
    description
  }
`);

export const GET_MODIFICATION_TYPES = graphql(/* GraphQL */ `
  query GetModificationTypes {
    modificationTypes: type_modification_service(order_by: { value: asc }) {
      ...ModificationType
    }
  }
`);
