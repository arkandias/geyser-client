import { reactive, readonly, ref, toRefs } from "vue";

import { PHASES } from "@/config/types/phases.ts";
import { ROLES, type Role } from "@/config/types/roles.ts";
import { usePhaseStore } from "@/stores/usePhaseStore.ts";

type Profile = {
  uid: string;
  displayname: string;
  active: boolean;
  roles: Role[];
};

const profile = reactive<Profile>({
  uid: "",
  displayname: "",
  active: false,
  roles: [ROLES.TEACHER],
});
const activeRole = ref<Role>(ROLES.TEACHER);
const loaded = ref(false);

const setActiveRole = (role: Role) => {
  if (profile.roles.includes(role)) {
    activeRole.value = role;
  } else {
    console.error(`Role not allowed: ${role}`);
  }
};

export const useProfileStore = () => {
  const { currentPhase } = usePhaseStore();

  const setProfile = (newProfile: Profile) => {
    Object.assign(profile, newProfile);

    if (profile.roles.includes(ROLES.ADMIN)) {
      activeRole.value = ROLES.ADMIN;
    } else if (
      profile.roles.includes(ROLES.COMMISSIONER) &&
      currentPhase.value === PHASES.ASSIGNMENTS
    ) {
      activeRole.value = ROLES.COMMISSIONER;
    } else {
      activeRole.value = ROLES.TEACHER;
    }

    loaded.value = true;
  };

  return {
    ...toRefs(readonly(profile)),
    activeRole: readonly(activeRole),
    loaded: readonly(loaded),
    setProfile,
    setActiveRole,
  };
};
