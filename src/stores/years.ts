import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

import { useQueryParam } from "@/composables/query-param.ts";

const { getValue: selectedYear, setValue: selectYear } = useQueryParam(
  "year",
  true,
);

const years: Ref<number[]> = ref([]);
const currentYear: Ref<number | null> = ref(null);
const activeYear: ComputedRef<number | null> = computed(() =>
  selectedYear !== null && years.value.includes(selectedYear)
    ? selectedYear
    : currentYear.value,
);
const isCurrentYearActive: ComputedRef<boolean> = computed(
  () => activeYear.value === currentYear.value,
);

const setYears = (values: number[]) => {
  years.value = values;
};
const setCurrentYear = (year: number | null) => {
  currentYear.value = year;
};

export const useYears = () =>
  readonly({
    years,
    currentYear,
    selectedYear,
    activeYear,
    isCurrentYearActive,
    setYears,
    setCurrentYear,
    selectYear,
  });
