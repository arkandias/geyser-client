<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, reactive, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetServicesDocument } from "@/gql/graphql.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const id = defineModel<number | null>();

graphql(`
  query GetServices($year: Int!) {
    services: service(
      where: { year: { _eq: $year } }
      orderBy: [{ teacher: { lastname: ASC } }, { teacher: { firstname: ASC } }]
    ) {
      id
      teacher {
        displayname
      }
    }
  }
`);

const { t } = useCustomI18n();
const { activeYear } = useYearsStore();

const servicesQueryResult = useQuery({
  query: GetServicesDocument,
  variables: reactive({ year: activeYear }),
});
const services = computed(() => servicesQueryResult.data.value?.services ?? []);

type Option = {
  value: number;
  label: string;
  search: string;
};

const options = ref<Option[]>([]);
const optionsInit = computed(() =>
  services.value.map((s) => ({
    value: s.id,
    label: s.teacher.displayname ?? "",
    search: normalizeForSearch(s.teacher.displayname ?? ""),
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
    options.value = optionsInit.value.filter((t) =>
      t.search.includes(normalizeForSearch(val)),
    );
  });
};
</script>

<template>
  <QSelect
    v-model="id"
    :options
    :label="t('role.teacher')"
    color="primary"
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
