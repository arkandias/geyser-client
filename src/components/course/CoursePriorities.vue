<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CoursePrioritiesFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import PriorityChip from "@/components/core/PriorityChip.vue";

const { coursePrioritiesFragment } = defineProps<{
  coursePrioritiesFragment: FragmentType<typeof CoursePrioritiesFragmentDoc>;
}>();

graphql(`
  fragment CoursePriorities on enseignement {
    priorities: priorites(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      id
      ...PriorityChipInfo
    }
  }
`);

const coursePriorities = computed(() =>
  useFragment(CoursePrioritiesFragmentDoc, coursePrioritiesFragment),
);
</script>

<template>
  <DetailsSection title="Priorités">
    <QCardSection>
      <PriorityChip
        v-for="priority in coursePriorities.priorities"
        :key="priority.id"
        :priority-chip-info-fragment="priority"
      />
    </QCardSection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
