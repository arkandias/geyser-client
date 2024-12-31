<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { getNumber, getValue } from "@/helpers/query-params.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

const route = useRoute();
const { currentYear } = useYears();
const { profile } = useAuthentication();

const year = computed(() => getNumber(route.query, "year") ?? currentYear);
const uid = computed(() => getValue(route.query, "uid") ?? profile.uid);
</script>

<template>
  <QPage>
    <QCard flat square class="column items-center">
      <DetailsTeacher v-if="year !== null" :year :uid />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
:deep(.displayed-text) {
  max-width: $teacher-message-max-width;
}
</style>
