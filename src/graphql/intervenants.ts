/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Intervenant on ec_intervenant {
    uid
    nom
    prenom
    alias
  }
`);

export const GET_INTERVENANT = graphql(/* GraphQL */ `
  query GetIntervenant($uid: String!) {
    intervenant: ec_intervenant_by_pk(uid: $uid) {
      ...Intervenant
    }
  }
`);

export const UPSERT_INTERVENANT = graphql(/* GraphQL */ `
  mutation UpsertIntervenant($uid: String!, $nom: String!, $prenom: String!) {
    intervenant: insert_ec_intervenant_one(
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

export const GET_INTERVENANTS = graphql(/* GraphQL */ `
  query GetIntervenants {
    intervenants: ec_intervenant(
      where: { actif: { _eq: true } }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...Intervenant
    }
  }
`);

export const GET_INTERVENANTS_TABLE_ROWS = graphql(/* GraphQL */ `
  query GetIntervenantsTableRows(
    $annee: Int!
    $condition: ec_intervenant_bool_exp!
  ) {
    intervenants: ec_intervenant(
      where: $condition
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      ...Intervenant
      demandes {
        id
        ensId: ens_id
        typeDemande: type
        heures
        heuresEQTD: heures_eqtd
      }
      # limit: 1 car unique
      services(where: { annee: { _eq: $annee } }, limit: 1) {
        id
        heuresEQTD: heures_eqtd
      }
      modifications: modifications_service(where: { annee: { _eq: $annee } }) {
        id
        typeModification: type
        heuresEQTD: heures_eqtd
      }
      totalModifications: modifications_service_aggregate(
        where: { annee: { _eq: $annee } }
      ) {
        aggregate {
          sum {
            heuresEQTD: heures_eqtd
          }
        }
      }
      totalAttributions: demandes_aggregate(
        where: {
          _and: [
            { type: { _eq: "attribution" } }
            { enseignement: { annee: { _eq: $annee } } }
          ]
        }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      totalPrincipales: demandes_aggregate(
        where: {
          _and: [
            { type: { _eq: "principale" } }
            { enseignement: { annee: { _eq: $annee } } }
          ]
        }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      totalSecondaires: demandes_aggregate(
        where: {
          _and: [
            { type: { _eq: "secondaire" } }
            { enseignement: { annee: { _eq: $annee } } }
          ]
        }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      messages(where: { annee: { _eq: $annee } }) {
        id
        typeMessage: type
        contenu
      }
      visible
    }
  }
`);
