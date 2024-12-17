import type { Demande, NestedArchives, Priorite } from "@/types/demandes.ts";
import type { Responsable } from "@/types/intervenants.ts";

export type Resume = {
  ensId: number;
  heuresParGroupe: number | null;
  responsables: Responsable[];
  mention: {
    responsables: Responsable[];
  };
  parcours: {
    responsables: Responsable[];
  } | null;
  description: string | null;
};

export type Details = Resume & {
  demandes: Demande[];
  priorites: Priorite[];
  parent: NestedArchives | null;
};
