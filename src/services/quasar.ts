import {
  LocalStorage,
  Notify,
  type QuasarLanguage,
  type QuasarPluginOptions,
} from "quasar";
import quasarIconSet from "quasar/icon-set/material-symbols-sharp";
import quasarLangFr from "quasar/lang/fr";

import type { AvailableLocale } from "@/services/i18n.ts";

export const QUASAR_LANGS: Record<AvailableLocale, QuasarLanguage> = {
  "fr-FR": quasarLangFr,
} as const;

export const quasarOptions: Partial<QuasarPluginOptions> = {
  plugins: { LocalStorage, Notify },
  lang: quasarLangFr,
  iconSet: quasarIconSet,
  config: {
    dark: "auto",
  },
};
