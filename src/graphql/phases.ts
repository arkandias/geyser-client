import { graphql } from "@/gql";

export const GET_PHASES = graphql(/* GraphQL */ `
  query GetPhases {
    phases: phase(order_by: { value: desc }) {
      value
      enCours: en_cours
    }
  }
`);

export const UPDATE_PHASE_EN_COURS = graphql(/* GraphQL */ `
  mutation UpdatePhaseEnCours($value: String!) {
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
