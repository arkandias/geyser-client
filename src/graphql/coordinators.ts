import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Coordinator on responsable {
    id
    profile: intervenant {
      ...Profile
    }
    comment: commentaire
  }
`);
