import { type ParseConfig, parse } from "papaparse";

export type FieldDescriptor = {
  type: "string" | "number" | "boolean";
  nullable?: boolean;
};

type ParsedField<T extends FieldDescriptor> = T["type"] extends "string"
  ? T["nullable"] extends true
    ? string | null
    : string
  : T["type"] extends "number"
    ? T["nullable"] extends true
      ? number | null
      : number
    : T["type"] extends "boolean"
      ? T["nullable"] extends true
        ? boolean | null
        : boolean
      : never;

export type ParsedObject<T extends Record<string, FieldDescriptor>> = {
  [K in keyof T]: ParsedField<T[K]>;
};

/**
 * Parses a string value into a strongly-typed field (string, number, or
 * boolean) based on the field descriptor. Handles nullable fields and trims
 * whitespace. Throws if value cannot be parsed into the specified type.
 */
export const parseField = <T extends FieldDescriptor>(
  str: string,
  descriptor: T,
): ParsedField<T> => {
  const trimmed = str.trim();
  if (!trimmed) {
    if (descriptor.nullable) {
      return null as ParsedField<T>;
    }
    throw new Error(`Non-nullable field is empty`);
  }
  switch (descriptor.type) {
    case "string":
      return trimmed as ParsedField<T>;
    case "number": {
      const num = Number(trimmed);
      if (Number.isNaN(num)) {
        throw new Error(`Not a number`);
      }
      return num as ParsedField<T>;
    }
    case "boolean": {
      switch (trimmed) {
        case "true":
          return true as ParsedField<T>;
        case "false":
          return false as ParsedField<T>;
        default:
          throw new Error("Boolean fields must be 'true' or 'false'");
      }
    }
    default:
      throw new Error(`Invalid type: ${descriptor.type as string}`);
  }
};

/**
 * Returns a parser function for PapaParse to transform CSV fields according to
 * their descriptors. Throws detailed error messages when parsing fails,
 * including the field name in the error.
 */
const transform =
  (descriptorObj: Record<string, FieldDescriptor>) =>
  (value: string, field: string | number): ParseConfig["transform"] => {
    console.log("TRANSFORM", value, field);
    const descriptor = descriptorObj[field];
    if (descriptor === undefined) {
      throw new Error(`Unknown field: ${String(field)}`);
    }
    try {
      return parseField(value, descriptor);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      throw new Error(
        `Error while parsing field '${String(field)}': ${message}`,
      );
    }
  };

/**
 * Parses CSV text into typed objects based on field descriptors.
 */
export const importCSV = <T extends Record<string, FieldDescriptor>>(
  text: string,
  descriptorObj: T,
): ParsedObject<T>[] => {
  const parseResult = parse(text, {
    delimiter: ",",
    header: true,
    skipEmptyLines: true,
    transform: transform(descriptorObj),
  });

  if (parseResult.errors.length) {
    const errorMessages = parseResult.errors.map((e) => e.message).join("; ");
    throw new Error(`Parse error: ${errorMessages}`);
  }

  const missingHeaders = Object.keys(descriptorObj).filter(
    (key) => !parseResult.meta.fields?.includes(key),
  );
  if (missingHeaders.length) {
    throw new Error(`Missing required headers: ${missingHeaders.join(", ")}`);
  }

  return parseResult.data as ParsedObject<T>[];
};
