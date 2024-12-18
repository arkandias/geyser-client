<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import type { ServiceRow } from "@/types/rows.ts";
import type { Modification } from "@/types/services.ts";

const props = defineProps<{ service: ServiceRow }>();
defineSlots<{
  service(scope: {
    serviceId: number;
    serviceBase: number;
    modifications: Modification[];
    totalModifications: number;
    editable: boolean;
  }): unknown;
  demandes(scope: { totauxDemandes: Record<RequestType, number> }): unknown;
}>();

const perm = usePermissions();

const serviceBase: ComputedRef<number> = computed(
  () => props.service.weightedHours,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => props.service.modifications,
);
const totalModifications: ComputedRef<number> = computed(
  () => props.service.totalModifications.aggregate?.sum?.weightedHours ?? 0,
);
const totauxDemandes: ComputedRef<Record<RequestType, number>> = computed(
  () => ({
    [REQUEST_TYPES.ASSIGNMENT]:
      props.service.totalAssigned.aggregate?.sum?.weightedHours ?? 0,
    [REQUEST_TYPES.PRIMARY]:
      props.service.totalPrimary.aggregate?.sum?.weightedHours ?? 0,
    [REQUEST_TYPES.SECONDARY]:
      props.service.totalSecondary.aggregate?.sum?.weightedHours ?? 0,
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
    :editable="perm.deModifierUnService(service.teacher.uid)"
  />
  <slot name="demandes" :totaux-demandes />
</template>

<style scoped lang="scss"></style>
