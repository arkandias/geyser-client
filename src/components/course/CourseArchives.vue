<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import { CourseArchivesFragmentDoc } from "@/gql/graphql.ts";

import DetailsSection from "@/components/core/DetailsSection.vue";
import DetailsSubsection from "@/components/core/DetailsSubsection.vue";
import RequestCard from "@/components/core/RequestCard.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseArchivesFragmentDoc>;
}>();

graphql(`
  fragment CourseArchives on course {
    parent {
      year
      requests(
        where: { type: { _eq: "attribution" } }
        order_by: [
          { service: { teacher: { lastname: asc } } }
          { service: { teacher: { firstname: asc } } }
        ]
      ) {
        id
        ...RequestCardData
      }
      parent {
        year
        requests(
          where: { type: { _eq: "attribution" } }
          order_by: [
            { service: { teacher: { lastname: asc } } }
            { service: { teacher: { firstname: asc } } }
          ]
        ) {
          id
          ...RequestCardData
        }
        parent {
          year
          requests(
            where: { type: { _eq: "attribution" } }
            order_by: [
              { service: { teacher: { lastname: asc } } }
              { service: { teacher: { firstname: asc } } }
            ]
          ) {
            id
            ...RequestCardData
          }
        }
      }
    }
  }
`);

const archives = computed(() => {
  const nestedArchives = useFragment(CourseArchivesFragmentDoc, dataFragment);
  return [
    nestedArchives.parent,
    nestedArchives.parent?.parent,
    nestedArchives.parent?.parent?.parent,
  ].filter((archive) => !!archive);
});
</script>

<template>
  <DetailsSection title="Archives">
    <DetailsSubsection
      v-for="archive in archives"
      :key="archive.year"
      :title="archive.year.toString()"
    >
      <QCardSection class="row q-gutter-xs">
        <RequestCard
          v-for="request in archive.requests"
          :key="request.id"
          :data-fragment="request"
          archive
        />
      </QCardSection>
    </DetailsSubsection>
  </DetailsSection>
</template>

<style scoped lang="scss"></style>
