<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { PriorityChipInfoFragmentDoc } from "@/gql/graphql.ts";
import { formatUser, priorityColor } from "@/helpers/format.ts";

const { priorityChipInfoFragment } = defineProps<{
  priorityChipInfoFragment: FragmentType<typeof PriorityChipInfoFragmentDoc>;
}>();

graphql(`
  fragment PriorityChipInfo on priorite {
    teacher: intervenant {
      firstname: prenom
      lastname: nom
      alias
    }
    seniority: anciennete
    isPriority: prioritaire
  }
`);

const priorityChipInfo = computed(() =>
  useFragment(PriorityChipInfoFragmentDoc, priorityChipInfoFragment),
);
</script>

<template>
  <QChip
    :color="priorityColor(priorityChipInfo.isPriority)"
    outline
    square
    dense
  >
    <QAvatar
      :color="priorityColor(priorityChipInfo.isPriority)"
      text-color="white"
      square
    >
      {{ priorityChipInfo.seniority }}
    </QAvatar>
    {{ formatUser(priorityChipInfo.teacher) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
