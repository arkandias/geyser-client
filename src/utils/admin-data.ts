import type { NullableParsedRow, RowDescriptor } from "@/types/admin-data.ts";

export const inputToNumber = (input: string | number | null) =>
  typeof input === "string" ? (input === "" ? null : Number(input)) : input;

export const nullRow = <T extends RowDescriptor>(
  rowDescriptor: T,
): NullableParsedRow<T> =>
  Object.fromEntries(
    Object.keys(rowDescriptor).map((key) => [key, null]),
  ) as NullableParsedRow<T>;
