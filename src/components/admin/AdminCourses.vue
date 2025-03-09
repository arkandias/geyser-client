<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetAdminCoursesDocument } from "@/gql/graphql.ts";

import AdminCoursesDegrees from "@/components/admin/AdminCoursesDegrees.vue";
import AdminCoursesPrograms from "@/components/admin/AdminCoursesPrograms.vue";
import AdminCoursesTracks from "@/components/admin/AdminCoursesTracks.vue";
import AdminSection from "@/components/admin/AdminSection.vue";

const { t } = useCustomI18n();

graphql(`
  query GetAdminCourses {
    degrees: degree(orderBy: [{ name: ASC }]) {
      ...AdminDegree
      ...AdminProgramDegree
      ...AdminTrackDegree
    }
    programs: program(
      orderBy: [{ degree: { nameDisplay: ASC } }, { name: ASC }]
    ) {
      ...AdminProgram
    }
    tracks: track(
      orderBy: [
        { program: { degree: { nameDisplay: ASC } } }
        { program: { nameDisplay: ASC } }
        { nameDisplay: ASC }
      ]
    ) {
      ...AdminTrack
    }
  }
`);

const adminCoursesQueryResult = useQuery({
  query: GetAdminCoursesDocument,
  variables: {},
  context: { additionalTypenames: ["Degree"] },
});

const degrees = computed(
  () => adminCoursesQueryResult.data.value?.degrees ?? [],
);
const programs = computed(
  () => adminCoursesQueryResult.data.value?.programs ?? [],
);
const tracks = computed(() => adminCoursesQueryResult.data.value?.tracks ?? []);
</script>

<template>
  <QList bordered>
    <AdminSection icon="sym_s_school" :label="t('admin.courses.degrees.label')">
      <AdminCoursesDegrees :degree-fragments="degrees" />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_account_tree"
      :label="t('admin.courses.programs.label')"
    >
      <AdminCoursesPrograms
        :degree-fragments="degrees"
        :program-fragments="programs"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_alt_route"
      :label="t('admin.courses.tracks.label')"
    >
      <AdminCoursesTracks
        :degree-fragments="degrees"
        :track-fragments="tracks"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection icon="sym_s_menu_book" :label="t('admin.courses.courses')">
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_format_list_bulleted"
      :label="t('admin.courses.types')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
