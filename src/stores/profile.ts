import { type Client, useClientHandle } from "@urql/vue";
import { computed, reactive, readonly, ref } from "vue";

import { ROLES, type Role, isRole } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import { GetUserProfileDocument } from "@/gql/graphql.ts";
import { NotifyType, notify } from "@/utils/notify.ts";

graphql(`
  query GetUserProfile($uid: String!) {
    profile: teacherByPk(uid: $uid) {
      uid
      firstname
      lastname
      alias
      active
      roles {
        type
      }
    }
  }
`);

type Profile = {
  uid: string;
  firstname: string;
  lastname: string;
  alias?: string | null;
  active: boolean;
};

const profile = reactive<Profile>({
  uid: "",
  firstname: "",
  lastname: "",
  alias: null,
  active: false,
});
const roles = ref<Role[]>([]);
const activeRole = ref<Role>(ROLES.TEACHER);

const isActive = computed(() => profile.active);

const setProfile = (newProfile: Profile) => {
  Object.assign(profile, newProfile);
};
const setRoles = (newRoles: Role[]) => {
  roles.value = [...newRoles];
};

const loaded = ref(false);
const fetching = ref(false);

const fetchProfile = (client: Client) => async (uid: string) => {
  fetching.value = true;
  const result = await client.query(
    GetUserProfileDocument,
    { uid },
    {
      requestPolicy: "network-only",
    },
  );
  if (result.data?.profile) {
    setProfile(result.data.profile);
    setRoles(
      result.data.profile.roles
        .map((role) => role.type)
        .filter((role) => isRole(role))
        .concat(ROLES.TEACHER),
    );

    // Log invalid roles (if any)
    const invalidRoles = result.data.profile.roles
      .map((role) => role.type)
      .filter((role) => !isRole(role));
    if (invalidRoles.length > 0) {
      console.error("Invalid roles:", invalidRoles);
    }

    notify(NotifyType.SUCCESS, {
      message: "Profil trouvé",
    });
    loaded.value = true;
  } else {
    notify(NotifyType.ERROR, {
      message: "Profil non trouvé",
    });
    loaded.value = false;
  }
  fetching.value = false;
};

const setActiveRole = (role: Role) => {
  if (roles.value.includes(role)) {
    activeRole.value = role;
  }
};

// Impersonating
const isImpersonating = ref(false);
const profileSaved = reactive<Profile>({ ...profile });
const rolesSaved = ref<Role[]>([]);
const activeRoleSaved = ref<Role>(ROLES.TEACHER);

const impersonate = (client: Client) => async (uid: string) => {
  if (!isImpersonating.value) {
    Object.assign(profileSaved, profile);
    rolesSaved.value = [...roles.value];
    activeRoleSaved.value = activeRole.value;
  }
  await fetchProfile(client)(uid);
  setActiveRole(ROLES.TEACHER);
  isImpersonating.value = true;
};

const stopImpersonating = () => {
  if (isImpersonating.value) {
    setProfile(profileSaved);
    setRoles(rolesSaved.value);
    setActiveRole(activeRoleSaved.value);
    isImpersonating.value = false;
  }
};

export const useProfileStore = () => {
  const client = useClientHandle().client;
  return {
    profile: readonly(profile),
    roles: readonly(roles),
    activeRole: readonly(activeRole),
    setActiveRole,
    isActive,
    loaded: readonly(loaded),
    fetching: readonly(fetching),
    fetchProfile: fetchProfile(client),
    isImpersonating: readonly(isImpersonating),
    impersonate: impersonate(client),
    stopImpersonating,
  };
};
