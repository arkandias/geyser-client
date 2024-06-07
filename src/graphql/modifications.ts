/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const GET_TYPES_MODIFICATION = graphql(/* GraphQL */ `
  query GetTypesModification {
    typesModification: ec_type_modification {
      value
    }
  }
`);

export const INSERT_MODIFICATION = graphql(/* GraphQL */ `
  mutation InsertModification(
    $annee: Int!
    $uid: String!
    $typeModification: String!
    $heuresEQTD: Float!
  ) {
    insert_ec_modification_service_one(
      object: {
        annee: $annee
        uid: $uid
        type: $typeModification
        heures_eqtd: $heuresEQTD
      }
    ) {
      id
    }
  }
`);

export const DELETE_MODIFICATION = graphql(/* GraphQL */ `
  mutation DeleteModification($id: Int!) {
    delete_ec_modification_service_by_pk(id: $id) {
      id
    }
  }
`);
