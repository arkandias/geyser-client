import { type ComputedRef, computed } from "vue";
import {
  type LocationQueryValue,
  type LocationQueryValueRaw,
  type Router,
  useRouter,
} from "vue-router";

const toNumber = (value: LocationQueryValue): number | null =>
  value === null ? value : Number(value);

const getQueryParam = (router: Router, param: string): LocationQueryValue => {
  const value = router.currentRoute.value.query[param];
  return (Array.isArray(value) ? value[0] : value) ?? null;
};

const setQueryParam = async (
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

const toggleQueryParam = async (
  router: Router,
  param: string,
  newValue: LocationQueryValueRaw,
): Promise<void> => {
  const currentValue = getQueryParam(router, param);
  await setQueryParam(
    router,
    param,
    currentValue === newValue ? undefined : newValue,
  );
};

export const useQueryParam = <B extends boolean = false>(
  param: string,
  isNumber?: B,
) => {
  const router = useRouter();

  const getValue: ComputedRef<B extends true ? number | null : string | null> =
    computed(
      () =>
        (isNumber
          ? toNumber(getQueryParam(router, param))
          : getQueryParam(router, param)) as B extends true
          ? number | null
          : string | null,
    );

  const setValue = async (
    value?: B extends true ? number | null : string | null,
  ): Promise<void> => {
    await setQueryParam(router, param, value);
  };

  const toggleValue = async (
    newValue?: B extends true ? number | null : string | null,
  ): Promise<void> => {
    await toggleQueryParam(router, param, newValue);
  };

  return { getValue, setValue, toggleValue };
};
