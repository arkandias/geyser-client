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
  hidden?: boolean;
};

export type ParsedField<T extends FieldDescriptor> = T["nullable"] extends true
  ? PrimitiveTypeMap<T["type"]> | null
  : PrimitiveTypeMap<T["type"]>;

export type RowDescriptor = Record<string, FieldDescriptor>;

export type ParsedRow<T extends RowDescriptor> = {
  -readonly [K in keyof T]: ParsedField<T[K]>;
};

export type NullableParsedRow<T extends RowDescriptor> = {
  -readonly [K in keyof T]: ParsedField<T[K]> | null;
};

export type VisibleRowDescriptor<T extends RowDescriptor> = {
  [K in keyof T as T[K]["hidden"] extends true ? never : K]: T[K];
};

export type VisibleParsedRow<T extends RowDescriptor> = ParsedRow<
  VisibleRowDescriptor<T>
>;
