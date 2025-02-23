export const REQUEST_TYPES = {
  ASSIGNMENT: "assignment",
  PRIMARY: "primary",
  SECONDARY: "secondary",
} as const;

export type RequestType = (typeof REQUEST_TYPES)[keyof typeof REQUEST_TYPES];

export const isRequestType = (
  requestType: unknown,
): requestType is RequestType =>
  Object.values(REQUEST_TYPES).includes(requestType as RequestType);
