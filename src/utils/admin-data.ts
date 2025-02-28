import type { ParsedRow, RowDescriptor } from "@/types/admin-data.ts";

export const initRow = <T extends RowDescriptor>(
  rowDescriptor: T,
): ParsedRow<T> =>
  Object.fromEntries(
    Object.entries(rowDescriptor).map(([key, { type, nullable }]) => [
      key,
      nullable ? null : type === "string" ? "" : type === "number" ? 0 : false,
    ]),
  ) as ParsedRow<T>;

export const initForm = <T extends RowDescriptor>(
  rowDescriptor: T,
  selectedRows?: ParsedRow<T>[],
): ParsedRow<T> =>
  selectedRows?.length === 1
    ? {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...selectedRows[0]!,
      }
    : initRow(rowDescriptor);
