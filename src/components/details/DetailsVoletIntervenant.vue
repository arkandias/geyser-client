<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import ResumeDemandes from "@/components/core/ResumeDemandes.vue";
import ServiceIntervenant from "@/components/core/ServiceIntervenant.vue";
import DetailsSubsection from "@/components/details/DetailsSubsection.vue";
import { Modification, RowIntervenant } from "@/helpers/types.ts";
import { usePermissions } from "@/stores/permissions.ts";

const props = defineProps<{ intervenant: RowIntervenant }>();

const perm = usePermissions();

const serviceBase: ComputedRef<number> = computed(
  () => props.intervenant.services[0]?.heuresEQTD ?? 0,
);
const modifications: ComputedRef<Modification[]> = computed(
  () => props.intervenant.modifications,
);
const totalModifications: ComputedRef<number> = computed(
  () => props.intervenant.totalModifications.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalAttributions: ComputedRef<number> = computed(
  () => props.intervenant.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalPrincipales: ComputedRef<number> = computed(
  () => props.intervenant.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0,
);
const totalSecondaires: ComputedRef<number> = computed(
  () => props.intervenant.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0,
);
</script>

<template>
  <DetailsSubsection title="Service">
    <ServiceIntervenant
      :uid="intervenant.uid"
      :service-base
      :modifications
      :total-modifications
      :editable="perm.deModifierUnService(intervenant.uid)"
    />
  </DetailsSubsection>
  <DetailsSubsection title="Demandes">
    <ResumeDemandes :total-attributions :total-principales :total-secondaires />
  </DetailsSubsection>
</template>

<style scoped lang="scss"></style>
