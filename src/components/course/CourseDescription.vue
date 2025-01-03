<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  CourseDescriptionDataFragmentDoc,
  UpdateDescriptionDocument,
} from "@/gql/graphql.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseDescriptionDataFragmentDoc>;
}>();

graphql(`
  fragment CourseDescriptionData on enseignement {
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

const perm = usePermissions();

const data = computed(() =>
  useFragment(CourseDescriptionDataFragmentDoc, dataFragment),
);
const coordinators = computed(() => [
  ...data.value.coordinators.map((coordinator) => coordinator.uid),
  ...data.value.program.coordinators.map((coordinator) => coordinator.uid),
  ...(data.value.track?.coordinators.map((coordinator) => coordinator.uid) ??
    []),
]);

// Description
const editDescription = ref(false);
const updateDescription = useMutation(UpdateDescriptionDocument);
const setDescription = (text: string): Promise<boolean> =>
  updateDescription
    .executeMutation({
      courseId: data.value.courseId,
      description: text || null,
    })
    .then((result) => !!result.data?.course?.id && !result.error);
</script>

<template>
  <DetailsSubsection
    v-model="editDescription"
    title="Description"
    :editable="perm.toEditADescription(coordinators)"
  >
    <EditableText
      v-model="editDescription"
      :text="data.description ?? ''"
      :set-text="setDescription"
      default-text="Pas de description (contactez un responsable)"
    />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
