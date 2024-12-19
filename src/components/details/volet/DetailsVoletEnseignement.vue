<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { UPDATE_DESCRIPTION } from "@/graphql/courses.ts";
import type { Coordinator } from "@/types/coordinators.ts";
import type { CourseDetails } from "@/types/courses.ts";
import type { Profile } from "@/types/profile.ts";

import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";
import DetailsVoletEnseignementResponsables from "@/components/details/volet/DetailsVoletEnseignementResponsables.vue";

const props = defineProps<{ courseDetails: CourseDetails }>();

const perm = usePermissions();

// responsables
const responsablesEnseignement: ComputedRef<Coordinator[]> = computed(
  () => props.courseDetails.coordinators,
);
const responsablesParcours: ComputedRef<Coordinator[]> = computed(
  () => props.courseDetails.track?.coordinators ?? [],
);
const responsablesMention: ComputedRef<Coordinator[]> = computed(
  () => props.courseDetails.program.coordinators,
);
const responsables: ComputedRef<Profile[]> = computed(() => [
  ...responsablesEnseignement.value.map(({ profile }) => profile),
  ...responsablesParcours.value.map(({ profile }) => profile),
  ...responsablesMention.value.map(({ profile }) => profile),
]);

// description
const updateDescription = useMutation(UPDATE_DESCRIPTION);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      courseId: props.courseDetails.courseId,
      description: text || null,
    })
    .then((result) => !!result.data?.course?.id && !result.error);
</script>

<template>
  <DetailsSubsection title="Responsables">
    <DetailsVoletEnseignementResponsables
      :responsables-mention
      :responsables-enseignement
      :responsables-parcours
    />
  </DetailsSubsection>
  <DetailsSubsectionEditableText
    title="Description"
    :text="courseDetails.description"
    default-text="Pas de description (contactez un responsable)"
    :set-text="setDescription"
    :editable="perm.deModifierUneDescription(responsables)"
  />
</template>

<style scoped lang="scss"></style>
