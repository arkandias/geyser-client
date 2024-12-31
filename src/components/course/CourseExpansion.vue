<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseExpansionFragmentDoc } from "@/gql/graphql.ts";

const isExpanded = defineModel<boolean>({ default: false });
const { courseExpansionFragment } = defineProps<{
  courseExpansionFragment: FragmentType<
    typeof CourseExpansionFragmentDoc
  > | null;
}>();
defineSlots<{ default(): unknown }>();

graphql(`
  fragment CourseExpansion on enseignement {
    name: nom
    courseType: typeByType {
      label
    }
    semester: semestre
    program: mention {
      degree: cursus {
        name: nom
      }
      name: nom
    }
    track: parcours {
      name: nom
    }
  }
`);

const info = computed(() =>
  useFragment(CourseExpansionFragmentDoc, courseExpansionFragment),
);
const label: ComputedRef<string> = computed(() =>
  info.value
    ? info.value.name
    : "Sélectionnez un enseignement dans la liste ci-dessus",
);
const caption: ComputedRef<string> = computed(() =>
  info.value
    ? `${info.value.program.degree.name} — ${info.value.program.name} — ` +
      (info.value.track?.name ? `${info.value.track.name} — ` : "") +
      `S${String(info.value.semester)} — ` +
      info.value.courseType.label
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
