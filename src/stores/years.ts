import { computed, readonly, ref } from "vue";

import { useQueryParam } from "@/composables/query-param.ts";

const years = ref<number[]>([]);
const currentYear = ref<number | null>(null);

const setYears = (values: number[]) => {
  years.value = values;
};
const setCurrentYear = (year: number | null) => {
  currentYear.value = year;
};

export const useYearsStore = () => {
  const { getValue: selectedYear, setValue: selectYear } = useQueryParam(
    "year",
    true,
  );
  const activeYear = computed<number | null>(() =>
    selectedYear.value !== null && years.value.includes(selectedYear.value)
      ? selectedYear.value
      : currentYear.value,
  );
  const isCurrentYearActive = computed(
    () => activeYear.value !== null && activeYear.value === currentYear.value,
  );

  return {
    years: readonly(years),
    currentYear: readonly(currentYear),
    selectedYear,
    activeYear,
    isCurrentYearActive,
    setYears,
    setCurrentYear,
    selectYear,
  };
};
