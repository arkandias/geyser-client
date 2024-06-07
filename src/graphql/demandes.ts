/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Demande on ec_demande {
    id
    intervenant {
      ...Intervenant
    }
    enseignement {
      id
      heures
    }
    typeDemande: type
    heures
    prioritaire
  }

  fragment TotalHeures on ec_demande_aggregate {
    aggregate {
      sum {
        heures
      }
    }
  }

  fragment TotalHeuresEQTD on ec_demande_aggregate {
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
    demande: ec_demande(
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
    insert_ec_demande_one(
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
    delete_ec_demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $ensId } }
          { type: { _eq: $typeDemande } }
        ]
      }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`);

export const DELETE_DEMANDE_BY_ID = graphql(/* GraphQL */ `
  mutation DeleteDemandeById($id: Int!) {
    delete_ec_demande_by_pk(id: $id) {
      id
    }
  }
`);

export const DUMMY_MUTATION = graphql(/* GraphQL */ `
  mutation DummyMutation {
    insert_ec_demande(objects: []) {
      affected_rows
    }
  }
`);
