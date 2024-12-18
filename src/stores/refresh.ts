import { useMutation } from "@urql/vue";

import { DUMMY_MUTATION } from "@/graphql/demandes.ts";

export const useRefresh = () => {
  // this is an ugly hack to invalidate cache (using urql's Document Caching):
  // we use a dummy mutation and add all the typenames we want to invalidate
  const dummyMutation = useMutation(DUMMY_MUTATION);
  const refresh = async (): Promise<void> => {
    await dummyMutation.executeMutation(
      {},
      {
        additionalTypenames: [
          "demande",
          "message",
          "modification_service",
          "priorite",
        ],
      },
    );
  };
  return { refresh };
};
