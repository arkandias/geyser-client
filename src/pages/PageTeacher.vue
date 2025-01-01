<script setup lang="ts">
import { useQueryParam } from "@/composables/query-param.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useYears } from "@/stores/years.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

const { activeYear } = useYears();
const { profile } = useAuthentication();
const { getValue: uid } = useQueryParam("uid");
</script>

<template>
  <QPage>
    <QCard flat square class="column items-center">
      <DetailsTeacher
        v-if="activeYear !== null"
        :year="activeYear"
        :uid="uid ?? profile.uid"
      />
    </QCard>
  </QPage>
</template>

<style scoped lang="scss">
:deep(.displayed-text) {
  max-width: $teacher-message-max-width;
}
</style>
