import type { ParsedRow, RowDescriptor } from "@/types/admin-data.ts";

export const nullRow = <T extends RowDescriptor>(
  rowDescriptor: T,
): ParsedRow<T> =>
  Object.fromEntries(
    Object.keys(rowDescriptor).map((key) => [key, null]),
  ) as ParsedRow<T>;

export const initForm = <T extends RowDescriptor>(
  rowDescriptor: T,
  selectedRows?: ParsedRow<T>[],
): ParsedRow<T> =>
  selectedRows?.[0]
    ? {
        ...selectedRows[0],
      }
    : nullRow(rowDescriptor);

export const inputToNumber = (input: string | number | null) =>
  typeof input === "string" ? (input === "" ? null : Number(input)) : input;
