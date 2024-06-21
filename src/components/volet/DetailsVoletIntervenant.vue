<!-----------------------------------------------------------------------------
  - Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                   -
  - This file is part of Geyser.                                              -
  - Distributed under the GNU Affero General Public License, version 3.       -
  ----------------------------------------------------------------------------->

<script setup lang="ts">
import { computed, ComputedRef } from "vue";

import DetailsVoletIntervenantModifications from "@/components/volet/DetailsVoletIntervenantModifications.vue";
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
</script>

<template>
  <DetailsVoletIntervenantModifications
    :uid="intervenant.uid"
    :service-base
    :modifications
    :total-modifications
    :editable="perm.deModifierUnService(intervenant.uid)"
  />
</template>

<style scoped lang="scss"></style>
