/******************************************************************************
 * Copyright (c) 2024 Amaël Broustet, Julien Hauseux.                         *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

export type TypeModification = {
  label: string;
  description: string | null;
};

export type Modification = {
  id: number;
  typeModification: string;
  heuresEQTD: number;
};
