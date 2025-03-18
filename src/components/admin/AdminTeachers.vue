<script setup lang="ts">
import { useQuery } from "villus";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetAdminTeachersDocument } from "@/gql/graphql.ts";

import AdminSection from "@/components/admin/AdminSection.vue";
import AdminTeachersPositions from "@/components/admin/AdminTeachersPositions.vue";
import AdminTeachersServiceModificationTypes from "@/components/admin/AdminTeachersServiceModificationTypes.vue";
import AdminTeachersServiceModifications from "@/components/admin/AdminTeachersServiceModifications.vue";
import AdminTeachersServices from "@/components/admin/AdminTeachersServices.vue";
import AdminTeachersTeachers from "@/components/admin/AdminTeachersTeachers.vue";

const { t } = useCustomI18n();

graphql(`
  query GetAdminTeachers {
    teachers: teacher(orderBy: [{ uid: ASC }]) {
      ...AdminTeacher
      ...AdminServicesTeacher
      ...AdminServiceModificationsTeacher
    }
    positions: position(orderBy: [{ label: ASC }]) {
      ...AdminPosition
      ...AdminTeachersPosition
    }
    services: service(orderBy: [{ year: DESC }, { uid: ASC }]) {
      ...AdminService
      ...AdminServiceModificationsService
    }
    serviceModifications: serviceModification(
      orderBy: [{ service: { year: DESC } }, { service: { uid: ASC } }]
    ) {
      ...AdminServiceModification
    }
    serviceModificationTypes: serviceModificationType(
      orderBy: [{ label: ASC }]
    ) {
      ...AdminServiceModificationType
      ...AdminServiceModificationsServiceModificationType
    }
  }
`);

const { data } = useQuery({
  query: GetAdminTeachersDocument,
});
const teachers = computed(() => data.value?.teachers ?? []);
const positions = computed(() => data.value?.positions ?? []);
const services = computed(() => data.value?.services ?? []);
const serviceModifications = computed(
  () => data.value?.serviceModifications ?? [],
);
const serviceModificationTypes = computed(
  () => data.value?.serviceModificationTypes ?? [],
);
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_groups"
      :label="t('admin.teachers.teachers.label')"
    >
      <AdminTeachersTeachers
        :teacher-fragments="teachers"
        :position-fragments="positions"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_work"
      :label="t('admin.teachers.positions.label')"
    >
      <AdminTeachersPositions :position-fragments="positions" />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_ind"
      :label="t('admin.teachers.services.label')"
    >
      <AdminTeachersServices
        :service-fragments="services"
        :teacher-fragments="teachers"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_returned"
      :label="t('admin.teachers.serviceModifications.label')"
    >
      <AdminTeachersServiceModifications
        :service-fragments="services"
        :service-modification-fragments="serviceModifications"
        :service-modification-type-fragments="serviceModificationTypes"
        :teacher-fragments="teachers"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_format_list_bulleted"
      :label="t('admin.teachers.serviceModificationTypes.label')"
    >
      <AdminTeachersServiceModificationTypes
        :service-modification-type-fragments="serviceModificationTypes"
      />
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
