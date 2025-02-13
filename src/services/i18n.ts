import { createI18n } from "vue-i18n";

import frFR from "@/locales/fr-FR.json";

export const AVAILABLE_LOCALES = ["fr-FR", "en-US"] as const;
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

export const LOCALE_LABELS: Record<AvailableLocale, string> = {
  "fr-FR": "Français",
  "en-US": "English",
} as const;

// master-like schema for messages resources
// todo: replace with en-US
// todo: fix strict typing
type MessageSchema = typeof frFR;
type NumberSchema = {
  decimal: {
    style: "decimal";
    maximumFractionDigits: number;
  };
};

export type I18nOptions = {
  message: MessageSchema;
  number: NumberSchema;
};

export const i18n = createI18n<I18nOptions, "fr-FR">({
  legacy: false,
  locale: "fr-FR",
  fallbackLocale: "fr-FR",
  messages: {
    "fr-FR": frFR,
  },
  numberFormats: {
    "fr-FR": {
      decimal: {
        style: "decimal",
        maximumFractionDigits: 2,
      },
    },
  },
});
