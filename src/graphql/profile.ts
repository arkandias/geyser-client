import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Profile on intervenant {
    uid
    nom
    prenom
    alias
  }
`);

export const GET_PROFILE = graphql(/* GraphQL */ `
  query GetProfile($uid: String!) {
    profile: intervenant_by_pk(uid: $uid) {
      ...Profile
    }
  }
`);
