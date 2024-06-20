<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import VueSection from "@/components/core/VueSection.vue";
import { formatTypeDemandesTitre, nf } from "@/helpers/format.ts";
import { usePermissions } from "@/stores/permissions.ts";
import TableService from "@/components/core/TableService.vue";

defineProps<{
  totalAttributions: number;
  totalPrincipales: number;
  totalSecondaires: number;
}>();

const perm = usePermissions();
</script>

<template>
  <VueSection title="Demandes">
    <TableService>
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
    </TableService>
  </VueSection>
</template>

<style scoped lang="scss"></style>
