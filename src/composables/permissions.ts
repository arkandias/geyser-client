import { type ComputedRef, computed, reactive } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { REQUEST_TYPES } from "@/config/types/request-types.ts";
import { ROLES } from "@/config/types/roles.ts";
import { useAuthentication } from "@/stores/authentication.ts";
import { usePhases } from "@/stores/phases.ts";
import { useYears } from "@/stores/years.ts";
import type { Profile } from "@/types/profile.ts";
import type { RequestDetails } from "@/types/request.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYears();
  const { currentPhase } = usePhases();
  const { activeRole, uid: moi } = useAuthentication();

  const toAdmin: ComputedRef<boolean> = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toAccess: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      currentPhase.value !== PHASES.SHUTDOWN,
  );

  const toSubmitRequestsForOthers: ComputedRef<boolean> = computed(
    () => activeRole.value === ROLES.ADMIN,
  );

  const toSubmitRequests: ComputedRef<boolean> = computed(
    () =>
      toSubmitRequestsForOthers.value ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value),
  );

  const toEditAssignments: ComputedRef<boolean> = computed(
    () =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toViewAssignments: ComputedRef<boolean> = computed(
    () =>
      toEditAssignments.value ||
      currentPhase.value === PHASES.RESULTS ||
      !isCurrentYearActive.value,
  );

  const toDeleteARequest: ComputedRef<(details: RequestDetails) => boolean> =
    computed(() => (details) => {
      switch (details.type) {
        case REQUEST_TYPES.ASSIGNMENT:
          return toEditAssignments.value;
        default:
          return details.teacher.uid === moi.value
            ? toSubmitRequests.value
            : toSubmitRequestsForOthers.value;
      }
    });

  const toEditADescription: ComputedRef<(responsables: Profile[]) => boolean> =
    computed(
      () => (responsables) =>
        activeRole.value === ROLES.ADMIN ||
        (isCurrentYearActive.value &&
          responsables.some((responsable) => responsable.uid === moi.value)),
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
      (activeRole.value === ROLES.USER && uid === moi.value),
  );

  const toEditAService: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === moi.value),
  );

  const toEditAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      activeRole.value === ROLES.ADMIN ||
      (activeRole.value === ROLES.USER &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === moi.value),
  );

  const toViewAMessage: ComputedRef<(uid: string) => boolean> = computed(
    () => (uid) =>
      toEditAMessage.value(uid) ||
      (activeRole.value === ROLES.COMMISSIONER &&
        currentPhase.value === PHASES.ASSIGNMENTS) ||
      (activeRole.value === ROLES.USER && uid === moi.value),
  );

  return reactive({
    toAdmin,
    toAccess,
    toSubmitRequestsForOthers,
    toSubmitRequests,
    toViewAssignments,
    toEditAssignments,
    toDeleteARequest,
    toEditADescription,
    toViewAllServices,
    toViewAService,
    toEditAService,
    toViewAMessage,
    toEditAMessage,
  });
};
