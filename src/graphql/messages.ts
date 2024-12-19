import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Message on message {
    id
    body: contenu
  }
`);

export const UPSERT_MESSAGE = graphql(/* GraphQL */ `
  mutation UpsertMessage($year: Int!, $uid: String!, $body: String!) {
    message: insert_message_one(
      object: { annee: $year, uid: $uid, contenu: $body }
      on_conflict: {
        constraint: message_annee_uid_key
        update_columns: [contenu]
      }
    ) {
      id
    }
  }
`);

export const DELETE_MESSAGE = graphql(/* GraphQL */ `
  mutation DeleteMessage($year: Int!, $uid: String!) {
    messages: delete_message(
      where: { _and: [{ annee: { _eq: $year } }, { uid: { _eq: $uid } }] }
    ) {
      returning {
        id
      }
    }
  }
`);
