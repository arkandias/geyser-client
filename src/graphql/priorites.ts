import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Priorite on priorite {
    id
    intervenant {
      ...Profile
    }
    ensId: ens_id
    anciennete
    prioritaire
  }
`);
