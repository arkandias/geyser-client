import { type ComputedRef, computed, reactive } from "vue";

import { useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";
import { useYears } from "@/stores/years.ts";
import type { Profile } from "@/types/profile.ts";

export const usePermissions = () => {
  const { isCurrentActive: isCurrentYearActive } = useYears();
  const { current: phaseEnCours } = usePhases();
  const { activeRole, uid: moi } = useAuthentication();

  const dAdministrer: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin",
  );

  const dAcceder: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin" || phaseEnCours.value !== "fermeture",
  );

  const deFaireDesDemandesPourAutrui: ComputedRef<boolean> = computed(
    () => activeRole.value === "admin",
  );

  const deFaireDesDemandes: ComputedRef<boolean> = computed(
    () =>
      deFaireDesDemandesPourAutrui.value ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value === "voeux" &&
        isCurrentYearActive.value),
  );

  const deModifierLesAttributions: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === "admin" ||
      (activeRole.value === "commissaire" &&
        phaseEnCours.value === "commission" &&
        isCurrentYearActive.value),
  );

  const deVoirLesAttributions: ComputedRef<boolean> = computed(
    () =>
      deModifierLesAttributions.value ||
      phaseEnCours.value === "consultation" ||
      !isCurrentYearActive.value,
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
    (responsables: Profile[]) => boolean
  > = computed(
    () => (responsables) =>
      activeRole.value === "admin" ||
      (isCurrentYearActive.value &&
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
        isCurrentYearActive.value &&
        uid === moi.value),
  );

  const deModifierUnMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === "admin" ||
      (activeRole.value === "intervenant" &&
        phaseEnCours.value === "voeux" &&
        isCurrentYearActive.value &&
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
