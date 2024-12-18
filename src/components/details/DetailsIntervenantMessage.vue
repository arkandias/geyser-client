<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { updateMessage } from "@/helpers/messages.ts";

import DetailsSubsectionEditableText from "@/components/details/DetailsSubsectionEditableText.vue";

const props = defineProps<{
  serviceId: number;
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
      serviceId: props.serviceId,
    }),
);
</script>

<template>
  <DetailsSubsectionEditableText
    title="Message pour la commission"
    :text="getMessage"
    default-text="Pas de contenu"
    :set-text="setMessage"
    :editable="perm.deModifierUnMessage(uid)"
  />
</template>

<style scoped lang="scss"></style>
