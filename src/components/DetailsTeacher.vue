<script setup lang="ts">
import { type ComputedRef, computed } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { getProfile } from "@/types/profile.ts";
import type { ServiceDetails } from "@/types/service.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import ServiceModifications from "@/components/service/ServiceModifications.vue";
import ServiceRequests from "@/components/service/ServiceRequests.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherSection from "@/components/teacher/TeacherSection.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { details } = defineProps<{ details: TeacherDetails }>();

const perm = usePermissions();

const service: ComputedRef<ServiceDetails | null> = computed(
  () => details.services[0] ?? null,
);
</script>

<template>
  <QCard flat square class="text-center">
    <TeacherTitle
      :profile="getProfile(details)"
      :position="details.position?.label"
    />
    <TeacherSection title="Service">
      <ServiceModifications
        v-if="service"
        :service
        :editable="perm.toEditAService(details.uid)"
      />
    </TeacherSection>
    <!-- TODO: Responsabilités -->
    <!-- TODO: Priorités -->
    <TeacherSection title="Demandes">
      <ServiceRequests
        :total-assigned="details.totalAssigned"
        :total-primary="details.totalPrimary"
        :total-secondary="details.totalSecondary"
      />
    </TeacherSection>
    <TeacherMessage
      v-if="service"
      :year="service?.year"
      :uid="service?.uid"
      :body="details.messages[0]?.body ?? null"
    />
  </QCard>
</template>

<style scoped lang="scss"></style>
