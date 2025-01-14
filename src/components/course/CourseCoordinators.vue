<script setup lang="ts">
import { computed } from "vue";

import { type FragmentType, graphql, useFragment } from "@/gql";
import {
  type CourseCoordinatorsFragment,
  CourseCoordinatorsFragmentDoc,
} from "@/gql/graphql.ts";
import type { ArrayElement } from "@/types/misc.ts";
import { formatUser } from "@/utils/format.ts";

import DetailsSubsection from "@/components/core/DetailsSubsection.vue";

const { dataFragment } = defineProps<{
  dataFragment: FragmentType<typeof CourseCoordinatorsFragmentDoc>;
}>();

graphql(`
  fragment CourseCoordinators on course {
    coordinators(
      order_by: [
        { teacher: { lastname: asc } }
        { teacher: { firstname: asc } }
      ]
    ) {
      username: teacher {
        firstname
        lastname
        alias
      }
      comment
    }
    program {
      coordinators(
        order_by: [
          { teacher: { lastname: asc } }
          { teacher: { firstname: asc } }
        ]
      ) {
        username: teacher {
          firstname
          lastname
          alias
        }
        comment
      }
    }
    track {
      coordinators(
        order_by: [
          { teacher: { lastname: asc } }
          { teacher: { firstname: asc } }
        ]
      ) {
        username: teacher {
          firstname
          lastname
          alias
        }
        comment
      }
    }
  }
`);

const data = computed(() =>
  useFragment(CourseCoordinatorsFragmentDoc, dataFragment),
);
const courseCoordinators = computed(() => data.value.coordinators);
const programCoordinators = computed(() => data.value.program.coordinators);
const trackCoordinators = computed(() => data.value.track?.coordinators ?? []);

// Helpers
type Coordinator = ArrayElement<CourseCoordinatorsFragment["coordinators"]>;

const formatCoordinators = (coordinators: Coordinator[]) =>
  coordinators
    .map(
      ({ username, comment }) =>
        formatUser(username) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");
</script>

<template>
  <DetailsSubsection title="Responsables">
    <div v-if="programCoordinators.length">
      Responsable{{ programCoordinators.length > 1 ? "s" : "" }} de la program :
      {{ formatCoordinators(programCoordinators) }}
    </div>
    <div v-if="trackCoordinators.length">
      Responsable{{ trackCoordinators.length > 1 ? "s" : "" }} du parcours :
      {{ formatCoordinators(trackCoordinators) }}
    </div>
    <div v-if="courseCoordinators.length">
      Responsable{{ courseCoordinators.length > 1 ? "s" : "" }} de l'UE :
      {{ formatCoordinators(courseCoordinators) }}
    </div>
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
