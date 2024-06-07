/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { Notify, QuasarPluginOptions } from "quasar";
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
