<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useQuery } from "@urql/vue";
import type { ComputedRef, Ref } from "vue";
import { computed, ref, watch } from "vue";

import { GET_INTERVENANTS } from "@/graphql/intervenants.ts";
import { formatIntervenant, normalizeForSearch } from "@/helpers/format.ts";
import type { OptionSearch } from "@/helpers/types.ts";

const uid = defineModel<string | null>({ required: true });

const queryIntervenants = useQuery({
  query: GET_INTERVENANTS,
  variables: {},
});

const optionsInit: ComputedRef<OptionSearch<string>[]> = computed(() =>
  (queryIntervenants.data.value?.intervenants ?? []).map((intervenant) => ({
    value: intervenant.uid,
    label: formatIntervenant(intervenant),
    search: normalizeForSearch(formatIntervenant(intervenant)),
  })),
);

const options: Ref<OptionSearch<string>[]> = ref([]);

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
    v-model="uid"
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
