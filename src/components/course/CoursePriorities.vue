<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CoursePrioritiesFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import PriorityChip from "@/components/core/PriorityChip.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CoursePrioritiesFragmentDoc>;
}>();

graphql(`
  fragment CoursePriorities on enseignement {
    priorities: priorites(
      order_by: [
        { service: { intervenant: { nom: asc } } }
        { service: { intervenant: { prenom: asc } } }
      ]
    ) {
      id
      ...PriorityChipData
    }
  }
`);

const priorities = computed(
  () => useFragment(CoursePrioritiesFragmentDoc, dataFragment).priorities,
);
</script>

<template>
  <DetailsSection title="Priorités">
    <QCardSection>
      <PriorityChip
        v-for="priority in priorities"
        :key="priority.id"
        :data-fragment="priority"
      />
    </QCardSection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
