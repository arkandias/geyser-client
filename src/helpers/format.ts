/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { NamedColor } from "quasar";

import {
  Intervenant,
  Message,
  Responsable,
  RowIntervenant,
} from "@/helpers/types.ts";

export const tooltipDelay: number = 500;

export const nf = new Intl.NumberFormat("fr-FR", {
  style: "decimal",
  maximumFractionDigits: 2,
});

export const normalizeForSearch = (str: string): string =>
  str
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

export const formatRole = (role: string): string => {
  switch (role) {
    case "intervenant":
      return "Intervenant";
    case "commissaire":
      return "Commissaire";
    case "admin":
      return "Administrateur";
    default:
      console.warn(`Rôle '${role}' inconnu`);
      return "";
  }
};

export const formatPhase = (phase: string): string => {
  switch (phase) {
    case "voeux":
      return "Vœux";
    case "commission":
      return "Commission";
    case "consultation":
      return "Consultation";
    case "fermeture":
      return "Fermeture";
    default:
      console.warn(`Phase '${phase}' inconnue`);
      return "";
  }
};

export const formatTypeDemandesTitre = (typeDemande: string): string => {
  switch (typeDemande) {
    case "attribution":
      return "Attributions";
    case "principale":
      return "Principales";
    case "secondaire":
      return "Secondaires";
    default:
      console.warn(`Type de demande '${typeDemande}' inconnu`);
      return "";
  }
};

export const formatTypeMessage = (typeMessage: string): string => {
  switch (typeMessage) {
    case "message_intervenant":
      return "Message pour la commission";
    case "note_commission":
      return "Note de la commission";
    default:
      console.warn(`Type de message '${typeMessage}' inconnu`);
      return "";
  }
};

export const indicateurMessage = (messages: Message[]): string =>
  messages.find((message) => message.typeMessage === "message_intervenant")
    ? messages.find((message) => message.typeMessage === "note_commission")
      ? "\u2021"
      : "\u002A"
    : messages.find((message) => message.typeMessage === "note_commission")
      ? "\u2020"
      : "";

export const formatFormation = (
  nomCursus: string,
  nomMention: string,
): string => nomCursus + " " + nomMention;

export const formatIntervenant = (intervenant: Intervenant): string =>
  intervenant.alias ?? intervenant.prenom + " " + intervenant.nom;

export const formatResponsables = (responsables: Responsable[]): string =>
  responsables
    .map(
      ({ intervenant, commentaire }) =>
        formatIntervenant(intervenant) +
        (commentaire ? ` (${commentaire})` : ""),
    )
    .join(", ");

export const formatResumeIntervenant = (row: RowIntervenant): string =>
  `Service : ${String(
    (row.services[0]?.heuresEQTD ?? 0) -
      (row.totalModifications.aggregate?.sum?.heuresEQTD ?? 0),
  )} htd ` +
  " \u2014 " +
  `Attributions : ${String(row.totalAttributions.aggregate?.sum?.heuresEQTD ?? 0)} htd ` +
  " \u2014 " +
  `Vœux principaux : ${String(row.totalPrincipales.aggregate?.sum?.heuresEQTD ?? 0)} htd ` +
  " \u2014 " +
  `Vœux secondaires : ${String(row.totalSecondaires.aggregate?.sum?.heuresEQTD ?? 0)} htd `;

export const couleurBouton = (actif: boolean): NamedColor =>
  actif ? "accent" : "white";

export const couleurPriorite = (
  prioritaire: boolean | null | undefined,
): NamedColor => {
  switch (prioritaire) {
    case true:
      return "positive";
    case false:
      return "negative";
    default:
      return "warning";
  }
};
