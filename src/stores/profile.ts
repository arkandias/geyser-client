import { useQuery } from "@urql/vue";
import { computed, reactive, readonly, ref } from "vue";

import { ROLES, type Role, isRole } from "@/config/types/roles.ts";
import { graphql } from "@/gql";
import { GetUserProfileDocument } from "@/gql/graphql.ts";
import { i18n } from "@/services/i18n.ts";
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

const { t } = i18n.global;

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

const fetchProfile = async (uid: string) => {
  fetching.value = true;
  const profile = await useQuery({
    query: GetUserProfileDocument,
    variables: { uid },
    context: { requestPolicy: "network-only" },
  }).then((result) => result.data.value?.profile ?? null);
  if (profile) {
    setProfile(profile);
    setRoles(
      profile.roles
        .map((role) => role.type)
        .filter((role) => isRole(role))
        .concat(ROLES.TEACHER),
    );
    if (roles.value.includes(ROLES.ADMIN)) {
      activeRole.value = ROLES.ADMIN;
    }

    // Log invalid roles (if any)
    const invalidRoles = profile.roles
      .map((role) => role.type)
      .filter((role) => !isRole(role));
    if (invalidRoles.length) {
      console.error(`Invalid roles: ${invalidRoles.join(", ")}`);
    }

    notify(NotifyType.SUCCESS, {
      message: t("profile.status.found"),
    });
    loaded.value = true;
  } else {
    notify(NotifyType.ERROR, {
      message: t("profile.status.not_found"),
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

const impersonate = async (uid: string) => {
  if (!isImpersonating.value) {
    Object.assign(profileSaved, profile);
    rolesSaved.value = [...roles.value];
    activeRoleSaved.value = activeRole.value;
  }
  await fetchProfile(uid);
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

export const useProfileStore = () => ({
  profile: readonly(profile),
  roles: readonly(roles),
  activeRole: readonly(activeRole),
  setActiveRole,
  isActive,
  loaded: readonly(loaded),
  fetching: readonly(fetching),
  fetchProfile,
  isImpersonating: readonly(isImpersonating),
  impersonate,
  stopImpersonating,
});
