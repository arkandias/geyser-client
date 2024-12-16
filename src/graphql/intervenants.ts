/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Intervenant on intervenant {
    uid
    nom
    prenom
    alias
  }
`);

export const GET_INTERVENANT = graphql(/* GraphQL */ `
  query GetIntervenant($uid: String!) {
    intervenant: intervenant_by_pk(uid: $uid) {
      ...Intervenant
    }
  }
`);

export const UPSERT_INTERVENANT = graphql(/* GraphQL */ `
  mutation UpsertIntervenant($uid: String!, $nom: String!, $prenom: String!) {
    intervenant: insert_intervenant_one(
      object: { uid: $uid, nom: $nom, prenom: $prenom }
      on_conflict: {
        constraint: intervenant_pkey
        update_columns: [nom, prenom]
      }
    ) {
      uid
      nom
      prenom
      alias
    }
  }
`);
