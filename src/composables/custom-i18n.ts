import { type UseI18nOptions, useI18n } from "vue-i18n";

import type { AvailableLocale, CustomI18nOptions } from "@/services/i18n.ts";

export const useCustomI18n = (
  options?: UseI18nOptions<CustomI18nOptions, AvailableLocale>,
) =>
  useI18n<CustomI18nOptions, AvailableLocale>({
    useScope: "global",
    ...options,
  });
