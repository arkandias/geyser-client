import { createI18n } from "vue-i18n";

import enUS from "@/locales/en-US.ts";
import frFR from "@/locales/fr-FR.ts";

const numberFormat = {
  decimal: {
    style: "decimal",
    maximumFractionDigits: 2,
  },
} as const;

export const AVAILABLE_LOCALES = ["fr-FR", "en-US"] as const;
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

export const isAvailableLocale = (
  locale: unknown,
): locale is AvailableLocale => {
  return (
    typeof locale === "string" &&
    AVAILABLE_LOCALES.includes(locale as AvailableLocale)
  );
};

export const DEFAULT_LOCALE: AvailableLocale = "fr-FR";

export const LOCALE_LABELS: Record<AvailableLocale, string> = {
  "fr-FR": "Français",
  "en-US": "English",
} as const;

export type I18nOptions = {
  message: typeof frFR;
  number: typeof numberFormat;
};

export const i18n = createI18n<I18nOptions, AvailableLocale>({
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
});
