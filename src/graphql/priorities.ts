import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Priority on priorite {
    id
    teacher: intervenant {
      ...Profile
    }
    courseId: ens_id
    seniority: anciennete
    isPriority: prioritaire
  }
`);
