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

export const isRequestType = (type: unknown): type is RequestType =>
  Object.values(REQUEST_TYPES).includes(type as RequestType);

export const getRequestType = (
  type: RequestType,
): keyof typeof REQUEST_TYPES => {
  const entry = Object.entries(REQUEST_TYPES).find(
    ([_, value]) => value === type,
  );
  if (!entry) {
    throw new Error(`Invalid request type '${type}'`);
  }
  return entry[0] as keyof typeof REQUEST_TYPES;
};

export const labelRequestType = (type: RequestType): string =>
  REQUEST_TYPE_METADATA[type].label;

export const orderRequestType = (type: RequestType): number =>
  REQUEST_TYPE_METADATA[type].order;
