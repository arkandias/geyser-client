/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { Notify } from "quasar";

export const defaultNotify = (message: string, caption?: string) => {
  Notify.create({
    message: message,
    caption: caption,
    position: "bottom-right",
    group: false,
  });
};

const defaultErrorCaption: string =
  "Essayez de recharcher la page ou contactez un administrateur";

export const errorNotify = (message: string, caption?: string) => {
  Notify.create({
    message: message,
    caption: caption ?? defaultErrorCaption,
    color: "negative",
    position: "bottom-right",
    group: false,
  });
};

export const successNotify = (message: string, caption?: string) => {
  Notify.create({
    message: message,
    caption: caption,
    color: "positive",
    position: "bottom-right",
    group: false,
  });
};
