<script setup lang="ts">
import { type ComputedRef, type Ref, computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { getProfile } from "@/types/profile.ts";
import type { ServiceDetails } from "@/types/service.ts";
import type { TeacherDetails } from "@/types/teacher.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherNoServices from "@/components/teacher/TeacherNoServices.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
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
  <!-- TODO: Responsabilités -->
  <!-- TODO: Priorités -->
  <template v-if="service">
    <DetailsSection title="Service">
      <TeacherService
        v-if="service"
        :service
        :position-base-service-hours="details.position?.baseServiceHours"
        :editable="perm.toEditAService(details.uid)"
      />
    </DetailsSection>
    <DetailsSection title="Demandes">
      <TeacherRequests
        :total-assigned="details.totalAssigned"
        :total-primary="details.totalPrimary"
        :total-secondary="details.totalSecondary"
      />
    </DetailsSection>
    <DetailsSection
      v-if="service"
      v-model="messageEdition"
      title="Message pour la commission"
      :editable="perm.toEditAMessage(service.uid)"
      edition-tooltip="Éditer le message"
    >
      <TeacherMessage
        v-model="messageEdition"
        :year="service.year"
        :uid="service.uid"
        :body="details.messages[0]?.body ?? null"
      />
    </DetailsSection>
  </template>
  <TeacherNoServices
    v-else
    :uid="details.uid"
    :position-base-service-hours="details.position?.baseServiceHours"
  />
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
