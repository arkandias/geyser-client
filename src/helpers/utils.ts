/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export const uniqueValue = <V, T extends { value: V }>(
  element: T,
  index: number,
  array: Array<T>,
): boolean => array.findIndex((el) => el.value === element.value) === index;

export const compareOrder =
  (order: Record<string, number>) =>
  <T extends { value: keyof typeof order }>(a: T, b: T): number =>
    order[a.value] - order[b.value];

const compareStrings = (a: string, b: string): number =>
  a < b ? -1 : b < a ? 1 : 0;

export const compare =
  <K extends string, T extends Record<K, string>>(name: K) =>
  (a: T, b: T): number =>
    compareStrings(a[name].toLowerCase(), b[name].toLowerCase());

export const boolFromString = (s: string): boolean | null => {
  if (["true", "yes", "t", "y", "1"].includes(s.toLowerCase())) {
    return true;
  }
  if (["false", "no", "f", "n", "0"].includes(s.toLowerCase())) {
    return false;
  }
  return null;
};
