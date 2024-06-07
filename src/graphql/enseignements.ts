/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Responsable on ec_responsable {
    id
    intervenant {
      ...Intervenant
    }
    commentaire
  }

  fragment Resume on ec_enseignement {
    ensId: id
    nom
    responsables(order_by: { intervenant: { nom: asc } }) {
      ...Responsable
    }
    mention {
      id
      nom
      responsables(order_by: { intervenant: { nom: asc } }) {
        ...Responsable
      }
      cursus {
        id
        nom
      }
    }
    parcours {
      id
      nom
      responsables(order_by: { intervenant: { nom: asc } }) {
        ...Responsable
      }
    }
    semestre
    description
  }

  fragment Archive on ec_enseignement {
    ensId: id
    annee
    demandes(where: { type: { _eq: "attribution" } }) {
      ...Demande
    }
  }

  fragment NestedArchives on ec_enseignement {
    ...Archive
    parent {
      ...Archive
      parent {
        ...Archive
      }
    }
  }
`);

export const GET_ENSEIGNEMENTS_TABLE_ROWS = graphql(/* GraphQL */ `
  query GetEnseignementsTableRows($annee: Int!) {
    enseignements: ec_enseignement(
      where: {
        _and: [{ annee: { _eq: $annee } }, { groupes_corriges: { _gt: 0 } }]
      }
      order_by: [
        { mention: { cursus: { nom: asc } } }
        { mention: { nom: asc } }
        { parcours: { nom: asc } }
        { semestre: asc }
        { nom: asc }
        { type: asc }
      ]
    ) {
      id
      mention {
        id
        nom
        nomCourt: nom_court
        cursus {
          id
          nom
          nomCourt: nom_court
        }
      }
      parcours {
        id
        nom
        nomCourt: nom_court
      }
      nom
      nomCourt: nom_court
      typeEnseignement: type_enseignement {
        label
        labelCourt: label_court
      }
      semestre
      heures
      groupes: groupes_corriges
      totalAttributions: demandes_aggregate(
        where: { type: { _eq: "attribution" } }
      ) {
        aggregate {
          sum {
            heures
          }
        }
      }
      totalPrincipales: demandes_aggregate(
        where: { type: { _eq: "principale" } }
      ) {
        ...TotalHeures
      }
      totalSecondaires: demandes_aggregate(
        where: { type: { _eq: "secondaire" } }
      ) {
        ...TotalHeures
      }
      totalPrioritaire: demandes_aggregate(
        where: {
          _and: [
            { type: { _eq: "principale" } }
            { prioritaire: { _eq: true } }
          ]
        }
      ) {
        ...TotalHeures
      }
      visible
    }
  }
`);

export const GET_ENSEIGNEMENT_DETAILS = graphql(/* GraphQL */ `
  query GetEnseignementDetails($ensId: Int!) {
    enseignement: ec_enseignement_by_pk(id: $ensId) {
      ...Resume
      demandes {
        ...Demande
      }
      priorites {
        ...Priorite
      }
      parent {
        ...NestedArchives
      }
    }
  }
`);

export const UPDATE_DESCRIPTION = graphql(/* GraphQL */ `
  mutation UpdateDescription($id: Int!, $description: String) {
    update_ec_enseignement_by_pk(
      pk_columns: { id: $id }
      _set: { description: $description }
    ) {
      id
    }
  }
`);
