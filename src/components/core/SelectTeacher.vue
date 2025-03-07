<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetTeachersDocument } from "@/gql/graphql.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const uid = defineModel<string | null>();

graphql(`
  query GetTeachers {
    teachers: teacher(orderBy: [{ displayname: ASC }]) {
      uid
      displayname
    }
  }
`);

const { t } = useCustomI18n();

const teachersQueryResult = useQuery({
  query: GetTeachersDocument,
  variables: {},
});
const teachers = computed(() => teachersQueryResult.data.value?.teachers ?? []);

const options = ref<{ value: string; label: string; search: string }[]>([]);
const optionsInit = computed(() =>
  teachers.value.map((t) => ({
    value: t.uid,
    label: t.displayname ?? "",
    search: normalizeForSearch(t.displayname ?? ""),
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
    v-model="uid"
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
