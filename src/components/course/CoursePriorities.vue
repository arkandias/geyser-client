<script setup lang="ts">
import { computed } from "vue";

import { usePermissions } from "@/composables/usePermissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { CoursePrioritiesFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import PriorityChip from "@/components/core/PriorityChip.vue";
import PriorityForm from "@/components/core/PriorityForm.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CoursePrioritiesFragmentDoc>;
}>();

graphql(`
  fragment CoursePriorities on Course {
    ...PriorityFormData

    priorities(orderBy: [{ service: { teacher: { displayname: ASC } } }]) {
      id
      isPriority
      ...PriorityChipData
    }
  }
`);

const perm = usePermissions();

const data = computed(() =>
  useFragment(CoursePrioritiesFragmentDoc, dataFragment),
);

const priorities = computed(() =>
  perm.toEditPriorities
    ? data.value.priorities
    : data.value.priorities.filter((p) => p.isPriority !== null),
);
</script>

<template>
  <DetailsSection title="Priorités">
    <DetailsSubsection v-if="perm.toEditPriorities">
      <PriorityForm :data-fragment="data" />
    </DetailsSubsection>
    <QCardSection>
      <PriorityChip v-for="p in priorities" :key="p.id" :data-fragment="p" />
    </QCardSection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
