<script setup lang="ts">
import { useMutation } from "@urql/vue";
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { DELETE_MESSAGE, UPSERT_MESSAGE } from "@/graphql/messages.ts";

import EditableText from "@/components/core/EditableText.vue";
import HomeSubsection from "@/components/teacher/TeacherSection.vue";

const { year, uid, body } = defineProps<{
  year: number;
  uid: string;
  body: string | null;
}>();

const perm = usePermissions();

const upsertMessage = useMutation(UPSERT_MESSAGE);
const deleteMessage = useMutation(DELETE_MESSAGE);

const edition: Ref<boolean> = ref(false);

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
  <!-- TODO: TeacherSection -->
  <HomeSubsection
    v-model="edition"
    title="Message pour la commission"
    :editable="perm.toEditAMessage(uid)"
  >
    <EditableText
      v-model="edition"
      :text="body"
      :set-text="setMessage"
      default-text=""
    />
  </HomeSubsection>
</template>

<style scoped lang="scss"></style>
