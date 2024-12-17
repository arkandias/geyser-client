<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import type { ComputedRef, Ref } from "vue";
import { computed, ref, watch } from "vue";

import { GET_SERVICES } from "@/graphql/services.ts";
import { formatIntervenant, normalizeForSearch } from "@/helpers/format.ts";
import type { OptionSearch } from "@/types/common.ts";

const serviceId = defineModel<number | null>({ required: true });

const queryServices = useQuery({
  query: GET_SERVICES,
  variables: {},
});

const optionsInit: ComputedRef<OptionSearch<number>[]> = computed(() =>
  (queryServices.data.value?.services ?? []).map((service) => ({
    value: service.id,
    label: formatIntervenant(service.intervenant),
    search: normalizeForSearch(formatIntervenant(service.intervenant)),
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
