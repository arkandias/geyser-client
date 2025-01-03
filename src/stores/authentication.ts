import { reactive, readonly, ref } from "vue";

import type { Role } from "@/config/types/roles.ts";
import type { UserName } from "@/helpers/user.ts";

type Profile = UserName & {
  uid: string;
  active: boolean;
};

const profile: Profile = reactive({
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
  newProfile: Profile,
  newDefaultRole: Role,
  newAllowedRoles: Role[],
  newLogout: () => Promise<void>,
) => {
  Object.assign(profile, newProfile);
  activeRole.value = newDefaultRole;
  allowedRoles.value = newAllowedRoles;
  logout.value = async () => {
    logged.value = false;
    await newLogout();
  };
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
