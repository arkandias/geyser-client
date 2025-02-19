<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import { graphql } from "@/gql";
import { GetAdminTeachersDocument } from "@/gql/graphql.ts";

import AdminSection from "@/components/admin/AdminSection.vue";
import AdminTeachersPositions from "@/components/admin/AdminTeachersPositions.vue";
import AdminTeachersTeachers from "@/components/admin/AdminTeachersTeachers.vue";

graphql(`
  query GetAdminTeachers {
    teachers: teacher(orderBy: [{ uid: ASC }]) {
      ...AdminTeacher
    }
    positions: position(orderBy: [{ label: ASC }]) {
      ...AdminTeacherPosition
      ...AdminPosition
    }
  }
`);

const adminTeachersQueryResult = useQuery({
  query: GetAdminTeachersDocument,
  variables: {},
});

const teachers = computed(
  () => adminTeachersQueryResult.data.value?.teachers ?? [],
);
const positions = computed(
  () => adminTeachersQueryResult.data.value?.positions ?? [],
);

const { t } = useI18n();
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
  </QList>
</template>

<style scoped lang="scss"></style>
