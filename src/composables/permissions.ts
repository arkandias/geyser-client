import { computed, readonly } from "vue";

import { useAuthentication } from "@/composables/authentication.ts";
import { PHASES } from "@/config/types/phases.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { ROLES } from "@/config/types/roles.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYearsStore();
  const { currentPhase } = usePhaseStore();
  const { activeRole, profile } = useAuthentication();

  const toAdmin = computed(() => activeRole.value === ROLES.ADMIN);

  const toImpersonate = computed(() => toAdmin.value && import.meta.env.DEV);

  const toAccess = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (currentPhase.value !== PHASES.SHUTDOWN && profile.active),
  );

  const toSubmitRequestsForOthers = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toSubmitRequests = computed(
    () =>
      toSubmitRequestsForOthers.value ||
      (profile.active &&
        activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value),
  );

  const toAssignCourses = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toViewAssignments = computed(
    () =>
      toAssignCourses.value ||
      currentPhase.value === PHASES.RESULTS ||
      !isCurrentYearActive.value,
  );

  const toDeleteARequest = computed(
    () => (uid: string, requestType: string) => {
      switch (requestType) {
        case REQUEST_TYPES.ASSIGNMENT:
          return toAssignCourses.value;
        default:
          return uid === profile.uid
            ? toSubmitRequests.value
            : toSubmitRequestsForOthers.value;
      }
    },
  );

  const toEditADescription = computed(
    () => (coordinatorsIds: string[]) =>
      activeRole.value === ROLES.ADMIN ||
      (isCurrentYearActive.value && coordinatorsIds.includes(profile.uid)),
  );

  const toViewAllServices = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS),
  );

  const toViewAService = computed(
    () => (uid: string) =>
      toViewAllServices.value ||
      (activeRole.value === ROLES.USER && uid === profile.uid),
  );

  const toEditAService = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  const toEditAMessage = computed(
    () => (uid: string) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  const toViewAMessage = computed(
    () => (uid: string) =>
      toEditAMessage.value(uid) ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS) ||
      (activeRole.value === ROLES.USER && uid === profile.uid),
  );

  return readonly({
    toAdmin,
    toImpersonate,
    toAccess,
    toSubmitRequestsForOthers,
    toSubmitRequests,
    toViewAssignments,
    toAssignCourses,
    toDeleteARequest,
    toEditADescription,
    toViewAllServices,
    toViewAService,
    toEditAService,
    toViewAMessage,
    toEditAMessage,
  });
};
