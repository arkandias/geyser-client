/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export type Intervenant = {
  uid: string;
  nom: string;
  prenom: string;
  alias: string | null;
};

export type Responsable = {
  intervenant: Intervenant;
  commentaire: string | null;
};
