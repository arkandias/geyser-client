import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Profile on intervenant {
    uid
    firstname: prenom
    lastname: nom
    alias
    active: actif
  }
`);
