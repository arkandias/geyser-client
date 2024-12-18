import { graphql } from "@/gql";

export const GET_SERVICES = graphql(/* GraphQL */ `
  query GetServices($year: Int!) {
    services: service(
      where: { _and: [{ annee: { _eq: $year } }] }
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      id
      intervenant {
        ...Profile
      }
    }
  }
`);

export const GET_SERVICES_TABLE_ROWS = graphql(/* GraphQL */ `
  query GetServicesTableRows($year: Int!, $where: service_bool_exp = {}) {
    services: service(
      where: { _and: [{ annee: { _eq: $year } }, $where] }
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
        ...Profile
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
