import { type UnparseConfig, unparse } from "papaparse";

import type { Header, Scalar, SimpleObject } from "@/types/csv-data.ts";
import { toSlug } from "@/utils/misc.ts";

/**
 * Recursively flattens a nested object into a single-level object with
 * dot-notation keys (e.g., { a: { b: 1 } } becomes { "a.b": 1 }).
 */
export const flattenSimpleObject = (
  obj: SimpleObject,
  prefix = "",
): Record<string, Scalar> => {
  return Object.entries(obj).reduce<Record<string, Scalar>>(
    (acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        // value is not a Scalar
        return {
          ...acc,
          ...flattenSimpleObject(value, prefix + key + "."),
        };
      }
      // value is a Scalar
      return { ...acc, [prefix + key]: value };
    },
    {},
  );
};

/**
 * Converts an array of objects into a CSV string with specified headers.
 * Throws if any required fields are missing from the input objects.
 */
export const dataArrayToCSV = (
  data: SimpleObject[],
  headers: Header[] = [],
): string => {
  const processedData = data.map((obj) => {
    const flatObj = flattenSimpleObject(obj);

    if (!headers.length) {
      return flatObj;
    }

    // Transform keys using header labels and return entry
    return Object.fromEntries(
      headers.map((h) =>
        typeof h === "string" ? [h, flatObj[h]] : [h.label, flatObj[h.key]],
      ),
    );
  });

  const config: UnparseConfig = {
    newline: "\n",
  };

  if (headers.length) {
    config.columns = headers.map((h) => (typeof h === "string" ? h : h.label));
  }

  return unparse(processedData, config);
};

/**
 * Creates and triggers download of a CSV file from given data, with specified
 * headers and filename.
 */
export const downloadCSV = (
  filename: string,
  data: SimpleObject[],
  headers: Header[] = [],
): void => {
  const BOM = "\uFEFF"; // Byte Order Mark
  const csv = dataArrayToCSV(data, headers);
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
