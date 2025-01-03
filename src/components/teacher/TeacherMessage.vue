<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  DeleteMessageDocument,
  TeacherMessageFragmentDoc,
  UpsertMessageDocument,
} from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import EditableText from "@/components/core/EditableText.vue";

const { year, uid, teacherMessageFragment } = defineProps<{
  year: number;
  uid: string;
  teacherMessageFragment: FragmentType<typeof TeacherMessageFragmentDoc> | null;
}>();

const perm = usePermissions();

graphql(`
  fragment TeacherMessage on message {
    body: contenu
  }

  mutation UpsertMessage($year: Int!, $uid: String!, $body: String!) {
    message: insert_message_one(
      object: { annee: $year, uid: $uid, contenu: $body }
      on_conflict: {
        constraint: message_annee_uid_key
        update_columns: [contenu]
      }
    ) {
      id
    }
  }

  mutation DeleteMessage($year: Int!, $uid: String!) {
    messages: delete_message(
      where: { _and: [{ annee: { _eq: $year } }, { uid: { _eq: $uid } }] }
    ) {
      returning {
        id
      }
    }
  }
`);

const body = computed(
  () =>
    useFragment(TeacherMessageFragmentDoc, teacherMessageFragment)?.body ??
    null,
);
const upsertMessage = useMutation(UpsertMessageDocument);
const deleteMessage = useMutation(DeleteMessageDocument);

const setMessage = computed(
  () => (body: string) =>
    body
      ? upsertMessage
          .executeMutation({ year, uid, body })
          .then((result) => !!result.data?.message?.id && !result.error)
      : deleteMessage
          .executeMutation({ year, uid })
          .then(
            (result) => !!result.data?.messages?.returning && !result.error,
          ),
);

const editMessage = ref(false);
</script>

<template>
  <DetailsSection
    v-model="editMessage"
    title="Message pour la commission"
    :editable="perm.toEditAMessage(uid)"
    edition-tooltip="Éditer le message"
  >
    <EditableText
      v-model="editMessage"
      :text="body"
      :set-text="setMessage"
      default-text=""
    />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
