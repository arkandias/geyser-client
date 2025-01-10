import { reactive, readonly, ref } from "vue";

import type { Role } from "@/config/types/roles.ts";
import type { Profile } from "@/types/user.ts";

type ProfileWithActive = Profile & { active: boolean };

const profile: ProfileWithActive = reactive({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const activeRole = ref<Role | null>(null);
const allowedRoles = ref<Role[]>([]);
const logout = ref(() => Promise.resolve());
const logged = ref(false);

const setActiveRole = (role: Role | null): void => {
  activeRole.value = role;
};

const login = (
  newProfile: ProfileWithActive,
  newDefaultRole?: Role,
  newAllowedRoles?: Role[],
  newLogout?: () => Promise<void>,
) => {
  Object.assign(profile, newProfile);
  if (newDefaultRole !== undefined) {
    activeRole.value = newDefaultRole;
  }
  if (newAllowedRoles !== undefined) {
    allowedRoles.value = newAllowedRoles;
  }
  if (newLogout !== undefined) {
    logout.value = async () => {
      logged.value = false;
      await newLogout();
    };
  }
  logged.value = true;
  console.debug("Logged in");
};

export const useAuthenticationStore = () => ({
  profile: readonly(profile),
  activeRole: readonly(activeRole),
  allowedRoles: readonly(allowedRoles),
  logout: readonly(logout),
  logged: readonly(logged),
  setActiveRole,
  login,
});
