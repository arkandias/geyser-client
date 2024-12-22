<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref, watch } from "vue";

import { GET_ACTIVE_TEACHERS } from "@/graphql/teachers.ts";
import { formatUser, normalizeForSearch } from "@/helpers/format.ts";
import type { OptionSearch } from "@/types/common.ts";

const uid = defineModel<string | null>({ required: true });

const queryTeachers = useQuery({
  query: GET_ACTIVE_TEACHERS,
  variables: {},
});

const options: Ref<OptionSearch<string>[]> = ref([]);
const optionsInit: ComputedRef<OptionSearch<string>[]> = computed(() =>
  (queryTeachers.data.value?.teachers ?? []).map((teacher) => ({
    value: teacher.uid,
    label: formatUser(teacher),
    search: normalizeForSearch(formatUser(teacher)),
  })),
);
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
