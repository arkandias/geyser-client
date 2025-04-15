import {
  type ComposerNumberFormatting,
  type ComposerTranslation,
  type UseI18nOptions,
  useI18n,
} from "vue-i18n";

import type { AvailableLocale } from "@/config/types/locales.ts";
import type { CustomI18nOptions } from "@/services/i18n.ts";

export type CustomComposerTranslation = ComposerTranslation<
  CustomI18nOptions["message"],
  AvailableLocale
>;

export type CustomComposerNumberFormatting = ComposerNumberFormatting<
  CustomI18nOptions["number"],
  AvailableLocale
>;

export const useCustomI18n = (
  options?: UseI18nOptions<CustomI18nOptions, AvailableLocale>,
) =>
  useI18n<CustomI18nOptions, AvailableLocale>({
    useScope: "global",
    ...options,
  });
