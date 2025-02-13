import { createI18n } from "vue-i18n";

import enUS from "@/locales/en-US.ts";
import frFR from "@/locales/fr-FR.ts";

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

export const LOCALE_LABELS: Record<AvailableLocale, string> = {
  "fr-FR": "Français",
  "en-US": "English",
} as const;

const numberSchema = {
  decimal: {
    style: "decimal",
    maximumFractionDigits: 2,
  },
} as const;

// master-like schema for messages resources
// todo: replace with en-US
// todo: fix strict typing
type MessageSchema = typeof frFR;
type NumberSchema = typeof numberSchema;

export type I18nOptions = {
  message: MessageSchema;
  number: NumberSchema;
};

export const i18n = createI18n<I18nOptions, "fr-FR" | "en-US">({
  legacy: false,
  locale: "fr-FR",
  fallbackLocale: "fr-FR",
  messages: {
    "fr-FR": frFR,
    "en-US": enUS,
  },
  numberFormats: {
    "fr-FR": numberSchema,
    "en-US": numberSchema,
  },
});
