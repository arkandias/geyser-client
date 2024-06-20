/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte: InputMaybe<Scalars["Boolean"]["input"]>;
  _in: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq: InputMaybe<Scalars["Float"]["input"]>;
  _gt: InputMaybe<Scalars["Float"]["input"]>;
  _gte: InputMaybe<Scalars["Float"]["input"]>;
  _in: InputMaybe<Array<Scalars["Float"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["Float"]["input"]>;
  _lte: InputMaybe<Scalars["Float"]["input"]>;
  _neq: InputMaybe<Scalars["Float"]["input"]>;
  _nin: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq: InputMaybe<Scalars["Int"]["input"]>;
  _gt: InputMaybe<Scalars["Int"]["input"]>;
  _gte: InputMaybe<Scalars["Int"]["input"]>;
  _in: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt: InputMaybe<Scalars["Int"]["input"]>;
  _lte: InputMaybe<Scalars["Int"]["input"]>;
  _neq: InputMaybe<Scalars["Int"]["input"]>;
  _nin: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq: InputMaybe<Scalars["String"]["input"]>;
  _gt: InputMaybe<Scalars["String"]["input"]>;
  _gte: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars["String"]["input"]>;
  _in: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars["String"]["input"]>;
  _is_null: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars["String"]["input"]>;
  _lt: InputMaybe<Scalars["String"]["input"]>;
  _lte: InputMaybe<Scalars["String"]["input"]>;
  _neq: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars["String"]["input"]>;
  _nin: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars["String"]["input"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Table contenant les différentes années. */
export type Ec_Annee = {
  __typename?: "ec_annee";
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: Maybe<Scalars["Boolean"]["output"]>;
  /** An array relationship */
  enseignements: Array<Ec_Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Ec_Enseignement_Aggregate;
  /** An array relationship */
  messages: Array<Ec_Message>;
  /** An aggregate relationship */
  messages_aggregate: Ec_Message_Aggregate;
  /** An array relationship */
  modifications_service: Array<Ec_Modification_Service>;
  /** An aggregate relationship */
  modifications_service_aggregate: Ec_Modification_Service_Aggregate;
  /** An array relationship */
  services: Array<Ec_Service>;
  /** An aggregate relationship */
  services_aggregate: Ec_Service_Aggregate;
  /** Le numéro de l'année (unique). */
  value: Scalars["Int"]["output"];
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différentes années. */
export type Ec_AnneeEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeMessagesArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeModifications_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeModifications_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeServicesArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type Ec_AnneeServices_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

/** aggregated selection of "ec.annee" */
export type Ec_Annee_Aggregate = {
  __typename?: "ec_annee_aggregate";
  aggregate: Maybe<Ec_Annee_Aggregate_Fields>;
  nodes: Array<Ec_Annee>;
};

/** aggregate fields of "ec.annee" */
export type Ec_Annee_Aggregate_Fields = {
  __typename?: "ec_annee_aggregate_fields";
  avg: Maybe<Ec_Annee_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Annee_Max_Fields>;
  min: Maybe<Ec_Annee_Min_Fields>;
  stddev: Maybe<Ec_Annee_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Annee_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Annee_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Annee_Sum_Fields>;
  var_pop: Maybe<Ec_Annee_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Annee_Var_Samp_Fields>;
  variance: Maybe<Ec_Annee_Variance_Fields>;
};

/** aggregate fields of "ec.annee" */
export type Ec_Annee_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Annee_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Ec_Annee_Avg_Fields = {
  __typename?: "ec_annee_avg_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "ec.annee". All fields are combined with a logical 'AND'. */
export type Ec_Annee_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Annee_Bool_Exp>>;
  _not: InputMaybe<Ec_Annee_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Annee_Bool_Exp>>;
  en_cours: InputMaybe<Boolean_Comparison_Exp>;
  enseignements: InputMaybe<Ec_Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp>;
  messages: InputMaybe<Ec_Message_Bool_Exp>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Bool_Exp>;
  modifications_service: InputMaybe<Ec_Modification_Service_Bool_Exp>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Bool_Exp>;
  services: InputMaybe<Ec_Service_Bool_Exp>;
  services_aggregate: InputMaybe<Ec_Service_Aggregate_Bool_Exp>;
  value: InputMaybe<Int_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.annee" */
export enum Ec_Annee_Constraint {
  /** unique or primary key constraint on columns "en_cours" */
  AnneeEnCoursKey = "annee_en_cours_key",
  /** unique or primary key constraint on columns "value" */
  AnneePkey = "annee_pkey",
}

/** input type for incrementing numeric columns in table "ec.annee" */
export type Ec_Annee_Inc_Input = {
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.annee" */
export type Ec_Annee_Insert_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  enseignements: InputMaybe<Ec_Enseignement_Arr_Rel_Insert_Input>;
  messages: InputMaybe<Ec_Message_Arr_Rel_Insert_Input>;
  modifications_service: InputMaybe<Ec_Modification_Service_Arr_Rel_Insert_Input>;
  services: InputMaybe<Ec_Service_Arr_Rel_Insert_Input>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Annee_Max_Fields = {
  __typename?: "ec_annee_max_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Annee_Min_Fields = {
  __typename?: "ec_annee_min_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** response of any mutation on the table "ec.annee" */
export type Ec_Annee_Mutation_Response = {
  __typename?: "ec_annee_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Annee>;
};

/** input type for inserting object relation for remote table "ec.annee" */
export type Ec_Annee_Obj_Rel_Insert_Input = {
  data: Ec_Annee_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Annee_On_Conflict>;
};

/** on_conflict condition type for table "ec.annee" */
export type Ec_Annee_On_Conflict = {
  constraint: Ec_Annee_Constraint;
  update_columns: Array<Ec_Annee_Update_Column>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.annee". */
export type Ec_Annee_Order_By = {
  en_cours: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Order_By>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Order_By>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Order_By>;
  services_aggregate: InputMaybe<Ec_Service_Aggregate_Order_By>;
  value: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.annee */
export type Ec_Annee_Pk_Columns_Input = {
  /** Le numéro de l'année (unique). */
  value: Scalars["Int"]["input"];
};

/** select columns of table "ec.annee" */
export enum Ec_Annee_Select_Column {
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.annee" */
export type Ec_Annee_Set_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Annee_Stddev_Fields = {
  __typename?: "ec_annee_stddev_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Ec_Annee_Stddev_Pop_Fields = {
  __typename?: "ec_annee_stddev_pop_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Ec_Annee_Stddev_Samp_Fields = {
  __typename?: "ec_annee_stddev_samp_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "ec_annee" */
export type Ec_Annee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Annee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Annee_Stream_Cursor_Value_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Annee_Sum_Fields = {
  __typename?: "ec_annee_sum_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "ec.annee" */
export enum Ec_Annee_Update_Column {
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

export type Ec_Annee_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Annee_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Annee_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Annee_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Annee_Var_Pop_Fields = {
  __typename?: "ec_annee_var_pop_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Ec_Annee_Var_Samp_Fields = {
  __typename?: "ec_annee_var_samp_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Ec_Annee_Variance_Fields = {
  __typename?: "ec_annee_variance_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les différents cursus (licence, master, etc.). */
export type Ec_Cursus = {
  __typename?: "ec_cursus";
  /** L'identifiant unique du cursus. */
  id: Scalars["Int"]["output"];
  /** An array relationship */
  mentions: Array<Ec_Mention>;
  /** An aggregate relationship */
  mentions_aggregate: Ec_Mention_Aggregate;
  /** Le nom du cursus (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différents cursus (licence, master, etc.). */
export type Ec_CursusMentionsArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

/** Table contenant les différents cursus (licence, master, etc.). */
export type Ec_CursusMentions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

/** aggregated selection of "ec.cursus" */
export type Ec_Cursus_Aggregate = {
  __typename?: "ec_cursus_aggregate";
  aggregate: Maybe<Ec_Cursus_Aggregate_Fields>;
  nodes: Array<Ec_Cursus>;
};

/** aggregate fields of "ec.cursus" */
export type Ec_Cursus_Aggregate_Fields = {
  __typename?: "ec_cursus_aggregate_fields";
  avg: Maybe<Ec_Cursus_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Cursus_Max_Fields>;
  min: Maybe<Ec_Cursus_Min_Fields>;
  stddev: Maybe<Ec_Cursus_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Cursus_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Cursus_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Cursus_Sum_Fields>;
  var_pop: Maybe<Ec_Cursus_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Cursus_Var_Samp_Fields>;
  variance: Maybe<Ec_Cursus_Variance_Fields>;
};

/** aggregate fields of "ec.cursus" */
export type Ec_Cursus_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Cursus_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Ec_Cursus_Avg_Fields = {
  __typename?: "ec_cursus_avg_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "ec.cursus". All fields are combined with a logical 'AND'. */
export type Ec_Cursus_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Cursus_Bool_Exp>>;
  _not: InputMaybe<Ec_Cursus_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Cursus_Bool_Exp>>;
  id: InputMaybe<Int_Comparison_Exp>;
  mentions: InputMaybe<Ec_Mention_Bool_Exp>;
  mentions_aggregate: InputMaybe<Ec_Mention_Aggregate_Bool_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.cursus" */
export enum Ec_Cursus_Constraint {
  /** unique or primary key constraint on columns "nom" */
  CursusNomKey = "cursus_nom_key",
  /** unique or primary key constraint on columns "id" */
  CursusPkey = "cursus_pkey",
}

/** input type for incrementing numeric columns in table "ec.cursus" */
export type Ec_Cursus_Inc_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.cursus" */
export type Ec_Cursus_Insert_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mentions: InputMaybe<Ec_Mention_Arr_Rel_Insert_Input>;
  /** Le nom du cursus (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Cursus_Max_Fields = {
  __typename?: "ec_cursus_max_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du cursus (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Cursus_Min_Fields = {
  __typename?: "ec_cursus_min_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du cursus (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.cursus" */
export type Ec_Cursus_Mutation_Response = {
  __typename?: "ec_cursus_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Cursus>;
};

/** input type for inserting object relation for remote table "ec.cursus" */
export type Ec_Cursus_Obj_Rel_Insert_Input = {
  data: Ec_Cursus_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Cursus_On_Conflict>;
};

/** on_conflict condition type for table "ec.cursus" */
export type Ec_Cursus_On_Conflict = {
  constraint: Ec_Cursus_Constraint;
  update_columns: Array<Ec_Cursus_Update_Column>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.cursus". */
export type Ec_Cursus_Order_By = {
  id: InputMaybe<Order_By>;
  mentions_aggregate: InputMaybe<Ec_Mention_Aggregate_Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.cursus */
export type Ec_Cursus_Pk_Columns_Input = {
  /** L'identifiant unique du cursus. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.cursus" */
export enum Ec_Cursus_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.cursus" */
export type Ec_Cursus_Set_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du cursus (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Cursus_Stddev_Fields = {
  __typename?: "ec_cursus_stddev_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Ec_Cursus_Stddev_Pop_Fields = {
  __typename?: "ec_cursus_stddev_pop_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Ec_Cursus_Stddev_Samp_Fields = {
  __typename?: "ec_cursus_stddev_samp_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "ec_cursus" */
export type Ec_Cursus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Cursus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Cursus_Stream_Cursor_Value_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du cursus (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Cursus_Sum_Fields = {
  __typename?: "ec_cursus_sum_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "ec.cursus" */
export enum Ec_Cursus_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  Visible = "visible",
}

export type Ec_Cursus_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Cursus_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Cursus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Cursus_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Cursus_Var_Pop_Fields = {
  __typename?: "ec_cursus_var_pop_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Ec_Cursus_Var_Samp_Fields = {
  __typename?: "ec_cursus_var_samp_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Ec_Cursus_Variance_Fields = {
  __typename?: "ec_cursus_variance_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les demandes. */
export type Ec_Demande = {
  __typename?: "ec_demande";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Scalars["Int"]["output"];
  /** An object relationship */
  enseignement: Ec_Enseignement;
  /** Le nombre d'heures demandées. */
  heures: Scalars["Float"]["output"];
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** Fonction qui indique, pour une demande donnée, si celle-ci est prioritaire. */
  prioritaire: Maybe<Scalars["Boolean"]["output"]>;
  /** Le type de demande. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  type_demande: Ec_Type_Demande;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.demande" */
export type Ec_Demande_Aggregate = {
  __typename?: "ec_demande_aggregate";
  aggregate: Maybe<Ec_Demande_Aggregate_Fields>;
  nodes: Array<Ec_Demande>;
};

export type Ec_Demande_Aggregate_Bool_Exp = {
  count: InputMaybe<Ec_Demande_Aggregate_Bool_Exp_Count>;
};

export type Ec_Demande_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Demande_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.demande" */
export type Ec_Demande_Aggregate_Fields = {
  __typename?: "ec_demande_aggregate_fields";
  avg: Maybe<Ec_Demande_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Demande_Max_Fields>;
  min: Maybe<Ec_Demande_Min_Fields>;
  stddev: Maybe<Ec_Demande_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Demande_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Demande_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Demande_Sum_Fields>;
  var_pop: Maybe<Ec_Demande_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Demande_Var_Samp_Fields>;
  variance: Maybe<Ec_Demande_Variance_Fields>;
};

/** aggregate fields of "ec.demande" */
export type Ec_Demande_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.demande" */
export type Ec_Demande_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Demande_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Demande_Max_Order_By>;
  min: InputMaybe<Ec_Demande_Min_Order_By>;
  stddev: InputMaybe<Ec_Demande_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Demande_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Demande_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Demande_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Demande_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Demande_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Demande_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.demande" */
export type Ec_Demande_Arr_Rel_Insert_Input = {
  data: Array<Ec_Demande_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Demande_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Demande_Avg_Fields = {
  __typename?: "ec_demande_avg_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.demande" */
export type Ec_Demande_Avg_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.demande". All fields are combined with a logical 'AND'. */
export type Ec_Demande_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Demande_Bool_Exp>>;
  _not: InputMaybe<Ec_Demande_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Demande_Bool_Exp>>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Ec_Enseignement_Bool_Exp>;
  heures: InputMaybe<Float_Comparison_Exp>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  prioritaire: InputMaybe<Boolean_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  type_demande: InputMaybe<Ec_Type_Demande_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.demande" */
export enum Ec_Demande_Constraint {
  /** unique or primary key constraint on columns "id" */
  DemandePkey = "demande_pkey",
  /** unique or primary key constraint on columns "uid", "type", "ens_id" */
  DemandeUidEnsIdTypeKey = "demande_uid_ens_id_type_key",
}

/** input type for incrementing numeric columns in table "ec.demande" */
export type Ec_Demande_Inc_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.demande" */
export type Ec_Demande_Insert_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Ec_Enseignement_Obj_Rel_Insert_Input>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
  type_demande: InputMaybe<Ec_Type_Demande_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Demande_Max_Fields = {
  __typename?: "ec_demande_max_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de demande. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.demande" */
export type Ec_Demande_Max_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** Le type de demande. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Demande_Min_Fields = {
  __typename?: "ec_demande_min_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de demande. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.demande" */
export type Ec_Demande_Min_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** Le type de demande. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.demande" */
export type Ec_Demande_Mutation_Response = {
  __typename?: "ec_demande_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Demande>;
};

/** on_conflict condition type for table "ec.demande" */
export type Ec_Demande_On_Conflict = {
  constraint: Ec_Demande_Constraint;
  update_columns: Array<Ec_Demande_Update_Column>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.demande". */
export type Ec_Demande_Order_By = {
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Ec_Enseignement_Order_By>;
  heures: InputMaybe<Order_By>;
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  prioritaire: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  type_demande: InputMaybe<Ec_Type_Demande_Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.demande */
export type Ec_Demande_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.demande" */
export enum Ec_Demande_Select_Column {
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "ec.demande" */
export type Ec_Demande_Set_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Demande_Stddev_Fields = {
  __typename?: "ec_demande_stddev_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.demande" */
export type Ec_Demande_Stddev_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Demande_Stddev_Pop_Fields = {
  __typename?: "ec_demande_stddev_pop_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.demande" */
export type Ec_Demande_Stddev_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Demande_Stddev_Samp_Fields = {
  __typename?: "ec_demande_stddev_samp_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.demande" */
export type Ec_Demande_Stddev_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_demande" */
export type Ec_Demande_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Demande_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Demande_Stream_Cursor_Value_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant correspondant à la demande. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Demande_Sum_Fields = {
  __typename?: "ec_demande_sum_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.demande" */
export type Ec_Demande_Sum_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.demande" */
export enum Ec_Demande_Update_Column {
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

export type Ec_Demande_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Demande_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Demande_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Demande_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Demande_Var_Pop_Fields = {
  __typename?: "ec_demande_var_pop_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.demande" */
export type Ec_Demande_Var_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Demande_Var_Samp_Fields = {
  __typename?: "ec_demande_var_samp_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.demande" */
export type Ec_Demande_Var_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Demande_Variance_Fields = {
  __typename?: "ec_demande_variance_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.demande" */
export type Ec_Demande_Variance_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Table contenant les enseignements. */
export type Ec_Enseignement = {
  __typename?: "ec_enseignement";
  /** L'année de l'enseignement. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Ec_Annee;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Scalars["Int"]["output"];
  /** An array relationship */
  demandes: Array<Ec_Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Ec_Demande_Aggregate;
  /** Une description de l'enseignement. */
  description: Maybe<Scalars["String"]["output"]>;
  ens_id_import: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  enseignements: Array<Ec_Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Ec_Enseignement_Aggregate;
  formation_id_import: Maybe<Scalars["String"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Scalars["Int"]["output"];
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Scalars["Float"]["output"];
  /** L'identifiant unique de l'enseignement. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  mention: Ec_Mention;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Scalars["Int"]["output"];
  /** Le nom de l'enseignement. */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel) */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  parcours: Maybe<Ec_Parcours>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  parent: Maybe<Ec_Enseignement>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Int"]["output"]>;
  /** An array relationship */
  priorites: Array<Ec_Priorite>;
  /** An aggregate relationship */
  priorites_aggregate: Ec_Priorite_Aggregate;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Int"]["output"]>;
  /** An array relationship */
  responsables: Array<Ec_Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Ec_Responsable_Aggregate;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Scalars["Int"]["output"];
  /** Le type d'enseignement. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  type_enseignement: Ec_Type_Enseignement;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les enseignements. */
export type Ec_EnseignementDemandesArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementPrioritesArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementPriorites_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementResponsablesArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type Ec_EnseignementResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** aggregated selection of "ec.enseignement" */
export type Ec_Enseignement_Aggregate = {
  __typename?: "ec_enseignement_aggregate";
  aggregate: Maybe<Ec_Enseignement_Aggregate_Fields>;
  nodes: Array<Ec_Enseignement>;
};

export type Ec_Enseignement_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp_Count>;
};

export type Ec_Enseignement_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ec_Enseignement_Select_Column_Ec_Enseignement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Enseignement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Enseignement_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ec_Enseignement_Select_Column_Ec_Enseignement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Enseignement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Enseignement_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Enseignement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.enseignement" */
export type Ec_Enseignement_Aggregate_Fields = {
  __typename?: "ec_enseignement_aggregate_fields";
  avg: Maybe<Ec_Enseignement_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Enseignement_Max_Fields>;
  min: Maybe<Ec_Enseignement_Min_Fields>;
  stddev: Maybe<Ec_Enseignement_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Enseignement_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Enseignement_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Enseignement_Sum_Fields>;
  var_pop: Maybe<Ec_Enseignement_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Enseignement_Var_Samp_Fields>;
  variance: Maybe<Ec_Enseignement_Variance_Fields>;
};

/** aggregate fields of "ec.enseignement" */
export type Ec_Enseignement_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.enseignement" */
export type Ec_Enseignement_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Enseignement_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Enseignement_Max_Order_By>;
  min: InputMaybe<Ec_Enseignement_Min_Order_By>;
  stddev: InputMaybe<Ec_Enseignement_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Enseignement_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Enseignement_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Enseignement_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Enseignement_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Enseignement_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Enseignement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.enseignement" */
export type Ec_Enseignement_Arr_Rel_Insert_Input = {
  data: Array<Ec_Enseignement_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Enseignement_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Enseignement_Avg_Fields = {
  __typename?: "ec_enseignement_avg_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Avg_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.enseignement". All fields are combined with a logical 'AND'. */
export type Ec_Enseignement_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Enseignement_Bool_Exp>>;
  _not: InputMaybe<Ec_Enseignement_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Enseignement_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Ec_Annee_Bool_Exp>;
  annee_cycle: InputMaybe<Int_Comparison_Exp>;
  demandes: InputMaybe<Ec_Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Bool_Exp>;
  description: InputMaybe<String_Comparison_Exp>;
  ens_id_import: InputMaybe<String_Comparison_Exp>;
  enseignements: InputMaybe<Ec_Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp>;
  formation_id_import: InputMaybe<String_Comparison_Exp>;
  groupes: InputMaybe<Int_Comparison_Exp>;
  groupes_corriges: InputMaybe<Int_Comparison_Exp>;
  groupes_ouverts: InputMaybe<Int_Comparison_Exp>;
  heures: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  mention: InputMaybe<Ec_Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  parcours: InputMaybe<Ec_Parcours_Bool_Exp>;
  parcours_id: InputMaybe<Int_Comparison_Exp>;
  parent: InputMaybe<Ec_Enseignement_Bool_Exp>;
  parent_id: InputMaybe<Int_Comparison_Exp>;
  priorites: InputMaybe<Ec_Priorite_Bool_Exp>;
  priorites_aggregate: InputMaybe<Ec_Priorite_Aggregate_Bool_Exp>;
  regle_priorite: InputMaybe<Int_Comparison_Exp>;
  responsables: InputMaybe<Ec_Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Bool_Exp>;
  semestre: InputMaybe<Int_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  type_enseignement: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.enseignement" */
export enum Ec_Enseignement_Constraint {
  /** unique or primary key constraint on columns "annee", "semestre", "parcours_id", "type", "mention_id", "nom" */
  EnseignementAnneeMentionIdParcoursIdNomSemestreTypeKey = "enseignement_annee_mention_id_parcours_id_nom_semestre_type_key",
  /** unique or primary key constraint on columns "id" */
  EnseignementPkey = "enseignement_pkey",
}

/** input type for incrementing numeric columns in table "ec.enseignement" */
export type Ec_Enseignement_Inc_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Scalars["Int"]["input"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.enseignement" */
export type Ec_Enseignement_Insert_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Ec_Annee_Obj_Rel_Insert_Input>;
  demandes: InputMaybe<Ec_Demande_Arr_Rel_Insert_Input>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Scalars["String"]["input"]>;
  ens_id_import: InputMaybe<Scalars["String"]["input"]>;
  enseignements: InputMaybe<Ec_Enseignement_Arr_Rel_Insert_Input>;
  formation_id_import: InputMaybe<Scalars["String"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention: InputMaybe<Ec_Mention_Obj_Rel_Insert_Input>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  parcours: InputMaybe<Ec_Parcours_Obj_Rel_Insert_Input>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  parent: InputMaybe<Ec_Enseignement_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Scalars["Int"]["input"]>;
  priorites: InputMaybe<Ec_Priorite_Arr_Rel_Insert_Input>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Scalars["Int"]["input"]>;
  responsables: InputMaybe<Ec_Responsable_Arr_Rel_Insert_Input>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type d'enseignement. */
  type: InputMaybe<Scalars["String"]["input"]>;
  type_enseignement: InputMaybe<Ec_Type_Enseignement_Obj_Rel_Insert_Input>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Enseignement_Max_Fields = {
  __typename?: "ec_enseignement_max_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Int"]["output"]>;
  /** Une description de l'enseignement. */
  description: Maybe<Scalars["String"]["output"]>;
  ens_id_import: Maybe<Scalars["String"]["output"]>;
  formation_id_import: Maybe<Scalars["String"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Int"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de l'enseignement. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Int"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Int"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Int"]["output"]>;
  /** Le type d'enseignement. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Max_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Order_By>;
  ens_id_import: InputMaybe<Order_By>;
  formation_id_import: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
  /** Le type d'enseignement. */
  type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Enseignement_Min_Fields = {
  __typename?: "ec_enseignement_min_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Int"]["output"]>;
  /** Une description de l'enseignement. */
  description: Maybe<Scalars["String"]["output"]>;
  ens_id_import: Maybe<Scalars["String"]["output"]>;
  formation_id_import: Maybe<Scalars["String"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Int"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de l'enseignement. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Int"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Int"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Int"]["output"]>;
  /** Le type d'enseignement. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Min_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Order_By>;
  ens_id_import: InputMaybe<Order_By>;
  formation_id_import: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
  /** Le type d'enseignement. */
  type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.enseignement" */
export type Ec_Enseignement_Mutation_Response = {
  __typename?: "ec_enseignement_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Enseignement>;
};

/** input type for inserting object relation for remote table "ec.enseignement" */
export type Ec_Enseignement_Obj_Rel_Insert_Input = {
  data: Ec_Enseignement_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Enseignement_On_Conflict>;
};

/** on_conflict condition type for table "ec.enseignement" */
export type Ec_Enseignement_On_Conflict = {
  constraint: Ec_Enseignement_Constraint;
  update_columns: Array<Ec_Enseignement_Update_Column>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.enseignement". */
export type Ec_Enseignement_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Ec_Annee_Order_By>;
  annee_cycle: InputMaybe<Order_By>;
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Order_By>;
  description: InputMaybe<Order_By>;
  ens_id_import: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Order_By>;
  formation_id_import: InputMaybe<Order_By>;
  groupes: InputMaybe<Order_By>;
  groupes_corriges: InputMaybe<Order_By>;
  groupes_ouverts: InputMaybe<Order_By>;
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mention: InputMaybe<Ec_Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  parcours: InputMaybe<Ec_Parcours_Order_By>;
  parcours_id: InputMaybe<Order_By>;
  parent: InputMaybe<Ec_Enseignement_Order_By>;
  parent_id: InputMaybe<Order_By>;
  priorites_aggregate: InputMaybe<Ec_Priorite_Aggregate_Order_By>;
  regle_priorite: InputMaybe<Order_By>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Order_By>;
  semestre: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  type_enseignement: InputMaybe<Ec_Type_Enseignement_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.enseignement */
export type Ec_Enseignement_Pk_Columns_Input = {
  /** L'identifiant unique de l'enseignement. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.enseignement" */
export enum Ec_Enseignement_Select_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  AnneeCycle = "annee_cycle",
  /** column name */
  Description = "description",
  /** column name */
  EnsIdImport = "ens_id_import",
  /** column name */
  FormationIdImport = "formation_id_import",
  /** column name */
  Groupes = "groupes",
  /** column name */
  GroupesOuverts = "groupes_ouverts",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  ParcoursId = "parcours_id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  ReglePriorite = "regle_priorite",
  /** column name */
  Semestre = "semestre",
  /** column name */
  Type = "type",
  /** column name */
  Visible = "visible",
}

/** select "ec_enseignement_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ec.enseignement" */
export enum Ec_Enseignement_Select_Column_Ec_Enseignement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "ec_enseignement_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ec.enseignement" */
export enum Ec_Enseignement_Select_Column_Ec_Enseignement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.enseignement" */
export type Ec_Enseignement_Set_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Scalars["String"]["input"]>;
  ens_id_import: InputMaybe<Scalars["String"]["input"]>;
  formation_id_import: InputMaybe<Scalars["String"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Scalars["Int"]["input"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type d'enseignement. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Enseignement_Stddev_Fields = {
  __typename?: "ec_enseignement_stddev_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Stddev_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Enseignement_Stddev_Pop_Fields = {
  __typename?: "ec_enseignement_stddev_pop_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Stddev_Pop_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Enseignement_Stddev_Samp_Fields = {
  __typename?: "ec_enseignement_stddev_samp_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Stddev_Samp_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_enseignement" */
export type Ec_Enseignement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Enseignement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Enseignement_Stream_Cursor_Value_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Scalars["Int"]["input"]>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Scalars["String"]["input"]>;
  ens_id_import: InputMaybe<Scalars["String"]["input"]>;
  formation_id_import: InputMaybe<Scalars["String"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Scalars["Int"]["input"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type d'enseignement. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Enseignement_Sum_Fields = {
  __typename?: "ec_enseignement_sum_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Int"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Int"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Int"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Sum_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** update columns of table "ec.enseignement" */
export enum Ec_Enseignement_Update_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  Description = "description",
  /** column name */
  EnsIdImport = "ens_id_import",
  /** column name */
  FormationIdImport = "formation_id_import",
  /** column name */
  Groupes = "groupes",
  /** column name */
  GroupesOuverts = "groupes_ouverts",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  ParcoursId = "parcours_id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  ReglePriorite = "regle_priorite",
  /** column name */
  Semestre = "semestre",
  /** column name */
  Type = "type",
  /** column name */
  Visible = "visible",
}

export type Ec_Enseignement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Enseignement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Enseignement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Enseignement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Enseignement_Var_Pop_Fields = {
  __typename?: "ec_enseignement_var_pop_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Var_Pop_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Enseignement_Var_Samp_Fields = {
  __typename?: "ec_enseignement_var_samp_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Var_Samp_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Enseignement_Variance_Fields = {
  __typename?: "ec_enseignement_variance_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour un enseignement donné, le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Float"]["output"]>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Float"]["output"]>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.enseignement" */
export type Ec_Enseignement_Variance_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement (devant les étudiants). */
  heures: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Order_By>;
};

/** Table contenant les intervenants. */
export type Ec_Intervenant = {
  __typename?: "ec_intervenant";
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: Scalars["Boolean"]["output"];
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  demandes: Array<Ec_Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Ec_Demande_Aggregate;
  /** An array relationship */
  messages: Array<Ec_Message>;
  /** An aggregate relationship */
  messages_aggregate: Ec_Message_Aggregate;
  /** An array relationship */
  modifications_service: Array<Ec_Modification_Service>;
  /** An aggregate relationship */
  modifications_service_aggregate: Ec_Modification_Service_Aggregate;
  /** Le nom de l'intervenant. */
  nom: Scalars["String"]["output"];
  /** Le prénom de l'intervenant. */
  prenom: Scalars["String"]["output"];
  /** An array relationship */
  priorites: Array<Ec_Priorite>;
  /** An aggregate relationship */
  priorites_aggregate: Ec_Priorite_Aggregate;
  /** An array relationship */
  responsables: Array<Ec_Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Ec_Responsable_Aggregate;
  service: Maybe<Scalars["Float"]["output"]>;
  /** An array relationship */
  services: Array<Ec_Service>;
  /** An aggregate relationship */
  services_aggregate: Ec_Service_Aggregate;
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars["String"]["output"];
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les intervenants. */
export type Ec_IntervenantDemandesArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantMessagesArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantModifications_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantModifications_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantPrioritesArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantPriorites_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantResponsablesArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantServicesArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Ec_IntervenantServices_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

/** aggregated selection of "ec.intervenant" */
export type Ec_Intervenant_Aggregate = {
  __typename?: "ec_intervenant_aggregate";
  aggregate: Maybe<Ec_Intervenant_Aggregate_Fields>;
  nodes: Array<Ec_Intervenant>;
};

/** aggregate fields of "ec.intervenant" */
export type Ec_Intervenant_Aggregate_Fields = {
  __typename?: "ec_intervenant_aggregate_fields";
  avg: Maybe<Ec_Intervenant_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Intervenant_Max_Fields>;
  min: Maybe<Ec_Intervenant_Min_Fields>;
  stddev: Maybe<Ec_Intervenant_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Intervenant_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Intervenant_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Intervenant_Sum_Fields>;
  var_pop: Maybe<Ec_Intervenant_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Intervenant_Var_Samp_Fields>;
  variance: Maybe<Ec_Intervenant_Variance_Fields>;
};

/** aggregate fields of "ec.intervenant" */
export type Ec_Intervenant_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Intervenant_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Ec_Intervenant_Avg_Fields = {
  __typename?: "ec_intervenant_avg_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "ec.intervenant". All fields are combined with a logical 'AND'. */
export type Ec_Intervenant_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Intervenant_Bool_Exp>>;
  _not: InputMaybe<Ec_Intervenant_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Intervenant_Bool_Exp>>;
  actif: InputMaybe<Boolean_Comparison_Exp>;
  alias: InputMaybe<String_Comparison_Exp>;
  demandes: InputMaybe<Ec_Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Bool_Exp>;
  messages: InputMaybe<Ec_Message_Bool_Exp>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Bool_Exp>;
  modifications_service: InputMaybe<Ec_Modification_Service_Bool_Exp>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Bool_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  prenom: InputMaybe<String_Comparison_Exp>;
  priorites: InputMaybe<Ec_Priorite_Bool_Exp>;
  priorites_aggregate: InputMaybe<Ec_Priorite_Aggregate_Bool_Exp>;
  responsables: InputMaybe<Ec_Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Bool_Exp>;
  service: InputMaybe<Float_Comparison_Exp>;
  services: InputMaybe<Ec_Service_Bool_Exp>;
  services_aggregate: InputMaybe<Ec_Service_Aggregate_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.intervenant" */
export enum Ec_Intervenant_Constraint {
  /** unique or primary key constraint on columns "uid" */
  IntervenantPkey = "intervenant_pkey",
}

/** input type for incrementing numeric columns in table "ec.intervenant" */
export type Ec_Intervenant_Inc_Input = {
  service: InputMaybe<Scalars["Float"]["input"]>;
};

/** input type for inserting data into table "ec.intervenant" */
export type Ec_Intervenant_Insert_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  demandes: InputMaybe<Ec_Demande_Arr_Rel_Insert_Input>;
  messages: InputMaybe<Ec_Message_Arr_Rel_Insert_Input>;
  modifications_service: InputMaybe<Ec_Modification_Service_Arr_Rel_Insert_Input>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  priorites: InputMaybe<Ec_Priorite_Arr_Rel_Insert_Input>;
  responsables: InputMaybe<Ec_Responsable_Arr_Rel_Insert_Input>;
  service: InputMaybe<Scalars["Float"]["input"]>;
  services: InputMaybe<Ec_Service_Arr_Rel_Insert_Input>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Intervenant_Max_Fields = {
  __typename?: "ec_intervenant_max_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** Le nom de l'intervenant. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le prénom de l'intervenant. */
  prenom: Maybe<Scalars["String"]["output"]>;
  service: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Intervenant_Min_Fields = {
  __typename?: "ec_intervenant_min_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** Le nom de l'intervenant. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le prénom de l'intervenant. */
  prenom: Maybe<Scalars["String"]["output"]>;
  service: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.intervenant" */
export type Ec_Intervenant_Mutation_Response = {
  __typename?: "ec_intervenant_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Intervenant>;
};

/** input type for inserting object relation for remote table "ec.intervenant" */
export type Ec_Intervenant_Obj_Rel_Insert_Input = {
  data: Ec_Intervenant_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Intervenant_On_Conflict>;
};

/** on_conflict condition type for table "ec.intervenant" */
export type Ec_Intervenant_On_Conflict = {
  constraint: Ec_Intervenant_Constraint;
  update_columns: Array<Ec_Intervenant_Update_Column>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.intervenant". */
export type Ec_Intervenant_Order_By = {
  actif: InputMaybe<Order_By>;
  alias: InputMaybe<Order_By>;
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Order_By>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Order_By>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Order_By>;
  nom: InputMaybe<Order_By>;
  prenom: InputMaybe<Order_By>;
  priorites_aggregate: InputMaybe<Ec_Priorite_Aggregate_Order_By>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Order_By>;
  service: InputMaybe<Order_By>;
  services_aggregate: InputMaybe<Ec_Service_Aggregate_Order_By>;
  uid: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.intervenant */
export type Ec_Intervenant_Pk_Columns_Input = {
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars["String"]["input"];
};

/** select columns of table "ec.intervenant" */
export enum Ec_Intervenant_Select_Column {
  /** column name */
  Actif = "actif",
  /** column name */
  Alias = "alias",
  /** column name */
  Nom = "nom",
  /** column name */
  Prenom = "prenom",
  /** column name */
  Service = "service",
  /** column name */
  Uid = "uid",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.intervenant" */
export type Ec_Intervenant_Set_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  service: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Intervenant_Stddev_Fields = {
  __typename?: "ec_intervenant_stddev_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Ec_Intervenant_Stddev_Pop_Fields = {
  __typename?: "ec_intervenant_stddev_pop_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Ec_Intervenant_Stddev_Samp_Fields = {
  __typename?: "ec_intervenant_stddev_samp_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "ec_intervenant" */
export type Ec_Intervenant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Intervenant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Intervenant_Stream_Cursor_Value_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  service: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Intervenant_Sum_Fields = {
  __typename?: "ec_intervenant_sum_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** update columns of table "ec.intervenant" */
export enum Ec_Intervenant_Update_Column {
  /** column name */
  Actif = "actif",
  /** column name */
  Alias = "alias",
  /** column name */
  Nom = "nom",
  /** column name */
  Prenom = "prenom",
  /** column name */
  Service = "service",
  /** column name */
  Uid = "uid",
  /** column name */
  Visible = "visible",
}

export type Ec_Intervenant_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Intervenant_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Intervenant_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Intervenant_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Intervenant_Var_Pop_Fields = {
  __typename?: "ec_intervenant_var_pop_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Ec_Intervenant_Var_Samp_Fields = {
  __typename?: "ec_intervenant_var_samp_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Ec_Intervenant_Variance_Fields = {
  __typename?: "ec_intervenant_variance_fields";
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les différentes mentions. */
export type Ec_Mention = {
  __typename?: "ec_mention";
  /** An object relationship */
  cursus: Ec_Cursus;
  cursus_id: Scalars["Int"]["output"];
  /** An array relationship */
  enseignements: Array<Ec_Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Ec_Enseignement_Aggregate;
  /** L'identifiant unique de la mention. */
  id: Scalars["Int"]["output"];
  /** Le nom de la mention (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  parcours: Array<Ec_Parcours>;
  /** An aggregate relationship */
  parcours_aggregate: Ec_Parcours_Aggregate;
  /** An array relationship */
  responsables: Array<Ec_Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Ec_Responsable_Aggregate;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différentes mentions. */
export type Ec_MentionEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type Ec_MentionEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type Ec_MentionParcoursArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type Ec_MentionParcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type Ec_MentionResponsablesArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type Ec_MentionResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** aggregated selection of "ec.mention" */
export type Ec_Mention_Aggregate = {
  __typename?: "ec_mention_aggregate";
  aggregate: Maybe<Ec_Mention_Aggregate_Fields>;
  nodes: Array<Ec_Mention>;
};

export type Ec_Mention_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Ec_Mention_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Ec_Mention_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Ec_Mention_Aggregate_Bool_Exp_Count>;
};

export type Ec_Mention_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ec_Mention_Select_Column_Ec_Mention_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Mention_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Mention_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ec_Mention_Select_Column_Ec_Mention_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Mention_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Mention_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Mention_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Mention_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.mention" */
export type Ec_Mention_Aggregate_Fields = {
  __typename?: "ec_mention_aggregate_fields";
  avg: Maybe<Ec_Mention_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Mention_Max_Fields>;
  min: Maybe<Ec_Mention_Min_Fields>;
  stddev: Maybe<Ec_Mention_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Mention_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Mention_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Mention_Sum_Fields>;
  var_pop: Maybe<Ec_Mention_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Mention_Var_Samp_Fields>;
  variance: Maybe<Ec_Mention_Variance_Fields>;
};

/** aggregate fields of "ec.mention" */
export type Ec_Mention_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Mention_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.mention" */
export type Ec_Mention_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Mention_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Mention_Max_Order_By>;
  min: InputMaybe<Ec_Mention_Min_Order_By>;
  stddev: InputMaybe<Ec_Mention_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Mention_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Mention_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Mention_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Mention_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Mention_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Mention_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.mention" */
export type Ec_Mention_Arr_Rel_Insert_Input = {
  data: Array<Ec_Mention_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Mention_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Mention_Avg_Fields = {
  __typename?: "ec_mention_avg_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.mention" */
export type Ec_Mention_Avg_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.mention". All fields are combined with a logical 'AND'. */
export type Ec_Mention_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Mention_Bool_Exp>>;
  _not: InputMaybe<Ec_Mention_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Mention_Bool_Exp>>;
  cursus: InputMaybe<Ec_Cursus_Bool_Exp>;
  cursus_id: InputMaybe<Int_Comparison_Exp>;
  enseignements: InputMaybe<Ec_Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  parcours: InputMaybe<Ec_Parcours_Bool_Exp>;
  parcours_aggregate: InputMaybe<Ec_Parcours_Aggregate_Bool_Exp>;
  responsables: InputMaybe<Ec_Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.mention" */
export enum Ec_Mention_Constraint {
  /** unique or primary key constraint on columns "cursus_id", "nom" */
  MentionCursusIdNomKey = "mention_cursus_id_nom_key",
  /** unique or primary key constraint on columns "id" */
  MentionPkey = "mention_pkey",
}

/** input type for incrementing numeric columns in table "ec.mention" */
export type Ec_Mention_Inc_Input = {
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.mention" */
export type Ec_Mention_Insert_Input = {
  cursus: InputMaybe<Ec_Cursus_Obj_Rel_Insert_Input>;
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignements: InputMaybe<Ec_Enseignement_Arr_Rel_Insert_Input>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  parcours: InputMaybe<Ec_Parcours_Arr_Rel_Insert_Input>;
  responsables: InputMaybe<Ec_Responsable_Arr_Rel_Insert_Input>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Mention_Max_Fields = {
  __typename?: "ec_mention_max_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de la mention (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.mention" */
export type Ec_Mention_Max_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Mention_Min_Fields = {
  __typename?: "ec_mention_min_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de la mention (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.mention" */
export type Ec_Mention_Min_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.mention" */
export type Ec_Mention_Mutation_Response = {
  __typename?: "ec_mention_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Mention>;
};

/** input type for inserting object relation for remote table "ec.mention" */
export type Ec_Mention_Obj_Rel_Insert_Input = {
  data: Ec_Mention_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Mention_On_Conflict>;
};

/** on_conflict condition type for table "ec.mention" */
export type Ec_Mention_On_Conflict = {
  constraint: Ec_Mention_Constraint;
  update_columns: Array<Ec_Mention_Update_Column>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.mention". */
export type Ec_Mention_Order_By = {
  cursus: InputMaybe<Ec_Cursus_Order_By>;
  cursus_id: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  parcours_aggregate: InputMaybe<Ec_Parcours_Aggregate_Order_By>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.mention */
export type Ec_Mention_Pk_Columns_Input = {
  /** L'identifiant unique de la mention. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.mention" */
export enum Ec_Mention_Select_Column {
  /** column name */
  CursusId = "cursus_id",
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  Visible = "visible",
}

/** select "ec_mention_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ec.mention" */
export enum Ec_Mention_Select_Column_Ec_Mention_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "ec_mention_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ec.mention" */
export enum Ec_Mention_Select_Column_Ec_Mention_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.mention" */
export type Ec_Mention_Set_Input = {
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Mention_Stddev_Fields = {
  __typename?: "ec_mention_stddev_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.mention" */
export type Ec_Mention_Stddev_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Mention_Stddev_Pop_Fields = {
  __typename?: "ec_mention_stddev_pop_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.mention" */
export type Ec_Mention_Stddev_Pop_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Mention_Stddev_Samp_Fields = {
  __typename?: "ec_mention_stddev_samp_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.mention" */
export type Ec_Mention_Stddev_Samp_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_mention" */
export type Ec_Mention_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Mention_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Mention_Stream_Cursor_Value_Input = {
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Mention_Sum_Fields = {
  __typename?: "ec_mention_sum_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.mention" */
export type Ec_Mention_Sum_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.mention" */
export enum Ec_Mention_Update_Column {
  /** column name */
  CursusId = "cursus_id",
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  Visible = "visible",
}

export type Ec_Mention_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Mention_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Mention_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Mention_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Mention_Var_Pop_Fields = {
  __typename?: "ec_mention_var_pop_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.mention" */
export type Ec_Mention_Var_Pop_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Mention_Var_Samp_Fields = {
  __typename?: "ec_mention_var_samp_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.mention" */
export type Ec_Mention_Var_Samp_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Mention_Variance_Fields = {
  __typename?: "ec_mention_variance_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.mention" */
export type Ec_Mention_Variance_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Table contenant les messages enregistrés sur Geyser. */
export type Ec_Message = {
  __typename?: "ec_message";
  /** L'année du message. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Ec_Annee;
  /** Le contenu du message. */
  contenu: Scalars["String"]["output"];
  /** L'identifiant unique du message. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** Le type de message. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  type_message: Ec_Type_Message;
  /** L'identifiant de l'intervenant concerné. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.message" */
export type Ec_Message_Aggregate = {
  __typename?: "ec_message_aggregate";
  aggregate: Maybe<Ec_Message_Aggregate_Fields>;
  nodes: Array<Ec_Message>;
};

export type Ec_Message_Aggregate_Bool_Exp = {
  count: InputMaybe<Ec_Message_Aggregate_Bool_Exp_Count>;
};

export type Ec_Message_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Message_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.message" */
export type Ec_Message_Aggregate_Fields = {
  __typename?: "ec_message_aggregate_fields";
  avg: Maybe<Ec_Message_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Message_Max_Fields>;
  min: Maybe<Ec_Message_Min_Fields>;
  stddev: Maybe<Ec_Message_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Message_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Message_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Message_Sum_Fields>;
  var_pop: Maybe<Ec_Message_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Message_Var_Samp_Fields>;
  variance: Maybe<Ec_Message_Variance_Fields>;
};

/** aggregate fields of "ec.message" */
export type Ec_Message_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Message_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.message" */
export type Ec_Message_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Message_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Message_Max_Order_By>;
  min: InputMaybe<Ec_Message_Min_Order_By>;
  stddev: InputMaybe<Ec_Message_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Message_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Message_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Message_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Message_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Message_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.message" */
export type Ec_Message_Arr_Rel_Insert_Input = {
  data: Array<Ec_Message_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Message_Avg_Fields = {
  __typename?: "ec_message_avg_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.message" */
export type Ec_Message_Avg_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.message". All fields are combined with a logical 'AND'. */
export type Ec_Message_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Message_Bool_Exp>>;
  _not: InputMaybe<Ec_Message_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Message_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Ec_Annee_Bool_Exp>;
  contenu: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  type_message: InputMaybe<Ec_Type_Message_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.message" */
export enum Ec_Message_Constraint {
  /** unique or primary key constraint on columns "annee", "uid", "type" */
  MessageAnneeUidTypeKey = "message_annee_uid_type_key",
  /** unique or primary key constraint on columns "id" */
  MessagePkey = "message_pkey",
}

/** input type for incrementing numeric columns in table "ec.message" */
export type Ec_Message_Inc_Input = {
  /** L'année du message. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.message" */
export type Ec_Message_Insert_Input = {
  /** L'année du message. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Ec_Annee_Obj_Rel_Insert_Input>;
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  /** Le type de message. */
  type: InputMaybe<Scalars["String"]["input"]>;
  type_message: InputMaybe<Ec_Type_Message_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant concerné. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Message_Max_Fields = {
  __typename?: "ec_message_max_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le contenu du message. */
  contenu: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de message. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant concerné. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.message" */
export type Ec_Message_Max_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** Le contenu du message. */
  contenu: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  /** Le type de message. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant concerné. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Message_Min_Fields = {
  __typename?: "ec_message_min_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le contenu du message. */
  contenu: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de message. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant concerné. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.message" */
export type Ec_Message_Min_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** Le contenu du message. */
  contenu: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  /** Le type de message. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant concerné. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.message" */
export type Ec_Message_Mutation_Response = {
  __typename?: "ec_message_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Message>;
};

/** on_conflict condition type for table "ec.message" */
export type Ec_Message_On_Conflict = {
  constraint: Ec_Message_Constraint;
  update_columns: Array<Ec_Message_Update_Column>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.message". */
export type Ec_Message_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Ec_Annee_Order_By>;
  contenu: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  type: InputMaybe<Order_By>;
  type_message: InputMaybe<Ec_Type_Message_Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.message */
export type Ec_Message_Pk_Columns_Input = {
  /** L'identifiant unique du message. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.message" */
export enum Ec_Message_Select_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  Contenu = "contenu",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "ec.message" */
export type Ec_Message_Set_Input = {
  /** L'année du message. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de message. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant concerné. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Message_Stddev_Fields = {
  __typename?: "ec_message_stddev_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.message" */
export type Ec_Message_Stddev_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Message_Stddev_Pop_Fields = {
  __typename?: "ec_message_stddev_pop_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.message" */
export type Ec_Message_Stddev_Pop_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Message_Stddev_Samp_Fields = {
  __typename?: "ec_message_stddev_samp_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.message" */
export type Ec_Message_Stddev_Samp_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_message" */
export type Ec_Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Message_Stream_Cursor_Value_Input = {
  /** L'année du message. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de message. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant concerné. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Message_Sum_Fields = {
  __typename?: "ec_message_sum_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.message" */
export type Ec_Message_Sum_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.message" */
export enum Ec_Message_Update_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  Contenu = "contenu",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

export type Ec_Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Message_Var_Pop_Fields = {
  __typename?: "ec_message_var_pop_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.message" */
export type Ec_Message_Var_Pop_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Message_Var_Samp_Fields = {
  __typename?: "ec_message_var_samp_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.message" */
export type Ec_Message_Var_Samp_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Message_Variance_Fields = {
  __typename?: "ec_message_variance_fields";
  /** L'année du message. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.message" */
export type Ec_Message_Variance_Order_By = {
  /** L'année du message. */
  annee: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
};

/** Table contenant les modifications du service de base d'un intervenant donné pour une année donnée. */
export type Ec_Modification_Service = {
  __typename?: "ec_modification_service";
  /** L'année correspondant au service modifié. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Ec_Annee;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Scalars["Float"]["output"];
  /** L'identifiant unique de la modification. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** Le type de modification. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  type_modification: Ec_Type_Modification;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.modification_service" */
export type Ec_Modification_Service_Aggregate = {
  __typename?: "ec_modification_service_aggregate";
  aggregate: Maybe<Ec_Modification_Service_Aggregate_Fields>;
  nodes: Array<Ec_Modification_Service>;
};

export type Ec_Modification_Service_Aggregate_Bool_Exp = {
  count: InputMaybe<Ec_Modification_Service_Aggregate_Bool_Exp_Count>;
};

export type Ec_Modification_Service_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Modification_Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.modification_service" */
export type Ec_Modification_Service_Aggregate_Fields = {
  __typename?: "ec_modification_service_aggregate_fields";
  avg: Maybe<Ec_Modification_Service_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Modification_Service_Max_Fields>;
  min: Maybe<Ec_Modification_Service_Min_Fields>;
  stddev: Maybe<Ec_Modification_Service_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Modification_Service_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Modification_Service_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Modification_Service_Sum_Fields>;
  var_pop: Maybe<Ec_Modification_Service_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Modification_Service_Var_Samp_Fields>;
  variance: Maybe<Ec_Modification_Service_Variance_Fields>;
};

/** aggregate fields of "ec.modification_service" */
export type Ec_Modification_Service_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.modification_service" */
export type Ec_Modification_Service_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Modification_Service_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Modification_Service_Max_Order_By>;
  min: InputMaybe<Ec_Modification_Service_Min_Order_By>;
  stddev: InputMaybe<Ec_Modification_Service_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Modification_Service_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Modification_Service_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Modification_Service_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Modification_Service_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Modification_Service_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Modification_Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.modification_service" */
export type Ec_Modification_Service_Arr_Rel_Insert_Input = {
  data: Array<Ec_Modification_Service_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Modification_Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Modification_Service_Avg_Fields = {
  __typename?: "ec_modification_service_avg_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Avg_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.modification_service". All fields are combined with a logical 'AND'. */
export type Ec_Modification_Service_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Modification_Service_Bool_Exp>>;
  _not: InputMaybe<Ec_Modification_Service_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Modification_Service_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Ec_Annee_Bool_Exp>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  type_modification: InputMaybe<Ec_Type_Modification_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.modification_service" */
export enum Ec_Modification_Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModificationServicePkey = "modification_service_pkey",
}

/** input type for incrementing numeric columns in table "ec.modification_service" */
export type Ec_Modification_Service_Inc_Input = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.modification_service" */
export type Ec_Modification_Service_Insert_Input = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Ec_Annee_Obj_Rel_Insert_Input>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
  type_modification: InputMaybe<Ec_Type_Modification_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Modification_Service_Max_Fields = {
  __typename?: "ec_modification_service_max_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de modification. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Max_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  /** Le type de modification. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Modification_Service_Min_Fields = {
  __typename?: "ec_modification_service_min_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de modification. */
  type: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Min_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  /** Le type de modification. */
  type: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.modification_service" */
export type Ec_Modification_Service_Mutation_Response = {
  __typename?: "ec_modification_service_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Modification_Service>;
};

/** on_conflict condition type for table "ec.modification_service" */
export type Ec_Modification_Service_On_Conflict = {
  constraint: Ec_Modification_Service_Constraint;
  update_columns: Array<Ec_Modification_Service_Update_Column>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.modification_service". */
export type Ec_Modification_Service_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Ec_Annee_Order_By>;
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  type: InputMaybe<Order_By>;
  type_modification: InputMaybe<Ec_Type_Modification_Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.modification_service */
export type Ec_Modification_Service_Pk_Columns_Input = {
  /** L'identifiant unique de la modification. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.modification_service" */
export enum Ec_Modification_Service_Select_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "ec.modification_service" */
export type Ec_Modification_Service_Set_Input = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Modification_Service_Stddev_Fields = {
  __typename?: "ec_modification_service_stddev_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Stddev_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Modification_Service_Stddev_Pop_Fields = {
  __typename?: "ec_modification_service_stddev_pop_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Stddev_Pop_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Modification_Service_Stddev_Samp_Fields = {
  __typename?: "ec_modification_service_stddev_samp_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Stddev_Samp_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_modification_service" */
export type Ec_Modification_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Modification_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Modification_Service_Stream_Cursor_Value_Input = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'intervenant correspondant au service modifié. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Modification_Service_Sum_Fields = {
  __typename?: "ec_modification_service_sum_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Sum_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.modification_service" */
export enum Ec_Modification_Service_Update_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  Uid = "uid",
}

export type Ec_Modification_Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Modification_Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Modification_Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Modification_Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Modification_Service_Var_Pop_Fields = {
  __typename?: "ec_modification_service_var_pop_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Var_Pop_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Modification_Service_Var_Samp_Fields = {
  __typename?: "ec_modification_service_var_samp_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Var_Samp_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Modification_Service_Variance_Fields = {
  __typename?: "ec_modification_service_variance_fields";
  /** L'année correspondant au service modifié. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.modification_service" */
export type Ec_Modification_Service_Variance_Order_By = {
  /** L'année correspondant au service modifié. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
};

/** Table contenant les différents parcours. */
export type Ec_Parcours = {
  __typename?: "ec_parcours";
  /** An array relationship */
  enseignements: Array<Ec_Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Ec_Enseignement_Aggregate;
  /** L'identifiant unique du parcours. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  mention: Ec_Mention;
  mention_id: Scalars["Int"]["output"];
  /** Le nom du parcours (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  responsables: Array<Ec_Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Ec_Responsable_Aggregate;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différents parcours. */
export type Ec_ParcoursEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type Ec_ParcoursEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type Ec_ParcoursResponsablesArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type Ec_ParcoursResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** aggregated selection of "ec.parcours" */
export type Ec_Parcours_Aggregate = {
  __typename?: "ec_parcours_aggregate";
  aggregate: Maybe<Ec_Parcours_Aggregate_Fields>;
  nodes: Array<Ec_Parcours>;
};

export type Ec_Parcours_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Ec_Parcours_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Ec_Parcours_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Ec_Parcours_Aggregate_Bool_Exp_Count>;
};

export type Ec_Parcours_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ec_Parcours_Select_Column_Ec_Parcours_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Parcours_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Parcours_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ec_Parcours_Select_Column_Ec_Parcours_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Parcours_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Parcours_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Parcours_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.parcours" */
export type Ec_Parcours_Aggregate_Fields = {
  __typename?: "ec_parcours_aggregate_fields";
  avg: Maybe<Ec_Parcours_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Parcours_Max_Fields>;
  min: Maybe<Ec_Parcours_Min_Fields>;
  stddev: Maybe<Ec_Parcours_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Parcours_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Parcours_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Parcours_Sum_Fields>;
  var_pop: Maybe<Ec_Parcours_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Parcours_Var_Samp_Fields>;
  variance: Maybe<Ec_Parcours_Variance_Fields>;
};

/** aggregate fields of "ec.parcours" */
export type Ec_Parcours_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.parcours" */
export type Ec_Parcours_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Parcours_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Parcours_Max_Order_By>;
  min: InputMaybe<Ec_Parcours_Min_Order_By>;
  stddev: InputMaybe<Ec_Parcours_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Parcours_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Parcours_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Parcours_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Parcours_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Parcours_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Parcours_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.parcours" */
export type Ec_Parcours_Arr_Rel_Insert_Input = {
  data: Array<Ec_Parcours_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Parcours_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Parcours_Avg_Fields = {
  __typename?: "ec_parcours_avg_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.parcours" */
export type Ec_Parcours_Avg_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.parcours". All fields are combined with a logical 'AND'. */
export type Ec_Parcours_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Parcours_Bool_Exp>>;
  _not: InputMaybe<Ec_Parcours_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Parcours_Bool_Exp>>;
  enseignements: InputMaybe<Ec_Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  mention: InputMaybe<Ec_Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  responsables: InputMaybe<Ec_Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.parcours" */
export enum Ec_Parcours_Constraint {
  /** unique or primary key constraint on columns "mention_id", "nom" */
  ParcoursMentionIdNomKey = "parcours_mention_id_nom_key",
  /** unique or primary key constraint on columns "id" */
  ParcoursPkey = "parcours_pkey",
}

/** input type for incrementing numeric columns in table "ec.parcours" */
export type Ec_Parcours_Inc_Input = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.parcours" */
export type Ec_Parcours_Insert_Input = {
  enseignements: InputMaybe<Ec_Enseignement_Arr_Rel_Insert_Input>;
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention: InputMaybe<Ec_Mention_Obj_Rel_Insert_Input>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  responsables: InputMaybe<Ec_Responsable_Arr_Rel_Insert_Input>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Parcours_Max_Fields = {
  __typename?: "ec_parcours_max_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du parcours (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.parcours" */
export type Ec_Parcours_Max_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Parcours_Min_Fields = {
  __typename?: "ec_parcours_min_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du parcours (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.parcours" */
export type Ec_Parcours_Min_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.parcours" */
export type Ec_Parcours_Mutation_Response = {
  __typename?: "ec_parcours_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Parcours>;
};

/** input type for inserting object relation for remote table "ec.parcours" */
export type Ec_Parcours_Obj_Rel_Insert_Input = {
  data: Ec_Parcours_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Parcours_On_Conflict>;
};

/** on_conflict condition type for table "ec.parcours" */
export type Ec_Parcours_On_Conflict = {
  constraint: Ec_Parcours_Constraint;
  update_columns: Array<Ec_Parcours_Update_Column>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.parcours". */
export type Ec_Parcours_Order_By = {
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  mention: InputMaybe<Ec_Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  responsables_aggregate: InputMaybe<Ec_Responsable_Aggregate_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.parcours */
export type Ec_Parcours_Pk_Columns_Input = {
  /** L'identifiant unique du parcours. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.parcours" */
export enum Ec_Parcours_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  Visible = "visible",
}

/** select "ec_parcours_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ec.parcours" */
export enum Ec_Parcours_Select_Column_Ec_Parcours_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "ec_parcours_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ec.parcours" */
export enum Ec_Parcours_Select_Column_Ec_Parcours_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.parcours" */
export type Ec_Parcours_Set_Input = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Parcours_Stddev_Fields = {
  __typename?: "ec_parcours_stddev_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.parcours" */
export type Ec_Parcours_Stddev_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Parcours_Stddev_Pop_Fields = {
  __typename?: "ec_parcours_stddev_pop_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.parcours" */
export type Ec_Parcours_Stddev_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Parcours_Stddev_Samp_Fields = {
  __typename?: "ec_parcours_stddev_samp_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.parcours" */
export type Ec_Parcours_Stddev_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_parcours" */
export type Ec_Parcours_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Parcours_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Parcours_Stream_Cursor_Value_Input = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Parcours_Sum_Fields = {
  __typename?: "ec_parcours_sum_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.parcours" */
export type Ec_Parcours_Sum_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** update columns of table "ec.parcours" */
export enum Ec_Parcours_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  NomImport = "nom_import",
  /** column name */
  Visible = "visible",
}

export type Ec_Parcours_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Parcours_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Parcours_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Parcours_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Parcours_Var_Pop_Fields = {
  __typename?: "ec_parcours_var_pop_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.parcours" */
export type Ec_Parcours_Var_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Parcours_Var_Samp_Fields = {
  __typename?: "ec_parcours_var_samp_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.parcours" */
export type Ec_Parcours_Var_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Parcours_Variance_Fields = {
  __typename?: "ec_parcours_variance_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.parcours" */
export type Ec_Parcours_Variance_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Table contenant les différentes phases (voeux, commission et consultation). D'autres phases pourront être ajoutées par la suite. */
export type Ec_Phase = {
  __typename?: "ec_phase";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: Maybe<Scalars["Boolean"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Scalars["String"]["output"];
  /** Indique si la phase correspondante est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** aggregated selection of "ec.phase" */
export type Ec_Phase_Aggregate = {
  __typename?: "ec_phase_aggregate";
  aggregate: Maybe<Ec_Phase_Aggregate_Fields>;
  nodes: Array<Ec_Phase>;
};

/** aggregate fields of "ec.phase" */
export type Ec_Phase_Aggregate_Fields = {
  __typename?: "ec_phase_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Phase_Max_Fields>;
  min: Maybe<Ec_Phase_Min_Fields>;
};

/** aggregate fields of "ec.phase" */
export type Ec_Phase_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Phase_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ec.phase". All fields are combined with a logical 'AND'. */
export type Ec_Phase_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Phase_Bool_Exp>>;
  _not: InputMaybe<Ec_Phase_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Phase_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  en_cours: InputMaybe<Boolean_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.phase" */
export enum Ec_Phase_Constraint {
  /** unique or primary key constraint on columns "en_cours" */
  PhaseEnCoursKey = "phase_en_cours_key",
  /** unique or primary key constraint on columns "value" */
  PhasePkey = "phase_pkey",
}

/** input type for inserting data into table "ec.phase" */
export type Ec_Phase_Insert_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Phase_Max_Fields = {
  __typename?: "ec_phase_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Phase_Min_Fields = {
  __typename?: "ec_phase_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.phase" */
export type Ec_Phase_Mutation_Response = {
  __typename?: "ec_phase_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Phase>;
};

/** on_conflict condition type for table "ec.phase" */
export type Ec_Phase_On_Conflict = {
  constraint: Ec_Phase_Constraint;
  update_columns: Array<Ec_Phase_Update_Column>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.phase". */
export type Ec_Phase_Order_By = {
  description: InputMaybe<Order_By>;
  en_cours: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.phase */
export type Ec_Phase_Pk_Columns_Input = {
  /** Le nom de la phase (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "ec.phase" */
export enum Ec_Phase_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "ec.phase" */
export type Ec_Phase_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Streaming cursor of the table "ec_phase" */
export type Ec_Phase_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Phase_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Phase_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** update columns of table "ec.phase" */
export enum Ec_Phase_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

export type Ec_Phase_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Phase_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Phase_Bool_Exp;
};

/** Table contenant les informations relatives à l'ancienneté et la priorité des intervenants sur les enseignements. */
export type Ec_Priorite = {
  __typename?: "ec_priorite";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Scalars["Int"]["output"];
  /** An object relationship */
  enseignement: Ec_Enseignement;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: Maybe<Scalars["Boolean"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.priorite" */
export type Ec_Priorite_Aggregate = {
  __typename?: "ec_priorite_aggregate";
  aggregate: Maybe<Ec_Priorite_Aggregate_Fields>;
  nodes: Array<Ec_Priorite>;
};

export type Ec_Priorite_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Ec_Priorite_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Ec_Priorite_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Ec_Priorite_Aggregate_Bool_Exp_Count>;
};

export type Ec_Priorite_Aggregate_Bool_Exp_Bool_And = {
  arguments: Ec_Priorite_Select_Column_Ec_Priorite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Priorite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Priorite_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Ec_Priorite_Select_Column_Ec_Priorite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Priorite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Ec_Priorite_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Priorite_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.priorite" */
export type Ec_Priorite_Aggregate_Fields = {
  __typename?: "ec_priorite_aggregate_fields";
  avg: Maybe<Ec_Priorite_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Priorite_Max_Fields>;
  min: Maybe<Ec_Priorite_Min_Fields>;
  stddev: Maybe<Ec_Priorite_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Priorite_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Priorite_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Priorite_Sum_Fields>;
  var_pop: Maybe<Ec_Priorite_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Priorite_Var_Samp_Fields>;
  variance: Maybe<Ec_Priorite_Variance_Fields>;
};

/** aggregate fields of "ec.priorite" */
export type Ec_Priorite_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.priorite" */
export type Ec_Priorite_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Priorite_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Priorite_Max_Order_By>;
  min: InputMaybe<Ec_Priorite_Min_Order_By>;
  stddev: InputMaybe<Ec_Priorite_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Priorite_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Priorite_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Priorite_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Priorite_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Priorite_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Priorite_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.priorite" */
export type Ec_Priorite_Arr_Rel_Insert_Input = {
  data: Array<Ec_Priorite_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Priorite_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Priorite_Avg_Fields = {
  __typename?: "ec_priorite_avg_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.priorite" */
export type Ec_Priorite_Avg_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.priorite". All fields are combined with a logical 'AND'. */
export type Ec_Priorite_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Priorite_Bool_Exp>>;
  _not: InputMaybe<Ec_Priorite_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Priorite_Bool_Exp>>;
  anciennete: InputMaybe<Int_Comparison_Exp>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Ec_Enseignement_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  prioritaire: InputMaybe<Boolean_Comparison_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.priorite" */
export enum Ec_Priorite_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrioritePkey = "priorite_pkey",
  /** unique or primary key constraint on columns "uid", "ens_id" */
  PrioriteUidEnsIdKey = "priorite_uid_ens_id_key",
}

/** input type for incrementing numeric columns in table "ec.priorite" */
export type Ec_Priorite_Inc_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.priorite" */
export type Ec_Priorite_Insert_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Ec_Enseignement_Obj_Rel_Insert_Input>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: InputMaybe<Scalars["Boolean"]["input"]>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Priorite_Max_Fields = {
  __typename?: "ec_priorite_max_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.priorite" */
export type Ec_Priorite_Max_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Priorite_Min_Fields = {
  __typename?: "ec_priorite_min_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.priorite" */
export type Ec_Priorite_Min_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.priorite" */
export type Ec_Priorite_Mutation_Response = {
  __typename?: "ec_priorite_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Priorite>;
};

/** on_conflict condition type for table "ec.priorite" */
export type Ec_Priorite_On_Conflict = {
  constraint: Ec_Priorite_Constraint;
  update_columns: Array<Ec_Priorite_Update_Column>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.priorite". */
export type Ec_Priorite_Order_By = {
  anciennete: InputMaybe<Order_By>;
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Ec_Enseignement_Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  prioritaire: InputMaybe<Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.priorite */
export type Ec_Priorite_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.priorite" */
export enum Ec_Priorite_Select_Column {
  /** column name */
  Anciennete = "anciennete",
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Id = "id",
  /** column name */
  Prioritaire = "prioritaire",
  /** column name */
  Uid = "uid",
}

/** select "ec_priorite_aggregate_bool_exp_bool_and_arguments_columns" columns of table "ec.priorite" */
export enum Ec_Priorite_Select_Column_Ec_Priorite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Prioritaire = "prioritaire",
}

/** select "ec_priorite_aggregate_bool_exp_bool_or_arguments_columns" columns of table "ec.priorite" */
export enum Ec_Priorite_Select_Column_Ec_Priorite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Prioritaire = "prioritaire",
}

/** input type for updating data in table "ec.priorite" */
export type Ec_Priorite_Set_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: InputMaybe<Scalars["Boolean"]["input"]>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Priorite_Stddev_Fields = {
  __typename?: "ec_priorite_stddev_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.priorite" */
export type Ec_Priorite_Stddev_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Priorite_Stddev_Pop_Fields = {
  __typename?: "ec_priorite_stddev_pop_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.priorite" */
export type Ec_Priorite_Stddev_Pop_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Priorite_Stddev_Samp_Fields = {
  __typename?: "ec_priorite_stddev_samp_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.priorite" */
export type Ec_Priorite_Stddev_Samp_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_priorite" */
export type Ec_Priorite_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Priorite_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Priorite_Stream_Cursor_Value_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: InputMaybe<Scalars["Boolean"]["input"]>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Priorite_Sum_Fields = {
  __typename?: "ec_priorite_sum_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.priorite" */
export type Ec_Priorite_Sum_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.priorite" */
export enum Ec_Priorite_Update_Column {
  /** column name */
  Anciennete = "anciennete",
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Id = "id",
  /** column name */
  Prioritaire = "prioritaire",
  /** column name */
  Uid = "uid",
}

export type Ec_Priorite_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Priorite_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Priorite_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Priorite_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Priorite_Var_Pop_Fields = {
  __typename?: "ec_priorite_var_pop_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.priorite" */
export type Ec_Priorite_Var_Pop_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Priorite_Var_Samp_Fields = {
  __typename?: "ec_priorite_var_samp_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.priorite" */
export type Ec_Priorite_Var_Samp_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Priorite_Variance_Fields = {
  __typename?: "ec_priorite_variance_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.priorite" */
export type Ec_Priorite_Variance_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Table contenant les responsables d'une mention, d'un parcours ou d'un enseignement. Chaque ligne correspond à un et un seul de ces trois types de responsabilité. */
export type Ec_Responsable = {
  __typename?: "ec_responsable";
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  enseignement: Maybe<Ec_Enseignement>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** An object relationship */
  mention: Maybe<Ec_Mention>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  parcours: Maybe<Ec_Parcours>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.responsable" */
export type Ec_Responsable_Aggregate = {
  __typename?: "ec_responsable_aggregate";
  aggregate: Maybe<Ec_Responsable_Aggregate_Fields>;
  nodes: Array<Ec_Responsable>;
};

export type Ec_Responsable_Aggregate_Bool_Exp = {
  count: InputMaybe<Ec_Responsable_Aggregate_Bool_Exp_Count>;
};

export type Ec_Responsable_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Responsable_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.responsable" */
export type Ec_Responsable_Aggregate_Fields = {
  __typename?: "ec_responsable_aggregate_fields";
  avg: Maybe<Ec_Responsable_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Responsable_Max_Fields>;
  min: Maybe<Ec_Responsable_Min_Fields>;
  stddev: Maybe<Ec_Responsable_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Responsable_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Responsable_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Responsable_Sum_Fields>;
  var_pop: Maybe<Ec_Responsable_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Responsable_Var_Samp_Fields>;
  variance: Maybe<Ec_Responsable_Variance_Fields>;
};

/** aggregate fields of "ec.responsable" */
export type Ec_Responsable_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.responsable" */
export type Ec_Responsable_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Responsable_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Responsable_Max_Order_By>;
  min: InputMaybe<Ec_Responsable_Min_Order_By>;
  stddev: InputMaybe<Ec_Responsable_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Responsable_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Responsable_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Responsable_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Responsable_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Responsable_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Responsable_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.responsable" */
export type Ec_Responsable_Arr_Rel_Insert_Input = {
  data: Array<Ec_Responsable_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Responsable_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Responsable_Avg_Fields = {
  __typename?: "ec_responsable_avg_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.responsable" */
export type Ec_Responsable_Avg_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.responsable". All fields are combined with a logical 'AND'. */
export type Ec_Responsable_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Responsable_Bool_Exp>>;
  _not: InputMaybe<Ec_Responsable_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Responsable_Bool_Exp>>;
  commentaire: InputMaybe<String_Comparison_Exp>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Ec_Enseignement_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  mention: InputMaybe<Ec_Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  parcours: InputMaybe<Ec_Parcours_Bool_Exp>;
  parcours_id: InputMaybe<Int_Comparison_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.responsable" */
export enum Ec_Responsable_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResponsablePkey = "responsable_pkey",
  /** unique or primary key constraint on columns "uid", "parcours_id", "mention_id", "ens_id" */
  ResponsableUidEnsIdParcoursIdMentionIdKey = "responsable_uid_ens_id_parcours_id_mention_id_key",
}

/** input type for incrementing numeric columns in table "ec.responsable" */
export type Ec_Responsable_Inc_Input = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.responsable" */
export type Ec_Responsable_Insert_Input = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Ec_Enseignement_Obj_Rel_Insert_Input>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  mention: InputMaybe<Ec_Mention_Obj_Rel_Insert_Input>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  parcours: InputMaybe<Ec_Parcours_Obj_Rel_Insert_Input>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Responsable_Max_Fields = {
  __typename?: "ec_responsable_max_fields";
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.responsable" */
export type Ec_Responsable_Max_Order_By = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Responsable_Min_Fields = {
  __typename?: "ec_responsable_min_fields";
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.responsable" */
export type Ec_Responsable_Min_Order_By = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.responsable" */
export type Ec_Responsable_Mutation_Response = {
  __typename?: "ec_responsable_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Responsable>;
};

/** on_conflict condition type for table "ec.responsable" */
export type Ec_Responsable_On_Conflict = {
  constraint: Ec_Responsable_Constraint;
  update_columns: Array<Ec_Responsable_Update_Column>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.responsable". */
export type Ec_Responsable_Order_By = {
  commentaire: InputMaybe<Order_By>;
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Ec_Enseignement_Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  mention: InputMaybe<Ec_Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  parcours: InputMaybe<Ec_Parcours_Order_By>;
  parcours_id: InputMaybe<Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.responsable */
export type Ec_Responsable_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.responsable" */
export enum Ec_Responsable_Select_Column {
  /** column name */
  Commentaire = "commentaire",
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  ParcoursId = "parcours_id",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "ec.responsable" */
export type Ec_Responsable_Set_Input = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Responsable_Stddev_Fields = {
  __typename?: "ec_responsable_stddev_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.responsable" */
export type Ec_Responsable_Stddev_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Responsable_Stddev_Pop_Fields = {
  __typename?: "ec_responsable_stddev_pop_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.responsable" */
export type Ec_Responsable_Stddev_Pop_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Responsable_Stddev_Samp_Fields = {
  __typename?: "ec_responsable_stddev_samp_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.responsable" */
export type Ec_Responsable_Stddev_Samp_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_responsable" */
export type Ec_Responsable_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Responsable_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Responsable_Stream_Cursor_Value_Input = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Responsable_Sum_Fields = {
  __typename?: "ec_responsable_sum_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.responsable" */
export type Ec_Responsable_Sum_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** update columns of table "ec.responsable" */
export enum Ec_Responsable_Update_Column {
  /** column name */
  Commentaire = "commentaire",
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Id = "id",
  /** column name */
  MentionId = "mention_id",
  /** column name */
  ParcoursId = "parcours_id",
  /** column name */
  Uid = "uid",
}

export type Ec_Responsable_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Responsable_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Responsable_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Responsable_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Responsable_Var_Pop_Fields = {
  __typename?: "ec_responsable_var_pop_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.responsable" */
export type Ec_Responsable_Var_Pop_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Responsable_Var_Samp_Fields = {
  __typename?: "ec_responsable_var_samp_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.responsable" */
export type Ec_Responsable_Var_Samp_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Responsable_Variance_Fields = {
  __typename?: "ec_responsable_variance_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.responsable" */
export type Ec_Responsable_Variance_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type Ec_Service = {
  __typename?: "ec_service";
  /** L'année correspondant au service. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Ec_Annee;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Scalars["Float"]["output"];
  /** L'identifiant unique du service. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Ec_Intervenant;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "ec.service" */
export type Ec_Service_Aggregate = {
  __typename?: "ec_service_aggregate";
  aggregate: Maybe<Ec_Service_Aggregate_Fields>;
  nodes: Array<Ec_Service>;
};

export type Ec_Service_Aggregate_Bool_Exp = {
  count: InputMaybe<Ec_Service_Aggregate_Bool_Exp_Count>;
};

export type Ec_Service_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Ec_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Ec_Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ec.service" */
export type Ec_Service_Aggregate_Fields = {
  __typename?: "ec_service_aggregate_fields";
  avg: Maybe<Ec_Service_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Service_Max_Fields>;
  min: Maybe<Ec_Service_Min_Fields>;
  stddev: Maybe<Ec_Service_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Service_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Service_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Service_Sum_Fields>;
  var_pop: Maybe<Ec_Service_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Service_Var_Samp_Fields>;
  variance: Maybe<Ec_Service_Variance_Fields>;
};

/** aggregate fields of "ec.service" */
export type Ec_Service_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "ec.service" */
export type Ec_Service_Aggregate_Order_By = {
  avg: InputMaybe<Ec_Service_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Ec_Service_Max_Order_By>;
  min: InputMaybe<Ec_Service_Min_Order_By>;
  stddev: InputMaybe<Ec_Service_Stddev_Order_By>;
  stddev_pop: InputMaybe<Ec_Service_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Ec_Service_Stddev_Samp_Order_By>;
  sum: InputMaybe<Ec_Service_Sum_Order_By>;
  var_pop: InputMaybe<Ec_Service_Var_Pop_Order_By>;
  var_samp: InputMaybe<Ec_Service_Var_Samp_Order_By>;
  variance: InputMaybe<Ec_Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ec.service" */
export type Ec_Service_Arr_Rel_Insert_Input = {
  data: Array<Ec_Service_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Ec_Service_Avg_Fields = {
  __typename?: "ec_service_avg_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "ec.service" */
export type Ec_Service_Avg_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ec.service". All fields are combined with a logical 'AND'. */
export type Ec_Service_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Service_Bool_Exp>>;
  _not: InputMaybe<Ec_Service_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Service_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Ec_Annee_Bool_Exp>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Ec_Intervenant_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.service" */
export enum Ec_Service_Constraint {
  /** unique or primary key constraint on columns "annee", "uid" */
  ServiceAnneeUidKey = "service_annee_uid_key",
  /** unique or primary key constraint on columns "id" */
  ServicePkey = "service_pkey",
}

/** input type for incrementing numeric columns in table "ec.service" */
export type Ec_Service_Inc_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "ec.service" */
export type Ec_Service_Insert_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Ec_Annee_Obj_Rel_Insert_Input>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Ec_Intervenant_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Service_Max_Fields = {
  __typename?: "ec_service_max_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "ec.service" */
export type Ec_Service_Max_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ec_Service_Min_Fields = {
  __typename?: "ec_service_min_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "ec.service" */
export type Ec_Service_Min_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ec.service" */
export type Ec_Service_Mutation_Response = {
  __typename?: "ec_service_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Service>;
};

/** on_conflict condition type for table "ec.service" */
export type Ec_Service_On_Conflict = {
  constraint: Ec_Service_Constraint;
  update_columns: Array<Ec_Service_Update_Column>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.service". */
export type Ec_Service_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Ec_Annee_Order_By>;
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Ec_Intervenant_Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.service */
export type Ec_Service_Pk_Columns_Input = {
  /** L'identifiant unique du service. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "ec.service" */
export enum Ec_Service_Select_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "ec.service" */
export type Ec_Service_Set_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Service_Stddev_Fields = {
  __typename?: "ec_service_stddev_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "ec.service" */
export type Ec_Service_Stddev_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ec_Service_Stddev_Pop_Fields = {
  __typename?: "ec_service_stddev_pop_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "ec.service" */
export type Ec_Service_Stddev_Pop_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ec_Service_Stddev_Samp_Fields = {
  __typename?: "ec_service_stddev_samp_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "ec.service" */
export type Ec_Service_Stddev_Samp_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ec_service" */
export type Ec_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Service_Stream_Cursor_Value_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Service_Sum_Fields = {
  __typename?: "ec_service_sum_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "ec.service" */
export type Ec_Service_Sum_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "ec.service" */
export enum Ec_Service_Update_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Uid = "uid",
}

export type Ec_Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Service_Var_Pop_Fields = {
  __typename?: "ec_service_var_pop_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "ec.service" */
export type Ec_Service_Var_Pop_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ec_Service_Var_Samp_Fields = {
  __typename?: "ec_service_var_samp_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "ec.service" */
export type Ec_Service_Var_Samp_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ec_Service_Variance_Fields = {
  __typename?: "ec_service_variance_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "ec.service" */
export type Ec_Service_Variance_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Ec_Type_Demande = {
  __typename?: "ec_type_demande";
  /** An array relationship */
  demandes: Array<Ec_Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Ec_Demande_Aggregate;
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Scalars["String"]["output"];
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Ec_Type_DemandeDemandesArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Ec_Type_DemandeDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

/** aggregated selection of "ec.type_demande" */
export type Ec_Type_Demande_Aggregate = {
  __typename?: "ec_type_demande_aggregate";
  aggregate: Maybe<Ec_Type_Demande_Aggregate_Fields>;
  nodes: Array<Ec_Type_Demande>;
};

/** aggregate fields of "ec.type_demande" */
export type Ec_Type_Demande_Aggregate_Fields = {
  __typename?: "ec_type_demande_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Type_Demande_Max_Fields>;
  min: Maybe<Ec_Type_Demande_Min_Fields>;
};

/** aggregate fields of "ec.type_demande" */
export type Ec_Type_Demande_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Type_Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ec.type_demande". All fields are combined with a logical 'AND'. */
export type Ec_Type_Demande_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Type_Demande_Bool_Exp>>;
  _not: InputMaybe<Ec_Type_Demande_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Type_Demande_Bool_Exp>>;
  demandes: InputMaybe<Ec_Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Bool_Exp>;
  description: InputMaybe<String_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.type_demande" */
export enum Ec_Type_Demande_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeDemandePkey = "type_demande_pkey",
}

/** input type for inserting data into table "ec.type_demande" */
export type Ec_Type_Demande_Insert_Input = {
  demandes: InputMaybe<Ec_Demande_Arr_Rel_Insert_Input>;
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Type_Demande_Max_Fields = {
  __typename?: "ec_type_demande_max_fields";
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Type_Demande_Min_Fields = {
  __typename?: "ec_type_demande_min_fields";
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.type_demande" */
export type Ec_Type_Demande_Mutation_Response = {
  __typename?: "ec_type_demande_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Type_Demande>;
};

/** input type for inserting object relation for remote table "ec.type_demande" */
export type Ec_Type_Demande_Obj_Rel_Insert_Input = {
  data: Ec_Type_Demande_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Type_Demande_On_Conflict>;
};

/** on_conflict condition type for table "ec.type_demande" */
export type Ec_Type_Demande_On_Conflict = {
  constraint: Ec_Type_Demande_Constraint;
  update_columns: Array<Ec_Type_Demande_Update_Column>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.type_demande". */
export type Ec_Type_Demande_Order_By = {
  demandes_aggregate: InputMaybe<Ec_Demande_Aggregate_Order_By>;
  description: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.type_demande */
export type Ec_Type_Demande_Pk_Columns_Input = {
  /** Le type de demande (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "ec.type_demande" */
export enum Ec_Type_Demande_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "ec.type_demande" */
export type Ec_Type_Demande_Set_Input = {
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "ec_type_demande" */
export type Ec_Type_Demande_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Type_Demande_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Type_Demande_Stream_Cursor_Value_Input = {
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "ec.type_demande" */
export enum Ec_Type_Demande_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

export type Ec_Type_Demande_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Type_Demande_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Type_Demande_Bool_Exp;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Ec_Type_Enseignement = {
  __typename?: "ec_type_enseignement";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Scalars["Float"]["output"];
  /** An array relationship */
  enseignements: Array<Ec_Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Ec_Enseignement_Aggregate;
  /** Le type d'enseignement (unique). */
  label: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Ec_Type_EnseignementEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Ec_Type_EnseignementEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

/** aggregated selection of "ec.type_enseignement" */
export type Ec_Type_Enseignement_Aggregate = {
  __typename?: "ec_type_enseignement_aggregate";
  aggregate: Maybe<Ec_Type_Enseignement_Aggregate_Fields>;
  nodes: Array<Ec_Type_Enseignement>;
};

/** aggregate fields of "ec.type_enseignement" */
export type Ec_Type_Enseignement_Aggregate_Fields = {
  __typename?: "ec_type_enseignement_aggregate_fields";
  avg: Maybe<Ec_Type_Enseignement_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Type_Enseignement_Max_Fields>;
  min: Maybe<Ec_Type_Enseignement_Min_Fields>;
  stddev: Maybe<Ec_Type_Enseignement_Stddev_Fields>;
  stddev_pop: Maybe<Ec_Type_Enseignement_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Ec_Type_Enseignement_Stddev_Samp_Fields>;
  sum: Maybe<Ec_Type_Enseignement_Sum_Fields>;
  var_pop: Maybe<Ec_Type_Enseignement_Var_Pop_Fields>;
  var_samp: Maybe<Ec_Type_Enseignement_Var_Samp_Fields>;
  variance: Maybe<Ec_Type_Enseignement_Variance_Fields>;
};

/** aggregate fields of "ec.type_enseignement" */
export type Ec_Type_Enseignement_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Type_Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Ec_Type_Enseignement_Avg_Fields = {
  __typename?: "ec_type_enseignement_avg_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "ec.type_enseignement". All fields are combined with a logical 'AND'. */
export type Ec_Type_Enseignement_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Type_Enseignement_Bool_Exp>>;
  _not: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Type_Enseignement_Bool_Exp>>;
  coefficient: InputMaybe<Float_Comparison_Exp>;
  enseignements: InputMaybe<Ec_Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Bool_Exp>;
  label: InputMaybe<String_Comparison_Exp>;
  label_court: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.type_enseignement" */
export enum Ec_Type_Enseignement_Constraint {
  /** unique or primary key constraint on columns "label" */
  TypeEnseignementPkey = "type_enseignement_pkey",
}

/** input type for incrementing numeric columns in table "ec.type_enseignement" */
export type Ec_Type_Enseignement_Inc_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
};

/** input type for inserting data into table "ec.type_enseignement" */
export type Ec_Type_Enseignement_Insert_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  enseignements: InputMaybe<Ec_Enseignement_Arr_Rel_Insert_Input>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Type_Enseignement_Max_Fields = {
  __typename?: "ec_type_enseignement_max_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
  /** Le type d'enseignement (unique). */
  label: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Type_Enseignement_Min_Fields = {
  __typename?: "ec_type_enseignement_min_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
  /** Le type d'enseignement (unique). */
  label: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.type_enseignement" */
export type Ec_Type_Enseignement_Mutation_Response = {
  __typename?: "ec_type_enseignement_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Type_Enseignement>;
};

/** input type for inserting object relation for remote table "ec.type_enseignement" */
export type Ec_Type_Enseignement_Obj_Rel_Insert_Input = {
  data: Ec_Type_Enseignement_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Type_Enseignement_On_Conflict>;
};

/** on_conflict condition type for table "ec.type_enseignement" */
export type Ec_Type_Enseignement_On_Conflict = {
  constraint: Ec_Type_Enseignement_Constraint;
  update_columns: Array<Ec_Type_Enseignement_Update_Column>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.type_enseignement". */
export type Ec_Type_Enseignement_Order_By = {
  coefficient: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Ec_Enseignement_Aggregate_Order_By>;
  label: InputMaybe<Order_By>;
  label_court: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.type_enseignement */
export type Ec_Type_Enseignement_Pk_Columns_Input = {
  /** Le type d'enseignement (unique). */
  label: Scalars["String"]["input"];
};

/** select columns of table "ec.type_enseignement" */
export enum Ec_Type_Enseignement_Select_Column {
  /** column name */
  Coefficient = "coefficient",
  /** column name */
  Label = "label",
  /** column name */
  LabelCourt = "label_court",
}

/** input type for updating data in table "ec.type_enseignement" */
export type Ec_Type_Enseignement_Set_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Ec_Type_Enseignement_Stddev_Fields = {
  __typename?: "ec_type_enseignement_stddev_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Ec_Type_Enseignement_Stddev_Pop_Fields = {
  __typename?: "ec_type_enseignement_stddev_pop_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Ec_Type_Enseignement_Stddev_Samp_Fields = {
  __typename?: "ec_type_enseignement_stddev_samp_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "ec_type_enseignement" */
export type Ec_Type_Enseignement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Type_Enseignement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Type_Enseignement_Stream_Cursor_Value_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Ec_Type_Enseignement_Sum_Fields = {
  __typename?: "ec_type_enseignement_sum_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** update columns of table "ec.type_enseignement" */
export enum Ec_Type_Enseignement_Update_Column {
  /** column name */
  Coefficient = "coefficient",
  /** column name */
  Label = "label",
  /** column name */
  LabelCourt = "label_court",
}

export type Ec_Type_Enseignement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Ec_Type_Enseignement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Type_Enseignement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Type_Enseignement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ec_Type_Enseignement_Var_Pop_Fields = {
  __typename?: "ec_type_enseignement_var_pop_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Ec_Type_Enseignement_Var_Samp_Fields = {
  __typename?: "ec_type_enseignement_var_samp_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Ec_Type_Enseignement_Variance_Fields = {
  __typename?: "ec_type_enseignement_variance_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les différents types de messages enregistrés sur Geyser. */
export type Ec_Type_Message = {
  __typename?: "ec_type_message";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  messages: Array<Ec_Message>;
  /** An aggregate relationship */
  messages_aggregate: Ec_Message_Aggregate;
  /** Le type de message (unique). */
  value: Scalars["String"]["output"];
};

/** Table contenant les différents types de messages enregistrés sur Geyser. */
export type Ec_Type_MessageMessagesArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** Table contenant les différents types de messages enregistrés sur Geyser. */
export type Ec_Type_MessageMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

/** aggregated selection of "ec.type_message" */
export type Ec_Type_Message_Aggregate = {
  __typename?: "ec_type_message_aggregate";
  aggregate: Maybe<Ec_Type_Message_Aggregate_Fields>;
  nodes: Array<Ec_Type_Message>;
};

/** aggregate fields of "ec.type_message" */
export type Ec_Type_Message_Aggregate_Fields = {
  __typename?: "ec_type_message_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Type_Message_Max_Fields>;
  min: Maybe<Ec_Type_Message_Min_Fields>;
};

/** aggregate fields of "ec.type_message" */
export type Ec_Type_Message_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Type_Message_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ec.type_message". All fields are combined with a logical 'AND'. */
export type Ec_Type_Message_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Type_Message_Bool_Exp>>;
  _not: InputMaybe<Ec_Type_Message_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Type_Message_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  messages: InputMaybe<Ec_Message_Bool_Exp>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Bool_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.type_message" */
export enum Ec_Type_Message_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeMessagePkey = "type_message_pkey",
}

/** input type for inserting data into table "ec.type_message" */
export type Ec_Type_Message_Insert_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  messages: InputMaybe<Ec_Message_Arr_Rel_Insert_Input>;
  /** Le type de message (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Type_Message_Max_Fields = {
  __typename?: "ec_type_message_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de message (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Type_Message_Min_Fields = {
  __typename?: "ec_type_message_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de message (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.type_message" */
export type Ec_Type_Message_Mutation_Response = {
  __typename?: "ec_type_message_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Type_Message>;
};

/** input type for inserting object relation for remote table "ec.type_message" */
export type Ec_Type_Message_Obj_Rel_Insert_Input = {
  data: Ec_Type_Message_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Type_Message_On_Conflict>;
};

/** on_conflict condition type for table "ec.type_message" */
export type Ec_Type_Message_On_Conflict = {
  constraint: Ec_Type_Message_Constraint;
  update_columns: Array<Ec_Type_Message_Update_Column>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.type_message". */
export type Ec_Type_Message_Order_By = {
  description: InputMaybe<Order_By>;
  messages_aggregate: InputMaybe<Ec_Message_Aggregate_Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.type_message */
export type Ec_Type_Message_Pk_Columns_Input = {
  /** Le type de message (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "ec.type_message" */
export enum Ec_Type_Message_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "ec.type_message" */
export type Ec_Type_Message_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de message (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "ec_type_message" */
export type Ec_Type_Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Type_Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Type_Message_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de message (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "ec.type_message" */
export enum Ec_Type_Message_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

export type Ec_Type_Message_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Type_Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Type_Message_Bool_Exp;
};

/** Table contenant les différents types de modification de service. */
export type Ec_Type_Modification = {
  __typename?: "ec_type_modification";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  modifications_service: Array<Ec_Modification_Service>;
  /** An aggregate relationship */
  modifications_service_aggregate: Ec_Modification_Service_Aggregate;
  /** Le type de modification (unique). */
  value: Scalars["String"]["output"];
};

/** Table contenant les différents types de modification de service. */
export type Ec_Type_ModificationModifications_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** Table contenant les différents types de modification de service. */
export type Ec_Type_ModificationModifications_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

/** aggregated selection of "ec.type_modification" */
export type Ec_Type_Modification_Aggregate = {
  __typename?: "ec_type_modification_aggregate";
  aggregate: Maybe<Ec_Type_Modification_Aggregate_Fields>;
  nodes: Array<Ec_Type_Modification>;
};

/** aggregate fields of "ec.type_modification" */
export type Ec_Type_Modification_Aggregate_Fields = {
  __typename?: "ec_type_modification_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Ec_Type_Modification_Max_Fields>;
  min: Maybe<Ec_Type_Modification_Min_Fields>;
};

/** aggregate fields of "ec.type_modification" */
export type Ec_Type_Modification_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Ec_Type_Modification_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "ec.type_modification". All fields are combined with a logical 'AND'. */
export type Ec_Type_Modification_Bool_Exp = {
  _and: InputMaybe<Array<Ec_Type_Modification_Bool_Exp>>;
  _not: InputMaybe<Ec_Type_Modification_Bool_Exp>;
  _or: InputMaybe<Array<Ec_Type_Modification_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  modifications_service: InputMaybe<Ec_Modification_Service_Bool_Exp>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Bool_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ec.type_modification" */
export enum Ec_Type_Modification_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeModificationPkey = "type_modification_pkey",
}

/** input type for inserting data into table "ec.type_modification" */
export type Ec_Type_Modification_Insert_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  modifications_service: InputMaybe<Ec_Modification_Service_Arr_Rel_Insert_Input>;
  /** Le type de modification (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Ec_Type_Modification_Max_Fields = {
  __typename?: "ec_type_modification_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de modification (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Ec_Type_Modification_Min_Fields = {
  __typename?: "ec_type_modification_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de modification (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "ec.type_modification" */
export type Ec_Type_Modification_Mutation_Response = {
  __typename?: "ec_type_modification_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Ec_Type_Modification>;
};

/** input type for inserting object relation for remote table "ec.type_modification" */
export type Ec_Type_Modification_Obj_Rel_Insert_Input = {
  data: Ec_Type_Modification_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Ec_Type_Modification_On_Conflict>;
};

/** on_conflict condition type for table "ec.type_modification" */
export type Ec_Type_Modification_On_Conflict = {
  constraint: Ec_Type_Modification_Constraint;
  update_columns: Array<Ec_Type_Modification_Update_Column>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

/** Ordering options when selecting data from "ec.type_modification". */
export type Ec_Type_Modification_Order_By = {
  description: InputMaybe<Order_By>;
  modifications_service_aggregate: InputMaybe<Ec_Modification_Service_Aggregate_Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: ec.type_modification */
export type Ec_Type_Modification_Pk_Columns_Input = {
  /** Le type de modification (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "ec.type_modification" */
export enum Ec_Type_Modification_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "ec.type_modification" */
export type Ec_Type_Modification_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de modification (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "ec_type_modification" */
export type Ec_Type_Modification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ec_Type_Modification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ec_Type_Modification_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de modification (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "ec.type_modification" */
export enum Ec_Type_Modification_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

export type Ec_Type_Modification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Ec_Type_Modification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ec_Type_Modification_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "ec.annee" */
  delete_ec_annee: Maybe<Ec_Annee_Mutation_Response>;
  /** delete single row from the table: "ec.annee" */
  delete_ec_annee_by_pk: Maybe<Ec_Annee>;
  /** delete data from the table: "ec.cursus" */
  delete_ec_cursus: Maybe<Ec_Cursus_Mutation_Response>;
  /** delete single row from the table: "ec.cursus" */
  delete_ec_cursus_by_pk: Maybe<Ec_Cursus>;
  /** delete data from the table: "ec.demande" */
  delete_ec_demande: Maybe<Ec_Demande_Mutation_Response>;
  /** delete single row from the table: "ec.demande" */
  delete_ec_demande_by_pk: Maybe<Ec_Demande>;
  /** delete data from the table: "ec.enseignement" */
  delete_ec_enseignement: Maybe<Ec_Enseignement_Mutation_Response>;
  /** delete single row from the table: "ec.enseignement" */
  delete_ec_enseignement_by_pk: Maybe<Ec_Enseignement>;
  /** delete data from the table: "ec.intervenant" */
  delete_ec_intervenant: Maybe<Ec_Intervenant_Mutation_Response>;
  /** delete single row from the table: "ec.intervenant" */
  delete_ec_intervenant_by_pk: Maybe<Ec_Intervenant>;
  /** delete data from the table: "ec.mention" */
  delete_ec_mention: Maybe<Ec_Mention_Mutation_Response>;
  /** delete single row from the table: "ec.mention" */
  delete_ec_mention_by_pk: Maybe<Ec_Mention>;
  /** delete data from the table: "ec.message" */
  delete_ec_message: Maybe<Ec_Message_Mutation_Response>;
  /** delete single row from the table: "ec.message" */
  delete_ec_message_by_pk: Maybe<Ec_Message>;
  /** delete data from the table: "ec.modification_service" */
  delete_ec_modification_service: Maybe<Ec_Modification_Service_Mutation_Response>;
  /** delete single row from the table: "ec.modification_service" */
  delete_ec_modification_service_by_pk: Maybe<Ec_Modification_Service>;
  /** delete data from the table: "ec.parcours" */
  delete_ec_parcours: Maybe<Ec_Parcours_Mutation_Response>;
  /** delete single row from the table: "ec.parcours" */
  delete_ec_parcours_by_pk: Maybe<Ec_Parcours>;
  /** delete data from the table: "ec.phase" */
  delete_ec_phase: Maybe<Ec_Phase_Mutation_Response>;
  /** delete single row from the table: "ec.phase" */
  delete_ec_phase_by_pk: Maybe<Ec_Phase>;
  /** delete data from the table: "ec.priorite" */
  delete_ec_priorite: Maybe<Ec_Priorite_Mutation_Response>;
  /** delete single row from the table: "ec.priorite" */
  delete_ec_priorite_by_pk: Maybe<Ec_Priorite>;
  /** delete data from the table: "ec.responsable" */
  delete_ec_responsable: Maybe<Ec_Responsable_Mutation_Response>;
  /** delete single row from the table: "ec.responsable" */
  delete_ec_responsable_by_pk: Maybe<Ec_Responsable>;
  /** delete data from the table: "ec.service" */
  delete_ec_service: Maybe<Ec_Service_Mutation_Response>;
  /** delete single row from the table: "ec.service" */
  delete_ec_service_by_pk: Maybe<Ec_Service>;
  /** delete data from the table: "ec.type_demande" */
  delete_ec_type_demande: Maybe<Ec_Type_Demande_Mutation_Response>;
  /** delete single row from the table: "ec.type_demande" */
  delete_ec_type_demande_by_pk: Maybe<Ec_Type_Demande>;
  /** delete data from the table: "ec.type_enseignement" */
  delete_ec_type_enseignement: Maybe<Ec_Type_Enseignement_Mutation_Response>;
  /** delete single row from the table: "ec.type_enseignement" */
  delete_ec_type_enseignement_by_pk: Maybe<Ec_Type_Enseignement>;
  /** delete data from the table: "ec.type_message" */
  delete_ec_type_message: Maybe<Ec_Type_Message_Mutation_Response>;
  /** delete single row from the table: "ec.type_message" */
  delete_ec_type_message_by_pk: Maybe<Ec_Type_Message>;
  /** delete data from the table: "ec.type_modification" */
  delete_ec_type_modification: Maybe<Ec_Type_Modification_Mutation_Response>;
  /** delete single row from the table: "ec.type_modification" */
  delete_ec_type_modification_by_pk: Maybe<Ec_Type_Modification>;
  /** insert data into the table: "ec.annee" */
  insert_ec_annee: Maybe<Ec_Annee_Mutation_Response>;
  /** insert a single row into the table: "ec.annee" */
  insert_ec_annee_one: Maybe<Ec_Annee>;
  /** insert data into the table: "ec.cursus" */
  insert_ec_cursus: Maybe<Ec_Cursus_Mutation_Response>;
  /** insert a single row into the table: "ec.cursus" */
  insert_ec_cursus_one: Maybe<Ec_Cursus>;
  /** insert data into the table: "ec.demande" */
  insert_ec_demande: Maybe<Ec_Demande_Mutation_Response>;
  /** insert a single row into the table: "ec.demande" */
  insert_ec_demande_one: Maybe<Ec_Demande>;
  /** insert data into the table: "ec.enseignement" */
  insert_ec_enseignement: Maybe<Ec_Enseignement_Mutation_Response>;
  /** insert a single row into the table: "ec.enseignement" */
  insert_ec_enseignement_one: Maybe<Ec_Enseignement>;
  /** insert data into the table: "ec.intervenant" */
  insert_ec_intervenant: Maybe<Ec_Intervenant_Mutation_Response>;
  /** insert a single row into the table: "ec.intervenant" */
  insert_ec_intervenant_one: Maybe<Ec_Intervenant>;
  /** insert data into the table: "ec.mention" */
  insert_ec_mention: Maybe<Ec_Mention_Mutation_Response>;
  /** insert a single row into the table: "ec.mention" */
  insert_ec_mention_one: Maybe<Ec_Mention>;
  /** insert data into the table: "ec.message" */
  insert_ec_message: Maybe<Ec_Message_Mutation_Response>;
  /** insert a single row into the table: "ec.message" */
  insert_ec_message_one: Maybe<Ec_Message>;
  /** insert data into the table: "ec.modification_service" */
  insert_ec_modification_service: Maybe<Ec_Modification_Service_Mutation_Response>;
  /** insert a single row into the table: "ec.modification_service" */
  insert_ec_modification_service_one: Maybe<Ec_Modification_Service>;
  /** insert data into the table: "ec.parcours" */
  insert_ec_parcours: Maybe<Ec_Parcours_Mutation_Response>;
  /** insert a single row into the table: "ec.parcours" */
  insert_ec_parcours_one: Maybe<Ec_Parcours>;
  /** insert data into the table: "ec.phase" */
  insert_ec_phase: Maybe<Ec_Phase_Mutation_Response>;
  /** insert a single row into the table: "ec.phase" */
  insert_ec_phase_one: Maybe<Ec_Phase>;
  /** insert data into the table: "ec.priorite" */
  insert_ec_priorite: Maybe<Ec_Priorite_Mutation_Response>;
  /** insert a single row into the table: "ec.priorite" */
  insert_ec_priorite_one: Maybe<Ec_Priorite>;
  /** insert data into the table: "ec.responsable" */
  insert_ec_responsable: Maybe<Ec_Responsable_Mutation_Response>;
  /** insert a single row into the table: "ec.responsable" */
  insert_ec_responsable_one: Maybe<Ec_Responsable>;
  /** insert data into the table: "ec.service" */
  insert_ec_service: Maybe<Ec_Service_Mutation_Response>;
  /** insert a single row into the table: "ec.service" */
  insert_ec_service_one: Maybe<Ec_Service>;
  /** insert data into the table: "ec.type_demande" */
  insert_ec_type_demande: Maybe<Ec_Type_Demande_Mutation_Response>;
  /** insert a single row into the table: "ec.type_demande" */
  insert_ec_type_demande_one: Maybe<Ec_Type_Demande>;
  /** insert data into the table: "ec.type_enseignement" */
  insert_ec_type_enseignement: Maybe<Ec_Type_Enseignement_Mutation_Response>;
  /** insert a single row into the table: "ec.type_enseignement" */
  insert_ec_type_enseignement_one: Maybe<Ec_Type_Enseignement>;
  /** insert data into the table: "ec.type_message" */
  insert_ec_type_message: Maybe<Ec_Type_Message_Mutation_Response>;
  /** insert a single row into the table: "ec.type_message" */
  insert_ec_type_message_one: Maybe<Ec_Type_Message>;
  /** insert data into the table: "ec.type_modification" */
  insert_ec_type_modification: Maybe<Ec_Type_Modification_Mutation_Response>;
  /** insert a single row into the table: "ec.type_modification" */
  insert_ec_type_modification_one: Maybe<Ec_Type_Modification>;
  /** update data of the table: "ec.annee" */
  update_ec_annee: Maybe<Ec_Annee_Mutation_Response>;
  /** update single row of the table: "ec.annee" */
  update_ec_annee_by_pk: Maybe<Ec_Annee>;
  /** update multiples rows of table: "ec.annee" */
  update_ec_annee_many: Maybe<Array<Maybe<Ec_Annee_Mutation_Response>>>;
  /** update data of the table: "ec.cursus" */
  update_ec_cursus: Maybe<Ec_Cursus_Mutation_Response>;
  /** update single row of the table: "ec.cursus" */
  update_ec_cursus_by_pk: Maybe<Ec_Cursus>;
  /** update multiples rows of table: "ec.cursus" */
  update_ec_cursus_many: Maybe<Array<Maybe<Ec_Cursus_Mutation_Response>>>;
  /** update data of the table: "ec.demande" */
  update_ec_demande: Maybe<Ec_Demande_Mutation_Response>;
  /** update single row of the table: "ec.demande" */
  update_ec_demande_by_pk: Maybe<Ec_Demande>;
  /** update multiples rows of table: "ec.demande" */
  update_ec_demande_many: Maybe<Array<Maybe<Ec_Demande_Mutation_Response>>>;
  /** update data of the table: "ec.enseignement" */
  update_ec_enseignement: Maybe<Ec_Enseignement_Mutation_Response>;
  /** update single row of the table: "ec.enseignement" */
  update_ec_enseignement_by_pk: Maybe<Ec_Enseignement>;
  /** update multiples rows of table: "ec.enseignement" */
  update_ec_enseignement_many: Maybe<
    Array<Maybe<Ec_Enseignement_Mutation_Response>>
  >;
  /** update data of the table: "ec.intervenant" */
  update_ec_intervenant: Maybe<Ec_Intervenant_Mutation_Response>;
  /** update single row of the table: "ec.intervenant" */
  update_ec_intervenant_by_pk: Maybe<Ec_Intervenant>;
  /** update multiples rows of table: "ec.intervenant" */
  update_ec_intervenant_many: Maybe<
    Array<Maybe<Ec_Intervenant_Mutation_Response>>
  >;
  /** update data of the table: "ec.mention" */
  update_ec_mention: Maybe<Ec_Mention_Mutation_Response>;
  /** update single row of the table: "ec.mention" */
  update_ec_mention_by_pk: Maybe<Ec_Mention>;
  /** update multiples rows of table: "ec.mention" */
  update_ec_mention_many: Maybe<Array<Maybe<Ec_Mention_Mutation_Response>>>;
  /** update data of the table: "ec.message" */
  update_ec_message: Maybe<Ec_Message_Mutation_Response>;
  /** update single row of the table: "ec.message" */
  update_ec_message_by_pk: Maybe<Ec_Message>;
  /** update multiples rows of table: "ec.message" */
  update_ec_message_many: Maybe<Array<Maybe<Ec_Message_Mutation_Response>>>;
  /** update data of the table: "ec.modification_service" */
  update_ec_modification_service: Maybe<Ec_Modification_Service_Mutation_Response>;
  /** update single row of the table: "ec.modification_service" */
  update_ec_modification_service_by_pk: Maybe<Ec_Modification_Service>;
  /** update multiples rows of table: "ec.modification_service" */
  update_ec_modification_service_many: Maybe<
    Array<Maybe<Ec_Modification_Service_Mutation_Response>>
  >;
  /** update data of the table: "ec.parcours" */
  update_ec_parcours: Maybe<Ec_Parcours_Mutation_Response>;
  /** update single row of the table: "ec.parcours" */
  update_ec_parcours_by_pk: Maybe<Ec_Parcours>;
  /** update multiples rows of table: "ec.parcours" */
  update_ec_parcours_many: Maybe<Array<Maybe<Ec_Parcours_Mutation_Response>>>;
  /** update data of the table: "ec.phase" */
  update_ec_phase: Maybe<Ec_Phase_Mutation_Response>;
  /** update single row of the table: "ec.phase" */
  update_ec_phase_by_pk: Maybe<Ec_Phase>;
  /** update multiples rows of table: "ec.phase" */
  update_ec_phase_many: Maybe<Array<Maybe<Ec_Phase_Mutation_Response>>>;
  /** update data of the table: "ec.priorite" */
  update_ec_priorite: Maybe<Ec_Priorite_Mutation_Response>;
  /** update single row of the table: "ec.priorite" */
  update_ec_priorite_by_pk: Maybe<Ec_Priorite>;
  /** update multiples rows of table: "ec.priorite" */
  update_ec_priorite_many: Maybe<Array<Maybe<Ec_Priorite_Mutation_Response>>>;
  /** update data of the table: "ec.responsable" */
  update_ec_responsable: Maybe<Ec_Responsable_Mutation_Response>;
  /** update single row of the table: "ec.responsable" */
  update_ec_responsable_by_pk: Maybe<Ec_Responsable>;
  /** update multiples rows of table: "ec.responsable" */
  update_ec_responsable_many: Maybe<
    Array<Maybe<Ec_Responsable_Mutation_Response>>
  >;
  /** update data of the table: "ec.service" */
  update_ec_service: Maybe<Ec_Service_Mutation_Response>;
  /** update single row of the table: "ec.service" */
  update_ec_service_by_pk: Maybe<Ec_Service>;
  /** update multiples rows of table: "ec.service" */
  update_ec_service_many: Maybe<Array<Maybe<Ec_Service_Mutation_Response>>>;
  /** update data of the table: "ec.type_demande" */
  update_ec_type_demande: Maybe<Ec_Type_Demande_Mutation_Response>;
  /** update single row of the table: "ec.type_demande" */
  update_ec_type_demande_by_pk: Maybe<Ec_Type_Demande>;
  /** update multiples rows of table: "ec.type_demande" */
  update_ec_type_demande_many: Maybe<
    Array<Maybe<Ec_Type_Demande_Mutation_Response>>
  >;
  /** update data of the table: "ec.type_enseignement" */
  update_ec_type_enseignement: Maybe<Ec_Type_Enseignement_Mutation_Response>;
  /** update single row of the table: "ec.type_enseignement" */
  update_ec_type_enseignement_by_pk: Maybe<Ec_Type_Enseignement>;
  /** update multiples rows of table: "ec.type_enseignement" */
  update_ec_type_enseignement_many: Maybe<
    Array<Maybe<Ec_Type_Enseignement_Mutation_Response>>
  >;
  /** update data of the table: "ec.type_message" */
  update_ec_type_message: Maybe<Ec_Type_Message_Mutation_Response>;
  /** update single row of the table: "ec.type_message" */
  update_ec_type_message_by_pk: Maybe<Ec_Type_Message>;
  /** update multiples rows of table: "ec.type_message" */
  update_ec_type_message_many: Maybe<
    Array<Maybe<Ec_Type_Message_Mutation_Response>>
  >;
  /** update data of the table: "ec.type_modification" */
  update_ec_type_modification: Maybe<Ec_Type_Modification_Mutation_Response>;
  /** update single row of the table: "ec.type_modification" */
  update_ec_type_modification_by_pk: Maybe<Ec_Type_Modification>;
  /** update multiples rows of table: "ec.type_modification" */
  update_ec_type_modification_many: Maybe<
    Array<Maybe<Ec_Type_Modification_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootDelete_Ec_AnneeArgs = {
  where: Ec_Annee_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Annee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_CursusArgs = {
  where: Ec_Cursus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Cursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_DemandeArgs = {
  where: Ec_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Demande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_EnseignementArgs = {
  where: Ec_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Enseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_IntervenantArgs = {
  where: Ec_Intervenant_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Intervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_MentionArgs = {
  where: Ec_Mention_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Mention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_MessageArgs = {
  where: Ec_Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Message_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_Modification_ServiceArgs = {
  where: Ec_Modification_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Modification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_ParcoursArgs = {
  where: Ec_Parcours_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Parcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_PhaseArgs = {
  where: Ec_Phase_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Phase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_PrioriteArgs = {
  where: Ec_Priorite_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Priorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_ResponsableArgs = {
  where: Ec_Responsable_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Responsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_ServiceArgs = {
  where: Ec_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_DemandeArgs = {
  where: Ec_Type_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_EnseignementArgs = {
  where: Ec_Type_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_MessageArgs = {
  where: Ec_Type_Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_Message_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_ModificationArgs = {
  where: Ec_Type_Modification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Ec_Type_Modification_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_Ec_AnneeArgs = {
  objects: Array<Ec_Annee_Insert_Input>;
  on_conflict: InputMaybe<Ec_Annee_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Annee_OneArgs = {
  object: Ec_Annee_Insert_Input;
  on_conflict: InputMaybe<Ec_Annee_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_CursusArgs = {
  objects: Array<Ec_Cursus_Insert_Input>;
  on_conflict: InputMaybe<Ec_Cursus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Cursus_OneArgs = {
  object: Ec_Cursus_Insert_Input;
  on_conflict: InputMaybe<Ec_Cursus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_DemandeArgs = {
  objects: Array<Ec_Demande_Insert_Input>;
  on_conflict: InputMaybe<Ec_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Demande_OneArgs = {
  object: Ec_Demande_Insert_Input;
  on_conflict: InputMaybe<Ec_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_EnseignementArgs = {
  objects: Array<Ec_Enseignement_Insert_Input>;
  on_conflict: InputMaybe<Ec_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Enseignement_OneArgs = {
  object: Ec_Enseignement_Insert_Input;
  on_conflict: InputMaybe<Ec_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_IntervenantArgs = {
  objects: Array<Ec_Intervenant_Insert_Input>;
  on_conflict: InputMaybe<Ec_Intervenant_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Intervenant_OneArgs = {
  object: Ec_Intervenant_Insert_Input;
  on_conflict: InputMaybe<Ec_Intervenant_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_MentionArgs = {
  objects: Array<Ec_Mention_Insert_Input>;
  on_conflict: InputMaybe<Ec_Mention_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Mention_OneArgs = {
  object: Ec_Mention_Insert_Input;
  on_conflict: InputMaybe<Ec_Mention_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_MessageArgs = {
  objects: Array<Ec_Message_Insert_Input>;
  on_conflict: InputMaybe<Ec_Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Message_OneArgs = {
  object: Ec_Message_Insert_Input;
  on_conflict: InputMaybe<Ec_Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Modification_ServiceArgs = {
  objects: Array<Ec_Modification_Service_Insert_Input>;
  on_conflict: InputMaybe<Ec_Modification_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Modification_Service_OneArgs = {
  object: Ec_Modification_Service_Insert_Input;
  on_conflict: InputMaybe<Ec_Modification_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_ParcoursArgs = {
  objects: Array<Ec_Parcours_Insert_Input>;
  on_conflict: InputMaybe<Ec_Parcours_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Parcours_OneArgs = {
  object: Ec_Parcours_Insert_Input;
  on_conflict: InputMaybe<Ec_Parcours_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_PhaseArgs = {
  objects: Array<Ec_Phase_Insert_Input>;
  on_conflict: InputMaybe<Ec_Phase_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Phase_OneArgs = {
  object: Ec_Phase_Insert_Input;
  on_conflict: InputMaybe<Ec_Phase_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_PrioriteArgs = {
  objects: Array<Ec_Priorite_Insert_Input>;
  on_conflict: InputMaybe<Ec_Priorite_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Priorite_OneArgs = {
  object: Ec_Priorite_Insert_Input;
  on_conflict: InputMaybe<Ec_Priorite_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_ResponsableArgs = {
  objects: Array<Ec_Responsable_Insert_Input>;
  on_conflict: InputMaybe<Ec_Responsable_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Responsable_OneArgs = {
  object: Ec_Responsable_Insert_Input;
  on_conflict: InputMaybe<Ec_Responsable_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_ServiceArgs = {
  objects: Array<Ec_Service_Insert_Input>;
  on_conflict: InputMaybe<Ec_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Service_OneArgs = {
  object: Ec_Service_Insert_Input;
  on_conflict: InputMaybe<Ec_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_DemandeArgs = {
  objects: Array<Ec_Type_Demande_Insert_Input>;
  on_conflict: InputMaybe<Ec_Type_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_Demande_OneArgs = {
  object: Ec_Type_Demande_Insert_Input;
  on_conflict: InputMaybe<Ec_Type_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_EnseignementArgs = {
  objects: Array<Ec_Type_Enseignement_Insert_Input>;
  on_conflict: InputMaybe<Ec_Type_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_Enseignement_OneArgs = {
  object: Ec_Type_Enseignement_Insert_Input;
  on_conflict: InputMaybe<Ec_Type_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_MessageArgs = {
  objects: Array<Ec_Type_Message_Insert_Input>;
  on_conflict: InputMaybe<Ec_Type_Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_Message_OneArgs = {
  object: Ec_Type_Message_Insert_Input;
  on_conflict: InputMaybe<Ec_Type_Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_ModificationArgs = {
  objects: Array<Ec_Type_Modification_Insert_Input>;
  on_conflict: InputMaybe<Ec_Type_Modification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Ec_Type_Modification_OneArgs = {
  object: Ec_Type_Modification_Insert_Input;
  on_conflict: InputMaybe<Ec_Type_Modification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_AnneeArgs = {
  _inc: InputMaybe<Ec_Annee_Inc_Input>;
  _set: InputMaybe<Ec_Annee_Set_Input>;
  where: Ec_Annee_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Annee_By_PkArgs = {
  _inc: InputMaybe<Ec_Annee_Inc_Input>;
  _set: InputMaybe<Ec_Annee_Set_Input>;
  pk_columns: Ec_Annee_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Annee_ManyArgs = {
  updates: Array<Ec_Annee_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_CursusArgs = {
  _inc: InputMaybe<Ec_Cursus_Inc_Input>;
  _set: InputMaybe<Ec_Cursus_Set_Input>;
  where: Ec_Cursus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Cursus_By_PkArgs = {
  _inc: InputMaybe<Ec_Cursus_Inc_Input>;
  _set: InputMaybe<Ec_Cursus_Set_Input>;
  pk_columns: Ec_Cursus_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Cursus_ManyArgs = {
  updates: Array<Ec_Cursus_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_DemandeArgs = {
  _inc: InputMaybe<Ec_Demande_Inc_Input>;
  _set: InputMaybe<Ec_Demande_Set_Input>;
  where: Ec_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Demande_By_PkArgs = {
  _inc: InputMaybe<Ec_Demande_Inc_Input>;
  _set: InputMaybe<Ec_Demande_Set_Input>;
  pk_columns: Ec_Demande_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Demande_ManyArgs = {
  updates: Array<Ec_Demande_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_EnseignementArgs = {
  _inc: InputMaybe<Ec_Enseignement_Inc_Input>;
  _set: InputMaybe<Ec_Enseignement_Set_Input>;
  where: Ec_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Enseignement_By_PkArgs = {
  _inc: InputMaybe<Ec_Enseignement_Inc_Input>;
  _set: InputMaybe<Ec_Enseignement_Set_Input>;
  pk_columns: Ec_Enseignement_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Enseignement_ManyArgs = {
  updates: Array<Ec_Enseignement_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_IntervenantArgs = {
  _inc: InputMaybe<Ec_Intervenant_Inc_Input>;
  _set: InputMaybe<Ec_Intervenant_Set_Input>;
  where: Ec_Intervenant_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Intervenant_By_PkArgs = {
  _inc: InputMaybe<Ec_Intervenant_Inc_Input>;
  _set: InputMaybe<Ec_Intervenant_Set_Input>;
  pk_columns: Ec_Intervenant_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Intervenant_ManyArgs = {
  updates: Array<Ec_Intervenant_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_MentionArgs = {
  _inc: InputMaybe<Ec_Mention_Inc_Input>;
  _set: InputMaybe<Ec_Mention_Set_Input>;
  where: Ec_Mention_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Mention_By_PkArgs = {
  _inc: InputMaybe<Ec_Mention_Inc_Input>;
  _set: InputMaybe<Ec_Mention_Set_Input>;
  pk_columns: Ec_Mention_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Mention_ManyArgs = {
  updates: Array<Ec_Mention_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_MessageArgs = {
  _inc: InputMaybe<Ec_Message_Inc_Input>;
  _set: InputMaybe<Ec_Message_Set_Input>;
  where: Ec_Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Message_By_PkArgs = {
  _inc: InputMaybe<Ec_Message_Inc_Input>;
  _set: InputMaybe<Ec_Message_Set_Input>;
  pk_columns: Ec_Message_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Message_ManyArgs = {
  updates: Array<Ec_Message_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Modification_ServiceArgs = {
  _inc: InputMaybe<Ec_Modification_Service_Inc_Input>;
  _set: InputMaybe<Ec_Modification_Service_Set_Input>;
  where: Ec_Modification_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Modification_Service_By_PkArgs = {
  _inc: InputMaybe<Ec_Modification_Service_Inc_Input>;
  _set: InputMaybe<Ec_Modification_Service_Set_Input>;
  pk_columns: Ec_Modification_Service_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Modification_Service_ManyArgs = {
  updates: Array<Ec_Modification_Service_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_ParcoursArgs = {
  _inc: InputMaybe<Ec_Parcours_Inc_Input>;
  _set: InputMaybe<Ec_Parcours_Set_Input>;
  where: Ec_Parcours_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Parcours_By_PkArgs = {
  _inc: InputMaybe<Ec_Parcours_Inc_Input>;
  _set: InputMaybe<Ec_Parcours_Set_Input>;
  pk_columns: Ec_Parcours_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Parcours_ManyArgs = {
  updates: Array<Ec_Parcours_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_PhaseArgs = {
  _set: InputMaybe<Ec_Phase_Set_Input>;
  where: Ec_Phase_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Phase_By_PkArgs = {
  _set: InputMaybe<Ec_Phase_Set_Input>;
  pk_columns: Ec_Phase_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Phase_ManyArgs = {
  updates: Array<Ec_Phase_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_PrioriteArgs = {
  _inc: InputMaybe<Ec_Priorite_Inc_Input>;
  _set: InputMaybe<Ec_Priorite_Set_Input>;
  where: Ec_Priorite_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Priorite_By_PkArgs = {
  _inc: InputMaybe<Ec_Priorite_Inc_Input>;
  _set: InputMaybe<Ec_Priorite_Set_Input>;
  pk_columns: Ec_Priorite_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Priorite_ManyArgs = {
  updates: Array<Ec_Priorite_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_ResponsableArgs = {
  _inc: InputMaybe<Ec_Responsable_Inc_Input>;
  _set: InputMaybe<Ec_Responsable_Set_Input>;
  where: Ec_Responsable_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Responsable_By_PkArgs = {
  _inc: InputMaybe<Ec_Responsable_Inc_Input>;
  _set: InputMaybe<Ec_Responsable_Set_Input>;
  pk_columns: Ec_Responsable_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Responsable_ManyArgs = {
  updates: Array<Ec_Responsable_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_ServiceArgs = {
  _inc: InputMaybe<Ec_Service_Inc_Input>;
  _set: InputMaybe<Ec_Service_Set_Input>;
  where: Ec_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Service_By_PkArgs = {
  _inc: InputMaybe<Ec_Service_Inc_Input>;
  _set: InputMaybe<Ec_Service_Set_Input>;
  pk_columns: Ec_Service_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Service_ManyArgs = {
  updates: Array<Ec_Service_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_DemandeArgs = {
  _set: InputMaybe<Ec_Type_Demande_Set_Input>;
  where: Ec_Type_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Demande_By_PkArgs = {
  _set: InputMaybe<Ec_Type_Demande_Set_Input>;
  pk_columns: Ec_Type_Demande_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Demande_ManyArgs = {
  updates: Array<Ec_Type_Demande_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_EnseignementArgs = {
  _inc: InputMaybe<Ec_Type_Enseignement_Inc_Input>;
  _set: InputMaybe<Ec_Type_Enseignement_Set_Input>;
  where: Ec_Type_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Enseignement_By_PkArgs = {
  _inc: InputMaybe<Ec_Type_Enseignement_Inc_Input>;
  _set: InputMaybe<Ec_Type_Enseignement_Set_Input>;
  pk_columns: Ec_Type_Enseignement_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Enseignement_ManyArgs = {
  updates: Array<Ec_Type_Enseignement_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_MessageArgs = {
  _set: InputMaybe<Ec_Type_Message_Set_Input>;
  where: Ec_Type_Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Message_By_PkArgs = {
  _set: InputMaybe<Ec_Type_Message_Set_Input>;
  pk_columns: Ec_Type_Message_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Message_ManyArgs = {
  updates: Array<Ec_Type_Message_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_ModificationArgs = {
  _set: InputMaybe<Ec_Type_Modification_Set_Input>;
  where: Ec_Type_Modification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Modification_By_PkArgs = {
  _set: InputMaybe<Ec_Type_Modification_Set_Input>;
  pk_columns: Ec_Type_Modification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Ec_Type_Modification_ManyArgs = {
  updates: Array<Ec_Type_Modification_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "ec.annee" */
  ec_annee: Array<Ec_Annee>;
  /** fetch aggregated fields from the table: "ec.annee" */
  ec_annee_aggregate: Ec_Annee_Aggregate;
  /** fetch data from the table: "ec.annee" using primary key columns */
  ec_annee_by_pk: Maybe<Ec_Annee>;
  /** fetch data from the table: "ec.cursus" */
  ec_cursus: Array<Ec_Cursus>;
  /** fetch aggregated fields from the table: "ec.cursus" */
  ec_cursus_aggregate: Ec_Cursus_Aggregate;
  /** fetch data from the table: "ec.cursus" using primary key columns */
  ec_cursus_by_pk: Maybe<Ec_Cursus>;
  /** fetch data from the table: "ec.demande" */
  ec_demande: Array<Ec_Demande>;
  /** fetch aggregated fields from the table: "ec.demande" */
  ec_demande_aggregate: Ec_Demande_Aggregate;
  /** fetch data from the table: "ec.demande" using primary key columns */
  ec_demande_by_pk: Maybe<Ec_Demande>;
  /** fetch data from the table: "ec.enseignement" */
  ec_enseignement: Array<Ec_Enseignement>;
  /** fetch aggregated fields from the table: "ec.enseignement" */
  ec_enseignement_aggregate: Ec_Enseignement_Aggregate;
  /** fetch data from the table: "ec.enseignement" using primary key columns */
  ec_enseignement_by_pk: Maybe<Ec_Enseignement>;
  /** fetch data from the table: "ec.intervenant" */
  ec_intervenant: Array<Ec_Intervenant>;
  /** fetch aggregated fields from the table: "ec.intervenant" */
  ec_intervenant_aggregate: Ec_Intervenant_Aggregate;
  /** fetch data from the table: "ec.intervenant" using primary key columns */
  ec_intervenant_by_pk: Maybe<Ec_Intervenant>;
  /** fetch data from the table: "ec.mention" */
  ec_mention: Array<Ec_Mention>;
  /** fetch aggregated fields from the table: "ec.mention" */
  ec_mention_aggregate: Ec_Mention_Aggregate;
  /** fetch data from the table: "ec.mention" using primary key columns */
  ec_mention_by_pk: Maybe<Ec_Mention>;
  /** fetch data from the table: "ec.message" */
  ec_message: Array<Ec_Message>;
  /** fetch aggregated fields from the table: "ec.message" */
  ec_message_aggregate: Ec_Message_Aggregate;
  /** fetch data from the table: "ec.message" using primary key columns */
  ec_message_by_pk: Maybe<Ec_Message>;
  /** fetch data from the table: "ec.modification_service" */
  ec_modification_service: Array<Ec_Modification_Service>;
  /** fetch aggregated fields from the table: "ec.modification_service" */
  ec_modification_service_aggregate: Ec_Modification_Service_Aggregate;
  /** fetch data from the table: "ec.modification_service" using primary key columns */
  ec_modification_service_by_pk: Maybe<Ec_Modification_Service>;
  /** fetch data from the table: "ec.parcours" */
  ec_parcours: Array<Ec_Parcours>;
  /** fetch aggregated fields from the table: "ec.parcours" */
  ec_parcours_aggregate: Ec_Parcours_Aggregate;
  /** fetch data from the table: "ec.parcours" using primary key columns */
  ec_parcours_by_pk: Maybe<Ec_Parcours>;
  /** fetch data from the table: "ec.phase" */
  ec_phase: Array<Ec_Phase>;
  /** fetch aggregated fields from the table: "ec.phase" */
  ec_phase_aggregate: Ec_Phase_Aggregate;
  /** fetch data from the table: "ec.phase" using primary key columns */
  ec_phase_by_pk: Maybe<Ec_Phase>;
  /** fetch data from the table: "ec.priorite" */
  ec_priorite: Array<Ec_Priorite>;
  /** fetch aggregated fields from the table: "ec.priorite" */
  ec_priorite_aggregate: Ec_Priorite_Aggregate;
  /** fetch data from the table: "ec.priorite" using primary key columns */
  ec_priorite_by_pk: Maybe<Ec_Priorite>;
  /** fetch data from the table: "ec.responsable" */
  ec_responsable: Array<Ec_Responsable>;
  /** fetch aggregated fields from the table: "ec.responsable" */
  ec_responsable_aggregate: Ec_Responsable_Aggregate;
  /** fetch data from the table: "ec.responsable" using primary key columns */
  ec_responsable_by_pk: Maybe<Ec_Responsable>;
  /** fetch data from the table: "ec.service" */
  ec_service: Array<Ec_Service>;
  /** fetch aggregated fields from the table: "ec.service" */
  ec_service_aggregate: Ec_Service_Aggregate;
  /** fetch data from the table: "ec.service" using primary key columns */
  ec_service_by_pk: Maybe<Ec_Service>;
  /** fetch data from the table: "ec.type_demande" */
  ec_type_demande: Array<Ec_Type_Demande>;
  /** fetch aggregated fields from the table: "ec.type_demande" */
  ec_type_demande_aggregate: Ec_Type_Demande_Aggregate;
  /** fetch data from the table: "ec.type_demande" using primary key columns */
  ec_type_demande_by_pk: Maybe<Ec_Type_Demande>;
  /** fetch data from the table: "ec.type_enseignement" */
  ec_type_enseignement: Array<Ec_Type_Enseignement>;
  /** fetch aggregated fields from the table: "ec.type_enseignement" */
  ec_type_enseignement_aggregate: Ec_Type_Enseignement_Aggregate;
  /** fetch data from the table: "ec.type_enseignement" using primary key columns */
  ec_type_enseignement_by_pk: Maybe<Ec_Type_Enseignement>;
  /** fetch data from the table: "ec.type_message" */
  ec_type_message: Array<Ec_Type_Message>;
  /** fetch aggregated fields from the table: "ec.type_message" */
  ec_type_message_aggregate: Ec_Type_Message_Aggregate;
  /** fetch data from the table: "ec.type_message" using primary key columns */
  ec_type_message_by_pk: Maybe<Ec_Type_Message>;
  /** fetch data from the table: "ec.type_modification" */
  ec_type_modification: Array<Ec_Type_Modification>;
  /** fetch aggregated fields from the table: "ec.type_modification" */
  ec_type_modification_aggregate: Ec_Type_Modification_Aggregate;
  /** fetch data from the table: "ec.type_modification" using primary key columns */
  ec_type_modification_by_pk: Maybe<Ec_Type_Modification>;
};

export type Query_RootEc_AnneeArgs = {
  distinct_on: InputMaybe<Array<Ec_Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Annee_Order_By>>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

export type Query_RootEc_Annee_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Annee_Order_By>>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

export type Query_RootEc_Annee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

export type Query_RootEc_CursusArgs = {
  distinct_on: InputMaybe<Array<Ec_Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Cursus_Order_By>>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

export type Query_RootEc_Cursus_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Cursus_Order_By>>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

export type Query_RootEc_Cursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_DemandeArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

export type Query_RootEc_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

export type Query_RootEc_Demande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

export type Query_RootEc_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

export type Query_RootEc_Enseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_IntervenantArgs = {
  distinct_on: InputMaybe<Array<Ec_Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Intervenant_Order_By>>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

export type Query_RootEc_Intervenant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Intervenant_Order_By>>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

export type Query_RootEc_Intervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

export type Query_RootEc_MentionArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

export type Query_RootEc_Mention_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

export type Query_RootEc_Mention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_MessageArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

export type Query_RootEc_Message_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

export type Query_RootEc_Message_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_Modification_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

export type Query_RootEc_Modification_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

export type Query_RootEc_Modification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_ParcoursArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

export type Query_RootEc_Parcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

export type Query_RootEc_Parcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_PhaseArgs = {
  distinct_on: InputMaybe<Array<Ec_Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Phase_Order_By>>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

export type Query_RootEc_Phase_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Phase_Order_By>>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

export type Query_RootEc_Phase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootEc_PrioriteArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

export type Query_RootEc_Priorite_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

export type Query_RootEc_Priorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_ResponsableArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

export type Query_RootEc_Responsable_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

export type Query_RootEc_Responsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

export type Query_RootEc_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

export type Query_RootEc_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEc_Type_DemandeArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Demande_Order_By>>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

export type Query_RootEc_Type_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Demande_Order_By>>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

export type Query_RootEc_Type_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootEc_Type_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

export type Query_RootEc_Type_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

export type Query_RootEc_Type_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

export type Query_RootEc_Type_MessageArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Message_Order_By>>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

export type Query_RootEc_Type_Message_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Message_Order_By>>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

export type Query_RootEc_Type_Message_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootEc_Type_ModificationArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Modification_Order_By>>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

export type Query_RootEc_Type_Modification_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Modification_Order_By>>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

export type Query_RootEc_Type_Modification_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "ec.annee" */
  ec_annee: Array<Ec_Annee>;
  /** fetch aggregated fields from the table: "ec.annee" */
  ec_annee_aggregate: Ec_Annee_Aggregate;
  /** fetch data from the table: "ec.annee" using primary key columns */
  ec_annee_by_pk: Maybe<Ec_Annee>;
  /** fetch data from the table in a streaming manner: "ec.annee" */
  ec_annee_stream: Array<Ec_Annee>;
  /** fetch data from the table: "ec.cursus" */
  ec_cursus: Array<Ec_Cursus>;
  /** fetch aggregated fields from the table: "ec.cursus" */
  ec_cursus_aggregate: Ec_Cursus_Aggregate;
  /** fetch data from the table: "ec.cursus" using primary key columns */
  ec_cursus_by_pk: Maybe<Ec_Cursus>;
  /** fetch data from the table in a streaming manner: "ec.cursus" */
  ec_cursus_stream: Array<Ec_Cursus>;
  /** fetch data from the table: "ec.demande" */
  ec_demande: Array<Ec_Demande>;
  /** fetch aggregated fields from the table: "ec.demande" */
  ec_demande_aggregate: Ec_Demande_Aggregate;
  /** fetch data from the table: "ec.demande" using primary key columns */
  ec_demande_by_pk: Maybe<Ec_Demande>;
  /** fetch data from the table in a streaming manner: "ec.demande" */
  ec_demande_stream: Array<Ec_Demande>;
  /** fetch data from the table: "ec.enseignement" */
  ec_enseignement: Array<Ec_Enseignement>;
  /** fetch aggregated fields from the table: "ec.enseignement" */
  ec_enseignement_aggregate: Ec_Enseignement_Aggregate;
  /** fetch data from the table: "ec.enseignement" using primary key columns */
  ec_enseignement_by_pk: Maybe<Ec_Enseignement>;
  /** fetch data from the table in a streaming manner: "ec.enseignement" */
  ec_enseignement_stream: Array<Ec_Enseignement>;
  /** fetch data from the table: "ec.intervenant" */
  ec_intervenant: Array<Ec_Intervenant>;
  /** fetch aggregated fields from the table: "ec.intervenant" */
  ec_intervenant_aggregate: Ec_Intervenant_Aggregate;
  /** fetch data from the table: "ec.intervenant" using primary key columns */
  ec_intervenant_by_pk: Maybe<Ec_Intervenant>;
  /** fetch data from the table in a streaming manner: "ec.intervenant" */
  ec_intervenant_stream: Array<Ec_Intervenant>;
  /** fetch data from the table: "ec.mention" */
  ec_mention: Array<Ec_Mention>;
  /** fetch aggregated fields from the table: "ec.mention" */
  ec_mention_aggregate: Ec_Mention_Aggregate;
  /** fetch data from the table: "ec.mention" using primary key columns */
  ec_mention_by_pk: Maybe<Ec_Mention>;
  /** fetch data from the table in a streaming manner: "ec.mention" */
  ec_mention_stream: Array<Ec_Mention>;
  /** fetch data from the table: "ec.message" */
  ec_message: Array<Ec_Message>;
  /** fetch aggregated fields from the table: "ec.message" */
  ec_message_aggregate: Ec_Message_Aggregate;
  /** fetch data from the table: "ec.message" using primary key columns */
  ec_message_by_pk: Maybe<Ec_Message>;
  /** fetch data from the table in a streaming manner: "ec.message" */
  ec_message_stream: Array<Ec_Message>;
  /** fetch data from the table: "ec.modification_service" */
  ec_modification_service: Array<Ec_Modification_Service>;
  /** fetch aggregated fields from the table: "ec.modification_service" */
  ec_modification_service_aggregate: Ec_Modification_Service_Aggregate;
  /** fetch data from the table: "ec.modification_service" using primary key columns */
  ec_modification_service_by_pk: Maybe<Ec_Modification_Service>;
  /** fetch data from the table in a streaming manner: "ec.modification_service" */
  ec_modification_service_stream: Array<Ec_Modification_Service>;
  /** fetch data from the table: "ec.parcours" */
  ec_parcours: Array<Ec_Parcours>;
  /** fetch aggregated fields from the table: "ec.parcours" */
  ec_parcours_aggregate: Ec_Parcours_Aggregate;
  /** fetch data from the table: "ec.parcours" using primary key columns */
  ec_parcours_by_pk: Maybe<Ec_Parcours>;
  /** fetch data from the table in a streaming manner: "ec.parcours" */
  ec_parcours_stream: Array<Ec_Parcours>;
  /** fetch data from the table: "ec.phase" */
  ec_phase: Array<Ec_Phase>;
  /** fetch aggregated fields from the table: "ec.phase" */
  ec_phase_aggregate: Ec_Phase_Aggregate;
  /** fetch data from the table: "ec.phase" using primary key columns */
  ec_phase_by_pk: Maybe<Ec_Phase>;
  /** fetch data from the table in a streaming manner: "ec.phase" */
  ec_phase_stream: Array<Ec_Phase>;
  /** fetch data from the table: "ec.priorite" */
  ec_priorite: Array<Ec_Priorite>;
  /** fetch aggregated fields from the table: "ec.priorite" */
  ec_priorite_aggregate: Ec_Priorite_Aggregate;
  /** fetch data from the table: "ec.priorite" using primary key columns */
  ec_priorite_by_pk: Maybe<Ec_Priorite>;
  /** fetch data from the table in a streaming manner: "ec.priorite" */
  ec_priorite_stream: Array<Ec_Priorite>;
  /** fetch data from the table: "ec.responsable" */
  ec_responsable: Array<Ec_Responsable>;
  /** fetch aggregated fields from the table: "ec.responsable" */
  ec_responsable_aggregate: Ec_Responsable_Aggregate;
  /** fetch data from the table: "ec.responsable" using primary key columns */
  ec_responsable_by_pk: Maybe<Ec_Responsable>;
  /** fetch data from the table in a streaming manner: "ec.responsable" */
  ec_responsable_stream: Array<Ec_Responsable>;
  /** fetch data from the table: "ec.service" */
  ec_service: Array<Ec_Service>;
  /** fetch aggregated fields from the table: "ec.service" */
  ec_service_aggregate: Ec_Service_Aggregate;
  /** fetch data from the table: "ec.service" using primary key columns */
  ec_service_by_pk: Maybe<Ec_Service>;
  /** fetch data from the table in a streaming manner: "ec.service" */
  ec_service_stream: Array<Ec_Service>;
  /** fetch data from the table: "ec.type_demande" */
  ec_type_demande: Array<Ec_Type_Demande>;
  /** fetch aggregated fields from the table: "ec.type_demande" */
  ec_type_demande_aggregate: Ec_Type_Demande_Aggregate;
  /** fetch data from the table: "ec.type_demande" using primary key columns */
  ec_type_demande_by_pk: Maybe<Ec_Type_Demande>;
  /** fetch data from the table in a streaming manner: "ec.type_demande" */
  ec_type_demande_stream: Array<Ec_Type_Demande>;
  /** fetch data from the table: "ec.type_enseignement" */
  ec_type_enseignement: Array<Ec_Type_Enseignement>;
  /** fetch aggregated fields from the table: "ec.type_enseignement" */
  ec_type_enseignement_aggregate: Ec_Type_Enseignement_Aggregate;
  /** fetch data from the table: "ec.type_enseignement" using primary key columns */
  ec_type_enseignement_by_pk: Maybe<Ec_Type_Enseignement>;
  /** fetch data from the table in a streaming manner: "ec.type_enseignement" */
  ec_type_enseignement_stream: Array<Ec_Type_Enseignement>;
  /** fetch data from the table: "ec.type_message" */
  ec_type_message: Array<Ec_Type_Message>;
  /** fetch aggregated fields from the table: "ec.type_message" */
  ec_type_message_aggregate: Ec_Type_Message_Aggregate;
  /** fetch data from the table: "ec.type_message" using primary key columns */
  ec_type_message_by_pk: Maybe<Ec_Type_Message>;
  /** fetch data from the table in a streaming manner: "ec.type_message" */
  ec_type_message_stream: Array<Ec_Type_Message>;
  /** fetch data from the table: "ec.type_modification" */
  ec_type_modification: Array<Ec_Type_Modification>;
  /** fetch aggregated fields from the table: "ec.type_modification" */
  ec_type_modification_aggregate: Ec_Type_Modification_Aggregate;
  /** fetch data from the table: "ec.type_modification" using primary key columns */
  ec_type_modification_by_pk: Maybe<Ec_Type_Modification>;
  /** fetch data from the table in a streaming manner: "ec.type_modification" */
  ec_type_modification_stream: Array<Ec_Type_Modification>;
};

export type Subscription_RootEc_AnneeArgs = {
  distinct_on: InputMaybe<Array<Ec_Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Annee_Order_By>>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

export type Subscription_RootEc_Annee_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Annee_Order_By>>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

export type Subscription_RootEc_Annee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Annee_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Annee_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Annee_Bool_Exp>;
};

export type Subscription_RootEc_CursusArgs = {
  distinct_on: InputMaybe<Array<Ec_Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Cursus_Order_By>>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

export type Subscription_RootEc_Cursus_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Cursus_Order_By>>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

export type Subscription_RootEc_Cursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Cursus_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Cursus_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Cursus_Bool_Exp>;
};

export type Subscription_RootEc_DemandeArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

export type Subscription_RootEc_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Demande_Order_By>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

export type Subscription_RootEc_Demande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Demande_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Demande_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Demande_Bool_Exp>;
};

export type Subscription_RootEc_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_Enseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Enseignement_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Enseignement_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_IntervenantArgs = {
  distinct_on: InputMaybe<Array<Ec_Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Intervenant_Order_By>>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

export type Subscription_RootEc_Intervenant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Intervenant_Order_By>>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

export type Subscription_RootEc_Intervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

export type Subscription_RootEc_Intervenant_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Intervenant_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Intervenant_Bool_Exp>;
};

export type Subscription_RootEc_MentionArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

export type Subscription_RootEc_Mention_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Mention_Order_By>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

export type Subscription_RootEc_Mention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Mention_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Mention_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Mention_Bool_Exp>;
};

export type Subscription_RootEc_MessageArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

export type Subscription_RootEc_Message_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Message_Order_By>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

export type Subscription_RootEc_Message_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Message_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Message_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Message_Bool_Exp>;
};

export type Subscription_RootEc_Modification_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

export type Subscription_RootEc_Modification_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Modification_Service_Order_By>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

export type Subscription_RootEc_Modification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Modification_Service_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Modification_Service_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Modification_Service_Bool_Exp>;
};

export type Subscription_RootEc_ParcoursArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

export type Subscription_RootEc_Parcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Parcours_Order_By>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

export type Subscription_RootEc_Parcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Parcours_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Parcours_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Parcours_Bool_Exp>;
};

export type Subscription_RootEc_PhaseArgs = {
  distinct_on: InputMaybe<Array<Ec_Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Phase_Order_By>>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

export type Subscription_RootEc_Phase_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Phase_Order_By>>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

export type Subscription_RootEc_Phase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootEc_Phase_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Phase_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Phase_Bool_Exp>;
};

export type Subscription_RootEc_PrioriteArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

export type Subscription_RootEc_Priorite_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Priorite_Order_By>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

export type Subscription_RootEc_Priorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Priorite_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Priorite_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Priorite_Bool_Exp>;
};

export type Subscription_RootEc_ResponsableArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

export type Subscription_RootEc_Responsable_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Responsable_Order_By>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

export type Subscription_RootEc_Responsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Responsable_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Responsable_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Responsable_Bool_Exp>;
};

export type Subscription_RootEc_ServiceArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

export type Subscription_RootEc_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Service_Order_By>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

export type Subscription_RootEc_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEc_Service_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Service_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Service_Bool_Exp>;
};

export type Subscription_RootEc_Type_DemandeArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Demande_Order_By>>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

export type Subscription_RootEc_Type_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Demande_Order_By>>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

export type Subscription_RootEc_Type_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootEc_Type_Demande_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Type_Demande_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Type_Demande_Bool_Exp>;
};

export type Subscription_RootEc_Type_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_Type_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Enseignement_Order_By>>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_Type_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

export type Subscription_RootEc_Type_Enseignement_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Type_Enseignement_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootEc_Type_MessageArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Message_Order_By>>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

export type Subscription_RootEc_Type_Message_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Message_Order_By>>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

export type Subscription_RootEc_Type_Message_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootEc_Type_Message_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Type_Message_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Type_Message_Bool_Exp>;
};

export type Subscription_RootEc_Type_ModificationArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Modification_Order_By>>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

export type Subscription_RootEc_Type_Modification_AggregateArgs = {
  distinct_on: InputMaybe<Array<Ec_Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Ec_Type_Modification_Order_By>>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

export type Subscription_RootEc_Type_Modification_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootEc_Type_Modification_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Ec_Type_Modification_Stream_Cursor_Input>>;
  where: InputMaybe<Ec_Type_Modification_Bool_Exp>;
};

export type GetAnneesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAnneesQuery = {
  __typename?: "query_root";
  annees: Array<{
    __typename?: "ec_annee";
    value: number;
    visible: boolean;
    enCours: boolean | null;
  }>;
};

export type UpdateAnneeEnCoursMutationVariables = Exact<{
  value: Scalars["Int"]["input"];
}>;

export type UpdateAnneeEnCoursMutation = {
  __typename?: "mutation_root";
  annees: {
    __typename?: "ec_annee_mutation_response";
    returning: Array<{ __typename?: "ec_annee"; value: number }>;
  } | null;
  enCours: { __typename?: "ec_annee"; value: number } | null;
};

export type DemandeFragment = {
  __typename?: "ec_demande";
  id: number;
  heures: number;
  prioritaire: boolean | null;
  typeDemande: string;
  intervenant: {
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  };
  enseignement: { __typename?: "ec_enseignement"; id: number; heures: number };
};

export type TotalHeuresFragment = {
  __typename?: "ec_demande_aggregate";
  aggregate: {
    __typename?: "ec_demande_aggregate_fields";
    sum: { __typename?: "ec_demande_sum_fields"; heures: number | null } | null;
  } | null;
};

export type TotalHeuresEqtdFragment = {
  __typename?: "ec_demande_aggregate";
  aggregate: {
    __typename?: "ec_demande_aggregate_fields";
    sum: {
      __typename?: "ec_demande_sum_fields";
      heuresEQTD: number | null;
    } | null;
  } | null;
};

export type GetDemandeQueryVariables = Exact<{
  uid: Scalars["String"]["input"];
  ensId: Scalars["Int"]["input"];
  typeDemande: Scalars["String"]["input"];
}>;

export type GetDemandeQuery = {
  __typename?: "query_root";
  demande: Array<{
    __typename?: "ec_demande";
    id: number;
    uid: string;
    heures: number;
    ensId: number;
    typeDemande: string;
  }>;
};

export type UpsertDemandeMutationVariables = Exact<{
  uid: Scalars["String"]["input"];
  ensId: Scalars["Int"]["input"];
  typeDemande: Scalars["String"]["input"];
  heures: Scalars["Float"]["input"];
}>;

export type UpsertDemandeMutation = {
  __typename?: "mutation_root";
  demande: { __typename?: "ec_demande"; id: number } | null;
};

export type DeleteDemandeMutationVariables = Exact<{
  ensId: Scalars["Int"]["input"];
  uid: Scalars["String"]["input"];
  typeDemande: Scalars["String"]["input"];
}>;

export type DeleteDemandeMutation = {
  __typename?: "mutation_root";
  demandes: {
    __typename?: "ec_demande_mutation_response";
    returning: Array<{ __typename?: "ec_demande"; id: number }>;
  } | null;
};

export type DeleteDemandeByIdMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteDemandeByIdMutation = {
  __typename?: "mutation_root";
  demande: { __typename?: "ec_demande"; id: number } | null;
};

export type DummyMutationMutationVariables = Exact<{ [key: string]: never }>;

export type DummyMutationMutation = {
  __typename?: "mutation_root";
  demandes: {
    __typename?: "ec_demande_mutation_response";
    returning: Array<{ __typename?: "ec_demande"; id: number }>;
  } | null;
};

export type ResponsableFragment = {
  __typename?: "ec_responsable";
  id: number;
  commentaire: string | null;
  intervenant: {
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  };
};

export type ResumeFragment = {
  __typename?: "ec_enseignement";
  nom: string;
  semestre: number;
  description: string | null;
  ensId: number;
  typeEnseignement: string;
  responsables: Array<{
    __typename?: "ec_responsable";
    id: number;
    commentaire: string | null;
    intervenant: {
      __typename?: "ec_intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
  }>;
  mention: {
    __typename?: "ec_mention";
    id: number;
    nom: string;
    responsables: Array<{
      __typename?: "ec_responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
    cursus: { __typename?: "ec_cursus"; id: number; nom: string };
  };
  parcours: {
    __typename?: "ec_parcours";
    id: number;
    nom: string;
    responsables: Array<{
      __typename?: "ec_responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
  } | null;
};

export type ArchiveFragment = {
  __typename?: "ec_enseignement";
  annee: number;
  ensId: number;
  demandes: Array<{
    __typename?: "ec_demande";
    id: number;
    heures: number;
    prioritaire: boolean | null;
    typeDemande: string;
    intervenant: {
      __typename?: "ec_intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
    enseignement: {
      __typename?: "ec_enseignement";
      id: number;
      heures: number;
    };
  }>;
};

export type NestedArchivesFragment = {
  __typename?: "ec_enseignement";
  annee: number;
  ensId: number;
  parent: {
    __typename?: "ec_enseignement";
    annee: number;
    ensId: number;
    parent: {
      __typename?: "ec_enseignement";
      annee: number;
      ensId: number;
      demandes: Array<{
        __typename?: "ec_demande";
        id: number;
        heures: number;
        prioritaire: boolean | null;
        typeDemande: string;
        intervenant: {
          __typename?: "ec_intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
        enseignement: {
          __typename?: "ec_enseignement";
          id: number;
          heures: number;
        };
      }>;
    } | null;
    demandes: Array<{
      __typename?: "ec_demande";
      id: number;
      heures: number;
      prioritaire: boolean | null;
      typeDemande: string;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
      enseignement: {
        __typename?: "ec_enseignement";
        id: number;
        heures: number;
      };
    }>;
  } | null;
  demandes: Array<{
    __typename?: "ec_demande";
    id: number;
    heures: number;
    prioritaire: boolean | null;
    typeDemande: string;
    intervenant: {
      __typename?: "ec_intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
    enseignement: {
      __typename?: "ec_enseignement";
      id: number;
      heures: number;
    };
  }>;
};

export type GetEnseignementsTableRowsQueryVariables = Exact<{
  annee: Scalars["Int"]["input"];
}>;

export type GetEnseignementsTableRowsQuery = {
  __typename?: "query_root";
  enseignements: Array<{
    __typename?: "ec_enseignement";
    id: number;
    nom: string;
    semestre: number;
    heures: number;
    visible: boolean;
    nomCourt: string | null;
    groupes: number | null;
    mention: {
      __typename?: "ec_mention";
      id: number;
      nom: string;
      nomCourt: string | null;
      cursus: {
        __typename?: "ec_cursus";
        id: number;
        nom: string;
        nomCourt: string | null;
      };
    };
    parcours: {
      __typename?: "ec_parcours";
      id: number;
      nom: string;
      nomCourt: string | null;
    } | null;
    typeEnseignement: {
      __typename?: "ec_type_enseignement";
      label: string;
      labelCourt: string | null;
    };
    totalAttributions: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalPrincipales: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalSecondaires: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalPrioritaire: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
  }>;
};

export type GetEnseignementDetailsQueryVariables = Exact<{
  ensId: Scalars["Int"]["input"];
}>;

export type GetEnseignementDetailsQuery = {
  __typename?: "query_root";
  enseignement: {
    __typename?: "ec_enseignement";
    nom: string;
    semestre: number;
    description: string | null;
    ensId: number;
    typeEnseignement: string;
    demandes: Array<{
      __typename?: "ec_demande";
      id: number;
      heures: number;
      prioritaire: boolean | null;
      typeDemande: string;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
      enseignement: {
        __typename?: "ec_enseignement";
        id: number;
        heures: number;
      };
    }>;
    priorites: Array<{
      __typename?: "ec_priorite";
      id: number;
      anciennete: number | null;
      prioritaire: boolean | null;
      ensId: number;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
    parent: {
      __typename?: "ec_enseignement";
      annee: number;
      ensId: number;
      parent: {
        __typename?: "ec_enseignement";
        annee: number;
        ensId: number;
        parent: {
          __typename?: "ec_enseignement";
          annee: number;
          ensId: number;
          demandes: Array<{
            __typename?: "ec_demande";
            id: number;
            heures: number;
            prioritaire: boolean | null;
            typeDemande: string;
            intervenant: {
              __typename?: "ec_intervenant";
              uid: string;
              nom: string;
              prenom: string;
              alias: string | null;
            };
            enseignement: {
              __typename?: "ec_enseignement";
              id: number;
              heures: number;
            };
          }>;
        } | null;
        demandes: Array<{
          __typename?: "ec_demande";
          id: number;
          heures: number;
          prioritaire: boolean | null;
          typeDemande: string;
          intervenant: {
            __typename?: "ec_intervenant";
            uid: string;
            nom: string;
            prenom: string;
            alias: string | null;
          };
          enseignement: {
            __typename?: "ec_enseignement";
            id: number;
            heures: number;
          };
        }>;
      } | null;
      demandes: Array<{
        __typename?: "ec_demande";
        id: number;
        heures: number;
        prioritaire: boolean | null;
        typeDemande: string;
        intervenant: {
          __typename?: "ec_intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
        enseignement: {
          __typename?: "ec_enseignement";
          id: number;
          heures: number;
        };
      }>;
    } | null;
    responsables: Array<{
      __typename?: "ec_responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "ec_intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
    mention: {
      __typename?: "ec_mention";
      id: number;
      nom: string;
      responsables: Array<{
        __typename?: "ec_responsable";
        id: number;
        commentaire: string | null;
        intervenant: {
          __typename?: "ec_intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
      }>;
      cursus: { __typename?: "ec_cursus"; id: number; nom: string };
    };
    parcours: {
      __typename?: "ec_parcours";
      id: number;
      nom: string;
      responsables: Array<{
        __typename?: "ec_responsable";
        id: number;
        commentaire: string | null;
        intervenant: {
          __typename?: "ec_intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
      }>;
    } | null;
  } | null;
};

export type UpdateDescriptionMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
  description: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateDescriptionMutation = {
  __typename?: "mutation_root";
  description: { __typename?: "ec_enseignement"; id: number } | null;
};

export type IntervenantFragment = {
  __typename?: "ec_intervenant";
  uid: string;
  nom: string;
  prenom: string;
  alias: string | null;
};

export type GetIntervenantQueryVariables = Exact<{
  uid: Scalars["String"]["input"];
}>;

export type GetIntervenantQuery = {
  __typename?: "query_root";
  intervenant: {
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  } | null;
};

export type UpsertIntervenantMutationVariables = Exact<{
  uid: Scalars["String"]["input"];
  nom: Scalars["String"]["input"];
  prenom: Scalars["String"]["input"];
}>;

export type UpsertIntervenantMutation = {
  __typename?: "mutation_root";
  intervenant: {
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  } | null;
};

export type GetIntervenantsQueryVariables = Exact<{ [key: string]: never }>;

export type GetIntervenantsQuery = {
  __typename?: "query_root";
  intervenants: Array<{
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  }>;
};

export type GetMyRowQueryVariables = Exact<{
  uid: Scalars["String"]["input"];
  annee: Scalars["Int"]["input"];
}>;

export type GetMyRowQuery = {
  __typename?: "query_root";
  intervenant: {
    __typename?: "ec_intervenant";
    visible: boolean;
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
    demandes: Array<{
      __typename?: "ec_demande";
      id: number;
      heures: number;
      ensId: number;
      typeDemande: string;
      heuresEQTD: number | null;
    }>;
    services: Array<{
      __typename?: "ec_service";
      id: number;
      heuresEQTD: number;
    }>;
    modifications: Array<{
      __typename?: "ec_modification_service";
      id: number;
      typeModification: string;
      heuresEQTD: number;
    }>;
    totalModifications: {
      __typename?: "ec_modification_service_aggregate";
      aggregate: {
        __typename?: "ec_modification_service_aggregate_fields";
        sum: {
          __typename?: "ec_modification_service_sum_fields";
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalAttributions: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalPrincipales: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalSecondaires: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    messages: Array<{
      __typename?: "ec_message";
      id: number;
      contenu: string;
      typeMessage: string;
    }>;
  } | null;
};

export type GetIntervenantsTableRowsQueryVariables = Exact<{
  annee: Scalars["Int"]["input"];
}>;

export type GetIntervenantsTableRowsQuery = {
  __typename?: "query_root";
  intervenants: Array<{
    __typename?: "ec_intervenant";
    visible: boolean;
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
    demandes: Array<{
      __typename?: "ec_demande";
      id: number;
      heures: number;
      ensId: number;
      typeDemande: string;
      heuresEQTD: number | null;
    }>;
    services: Array<{
      __typename?: "ec_service";
      id: number;
      heuresEQTD: number;
    }>;
    modifications: Array<{
      __typename?: "ec_modification_service";
      id: number;
      typeModification: string;
      heuresEQTD: number;
    }>;
    totalModifications: {
      __typename?: "ec_modification_service_aggregate";
      aggregate: {
        __typename?: "ec_modification_service_aggregate_fields";
        sum: {
          __typename?: "ec_modification_service_sum_fields";
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalAttributions: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalPrincipales: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalSecondaires: {
      __typename?: "ec_demande_aggregate";
      aggregate: {
        __typename?: "ec_demande_aggregate_fields";
        sum: {
          __typename?: "ec_demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    messages: Array<{
      __typename?: "ec_message";
      id: number;
      contenu: string;
      typeMessage: string;
    }>;
  }>;
};

export type GetTypesMessageQueryVariables = Exact<{ [key: string]: never }>;

export type GetTypesMessageQuery = {
  __typename?: "query_root";
  typesMessage: Array<{ __typename?: "ec_type_message"; value: string }>;
};

export type UpsertMessageMutationVariables = Exact<{
  annee: Scalars["Int"]["input"];
  uid: Scalars["String"]["input"];
  typeMessage: Scalars["String"]["input"];
  contenu: Scalars["String"]["input"];
}>;

export type UpsertMessageMutation = {
  __typename?: "mutation_root";
  message: { __typename?: "ec_message"; id: number } | null;
};

export type DeleteMessageMutationVariables = Exact<{
  annee: Scalars["Int"]["input"];
  uid: Scalars["String"]["input"];
  typeMessage: Scalars["String"]["input"];
}>;

export type DeleteMessageMutation = {
  __typename?: "mutation_root";
  messages: {
    __typename?: "ec_message_mutation_response";
    returning: Array<{ __typename?: "ec_message"; id: number }>;
  } | null;
};

export type GetTypesModificationQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetTypesModificationQuery = {
  __typename?: "query_root";
  typesModification: Array<{
    __typename?: "ec_type_modification";
    value: string;
  }>;
};

export type InsertModificationMutationVariables = Exact<{
  annee: Scalars["Int"]["input"];
  uid: Scalars["String"]["input"];
  typeModification: Scalars["String"]["input"];
  heuresEQTD: Scalars["Float"]["input"];
}>;

export type InsertModificationMutation = {
  __typename?: "mutation_root";
  modificationService: {
    __typename?: "ec_modification_service";
    id: number;
  } | null;
};

export type DeleteModificationMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteModificationMutation = {
  __typename?: "mutation_root";
  modificationService: {
    __typename?: "ec_modification_service";
    id: number;
  } | null;
};

export type GetPhasesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPhasesQuery = {
  __typename?: "query_root";
  phases: Array<{
    __typename?: "ec_phase";
    value: string;
    visible: boolean;
    enCours: boolean | null;
  }>;
};

export type UpdatePhaseEnCoursMutationVariables = Exact<{
  value: Scalars["String"]["input"];
}>;

export type UpdatePhaseEnCoursMutation = {
  __typename?: "mutation_root";
  phases: {
    __typename?: "ec_phase_mutation_response";
    returning: Array<{ __typename?: "ec_phase"; value: string }>;
  } | null;
  enCours: { __typename?: "ec_phase"; value: string } | null;
};

export type PrioriteFragment = {
  __typename?: "ec_priorite";
  id: number;
  anciennete: number | null;
  prioritaire: boolean | null;
  ensId: number;
  intervenant: {
    __typename?: "ec_intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  };
};

export const TotalHeuresFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeures" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalHeuresFragment, unknown>;
export const TotalHeuresEqtdFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeuresEQTD" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TotalHeuresEqtdFragment, unknown>;
export const IntervenantFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<IntervenantFragment, unknown>;
export const ResponsableFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Responsable" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_responsable" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "commentaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResponsableFragment, unknown>;
export const ResumeFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Resume" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "responsables" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "prenom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Responsable" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mention" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsables" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Responsable" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursus" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "nom" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "parcours" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsables" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Responsable" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "semestre" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeEnseignement" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Responsable" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_responsable" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "commentaire" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResumeFragment, unknown>;
export const DemandeFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Demande" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enseignement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeDemande" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "heures" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DemandeFragment, unknown>;
export const ArchiveFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Archive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          { kind: "Field", name: { kind: "Name", value: "annee" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "demandes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "StringValue",
                              value: "attribution",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "prenom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Demande" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Demande" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enseignement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeDemande" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "heures" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ArchiveFragment, unknown>;
export const NestedArchivesFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NestedArchives" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "Archive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "parent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Archive" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "parent" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Archive" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Demande" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enseignement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeDemande" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "heures" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Archive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          { kind: "Field", name: { kind: "Name", value: "annee" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "demandes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "StringValue",
                              value: "attribution",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "prenom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Demande" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<NestedArchivesFragment, unknown>;
export const PrioriteFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Priorite" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_priorite" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "ens_id" },
          },
          { kind: "Field", name: { kind: "Name", value: "anciennete" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PrioriteFragment, unknown>;
export const GetAnneesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAnnees" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "annees" },
            name: { kind: "Name", value: "ec_annee" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "enCours" },
                  name: { kind: "Name", value: "en_cours" },
                },
                { kind: "Field", name: { kind: "Name", value: "visible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAnneesQuery, GetAnneesQueryVariables>;
export const UpdateAnneeEnCoursDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateAnneeEnCours" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "value" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "annees" },
            name: { kind: "Name", value: "update_ec_annee" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_neq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "value" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "en_cours" },
                      value: { kind: "NullValue" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "enCours" },
            name: { kind: "Name", value: "update_ec_annee_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "value" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "en_cours" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAnneeEnCoursMutation,
  UpdateAnneeEnCoursMutationVariables
>;
export const GetDemandeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDemande" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ensId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeDemande" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "demande" },
            name: { kind: "Name", value: "ec_demande" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uid" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "uid" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ens_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "ensId" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "type" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "typeDemande",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: { kind: "IntValue", value: "1" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "uid" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "ensId" },
                  name: { kind: "Name", value: "ens_id" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "typeDemande" },
                  name: { kind: "Name", value: "type" },
                },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDemandeQuery, GetDemandeQueryVariables>;
export const UpsertDemandeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertDemande" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ensId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeDemande" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "heures" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "demande" },
            name: { kind: "Name", value: "insert_ec_demande_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "uid" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "uid" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "ens_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "ensId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "typeDemande" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "heures" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "heures" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: {
                        kind: "EnumValue",
                        value: "demande_uid_ens_id_type_key",
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "heures" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpsertDemandeMutation,
  UpsertDemandeMutationVariables
>;
export const DeleteDemandeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteDemande" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ensId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeDemande" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "demandes" },
            name: { kind: "Name", value: "delete_ec_demande" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uid" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "uid" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ens_id" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "ensId" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "type" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "typeDemande",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteDemandeMutation,
  DeleteDemandeMutationVariables
>;
export const DeleteDemandeByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteDemandeById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "demande" },
            name: { kind: "Name", value: "delete_ec_demande_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteDemandeByIdMutation,
  DeleteDemandeByIdMutationVariables
>;
export const DummyMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DummyMutation" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "demandes" },
            name: { kind: "Name", value: "insert_ec_demande" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: { kind: "ListValue", values: [] },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DummyMutationMutation,
  DummyMutationMutationVariables
>;
export const GetEnseignementsTableRowsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetEnseignementsTableRows" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "enseignements" },
            name: { kind: "Name", value: "ec_enseignement" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "annee" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "annee" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: {
                                  kind: "Name",
                                  value: "groupes_corriges",
                                },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_gt" },
                                      value: { kind: "IntValue", value: "0" },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "mention" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "cursus" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "mention" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "parcours" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "semestre" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "nom" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "type" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mention" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "nom" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "nomCourt" },
                        name: { kind: "Name", value: "nom_court" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cursus" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "nom" },
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "nomCourt" },
                              name: { kind: "Name", value: "nom_court" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "parcours" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "nom" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "nomCourt" },
                        name: { kind: "Name", value: "nom_court" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "nomCourt" },
                  name: { kind: "Name", value: "nom_court" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "typeEnseignement" },
                  name: { kind: "Name", value: "type_enseignement" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "label" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "labelCourt" },
                        name: { kind: "Name", value: "label_court" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "semestre" } },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "groupes" },
                  name: { kind: "Name", value: "groupes_corriges" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalAttributions" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "type" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "StringValue",
                                    value: "attribution",
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sum" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "heures" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalPrincipales" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "type" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "StringValue",
                                    value: "principale",
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalSecondaires" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "type" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "StringValue",
                                    value: "secondaire",
                                    block: false,
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalPrioritaire" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "principale",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "prioritaire",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "BooleanValue",
                                              value: true,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "visible" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeures" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEnseignementsTableRowsQuery,
  GetEnseignementsTableRowsQueryVariables
>;
export const GetEnseignementDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetEnseignementDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "ensId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "enseignement" },
            name: { kind: "Name", value: "ec_enseignement_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "ensId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Resume" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "demandes" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Demande" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "priorites" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Priorite" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "parent" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "NestedArchives" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Responsable" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_responsable" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "commentaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Demande" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "enseignement" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "heures" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeDemande" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "heures" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Archive" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          { kind: "Field", name: { kind: "Name", value: "annee" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "demandes" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "StringValue",
                              value: "attribution",
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "prenom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Demande" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Resume" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "responsables" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "nom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "intervenant" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "prenom" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Responsable" },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "mention" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsables" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Responsable" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "cursus" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "nom" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "parcours" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "responsables" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "order_by" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "nom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "intervenant" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "prenom" },
                                      value: {
                                        kind: "EnumValue",
                                        value: "asc",
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Responsable" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "semestre" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "typeEnseignement" },
            name: { kind: "Name", value: "type" },
          },
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Priorite" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_priorite" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "intervenant" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "ens_id" },
          },
          { kind: "Field", name: { kind: "Name", value: "anciennete" } },
          { kind: "Field", name: { kind: "Name", value: "prioritaire" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "NestedArchives" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "FragmentSpread", name: { kind: "Name", value: "Archive" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "parent" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Archive" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "parent" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Archive" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEnseignementDetailsQuery,
  GetEnseignementDetailsQueryVariables
>;
export const UpdateDescriptionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDescription" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "description" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "description" },
            name: { kind: "Name", value: "update_ec_enseignement_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "description" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "description" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDescriptionMutation,
  UpdateDescriptionMutationVariables
>;
export const GetIntervenantDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetIntervenant" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "intervenant" },
            name: { kind: "Name", value: "ec_intervenant_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "uid" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "uid" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetIntervenantQuery, GetIntervenantQueryVariables>;
export const UpsertIntervenantDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertIntervenant" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "nom" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "prenom" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "intervenant" },
            name: { kind: "Name", value: "insert_ec_intervenant_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "uid" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "uid" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "nom" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "nom" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "prenom" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "prenom" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: { kind: "EnumValue", value: "intervenant_pkey" },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [
                          { kind: "EnumValue", value: "nom" },
                          { kind: "EnumValue", value: "prenom" },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "uid" } },
                { kind: "Field", name: { kind: "Name", value: "nom" } },
                { kind: "Field", name: { kind: "Name", value: "prenom" } },
                { kind: "Field", name: { kind: "Name", value: "alias" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpsertIntervenantMutation,
  UpsertIntervenantMutationVariables
>;
export const GetIntervenantsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetIntervenants" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "intervenants" },
            name: { kind: "Name", value: "ec_intervenant" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "actif" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "nom" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "prenom" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetIntervenantsQuery,
  GetIntervenantsQueryVariables
>;
export const GetMyRowDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMyRow" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "intervenant" },
            name: { kind: "Name", value: "ec_intervenant_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "uid" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "uid" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "demandes" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "enseignement" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "annee" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "annee",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "ensId" },
                        name: { kind: "Name", value: "ens_id" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeDemande" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "services" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "modifications" },
                  name: { kind: "Name", value: "modifications_service" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeModification" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalModifications" },
                  name: {
                    kind: "Name",
                    value: "modifications_service_aggregate",
                  },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sum" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: {
                                      kind: "Name",
                                      value: "heuresEQTD",
                                    },
                                    name: {
                                      kind: "Name",
                                      value: "heures_eqtd",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalAttributions" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "attribution",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalPrincipales" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "principale",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalSecondaires" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "secondaire",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeMessage" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contenu" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "visible" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeures" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeuresEQTD" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMyRowQuery, GetMyRowQueryVariables>;
export const GetIntervenantsTableRowsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetIntervenantsTableRows" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "intervenants" },
            name: { kind: "Name", value: "ec_intervenant" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "actif" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "nom" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "prenom" },
                          value: { kind: "EnumValue", value: "asc" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "Intervenant" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "demandes" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "ensId" },
                        name: { kind: "Name", value: "ens_id" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeDemande" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "services" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "limit" },
                      value: { kind: "IntValue", value: "1" },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "modifications" },
                  name: { kind: "Name", value: "modifications_service" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeModification" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalModifications" },
                  name: {
                    kind: "Name",
                    value: "modifications_service_aggregate",
                  },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sum" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: {
                                      kind: "Name",
                                      value: "heuresEQTD",
                                    },
                                    name: {
                                      kind: "Name",
                                      value: "heures_eqtd",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalAttributions" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "attribution",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalPrincipales" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "principale",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "totalSecondaires" },
                  name: { kind: "Name", value: "demandes_aggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ListValue",
                              values: [
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "type" },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "_eq",
                                            },
                                            value: {
                                              kind: "StringValue",
                                              value: "secondaire",
                                              block: false,
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                                {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "enseignement",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "annee",
                                            },
                                            value: {
                                              kind: "ObjectValue",
                                              fields: [
                                                {
                                                  kind: "ObjectField",
                                                  name: {
                                                    kind: "Name",
                                                    value: "_eq",
                                                  },
                                                  value: {
                                                    kind: "Variable",
                                                    name: {
                                                      kind: "Name",
                                                      value: "annee",
                                                    },
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  ],
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeures" },
                      },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "TotalHeuresEQTD" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "messages" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "annee" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "annee" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "typeMessage" },
                        name: { kind: "Name", value: "type" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "contenu" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "visible" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_intervenant" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "uid" } },
          { kind: "Field", name: { kind: "Name", value: "nom" } },
          { kind: "Field", name: { kind: "Name", value: "prenom" } },
          { kind: "Field", name: { kind: "Name", value: "alias" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeures" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "heures" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeuresEQTD" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "ec_demande_aggregate" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "aggregate" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "heuresEQTD" },
                        name: { kind: "Name", value: "heures_eqtd" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetIntervenantsTableRowsQuery,
  GetIntervenantsTableRowsQueryVariables
>;
export const GetTypesMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTypesMessage" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "typesMessage" },
            name: { kind: "Name", value: "ec_type_message" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTypesMessageQuery,
  GetTypesMessageQueryVariables
>;
export const UpsertMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpsertMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeMessage" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "contenu" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "message" },
            name: { kind: "Name", value: "insert_ec_message_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "annee" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "annee" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "uid" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "uid" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "typeMessage" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "contenu" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "contenu" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "on_conflict" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "constraint" },
                      value: {
                        kind: "EnumValue",
                        value: "message_annee_uid_type_key",
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "update_columns" },
                      value: {
                        kind: "ListValue",
                        values: [{ kind: "EnumValue", value: "contenu" }],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpsertMessageMutation,
  UpsertMessageMutationVariables
>;
export const DeleteMessageDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteMessage" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeMessage" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "messages" },
            name: { kind: "Name", value: "delete_ec_message" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "annee" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "annee" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "uid" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: { kind: "Name", value: "uid" },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "type" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "_eq" },
                                      value: {
                                        kind: "Variable",
                                        name: {
                                          kind: "Name",
                                          value: "typeMessage",
                                        },
                                      },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteMessageMutation,
  DeleteMessageMutationVariables
>;
export const GetTypesModificationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTypesModification" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "typesModification" },
            name: { kind: "Name", value: "ec_type_modification" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTypesModificationQuery,
  GetTypesModificationQueryVariables
>;
export const InsertModificationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "InsertModification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "annee" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "uid" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "typeModification" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "heuresEQTD" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Float" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "modificationService" },
            name: { kind: "Name", value: "insert_ec_modification_service_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "annee" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "annee" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "uid" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "uid" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "typeModification" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "heures_eqtd" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "heuresEQTD" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertModificationMutation,
  InsertModificationMutationVariables
>;
export const DeleteModificationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteModification" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "modificationService" },
            name: {
              kind: "Name",
              value: "delete_ec_modification_service_by_pk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteModificationMutation,
  DeleteModificationMutationVariables
>;
export const GetPhasesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPhases" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "phases" },
            name: { kind: "Name", value: "ec_phase" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: { kind: "EnumValue", value: "desc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "enCours" },
                  name: { kind: "Name", value: "en_cours" },
                },
                { kind: "Field", name: { kind: "Name", value: "visible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPhasesQuery, GetPhasesQueryVariables>;
export const UpdatePhaseEnCoursDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdatePhaseEnCours" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "value" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "phases" },
            name: { kind: "Name", value: "update_ec_phase" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_neq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "value" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "en_cours" },
                      value: { kind: "NullValue" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "enCours" },
            name: { kind: "Name", value: "update_ec_phase_by_pk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pk_columns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "value" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "en_cours" },
                      value: { kind: "BooleanValue", value: true },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "value" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdatePhaseEnCoursMutation,
  UpdatePhaseEnCoursMutationVariables
>;
