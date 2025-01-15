import { computed, readonly } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { PHASES } from "@/config/types/phases.ts";
import { ROLES } from "@/config/types/roles.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYearsStore();
  const { currentPhase } = usePhaseStore();
  const { activeRole, profile } = useAuthentication();

  const toAdmin = computed(() => activeRole.value === ROLES.ADMIN);

  const toAccess = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (currentPhase.value !== PHASES.SHUTDOWN && profile.active),
  );

  const toSubmitRequestsForSelf = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (profile.active &&
        activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value),
  );

  const toSubmitRequestsForOthers = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toSubmitRequests = computed(
    () => toSubmitRequestsForSelf.value || toSubmitRequestsForOthers.value,
  );

  const toDeleteRequests = computed(() => activeRole.value === ROLES.ADMIN);

  const toViewAssignments = computed(
    () =>
      toEditAssignments.value ||
      currentPhase.value === PHASES.RESULTS ||
      !isCurrentYearActive.value,
  );

  const toEditAssignments = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.ASSIGNER &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toEditADescription = computed(
    () => (coordinators: string[]) =>
      activeRole.value === ROLES.ADMIN ||
      (isCurrentYearActive.value && coordinators.includes(profile.uid)),
  );

  const toViewAllServices = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.ASSIGNER &&
        currentPhase.value === PHASES.ASSIGNMENTS),
  );

  const toEditAService = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  const toEditAMessage = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  return readonly({
    toAdmin,
    toAccess,
    toSubmitRequestsForSelf,
    toSubmitRequestsForOthers,
    toSubmitRequests,
    toDeleteRequests,
    toViewAssignments,
    toEditAssignments,
    toEditADescription,
    toViewAllServices,
    toEditAService,
    toEditAMessage,
  });
};
