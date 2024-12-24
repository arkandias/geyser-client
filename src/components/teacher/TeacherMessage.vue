<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { DELETE_MESSAGE, UPSERT_MESSAGE } from "@/graphql/messages.ts";

import EditableText from "@/components/core/EditableText.vue";

const edition = defineModel<boolean>();
const { year, uid, body } = defineProps<{
  year: number;
  uid: string;
  body: string | null;
}>();

const upsertMessage = useMutation(UPSERT_MESSAGE);
const deleteMessage = useMutation(DELETE_MESSAGE);

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
