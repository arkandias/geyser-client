<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseExpansionFragmentDoc } from "@/gql/graphql.ts";

const isExpanded = defineModel<boolean>();
const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseExpansionFragmentDoc> | null;
}>();
defineSlots<{ default(): unknown }>();

graphql(`
  fragment CourseExpansion on Course {
    name
    courseType: typeByType {
      label
    }
    semester
    program {
      degree {
        name
      }
      name
    }
    track {
      name
    }
  }
`);

const data = computed(() =>
  useFragment(CourseExpansionFragmentDoc, dataFragment),
);

const label = computed(() =>
  data.value
    ? data.value.name
    : "Sélectionnez un course dans la liste ci-dessus",
);

const caption = computed(() =>
  data.value
    ? `${data.value.program.degree.name} — ` +
      `${data.value.program.name} — ` +
      (data.value.track?.name ? `${data.value.track.name} — ` : "") +
      `S${data.value.semester.toString()} — ` +
      data.value.courseType.label
    : "Cliquez sur ce volet pour afficher des informations supplémentaires",
);
</script>

<template>
  <QExpansionItem
    id="volet"
    v-model="isExpanded"
    expand-separator
    :label
    :caption
    dense
    dense-toggle
  >
    <slot />
  </QExpansionItem>
</template>

<style scoped lang="scss"></style>
