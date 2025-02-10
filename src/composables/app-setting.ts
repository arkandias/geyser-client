import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { graphql } from "@/gql";
import { GetAppSettingDocument } from "@/gql/graphql.ts";
import { sanitize } from "@/utils/sanitize.ts";

graphql(`
  query GetAppSetting($key: String!) {
    appSetting: appSettingByPk(key: $key) {
      value
    }
  }
`);

export const useAppSetting = (key: string, options = { sanitize: false }) => {
  const appSetting = computed(
    () =>
      useQuery({
        query: GetAppSettingDocument,
        variables: { key },
      }).data.value?.appSetting?.value ?? "",
  );
  if (options.sanitize) {
    return computed(() => sanitize(appSetting.value));
  }
  return appSetting;
};
