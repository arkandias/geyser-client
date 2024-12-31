import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

export const selectedYear: Ref<number | null> = ref(null);

const years: Ref<number[]> = ref([]);
const currentYear: Ref<number | null> = ref(null);

const activeYear: ComputedRef<number | null> = computed(() =>
  selectedYear.value !== null && years.value.includes(selectedYear.value)
    ? selectedYear.value
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
const selectYear = (year: number | null): void => {
  selectedYear.value = year ?? currentYear.value;
};

export const useYears = () =>
  readonly({
    years,
    currentYear,
    selectedYear,
    activeYear,
    isCurrentYearActive,
    setYears,
    selectYear,
    setCurrentYear,
  });
