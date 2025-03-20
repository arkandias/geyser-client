<script setup lang="ts">
import { useQuery } from "villus";
import { computed, reactive } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { useQueryParam } from "@/composables/useQueryParam.ts";
import { graphql } from "@/gql";
import { GetServiceDetailsDocument } from "@/gql/graphql.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";

import ServiceDetails from "@/components/service/ServiceDetails.vue";
import ServiceMessage from "@/components/service/ServiceMessage.vue";
import ServicePriorities from "@/components/service/ServicePriorities.vue";
import ServiceRequests from "@/components/service/ServiceRequests.vue";
import ServiceTeacher from "@/components/service/ServiceTeacher.vue";

graphql(`
  query GetServiceDetails($id: Int!) {
    service: serviceByPk(id: $id) {
      teacher {
        ...ServiceTeacher
      }
      ...TeacherServiceDetails
      ...TeacherServiceRequests
      ...TeacherServicePriorities
      ...TeacherServiceMessage
    }
  }
`);

const { t } = useCustomI18n();
const { serviceId: myServiceId } = useProfileStore();
const { getValue: selectedService } = useQueryParam("serviceId", true);

const serviceId = computed(() => selectedService.value ?? myServiceId.value);

const { data, isFetching, isDone } = useQuery({
  query: GetServiceDetailsDocument,
  variables: reactive({
    id: computed(() => serviceId.value ?? -1),
  }),
  paused: () => serviceId.value === null,
  tags: ["all", "request", "service"],
});

const service = computed(() => data.value?.service ?? null);
</script>

<template>
  <QPage>
    <QCard v-if="isFetching && !isDone" flat square>
      <QCardSection class="text-h4 q-pa-xl">
        {{ t("service.fetchingService") }}
      </QCardSection>
    </QCard>
    <QCard v-else-if="service" flat square class="column items-center">
      <ServiceTeacher :data-fragment="service.teacher" />
      <ServiceDetails :data-fragment="service" />
      <ServiceRequests :data-fragment="service" />
      <ServicePriorities :data-fragment="service" />
      <ServiceMessage :data-fragment="service" />
    </QCard>
    <QCard v-else flat square>
      <QCardSection class="text-h4 q-pa-xl">
        {{ t("service.noService") }}
      </QCardSection>
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
:deep(.q-card__section) {
  text-align: center;
}
</style>
