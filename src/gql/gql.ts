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
  "\n  fragment Coordinator on responsable {\n    id\n    profile: intervenant {\n      ...Profile\n    }\n    comment: commentaire\n  }\n":
    types.CoordinatorFragmentDoc,
  '\n  fragment Archive on enseignement {\n    year: annee\n    courseId: id\n    requests: demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...RequestDetails\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n':
    types.ArchiveFragmentDoc,
  '\n  query GetCoursesRows($year: Int!) {\n    courses: enseignement(\n      where: {\n        _and: [\n          { annee: { _eq: $year } }\n          { heures_corrigees: { _gt: 0 } }\n          { groupes_corriges: { _gt: 0 } }\n        ]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      name: nom\n      shortName: nom_court\n      visible\n      program: mention {\n        degree: cursus {\n          id\n          name: nom\n          shortName: nom_court\n          visible\n        }\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      track: parcours {\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      numberOfGroups: groupes_corriges\n      totalHours: total_heures_corrigees\n      totalAssigned: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPrimary: demandes_aggregate(where: { type: { _eq: "principale" } }) {\n        ...RequestsTotalHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPriority: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...RequestsTotalHours\n      }\n    }\n  }\n':
    types.GetCoursesRowsDocument,
  "\n  query GetCourseDetails($courseId: Int!) {\n    course: enseignement_by_pk(id: $courseId) {\n      courseId: id\n      name: nom\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      coordinators: responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Coordinator\n      }\n      program: mention {\n        degree: cursus {\n          name: nom\n        }\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      track: parcours {\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      description\n      requests: demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...RequestDetails\n      }\n      priorities: priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priority\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n":
    types.GetCourseDetailsDocument,
  "\n  mutation UpdateDescription($courseId: Int!, $description: String) {\n    course: update_enseignement_by_pk(\n      pk_columns: { id: $courseId }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n":
    types.UpdateDescriptionDocument,
  "\n  fragment Message on message {\n    id\n    body: contenu\n  }\n":
    types.MessageFragmentDoc,
  "\n  mutation UpsertMessage($year: Int!, $uid: String!, $body: String!) {\n    message: insert_message_one(\n      object: { annee: $year, uid: $uid, contenu: $body }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpsertMessageDocument,
  "\n  mutation DeleteMessage($year: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $year } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DeleteMessageDocument,
  "\n  fragment ModificationType on type_modification_service {\n    value\n    label\n    description\n  }\n":
    types.ModificationTypeFragmentDoc,
  "\n  query GetModificationTypes {\n    modificationTypes: type_modification_service(order_by: { value: asc }) {\n      ...ModificationType\n    }\n  }\n":
    types.GetModificationTypesDocument,
  "\n  query GetCurrentPhase {\n    # limit: 1 car unique\n    phases: phase(where: { en_cours: { _eq: true } }, limit: 1) {\n      value\n    }\n  }\n":
    types.GetCurrentPhaseDocument,
  "\n  mutation SetCurrentPhase($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n":
    types.SetCurrentPhaseDocument,
  "\n  fragment Priority on priorite {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    courseId: ens_id\n    seniority: anciennete\n    isPriority: prioritaire\n  }\n":
    types.PriorityFragmentDoc,
  "\n  fragment Profile on intervenant {\n    uid\n    firstname: prenom\n    lastname: nom\n    alias\n    active: actif\n  }\n":
    types.ProfileFragmentDoc,
  "\n  query GetProfile($uid: String!) {\n    profile: intervenant_by_pk(uid: $uid) {\n      ...Profile\n    }\n  }\n":
    types.GetProfileDocument,
  "\n  fragment RequestDetails on demande {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    course: enseignement {\n      id\n      hoursPerGroup: heures_corrigees\n    }\n    type\n    hours: heures\n    weightedHours: heures_eqtd\n    isPriority: prioritaire\n  }\n\n  fragment RequestsTotalHours on demande_aggregate {\n    aggregate {\n      sum {\n        hours: heures\n      }\n    }\n  }\n\n  fragment RequestsTotalWeightedHours on demande_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n":
    types.RequestDetailsFragmentDoc,
  "\n  query GetRequest($uid: String!, $courseId: Int!, $requestType: String!) {\n    # limit: 1 car unique\n    requests: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n      limit: 1\n    ) {\n      ...RequestDetails\n    }\n  }\n":
    types.GetRequestDocument,
  "\n  mutation UpsertRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n    $hours: Float!\n  ) {\n    request: insert_demande_one(\n      object: {\n        uid: $uid\n        ens_id: $courseId\n        type: $requestType\n        heures: $hours\n      }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpsertRequestDocument,
  "\n  mutation DeleteRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n  ) {\n    requests: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DeleteRequestDocument,
  "\n  mutation DeleteRequestById($id: Int!) {\n    request: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteRequestByIdDocument,
  "\n  mutation DummyMutation {\n    requests: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n":
    types.DummyMutationDocument,
  "\n  fragment ServiceModification on modification_service {\n    id\n    modificationType: typeByType {\n      ...ModificationType\n    }\n    weightedHours: heures_eqtd\n  }\n\n  fragment ServiceModificationsTotalWeightedHours on modification_service_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n":
    types.ServiceModificationFragmentDoc,
  "\n  mutation InsertServiceModification(\n    $serviceId: Int!\n    $modificationType: String!\n    $weightedHours: Float!\n  ) {\n    serviceModification: insert_modification_service_one(\n      object: {\n        service_id: $serviceId\n        type: $modificationType\n        heures_eqtd: $weightedHours\n      }\n    ) {\n      id\n    }\n  }\n":
    types.InsertServiceModificationDocument,
  "\n  mutation DeleteServiceModification($id: Int!) {\n    serviceModification: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n":
    types.DeleteServiceModificationDocument,
  "\n  fragment Service on service {\n    id\n    year: annee\n    uid\n    base: heures_eqtd\n    totalModifications: modifications_aggregate {\n      ...ServiceModificationsTotalWeightedHours\n    }\n  }\n\n  fragment ServiceDetails on service {\n    ...Service\n    modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {\n      ...ServiceModification\n    }\n  }\n":
    types.ServiceFragmentDoc,
  "\n  query GetService($uid: String!, $year: Int!) {\n    service(\n      where: { _and: [{ uid: { _eq: $uid } }, { annee: { _eq: $year } }] }\n      limit: 1\n    ) {\n      id\n    }\n  }\n":
    types.GetServiceDocument,
  "\n  mutation UpsertService($uid: String!, $year: Int!, $hours: Float!) {\n    service: insert_service_one(\n      object: { uid: $uid, annee: $year, heures_eqtd: $hours }\n      on_conflict: {\n        constraint: service_annee_uid_key\n        update_columns: [heures_eqtd]\n      }\n    ) {\n      id\n    }\n  }\n":
    types.UpsertServiceDocument,
  "\n  query GetTeachers {\n    teachers: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n    }\n  }\n":
    types.GetTeachersDocument,
  '\n  query GetTeachersRows($year: Int!, $where: intervenant_bool_exp = {}) {\n    teachers: intervenant(\n      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n      visible\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Service\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      messageCount: messages_aggregate(\n        where: { annee: { _eq: $year } }\n        limit: 1\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n':
    types.GetTeachersRowsDocument,
  '\n  query GetTeacherDetails($year: Int!, $uid: String!) {\n    teacher: intervenant_by_pk(uid: $uid) {\n      ...Profile\n      position: fonctionByFonction {\n        value\n        label\n        baseServiceHours: heures_eqtd_service_base\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...ServiceDetails\n      }\n      priorities: priorites(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: { ens_id: asc }\n      ) {\n        ...Priority\n      }\n      requests: demandes(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: [{ type: asc }, { ens_id: asc }]\n      ) {\n        ...RequestDetails\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Message\n      }\n    }\n  }\n':
    types.GetTeacherDetailsDocument,
  "\n  query GetYears {\n    years: annee(order_by: { value: desc }) {\n      value\n      current: en_cours\n      visible\n    }\n  }\n":
    types.GetYearsDocument,
  "\n  mutation UpdateCurrentYear($value: Int!) {\n    years: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    current: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n":
    types.UpdateCurrentYearDocument,
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
  source: "\n  fragment Coordinator on responsable {\n    id\n    profile: intervenant {\n      ...Profile\n    }\n    comment: commentaire\n  }\n",
): (typeof documents)["\n  fragment Coordinator on responsable {\n    id\n    profile: intervenant {\n      ...Profile\n    }\n    comment: commentaire\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  fragment Archive on enseignement {\n    year: annee\n    courseId: id\n    requests: demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...RequestDetails\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n',
): (typeof documents)['\n  fragment Archive on enseignement {\n    year: annee\n    courseId: id\n    requests: demandes(\n      where: { type: { _eq: "attribution" } }\n      order_by: [\n        { intervenant: { nom: asc } }\n        { intervenant: { prenom: asc } }\n      ]\n    ) {\n      ...RequestDetails\n    }\n  }\n\n  fragment NestedArchives on enseignement {\n    ...Archive\n    parent {\n      ...Archive\n      parent {\n        ...Archive\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetCoursesRows($year: Int!) {\n    courses: enseignement(\n      where: {\n        _and: [\n          { annee: { _eq: $year } }\n          { heures_corrigees: { _gt: 0 } }\n          { groupes_corriges: { _gt: 0 } }\n        ]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      name: nom\n      shortName: nom_court\n      visible\n      program: mention {\n        degree: cursus {\n          id\n          name: nom\n          shortName: nom_court\n          visible\n        }\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      track: parcours {\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      numberOfGroups: groupes_corriges\n      totalHours: total_heures_corrigees\n      totalAssigned: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPrimary: demandes_aggregate(where: { type: { _eq: "principale" } }) {\n        ...RequestsTotalHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPriority: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...RequestsTotalHours\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCoursesRows($year: Int!) {\n    courses: enseignement(\n      where: {\n        _and: [\n          { annee: { _eq: $year } }\n          { heures_corrigees: { _gt: 0 } }\n          { groupes_corriges: { _gt: 0 } }\n        ]\n      }\n      order_by: [\n        { mention: { cursus: { nom: asc } } }\n        { mention: { nom: asc } }\n        { parcours: { nom: asc } }\n        { semestre: asc }\n        { nom: asc }\n        { type: asc }\n      ]\n    ) {\n      id\n      name: nom\n      shortName: nom_court\n      visible\n      program: mention {\n        degree: cursus {\n          id\n          name: nom\n          shortName: nom_court\n          visible\n        }\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      track: parcours {\n        id\n        name: nom\n        shortName: nom_court\n        visible\n      }\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      numberOfGroups: groupes_corriges\n      totalHours: total_heures_corrigees\n      totalAssigned: demandes_aggregate(\n        where: { type: { _eq: "attribution" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPrimary: demandes_aggregate(where: { type: { _eq: "principale" } }) {\n        ...RequestsTotalHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { type: { _eq: "secondaire" } }\n      ) {\n        ...RequestsTotalHours\n      }\n      totalPriority: demandes_aggregate(\n        where: {\n          _and: [\n            { type: { _eq: "principale" } }\n            { prioritaire: { _eq: true } }\n          ]\n        }\n      ) {\n        ...RequestsTotalHours\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCourseDetails($courseId: Int!) {\n    course: enseignement_by_pk(id: $courseId) {\n      courseId: id\n      name: nom\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      coordinators: responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Coordinator\n      }\n      program: mention {\n        degree: cursus {\n          name: nom\n        }\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      track: parcours {\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      description\n      requests: demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...RequestDetails\n      }\n      priorities: priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priority\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetCourseDetails($courseId: Int!) {\n    course: enseignement_by_pk(id: $courseId) {\n      courseId: id\n      name: nom\n      courseType: typeByType {\n        value\n        label\n      }\n      semester: semestre\n      hoursPerGroup: heures_corrigees\n      coordinators: responsables(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Coordinator\n      }\n      program: mention {\n        degree: cursus {\n          name: nom\n        }\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      track: parcours {\n        name: nom\n        coordinators: responsables(\n          order_by: [\n            { intervenant: { nom: asc } }\n            { intervenant: { prenom: asc } }\n          ]\n        ) {\n          ...Coordinator\n        }\n      }\n      description\n      requests: demandes(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...RequestDetails\n      }\n      priorities: priorites(\n        order_by: [\n          { intervenant: { nom: asc } }\n          { intervenant: { prenom: asc } }\n        ]\n      ) {\n        ...Priority\n      }\n      parent {\n        ...NestedArchives\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateDescription($courseId: Int!, $description: String) {\n    course: update_enseignement_by_pk(\n      pk_columns: { id: $courseId }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateDescription($courseId: Int!, $description: String) {\n    course: update_enseignement_by_pk(\n      pk_columns: { id: $courseId }\n      _set: { description: $description }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Message on message {\n    id\n    body: contenu\n  }\n",
): (typeof documents)["\n  fragment Message on message {\n    id\n    body: contenu\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertMessage($year: Int!, $uid: String!, $body: String!) {\n    message: insert_message_one(\n      object: { annee: $year, uid: $uid, contenu: $body }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertMessage($year: Int!, $uid: String!, $body: String!) {\n    message: insert_message_one(\n      object: { annee: $year, uid: $uid, contenu: $body }\n      on_conflict: {\n        constraint: message_annee_uid_key\n        update_columns: [contenu]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteMessage($year: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $year } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteMessage($year: Int!, $uid: String!) {\n    messages: delete_message(\n      where: { _and: [{ annee: { _eq: $year } }, { uid: { _eq: $uid } }] }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ModificationType on type_modification_service {\n    value\n    label\n    description\n  }\n",
): (typeof documents)["\n  fragment ModificationType on type_modification_service {\n    value\n    label\n    description\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetModificationTypes {\n    modificationTypes: type_modification_service(order_by: { value: asc }) {\n      ...ModificationType\n    }\n  }\n",
): (typeof documents)["\n  query GetModificationTypes {\n    modificationTypes: type_modification_service(order_by: { value: asc }) {\n      ...ModificationType\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetCurrentPhase {\n    # limit: 1 car unique\n    phases: phase(where: { en_cours: { _eq: true } }, limit: 1) {\n      value\n    }\n  }\n",
): (typeof documents)["\n  query GetCurrentPhase {\n    # limit: 1 car unique\n    phases: phase(where: { en_cours: { _eq: true } }, limit: 1) {\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation SetCurrentPhase($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n",
): (typeof documents)["\n  mutation SetCurrentPhase($value: String!) {\n    phases: update_phase(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    enCours: update_phase_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Priority on priorite {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    courseId: ens_id\n    seniority: anciennete\n    isPriority: prioritaire\n  }\n",
): (typeof documents)["\n  fragment Priority on priorite {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    courseId: ens_id\n    seniority: anciennete\n    isPriority: prioritaire\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Profile on intervenant {\n    uid\n    firstname: prenom\n    lastname: nom\n    alias\n    active: actif\n  }\n",
): (typeof documents)["\n  fragment Profile on intervenant {\n    uid\n    firstname: prenom\n    lastname: nom\n    alias\n    active: actif\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetProfile($uid: String!) {\n    profile: intervenant_by_pk(uid: $uid) {\n      ...Profile\n    }\n  }\n",
): (typeof documents)["\n  query GetProfile($uid: String!) {\n    profile: intervenant_by_pk(uid: $uid) {\n      ...Profile\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment RequestDetails on demande {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    course: enseignement {\n      id\n      hoursPerGroup: heures_corrigees\n    }\n    type\n    hours: heures\n    weightedHours: heures_eqtd\n    isPriority: prioritaire\n  }\n\n  fragment RequestsTotalHours on demande_aggregate {\n    aggregate {\n      sum {\n        hours: heures\n      }\n    }\n  }\n\n  fragment RequestsTotalWeightedHours on demande_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment RequestDetails on demande {\n    id\n    teacher: intervenant {\n      ...Profile\n    }\n    course: enseignement {\n      id\n      hoursPerGroup: heures_corrigees\n    }\n    type\n    hours: heures\n    weightedHours: heures_eqtd\n    isPriority: prioritaire\n  }\n\n  fragment RequestsTotalHours on demande_aggregate {\n    aggregate {\n      sum {\n        hours: heures\n      }\n    }\n  }\n\n  fragment RequestsTotalWeightedHours on demande_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetRequest($uid: String!, $courseId: Int!, $requestType: String!) {\n    # limit: 1 car unique\n    requests: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n      limit: 1\n    ) {\n      ...RequestDetails\n    }\n  }\n",
): (typeof documents)["\n  query GetRequest($uid: String!, $courseId: Int!, $requestType: String!) {\n    # limit: 1 car unique\n    requests: demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n      limit: 1\n    ) {\n      ...RequestDetails\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n    $hours: Float!\n  ) {\n    request: insert_demande_one(\n      object: {\n        uid: $uid\n        ens_id: $courseId\n        type: $requestType\n        heures: $hours\n      }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n    $hours: Float!\n  ) {\n    request: insert_demande_one(\n      object: {\n        uid: $uid\n        ens_id: $courseId\n        type: $requestType\n        heures: $hours\n      }\n      on_conflict: {\n        constraint: demande_uid_ens_id_type_key\n        update_columns: [heures]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n  ) {\n    requests: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteRequest(\n    $uid: String!\n    $courseId: Int!\n    $requestType: String!\n  ) {\n    requests: delete_demande(\n      where: {\n        _and: [\n          { uid: { _eq: $uid } }\n          { ens_id: { _eq: $courseId } }\n          { type: { _eq: $requestType } }\n        ]\n      }\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteRequestById($id: Int!) {\n    request: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteRequestById($id: Int!) {\n    request: delete_demande_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DummyMutation {\n    requests: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation DummyMutation {\n    requests: insert_demande(objects: []) {\n      returning {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment ServiceModification on modification_service {\n    id\n    modificationType: typeByType {\n      ...ModificationType\n    }\n    weightedHours: heures_eqtd\n  }\n\n  fragment ServiceModificationsTotalWeightedHours on modification_service_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment ServiceModification on modification_service {\n    id\n    modificationType: typeByType {\n      ...ModificationType\n    }\n    weightedHours: heures_eqtd\n  }\n\n  fragment ServiceModificationsTotalWeightedHours on modification_service_aggregate {\n    aggregate {\n      sum {\n        weightedHours: heures_eqtd\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation InsertServiceModification(\n    $serviceId: Int!\n    $modificationType: String!\n    $weightedHours: Float!\n  ) {\n    serviceModification: insert_modification_service_one(\n      object: {\n        service_id: $serviceId\n        type: $modificationType\n        heures_eqtd: $weightedHours\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation InsertServiceModification(\n    $serviceId: Int!\n    $modificationType: String!\n    $weightedHours: Float!\n  ) {\n    serviceModification: insert_modification_service_one(\n      object: {\n        service_id: $serviceId\n        type: $modificationType\n        heures_eqtd: $weightedHours\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation DeleteServiceModification($id: Int!) {\n    serviceModification: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation DeleteServiceModification($id: Int!) {\n    serviceModification: delete_modification_service_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment Service on service {\n    id\n    year: annee\n    uid\n    base: heures_eqtd\n    totalModifications: modifications_aggregate {\n      ...ServiceModificationsTotalWeightedHours\n    }\n  }\n\n  fragment ServiceDetails on service {\n    ...Service\n    modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {\n      ...ServiceModification\n    }\n  }\n",
): (typeof documents)["\n  fragment Service on service {\n    id\n    year: annee\n    uid\n    base: heures_eqtd\n    totalModifications: modifications_aggregate {\n      ...ServiceModificationsTotalWeightedHours\n    }\n  }\n\n  fragment ServiceDetails on service {\n    ...Service\n    modifications(order_by: [{ type: asc }, { heures_eqtd: asc }]) {\n      ...ServiceModification\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetService($uid: String!, $year: Int!) {\n    service(\n      where: { _and: [{ uid: { _eq: $uid } }, { annee: { _eq: $year } }] }\n      limit: 1\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  query GetService($uid: String!, $year: Int!) {\n    service(\n      where: { _and: [{ uid: { _eq: $uid } }, { annee: { _eq: $year } }] }\n      limit: 1\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpsertService($uid: String!, $year: Int!, $hours: Float!) {\n    service: insert_service_one(\n      object: { uid: $uid, annee: $year, heures_eqtd: $hours }\n      on_conflict: {\n        constraint: service_annee_uid_key\n        update_columns: [heures_eqtd]\n      }\n    ) {\n      id\n    }\n  }\n",
): (typeof documents)["\n  mutation UpsertService($uid: String!, $year: Int!, $hours: Float!) {\n    service: insert_service_one(\n      object: { uid: $uid, annee: $year, heures_eqtd: $hours }\n      on_conflict: {\n        constraint: service_annee_uid_key\n        update_columns: [heures_eqtd]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTeachers {\n    teachers: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n    }\n  }\n",
): (typeof documents)["\n  query GetTeachers {\n    teachers: intervenant(\n      where: { actif: { _eq: true } }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetTeachersRows($year: Int!, $where: intervenant_bool_exp = {}) {\n    teachers: intervenant(\n      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n      visible\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Service\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      messageCount: messages_aggregate(\n        where: { annee: { _eq: $year } }\n        limit: 1\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetTeachersRows($year: Int!, $where: intervenant_bool_exp = {}) {\n    teachers: intervenant(\n      where: { _and: [{ services: { annee: { _eq: $year } } }, $where] }\n      order_by: [{ nom: asc }, { prenom: asc }]\n    ) {\n      ...Profile\n      visible\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Service\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      messageCount: messages_aggregate(\n        where: { annee: { _eq: $year } }\n        limit: 1\n      ) {\n        aggregate {\n          count\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetTeacherDetails($year: Int!, $uid: String!) {\n    teacher: intervenant_by_pk(uid: $uid) {\n      ...Profile\n      position: fonctionByFonction {\n        value\n        label\n        baseServiceHours: heures_eqtd_service_base\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...ServiceDetails\n      }\n      priorities: priorites(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: { ens_id: asc }\n      ) {\n        ...Priority\n      }\n      requests: demandes(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: [{ type: asc }, { ens_id: asc }]\n      ) {\n        ...RequestDetails\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Message\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetTeacherDetails($year: Int!, $uid: String!) {\n    teacher: intervenant_by_pk(uid: $uid) {\n      ...Profile\n      position: fonctionByFonction {\n        value\n        label\n        baseServiceHours: heures_eqtd_service_base\n      }\n      # limit: 1 car unique\n      services(where: { annee: { _eq: $year } }, limit: 1) {\n        ...ServiceDetails\n      }\n      priorities: priorites(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: { ens_id: asc }\n      ) {\n        ...Priority\n      }\n      requests: demandes(\n        where: { enseignement: { annee: { _eq: $year } } }\n        order_by: [{ type: asc }, { ens_id: asc }]\n      ) {\n        ...RequestDetails\n      }\n      totalAssigned: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "attribution" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalPrimary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "principale" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      totalSecondary: demandes_aggregate(\n        where: { _and: [{ type: { _eq: "secondaire" } }] }\n      ) {\n        ...RequestsTotalHours\n        ...RequestsTotalWeightedHours\n      }\n      # limit: 1 car unique\n      messages(where: { annee: { _eq: $year } }, limit: 1) {\n        ...Message\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetYears {\n    years: annee(order_by: { value: desc }) {\n      value\n      current: en_cours\n      visible\n    }\n  }\n",
): (typeof documents)["\n  query GetYears {\n    years: annee(order_by: { value: desc }) {\n      value\n      current: en_cours\n      visible\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation UpdateCurrentYear($value: Int!) {\n    years: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    current: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n",
): (typeof documents)["\n  mutation UpdateCurrentYear($value: Int!) {\n    years: update_annee(\n      where: { value: { _neq: $value } }\n      _set: { en_cours: null }\n    ) {\n      returning {\n        value\n      }\n    }\n    current: update_annee_by_pk(\n      pk_columns: { value: $value }\n      _set: { en_cours: true }\n    ) {\n      value\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
