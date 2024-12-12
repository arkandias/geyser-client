<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import type { ComputedRef } from "vue";
import { computed } from "vue";

import type { RowIntervenant } from "@/types/rows.ts";
import type { Modification } from "@/types/services.ts";

import { usePermissions } from "@/stores/permissions.ts";
import type { TypeDemande } from "@/types/demandes.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();
defineSlots<{
  service(scope: {
    uid: string;
    serviceBase: number;
    modifications: Modification[];
    totalModifications: number;
    editable: boolean;
  }): unknown;
  demandes(scope: { totauxDemandes: Record<TypeDemande, number> }): unknown;
}>();

const perm = usePermissions();

const serviceBase: ComputedRef<number> = computed(
  () => props.intervenant.services[0]?.heuresEQTD ?? 0,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => props.intervenant.modifications,
);
const totalModifications: ComputedRef<number> = computed(
  () => props.intervenant.totalModifications.aggregate?.sum?.heuresEQTD ?? 0,
);
const totauxDemandes: ComputedRef<Record<TypeDemande, number>> = computed(
  () => ({
    attribution:
      props.intervenant.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0,
    principale:
      props.intervenant.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0,
    secondaire:
      props.intervenant.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0,
  }),
);
</script>

<template>
  <slot
    name="service"
    :uid="intervenant.uid"
    :service-base
    :modifications
    :total-modifications
    :editable="perm.deModifierUnService(intervenant.uid)"
  />
  <slot name="demandes" :totaux-demandes />
</template>

<style scoped lang="scss"></style>
