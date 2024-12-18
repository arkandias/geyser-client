type TypeObject = Record<string, string>;
type MetadataObject<T extends string> = Record<
  T,
  { order: number; label: string }
>;

export const createTypeUtils = <T extends TypeObject>(
  TYPES: T,
  TYPE_METADATA: MetadataObject<T[keyof T]>,
) => {
  type Type = T[keyof T];

  const isType = (value: unknown): value is Type =>
    Object.values(TYPES).includes(value as Type);

  const getType = (type: Type): keyof T => {
    const entry = Object.entries(TYPES).find(([_, value]) => value === type);
    if (!entry) {
      throw new Error(`Invalid value '${type}' for the following type:`, TYPES);
    }
    return entry[0] as keyof T;
  };

  const labelType = (type: Type): string => TYPE_METADATA[type].label;

  const orderType = (type: Type): number => TYPE_METADATA[type].order;

  return {
    isType,
    getType,
    orderType,
    labelType,
  };
};
