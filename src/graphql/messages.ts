/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const UPSERT_MESSAGE = graphql(/* GraphQL */ `
  mutation UpsertMessage(
    $annee: Int!
    $uid: String!
    $typeMessage: String!
    $contenu: String!
  ) {
    message: insert_message_one(
      object: {
        annee: $annee
        uid: $uid
        type: $typeMessage
        contenu: $contenu
      }
      on_conflict: {
        constraint: message_annee_uid_type_key
        update_columns: [contenu]
      }
    ) {
      id
    }
  }
`);

export const DELETE_MESSAGE = graphql(/* GraphQL */ `
  mutation DeleteMessage($annee: Int!, $uid: String!, $typeMessage: String!) {
    messages: delete_message(
      where: {
        _and: [
          { annee: { _eq: $annee } }
          { uid: { _eq: $uid } }
          { type: { _eq: $typeMessage } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }
`);
