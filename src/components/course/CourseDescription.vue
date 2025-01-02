<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  CourseDescriptionFragmentDoc,
  UpdateDescriptionDocument,
} from "@/gql/graphql.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

const { courseDescriptionFragment } = defineProps<{
  courseDescriptionFragment: FragmentType<typeof CourseDescriptionFragmentDoc>;
}>();

graphql(`
  fragment CourseDescription on enseignement {
    courseId: id
    description
    coordinators: responsables(
      order_by: [
        { intervenant: { nom: asc } }
        { intervenant: { prenom: asc } }
      ]
    ) {
      uid
    }
    program: mention {
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        uid
      }
    }
    track: parcours {
      coordinators: responsables(
        order_by: [
          { intervenant: { nom: asc } }
          { intervenant: { prenom: asc } }
        ]
      ) {
        uid
      }
    }
  }

  mutation UpdateDescription($courseId: Int!, $description: String) {
    course: update_enseignement_by_pk(
      pk_columns: { id: $courseId }
      _set: { description: $description }
    ) {
      id
    }
  }
`);

const courseDescription = computed(() =>
  useFragment(CourseDescriptionFragmentDoc, courseDescriptionFragment),
);

const coordinatorsIds = computed(() => [
  ...courseDescription.value.coordinators.map((coordinator) => coordinator.uid),
  ...courseDescription.value.program.coordinators.map(
    (coordinator) => coordinator.uid,
  ),
  ...(courseDescription.value.track?.coordinators.map(
    (coordinator) => coordinator.uid,
  ) ?? []),
]);

const perm = usePermissions();

// Description
const editDescription = ref(false);
const updateDescription = useMutation(UpdateDescriptionDocument);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      courseId: courseDescription.value.courseId,
      description: text || null,
    })
    .then((result) => !!result.data?.course?.id && !result.error);
</script>

<template>
  <DetailsSubsection
    v-model="editDescription"
    title="Description"
    :editable="perm.toEditADescription(coordinatorsIds)"
  >
    <EditableText
      v-model="editDescription"
      :text="courseDescription.description"
      :set-text="setDescription"
      default-text="Pas de description (contactez un responsable)"
    />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
