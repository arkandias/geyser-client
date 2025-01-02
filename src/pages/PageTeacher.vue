<script setup lang="ts">
import { useQueryParam } from "@/composables/query-param.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import { useYearsStore } from "@/stores/years.ts";

import DetailsTeacher from "@/components/DetailsTeacher.vue";

defineProps<Record<never, never>>();

const { activeYear } = useYearsStore();
const { profile } = useAuthenticationStore();
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
