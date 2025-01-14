import { useMutation } from "@urql/vue";

import { graphql } from "@/gql";
import { DummyMutationDocument } from "@/gql/graphql.ts";

graphql(`
  mutation DummyMutation {
    requests: insertRequest(objects: []) {
      returning {
        id
      }
    }
  }
`);

export const useRefreshData = () => {
  // this is an ugly hack to invalidate cache (using urql's Document Caching):
  // we use a dummy mutation and add all the typenames we want to invalidate
  const dummyMutation = useMutation(DummyMutationDocument);
  const refreshData = async (): Promise<void> => {
    await dummyMutation.executeMutation(
      {},
      {
        additionalTypenames: [
          "Request",
          "ServiceModificaton",
          "Priority",
          "Service",
        ],
      },
    );
  };
  return { refreshData };
};
