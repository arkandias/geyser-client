/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { LocationQuery } from "vue-router";

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

export const getValue = (
  query: LocationQuery,
  param: string,
): string | null => {
  const value = query[param];
  return typeof value === "string" ? value : (value?.[0] ?? null);
};

export const getNumber = (
  query: LocationQuery,
  param: string,
): number | null => {
  const value = getValue(query, param);
  if (value === null) {
    return value;
  }
  const num = Number(value);
  return isNaN(num) ? null : num;
};
