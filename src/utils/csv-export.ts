import { unparse } from "papaparse";

import type { Scalar } from "@/types/csv-data.ts";
import { toSlug } from "@/utils/misc.ts";

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
