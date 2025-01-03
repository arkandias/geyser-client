<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { PriorityChipDataFragmentDoc } from "@/gql/graphql.ts";
import { priorityColor } from "@/helpers/colors.ts";
import { formatUser } from "@/helpers/user.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof PriorityChipDataFragmentDoc>;
}>();

graphql(`
  fragment PriorityChipData on priorite {
    teacher: intervenant {
      firstname: prenom
      lastname: nom
      alias
    }
    seniority: anciennete
    isPriority: prioritaire
  }
`);

const data = computed(() =>
  useFragment(PriorityChipDataFragmentDoc, dataFragment),
);
</script>

<template>
  <QChip :color="priorityColor(data.isPriority)" outline square dense>
    <QAvatar :color="priorityColor(data.isPriority)" text-color="white" square>
      {{ data.seniority }}
    </QAvatar>
    {{ formatUser(data.teacher) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
