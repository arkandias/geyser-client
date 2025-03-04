import type {
  NullableParsedRow,
  ParsedRow,
  RowDescriptor,
} from "@/types/admin-data.ts";

export const inputToNumber = (input: string | number | null) =>
  typeof input === "string" ? (input === "" ? null : Number(input)) : input;

export const nullRow = <T extends RowDescriptor>(
  rowDescriptor: T,
): NullableParsedRow<T> =>
  Object.fromEntries(
    Object.keys(rowDescriptor).map((key) => [key, null]),
  ) as NullableParsedRow<T>;

export const initForm = <T extends RowDescriptor>(
  rowDescriptor: T,
  selectedRows?: ParsedRow<T>[],
): NullableParsedRow<T> =>
  selectedRows?.length === 1
    ? {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        ...selectedRows[0]!,
      }
    : nullRow(rowDescriptor);
