<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { TeacherTitleFragmentDoc } from "@/gql/graphql.ts";
import { formatUser } from "@/helpers/format.ts";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof TeacherTitleFragmentDoc>;
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

const data = computed(() => useFragment(TeacherTitleFragmentDoc, dataFragment));
</script>

<template>
  <QCard flat square class="text-center">
    <QCardSection>
      <div class="text-h5">{{ formatUser(data) }}</div>
      <div v-if="data.position" class="text-body1 text-italic">
        {{ data.position.label }}
      </div>
    </QCardSection>
  </QCard>
</template>

<style scoped lang="scss"></style>
