import type { Scalar, SimpleObject } from "@/types/csv-data.ts";

export const getField = <T extends Record<string, unknown>>(
  row: T,
  field: string | ((row: T) => unknown),
) => {
  if (typeof field === "string") {
    return row[field];
  }
  return field(row);
};

export const normalizeForSearch = (str: string) =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const toSlug = (str: string) =>
  str
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9_\s-]/g, "") // Remove non-alphanumeric chars (except underscore)
    .replace(/[\s-]+/g, "_") // Replace spaces and hyphens with underscore
    .trim(); // Remove leading/trailing spaces

export const uniqueValue = <T extends { value: unknown }>(
  element: T,
  index: number,
  array: T[],
) => array.findIndex((el) => el.value === element.value) === index;

const compareStrings = (a: string, b: string) => (a < b ? -1 : b < a ? 1 : 0);

export const compare =
  <K extends string, T extends Record<K, string>>(name: K) =>
  (a: T, b: T) =>
    compareStrings(a[name].toLowerCase(), b[name].toLowerCase());

export const compareAbbr = <T extends { short: string | null; long: string }>(
  a: T,
  b: T,
) =>
  compareStrings(
    (a.short ?? b.long).toLowerCase(),
    (b.short ?? b.long).toLowerCase(),
  );

export function getValueFromLabel(
  label: string,
  options: { value: string; label: string }[],
  create: true,
): string;
export function getValueFromLabel(
  label: string | null,
  options: { value: string; label: string }[],
  create: false,
): string | null;
export function getValueFromLabel(
  label: string | null,
  options: { value: string; label: string }[],
  create: boolean,
): typeof create extends true ? string : string | null {
  if (label === null) {
    return null;
  }

  const value = options.find((opt) => opt.label === label)?.value ?? null;
  if (value !== null || !create) {
    return value;
  }

  let slug = toSlug(label) || "0"; // do not allow empty value
  if (options.find((opt) => opt.value === slug)) {
    return slug;
  }

  let counter = 1;
  while (options.find((opt) => opt.value === slug)) {
    counter += 1;
    slug = slug + counter.toString();
  }
  return slug;
}
const flattenSimpleObjectEntries = <T extends Scalar>(
  fields: string | SimpleObject<string>,
  obj: T | SimpleObject<T> | undefined,
): [string, T | SimpleObject<T> | undefined][] =>
  typeof fields === "string"
    ? [[fields, obj]]
    : Object.entries(fields).flatMap(([key, value]) =>
        flattenSimpleObjectEntries<T>(
          value,
          typeof obj === "object" && obj !== null ? obj[key] : undefined,
        ),
      );

export const flattenSimpleObject = <T extends Scalar>(
  fields: SimpleObject<string>,
  obj: SimpleObject<T>,
) => Object.fromEntries(flattenSimpleObjectEntries<T>(fields, obj));
