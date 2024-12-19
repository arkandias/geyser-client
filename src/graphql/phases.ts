import { graphql } from "@/gql";

export const GET_CURRENT_PHASE = graphql(/* GraphQL */ `
  query GetCurrentPhase {
    # limit: 1 car unique
    phases: phase(where: { en_cours: { _eq: true } }, limit: 1) {
      value
    }
  }
`);

export const SET_CURRENT_PHASE = graphql(/* GraphQL */ `
  mutation SetCurrentPhase($value: String!) {
    phases: update_phase(
      where: { value: { _neq: $value } }
      _set: { en_cours: null }
    ) {
      returning {
        value
      }
    }
    enCours: update_phase_by_pk(
      pk_columns: { value: $value }
      _set: { en_cours: true }
    ) {
      value
    }
  }
`);
