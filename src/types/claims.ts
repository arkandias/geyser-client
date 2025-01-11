import type { Role } from "@/config/types/roles.ts";

export type HasuraClaims = {
  userId: string;
  defaultRole: Role;
  allowedRoles: Role[];
};

type XHasuraClaims<T extends string> = Record<
  T,
  {
    "x-hasura-user-id": string;
    "x-hasura-default-role": string;
    "x-hasura-allowed-roles": string[];
  }
>;

export const isXHasuraClaims = <T extends string>(
  namespace: T,
  claims: unknown,
): claims is XHasuraClaims<T> => {
  if (!claims || typeof claims !== "object" || !(namespace in claims)) {
    return false;
  }
  const namespaceClaims = (claims as Record<T, unknown>)[namespace];
  if (!namespaceClaims || typeof namespaceClaims !== "object") {
    return false;
  }
  return (
    "x-hasura-user-id" in namespaceClaims &&
    "x-hasura-default-role" in namespaceClaims &&
    "x-hasura-allowed-roles" in namespaceClaims &&
    typeof namespaceClaims["x-hasura-user-id"] === "string" &&
    typeof namespaceClaims["x-hasura-default-role"] === "string" &&
    Array.isArray(namespaceClaims["x-hasura-allowed-roles"]) &&
    namespaceClaims["x-hasura-allowed-roles"].every(
      (role) => typeof role === "string",
    )
  );
};
