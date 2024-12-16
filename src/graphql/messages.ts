/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const UPSERT_MESSAGE = graphql(/* GraphQL */ `
  mutation UpsertMessage($serviceId: Int!, $contenu: String!) {
    message: insert_message_one(
      object: { service_id: $serviceId, contenu: $contenu }
      on_conflict: {
        constraint: message_service_id_key
        update_columns: [contenu]
      }
    ) {
      id
    }
  }
`);

export const DELETE_MESSAGE = graphql(/* GraphQL */ `
  mutation DeleteMessage($serviceId: Int!) {
    messages: delete_message(where: { service_id: { _eq: $serviceId } }) {
      returning {
        id
      }
    }
  }
`);
