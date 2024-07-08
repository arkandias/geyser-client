/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Demande on demande {
    id
    intervenant {
      ...Intervenant
    }
    enseignement {
      id
      heures: heures_corrigees
    }
    typeDemande: type
    heures
    prioritaire
  }

  fragment TotalHeures on demande_aggregate {
    aggregate {
      sum {
        heures
      }
    }
  }

  fragment TotalHeuresEQTD on demande_aggregate {
    aggregate {
      sum {
        heuresEQTD: heures_eqtd
      }
    }
  }
`);

export const GET_DEMANDE = graphql(/* GraphQL */ `
  query GetDemande($uid: String!, $ensId: Int!, $typeDemande: String!) {
    # limit: 1 car unique
    demande: demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $ensId } }
          { type: { _eq: $typeDemande } }
        ]
      }
      limit: 1
    ) {
      id
      uid
      ensId: ens_id
      typeDemande: type
      heures
    }
  }
`);

export const UPSERT_DEMANDE = graphql(/* GraphQL */ `
  mutation UpsertDemande(
    $uid: String!
    $ensId: Int!
    $typeDemande: String!
    $heures: Float!
  ) {
    demande: insert_demande_one(
      object: { uid: $uid, ens_id: $ensId, type: $typeDemande, heures: $heures }
      on_conflict: {
        constraint: demande_uid_ens_id_type_key
        update_columns: [heures]
      }
    ) {
      id
    }
  }
`);

export const DELETE_DEMANDE = graphql(/* GraphQL */ `
  mutation DeleteDemande($ensId: Int!, $uid: String!, $typeDemande: String!) {
    demandes: delete_demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $ensId } }
          { type: { _eq: $typeDemande } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }
`);

export const DELETE_DEMANDE_BY_ID = graphql(/* GraphQL */ `
  mutation DeleteDemandeById($id: Int!) {
    demande: delete_demande_by_pk(id: $id) {
      id
    }
  }
`);

export const DUMMY_MUTATION = graphql(/* GraphQL */ `
  mutation DummyMutation {
    demandes: insert_demande(objects: []) {
      returning {
        id
      }
    }
  }
`);
