/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { QTableProps } from "quasar";
import type { MaybeRefOrGetter } from "vue";

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type ColumnBase = ArrayElement<NonNullable<QTableProps["columns"]>> & {
  tooltip?: string;
  visible: MaybeRefOrGetter<boolean>;
  searchable: boolean;
  abbreviable: boolean;
};

export type ColumnAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => { long: string; short: string | null };
};

export type ColumnNonAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => unknown;
};

export type Column<T> = ColumnAbbreviable<T> | ColumnNonAbbreviable<T>;

export const isAbbreviable = <T>(col: Column<T>): col is ColumnAbbreviable<T> =>
  col.abbreviable;
