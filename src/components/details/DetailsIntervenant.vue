<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { Message, RowIntervenant } from "@/helpers/types.ts";
import type { ComputedRef } from "vue";
import { computed } from "vue";

import DetailsIntervenantMessages from "@/components/details/DetailsIntervenantMessages.vue";
import DetailsSection from "@/components/details/DetailsSection.vue";
// import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();

// const perm = usePermissions();

const messages: ComputedRef<Message[]> = computed(
  () => props.intervenant.messages,
);

// const typesMessage = ["message_intervenant", "note_commission"];
// const typesMessageVisibles: ComputedRef<string[]> = computed(() =>
//   typesMessage.filter((typeMessage) =>
//     perm.deVoirUnMessage(typeMessage, props.intervenant.uid),
//   ),
// );
</script>

<template>
  <DetailsSection title="Messages">
    <DetailsIntervenantMessages :uid="intervenant.uid" :messages />
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
