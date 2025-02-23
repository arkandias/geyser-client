<script setup lang="ts">
import { useMutation } from "@urql/vue";
import DOMPurify from "dompurify";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  CourseDescriptionFragmentDoc,
  UpdateDescriptionDocument,
} from "@/gql/graphql.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import EditableText from "@/components/core/EditableText.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseDescriptionFragmentDoc>;
}>();

graphql(`
  fragment CourseDescription on Course {
    courseId: id
    description
    coordinations(
      orderBy: [{ teacher: { lastname: ASC } }, { teacher: { firstname: ASC } }]
    ) {
      uid
    }
    program {
      coordinations(
        orderBy: [
          { teacher: { lastname: ASC } }
          { teacher: { firstname: ASC } }
        ]
      ) {
        uid
      }
    }
    track {
      coordinations(
        orderBy: [
          { teacher: { lastname: ASC } }
          { teacher: { firstname: ASC } }
        ]
      ) {
        uid
      }
    }
  }

  mutation UpdateDescription($courseId: Int!, $description: String) {
    course: updateCourseByPk(
      pkColumns: { id: $courseId }
      _set: { description: $description }
    ) {
      id
    }
  }
`);

const perm = usePermissions();

const data = computed(() =>
  useFragment(CourseDescriptionFragmentDoc, dataFragment),
);
const updateDescription = useMutation(UpdateDescriptionDocument);

const description = computed(() =>
  DOMPurify.sanitize(data.value.description ?? ""),
);
const coordinators = computed(() => [
  ...data.value.coordinations.map((c) => c.uid),
  ...data.value.program.coordinations.map((c) => c.uid),
  ...(data.value.track?.coordinations.map((c) => c.uid) ?? []),
]);

const editDescription = ref(false);
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
      :text="description"
      :set-text="setDescription"
      default-text="Pas de description (contactez un responsable)"
    />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
