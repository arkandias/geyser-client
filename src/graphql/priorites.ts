/******************************************************************************
 * Copyright (c) 2021-2024 Amaël Broustet, Julien Hauseux.                    *
 * This file is part of Geyser.                                               *
 * Distributed under the GNU Affero General Public License, version 3.        *
 ******************************************************************************/

import { graphql } from "@/gql";

graphql(/* GraphQL */ `
  fragment Priorite on ec_priorite {
    id
    intervenant {
      ...Intervenant
    }
    ensId: ens_id
    anciennete
    prioritaire
  }
`);
