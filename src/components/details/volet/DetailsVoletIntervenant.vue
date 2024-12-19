<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import {
  REQUEST_TYPES,
  type RequestType,
} from "@/config/types/request-types.ts";
import type { ServiceModification } from "@/types/service-modifications.ts";
import type { ServiceDetails } from "@/types/services.ts";
import type { TeacherRow } from "@/types/teachers.ts";

const props = defineProps<{ teacherRow: TeacherRow }>();

defineSlots<{
  service(scope: {
    serviceId: number;
    serviceBase: number;
    modifications: ServiceModification[];
    totalModifications: number;
    editable: boolean;
  }): unknown;
  requests(scope: { totalRequests: Record<RequestType, number> }): unknown;
}>();

const perm = usePermissions();

const service: ComputedRef<ServiceDetails | null> = computed(
  () => props.teacherRow.services[0] ?? null,
);
const serviceBase: ComputedRef<number> = computed(
  () => service.value?.weightedHours ?? 0,
);
const modifications: ComputedRef<ServiceModification[]> = computed(
  () => service.value?.modifications ?? [],
);
const totalModifications: ComputedRef<number> = computed(
  () => service.value?.totalModifications.aggregate?.sum?.weightedHours ?? 0,
);
const totalRequests: ComputedRef<Record<RequestType, number>> = computed(
  () => ({
    [REQUEST_TYPES.ASSIGNMENT]:
      props.teacherRow.totalAssigned.aggregate?.sum?.weightedHours ?? 0,
    [REQUEST_TYPES.PRIMARY]:
      props.teacherRow.totalPrimary.aggregate?.sum?.weightedHours ?? 0,
    [REQUEST_TYPES.SECONDARY]:
      props.teacherRow.totalSecondary.aggregate?.sum?.weightedHours ?? 0,
  }),
);
</script>

<template>
  <slot
    v-if="service"
    name="service"
    :service-id="service.id"
    :service-base
    :modifications
    :total-modifications
    :editable="perm.deModifierUnService(teacherRow.uid)"
  />
  <slot name="requests" :total-requests />
</template>

<style scoped lang="scss"></style>
