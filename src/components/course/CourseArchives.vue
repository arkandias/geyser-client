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
  fragment CourseArchives on Course {
    parent {
      year
      requests(
        where: { type: { _eq: "assignment" } }
        orderBy: [
          { service: { teacher: { lastname: ASC } } }
          { service: { teacher: { firstname: ASC } } }
        ]
      ) {
        id
        ...RequestCardData
      }
      parent {
        year
        requests(
          where: { type: { _eq: "assignment" } }
          orderBy: [
            { service: { teacher: { lastname: ASC } } }
            { service: { teacher: { firstname: ASC } } }
          ]
        ) {
          id
          ...RequestCardData
        }
        parent {
          year
          requests(
            where: { type: { _eq: "assignment" } }
            orderBy: [
              { service: { teacher: { lastname: ASC } } }
              { service: { teacher: { firstname: ASC } } }
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
  ].filter((a) => !!a);
});
</script>

<template>
  <DetailsSection title="Archives">
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
