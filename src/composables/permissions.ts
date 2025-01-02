import { type ComputedRef, computed, readonly } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { ROLES } from "@/config/types/roles.ts";
import { useAuthenticationStore } from "@/stores/authentication.ts";
import { usePhaseStore } from "@/stores/phase.ts";
import { useYearsStore } from "@/stores/years.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYearsStore();
  const { currentPhase } = usePhaseStore();
  const { activeRole, profile } = useAuthenticationStore();

  const toAdmin: ComputedRef<boolean> = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toAccess: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (currentPhase.value !== PHASES.SHUTDOWN && profile.active),
  );

  const toSubmitRequestsForOthers: ComputedRef<boolean> = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toSubmitRequests: ComputedRef<boolean> = computed(
    () =>
      toSubmitRequestsForOthers.value ||
      (profile.active &&
        activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value),
  );

  const toAssignCourses: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toViewAssignments: ComputedRef<boolean> = computed(
    () =>
      toAssignCourses.value ||
      currentPhase.value === PHASES.RESULTS ||
      !isCurrentYearActive.value,
  );

  const toDeleteARequest: ComputedRef<
    (request: { type: string; teacher: { uid: string } }) => boolean
  > = computed(() => (request) => {
    switch (request.type) {
      case REQUEST_TYPES.ASSIGNMENT:
        return toAssignCourses.value;
      default:
        return request.teacher.uid === profile.uid
          ? toSubmitRequests.value
          : toSubmitRequestsForOthers.value;
    }
  });

  const toEditADescription: ComputedRef<
    (coordinatorsIds: string[]) => boolean
  > = computed(
    () => (coordinatorsIds) =>
      activeRole.value === ROLES.ADMIN ||
      (isCurrentYearActive.value && coordinatorsIds.includes(profile.uid)),
  );

  const toViewAllServices: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS),
  );

  const toViewAService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      toViewAllServices.value ||
      (activeRole.value === ROLES.USER && uid === profile.uid),
  );

  const toEditAService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  const toEditAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === profile.uid),
  );

  const toViewAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      toEditAMessage.value(uid) ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS) ||
      (activeRole.value === ROLES.USER && uid === profile.uid),
  );

  return readonly({
    toAdmin,
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
