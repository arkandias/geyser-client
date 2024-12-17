/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

export const GET_SERVICES = graphql(/* GraphQL */ `
  query GetIntervenants($annee: Int!) {
    services: service(
      where: { _and: [{ annee: { _eq: $annee } }] }
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      id
      intervenant {
        ...Intervenant
      }
    }
  }
`);

export const GET_SERVICES_TABLE_ROWS = graphql(/* GraphQL */ `
  query GetIntervenantsTableRows($annee: Int!, $where: service_bool_exp = {}) {
    services: service(
      where: { _and: [{ annee: { _eq: $annee } }, $where] }
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      id
      heuresEQTD: heures_eqtd
      modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {
        id
        typeModification: type
        heuresEQTD: heures_eqtd
      }
      totalModifications: modifications_aggregate {
        aggregate {
          sum {
            heuresEQTD: heures_eqtd
          }
        }
      }
      intervenant {
        ...Intervenant
        visible
      }
      demandes(order_by: [{ type: asc }, { ens_id: asc }]) {
        id
        ensId: ens_id
        typeDemande: type
        heures
        heuresEQTD: heures_eqtd
      }
      totalAttributions: demandes_aggregate(
        where: { _and: [{ type: { _eq: "attribution" } }] }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      totalPrincipales: demandes_aggregate(
        where: { _and: [{ type: { _eq: "principale" } }] }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      totalSecondaires: demandes_aggregate(
        where: { _and: [{ type: { _eq: "secondaire" } }] }
      ) {
        ...TotalHeures
        ...TotalHeuresEQTD
      }
      # limit: 1 car unique
      messages(limit: 1) {
        id
        contenu
      }
    }
  }
`);
