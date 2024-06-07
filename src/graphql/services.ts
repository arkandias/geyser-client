/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const GET_SERVICE = graphql(/* GraphQL */ `
  query GetService($annee: Int!, $uid: String!) {
    intervenant: ec_intervenant_by_pk(uid: $uid) {
      uid
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
            { enseignement: { annee: { _eq: $annee } } }
            { type: { _eq: "attribution" } }
          ]
        }
      ) {
        ...TotalHeuresEQTD
      }
      totalPrincipales: demandes_aggregate(
        where: {
          _and: [
            { enseignement: { annee: { _eq: $annee } } }
            { type: { _eq: "principale" } }
          ]
        }
      ) {
        ...TotalHeuresEQTD
      }
      totalSecondaires: demandes_aggregate(
        where: {
          _and: [
            { enseignement: { annee: { _eq: $annee } } }
            { type: { _eq: "secondaire" } }
          ]
        }
      ) {
        ...TotalHeuresEQTD
      }
      messages(where: { annee: { _eq: $annee } }) {
        id
        typeMessage: type
        contenu
      }
    }
  }
`);
