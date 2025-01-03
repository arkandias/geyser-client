<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { PriorityDetailsFragmentDoc } from "@/gql/graphql.ts";
import { formatUser, priorityColor } from "@/helpers/format.ts";

const { priorityDetailsFragmentDoc } = defineProps<{
  priorityDetailsFragmentDoc: FragmentType<typeof PriorityDetailsFragmentDoc>;
}>();

graphql(`
  fragment PriorityDetails on priorite {
    teacher: intervenant {
      firstname: prenom
      lastname: nom
      alias
    }
    seniority: anciennete
    isPriority: prioritaire
  }
`);

const priority = computed(() =>
  useFragment(PriorityDetailsFragmentDoc, priorityDetailsFragmentDoc),
);
</script>

<template>
  <QChip :color="priorityColor(priority.isPriority)" outline square dense>
    <QAvatar
      :color="priorityColor(priority.isPriority)"
      text-color="white"
      square
    >
      {{ priority.seniority }}
    </QAvatar>
    {{ formatUser(priority.teacher) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
