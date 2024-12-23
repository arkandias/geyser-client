import type { LocationQuery, LocationQueryValueRaw, Router } from "vue-router";

export const getValue = (
  query: LocationQuery,
  param: string,
): string | null => {
  const value = query[param];
  return (Array.isArray(value) ? value[0] : value) ?? null;
};

export const getNumber = (
  query: LocationQuery,
  param: string,
): number | null => {
  const value = getValue(query, param);
  return value !== null ? Number(value) : null;
};

export const isQueryParam = (
  router: Router,
  param: string,
  value: LocationQueryValueRaw,
  isNumber = false,
) =>
  value ===
  (isNumber
    ? getNumber(router.currentRoute.value.query, param)
    : getValue(router.currentRoute.value.query, param));

export const setQueryParam = async (
  router: Router,
  param: string,
  value: LocationQueryValueRaw,
) => {
  await router.replace({
    query: {
      ...router.currentRoute.value.query,
      [param]: value,
    },
  });
};

export const toggleQueryParam = async (
  router: Router,
  param: string,
  newValue: LocationQueryValueRaw,
  isNumber = false,
): Promise<void> => {
  const currentValue = isNumber
    ? getNumber(router.currentRoute.value.query, param)
    : getValue(router.currentRoute.value.query, param);
  await setQueryParam(
    router,
    param,
    currentValue === newValue ? undefined : newValue,
  );
};
