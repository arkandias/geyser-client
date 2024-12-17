import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Priorite on priorite {
    id
    intervenant {
      ...Intervenant
    }
    ensId: ens_id
    anciennete
    prioritaire
  }
`);
