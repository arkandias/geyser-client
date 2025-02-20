<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { graphql } from "@/gql";
import { GetActiveTeachersDocument } from "@/gql/graphql.ts";
import { formatUser } from "@/utils/format.ts";
import { normalizeForSearch } from "@/utils/misc.ts";

const uid = defineModel<string | null>();

graphql(`
  query GetActiveTeachers {
    teachers: teacher(
      where: { active: { _eq: true } }
      orderBy: [{ lastname: ASC }, { firstname: ASC }]
    ) {
      uid
      firstname
      lastname
      alias
    }
  }
`);

const { t } = useCustomI18n();

const activeTeachersQueryResult = useQuery({
  query: GetActiveTeachersDocument,
  variables: {},
});
const teachers = computed(
  () => activeTeachersQueryResult.data.value?.teachers ?? [],
);

type Option = {
  value: string;
  label: string;
  search: string;
};

const options = ref<Option[]>([]);
const optionsInit = computed(() =>
  teachers.value.map((t) => ({
    value: t.uid,
    label: formatUser(t),
    search: normalizeForSearch(formatUser(t)),
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
