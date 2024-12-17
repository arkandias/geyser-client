<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import type { RowService } from "@/types/rows.ts";
import type { Modification } from "@/types/services.ts";

import { usePermissions } from "@/stores/permissions.ts";
import type { TypeDemande } from "@/types/demandes.ts";

const props = defineProps<{ service: RowService }>();
defineSlots<{
  service(scope: {
    serviceId: number;
    serviceBase: number;
    modifications: Modification[];
    totalModifications: number;
    editable: boolean;
  }): unknown;
  demandes(scope: { totauxDemandes: Record<TypeDemande, number> }): unknown;
}>();

const perm = usePermissions();

const serviceBase: ComputedRef<number> = computed(
  () => props.service.heuresEQTD,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => props.service.modifications,
);
const totalModifications: ComputedRef<number> = computed(
  () => props.service.totalModifications.aggregate?.sum?.heuresEQTD ?? 0,
);
const totauxDemandes: ComputedRef<Record<TypeDemande, number>> = computed(
  () => ({
    attribution:
      props.service.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0,
    principale: props.service.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0,
    secondaire: props.service.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0,
  }),
);
</script>

<template>
  <slot
    name="service"
    :service-id="service.id"
    :service-base
    :modifications
    :total-modifications
    :editable="perm.deModifierUnService(service.intervenant.uid)"
  />
  <slot name="demandes" :totaux-demandes />
</template>

<style scoped lang="scss"></style>
