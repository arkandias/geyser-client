import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment RequestDetails on demande {
    id
    teacher: intervenant {
      ...Profile
    }
    course: enseignement {
      id
      hoursPerGroup: heures_corrigees
    }
    type
    hours: heures
    weightedHours: heures_eqtd
    isPriority: prioritaire
  }

  fragment RequestsTotalHours on demande_aggregate {
    aggregate {
      sum {
        hours: heures
      }
    }
  }

  fragment RequestsTotalWeightedHours on demande_aggregate {
    aggregate {
      sum {
        weightedHours: heures_eqtd
      }
    }
  }
`);

export const GET_REQUEST = graphql(/* GraphQL */ `
  query GetRequest($uid: String!, $courseId: Int!, $requestType: String!) {
    requests: demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
      limit: 1 # unique
    ) {
      ...RequestDetails
    }
    course: enseignement_by_pk(id: $courseId) {
      year: annee
      yearByYear: anneeByAnnee {
        services(
          where: { uid: { _eq: $uid } }
          limit: 1 # unique
        ) {
          id
        }
      }
    }
  }
`);

export const UPSERT_REQUEST = graphql(/* GraphQL */ `
  mutation UpsertRequest(
    $uid: String!
    $courseId: Int!
    $requestType: String!
    $hours: Float!
  ) {
    request: insert_demande_one(
      object: {
        uid: $uid
        ens_id: $courseId
        type: $requestType
        heures: $hours
      }
      on_conflict: {
        constraint: demande_uid_ens_id_type_key
        update_columns: [heures]
      }
    ) {
      id
    }
  }
`);

export const DELETE_REQUEST = graphql(/* GraphQL */ `
  mutation DeleteRequest(
    $uid: String!
    $courseId: Int!
    $requestType: String!
  ) {
    requests: delete_demande(
      where: {
        _and: [
          { uid: { _eq: $uid } }
          { ens_id: { _eq: $courseId } }
          { type: { _eq: $requestType } }
        ]
      }
    ) {
      returning {
        id
      }
    }
  }
`);

export const DELETE_REQUEST_BY_ID = graphql(/* GraphQL */ `
  mutation DeleteRequestById($id: Int!) {
    request: delete_demande_by_pk(id: $id) {
      id
    }
  }
`);

export const DUMMY_MUTATION = graphql(/* GraphQL */ `
  mutation DummyMutation {
    requests: insert_demande(objects: []) {
      returning {
        id
      }
    }
  }
`);
