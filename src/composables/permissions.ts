import { type ComputedRef, computed, readonly } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { ROLES } from "@/config/types/roles.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhase } from "@/stores/phase.ts";
import { useYears } from "@/stores/years.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYears();
  const { currentPhase } = usePhase();
  const { activeRole, profile } = useAuthentication();

  const toAdmin: ComputedRef<boolean> = computed(
    () => activeRole === ROLES.ADMIN,
  );

  const toAccess: ComputedRef<boolean> = computed(
    () =>
      activeRole === ROLES.ADMIN ||
      (currentPhase !== PHASES.SHUTDOWN && profile.active),
  );

  const toSubmitRequestsForOthers: ComputedRef<boolean> = computed(
    () => activeRole === ROLES.ADMIN,
  );

  const toSubmitRequests: ComputedRef<boolean> = computed(
    () =>
      toSubmitRequestsForOthers.value ||
      (profile.active &&
        activeRole === ROLES.USER &&
        currentPhase === PHASES.REQUESTS &&
        isCurrentYearActive),
  );

  const toAssignCourses: ComputedRef<boolean> = computed(
    () =>
      activeRole === ROLES.ADMIN ||
      (activeRole === ROLES.COMMISSIONER &&
        currentPhase === PHASES.ASSIGNMENTS &&
        isCurrentYearActive),
  );

  const toViewAssignments: ComputedRef<boolean> = computed(
    () =>
      toAssignCourses.value ||
      currentPhase === PHASES.RESULTS ||
      !isCurrentYearActive,
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
      activeRole === ROLES.ADMIN ||
      (isCurrentYearActive && coordinatorsIds.includes(profile.uid)),
  );

  const toViewAllServices: ComputedRef<boolean> = computed(
    () =>
      activeRole === ROLES.ADMIN ||
      (activeRole === ROLES.COMMISSIONER &&
        currentPhase === PHASES.ASSIGNMENTS),
  );

  const toViewAService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      toViewAllServices.value ||
      (activeRole === ROLES.USER && uid === profile.uid),
  );

  const toEditAService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole === ROLES.ADMIN ||
      (activeRole === ROLES.USER &&
        currentPhase === PHASES.REQUESTS &&
        isCurrentYearActive &&
        uid === profile.uid),
  );

  const toEditAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole === ROLES.ADMIN ||
      (activeRole === ROLES.USER &&
        currentPhase === PHASES.REQUESTS &&
        isCurrentYearActive &&
        uid === profile.uid),
  );

  const toViewAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      toEditAMessage.value(uid) ||
      (activeRole === ROLES.COMMISSIONER &&
        currentPhase === PHASES.ASSIGNMENTS) ||
      (activeRole === ROLES.USER && uid === profile.uid),
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
