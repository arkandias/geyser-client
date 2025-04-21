<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { graphql } from "@/gql";
import { GetAdminRolesDocument, RoleTypeEnum } from "@/gql/graphql.ts";

import AdminRolesRoles from "@/components/admin/AdminRolesRoles.vue";
import AdminSection from "@/components/admin/core/AdminSection.vue";

const { t } = useCustomI18n();

graphql(`
  query GetAdminRoles {
    roles: role(orderBy: [{ uid: ASC }, { type: ASC }]) {
      ...AdminRole
    }
    teachers: teacher(orderBy: [{ uid: ASC }]) {
      ...AdminRolesTeacher
    }
  }
`);

const { data } = useQuery({
  query: GetAdminRolesDocument,
  variables: {},
  context: {
    additionalTypenames: ["All", "Roles", "Teacher"],
  },
});
const roles = computed(() => data.value?.roles ?? []);
const teachers = computed(() => data.value?.teachers ?? []);
</script>

<template>
  <QList bordered>
    <AdminSection
      icon="sym_s_shield_person"
      :label="t(`admin.roles.roles.label.${RoleTypeEnum.Admin}`)"
    >
      <AdminRolesRoles
        :role-type="RoleTypeEnum.Admin"
        :role-fragments="roles"
        :teacher-fragments="teachers"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_local_police"
      :label="t(`admin.roles.roles.label.${RoleTypeEnum.Commissioner}`)"
    >
      <AdminRolesRoles
        :role-type="RoleTypeEnum.Commissioner"
        :role-fragments="roles"
        :teacher-fragments="teachers"
      />
    </AdminSection>

    <QSeparator />

    <AdminSection
      icon="sym_s_account_tree"
      :label="t('admin.roles.coordinations.programs')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_alt_route"
      :label="t('admin.roles.coordinations.tracks')"
    >
    </AdminSection>

    <QSeparator />
    <AdminSection
      icon="sym_s_menu_book"
      :label="t('admin.roles.coordinations.courses')"
    >
    </AdminSection>
  </QList>
</template>

<style scoped lang="scss"></style>
