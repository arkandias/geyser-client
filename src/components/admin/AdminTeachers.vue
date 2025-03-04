<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/custom-i18n.ts";
import { graphql } from "@/gql";
import { GetAdminTeachersDocument } from "@/gql/graphql.ts";

import AdminSection from "@/components/admin/AdminSection.vue";
import AdminTeachersPositions from "@/components/admin/AdminTeachersPositions.vue";
import AdminTeachersServiceModificationTypes from "@/components/admin/AdminTeachersServiceModificationTypes.vue";
import AdminTeachersServices from "@/components/admin/AdminTeachersServices.vue";
import AdminTeachersTeachers from "@/components/admin/AdminTeachersTeachers.vue";

graphql(`
  query GetAdminTeachers {
    teachers: teacher(orderBy: [{ uid: ASC }]) {
      ...AdminTeacher
      ...AdminServiceTeacher
    }
    positions: position(orderBy: [{ label: ASC }]) {
      ...AdminTeacherPosition
      ...AdminPosition
    }
    services: service(orderBy: [{ year: DESC }, { uid: ASC }]) {
      ...AdminService
    }
    serviceModificationTypes: serviceModificationType(
      orderBy: [{ label: ASC }]
    ) {
      ...AdminServiceModificationType
    }
  }
`);

const adminTeachersQueryResult = useQuery({
  query: GetAdminTeachersDocument,
  variables: {},
  context: { additionalTypenames: ["Teacher", "Position"] },
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
const serviceModificationTypes = computed(
  () => adminTeachersQueryResult.data.value?.serviceModificationTypes ?? [],
);

const { t } = useCustomI18n();
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
      <!--      <AdminTeachersServices-->
      <!--        :service-fragments="services"-->
      <!--        :teacher-fragments="teachers"-->
      <!--      />-->
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_assignment_returned"
      :label="t('admin.teachers.serviceModifications.label')"
    >
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
