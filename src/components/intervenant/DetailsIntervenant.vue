<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import DetailsIntervenantService from "@/components/intervenant/DetailsIntervenantService.vue";
import DetailsIntervenantModifications from "@/components/intervenant/DetailsIntervenantModifications.vue";
import {
  formatIntervenant,
  formatResumeIntervenant,
} from "@/helpers/format.ts";
import { Message, Modification, RowIntervenant } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";
import DetailsVolet from "@/components/core/DetailsVolet.vue";
import DetailsIntervenantMessages from "@/components/intervenant/DetailsIntervenantMessages.vue";

const props = defineProps<{ intervenant: RowIntervenant }>();

const perm = usePermissions();
const serviceBase: ComputedRef<number> = computed(
  () => props.intervenant.services[0]?.heuresEQTD ?? 0,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => props.intervenant.modifications,
);
const totalAttributions: ComputedRef<number> = computed(
  () => props.intervenant.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalModifications: ComputedRef<number> = computed(
  () => props.intervenant.totalModifications.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalPrincipales: ComputedRef<number> = computed(
  () => props.intervenant.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalSecondaires: ComputedRef<number> = computed(
  () => props.intervenant.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0,
);
const messages: ComputedRef<Message[]> = computed(
  () => props.intervenant.messages,
);
</script>

<template>
  <DetailsVolet
    :label="formatIntervenant(intervenant)"
    :caption="formatResumeIntervenant(intervenant)"
  >
    <DetailsIntervenantModifications
      v-if="perm.deVoirUnService.value(intervenant.uid)"
      :uid="intervenant.uid"
      :service-base
      :modifications
      :total-modifications
      :editable="perm.deModifierUnService.value(intervenant.uid)"
    />
    <DetailsIntervenantService
      :total-attributions
      :total-principales
      :total-secondaires
    />
  </DetailsVolet>
  <DetailsIntervenantMessages :uid="intervenant.uid" :messages />
</template>

<style scoped lang="scss"></style>
