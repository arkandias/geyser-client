<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type ComputedRef, computed, reactive } from "vue";
import { useRoute } from "vue-router";

import { GET_TEACHER_DETAILS } from "@/graphql/teachers.ts";
import { getValue } from "@/helpers/utils.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

const route = useRoute();
const { uid: myUid } = useAuthentication();

const uid: ComputedRef<string | null> = computed(
  () => getValue(route.query, "uid") ?? myUid.value,
);

const { currentYear } = useYears();

const queryTeacherDetails = useQuery({
  query: GET_TEACHER_DETAILS,
  variables: reactive({
    year: computed(() => currentYear.value ?? -1),
    uid,
  }),
  pause: () => currentYear.value === null || !uid.value,
  context: {
    additionalTypenames: ["demande", "message", "modification_service"],
  },
});

const details: ComputedRef<TeacherDetails | null> = computed(
  () => queryTeacherDetails.data.value?.teacher ?? null,
);
</script>

<template>
  <QPage class="column items-center">
    <DetailsTeacher v-if="details?.services" :details />
  </QPage>
</template>

<style scoped lang="scss">
.q-page > * {
  max-width: $homepage-max-width;
  margin-bottom: 16px;
}
</style>
