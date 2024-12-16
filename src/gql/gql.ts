/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "\n  query GetAnnees {\n    annees: annee(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n":
    types.GetAnneesDocument,
  "\n  mutation UpdateAnneeEnCours($value: Int!) {\n    annees: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n":
    types.UpdateAnneeEnCoursDocument,
  "\n  fragment Demande on demande {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    enseignement {\n      id\n      heures: heures_corrigees\n    }\n    typeDemande: type\n    heures\n    prioritaire\n  }\n\n  fragment TotalHeures on demande_aggregate {\n    aggregate {\n      sum {\n        heures\n      }\n    }\n  }\n\n  fragment TotalHeuresEQTD on demande_aggregate {\n    aggregate {\n      sum {\n        heuresEQTD: heures_eqtd\n      }\n    }\n  }\n":
    types.DemandeFragmentDoc,
  "\n  query GetDemande($uid: String!, $ensId: Int!, $typeDemande: String!) {\n    # limit: 1 car unique\n    demande: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n      limit: 1\n    ) {\n      id\n      uid\n      ensId: ens_id\n      typeDemande: type\n      heures\n    }\n  }\n":
    types.GetDemandeDocument,
  "\n  mutation UpsertDemande(\n    $uid: String!\n    $ensId: Int!\n    $typeDemande: String!\n    $heures: Float!\n  ) {\n    demande: insert_demande_one(\n      object: { uid: $uid, ens_id: $ensId, type: $typeDemande, heures: $heures }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpsertDemandeDocument,
  "\n  mutation DeleteDemande($ensId: Int!, $uid: String!, $typeDemande: String!) {\n    demandes: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DeleteDemandeDocument,
  "\n  mutation DeleteDemandeById($id: Int!) {\n    demande: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteDemandeByIdDocument,
  "\n  mutation DummyMutation {\n    demandes: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DummyMutationDocument,
  '\n  fragment Responsable on responsable {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    commentaire\n  }\n\n  fragment Resume on enseignement {\n    ensId: id\n    heuresParGroupe: heures_corrigees\n    responsables(\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Responsable\n    }\n    mention {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    parcours {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    description\n  }\n\n  fragment Archive on enseignement {\n    ensId: id\n    annee\n    demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Demande\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n':
    types.ResponsableFragmentDoc,
  '\n  query GetEnseignementsTableRows($annee: Int!) {\n    enseignements: enseignement(\n      where: {\n        _and: [{ annee: { _eq: $annee } }, { groupes_corriges: { _gt: 0 } }]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      mention {\n        id\n        nom\n        nomCourt: nom_court\n        cursus {\n          id\n          nom\n          nomCourt: nom_court\n        }\n        visible\n      }\n      parcours {\n        id\n        nom\n        nomCourt: nom_court\n        visible\n      }\n      nom\n      nomCourt: nom_court\n      typeEnseignement: type_enseignement {\n        label\n        labelCourt: label_court\n      }\n      semestre\n      heures: heures_corrigees\n      groupes: groupes_corriges\n      totalAttributions: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        aggregate {\n          sum {\n            heures\n          }\n        }\n      }\n      totalPrincipales: demandes_aggregate(\n        where: { type: { _eq: "principale" } }\n      ) {\n        ...TotalHeures\n      }\n      totalSecondaires: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...TotalHeures\n      }\n      totalPrioritaire: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n      }\n      visible\n    }\n  }\n':
    types.GetEnseignementsTableRowsDocument,
  "\n  query GetEnseignementDetails($ensId: Int!) {\n    enseignement: enseignement_by_pk(id: $ensId) {\n      ...Resume\n      demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Demande\n      }\n      priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priorite\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n":
    types.GetEnseignementDetailsDocument,
  "\n  mutation UpdateDescription($id: Int!, $description: String) {\n    description: update_enseignement_by_pk(\n      pk_columns: { id: $id }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n":
    types.UpdateDescriptionDocument,
  "\n  fragment Intervenant on intervenant {\n    uid\n    nom\n    prenom\n    alias\n  }\n":
    types.IntervenantFragmentDoc,
  "\n  query GetIntervenant($uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n    }\n  }\n":
    types.GetIntervenantDocument,
  "\n  mutation UpsertIntervenant($uid: String!, $nom: String!, $prenom: String!) {\n    intervenant: insert_intervenant_one(\n      object: { uid: $uid, nom: $nom, prenom: $prenom }\n      on_conflict: {\n        constraint: intervenant_pkey\n        update_columns: [nom, prenom]\n      }\n    ) {\n      uid\n      nom\n      prenom\n      alias\n    }\n  }\n":
    types.UpsertIntervenantDocument,
  "\n  query GetIntervenants {\n    intervenants: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n    }\n  }\n":
    types.GetIntervenantsDocument,
  '\n  query GetMyRow($annee: Int!, $uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n':
    types.GetMyRowDocument,
  '\n  query GetIntervenantsTableRows(\n    $annee: Int!\n    $where: intervenant_bool_exp = {}\n  ) {\n    intervenants: intervenant(\n      where: $where\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n':
    types.GetIntervenantsTableRowsDocument,
  "\n  mutation UpsertMessage($annee: Int!, $uid: String!, $contenu: String!) {\n    message: insert_message_one(\n      object: { annee: $annee, uid: $uid, contenu: $contenu }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpsertMessageDocument,
  "\n  mutation DeleteMessage($annee: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $annee } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DeleteMessageDocument,
  "\n  query GetTypesModification {\n    typesModification: type_modification(order_by: { label: asc }) {\n      label\n      description\n    }\n  }\n":
    types.GetTypesModificationDocument,
  "\n  mutation InsertModification(\n    $annee: Int!\n    $uid: String!\n    $typeModification: String!\n    $heuresEQTD: Float!\n  ) {\n    modificationService: insert_modification_service_one(\n      object: {\n        annee: $annee\n        uid: $uid\n        type: $typeModification\n        heures_eqtd: $heuresEQTD\n      }\n    ) {\n      id\n    }\n  }\n":
    types.InsertModificationDocument,
  "\n  mutation DeleteModification($id: Int!) {\n    modificationService: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteModificationDocument,
  "\n  query GetPhases {\n    phases: phase(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n":
    types.GetPhasesDocument,
  "\n  mutation UpdatePhaseEnCours($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n":
    types.UpdatePhaseEnCoursDocument,
  "\n  fragment Priorite on priorite {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    ensId: ens_id\n    anciennete\n    prioritaire\n  }\n":
    types.PrioriteFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetAnnees {\n    annees: annee(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n",
): (typeof documents)["\n  query GetAnnees {\n    annees: annee(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateAnneeEnCours($value: Int!) {\n    annees: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateAnneeEnCours($value: Int!) {\n    annees: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Demande on demande {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    enseignement {\n      id\n      heures: heures_corrigees\n    }\n    typeDemande: type\n    heures\n    prioritaire\n  }\n\n  fragment TotalHeures on demande_aggregate {\n    aggregate {\n      sum {\n        heures\n      }\n    }\n  }\n\n  fragment TotalHeuresEQTD on demande_aggregate {\n    aggregate {\n      sum {\n        heuresEQTD: heures_eqtd\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment Demande on demande {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    enseignement {\n      id\n      heures: heures_corrigees\n    }\n    typeDemande: type\n    heures\n    prioritaire\n  }\n\n  fragment TotalHeures on demande_aggregate {\n    aggregate {\n      sum {\n        heures\n      }\n    }\n  }\n\n  fragment TotalHeuresEQTD on demande_aggregate {\n    aggregate {\n      sum {\n        heuresEQTD: heures_eqtd\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetDemande($uid: String!, $ensId: Int!, $typeDemande: String!) {\n    # limit: 1 car unique\n    demande: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n      limit: 1\n    ) {\n      id\n      uid\n      ensId: ens_id\n      typeDemande: type\n      heures\n    }\n  }\n",
): (typeof documents)["\n  query GetDemande($uid: String!, $ensId: Int!, $typeDemande: String!) {\n    # limit: 1 car unique\n    demande: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n      limit: 1\n    ) {\n      id\n      uid\n      ensId: ens_id\n      typeDemande: type\n      heures\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertDemande(\n    $uid: String!\n    $ensId: Int!\n    $typeDemande: String!\n    $heures: Float!\n  ) {\n    demande: insert_demande_one(\n      object: { uid: $uid, ens_id: $ensId, type: $typeDemande, heures: $heures }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertDemande(\n    $uid: String!\n    $ensId: Int!\n    $typeDemande: String!\n    $heures: Float!\n  ) {\n    demande: insert_demande_one(\n      object: { uid: $uid, ens_id: $ensId, type: $typeDemande, heures: $heures }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteDemande($ensId: Int!, $uid: String!, $typeDemande: String!) {\n    demandes: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteDemande($ensId: Int!, $uid: String!, $typeDemande: String!) {\n    demandes: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $ensId } }\n          { type: { _eq: $typeDemande } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteDemandeById($id: Int!) {\n    demande: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteDemandeById($id: Int!) {\n    demande: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DummyMutation {\n    demandes: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DummyMutation {\n    demandes: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Responsable on responsable {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    commentaire\n  }\n\n  fragment Resume on enseignement {\n    ensId: id\n    heuresParGroupe: heures_corrigees\n    responsables(\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Responsable\n    }\n    mention {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    parcours {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    description\n  }\n\n  fragment Archive on enseignement {\n    ensId: id\n    annee\n    demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Demande\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment Responsable on responsable {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    commentaire\n  }\n\n  fragment Resume on enseignement {\n    ensId: id\n    heuresParGroupe: heures_corrigees\n    responsables(\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Responsable\n    }\n    mention {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    parcours {\n      responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Responsable\n      }\n    }\n    description\n  }\n\n  fragment Archive on enseignement {\n    ensId: id\n    annee\n    demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...Demande\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetEnseignementsTableRows($annee: Int!) {\n    enseignements: enseignement(\n      where: {\n        _and: [{ annee: { _eq: $annee } }, { groupes_corriges: { _gt: 0 } }]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      mention {\n        id\n        nom\n        nomCourt: nom_court\n        cursus {\n          id\n          nom\n          nomCourt: nom_court\n        }\n        visible\n      }\n      parcours {\n        id\n        nom\n        nomCourt: nom_court\n        visible\n      }\n      nom\n      nomCourt: nom_court\n      typeEnseignement: type_enseignement {\n        label\n        labelCourt: label_court\n      }\n      semestre\n      heures: heures_corrigees\n      groupes: groupes_corriges\n      totalAttributions: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        aggregate {\n          sum {\n            heures\n          }\n        }\n      }\n      totalPrincipales: demandes_aggregate(\n        where: { type: { _eq: "principale" } }\n      ) {\n        ...TotalHeures\n      }\n      totalSecondaires: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...TotalHeures\n      }\n      totalPrioritaire: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n      }\n      visible\n    }\n  }\n',
): (typeof documents)['\n  query GetEnseignementsTableRows($annee: Int!) {\n    enseignements: enseignement(\n      where: {\n        _and: [{ annee: { _eq: $annee } }, { groupes_corriges: { _gt: 0 } }]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      mention {\n        id\n        nom\n        nomCourt: nom_court\n        cursus {\n          id\n          nom\n          nomCourt: nom_court\n        }\n        visible\n      }\n      parcours {\n        id\n        nom\n        nomCourt: nom_court\n        visible\n      }\n      nom\n      nomCourt: nom_court\n      typeEnseignement: type_enseignement {\n        label\n        labelCourt: label_court\n      }\n      semestre\n      heures: heures_corrigees\n      groupes: groupes_corriges\n      totalAttributions: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        aggregate {\n          sum {\n            heures\n          }\n        }\n      }\n      totalPrincipales: demandes_aggregate(\n        where: { type: { _eq: "principale" } }\n      ) {\n        ...TotalHeures\n      }\n      totalSecondaires: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...TotalHeures\n      }\n      totalPrioritaire: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n      }\n      visible\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetEnseignementDetails($ensId: Int!) {\n    enseignement: enseignement_by_pk(id: $ensId) {\n      ...Resume\n      demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Demande\n      }\n      priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priorite\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetEnseignementDetails($ensId: Int!) {\n    enseignement: enseignement_by_pk(id: $ensId) {\n      ...Resume\n      demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Demande\n      }\n      priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priorite\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateDescription($id: Int!, $description: String) {\n    description: update_enseignement_by_pk(\n      pk_columns: { id: $id }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateDescription($id: Int!, $description: String) {\n    description: update_enseignement_by_pk(\n      pk_columns: { id: $id }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Intervenant on intervenant {\n    uid\n    nom\n    prenom\n    alias\n  }\n",
): (typeof documents)["\n  fragment Intervenant on intervenant {\n    uid\n    nom\n    prenom\n    alias\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetIntervenant($uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n    }\n  }\n",
): (typeof documents)["\n  query GetIntervenant($uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertIntervenant($uid: String!, $nom: String!, $prenom: String!) {\n    intervenant: insert_intervenant_one(\n      object: { uid: $uid, nom: $nom, prenom: $prenom }\n      on_conflict: {\n        constraint: intervenant_pkey\n        update_columns: [nom, prenom]\n      }\n    ) {\n      uid\n      nom\n      prenom\n      alias\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertIntervenant($uid: String!, $nom: String!, $prenom: String!) {\n    intervenant: insert_intervenant_one(\n      object: { uid: $uid, nom: $nom, prenom: $prenom }\n      on_conflict: {\n        constraint: intervenant_pkey\n        update_columns: [nom, prenom]\n      }\n    ) {\n      uid\n      nom\n      prenom\n      alias\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetIntervenants {\n    intervenants: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n    }\n  }\n",
): (typeof documents)["\n  query GetIntervenants {\n    intervenants: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetMyRow($annee: Int!, $uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n',
): (typeof documents)['\n  query GetMyRow($annee: Int!, $uid: String!) {\n    intervenant: intervenant_by_pk(uid: $uid) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetIntervenantsTableRows(\n    $annee: Int!\n    $where: intervenant_bool_exp = {}\n  ) {\n    intervenants: intervenant(\n      where: $where\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n',
): (typeof documents)['\n  query GetIntervenantsTableRows(\n    $annee: Int!\n    $where: intervenant_bool_exp = {}\n  ) {\n    intervenants: intervenant(\n      where: $where\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Intervenant\n      demandes(where: { enseignement: { annee: { _eq: $annee } } }) {\n        id\n        ensId: ens_id\n        typeDemande: type\n        heures\n        heuresEQTD: heures_eqtd\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        heuresEQTD: heures_eqtd\n      }\n      modifications: modifications_service(\n        where: { annee: { _eq: $annee } }\n        order_by: [{ type: asc }, { heures_eqtd: asc }]\n      ) {\n        id\n        typeModification: type\n        heuresEQTD: heures_eqtd\n      }\n      totalModifications: modifications_service_aggregate(\n        where: { annee: { _eq: $annee } }\n      ) {\n        aggregate {\n          sum {\n            heuresEQTD: heures_eqtd\n          }\n        }\n      }\n      totalAttributions: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "attribution" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalPrincipales: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      totalSecondaires: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "secondaire" } }\n            { enseignement: { annee: { _eq: $annee } } }\n          ]\n        }\n      ) {\n        ...TotalHeures\n        ...TotalHeuresEQTD\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $annee } }, limit: 1) {\n        id\n        contenu\n      }\n      visible\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertMessage($annee: Int!, $uid: String!, $contenu: String!) {\n    message: insert_message_one(\n      object: { annee: $annee, uid: $uid, contenu: $contenu }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertMessage($annee: Int!, $uid: String!, $contenu: String!) {\n    message: insert_message_one(\n      object: { annee: $annee, uid: $uid, contenu: $contenu }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteMessage($annee: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $annee } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteMessage($annee: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $annee } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTypesModification {\n    typesModification: type_modification(order_by: { label: asc }) {\n      label\n      description\n    }\n  }\n",
): (typeof documents)["\n  query GetTypesModification {\n    typesModification: type_modification(order_by: { label: asc }) {\n      label\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation InsertModification(\n    $annee: Int!\n    $uid: String!\n    $typeModification: String!\n    $heuresEQTD: Float!\n  ) {\n    modificationService: insert_modification_service_one(\n      object: {\n        annee: $annee\n        uid: $uid\n        type: $typeModification\n        heures_eqtd: $heuresEQTD\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation InsertModification(\n    $annee: Int!\n    $uid: String!\n    $typeModification: String!\n    $heuresEQTD: Float!\n  ) {\n    modificationService: insert_modification_service_one(\n      object: {\n        annee: $annee\n        uid: $uid\n        type: $typeModification\n        heures_eqtd: $heuresEQTD\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteModification($id: Int!) {\n    modificationService: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteModification($id: Int!) {\n    modificationService: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetPhases {\n    phases: phase(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n",
): (typeof documents)["\n  query GetPhases {\n    phases: phase(order_by: { value: desc }) {\n      value\n      enCours: en_cours\n      visible\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdatePhaseEnCours($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdatePhaseEnCours($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Priorite on priorite {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    ensId: ens_id\n    anciennete\n    prioritaire\n  }\n",
): (typeof documents)["\n  fragment Priorite on priorite {\n    id\n    intervenant {\n      ...Intervenant\n    }\n    ensId: ens_id\n    anciennete\n    prioritaire\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
