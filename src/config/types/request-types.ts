export const REQUEST_TYPES = {
  ASSIGNMENT: "assignment",
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

// todo: remove
export const REQUEST_TYPE_OPTIONS = [
  { value: REQUEST_TYPES.ASSIGNMENT, label: "Attribution" },
  { value: REQUEST_TYPES.PRIMARY, label: "Principale" },
  { value: REQUEST_TYPES.SECONDARY, label: "Secondaire" },
] as const;

export type RequestType = (typeof REQUEST_TYPES)[keyof typeof REQUEST_TYPES];

export const isRequestType = (
  requestType: unknown,
): requestType is RequestType =>
  Object.values(REQUEST_TYPES).includes(requestType as RequestType);
