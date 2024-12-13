/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { LocationQuery } from "vue-router";

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
  const num = Number(getValue(query, param));
  return Number.isFinite(num) ? num : null;
};
