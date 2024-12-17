import { graphql } from "@/gql";

export const GET_ANNEES = graphql(/* GraphQL */ `
  query GetAnnees {
    annees: annee(order_by: { value: desc }) {
      value
      enCours: en_cours
      visible
    }
  }
`);

export const UPDATE_ANNEE_EN_COURS = graphql(/* GraphQL */ `
  mutation UpdateAnneeEnCours($value: Int!) {
    annees: update_annee(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      returning {
        value
      }
    }
    enCours: update_annee_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }
`);
