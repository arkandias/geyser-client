import type { QTableProps } from "quasar";
import type { MaybeRefOrGetter } from "vue";

import type { ArrayElement } from "@/types/misc.ts";

type ColumnBase = ArrayElement<NonNullable<QTableProps["columns"]>> & {
  tooltip?: string;
  visible: MaybeRefOrGetter<boolean>;
  searchable: boolean;
};

export type ColumnAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => { long: string; short: string | null };
  abbreviable: true;
};

export type ColumnNonAbbreviable<T> = Omit<ColumnBase, "field"> & {
  field: (row: T) => unknown;
  abbreviable: false;
};

export type Column<T> = ColumnAbbreviable<T> | ColumnNonAbbreviable<T>;

export const isAbbreviable = <T>(col: Column<T>): col is ColumnAbbreviable<T> =>
  col.abbreviable;
