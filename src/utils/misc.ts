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

export const uniqueValue =
  <K extends string, T extends Record<K, unknown>>(value: K) =>
  (element: T, index: number, array: T[]) =>
    array.findIndex((el) => el[value] === element[value]) === index;

const compareStrings = (a: string, b: string) => (a < b ? -1 : b < a ? 1 : 0);

export const compare =
  <K extends string, T extends Record<K, string>>(name: K) =>
  (a: T, b: T) =>
    compareStrings(a[name].toLowerCase(), b[name].toLowerCase());

export const capitalize = <T extends string>(str: T): Capitalize<T> =>
  (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;

export const inputToNumber = (input: string | number | null) =>
  typeof input === "string" ? (input === "" ? null : Number(input)) : input;

export const booleanOptions = (trueLabel: string, falseLabel: string) => [
  { value: true, label: trueLabel },
  { value: false, label: falseLabel },
];
