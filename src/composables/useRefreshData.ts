import { useMutation } from "villus";

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
  const refreshData = async (): Promise<void> => {
    await dummyMutation.execute({});
  };
  return { refreshData };
};
