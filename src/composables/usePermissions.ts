import { computed, readonly } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { RoleTypeEnum } from "@/gql/graphql.ts";
import { usePhaseStore } from "@/stores/usePhaseStore.ts";
import { useProfileStore } from "@/stores/useProfileStore.ts";
import { useYearsStore } from "@/stores/useYearsStore.ts";

export const usePermissions = () => {
  const { isCurrentYearActive } = useYearsStore();
  const { currentPhase } = usePhaseStore();
  const { uid: myUid, activeRole, hasService } = useProfileStore();

  const toAdmin = computed(() => activeRole.value === RoleTypeEnum.Admin);

  const toSubmitRequestsForSelf = computed(
    () =>
      activeRole.value === RoleTypeEnum.Admin ||
      (activeRole.value === RoleTypeEnum.Teacher &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        hasService.value),
  );

  const toSubmitRequestsForOthers = computed(
    () => activeRole.value === RoleTypeEnum.Admin,
  );

  const toSubmitRequests = computed(
    () => toSubmitRequestsForSelf.value || toSubmitRequestsForOthers.value,
  );

  const toDeleteRequests = computed(
    () => activeRole.value === RoleTypeEnum.Admin,
  );

  const toViewAssignments = computed(
    () =>
      toEditAssignments.value ||
      currentPhase.value === PHASES.RESULTS ||
      !isCurrentYearActive.value,
  );

  const toEditAssignments = computed(
    () =>
      activeRole.value === RoleTypeEnum.Admin ||
      (activeRole.value === RoleTypeEnum.Commissioner &&
        currentPhase.value === PHASES.ASSIGNMENTS &&
        isCurrentYearActive.value),
  );

  const toEditPriorities = computed(
    () => activeRole.value === RoleTypeEnum.Admin,
  );

  const toEditADescription = computed(
    () => (coordinators: string[]) =>
      activeRole.value === RoleTypeEnum.Admin ||
      (isCurrentYearActive.value && coordinators.includes(myUid.value)),
  );

  const toViewAllServices = computed(
    () =>
      activeRole.value === RoleTypeEnum.Admin ||
      (activeRole.value === RoleTypeEnum.Commissioner &&
        currentPhase.value === PHASES.ASSIGNMENTS),
  );

  const toEditAService = computed(
    () => (uid: string) =>
      activeRole.value === RoleTypeEnum.Admin ||
      (activeRole.value === RoleTypeEnum.Teacher &&
        currentPhase.value === PHASES.REQUESTS &&
        isCurrentYearActive.value &&
        uid === myUid.value),
  );

  const toEditAMessage = computed(
    () => (uid: string) =>
      activeRole.value === RoleTypeEnum.Admin ||
      (activeRole.value === RoleTypeEnum.Teacher &&
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
