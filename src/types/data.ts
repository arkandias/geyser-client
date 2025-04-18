export type Scalar = string | number | boolean | null | undefined;
export type SimpleObject<T extends Scalar> = {
  [key: string]: T | SimpleObject<T>;
};

export type PrimitiveTypeName = "string" | "number" | "boolean";
export type PrimitiveTypeMap<T extends PrimitiveTypeName> = T extends "string"
  ? string
  : T extends "number"
    ? number
    : T extends "boolean"
      ? boolean
      : never;

export type FieldDescriptor = {
  type: PrimitiveTypeName;
  nullable?: boolean;
  info?: string;
};

export type RowDescriptor = Record<string, FieldDescriptor>;

export type ParsedField<T extends FieldDescriptor> = T["nullable"] extends true
  ? PrimitiveTypeMap<T["type"]> | null
  : PrimitiveTypeMap<T["type"]>;

export type ParsedRow<T extends RowDescriptor> = {
  -readonly [K in keyof T]?: ParsedField<T[K]> | null;
};

export type FieldDescriptorExtra<R extends SimpleObject<Scalar>> =
  FieldDescriptor & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field?: string | ((row: R) => any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    format?: (val: any, row: R) => any;
    numberFormat?: "decimal" | "decimalFixed";
  };

export type RowDescriptorExtra<R extends SimpleObject<Scalar>> = Record<
  string,
  FieldDescriptorExtra<R>
>;
