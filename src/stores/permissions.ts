/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { ComputedRef, computed } from "vue";

import { Intervenant } from "@/helpers/types.ts";
import { useAnnees } from "@/stores/annees.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";

export const usePermissions = () => {
  const { enCoursActive: anneeEnCoursActive } = useAnnees();
  const { enCours: phaseEnCours } = usePhases();
  const { activeRole, uid: moi } = useAuthentication();
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
  const deModifierUnMessage: ComputedRef<
    (typeMessage: string, uid: string) => boolean
  > = computed(() => (typeMessage, uid) => {
    switch (typeMessage) {
      case "message_intervenant":
        return (
          activeRole.value === "admin" ||
          (activeRole.value === "intervenant" &&
            phaseEnCours.value === "voeux" &&
            anneeEnCoursActive.value &&
            uid === moi.value)
        );
      case "note_commission":
        return (
          activeRole.value === "admin" ||
          (activeRole.value === "commissaire" &&
            phaseEnCours.value === "commission" &&
            anneeEnCoursActive.value)
        );
      default:
        console.warn(`Type de message '${typeMessage}' inconnu`);
        return activeRole.value === "admin";
    }
  });
  const deVoirUnMessage: ComputedRef<
    (typeMessage: string, uid: string) => boolean
  > = computed(() => (typeMessage, uid) => {
    if (deModifierUnMessage.value(typeMessage, uid)) {
      return true;
    }
    switch (typeMessage) {
      case "message_intervenant":
        return (
          (activeRole.value === "commissaire" &&
            phaseEnCours.value === "commission") ||
          (activeRole.value === "intervenant" && uid === moi.value)
        );
      case "note_commission":
        return false;
      default:
        console.warn(`Type de message '${typeMessage}' inconnu`);
        return activeRole.value === "admin";
    }
  });
  const dAdministrer: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin",
  );
  return {
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
    dAdministrer,
  };
};
