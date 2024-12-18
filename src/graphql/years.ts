import { graphql } from "@/gql";

export const GET_YEARS = graphql(/* GraphQL */ `
  query GetYears {
    years: annee(order_by: { value: desc }) {
      value
      current: en_cours
      visible
    }
  }
`);

export const UPDATE_CURRENT_YEAR = graphql(/* GraphQL */ `
  mutation UpdateCurrentYear($value: Int!) {
    years: update_annee(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      returning {
        value
      }
    }
    current: update_annee_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }
`);
