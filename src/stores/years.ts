import { useMutation } from "@urql/vue";
import { type ComputedRef, type Ref, computed, readonly, ref } from "vue";

import { UPDATE_CURRENT_YEAR } from "@/graphql/years.ts";

export const years: Ref<number[]> = ref([]);
export const current: Ref<number | null> = ref(null);
export const selected: Ref<number | null> = ref(null);

const active: ComputedRef<number | null> = computed(() =>
  selected.value !== null && years.value.includes(selected.value)
    ? selected.value
    : current.value,
);
const isCurrentActive: ComputedRef<boolean> = computed(
  () => active.value === current.value,
);

const select = (year: number | null): void => {
  if (year !== null) {
    selected.value = year;
  }
};

export const useYears = () => {
  const update = useMutation(UPDATE_CURRENT_YEAR);
  const setCurrent = async (year: number | null): Promise<void> => {
    if (year === null) {
      return;
    }
    await update.executeMutation({
      value: year,
    });
  };
  return {
    years: readonly(years),
    current: readonly(current),
    selected: readonly(selected),
    active,
    isCurrentActive,
    setCurrent,
    select,
  };
};
