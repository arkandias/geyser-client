<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { PriorityChipDataFragmentDoc } from "@/gql/graphql.ts";
import { priorityColor } from "@/utils/colors.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof PriorityChipDataFragmentDoc>;
}>();

graphql(`
  fragment PriorityChipData on Priority {
    service {
      teacher {
        displayname
      }
    }
    seniority
    isPriority
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
    {{ data.service.teacher.displayname }}
  </QChip>
</template>

<style scoped lang="scss"></style>
