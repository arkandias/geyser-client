import { type I18nOptions, createI18n } from "vue-i18n";

import { DEFAULT_LOCALE } from "@/config/constants.ts";
import type { AvailableLocale } from "@/config/types/locales.ts";
import enUS from "@/locales/en";
import frFR from "@/locales/fr";

type LocaleStructure<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends object
      ? LocaleStructure<T[K]>
      : never;
};

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
  message: LocaleStructure<typeof frFR>;
  number: typeof numberFormat;
};

export const i18n = createI18n<CustomI18nOptions, AvailableLocale>({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    "fr-FR": frFR,
    "en-US": enUS,
  },
  numberFormats: {
    "fr-FR": numberFormat,
    "en-US": numberFormat,
  },
  warnHtmlMessage: false,
});
