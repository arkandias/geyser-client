import { Notify, type QuasarPluginOptions } from "quasar";
import quasarIconSet from "quasar/icon-set/material-symbols-sharp";
import quasarLang from "quasar/lang/fr";

export const quasarOptions: Partial<QuasarPluginOptions> = {
  plugins: { Notify },
  lang: quasarLang,
  iconSet: quasarIconSet,
  config: {
    dark: "auto",
  },
};
