<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetAdminRequestsDocument } from "@/gql/graphql.ts";

import AdminRequestsPriorities from "@/components/admin/AdminRequestsPriorities.vue";
import AdminRequestsRequests from "@/components/admin/AdminRequestsRequests.vue";
import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();

graphql(`
  query GetAdminRequests {
    requests: request(
      orderBy: [
        { year: DESC }
        { service: { uid: ASC } }
        { course: { program: { degree: { name: ASC } } } }
        { course: { program: { name: ASC } } }
        { course: { track: { name: ASC } } }
        { course: { name: ASC } }
        { course: { semester: ASC } }
        { course: { type: { label: ASC } } }
      ]
    ) {
      ...AdminRequest
    }
    priorities: priority(
      orderBy: [
        { year: DESC }
        { service: { uid: ASC } }
        { course: { program: { degree: { name: ASC } } } }
        { course: { program: { name: ASC } } }
        { course: { track: { name: ASC } } }
        { course: { name: ASC } }
        { course: { semester: ASC } }
        { course: { type: { label: ASC } } }
      ]
    ) {
      ...AdminPriority
    }
    services: service(orderBy: [{ year: DESC }, { uid: ASC }]) {
      ...AdminRequestsService
      ...AdminPrioritiesService
    }
    courses: course(
      orderBy: [
        { year: DESC }
        { program: { degree: { name: ASC } } }
        { program: { name: ASC } }
        { track: { name: ASC } }
        { name: ASC }
        { semester: ASC }
        { type: { label: ASC } }
      ]
    ) {
      ...AdminRequestsCourse
      ...AdminPrioritiesCourse
    }
  }
`);

const { data } = useQuery({
  query: GetAdminRequestsDocument,
  variables: {},
  context: {
    additionalTypenames: ["All", "Course", "Priority", "Request", "Service"],
  },
});
const requests = computed(() => data.value?.requests ?? []);
const priorities = computed(() => data.value?.priorities ?? []);
const services = computed(() => data.value?.services ?? []);
const courses = computed(() => data.value?.courses ?? []);
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_assignment"
      :label="t('admin.requests.requests.label')"
    >
      <AdminRequestsRequests
        :request-fragments="requests"
        :service-fragments="services"
        :course-fragments="courses"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_late"
      :label="t('admin.requests.priorities.label')"
    >
      <AdminRequestsPriorities
        :priority-fragments="priorities"
        :service-fragments="services"
        :course-fragments="courses"
      />
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
