/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import type { ComputedRef } from "vue";
import { computed, reactive } from "vue";

import type { Intervenant } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";

export const usePermissions = () => {
  const { enCoursActive: anneeEnCoursActive } = useAnnees();
  const { enCours: phaseEnCours } = usePhases();
  const { activeRole, uid: moi } = useAuthentication();
  const dAdministrer: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin",
  );
  const dAcceder: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === "admin" ||
      (activeRole.value === "commissaire" &&
        phaseEnCours.value === "commission") ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value !== "fermeture"),
  );
  const deFaireDesDemandesPourAutrui: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin",
  );
  const deFaireDesDemandes: ComputedRef<boolean> = computed(
    () =>
      deFaireDesDemandesPourAutrui.value ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value === "voeux" &&
        anneeEnCoursActive.value),
  );
  const deModifierLesAttributions: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === "admin" ||
      (activeRole.value === "commissaire" &&
        phaseEnCours.value === "commission" &&
        anneeEnCoursActive.value),
  );
  const deVoirLesAttributions: ComputedRef<boolean> = computed(
    () =>
      deModifierLesAttributions.value ||
      phaseEnCours.value === "consultation" ||
      !anneeEnCoursActive.value,
  );
  const deSupprimerUneDemande: ComputedRef<
    (typeDemande: string, uid: string) => boolean
  > = computed(() => (typeDemande, uid) => {
    switch (typeDemande) {
      case "attribution":
        return deModifierLesAttributions.value;
      case "principale":
      case "secondaire":
        return uid === moi.value
          ? deFaireDesDemandes.value
          : deFaireDesDemandesPourAutrui.value;
      default:
        console.warn(`Type de demande '${typeDemande}' inconnu`);
        return activeRole.value === "admin";
    }
  });
  const deModifierUneDescription: ComputedRef<
    (responsables: Intervenant[]) => boolean
  > = computed(
    () => (responsables) =>
      activeRole.value === "admin" ||
      (anneeEnCoursActive.value &&
        responsables.some((responsable) => responsable.uid === moi.value)),
  );
  const deVoirLeServiceDAutrui: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === "admin" ||
      (activeRole.value === "commissaire" &&
        phaseEnCours.value === "commission"),
  );
  const deVoirUnService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      deVoirLeServiceDAutrui.value ||
      (activeRole.value === "intervenant" && uid === moi.value),
  );
  const deModifierUnService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === "admin" ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value === "voeux" &&
        anneeEnCoursActive.value &&
        uid === moi.value),
  );
  const deModifierUnMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === "admin" ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value === "voeux" &&
        anneeEnCoursActive.value &&
        uid === moi.value),
  );
  const deVoirUnMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      deModifierUnMessage.value(uid) ||
      (activeRole.value === "commissaire" &&
        phaseEnCours.value === "commission") ||
      (activeRole.value === "intervenant" && uid === moi.value),
  );
  return reactive({
    dAdministrer,
    dAcceder,
    deFaireDesDemandesPourAutrui,
    deFaireDesDemandes,
    deVoirLesAttributions,
    deModifierLesAttributions,
    deSupprimerUneDemande,
    deModifierUneDescription,
    deVoirLeServiceDAutrui,
    deVoirUnService,
    deModifierUnService,
    deVoirUnMessage,
    deModifierUnMessage,
  });
};
