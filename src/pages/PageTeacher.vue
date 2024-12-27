<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";
import { useRoute } from "vue-router";

import { GET_TEACHER_DETAILS } from "@/graphql/teachers.ts";
import { getValue } from "@/helpers/query-params.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

const route = useRoute();

const { currentYear } = useYears();
const { profile } = useAuthentication();

const uid: ComputedRef<string | null> = computed(
  () => getValue(route.query, "uid") ?? profile.uid,
);

const queryTeacherDetails = useQuery({
  query: GET_TEACHER_DETAILS,
  variables: reactive({
    year: computed(() => currentYear.value ?? -1),
    uid,
  }),
  pause: () => currentYear.value === null || !uid.value,
  context: {
    additionalTypenames: [
      "demande",
      "message",
      "modification_service",
      "service",
    ],
  },
});

const details: ComputedRef<TeacherDetails | null> = computed(
  () => queryTeacherDetails.data.value?.teacher ?? null,
);
</script>

<template>
  <QPage>
    <QCard v-if="details" flat square class="column items-center">
      <DetailsTeacher :details />
    </QCard>
    <QCard v-else flat square>
      <QCardSection class="text-subtitle1 text-center">
        Pas d'information sur l'intervenant.
      </QCardSection>
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
:deep(.displayed-text) {
  max-width: $teacher-message-max-width;
}
</style>
