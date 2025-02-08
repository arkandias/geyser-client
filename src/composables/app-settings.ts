import { useQuery } from "@urql/vue";

import { graphql } from "@/gql";
import { GetAppSettingDocument } from "@/gql/graphql.ts";

graphql(`
  query GetAppSetting($key: String!) {
    appSetting: appSettingByPk(key: $key) {
      value
    }
  }
`);

export const useAppSettings = async (key: string) =>
  await useQuery({
    query: GetAppSettingDocument,
    variables: { key },
  }).then((result) => result.data.value?.appSetting?.value ?? null);
