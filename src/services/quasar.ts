import { LocalStorage, Notify, type QuasarPluginOptions } from "quasar";
import quasarIconSet from "quasar/icon-set/material-symbols-sharp";
import quasarLang from "quasar/lang/fr";

// todo: sync quasar lang with i18n

export const quasarOptions: Partial<QuasarPluginOptions> = {
  plugins: { LocalStorage, Notify },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    dark: "auto",
  },
};
