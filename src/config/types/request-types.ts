export const REQUEST_TYPES = {
  ASSIGNMENT: "attribution",
  PRIMARY: "principale",
  SECONDARY: "secondaire",
} as const;

export const REQUEST_TYPE_METADATA = {
  [REQUEST_TYPES.ASSIGNMENT]: { order: 1, label: "Attribution" },
  [REQUEST_TYPES.PRIMARY]: { order: 2, label: "Demande principale" },
  [REQUEST_TYPES.SECONDARY]: { order: 3, label: "Demande secondaire" },
} as const;

export type RequestType = (typeof REQUEST_TYPES)[keyof typeof REQUEST_TYPES];

export const isRequestType = (
  requestType: unknown,
): requestType is RequestType =>
  Object.values(REQUEST_TYPES).includes(requestType as RequestType);
