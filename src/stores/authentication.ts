import { type Ref, reactive, readonly, ref } from "vue";

import type { Role } from "@/config/types/roles.ts";
import type { Profile } from "@/types/profile.ts";

export const activeRole: Ref<Role | null> = ref(null);

const logged: Ref<boolean> = ref(false);
const profile: Profile = reactive({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const allowedRoles: Ref<Role[]> = ref([]);
const logout: Ref<() => Promise<void>> = ref(() => Promise.resolve());

export const login = (
  newProfile: Profile,
  newAllowedRoles: Role[],
  newDefaultRole: Role,
  newLogout: () => Promise<void>,
): void => {
  allowedRoles.value = newAllowedRoles;
  activeRole.value = newDefaultRole;
  profile.uid = newProfile.uid;
  profile.firstname = newProfile.firstname;
  profile.lastname = newProfile.lastname;
  profile.alias = newProfile.alias;
  profile.active = newProfile.active;
  logout.value = async () => {
    logged.value = false;
    await newLogout();
  };
  logged.value = true;
  console.debug("Logged in");
};

export const useAuthentication = () => ({
  logged: readonly(logged),
  profile: readonly(profile),
  allowedRoles: readonly(allowedRoles),
  activeRole: readonly(activeRole),
  logout: readonly(logout),
});
