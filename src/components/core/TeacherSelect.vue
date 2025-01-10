<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed, ref, watch } from "vue";

import { graphql } from "@/gql";
import { GetActiveTeachersDocument } from "@/gql/graphql.ts";
import { formatUser } from "@/helpers/format.ts";
import { normalizeForSearch } from "@/helpers/misc.ts";
import type { OptionSearch } from "@/types/option.ts";
import type { Profile } from "@/types/user.ts";

const uid = defineModel<string | null>();
const profile = defineModel<Profile | null>("profile");

graphql(`
  query GetActiveTeachers {
    teachers: intervenant(
      where: { actif: { _eq: true } }
      order_by: [{ nom: asc }, { prenom: asc }]
    ) {
      uid
      firstname: prenom
      lastname: nom
      alias
    }
  }
`);

const activeTeachersQueryResult = useQuery({
  query: GetActiveTeachersDocument,
  variables: {},
});

const options = ref<OptionSearch<string>[]>([]);
const optionsInit = computed(() =>
  (activeTeachersQueryResult.data.value?.teachers ?? []).map((teacher) => ({
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
watch(
  uid,
  (value) => {
    profile.value =
      activeTeachersQueryResult.data.value?.teachers.find(
        (teacher) => teacher.uid === value,
      ) ?? null;
  },
  { immediate: true },
);

const filter = (val: string, update: (x: () => void) => void) => {
  update(() => {
    options.value = optionsInit.value.filter((teacher) =>
      teacher.search.includes(normalizeForSearch(val)),
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
