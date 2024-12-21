<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { UPDATE_DESCRIPTION } from "@/graphql/courses.ts";
import type { Coordinator } from "@/types/coordinator.ts";
import type { CourseDetails } from "@/types/course.ts";
import type { Profile } from "@/types/profile.ts";

import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";
import DetailsCourseCoordinators from "@/components/details/course/DetailsCourseCoordinators.vue";

const props = defineProps<{ details: CourseDetails }>();

const perm = usePermissions();

// Coordinators
const courseCoordinators: ComputedRef<Coordinator[]> = computed(
  () => props.details.coordinators,
);
const trackCoordinators: ComputedRef<Coordinator[]> = computed(
  () => props.details.track?.coordinators ?? [],
);
const programCoordinators: ComputedRef<Coordinator[]> = computed(
  () => props.details.program.coordinators,
);
const coordinators: ComputedRef<Profile[]> = computed(() => [
  ...courseCoordinators.value.map(({ profile }) => profile),
  ...trackCoordinators.value.map(({ profile }) => profile),
  ...programCoordinators.value.map(({ profile }) => profile),
]);

// Description
const updateDescription = useMutation(UPDATE_DESCRIPTION);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      courseId: props.details.courseId,
      description: text || null,
    })
    .then((result) => !!result.data?.course?.id && !result.error);
</script>

<template>
  <DetailsSubsection title="Responsables">
    <DetailsCourseCoordinators
      :program-coordinators
      :track-coordinators
      :course-coordinators
    />
  </DetailsSubsection>
  <DetailsSubsectionEditableText
    title="Description"
    :text="details.description"
    default-text="Pas de description (contactez un responsable)"
    :set-text="setDescription"
    :editable="perm.toEditADescription(coordinators)"
  />
</template>

<style scoped lang="scss"></style>
