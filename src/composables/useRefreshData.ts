import { useMutation } from "villus";
import { ref } from "vue";

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
  const dummyMutation = useMutation(DummyMutationDocument, {
    refetchTags: ["All"],
  });
  const isRefreshing = ref(false);

  const refreshData = async (): Promise<void> => {
    isRefreshing.value = true;
    await dummyMutation.execute({});
    isRefreshing.value = false;
  };

  return { isRefreshing, refreshData };
};
