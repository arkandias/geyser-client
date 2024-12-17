<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { useClientHandle } from "@urql/vue";
import type { ComputedRef } from "vue";
import { computed } from "vue";

import { updateMessage } from "@/helpers/messages.ts";
import { usePermissions } from "@/stores/permissions.ts";

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
