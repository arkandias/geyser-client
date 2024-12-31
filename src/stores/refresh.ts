import { useMutation } from "@urql/vue";
import { readonly } from "vue";

import { graphql } from "@/gql";
import { DummyMutationDocument } from "@/gql/graphql.ts";

graphql(`
  mutation DummyMutation {
    requests: insert_demande(objects: []) {
      returning {
        id
      }
    }
  }
`);

export const useRefresh = () => {
  // this is an ugly hack to invalidate cache (using urql's Document Caching):
  // we use a dummy mutation and add all the typenames we want to invalidate
  const dummyMutation = useMutation(DummyMutationDocument);
  const refresh = async (): Promise<void> => {
    await dummyMutation.executeMutation(
      {},
      {
        additionalTypenames: [
          "demande",
          "message",
          "modification_service",
          "priorite",
          "service",
        ],
      },
    );
  };
  return readonly({ refresh });
};
