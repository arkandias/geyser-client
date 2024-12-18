export type Profile = {
  uid: string;
  lastname: string;
  firstname: string;
  alias: string | null;
};

export const isProfile = (profile: unknown): profile is Profile => {
  if (typeof profile !== "object" || profile === null) {
    return false;
  }
  return (
    "uid" in profile &&
    "lastname" in profile &&
    "firstname" in profile &&
    "alias" in profile &&
    typeof profile.uid === "string" &&
    typeof profile.lastname === "string" &&
    typeof profile.firstname === "string" &&
    (profile.alias === null || typeof profile.alias === "string")
  );
};
