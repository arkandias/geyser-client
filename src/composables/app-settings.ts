import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { graphql } from "@/gql";
import { GetAppSettingDocument } from "@/gql/graphql.ts";

graphql(`
  query GetAppSetting($key: String!) {
    appSetting: appSettingByPk(key: $key) {
      value
    }
  }
`);

export const useAppSettings = (key: string) =>
  computed(
    () =>
      useQuery({
        query: GetAppSettingDocument,
        variables: { key },
      }).data.value?.appSetting?.value ?? null,
  );
