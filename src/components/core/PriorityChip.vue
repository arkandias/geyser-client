<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { PriorityChipDataFragmentDoc } from "@/gql/graphql.ts";
import { priorityColor } from "@/utils/colors.ts";
import { formatUser } from "@/utils/format.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof PriorityChipDataFragmentDoc>;
}>();

graphql(`
  fragment PriorityChipData on priority {
    service {
      teacher {
        firstname
        lastname
        alias
      }
    }
    seniority
    isPriority: is_priority
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
    {{ formatUser(data.service.teacher) }}
  </QChip>
</template>

<style scoped lang="scss"></style>
