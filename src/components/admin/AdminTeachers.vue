<script setup lang="ts">
import { useQuery } from "@urql/vue";
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
      ...AdminServiceTeacher
      ...AdminServiceModificationTeacher
    }
    positions: position(orderBy: [{ label: ASC }]) {
      ...AdminPosition
      ...AdminTeacherPosition
    }
    services: service(orderBy: [{ year: DESC }, { uid: ASC }]) {
      ...AdminService
      ...AdminServiceModificationService
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
      ...AdminServiceModificationServiceModificationType
    }
  }
`);

const adminTeachersQueryResult = useQuery({
  query: GetAdminTeachersDocument,
  variables: {},
  context: {
    additionalTypenames: [
      "Teacher",
      "Position",
      "Service",
      "ServiceModification",
      "ServiceModificationType",
    ],
  },
});

const teachers = computed(
  () => adminTeachersQueryResult.data.value?.teachers ?? [],
);
const positions = computed(
  () => adminTeachersQueryResult.data.value?.positions ?? [],
);
const services = computed(
  () => adminTeachersQueryResult.data.value?.services ?? [],
);
const serviceModifications = computed(
  () => adminTeachersQueryResult.data.value?.serviceModifications ?? [],
);
const serviceModificationTypes = computed(
  () => adminTeachersQueryResult.data.value?.serviceModificationTypes ?? [],
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
