<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherTitleFragmentDoc } from "@/gql/graphql.ts";
import { formatUser } from "@/helpers/format.ts";

const { teacherTitleFragment } = defineProps<{
  teacherTitleFragment: FragmentType<typeof TeacherTitleFragmentDoc>;
}>();

graphql(`
  fragment TeacherTitle on intervenant {
    firstname: prenom
    lastname: nom
    alias
    position: fonctionByFonction {
      label
    }
  }
`);

const title = computed(() =>
  useFragment(TeacherTitleFragmentDoc, teacherTitleFragment),
);
</script>

<template>
  <QCard flat square class="text-center">
    <QCardSection>
      <div class="text-h5">{{ formatUser(title) }}</div>
      <div v-if="title.position" class="text-body1 text-italic">
        {{ title.position.label }}
      </div>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
