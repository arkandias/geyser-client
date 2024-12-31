<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { type Ref, computed, ref } from "vue";

import { usePermissions } from "@/composables/permissions.ts";
import { graphql } from "@/gql";
import { GetTeacherInformationDocument } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import TeacherMessage from "@/components/teacher/TeacherMessage.vue";
import TeacherNoService from "@/components/teacher/TeacherNoService.vue";
import TeacherRequests from "@/components/teacher/TeacherRequests.vue";
import TeacherService from "@/components/teacher/TeacherService.vue";
import TeacherTitle from "@/components/teacher/TeacherTitle.vue";

const { year, uid } = defineProps<{
  year: number;
  uid: string;
}>();

graphql(`
  query GetTeacherInformation($year: Int!, $uid: String!) {
    teacher: intervenant_by_pk(uid: $uid) {
      ...TeacherTitle
      ...TotalRequests
      ...TeacherNoService
      services(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...TeacherService
      }
      messages(
        where: { annee: { _eq: $year } }
        limit: 1 # unique
      ) {
        ...TeacherMessage
      }
    }
  }
`);

const teacherInformationQueryResponse = useQuery({
  query: GetTeacherInformationDocument,
  variables: { year, uid },
  context: {
    additionalTypenames: [
      "demande",
      "message",
      "modification_service",
      "service",
    ],
  },
});

const perm = usePermissions();

const details = computed(
  () => teacherInformationQueryResponse.data.value?.teacher ?? null,
);
const service = computed(() => details.value?.services[0] ?? null);

const messageEdition: Ref<boolean> = ref(false);
</script>

<template>
  <template v-if="details">
    <TeacherTitle :teacher-title-fragment="details" />
    <!-- TODO: Responsabilités -->
    <!-- TODO: Priorités -->
    <template v-if="service">
      <DetailsSection title="Service">
        <TeacherService
          v-if="service"
          :service-fragment="service"
          :editable="perm.toEditAService(uid)"
        />
      </DetailsSection>
      <DetailsSection title="Demandes">
        <TeacherRequests :total-requests-fragment="details" />
      </DetailsSection>
      <DetailsSection
        v-if="service"
        v-model="messageEdition"
        title="Message pour la commission"
        :editable="perm.toEditAMessage(uid)"
        edition-tooltip="Éditer le message"
      >
        <TeacherMessage
          v-model="messageEdition"
          :year
          :uid
          :body="details.messages[0]?.body ?? null"
        />
      </DetailsSection>
    </template>
    <TeacherNoService v-else :year :teacher-no-service-fragment="details" />
  </template>
  <template v-else></template>
</template>

<style scoped lang="scss">
.q-card__section {
  text-align: center;
}
</style>
