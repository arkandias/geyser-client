<script setup lang="ts">
import { computed } from "vue";

import { useCustomI18n } from "@/composables/useCustomI18n.ts";
import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseArchivesFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import RequestCard from "@/components/core/RequestCard.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseArchivesFragmentDoc>;
}>();

graphql(`
  fragment CourseArchives on Course {
    parent {
      year
      requests(
        where: { type: { _eq: "assignment" } }
        orderBy: [{ service: { teacher: { displayname: ASC } } }]
      ) {
        id
        ...RequestCardData
      }
      parent {
        year
        requests(
          where: { type: { _eq: "assignment" } }
          orderBy: [{ service: { teacher: { displayname: ASC } } }]
        ) {
          id
          ...RequestCardData
        }
        parent {
          year
          requests(
            where: { type: { _eq: "assignment" } }
            orderBy: [{ service: { teacher: { displayname: ASC } } }]
          ) {
            id
            ...RequestCardData
          }
        }
      }
    }
  }
`);

const { t } = useCustomI18n();

const archives = computed(() => {
  const nestedArchives = useFragment(CourseArchivesFragmentDoc, dataFragment);
  return [
    nestedArchives.parent,
    nestedArchives.parent?.parent,
    nestedArchives.parent?.parent?.parent,
  ].filter((a) => !!a);
});
</script>

<template>
  <DetailsSection :title="t('courses.details.archives.title')">
    <DetailsSubsection
      v-for="a in archives"
      :key="a.year"
      :title="a.year.toString()"
    >
      <QCardSection class="row q-gutter-xs">
        <RequestCard
          v-for="r in a.requests"
          :key="r.id"
          :data-fragment="r"
          archive
        />
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
