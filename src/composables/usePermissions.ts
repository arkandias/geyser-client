import { computed, readonly } from "vue";

import { useService } from "@/composables/useService.ts";
import { PHASES } from "@/config/types/phases.ts";
import { ROLES } from "@/config/types/roles.ts";
import { usePhaseStore } from "@/stores/usePhaseStore.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYearsStore();
  const { currentPhase } = usePhaseStore();
  const { uid: myUid, activeRole } = useProfileStore();
  const { hasService } = useService();

  const toAdmin = computed(() => activeRole.value === ROLES.ADMIN);

  const toSubmitRequestsForSelf = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        hasService.value),
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
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toEditPriorities = computed(() => activeRole.value === ROLES.ADMIN);

  const toEditADescription = computed(
    () => (coordinators: string[]) =>
      activeRole.value === ROLES.ADMIN ||
      (isCurrentYearActive.value && coordinators.includes(myUid.value)),
  );

  const toViewAllServices = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS),
  );

  const toEditAService = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === myUid.value),
  );

  const toEditAMessage = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.TEACHER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === myUid.value),
  );

  return readonly({
    toAdmin,
    toSubmitRequestsForSelf,
    toSubmitRequestsForOthers,
    toSubmitRequests,
    toDeleteRequests,
    toViewAssignments,
    toEditAssignments,
    toEditPriorities,
    toEditADescription,
    toViewAllServices,
    toEditAService,
    toEditAMessage,
  });
};
