<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { updateMessage } from "@/composables/message-operations.ts";
import { usePermissions } from "@/composables/permissions.ts";

import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";

const props = defineProps<{
  year: number;
  uid: string;
  contenu: string | null;
}>();

const perm = usePermissions();
const client = useClientHandle().client;

const getMessage: ComputedRef<string | null> = computed(
  () => props.contenu ?? null,
);
const setMessage: ComputedRef<(contenu: string) => Promise<boolean>> = computed(
  () =>
    updateMessage(client, {
      year: props.year,
      uid: props.uid,
    }),
);
</script>

<template>
  <DetailsSubsectionEditableText
    title="Message pour la commission"
    :text="getMessage"
    default-text="Pas de contenu"
    :set-text="setMessage"
    :editable="perm.toEditAMessage(uid)"
  />
</template>

<style scoped lang="scss"></style>
