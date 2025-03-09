import { type I18nOptions, createI18n } from "vue-i18n";

import { DEFAULT_LOCALE } from "@/config/constants.ts";
import type { AvailableLocale } from "@/config/types/locales.ts";
import frFR from "@/locales/fr";

const numberFormat = {
  decimal: {
    style: "decimal",
    maximumFractionDigits: 2,
  },
  decimalFixed: {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  },
} as const;

export type CustomI18nOptions = I18nOptions & {
  message: typeof frFR;
  number: typeof numberFormat;
};

export const i18n = createI18n<CustomI18nOptions, AvailableLocale>({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    "fr-FR": frFR,
  },
  numberFormats: {
    "fr-FR": numberFormat,
  },
  warnHtmlMessage: false,
});
