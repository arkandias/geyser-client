import { useClientHandle } from "@urql/vue";
import { computed, ref } from "vue";

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
  const appSetting = ref("");

  void useClientHandle()
    .client.query(
      GetAppSettingDocument,
      { key },
      { requestPolicy: "network-only" },
    )
    .toPromise()
    .then((result) => {
      appSetting.value = result.data?.appSetting?.value ?? "";
    });

  if (options.sanitize) {
    return computed(() => sanitize(appSetting.value));
  }
  return appSetting;
};
