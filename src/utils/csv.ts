import { toSlug } from "@/utils/misc.ts";

export const nf = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 2,
  useGrouping: false,
});

type Scalar = string | number | boolean | null | undefined;
type SimpleObject = { [key: string]: Scalar | SimpleObject };

export const formatValue = (value: Scalar, sep = ","): string => {
  const str =
    value === null || value === undefined
      ? ""
      : typeof value === "number"
        ? nf.format(value)
        : typeof value === "boolean"
          ? String(value)
          : value; // string
  return str.includes(sep) ||
    str.includes('"') ||
    str.includes("\n") ||
    str.includes("\r")
    ? `"${str.replace(/"/g, '""')}"`
    : str;
};

const prefixObjectKeys = <T>(
  obj: Record<string, T>,
  prefix: string,
): Record<string, T> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [prefix + "." + key, value]),
  );

export const flattenSimpleObject = (
  obj: SimpleObject,
): Record<string, Scalar> => {
  return Object.entries(obj).reduce<Record<string, Scalar>>(
    (acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        return {
          ...acc,
          ...prefixObjectKeys<Scalar>(flattenSimpleObject(value), key),
        };
      }
      return { ...acc, [key]: value };
    },
    {},
  );
};

const flatDataToRow = (
  obj: Record<string, Scalar>,
  headers: string[],
  sep = ",",
): string => headers.map((key) => formatValue(obj[key], sep)).join(sep);

const dataToRow = (obj: SimpleObject, headers: string[], sep = ","): string =>
  flatDataToRow(flattenSimpleObject(obj), headers, sep);

export const dataArrayToCSV = (
  data: SimpleObject[],
  headers: string[],
  sep = ",",
): string => {
  const headersRow = headers.join(sep);
  const rows = data.map((row) => dataToRow(row, headers, sep));
  return [headersRow, ...rows].join("\n");
};

export const downloadCSV = (
  data: SimpleObject[],
  headers: string[],
  filename: string,
  sep = ",",
) => {
  const BOM = "\uFEFF"; // Byte Order Mark
  const csv = dataArrayToCSV(data, headers, sep);
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
