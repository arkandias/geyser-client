import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Archive on enseignement {
    year: annee
    courseId: id
    requests: demandes(
      where: { type: { _eq: "attribution" } }
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      ...RequestDetails
    }
  }

  fragment NestedArchives on enseignement {
    ...Archive
    parent {
      ...Archive
      parent {
        ...Archive
      }
    }
  }
`);
