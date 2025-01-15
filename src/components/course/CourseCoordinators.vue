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
  fragment CourseCoordinators on Course {
    coordinations(
      orderBy: [{ teacher: { lastname: ASC } }, { teacher: { firstname: ASC } }]
    ) {
      teacher {
        firstname
        lastname
        alias
      }
      comment
    }
    program {
      coordinations(
        orderBy: [
          { teacher: { lastname: ASC } }
          { teacher: { firstname: ASC } }
        ]
      ) {
        teacher {
          firstname
          lastname
          alias
        }
        comment
      }
    }
    track {
      coordinations(
        orderBy: [
          { teacher: { lastname: ASC } }
          { teacher: { firstname: ASC } }
        ]
      ) {
        teacher {
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
const courseCoordinators = computed(() => data.value.coordinations);
const programCoordinators = computed(() => data.value.program.coordinations);
const trackCoordinators = computed(() => data.value.track?.coordinations ?? []);

// Helpers
type Coordinator = ArrayElement<CourseCoordinatorsFragment["coordinations"]>;

const formatCoordinators = (coordinators: Coordinator[]) =>
  coordinators
    .map(
      ({ teacher, comment }) =>
        formatUser(teacher) + (comment ? ` (${comment})` : ""),
    )
    .join(", ");
</script>

<template>
  <DetailsSubsection title="Responsables">
    <div v-if="programCoordinators.length">
      Responsable{{ programCoordinators.length > 1 ? "s" : "" }} de la mention :
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
