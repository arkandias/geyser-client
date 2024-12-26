<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { getProfile } from "@/types/profile.ts";
import type { ServiceDetails } from "@/types/service.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import ServiceModifications from "@/components/service/ServiceModifications.vue";
import ServiceRequests from "@/components/service/ServiceRequests.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { details } = defineProps<{ details: TeacherDetails }>();

const perm = usePermissions();

const service: ComputedRef<ServiceDetails | null> = computed(
  () => details.services[0] ?? null,
);

const messageEdition: Ref<boolean> = ref(false);
</script>

<template>
  <TeacherTitle
    :profile="getProfile(details)"
    :position="details.position?.label"
  />
  <DetailsSection title="Service">
    <ServiceModifications
      v-if="service"
      :service
      :editable="perm.toEditAService(details.uid)"
    />
  </DetailsSection>
  <!-- TODO: Responsabilités -->
  <!-- TODO: Priorités -->
  <DetailsSection title="Demandes">
    <ServiceRequests
      :total-assigned="details.totalAssigned"
      :total-primary="details.totalPrimary"
      :total-secondary="details.totalSecondary"
    />
  </DetailsSection>
  <DetailsSection
    v-if="service"
    v-model="messageEdition"
    title="Message pour la commission"
    :editable="perm.toEditAMessage(service?.uid)"
    edition-tooltip="Éditer le message"
  >
    <TeacherMessage
      v-if="service"
      v-model="messageEdition"
      :year="service?.year"
      :uid="service?.uid"
      :body="details.messages[0]?.body ?? null"
    />
  </DetailsSection>
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
