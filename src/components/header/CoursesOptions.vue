<script setup lang="ts">
import { type ComputedRef, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import { buttonColor } from "@/helpers/format.ts";
import { getValue } from "@/helpers/utils.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { useLayout } from "@/stores/layout.ts";

import MenuYear from "@/components/header/MenuYear.vue";

const router = useRouter();
const route = useRoute();

const { filtreIntervenants, toggleLeftPanel } = useLayout();
const { profile } = useAuthentication();

const isMyRowSelected: ComputedRef<boolean> = computed(
  () => profile.active && getValue(route.query, "uid") === profile.uid,
);

const toggleMyRow = async () => {
  if (isMyRowSelected.value) {
    await router.replace({
      query: { ...route.query, uid: undefined },
    });
  } else {
    await router.replace({
      query: { ...route.query, uid: profile.uid },
    });
  }
};
</script>

<template>
  <QIcon name="sym_s_chevron_right" />
  <MenuYear />
  <QBtn
    icon="sym_s_vertical_split"
    :color="buttonColor(filtreIntervenants)"
    flat
    square
    @click="toggleLeftPanel"
  >
    <QTooltip>Filtre intervenants</QTooltip>
  </QBtn>
  <QBtn
    icon="sym_s_assignment"
    :color="buttonColor(isMyRowSelected)"
    :disable="!profile.active"
    flat
    square
    @click="toggleMyRow"
  >
    <QTooltip>Mes demandes</QTooltip>
  </QBtn>
</template>

<style scoped lang="scss"></style>
