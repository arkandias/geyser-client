<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";

import { GET_TEACHERS } from "@/graphql/teachers.ts";
import { formatUser, normalizeForSearch } from "@/helpers/format.ts";
import { useYears } from "@/stores/years.ts";
import type { OptionSearch } from "@/types/common.ts";

const serviceId = defineModel<number | null>({ required: true });

const { current: currentYear } = useYears();

const queryServices = useQuery({
  query: GET_TEACHERS,
  variables: {
    year: computed(() => currentYear.value ?? 0),
  },
});

const optionsInit: ComputedRef<OptionSearch<number>[]> = computed(() =>
  (queryServices.data.value?.services ?? []).map((service) => ({
    value: service.id,
    label: formatUser(service.intervenant),
    search: normalizeForSearch(formatUser(service.intervenant)),
  })),
);

const options: Ref<OptionSearch<number>[]> = ref([]);

watch(
  optionsInit,
  (value) => {
    options.value = value;
  },
  { immediate: true },
);

const filter = (val: string, update: (x: () => void) => void) => {
  update(() => {
    options.value = optionsInit.value.filter((intervenant) =>
      intervenant.search.includes(normalizeForSearch(val)),
    );
  });
};
</script>

<template>
  <QSelect
    v-model="serviceId"
    :options
    color="primary"
    label="Intervenant"
    emit-value
    map-options
    use-input
    fill-input
    hide-selected
    input-debounce="0"
    hide-dropdown-icon
    @filter="filter"
  />
</template>

<style scoped lang="scss"></style>
