<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { getProfile } from "@/types/profile.ts";
import type { ServiceDetails } from "@/types/service.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import ServiceModifications from "@/components/service/ServiceModifications.vue";
import ServiceRequests from "@/components/service/ServiceRequests.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherSubsection from "@/components/teacher/TeacherSubsection.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { details } = defineProps<{ details: TeacherDetails }>();

const perm = usePermissions();

const service: ComputedRef<ServiceDetails | null> = computed(
  () => details.services[0] ?? null,
);

const totals = computed(() => ({
  [REQUEST_TYPES.ASSIGNMENT]: details.totalAssigned,
  [REQUEST_TYPES.PRIMARY]: details.totalPrimary,
  [REQUEST_TYPES.SECONDARY]: details.totalSecondary,
}));
</script>

<template>
  <QCard flat square class="text-center">
    <TeacherTitle
      :profile="getProfile(details)"
      :position="details.position?.label"
    />
    <TeacherSubsection title="Service">
      <ServiceModifications
        v-if="service"
        :service
        :editable="perm.toEditAService(details.uid)"
      />
    </TeacherSubsection>
    <!-- TODO: Responsabilités -->
    <!-- TODO: Priorités -->
    <TeacherSubsection title="Demandes">
      <ServiceRequests :totals />
    </TeacherSubsection>
    <TeacherMessage
      v-if="service"
      :year="service?.year"
      :uid="service?.uid"
      :body="details.messages[0]?.body ?? null"
    />
  </QCard>
</template>

<style scoped lang="scss"></style>
