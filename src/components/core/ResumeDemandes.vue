<script setup lang="ts">
import { nf } from "@/helpers/format.ts";
import { useDemandes } from "@/stores/demandes.ts";
import { TypeDemande } from "@/types/demandes.ts";

import TableService from "@/components/core/TableService.vue";

defineProps<{
  totauxDemandes: Record<TypeDemande, number>;
}>();

const { typesAffiches: typesDemandeAffiches } = useDemandes();
</script>

<template>
  <TableService>
    <tr
      v-for="typeDemande in typesDemandeAffiches"
      :key="TypeDemande[typeDemande].value"
    >
      <td>{{ TypeDemande[typeDemande].labelPlural }}</td>
      <td>{{ nf.format(totauxDemandes[typeDemande]) + " htd" }}</td>
    </tr>
  </TableService>
</template>

<style scoped lang="scss"></style>
