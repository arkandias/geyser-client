import { i18n } from "@/services/i18n.ts";
import type { NullableParsedRow, RowDescriptor } from "@/types/admin-data.ts";

const { t } = i18n.global;

export const inputToNumber = (input: string | number | null) =>
  typeof input === "string" ? (input === "" ? null : Number(input)) : input;

export const nullRow = <T extends RowDescriptor>(
  rowDescriptor: T,
): NullableParsedRow<T> =>
  Object.fromEntries(
    Object.keys(rowDescriptor).map((key) => [key, null]),
  ) as NullableParsedRow<T>;

export const yesNoOptions = [
  { value: true, label: t("yes") },
  { value: false, label: t("no") },
];
