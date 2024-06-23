<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import { Modification, RowIntervenant } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();
defineSlots<{
  service(scope: {
    uid: string;
    serviceBase: number;
    modifications: Modification[];
    totalModifications: number;
    editable: boolean;
  }): unknown;
  demandes(scope: {
    totalAttributions: number;
    totalPrincipales: number;
    totalSecondaires: number;
  }): unknown;
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
const totalAttributions: ComputedRef<number> = computed(
  () => props.intervenant.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalPrincipales: ComputedRef<number> = computed(
  () => props.intervenant.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalSecondaires: ComputedRef<number> = computed(
  () => props.intervenant.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0,
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
  <slot
    name="demandes"
    :total-attributions
    :total-principales
    :total-secondaires
  />
</template>

<style scoped lang="scss"></style>
