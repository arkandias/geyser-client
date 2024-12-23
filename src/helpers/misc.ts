export const normalizeForSearch = (str: string): string =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const uniqueValue = <T extends { value: unknown }>(
  element: T,
  index: number,
  array: T[],
): boolean => array.findIndex((el) => el.value === element.value) === index;

const compareStrings = (a: string, b: string): number =>
  a < b ? -1 : b < a ? 1 : 0;

export const compare =
  <K extends string, T extends Record<K, string>>(name: K) =>
  (a: T, b: T): number =>
    compareStrings(a[name].toLowerCase(), b[name].toLowerCase());
