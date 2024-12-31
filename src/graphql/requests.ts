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
