/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const GET_ANNEES = graphql(/* GraphQL */ `
  query GetAnnees {
    annees: ec_annee(order_by: { value: desc }) {
      value
      enCours: en_cours
      visible
    }
  }
`);

export const UPDATE_ANNEE_EN_COURS = graphql(/* GraphQL */ `
  mutation UpdateAnneeEnCours($value: Int!) {
    annees: update_ec_annee(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      affected_rows
      returning {
        value
      }
    }
    enCours: update_ec_annee_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }
`);
