<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import ServiceSection from "@/components/service/ServiceSection.vue";
import { formatTypeDemandesTitre, nf } from "@/helpers/format.ts";
import { usePermissions } from "@/stores/permissions.ts";

defineProps<{
  totalAttributions: number;
  totalPrincipales: number;
  totalSecondaires: number;
}>();

const perm = usePermissions();
</script>

<template>
  <ServiceSection title="Demandes">
    <table>
      <tr v-if="perm.deVoirLesAttributions.value">
        <td>{{ formatTypeDemandesTitre("attribution") }}</td>
        <td>{{ nf.format(totalAttributions) + " htd" }}</td>
      </tr>
      <tr>
        <td>{{ formatTypeDemandesTitre("principale") }}</td>
        <td>{{ nf.format(totalPrincipales) + " htd" }}</td>
      </tr>
      <tr>
        <td>{{ formatTypeDemandesTitre("secondaire") }}</td>
        <td>{{ nf.format(totalSecondaires) + " htd" }}</td>
      </tr>
    </table>
  </ServiceSection>
</template>

<style scoped lang="scss">
table {
  width: 100%;
  border-spacing: 8px;
}
td:first-child {
  text-align: start;
}
td:nth-child(2) {
  text-align: end;
}
.q-select {
  margin-left: 8px;
}
</style>
