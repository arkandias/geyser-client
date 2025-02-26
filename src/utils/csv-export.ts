import { unparse } from "papaparse";

import type { Scalar, SimpleObject } from "@/types/admin-data.ts";
import { toSlug } from "@/utils/misc.ts";

const flattenSimpleObjectEntries = <T extends Scalar>(
  fields: string | SimpleObject<string>,
  obj: T | SimpleObject<T> | undefined,
): [string, T | SimpleObject<T> | undefined][] =>
  typeof fields === "string"
    ? [[fields, obj]]
    : Object.entries(fields).flatMap(([key, value]) =>
        flattenSimpleObjectEntries<T>(
          value,
          typeof obj === "object" && obj !== null ? obj[key] : undefined,
        ),
      );

export const flattenSimpleObject = <T extends Scalar>(
  fields: SimpleObject<string>,
  obj: SimpleObject<T>,
) => Object.fromEntries(flattenSimpleObjectEntries<T>(fields, obj));

export const downloadCSV = (
  filename: string,
  rows: Record<string, Scalar>[],
): void => {
  const BOM = "\uFEFF"; // Byte Order Mark
  const csv = unparse(rows, { newline: "\n" });
  const blob = new Blob([BOM + csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.download = toSlug(filename) + ".csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
