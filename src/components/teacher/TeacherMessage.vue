<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { graphql } from "@/gql";
import { DeleteMessageDocument, UpsertMessageDocument } from "@/gql/graphql.ts";

import EditableText from "@/components/core/EditableText.vue";

const edition = defineModel<boolean>();
const { year, uid, body } = defineProps<{
  year: number;
  uid: string;
  body: string | null;
}>();

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

const upsertMessage = useMutation(UpsertMessageDocument);
const deleteMessage = useMutation(DeleteMessageDocument);

const setMessage: ComputedRef<(body: string) => Promise<boolean>> = computed(
  () =>
    (body: string): Promise<boolean> =>
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
</script>

<template>
  <EditableText
    v-model="edition"
    :text="body"
    :set-text="setMessage"
    default-text=""
  />
</template>

<style scoped lang="scss"></style>
