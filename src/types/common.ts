/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export type Nullable<T> = T | null;

export type Option<T> = {
  value: T;
  label: string;
};

export type OptionSearch<T> = Option<T> & {
  search: string;
};
