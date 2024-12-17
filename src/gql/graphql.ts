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

/** Table contenant les différentes années. */
export type Annee = {
  __typename?: "annee";
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: Maybe<Scalars["Boolean"]["output"]>;
  /** An array relationship */
  enseignements: Array<Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Enseignement_Aggregate;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  services_aggregate: Service_Aggregate;
  /** Le numéro de l'année (unique). */
  value: Scalars["Int"]["output"];
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différentes années. */
export type AnneeEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type AnneeEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type AnneeServicesArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

/** Table contenant les différentes années. */
export type AnneeServices_AggregateArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

/** aggregated selection of "annee" */
export type Annee_Aggregate = {
  __typename?: "annee_aggregate";
  aggregate: Maybe<Annee_Aggregate_Fields>;
  nodes: Array<Annee>;
};

/** aggregate fields of "annee" */
export type Annee_Aggregate_Fields = {
  __typename?: "annee_aggregate_fields";
  avg: Maybe<Annee_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Annee_Max_Fields>;
  min: Maybe<Annee_Min_Fields>;
  stddev: Maybe<Annee_Stddev_Fields>;
  stddev_pop: Maybe<Annee_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Annee_Stddev_Samp_Fields>;
  sum: Maybe<Annee_Sum_Fields>;
  var_pop: Maybe<Annee_Var_Pop_Fields>;
  var_samp: Maybe<Annee_Var_Samp_Fields>;
  variance: Maybe<Annee_Variance_Fields>;
};

/** aggregate fields of "annee" */
export type Annee_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Annee_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Annee_Avg_Fields = {
  __typename?: "annee_avg_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "annee". All fields are combined with a logical 'AND'. */
export type Annee_Bool_Exp = {
  _and: InputMaybe<Array<Annee_Bool_Exp>>;
  _not: InputMaybe<Annee_Bool_Exp>;
  _or: InputMaybe<Array<Annee_Bool_Exp>>;
  en_cours: InputMaybe<Boolean_Comparison_Exp>;
  enseignements: InputMaybe<Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Bool_Exp>;
  services: InputMaybe<Service_Bool_Exp>;
  services_aggregate: InputMaybe<Service_Aggregate_Bool_Exp>;
  value: InputMaybe<Int_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "annee" */
export enum Annee_Constraint {
  /** unique or primary key constraint on columns "en_cours" */
  AnneeEnCoursKey = "annee_en_cours_key",
  /** unique or primary key constraint on columns "value" */
  AnneePkey = "annee_pkey",
}

/** input type for incrementing numeric columns in table "annee" */
export type Annee_Inc_Input = {
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "annee" */
export type Annee_Insert_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  enseignements: InputMaybe<Enseignement_Arr_Rel_Insert_Input>;
  services: InputMaybe<Service_Arr_Rel_Insert_Input>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Annee_Max_Fields = {
  __typename?: "annee_max_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** aggregate min on columns */
export type Annee_Min_Fields = {
  __typename?: "annee_min_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** response of any mutation on the table "annee" */
export type Annee_Mutation_Response = {
  __typename?: "annee_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Annee>;
};

/** input type for inserting object relation for remote table "annee" */
export type Annee_Obj_Rel_Insert_Input = {
  data: Annee_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Annee_On_Conflict>;
};

/** on_conflict condition type for table "annee" */
export type Annee_On_Conflict = {
  constraint: Annee_Constraint;
  update_columns: Array<Annee_Update_Column>;
  where: InputMaybe<Annee_Bool_Exp>;
};

/** Ordering options when selecting data from "annee". */
export type Annee_Order_By = {
  en_cours: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Order_By>;
  services_aggregate: InputMaybe<Service_Aggregate_Order_By>;
  value: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: annee */
export type Annee_Pk_Columns_Input = {
  /** Le numéro de l'année (unique). */
  value: Scalars["Int"]["input"];
};

/** select columns of table "annee" */
export enum Annee_Select_Column {
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "annee" */
export type Annee_Set_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Annee_Stddev_Fields = {
  __typename?: "annee_stddev_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Annee_Stddev_Pop_Fields = {
  __typename?: "annee_stddev_pop_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Annee_Stddev_Samp_Fields = {
  __typename?: "annee_stddev_samp_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "annee" */
export type Annee_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Annee_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Annee_Stream_Cursor_Value_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le numéro de l'année (unique). */
  value: InputMaybe<Scalars["Int"]["input"]>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Annee_Sum_Fields = {
  __typename?: "annee_sum_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "annee" */
export enum Annee_Update_Column {
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
  /** column name */
  Visible = "visible",
}

export type Annee_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Annee_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Annee_Set_Input>;
  /** filter the rows which have to be updated */
  where: Annee_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Annee_Var_Pop_Fields = {
  __typename?: "annee_var_pop_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Annee_Var_Samp_Fields = {
  __typename?: "annee_var_samp_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Annee_Variance_Fields = {
  __typename?: "annee_variance_fields";
  /** Le numéro de l'année (unique). */
  value: Maybe<Scalars["Float"]["output"]>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Table contenant les différents cursus (licence, master, etc.). */
export type Cursus = {
  __typename?: "cursus";
  /** L'identifiant unique du cursus. */
  id: Scalars["Int"]["output"];
  /** An array relationship */
  mentions: Array<Mention>;
  /** An aggregate relationship */
  mentions_aggregate: Mention_Aggregate;
  /** Le nom du cursus (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différents cursus (licence, master, etc.). */
export type CursusMentionsArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

/** Table contenant les différents cursus (licence, master, etc.). */
export type CursusMentions_AggregateArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

/** aggregated selection of "cursus" */
export type Cursus_Aggregate = {
  __typename?: "cursus_aggregate";
  aggregate: Maybe<Cursus_Aggregate_Fields>;
  nodes: Array<Cursus>;
};

/** aggregate fields of "cursus" */
export type Cursus_Aggregate_Fields = {
  __typename?: "cursus_aggregate_fields";
  avg: Maybe<Cursus_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Cursus_Max_Fields>;
  min: Maybe<Cursus_Min_Fields>;
  stddev: Maybe<Cursus_Stddev_Fields>;
  stddev_pop: Maybe<Cursus_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Cursus_Stddev_Samp_Fields>;
  sum: Maybe<Cursus_Sum_Fields>;
  var_pop: Maybe<Cursus_Var_Pop_Fields>;
  var_samp: Maybe<Cursus_Var_Samp_Fields>;
  variance: Maybe<Cursus_Variance_Fields>;
};

/** aggregate fields of "cursus" */
export type Cursus_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Cursus_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Cursus_Avg_Fields = {
  __typename?: "cursus_avg_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "cursus". All fields are combined with a logical 'AND'. */
export type Cursus_Bool_Exp = {
  _and: InputMaybe<Array<Cursus_Bool_Exp>>;
  _not: InputMaybe<Cursus_Bool_Exp>;
  _or: InputMaybe<Array<Cursus_Bool_Exp>>;
  id: InputMaybe<Int_Comparison_Exp>;
  mentions: InputMaybe<Mention_Bool_Exp>;
  mentions_aggregate: InputMaybe<Mention_Aggregate_Bool_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "cursus" */
export enum Cursus_Constraint {
  /** unique or primary key constraint on columns "nom" */
  CursusNomKey = "cursus_nom_key",
  /** unique or primary key constraint on columns "id" */
  CursusPkey = "cursus_pkey",
}

/** input type for incrementing numeric columns in table "cursus" */
export type Cursus_Inc_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "cursus" */
export type Cursus_Insert_Input = {
  /** L'identifiant unique du cursus. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mentions: InputMaybe<Mention_Arr_Rel_Insert_Input>;
  /** Le nom du cursus (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Cursus_Max_Fields = {
  __typename?: "cursus_max_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du cursus (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Cursus_Min_Fields = {
  __typename?: "cursus_min_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du cursus (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "cursus" */
export type Cursus_Mutation_Response = {
  __typename?: "cursus_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Cursus>;
};

/** input type for inserting object relation for remote table "cursus" */
export type Cursus_Obj_Rel_Insert_Input = {
  data: Cursus_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Cursus_On_Conflict>;
};

/** on_conflict condition type for table "cursus" */
export type Cursus_On_Conflict = {
  constraint: Cursus_Constraint;
  update_columns: Array<Cursus_Update_Column>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

/** Ordering options when selecting data from "cursus". */
export type Cursus_Order_By = {
  id: InputMaybe<Order_By>;
  mentions_aggregate: InputMaybe<Mention_Aggregate_Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: cursus */
export type Cursus_Pk_Columns_Input = {
  /** L'identifiant unique du cursus. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "cursus" */
export enum Cursus_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "cursus" */
export type Cursus_Set_Input = {
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
export type Cursus_Stddev_Fields = {
  __typename?: "cursus_stddev_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Cursus_Stddev_Pop_Fields = {
  __typename?: "cursus_stddev_pop_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Cursus_Stddev_Samp_Fields = {
  __typename?: "cursus_stddev_samp_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "cursus" */
export type Cursus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cursus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cursus_Stream_Cursor_Value_Input = {
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
export type Cursus_Sum_Fields = {
  __typename?: "cursus_sum_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "cursus" */
export enum Cursus_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Nom = "nom",
  /** column name */
  NomCourt = "nom_court",
  /** column name */
  Visible = "visible",
}

export type Cursus_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Cursus_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Cursus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cursus_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cursus_Var_Pop_Fields = {
  __typename?: "cursus_var_pop_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Cursus_Var_Samp_Fields = {
  __typename?: "cursus_var_samp_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Cursus_Variance_Fields = {
  __typename?: "cursus_variance_fields";
  /** L'identifiant unique du cursus. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les demandes. */
export type Demande = {
  __typename?: "demande";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Scalars["Int"]["output"];
  /** An object relationship */
  enseignement: Enseignement;
  /** Le nombre d'heures demandées. */
  heures: Scalars["Float"]["output"];
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Scalars["Int"]["output"];
  /** Fonction qui indique, pour une demande donnée, si celle-ci est prioritaire. */
  prioritaire: Maybe<Scalars["Boolean"]["output"]>;
  /** An object relationship */
  service: Service;
  service_id: Scalars["Int"]["output"];
  /** Le type de demande. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  typeByType: Type_Demande;
};

/** aggregated selection of "demande" */
export type Demande_Aggregate = {
  __typename?: "demande_aggregate";
  aggregate: Maybe<Demande_Aggregate_Fields>;
  nodes: Array<Demande>;
};

export type Demande_Aggregate_Bool_Exp = {
  count: InputMaybe<Demande_Aggregate_Bool_Exp_Count>;
};

export type Demande_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Demande_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "demande" */
export type Demande_Aggregate_Fields = {
  __typename?: "demande_aggregate_fields";
  avg: Maybe<Demande_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Demande_Max_Fields>;
  min: Maybe<Demande_Min_Fields>;
  stddev: Maybe<Demande_Stddev_Fields>;
  stddev_pop: Maybe<Demande_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Demande_Stddev_Samp_Fields>;
  sum: Maybe<Demande_Sum_Fields>;
  var_pop: Maybe<Demande_Var_Pop_Fields>;
  var_samp: Maybe<Demande_Var_Samp_Fields>;
  variance: Maybe<Demande_Variance_Fields>;
};

/** aggregate fields of "demande" */
export type Demande_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "demande" */
export type Demande_Aggregate_Order_By = {
  avg: InputMaybe<Demande_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Demande_Max_Order_By>;
  min: InputMaybe<Demande_Min_Order_By>;
  stddev: InputMaybe<Demande_Stddev_Order_By>;
  stddev_pop: InputMaybe<Demande_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Demande_Stddev_Samp_Order_By>;
  sum: InputMaybe<Demande_Sum_Order_By>;
  var_pop: InputMaybe<Demande_Var_Pop_Order_By>;
  var_samp: InputMaybe<Demande_Var_Samp_Order_By>;
  variance: InputMaybe<Demande_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "demande" */
export type Demande_Arr_Rel_Insert_Input = {
  data: Array<Demande_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Demande_On_Conflict>;
};

/** aggregate avg on columns */
export type Demande_Avg_Fields = {
  __typename?: "demande_avg_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "demande" */
export type Demande_Avg_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "demande". All fields are combined with a logical 'AND'. */
export type Demande_Bool_Exp = {
  _and: InputMaybe<Array<Demande_Bool_Exp>>;
  _not: InputMaybe<Demande_Bool_Exp>;
  _or: InputMaybe<Array<Demande_Bool_Exp>>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Enseignement_Bool_Exp>;
  heures: InputMaybe<Float_Comparison_Exp>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  prioritaire: InputMaybe<Boolean_Comparison_Exp>;
  service: InputMaybe<Service_Bool_Exp>;
  service_id: InputMaybe<Int_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  typeByType: InputMaybe<Type_Demande_Bool_Exp>;
};

/** unique or primary key constraints on table "demande" */
export enum Demande_Constraint {
  /** unique or primary key constraint on columns "id" */
  DemandePkey = "demande_pkey",
  /** unique or primary key constraint on columns "type", "ens_id", "service_id" */
  DemandeServiceIdEnsIdTypeKey = "demande_service_id_ens_id_type_key",
}

/** input type for incrementing numeric columns in table "demande" */
export type Demande_Inc_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "demande" */
export type Demande_Insert_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Enseignement_Obj_Rel_Insert_Input>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  service: InputMaybe<Service_Obj_Rel_Insert_Input>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
  typeByType: InputMaybe<Type_Demande_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Demande_Max_Fields = {
  __typename?: "demande_max_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de demande. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "demande" */
export type Demande_Max_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
  /** Le type de demande. */
  type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Demande_Min_Fields = {
  __typename?: "demande_min_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de demande. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "demande" */
export type Demande_Min_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
  /** Le type de demande. */
  type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "demande" */
export type Demande_Mutation_Response = {
  __typename?: "demande_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Demande>;
};

/** on_conflict condition type for table "demande" */
export type Demande_On_Conflict = {
  constraint: Demande_Constraint;
  update_columns: Array<Demande_Update_Column>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Ordering options when selecting data from "demande". */
export type Demande_Order_By = {
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Enseignement_Order_By>;
  heures: InputMaybe<Order_By>;
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  prioritaire: InputMaybe<Order_By>;
  service: InputMaybe<Service_Order_By>;
  service_id: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  typeByType: InputMaybe<Type_Demande_Order_By>;
};

/** primary key columns input for table: demande */
export type Demande_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "demande" */
export enum Demande_Select_Column {
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "demande" */
export type Demande_Set_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Demande_Stddev_Fields = {
  __typename?: "demande_stddev_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "demande" */
export type Demande_Stddev_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Demande_Stddev_Pop_Fields = {
  __typename?: "demande_stddev_pop_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "demande" */
export type Demande_Stddev_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Demande_Stddev_Samp_Fields = {
  __typename?: "demande_stddev_samp_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "demande" */
export type Demande_Stddev_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "demande" */
export type Demande_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Demande_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Demande_Stream_Cursor_Value_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de demande. */
  type: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Demande_Sum_Fields = {
  __typename?: "demande_sum_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "demande" */
export type Demande_Sum_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** update columns of table "demande" */
export enum Demande_Update_Column {
  /** column name */
  EnsId = "ens_id",
  /** column name */
  Heures = "heures",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
  /** column name */
  Type = "type",
}

export type Demande_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Demande_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Demande_Set_Input>;
  /** filter the rows which have to be updated */
  where: Demande_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Demande_Var_Pop_Fields = {
  __typename?: "demande_var_pop_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "demande" */
export type Demande_Var_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Demande_Var_Samp_Fields = {
  __typename?: "demande_var_samp_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "demande" */
export type Demande_Var_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Demande_Variance_Fields = {
  __typename?: "demande_variance_fields";
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures demandées. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Fonction qui renvoie, pour une demande donnée, le nombre d'heures EQTD correspondant en utilisant le coefficient multiplicateur du type d'enseignement correspondant. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "demande" */
export type Demande_Variance_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  ens_id: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  heures: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Table contenant les enseignements. */
export type Enseignement = {
  __typename?: "enseignement";
  /** L'année de l'enseignement. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Annee;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Scalars["Int"]["output"];
  /** An array relationship */
  demandes: Array<Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Demande_Aggregate;
  /** Une description de l'enseignement. */
  description: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  enfants: Array<Enseignement>;
  /** An aggregate relationship */
  enfants_aggregate: Enseignement_Aggregate;
  ens_id_import: Maybe<Scalars["String"]["output"]>;
  formation_id_import: Maybe<Scalars["String"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Scalars["Int"]["output"];
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Scalars["Float"]["output"];
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'enseignement. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  mention: Mention;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: Scalars["Int"]["output"];
  /** Le nom de l'enseignement. */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel) */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An object relationship */
  parcours: Maybe<Parcours>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  parent: Maybe<Enseignement>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: Maybe<Scalars["Int"]["output"]>;
  /** An array relationship */
  priorites: Array<Priorite>;
  /** An aggregate relationship */
  priorites_aggregate: Priorite_Aggregate;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: Maybe<Scalars["Int"]["output"]>;
  /** An array relationship */
  responsables: Array<Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Responsable_Aggregate;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: Scalars["Int"]["output"];
  /** Le type d'enseignement. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  typeByType: Type_Enseignement;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les enseignements. */
export type EnseignementDemandesArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementEnfantsArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementEnfants_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementPrioritesArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementPriorites_AggregateArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementResponsablesArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Table contenant les enseignements. */
export type EnseignementResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** aggregated selection of "enseignement" */
export type Enseignement_Aggregate = {
  __typename?: "enseignement_aggregate";
  aggregate: Maybe<Enseignement_Aggregate_Fields>;
  nodes: Array<Enseignement>;
};

export type Enseignement_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Enseignement_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Enseignement_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Enseignement_Aggregate_Bool_Exp_Count>;
};

export type Enseignement_Aggregate_Bool_Exp_Bool_And = {
  arguments: Enseignement_Select_Column_Enseignement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Enseignement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Enseignement_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Enseignement_Select_Column_Enseignement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Enseignement_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Enseignement_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Enseignement_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "enseignement" */
export type Enseignement_Aggregate_Fields = {
  __typename?: "enseignement_aggregate_fields";
  avg: Maybe<Enseignement_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Enseignement_Max_Fields>;
  min: Maybe<Enseignement_Min_Fields>;
  stddev: Maybe<Enseignement_Stddev_Fields>;
  stddev_pop: Maybe<Enseignement_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Enseignement_Stddev_Samp_Fields>;
  sum: Maybe<Enseignement_Sum_Fields>;
  var_pop: Maybe<Enseignement_Var_Pop_Fields>;
  var_samp: Maybe<Enseignement_Var_Samp_Fields>;
  variance: Maybe<Enseignement_Variance_Fields>;
};

/** aggregate fields of "enseignement" */
export type Enseignement_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "enseignement" */
export type Enseignement_Aggregate_Order_By = {
  avg: InputMaybe<Enseignement_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Enseignement_Max_Order_By>;
  min: InputMaybe<Enseignement_Min_Order_By>;
  stddev: InputMaybe<Enseignement_Stddev_Order_By>;
  stddev_pop: InputMaybe<Enseignement_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Enseignement_Stddev_Samp_Order_By>;
  sum: InputMaybe<Enseignement_Sum_Order_By>;
  var_pop: InputMaybe<Enseignement_Var_Pop_Order_By>;
  var_samp: InputMaybe<Enseignement_Var_Samp_Order_By>;
  variance: InputMaybe<Enseignement_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "enseignement" */
export type Enseignement_Arr_Rel_Insert_Input = {
  data: Array<Enseignement_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Enseignement_On_Conflict>;
};

/** aggregate avg on columns */
export type Enseignement_Avg_Fields = {
  __typename?: "enseignement_avg_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by avg() on columns of table "enseignement" */
export type Enseignement_Avg_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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

/** Boolean expression to filter rows from the table "enseignement". All fields are combined with a logical 'AND'. */
export type Enseignement_Bool_Exp = {
  _and: InputMaybe<Array<Enseignement_Bool_Exp>>;
  _not: InputMaybe<Enseignement_Bool_Exp>;
  _or: InputMaybe<Array<Enseignement_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Annee_Bool_Exp>;
  annee_cycle: InputMaybe<Int_Comparison_Exp>;
  demandes: InputMaybe<Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Demande_Aggregate_Bool_Exp>;
  description: InputMaybe<String_Comparison_Exp>;
  enfants: InputMaybe<Enseignement_Bool_Exp>;
  enfants_aggregate: InputMaybe<Enseignement_Aggregate_Bool_Exp>;
  ens_id_import: InputMaybe<String_Comparison_Exp>;
  formation_id_import: InputMaybe<String_Comparison_Exp>;
  groupes: InputMaybe<Int_Comparison_Exp>;
  groupes_corriges: InputMaybe<Int_Comparison_Exp>;
  groupes_ouverts: InputMaybe<Int_Comparison_Exp>;
  heures: InputMaybe<Float_Comparison_Exp>;
  heures_corrigees: InputMaybe<Float_Comparison_Exp>;
  heures_ouvertes: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  mention: InputMaybe<Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  parcours: InputMaybe<Parcours_Bool_Exp>;
  parcours_id: InputMaybe<Int_Comparison_Exp>;
  parent: InputMaybe<Enseignement_Bool_Exp>;
  parent_id: InputMaybe<Int_Comparison_Exp>;
  priorites: InputMaybe<Priorite_Bool_Exp>;
  priorites_aggregate: InputMaybe<Priorite_Aggregate_Bool_Exp>;
  regle_priorite: InputMaybe<Int_Comparison_Exp>;
  responsables: InputMaybe<Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Bool_Exp>;
  semestre: InputMaybe<Int_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  typeByType: InputMaybe<Type_Enseignement_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "enseignement" */
export enum Enseignement_Constraint {
  /** unique or primary key constraint on columns "mention_id", "type", "nom", "annee", "parcours_id", "semestre" */
  EnseignementAnneeMentionIdParcoursIdNomSemestreTypeKey = "enseignement_annee_mention_id_parcours_id_nom_semestre_type_key",
  /** unique or primary key constraint on columns "ens_id_import" */
  EnseignementEnsIdImportKey = "enseignement_ens_id_import_key",
  /** unique or primary key constraint on columns "id" */
  EnseignementPkey = "enseignement_pkey",
}

/** input type for incrementing numeric columns in table "enseignement" */
export type Enseignement_Inc_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Scalars["Float"]["input"]>;
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

/** input type for inserting data into table "enseignement" */
export type Enseignement_Insert_Input = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Annee_Obj_Rel_Insert_Input>;
  demandes: InputMaybe<Demande_Arr_Rel_Insert_Input>;
  /** Une description de l'enseignement. */
  description: InputMaybe<Scalars["String"]["input"]>;
  enfants: InputMaybe<Enseignement_Arr_Rel_Insert_Input>;
  ens_id_import: InputMaybe<Scalars["String"]["input"]>;
  formation_id_import: InputMaybe<Scalars["String"]["input"]>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'enseignement. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention: InputMaybe<Mention_Obj_Rel_Insert_Input>;
  /** L'identifiant de la mention de l'enseignement. */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de l'enseignement. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel) */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  parcours: InputMaybe<Parcours_Obj_Rel_Insert_Input>;
  /** L'identifiant du parcours de l'enseignement. */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  parent: InputMaybe<Enseignement_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id: InputMaybe<Scalars["Int"]["input"]>;
  priorites: InputMaybe<Priorite_Arr_Rel_Insert_Input>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  regle_priorite: InputMaybe<Scalars["Int"]["input"]>;
  responsables: InputMaybe<Responsable_Arr_Rel_Insert_Input>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semestre: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type d'enseignement. */
  type: InputMaybe<Scalars["String"]["input"]>;
  typeByType: InputMaybe<Type_Enseignement_Obj_Rel_Insert_Input>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Enseignement_Max_Fields = {
  __typename?: "enseignement_max_fields";
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
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by max() on columns of table "enseignement" */
export type Enseignement_Max_Order_By = {
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
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Enseignement_Min_Fields = {
  __typename?: "enseignement_min_fields";
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
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by min() on columns of table "enseignement" */
export type Enseignement_Min_Order_By = {
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
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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

/** response of any mutation on the table "enseignement" */
export type Enseignement_Mutation_Response = {
  __typename?: "enseignement_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Enseignement>;
};

/** input type for inserting object relation for remote table "enseignement" */
export type Enseignement_Obj_Rel_Insert_Input = {
  data: Enseignement_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Enseignement_On_Conflict>;
};

/** on_conflict condition type for table "enseignement" */
export type Enseignement_On_Conflict = {
  constraint: Enseignement_Constraint;
  update_columns: Array<Enseignement_Update_Column>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Ordering options when selecting data from "enseignement". */
export type Enseignement_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Annee_Order_By>;
  annee_cycle: InputMaybe<Order_By>;
  demandes_aggregate: InputMaybe<Demande_Aggregate_Order_By>;
  description: InputMaybe<Order_By>;
  enfants_aggregate: InputMaybe<Enseignement_Aggregate_Order_By>;
  ens_id_import: InputMaybe<Order_By>;
  formation_id_import: InputMaybe<Order_By>;
  groupes: InputMaybe<Order_By>;
  groupes_corriges: InputMaybe<Order_By>;
  groupes_ouverts: InputMaybe<Order_By>;
  heures: InputMaybe<Order_By>;
  heures_corrigees: InputMaybe<Order_By>;
  heures_ouvertes: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mention: InputMaybe<Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  parcours: InputMaybe<Parcours_Order_By>;
  parcours_id: InputMaybe<Order_By>;
  parent: InputMaybe<Enseignement_Order_By>;
  parent_id: InputMaybe<Order_By>;
  priorites_aggregate: InputMaybe<Priorite_Aggregate_Order_By>;
  regle_priorite: InputMaybe<Order_By>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Order_By>;
  semestre: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  typeByType: InputMaybe<Type_Enseignement_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: enseignement */
export type Enseignement_Pk_Columns_Input = {
  /** L'identifiant unique de l'enseignement. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "enseignement" */
export enum Enseignement_Select_Column {
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
  HeuresOuvertes = "heures_ouvertes",
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

/** select "enseignement_aggregate_bool_exp_bool_and_arguments_columns" columns of table "enseignement" */
export enum Enseignement_Select_Column_Enseignement_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "enseignement_aggregate_bool_exp_bool_or_arguments_columns" columns of table "enseignement" */
export enum Enseignement_Select_Column_Enseignement_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "enseignement" */
export type Enseignement_Set_Input = {
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
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Scalars["Float"]["input"]>;
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
export type Enseignement_Stddev_Fields = {
  __typename?: "enseignement_stddev_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by stddev() on columns of table "enseignement" */
export type Enseignement_Stddev_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Enseignement_Stddev_Pop_Fields = {
  __typename?: "enseignement_stddev_pop_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by stddev_pop() on columns of table "enseignement" */
export type Enseignement_Stddev_Pop_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Enseignement_Stddev_Samp_Fields = {
  __typename?: "enseignement_stddev_samp_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by stddev_samp() on columns of table "enseignement" */
export type Enseignement_Stddev_Samp_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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

/** Streaming cursor of the table "enseignement" */
export type Enseignement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Enseignement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Enseignement_Stream_Cursor_Value_Input = {
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
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Scalars["Float"]["input"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Scalars["Float"]["input"]>;
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
export type Enseignement_Sum_Fields = {
  __typename?: "enseignement_sum_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by sum() on columns of table "enseignement" */
export type Enseignement_Sum_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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

/** update columns of table "enseignement" */
export enum Enseignement_Update_Column {
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
  HeuresOuvertes = "heures_ouvertes",
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

export type Enseignement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Enseignement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Enseignement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Enseignement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Enseignement_Var_Pop_Fields = {
  __typename?: "enseignement_var_pop_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by var_pop() on columns of table "enseignement" */
export type Enseignement_Var_Pop_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Enseignement_Var_Samp_Fields = {
  __typename?: "enseignement_var_samp_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by var_samp() on columns of table "enseignement" */
export type Enseignement_Var_Samp_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Enseignement_Variance_Fields = {
  __typename?: "enseignement_variance_fields";
  /** L'année de l'enseignement. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes. */
  groupes: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre de groupes ouverts, et à défaut le nombre de groupes. */
  groupes_corriges: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe, et à défaut le nombre d'heures d'enseignement. */
  heures_corrigees: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: Maybe<Scalars["Float"]["output"]>;
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

/** order by variance() on columns of table "enseignement" */
export type Enseignement_Variance_Order_By = {
  /** L'année de l'enseignement. */
  annee: InputMaybe<Order_By>;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  annee_cycle: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groupes: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupes_ouverts: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  heures: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  heures_ouvertes: InputMaybe<Order_By>;
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
export type Intervenant = {
  __typename?: "intervenant";
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: Scalars["Boolean"]["output"];
  /** Un alias pour l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** Le nom de l'intervenant. */
  nom: Scalars["String"]["output"];
  /** Le prénom de l'intervenant. */
  prenom: Scalars["String"]["output"];
  /** An array relationship */
  priorites: Array<Priorite>;
  /** An aggregate relationship */
  priorites_aggregate: Priorite_Aggregate;
  /** An array relationship */
  responsables: Array<Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Responsable_Aggregate;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  services_aggregate: Service_Aggregate;
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars["String"]["output"];
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les intervenants. */
export type IntervenantPrioritesArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type IntervenantPriorites_AggregateArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type IntervenantResponsablesArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type IntervenantResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type IntervenantServicesArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type IntervenantServices_AggregateArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

/** aggregated selection of "intervenant" */
export type Intervenant_Aggregate = {
  __typename?: "intervenant_aggregate";
  aggregate: Maybe<Intervenant_Aggregate_Fields>;
  nodes: Array<Intervenant>;
};

/** aggregate fields of "intervenant" */
export type Intervenant_Aggregate_Fields = {
  __typename?: "intervenant_aggregate_fields";
  avg: Maybe<Intervenant_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Intervenant_Max_Fields>;
  min: Maybe<Intervenant_Min_Fields>;
  stddev: Maybe<Intervenant_Stddev_Fields>;
  stddev_pop: Maybe<Intervenant_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Intervenant_Stddev_Samp_Fields>;
  sum: Maybe<Intervenant_Sum_Fields>;
  var_pop: Maybe<Intervenant_Var_Pop_Fields>;
  var_samp: Maybe<Intervenant_Var_Samp_Fields>;
  variance: Maybe<Intervenant_Variance_Fields>;
};

/** aggregate fields of "intervenant" */
export type Intervenant_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Intervenant_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Intervenant_Avg_Fields = {
  __typename?: "intervenant_avg_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "intervenant". All fields are combined with a logical 'AND'. */
export type Intervenant_Bool_Exp = {
  _and: InputMaybe<Array<Intervenant_Bool_Exp>>;
  _not: InputMaybe<Intervenant_Bool_Exp>;
  _or: InputMaybe<Array<Intervenant_Bool_Exp>>;
  actif: InputMaybe<Boolean_Comparison_Exp>;
  alias: InputMaybe<String_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  prenom: InputMaybe<String_Comparison_Exp>;
  priorites: InputMaybe<Priorite_Bool_Exp>;
  priorites_aggregate: InputMaybe<Priorite_Aggregate_Bool_Exp>;
  responsables: InputMaybe<Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Bool_Exp>;
  service: InputMaybe<Float_Comparison_Exp>;
  services: InputMaybe<Service_Bool_Exp>;
  services_aggregate: InputMaybe<Service_Aggregate_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "intervenant" */
export enum Intervenant_Constraint {
  /** unique or primary key constraint on columns "uid" */
  IntervenantPkey = "intervenant_pkey",
}

/** input type for incrementing numeric columns in table "intervenant" */
export type Intervenant_Inc_Input = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: InputMaybe<Scalars["Float"]["input"]>;
};

/** input type for inserting data into table "intervenant" */
export type Intervenant_Insert_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Un alias pour l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  priorites: InputMaybe<Priorite_Arr_Rel_Insert_Input>;
  responsables: InputMaybe<Responsable_Arr_Rel_Insert_Input>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: InputMaybe<Scalars["Float"]["input"]>;
  services: InputMaybe<Service_Arr_Rel_Insert_Input>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Intervenant_Max_Fields = {
  __typename?: "intervenant_max_fields";
  /** Un alias pour l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** Le nom de l'intervenant. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le prénom de l'intervenant. */
  prenom: Maybe<Scalars["String"]["output"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Intervenant_Min_Fields = {
  __typename?: "intervenant_min_fields";
  /** Un alias pour l'intervenant (optionnel). */
  alias: Maybe<Scalars["String"]["output"]>;
  /** Le nom de l'intervenant. */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le prénom de l'intervenant. */
  prenom: Maybe<Scalars["String"]["output"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "intervenant" */
export type Intervenant_Mutation_Response = {
  __typename?: "intervenant_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Intervenant>;
};

/** input type for inserting object relation for remote table "intervenant" */
export type Intervenant_Obj_Rel_Insert_Input = {
  data: Intervenant_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Intervenant_On_Conflict>;
};

/** on_conflict condition type for table "intervenant" */
export type Intervenant_On_Conflict = {
  constraint: Intervenant_Constraint;
  update_columns: Array<Intervenant_Update_Column>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

/** Ordering options when selecting data from "intervenant". */
export type Intervenant_Order_By = {
  actif: InputMaybe<Order_By>;
  alias: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  prenom: InputMaybe<Order_By>;
  priorites_aggregate: InputMaybe<Priorite_Aggregate_Order_By>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Order_By>;
  service: InputMaybe<Order_By>;
  services_aggregate: InputMaybe<Service_Aggregate_Order_By>;
  uid: InputMaybe<Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: intervenant */
export type Intervenant_Pk_Columns_Input = {
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars["String"]["input"];
};

/** select columns of table "intervenant" */
export enum Intervenant_Select_Column {
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

/** input type for updating data in table "intervenant" */
export type Intervenant_Set_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Un alias pour l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate stddev on columns */
export type Intervenant_Stddev_Fields = {
  __typename?: "intervenant_stddev_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Intervenant_Stddev_Pop_Fields = {
  __typename?: "intervenant_stddev_pop_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Intervenant_Stddev_Samp_Fields = {
  __typename?: "intervenant_stddev_samp_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "intervenant" */
export type Intervenant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Intervenant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Intervenant_Stream_Cursor_Value_Input = {
  /** Indique si l'intervenant correspondant est actif, c'est-à-dire s'il intervient dans l'année en cours. */
  actif: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Un alias pour l'intervenant (optionnel). */
  alias: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom de l'intervenant. */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le prénom de l'intervenant. */
  prenom: InputMaybe<Scalars["String"]["input"]>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de l'intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si l'intervenant correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate sum on columns */
export type Intervenant_Sum_Fields = {
  __typename?: "intervenant_sum_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** update columns of table "intervenant" */
export enum Intervenant_Update_Column {
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

export type Intervenant_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Intervenant_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Intervenant_Set_Input>;
  /** filter the rows which have to be updated */
  where: Intervenant_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Intervenant_Var_Pop_Fields = {
  __typename?: "intervenant_var_pop_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Intervenant_Var_Samp_Fields = {
  __typename?: "intervenant_var_samp_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Intervenant_Variance_Fields = {
  __typename?: "intervenant_variance_fields";
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  service: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les différentes mentions. */
export type Mention = {
  __typename?: "mention";
  /** An object relationship */
  cursus: Cursus;
  cursus_id: Scalars["Int"]["output"];
  /** An array relationship */
  enseignements: Array<Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Enseignement_Aggregate;
  /** L'identifiant unique de la mention. */
  id: Scalars["Int"]["output"];
  /** Le nom de la mention (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  parcours: Array<Parcours>;
  /** An aggregate relationship */
  parcours_aggregate: Parcours_Aggregate;
  /** An array relationship */
  responsables: Array<Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Responsable_Aggregate;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différentes mentions. */
export type MentionEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type MentionEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type MentionParcoursArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type MentionParcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type MentionResponsablesArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Table contenant les différentes mentions. */
export type MentionResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** aggregated selection of "mention" */
export type Mention_Aggregate = {
  __typename?: "mention_aggregate";
  aggregate: Maybe<Mention_Aggregate_Fields>;
  nodes: Array<Mention>;
};

export type Mention_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Mention_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Mention_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Mention_Aggregate_Bool_Exp_Count>;
};

export type Mention_Aggregate_Bool_Exp_Bool_And = {
  arguments: Mention_Select_Column_Mention_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Mention_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Mention_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Mention_Select_Column_Mention_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Mention_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Mention_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Mention_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Mention_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "mention" */
export type Mention_Aggregate_Fields = {
  __typename?: "mention_aggregate_fields";
  avg: Maybe<Mention_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Mention_Max_Fields>;
  min: Maybe<Mention_Min_Fields>;
  stddev: Maybe<Mention_Stddev_Fields>;
  stddev_pop: Maybe<Mention_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Mention_Stddev_Samp_Fields>;
  sum: Maybe<Mention_Sum_Fields>;
  var_pop: Maybe<Mention_Var_Pop_Fields>;
  var_samp: Maybe<Mention_Var_Samp_Fields>;
  variance: Maybe<Mention_Variance_Fields>;
};

/** aggregate fields of "mention" */
export type Mention_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Mention_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "mention" */
export type Mention_Aggregate_Order_By = {
  avg: InputMaybe<Mention_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Mention_Max_Order_By>;
  min: InputMaybe<Mention_Min_Order_By>;
  stddev: InputMaybe<Mention_Stddev_Order_By>;
  stddev_pop: InputMaybe<Mention_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Mention_Stddev_Samp_Order_By>;
  sum: InputMaybe<Mention_Sum_Order_By>;
  var_pop: InputMaybe<Mention_Var_Pop_Order_By>;
  var_samp: InputMaybe<Mention_Var_Samp_Order_By>;
  variance: InputMaybe<Mention_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "mention" */
export type Mention_Arr_Rel_Insert_Input = {
  data: Array<Mention_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Mention_On_Conflict>;
};

/** aggregate avg on columns */
export type Mention_Avg_Fields = {
  __typename?: "mention_avg_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "mention" */
export type Mention_Avg_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "mention". All fields are combined with a logical 'AND'. */
export type Mention_Bool_Exp = {
  _and: InputMaybe<Array<Mention_Bool_Exp>>;
  _not: InputMaybe<Mention_Bool_Exp>;
  _or: InputMaybe<Array<Mention_Bool_Exp>>;
  cursus: InputMaybe<Cursus_Bool_Exp>;
  cursus_id: InputMaybe<Int_Comparison_Exp>;
  enseignements: InputMaybe<Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  parcours: InputMaybe<Parcours_Bool_Exp>;
  parcours_aggregate: InputMaybe<Parcours_Aggregate_Bool_Exp>;
  responsables: InputMaybe<Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "mention" */
export enum Mention_Constraint {
  /** unique or primary key constraint on columns "nom", "cursus_id" */
  MentionCursusIdNomKey = "mention_cursus_id_nom_key",
  /** unique or primary key constraint on columns "id" */
  MentionPkey = "mention_pkey",
}

/** input type for incrementing numeric columns in table "mention" */
export type Mention_Inc_Input = {
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "mention" */
export type Mention_Insert_Input = {
  cursus: InputMaybe<Cursus_Obj_Rel_Insert_Input>;
  cursus_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignements: InputMaybe<Enseignement_Arr_Rel_Insert_Input>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  parcours: InputMaybe<Parcours_Arr_Rel_Insert_Input>;
  responsables: InputMaybe<Responsable_Arr_Rel_Insert_Input>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Mention_Max_Fields = {
  __typename?: "mention_max_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de la mention (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "mention" */
export type Mention_Max_Order_By = {
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
export type Mention_Min_Fields = {
  __typename?: "mention_min_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom de la mention (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "mention" */
export type Mention_Min_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
  /** Le nom de la mention (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** response of any mutation on the table "mention" */
export type Mention_Mutation_Response = {
  __typename?: "mention_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Mention>;
};

/** input type for inserting object relation for remote table "mention" */
export type Mention_Obj_Rel_Insert_Input = {
  data: Mention_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Mention_On_Conflict>;
};

/** on_conflict condition type for table "mention" */
export type Mention_On_Conflict = {
  constraint: Mention_Constraint;
  update_columns: Array<Mention_Update_Column>;
  where: InputMaybe<Mention_Bool_Exp>;
};

/** Ordering options when selecting data from "mention". */
export type Mention_Order_By = {
  cursus: InputMaybe<Cursus_Order_By>;
  cursus_id: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  parcours_aggregate: InputMaybe<Parcours_Aggregate_Order_By>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: mention */
export type Mention_Pk_Columns_Input = {
  /** L'identifiant unique de la mention. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "mention" */
export enum Mention_Select_Column {
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

/** select "mention_aggregate_bool_exp_bool_and_arguments_columns" columns of table "mention" */
export enum Mention_Select_Column_Mention_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "mention_aggregate_bool_exp_bool_or_arguments_columns" columns of table "mention" */
export enum Mention_Select_Column_Mention_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "mention" */
export type Mention_Set_Input = {
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
export type Mention_Stddev_Fields = {
  __typename?: "mention_stddev_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "mention" */
export type Mention_Stddev_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Mention_Stddev_Pop_Fields = {
  __typename?: "mention_stddev_pop_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "mention" */
export type Mention_Stddev_Pop_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Mention_Stddev_Samp_Fields = {
  __typename?: "mention_stddev_samp_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "mention" */
export type Mention_Stddev_Samp_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "mention" */
export type Mention_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Mention_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Mention_Stream_Cursor_Value_Input = {
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
export type Mention_Sum_Fields = {
  __typename?: "mention_sum_fields";
  cursus_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "mention" */
export type Mention_Sum_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "mention" */
export enum Mention_Update_Column {
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

export type Mention_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Mention_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Mention_Set_Input>;
  /** filter the rows which have to be updated */
  where: Mention_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Mention_Var_Pop_Fields = {
  __typename?: "mention_var_pop_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "mention" */
export type Mention_Var_Pop_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Mention_Var_Samp_Fields = {
  __typename?: "mention_var_samp_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "mention" */
export type Mention_Var_Samp_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Mention_Variance_Fields = {
  __typename?: "mention_variance_fields";
  cursus_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la mention. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "mention" */
export type Mention_Variance_Order_By = {
  cursus_id: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id: InputMaybe<Order_By>;
};

/** Table contenant les messages enregistrés sur Geyser. */
export type Message = {
  __typename?: "message";
  /** Le contenu du message. */
  contenu: Scalars["String"]["output"];
  /** L'identifiant unique du message. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  service: Service;
  service_id: Scalars["Int"]["output"];
};

/** aggregated selection of "message" */
export type Message_Aggregate = {
  __typename?: "message_aggregate";
  aggregate: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

export type Message_Aggregate_Bool_Exp = {
  count: InputMaybe<Message_Aggregate_Bool_Exp_Count>;
};

export type Message_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Message_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Message_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "message" */
export type Message_Aggregate_Fields = {
  __typename?: "message_aggregate_fields";
  avg: Maybe<Message_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Message_Max_Fields>;
  min: Maybe<Message_Min_Fields>;
  stddev: Maybe<Message_Stddev_Fields>;
  stddev_pop: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Message_Stddev_Samp_Fields>;
  sum: Maybe<Message_Sum_Fields>;
  var_pop: Maybe<Message_Var_Pop_Fields>;
  var_samp: Maybe<Message_Var_Samp_Fields>;
  variance: Maybe<Message_Variance_Fields>;
};

/** aggregate fields of "message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Message_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "message" */
export type Message_Aggregate_Order_By = {
  avg: InputMaybe<Message_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Message_Max_Order_By>;
  min: InputMaybe<Message_Min_Order_By>;
  stddev: InputMaybe<Message_Stddev_Order_By>;
  stddev_pop: InputMaybe<Message_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Message_Stddev_Samp_Order_By>;
  sum: InputMaybe<Message_Sum_Order_By>;
  var_pop: InputMaybe<Message_Var_Pop_Order_By>;
  var_samp: InputMaybe<Message_Var_Samp_Order_By>;
  variance: InputMaybe<Message_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "message" */
export type Message_Arr_Rel_Insert_Input = {
  data: Array<Message_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Message_On_Conflict>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: "message_avg_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "message" */
export type Message_Avg_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and: InputMaybe<Array<Message_Bool_Exp>>;
  _not: InputMaybe<Message_Bool_Exp>;
  _or: InputMaybe<Array<Message_Bool_Exp>>;
  contenu: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  service: InputMaybe<Service_Bool_Exp>;
  service_id: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = "message_pkey",
  /** unique or primary key constraint on columns "service_id" */
  MessageServiceIdKey = "message_service_id_key",
}

/** input type for incrementing numeric columns in table "message" */
export type Message_Inc_Input = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "message" */
export type Message_Insert_Input = {
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service: InputMaybe<Service_Obj_Rel_Insert_Input>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: "message_max_fields";
  /** Le contenu du message. */
  contenu: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "message" */
export type Message_Max_Order_By = {
  /** Le contenu du message. */
  contenu: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: "message_min_fields";
  /** Le contenu du message. */
  contenu: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "message" */
export type Message_Min_Order_By = {
  /** Le contenu du message. */
  contenu: InputMaybe<Order_By>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** response of any mutation on the table "message" */
export type Message_Mutation_Response = {
  __typename?: "message_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns: Array<Message_Update_Column>;
  where: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "message". */
export type Message_Order_By = {
  contenu: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service: InputMaybe<Service_Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** primary key columns input for table: message */
export type Message_Pk_Columns_Input = {
  /** L'identifiant unique du message. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "message" */
export enum Message_Select_Column {
  /** column name */
  Contenu = "contenu",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
}

/** input type for updating data in table "message" */
export type Message_Set_Input = {
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: "message_stddev_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "message" */
export type Message_Stddev_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: "message_stddev_pop_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "message" */
export type Message_Stddev_Pop_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: "message_stddev_samp_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "message" */
export type Message_Stddev_Samp_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  /** Le contenu du message. */
  contenu: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant unique du message. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: "message_sum_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "message" */
export type Message_Sum_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** update columns of table "message" */
export enum Message_Update_Column {
  /** column name */
  Contenu = "contenu",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
}

export type Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: "message_var_pop_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "message" */
export type Message_Var_Pop_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: "message_var_samp_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "message" */
export type Message_Var_Samp_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: "message_variance_fields";
  /** L'identifiant unique du message. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "message" */
export type Message_Variance_Order_By = {
  /** L'identifiant unique du message. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Table contenant les modifications du service de base d'un intervenant donné pour une année donnée. */
export type Modification_Service = {
  __typename?: "modification_service";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Scalars["Float"]["output"];
  /** L'identifiant unique de la modification. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  service: Service;
  service_id: Scalars["Int"]["output"];
  /** Le type de modification. */
  type: Scalars["String"]["output"];
  /** An object relationship */
  typeByType: Type_Modification;
};

/** aggregated selection of "modification_service" */
export type Modification_Service_Aggregate = {
  __typename?: "modification_service_aggregate";
  aggregate: Maybe<Modification_Service_Aggregate_Fields>;
  nodes: Array<Modification_Service>;
};

export type Modification_Service_Aggregate_Bool_Exp = {
  count: InputMaybe<Modification_Service_Aggregate_Bool_Exp_Count>;
};

export type Modification_Service_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Modification_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Modification_Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "modification_service" */
export type Modification_Service_Aggregate_Fields = {
  __typename?: "modification_service_aggregate_fields";
  avg: Maybe<Modification_Service_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Modification_Service_Max_Fields>;
  min: Maybe<Modification_Service_Min_Fields>;
  stddev: Maybe<Modification_Service_Stddev_Fields>;
  stddev_pop: Maybe<Modification_Service_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Modification_Service_Stddev_Samp_Fields>;
  sum: Maybe<Modification_Service_Sum_Fields>;
  var_pop: Maybe<Modification_Service_Var_Pop_Fields>;
  var_samp: Maybe<Modification_Service_Var_Samp_Fields>;
  variance: Maybe<Modification_Service_Variance_Fields>;
};

/** aggregate fields of "modification_service" */
export type Modification_Service_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Modification_Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "modification_service" */
export type Modification_Service_Aggregate_Order_By = {
  avg: InputMaybe<Modification_Service_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Modification_Service_Max_Order_By>;
  min: InputMaybe<Modification_Service_Min_Order_By>;
  stddev: InputMaybe<Modification_Service_Stddev_Order_By>;
  stddev_pop: InputMaybe<Modification_Service_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Modification_Service_Stddev_Samp_Order_By>;
  sum: InputMaybe<Modification_Service_Sum_Order_By>;
  var_pop: InputMaybe<Modification_Service_Var_Pop_Order_By>;
  var_samp: InputMaybe<Modification_Service_Var_Samp_Order_By>;
  variance: InputMaybe<Modification_Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "modification_service" */
export type Modification_Service_Arr_Rel_Insert_Input = {
  data: Array<Modification_Service_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Modification_Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Modification_Service_Avg_Fields = {
  __typename?: "modification_service_avg_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "modification_service" */
export type Modification_Service_Avg_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "modification_service". All fields are combined with a logical 'AND'. */
export type Modification_Service_Bool_Exp = {
  _and: InputMaybe<Array<Modification_Service_Bool_Exp>>;
  _not: InputMaybe<Modification_Service_Bool_Exp>;
  _or: InputMaybe<Array<Modification_Service_Bool_Exp>>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  service: InputMaybe<Service_Bool_Exp>;
  service_id: InputMaybe<Int_Comparison_Exp>;
  type: InputMaybe<String_Comparison_Exp>;
  typeByType: InputMaybe<Type_Modification_Bool_Exp>;
};

/** unique or primary key constraints on table "modification_service" */
export enum Modification_Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModificationServicePkey = "modification_service_pkey",
}

/** input type for incrementing numeric columns in table "modification_service" */
export type Modification_Service_Inc_Input = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "modification_service" */
export type Modification_Service_Insert_Input = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service: InputMaybe<Service_Obj_Rel_Insert_Input>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
  typeByType: InputMaybe<Type_Modification_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Modification_Service_Max_Fields = {
  __typename?: "modification_service_max_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de modification. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "modification_service" */
export type Modification_Service_Max_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
  /** Le type de modification. */
  type: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Modification_Service_Min_Fields = {
  __typename?: "modification_service_min_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
  /** Le type de modification. */
  type: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "modification_service" */
export type Modification_Service_Min_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
  /** Le type de modification. */
  type: InputMaybe<Order_By>;
};

/** response of any mutation on the table "modification_service" */
export type Modification_Service_Mutation_Response = {
  __typename?: "modification_service_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Modification_Service>;
};

/** on_conflict condition type for table "modification_service" */
export type Modification_Service_On_Conflict = {
  constraint: Modification_Service_Constraint;
  update_columns: Array<Modification_Service_Update_Column>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

/** Ordering options when selecting data from "modification_service". */
export type Modification_Service_Order_By = {
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  service: InputMaybe<Service_Order_By>;
  service_id: InputMaybe<Order_By>;
  type: InputMaybe<Order_By>;
  typeByType: InputMaybe<Type_Modification_Order_By>;
};

/** primary key columns input for table: modification_service */
export type Modification_Service_Pk_Columns_Input = {
  /** L'identifiant unique de la modification. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "modification_service" */
export enum Modification_Service_Select_Column {
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
  /** column name */
  Type = "type",
}

/** input type for updating data in table "modification_service" */
export type Modification_Service_Set_Input = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Modification_Service_Stddev_Fields = {
  __typename?: "modification_service_stddev_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "modification_service" */
export type Modification_Service_Stddev_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Modification_Service_Stddev_Pop_Fields = {
  __typename?: "modification_service_stddev_pop_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "modification_service" */
export type Modification_Service_Stddev_Pop_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Modification_Service_Stddev_Samp_Fields = {
  __typename?: "modification_service_stddev_samp_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "modification_service" */
export type Modification_Service_Stddev_Samp_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "modification_service" */
export type Modification_Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Modification_Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Modification_Service_Stream_Cursor_Value_Input = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  service_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le type de modification. */
  type: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Modification_Service_Sum_Fields = {
  __typename?: "modification_service_sum_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Int"]["output"]>;
  service_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "modification_service" */
export type Modification_Service_Sum_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** update columns of table "modification_service" */
export enum Modification_Service_Update_Column {
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  ServiceId = "service_id",
  /** column name */
  Type = "type",
}

export type Modification_Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Modification_Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Modification_Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Modification_Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Modification_Service_Var_Pop_Fields = {
  __typename?: "modification_service_var_pop_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "modification_service" */
export type Modification_Service_Var_Pop_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Modification_Service_Var_Samp_Fields = {
  __typename?: "modification_service_var_samp_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "modification_service" */
export type Modification_Service_Var_Samp_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Modification_Service_Variance_Fields = {
  __typename?: "modification_service_variance_fields";
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique de la modification. */
  id: Maybe<Scalars["Float"]["output"]>;
  service_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "modification_service" */
export type Modification_Service_Variance_Order_By = {
  /** Le nombre d'heures EQTD dont le service est diminué (un nombre négatif correspond donc à une augmentation de service). */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique de la modification. */
  id: InputMaybe<Order_By>;
  service_id: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "annee" */
  delete_annee: Maybe<Annee_Mutation_Response>;
  /** delete single row from the table: "annee" */
  delete_annee_by_pk: Maybe<Annee>;
  /** delete data from the table: "cursus" */
  delete_cursus: Maybe<Cursus_Mutation_Response>;
  /** delete single row from the table: "cursus" */
  delete_cursus_by_pk: Maybe<Cursus>;
  /** delete data from the table: "demande" */
  delete_demande: Maybe<Demande_Mutation_Response>;
  /** delete single row from the table: "demande" */
  delete_demande_by_pk: Maybe<Demande>;
  /** delete data from the table: "enseignement" */
  delete_enseignement: Maybe<Enseignement_Mutation_Response>;
  /** delete single row from the table: "enseignement" */
  delete_enseignement_by_pk: Maybe<Enseignement>;
  /** delete data from the table: "intervenant" */
  delete_intervenant: Maybe<Intervenant_Mutation_Response>;
  /** delete single row from the table: "intervenant" */
  delete_intervenant_by_pk: Maybe<Intervenant>;
  /** delete data from the table: "mention" */
  delete_mention: Maybe<Mention_Mutation_Response>;
  /** delete single row from the table: "mention" */
  delete_mention_by_pk: Maybe<Mention>;
  /** delete data from the table: "message" */
  delete_message: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "message" */
  delete_message_by_pk: Maybe<Message>;
  /** delete data from the table: "modification_service" */
  delete_modification_service: Maybe<Modification_Service_Mutation_Response>;
  /** delete single row from the table: "modification_service" */
  delete_modification_service_by_pk: Maybe<Modification_Service>;
  /** delete data from the table: "parcours" */
  delete_parcours: Maybe<Parcours_Mutation_Response>;
  /** delete single row from the table: "parcours" */
  delete_parcours_by_pk: Maybe<Parcours>;
  /** delete data from the table: "phase" */
  delete_phase: Maybe<Phase_Mutation_Response>;
  /** delete single row from the table: "phase" */
  delete_phase_by_pk: Maybe<Phase>;
  /** delete data from the table: "priorite" */
  delete_priorite: Maybe<Priorite_Mutation_Response>;
  /** delete single row from the table: "priorite" */
  delete_priorite_by_pk: Maybe<Priorite>;
  /** delete data from the table: "responsable" */
  delete_responsable: Maybe<Responsable_Mutation_Response>;
  /** delete single row from the table: "responsable" */
  delete_responsable_by_pk: Maybe<Responsable>;
  /** delete data from the table: "service" */
  delete_service: Maybe<Service_Mutation_Response>;
  /** delete single row from the table: "service" */
  delete_service_by_pk: Maybe<Service>;
  /** delete data from the table: "type_demande" */
  delete_type_demande: Maybe<Type_Demande_Mutation_Response>;
  /** delete single row from the table: "type_demande" */
  delete_type_demande_by_pk: Maybe<Type_Demande>;
  /** delete data from the table: "type_enseignement" */
  delete_type_enseignement: Maybe<Type_Enseignement_Mutation_Response>;
  /** delete single row from the table: "type_enseignement" */
  delete_type_enseignement_by_pk: Maybe<Type_Enseignement>;
  /** delete data from the table: "type_modification" */
  delete_type_modification: Maybe<Type_Modification_Mutation_Response>;
  /** delete single row from the table: "type_modification" */
  delete_type_modification_by_pk: Maybe<Type_Modification>;
  /** insert data into the table: "annee" */
  insert_annee: Maybe<Annee_Mutation_Response>;
  /** insert a single row into the table: "annee" */
  insert_annee_one: Maybe<Annee>;
  /** insert data into the table: "cursus" */
  insert_cursus: Maybe<Cursus_Mutation_Response>;
  /** insert a single row into the table: "cursus" */
  insert_cursus_one: Maybe<Cursus>;
  /** insert data into the table: "demande" */
  insert_demande: Maybe<Demande_Mutation_Response>;
  /** insert a single row into the table: "demande" */
  insert_demande_one: Maybe<Demande>;
  /** insert data into the table: "enseignement" */
  insert_enseignement: Maybe<Enseignement_Mutation_Response>;
  /** insert a single row into the table: "enseignement" */
  insert_enseignement_one: Maybe<Enseignement>;
  /** insert data into the table: "intervenant" */
  insert_intervenant: Maybe<Intervenant_Mutation_Response>;
  /** insert a single row into the table: "intervenant" */
  insert_intervenant_one: Maybe<Intervenant>;
  /** insert data into the table: "mention" */
  insert_mention: Maybe<Mention_Mutation_Response>;
  /** insert a single row into the table: "mention" */
  insert_mention_one: Maybe<Mention>;
  /** insert data into the table: "message" */
  insert_message: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "message" */
  insert_message_one: Maybe<Message>;
  /** insert data into the table: "modification_service" */
  insert_modification_service: Maybe<Modification_Service_Mutation_Response>;
  /** insert a single row into the table: "modification_service" */
  insert_modification_service_one: Maybe<Modification_Service>;
  /** insert data into the table: "parcours" */
  insert_parcours: Maybe<Parcours_Mutation_Response>;
  /** insert a single row into the table: "parcours" */
  insert_parcours_one: Maybe<Parcours>;
  /** insert data into the table: "phase" */
  insert_phase: Maybe<Phase_Mutation_Response>;
  /** insert a single row into the table: "phase" */
  insert_phase_one: Maybe<Phase>;
  /** insert data into the table: "priorite" */
  insert_priorite: Maybe<Priorite_Mutation_Response>;
  /** insert a single row into the table: "priorite" */
  insert_priorite_one: Maybe<Priorite>;
  /** insert data into the table: "responsable" */
  insert_responsable: Maybe<Responsable_Mutation_Response>;
  /** insert a single row into the table: "responsable" */
  insert_responsable_one: Maybe<Responsable>;
  /** insert data into the table: "service" */
  insert_service: Maybe<Service_Mutation_Response>;
  /** insert a single row into the table: "service" */
  insert_service_one: Maybe<Service>;
  /** insert data into the table: "type_demande" */
  insert_type_demande: Maybe<Type_Demande_Mutation_Response>;
  /** insert a single row into the table: "type_demande" */
  insert_type_demande_one: Maybe<Type_Demande>;
  /** insert data into the table: "type_enseignement" */
  insert_type_enseignement: Maybe<Type_Enseignement_Mutation_Response>;
  /** insert a single row into the table: "type_enseignement" */
  insert_type_enseignement_one: Maybe<Type_Enseignement>;
  /** insert data into the table: "type_modification" */
  insert_type_modification: Maybe<Type_Modification_Mutation_Response>;
  /** insert a single row into the table: "type_modification" */
  insert_type_modification_one: Maybe<Type_Modification>;
  /** update data of the table: "annee" */
  update_annee: Maybe<Annee_Mutation_Response>;
  /** update single row of the table: "annee" */
  update_annee_by_pk: Maybe<Annee>;
  /** update multiples rows of table: "annee" */
  update_annee_many: Maybe<Array<Maybe<Annee_Mutation_Response>>>;
  /** update data of the table: "cursus" */
  update_cursus: Maybe<Cursus_Mutation_Response>;
  /** update single row of the table: "cursus" */
  update_cursus_by_pk: Maybe<Cursus>;
  /** update multiples rows of table: "cursus" */
  update_cursus_many: Maybe<Array<Maybe<Cursus_Mutation_Response>>>;
  /** update data of the table: "demande" */
  update_demande: Maybe<Demande_Mutation_Response>;
  /** update single row of the table: "demande" */
  update_demande_by_pk: Maybe<Demande>;
  /** update multiples rows of table: "demande" */
  update_demande_many: Maybe<Array<Maybe<Demande_Mutation_Response>>>;
  /** update data of the table: "enseignement" */
  update_enseignement: Maybe<Enseignement_Mutation_Response>;
  /** update single row of the table: "enseignement" */
  update_enseignement_by_pk: Maybe<Enseignement>;
  /** update multiples rows of table: "enseignement" */
  update_enseignement_many: Maybe<Array<Maybe<Enseignement_Mutation_Response>>>;
  /** update data of the table: "intervenant" */
  update_intervenant: Maybe<Intervenant_Mutation_Response>;
  /** update single row of the table: "intervenant" */
  update_intervenant_by_pk: Maybe<Intervenant>;
  /** update multiples rows of table: "intervenant" */
  update_intervenant_many: Maybe<Array<Maybe<Intervenant_Mutation_Response>>>;
  /** update data of the table: "mention" */
  update_mention: Maybe<Mention_Mutation_Response>;
  /** update single row of the table: "mention" */
  update_mention_by_pk: Maybe<Mention>;
  /** update multiples rows of table: "mention" */
  update_mention_many: Maybe<Array<Maybe<Mention_Mutation_Response>>>;
  /** update data of the table: "message" */
  update_message: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "message" */
  update_message_by_pk: Maybe<Message>;
  /** update multiples rows of table: "message" */
  update_message_many: Maybe<Array<Maybe<Message_Mutation_Response>>>;
  /** update data of the table: "modification_service" */
  update_modification_service: Maybe<Modification_Service_Mutation_Response>;
  /** update single row of the table: "modification_service" */
  update_modification_service_by_pk: Maybe<Modification_Service>;
  /** update multiples rows of table: "modification_service" */
  update_modification_service_many: Maybe<
    Array<Maybe<Modification_Service_Mutation_Response>>
  >;
  /** update data of the table: "parcours" */
  update_parcours: Maybe<Parcours_Mutation_Response>;
  /** update single row of the table: "parcours" */
  update_parcours_by_pk: Maybe<Parcours>;
  /** update multiples rows of table: "parcours" */
  update_parcours_many: Maybe<Array<Maybe<Parcours_Mutation_Response>>>;
  /** update data of the table: "phase" */
  update_phase: Maybe<Phase_Mutation_Response>;
  /** update single row of the table: "phase" */
  update_phase_by_pk: Maybe<Phase>;
  /** update multiples rows of table: "phase" */
  update_phase_many: Maybe<Array<Maybe<Phase_Mutation_Response>>>;
  /** update data of the table: "priorite" */
  update_priorite: Maybe<Priorite_Mutation_Response>;
  /** update single row of the table: "priorite" */
  update_priorite_by_pk: Maybe<Priorite>;
  /** update multiples rows of table: "priorite" */
  update_priorite_many: Maybe<Array<Maybe<Priorite_Mutation_Response>>>;
  /** update data of the table: "responsable" */
  update_responsable: Maybe<Responsable_Mutation_Response>;
  /** update single row of the table: "responsable" */
  update_responsable_by_pk: Maybe<Responsable>;
  /** update multiples rows of table: "responsable" */
  update_responsable_many: Maybe<Array<Maybe<Responsable_Mutation_Response>>>;
  /** update data of the table: "service" */
  update_service: Maybe<Service_Mutation_Response>;
  /** update single row of the table: "service" */
  update_service_by_pk: Maybe<Service>;
  /** update multiples rows of table: "service" */
  update_service_many: Maybe<Array<Maybe<Service_Mutation_Response>>>;
  /** update data of the table: "type_demande" */
  update_type_demande: Maybe<Type_Demande_Mutation_Response>;
  /** update single row of the table: "type_demande" */
  update_type_demande_by_pk: Maybe<Type_Demande>;
  /** update multiples rows of table: "type_demande" */
  update_type_demande_many: Maybe<Array<Maybe<Type_Demande_Mutation_Response>>>;
  /** update data of the table: "type_enseignement" */
  update_type_enseignement: Maybe<Type_Enseignement_Mutation_Response>;
  /** update single row of the table: "type_enseignement" */
  update_type_enseignement_by_pk: Maybe<Type_Enseignement>;
  /** update multiples rows of table: "type_enseignement" */
  update_type_enseignement_many: Maybe<
    Array<Maybe<Type_Enseignement_Mutation_Response>>
  >;
  /** update data of the table: "type_modification" */
  update_type_modification: Maybe<Type_Modification_Mutation_Response>;
  /** update single row of the table: "type_modification" */
  update_type_modification_by_pk: Maybe<Type_Modification>;
  /** update multiples rows of table: "type_modification" */
  update_type_modification_many: Maybe<
    Array<Maybe<Type_Modification_Mutation_Response>>
  >;
};

/** mutation root */
export type Mutation_RootDelete_AnneeArgs = {
  where: Annee_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Annee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_CursusArgs = {
  where: Cursus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_DemandeArgs = {
  where: Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Demande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_EnseignementArgs = {
  where: Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Enseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_IntervenantArgs = {
  where: Intervenant_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Intervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_MentionArgs = {
  where: Mention_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Mention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Modification_ServiceArgs = {
  where: Modification_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Modification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ParcoursArgs = {
  where: Parcours_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Parcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PhaseArgs = {
  where: Phase_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Phase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PrioriteArgs = {
  where: Priorite_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Priorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ResponsableArgs = {
  where: Responsable_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Responsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ServiceArgs = {
  where: Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Type_DemandeArgs = {
  where: Type_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Type_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Type_EnseignementArgs = {
  where: Type_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Type_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Type_ModificationArgs = {
  where: Type_Modification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Type_Modification_By_PkArgs = {
  label: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_AnneeArgs = {
  objects: Array<Annee_Insert_Input>;
  on_conflict: InputMaybe<Annee_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Annee_OneArgs = {
  object: Annee_Insert_Input;
  on_conflict: InputMaybe<Annee_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CursusArgs = {
  objects: Array<Cursus_Insert_Input>;
  on_conflict: InputMaybe<Cursus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cursus_OneArgs = {
  object: Cursus_Insert_Input;
  on_conflict: InputMaybe<Cursus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DemandeArgs = {
  objects: Array<Demande_Insert_Input>;
  on_conflict: InputMaybe<Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Demande_OneArgs = {
  object: Demande_Insert_Input;
  on_conflict: InputMaybe<Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EnseignementArgs = {
  objects: Array<Enseignement_Insert_Input>;
  on_conflict: InputMaybe<Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Enseignement_OneArgs = {
  object: Enseignement_Insert_Input;
  on_conflict: InputMaybe<Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_IntervenantArgs = {
  objects: Array<Intervenant_Insert_Input>;
  on_conflict: InputMaybe<Intervenant_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Intervenant_OneArgs = {
  object: Intervenant_Insert_Input;
  on_conflict: InputMaybe<Intervenant_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MentionArgs = {
  objects: Array<Mention_Insert_Input>;
  on_conflict: InputMaybe<Mention_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Mention_OneArgs = {
  object: Mention_Insert_Input;
  on_conflict: InputMaybe<Mention_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict: InputMaybe<Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict: InputMaybe<Message_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Modification_ServiceArgs = {
  objects: Array<Modification_Service_Insert_Input>;
  on_conflict: InputMaybe<Modification_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Modification_Service_OneArgs = {
  object: Modification_Service_Insert_Input;
  on_conflict: InputMaybe<Modification_Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ParcoursArgs = {
  objects: Array<Parcours_Insert_Input>;
  on_conflict: InputMaybe<Parcours_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Parcours_OneArgs = {
  object: Parcours_Insert_Input;
  on_conflict: InputMaybe<Parcours_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PhaseArgs = {
  objects: Array<Phase_Insert_Input>;
  on_conflict: InputMaybe<Phase_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Phase_OneArgs = {
  object: Phase_Insert_Input;
  on_conflict: InputMaybe<Phase_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PrioriteArgs = {
  objects: Array<Priorite_Insert_Input>;
  on_conflict: InputMaybe<Priorite_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Priorite_OneArgs = {
  object: Priorite_Insert_Input;
  on_conflict: InputMaybe<Priorite_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ResponsableArgs = {
  objects: Array<Responsable_Insert_Input>;
  on_conflict: InputMaybe<Responsable_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Responsable_OneArgs = {
  object: Responsable_Insert_Input;
  on_conflict: InputMaybe<Responsable_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ServiceArgs = {
  objects: Array<Service_Insert_Input>;
  on_conflict: InputMaybe<Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Service_OneArgs = {
  object: Service_Insert_Input;
  on_conflict: InputMaybe<Service_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_DemandeArgs = {
  objects: Array<Type_Demande_Insert_Input>;
  on_conflict: InputMaybe<Type_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_Demande_OneArgs = {
  object: Type_Demande_Insert_Input;
  on_conflict: InputMaybe<Type_Demande_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_EnseignementArgs = {
  objects: Array<Type_Enseignement_Insert_Input>;
  on_conflict: InputMaybe<Type_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_Enseignement_OneArgs = {
  object: Type_Enseignement_Insert_Input;
  on_conflict: InputMaybe<Type_Enseignement_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_ModificationArgs = {
  objects: Array<Type_Modification_Insert_Input>;
  on_conflict: InputMaybe<Type_Modification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Type_Modification_OneArgs = {
  object: Type_Modification_Insert_Input;
  on_conflict: InputMaybe<Type_Modification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_AnneeArgs = {
  _inc: InputMaybe<Annee_Inc_Input>;
  _set: InputMaybe<Annee_Set_Input>;
  where: Annee_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Annee_By_PkArgs = {
  _inc: InputMaybe<Annee_Inc_Input>;
  _set: InputMaybe<Annee_Set_Input>;
  pk_columns: Annee_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Annee_ManyArgs = {
  updates: Array<Annee_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CursusArgs = {
  _inc: InputMaybe<Cursus_Inc_Input>;
  _set: InputMaybe<Cursus_Set_Input>;
  where: Cursus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cursus_By_PkArgs = {
  _inc: InputMaybe<Cursus_Inc_Input>;
  _set: InputMaybe<Cursus_Set_Input>;
  pk_columns: Cursus_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Cursus_ManyArgs = {
  updates: Array<Cursus_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_DemandeArgs = {
  _inc: InputMaybe<Demande_Inc_Input>;
  _set: InputMaybe<Demande_Set_Input>;
  where: Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Demande_By_PkArgs = {
  _inc: InputMaybe<Demande_Inc_Input>;
  _set: InputMaybe<Demande_Set_Input>;
  pk_columns: Demande_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Demande_ManyArgs = {
  updates: Array<Demande_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_EnseignementArgs = {
  _inc: InputMaybe<Enseignement_Inc_Input>;
  _set: InputMaybe<Enseignement_Set_Input>;
  where: Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Enseignement_By_PkArgs = {
  _inc: InputMaybe<Enseignement_Inc_Input>;
  _set: InputMaybe<Enseignement_Set_Input>;
  pk_columns: Enseignement_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Enseignement_ManyArgs = {
  updates: Array<Enseignement_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_IntervenantArgs = {
  _inc: InputMaybe<Intervenant_Inc_Input>;
  _set: InputMaybe<Intervenant_Set_Input>;
  where: Intervenant_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Intervenant_By_PkArgs = {
  _inc: InputMaybe<Intervenant_Inc_Input>;
  _set: InputMaybe<Intervenant_Set_Input>;
  pk_columns: Intervenant_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Intervenant_ManyArgs = {
  updates: Array<Intervenant_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MentionArgs = {
  _inc: InputMaybe<Mention_Inc_Input>;
  _set: InputMaybe<Mention_Set_Input>;
  where: Mention_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Mention_By_PkArgs = {
  _inc: InputMaybe<Mention_Inc_Input>;
  _set: InputMaybe<Mention_Set_Input>;
  pk_columns: Mention_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Mention_ManyArgs = {
  updates: Array<Mention_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc: InputMaybe<Message_Inc_Input>;
  _set: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc: InputMaybe<Message_Inc_Input>;
  _set: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Modification_ServiceArgs = {
  _inc: InputMaybe<Modification_Service_Inc_Input>;
  _set: InputMaybe<Modification_Service_Set_Input>;
  where: Modification_Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Modification_Service_By_PkArgs = {
  _inc: InputMaybe<Modification_Service_Inc_Input>;
  _set: InputMaybe<Modification_Service_Set_Input>;
  pk_columns: Modification_Service_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Modification_Service_ManyArgs = {
  updates: Array<Modification_Service_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ParcoursArgs = {
  _inc: InputMaybe<Parcours_Inc_Input>;
  _set: InputMaybe<Parcours_Set_Input>;
  where: Parcours_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Parcours_By_PkArgs = {
  _inc: InputMaybe<Parcours_Inc_Input>;
  _set: InputMaybe<Parcours_Set_Input>;
  pk_columns: Parcours_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Parcours_ManyArgs = {
  updates: Array<Parcours_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PhaseArgs = {
  _set: InputMaybe<Phase_Set_Input>;
  where: Phase_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Phase_By_PkArgs = {
  _set: InputMaybe<Phase_Set_Input>;
  pk_columns: Phase_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Phase_ManyArgs = {
  updates: Array<Phase_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PrioriteArgs = {
  _inc: InputMaybe<Priorite_Inc_Input>;
  _set: InputMaybe<Priorite_Set_Input>;
  where: Priorite_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Priorite_By_PkArgs = {
  _inc: InputMaybe<Priorite_Inc_Input>;
  _set: InputMaybe<Priorite_Set_Input>;
  pk_columns: Priorite_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Priorite_ManyArgs = {
  updates: Array<Priorite_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ResponsableArgs = {
  _inc: InputMaybe<Responsable_Inc_Input>;
  _set: InputMaybe<Responsable_Set_Input>;
  where: Responsable_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Responsable_By_PkArgs = {
  _inc: InputMaybe<Responsable_Inc_Input>;
  _set: InputMaybe<Responsable_Set_Input>;
  pk_columns: Responsable_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Responsable_ManyArgs = {
  updates: Array<Responsable_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ServiceArgs = {
  _inc: InputMaybe<Service_Inc_Input>;
  _set: InputMaybe<Service_Set_Input>;
  where: Service_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Service_By_PkArgs = {
  _inc: InputMaybe<Service_Inc_Input>;
  _set: InputMaybe<Service_Set_Input>;
  pk_columns: Service_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Service_ManyArgs = {
  updates: Array<Service_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Type_DemandeArgs = {
  _set: InputMaybe<Type_Demande_Set_Input>;
  where: Type_Demande_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Demande_By_PkArgs = {
  _set: InputMaybe<Type_Demande_Set_Input>;
  pk_columns: Type_Demande_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Demande_ManyArgs = {
  updates: Array<Type_Demande_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Type_EnseignementArgs = {
  _inc: InputMaybe<Type_Enseignement_Inc_Input>;
  _set: InputMaybe<Type_Enseignement_Set_Input>;
  where: Type_Enseignement_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Enseignement_By_PkArgs = {
  _inc: InputMaybe<Type_Enseignement_Inc_Input>;
  _set: InputMaybe<Type_Enseignement_Set_Input>;
  pk_columns: Type_Enseignement_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Enseignement_ManyArgs = {
  updates: Array<Type_Enseignement_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Type_ModificationArgs = {
  _set: InputMaybe<Type_Modification_Set_Input>;
  where: Type_Modification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Modification_By_PkArgs = {
  _set: InputMaybe<Type_Modification_Set_Input>;
  pk_columns: Type_Modification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Type_Modification_ManyArgs = {
  updates: Array<Type_Modification_Updates>;
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

/** Table contenant les différents parcours. */
export type Parcours = {
  __typename?: "parcours";
  /** An array relationship */
  enseignements: Array<Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Enseignement_Aggregate;
  /** L'identifiant unique du parcours. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  mention: Mention;
  mention_id: Scalars["Int"]["output"];
  /** Le nom du parcours (unique). */
  nom: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
  /** An array relationship */
  responsables: Array<Responsable>;
  /** An aggregate relationship */
  responsables_aggregate: Responsable_Aggregate;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: Scalars["Boolean"]["output"];
};

/** Table contenant les différents parcours. */
export type ParcoursEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type ParcoursEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type ParcoursResponsablesArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Table contenant les différents parcours. */
export type ParcoursResponsables_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** aggregated selection of "parcours" */
export type Parcours_Aggregate = {
  __typename?: "parcours_aggregate";
  aggregate: Maybe<Parcours_Aggregate_Fields>;
  nodes: Array<Parcours>;
};

export type Parcours_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Parcours_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Parcours_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Parcours_Aggregate_Bool_Exp_Count>;
};

export type Parcours_Aggregate_Bool_Exp_Bool_And = {
  arguments: Parcours_Select_Column_Parcours_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Parcours_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Parcours_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Parcours_Select_Column_Parcours_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Parcours_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Parcours_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Parcours_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Parcours_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "parcours" */
export type Parcours_Aggregate_Fields = {
  __typename?: "parcours_aggregate_fields";
  avg: Maybe<Parcours_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Parcours_Max_Fields>;
  min: Maybe<Parcours_Min_Fields>;
  stddev: Maybe<Parcours_Stddev_Fields>;
  stddev_pop: Maybe<Parcours_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Parcours_Stddev_Samp_Fields>;
  sum: Maybe<Parcours_Sum_Fields>;
  var_pop: Maybe<Parcours_Var_Pop_Fields>;
  var_samp: Maybe<Parcours_Var_Samp_Fields>;
  variance: Maybe<Parcours_Variance_Fields>;
};

/** aggregate fields of "parcours" */
export type Parcours_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Parcours_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "parcours" */
export type Parcours_Aggregate_Order_By = {
  avg: InputMaybe<Parcours_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Parcours_Max_Order_By>;
  min: InputMaybe<Parcours_Min_Order_By>;
  stddev: InputMaybe<Parcours_Stddev_Order_By>;
  stddev_pop: InputMaybe<Parcours_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Parcours_Stddev_Samp_Order_By>;
  sum: InputMaybe<Parcours_Sum_Order_By>;
  var_pop: InputMaybe<Parcours_Var_Pop_Order_By>;
  var_samp: InputMaybe<Parcours_Var_Samp_Order_By>;
  variance: InputMaybe<Parcours_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "parcours" */
export type Parcours_Arr_Rel_Insert_Input = {
  data: Array<Parcours_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Parcours_On_Conflict>;
};

/** aggregate avg on columns */
export type Parcours_Avg_Fields = {
  __typename?: "parcours_avg_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "parcours" */
export type Parcours_Avg_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "parcours". All fields are combined with a logical 'AND'. */
export type Parcours_Bool_Exp = {
  _and: InputMaybe<Array<Parcours_Bool_Exp>>;
  _not: InputMaybe<Parcours_Bool_Exp>;
  _or: InputMaybe<Array<Parcours_Bool_Exp>>;
  enseignements: InputMaybe<Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  mention: InputMaybe<Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  nom: InputMaybe<String_Comparison_Exp>;
  nom_court: InputMaybe<String_Comparison_Exp>;
  nom_import: InputMaybe<String_Comparison_Exp>;
  responsables: InputMaybe<Responsable_Bool_Exp>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Bool_Exp>;
  visible: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "parcours" */
export enum Parcours_Constraint {
  /** unique or primary key constraint on columns "mention_id", "nom" */
  ParcoursMentionIdNomKey = "parcours_mention_id_nom_key",
  /** unique or primary key constraint on columns "id" */
  ParcoursPkey = "parcours_pkey",
}

/** input type for incrementing numeric columns in table "parcours" */
export type Parcours_Inc_Input = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "parcours" */
export type Parcours_Insert_Input = {
  enseignements: InputMaybe<Enseignement_Arr_Rel_Insert_Input>;
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  mention: InputMaybe<Mention_Obj_Rel_Insert_Input>;
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Scalars["String"]["input"]>;
  nom_import: InputMaybe<Scalars["String"]["input"]>;
  responsables: InputMaybe<Responsable_Arr_Rel_Insert_Input>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate max on columns */
export type Parcours_Max_Fields = {
  __typename?: "parcours_max_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du parcours (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "parcours" */
export type Parcours_Max_Order_By = {
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
export type Parcours_Min_Fields = {
  __typename?: "parcours_min_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** Le nom du parcours (unique). */
  nom: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  nom_court: Maybe<Scalars["String"]["output"]>;
  nom_import: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "parcours" */
export type Parcours_Min_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
  /** Le nom du parcours (unique). */
  nom: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
};

/** response of any mutation on the table "parcours" */
export type Parcours_Mutation_Response = {
  __typename?: "parcours_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Parcours>;
};

/** input type for inserting object relation for remote table "parcours" */
export type Parcours_Obj_Rel_Insert_Input = {
  data: Parcours_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Parcours_On_Conflict>;
};

/** on_conflict condition type for table "parcours" */
export type Parcours_On_Conflict = {
  constraint: Parcours_Constraint;
  update_columns: Array<Parcours_Update_Column>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

/** Ordering options when selecting data from "parcours". */
export type Parcours_Order_By = {
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  mention: InputMaybe<Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  nom: InputMaybe<Order_By>;
  nom_court: InputMaybe<Order_By>;
  nom_import: InputMaybe<Order_By>;
  responsables_aggregate: InputMaybe<Responsable_Aggregate_Order_By>;
  visible: InputMaybe<Order_By>;
};

/** primary key columns input for table: parcours */
export type Parcours_Pk_Columns_Input = {
  /** L'identifiant unique du parcours. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "parcours" */
export enum Parcours_Select_Column {
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

/** select "parcours_aggregate_bool_exp_bool_and_arguments_columns" columns of table "parcours" */
export enum Parcours_Select_Column_Parcours_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** select "parcours_aggregate_bool_exp_bool_or_arguments_columns" columns of table "parcours" */
export enum Parcours_Select_Column_Parcours_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = "visible",
}

/** input type for updating data in table "parcours" */
export type Parcours_Set_Input = {
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
export type Parcours_Stddev_Fields = {
  __typename?: "parcours_stddev_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "parcours" */
export type Parcours_Stddev_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Parcours_Stddev_Pop_Fields = {
  __typename?: "parcours_stddev_pop_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "parcours" */
export type Parcours_Stddev_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Parcours_Stddev_Samp_Fields = {
  __typename?: "parcours_stddev_samp_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "parcours" */
export type Parcours_Stddev_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "parcours" */
export type Parcours_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Parcours_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Parcours_Stream_Cursor_Value_Input = {
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
export type Parcours_Sum_Fields = {
  __typename?: "parcours_sum_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Int"]["output"]>;
  mention_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "parcours" */
export type Parcours_Sum_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** update columns of table "parcours" */
export enum Parcours_Update_Column {
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

export type Parcours_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Parcours_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Parcours_Set_Input>;
  /** filter the rows which have to be updated */
  where: Parcours_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Parcours_Var_Pop_Fields = {
  __typename?: "parcours_var_pop_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "parcours" */
export type Parcours_Var_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Parcours_Var_Samp_Fields = {
  __typename?: "parcours_var_samp_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "parcours" */
export type Parcours_Var_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Parcours_Variance_Fields = {
  __typename?: "parcours_variance_fields";
  /** L'identifiant unique du parcours. */
  id: Maybe<Scalars["Float"]["output"]>;
  mention_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "parcours" */
export type Parcours_Variance_Order_By = {
  /** L'identifiant unique du parcours. */
  id: InputMaybe<Order_By>;
  mention_id: InputMaybe<Order_By>;
};

/** Table contenant les différentes phases de Geyser. */
export type Phase = {
  __typename?: "phase";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: Maybe<Scalars["Boolean"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Scalars["String"]["output"];
};

/** aggregated selection of "phase" */
export type Phase_Aggregate = {
  __typename?: "phase_aggregate";
  aggregate: Maybe<Phase_Aggregate_Fields>;
  nodes: Array<Phase>;
};

/** aggregate fields of "phase" */
export type Phase_Aggregate_Fields = {
  __typename?: "phase_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Phase_Max_Fields>;
  min: Maybe<Phase_Min_Fields>;
};

/** aggregate fields of "phase" */
export type Phase_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Phase_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "phase". All fields are combined with a logical 'AND'. */
export type Phase_Bool_Exp = {
  _and: InputMaybe<Array<Phase_Bool_Exp>>;
  _not: InputMaybe<Phase_Bool_Exp>;
  _or: InputMaybe<Array<Phase_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  en_cours: InputMaybe<Boolean_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phase" */
export enum Phase_Constraint {
  /** unique or primary key constraint on columns "en_cours" */
  PhaseEnCoursKey = "phase_en_cours_key",
  /** unique or primary key constraint on columns "value" */
  PhasePkey = "phase_pkey",
}

/** input type for inserting data into table "phase" */
export type Phase_Insert_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Phase_Max_Fields = {
  __typename?: "phase_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Phase_Min_Fields = {
  __typename?: "phase_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le nom de la phase (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "phase" */
export type Phase_Mutation_Response = {
  __typename?: "phase_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Phase>;
};

/** on_conflict condition type for table "phase" */
export type Phase_On_Conflict = {
  constraint: Phase_Constraint;
  update_columns: Array<Phase_Update_Column>;
  where: InputMaybe<Phase_Bool_Exp>;
};

/** Ordering options when selecting data from "phase". */
export type Phase_Order_By = {
  description: InputMaybe<Order_By>;
  en_cours: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: phase */
export type Phase_Pk_Columns_Input = {
  /** Le nom de la phase (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "phase" */
export enum Phase_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "phase" */
export type Phase_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "phase" */
export type Phase_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Phase_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Phase_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Indique si la phase correspondante est la phase en cours (TRUE) ou non (NULL). Une seule phase peut être en cours à la fois. */
  en_cours: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Le nom de la phase (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "phase" */
export enum Phase_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  EnCours = "en_cours",
  /** column name */
  Value = "value",
}

export type Phase_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Phase_Set_Input>;
  /** filter the rows which have to be updated */
  where: Phase_Bool_Exp;
};

/** Table contenant les informations relatives à l'ancienneté et la priorité des intervenants sur les enseignements. */
export type Priorite = {
  __typename?: "priorite";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Scalars["Int"]["output"];
  /** An object relationship */
  enseignement: Enseignement;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Intervenant;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: Maybe<Scalars["Boolean"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "priorite" */
export type Priorite_Aggregate = {
  __typename?: "priorite_aggregate";
  aggregate: Maybe<Priorite_Aggregate_Fields>;
  nodes: Array<Priorite>;
};

export type Priorite_Aggregate_Bool_Exp = {
  bool_and: InputMaybe<Priorite_Aggregate_Bool_Exp_Bool_And>;
  bool_or: InputMaybe<Priorite_Aggregate_Bool_Exp_Bool_Or>;
  count: InputMaybe<Priorite_Aggregate_Bool_Exp_Count>;
};

export type Priorite_Aggregate_Bool_Exp_Bool_And = {
  arguments: Priorite_Select_Column_Priorite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Priorite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Priorite_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Priorite_Select_Column_Priorite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Priorite_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Priorite_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Priorite_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Priorite_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "priorite" */
export type Priorite_Aggregate_Fields = {
  __typename?: "priorite_aggregate_fields";
  avg: Maybe<Priorite_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Priorite_Max_Fields>;
  min: Maybe<Priorite_Min_Fields>;
  stddev: Maybe<Priorite_Stddev_Fields>;
  stddev_pop: Maybe<Priorite_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Priorite_Stddev_Samp_Fields>;
  sum: Maybe<Priorite_Sum_Fields>;
  var_pop: Maybe<Priorite_Var_Pop_Fields>;
  var_samp: Maybe<Priorite_Var_Samp_Fields>;
  variance: Maybe<Priorite_Variance_Fields>;
};

/** aggregate fields of "priorite" */
export type Priorite_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Priorite_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "priorite" */
export type Priorite_Aggregate_Order_By = {
  avg: InputMaybe<Priorite_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Priorite_Max_Order_By>;
  min: InputMaybe<Priorite_Min_Order_By>;
  stddev: InputMaybe<Priorite_Stddev_Order_By>;
  stddev_pop: InputMaybe<Priorite_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Priorite_Stddev_Samp_Order_By>;
  sum: InputMaybe<Priorite_Sum_Order_By>;
  var_pop: InputMaybe<Priorite_Var_Pop_Order_By>;
  var_samp: InputMaybe<Priorite_Var_Samp_Order_By>;
  variance: InputMaybe<Priorite_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "priorite" */
export type Priorite_Arr_Rel_Insert_Input = {
  data: Array<Priorite_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Priorite_On_Conflict>;
};

/** aggregate avg on columns */
export type Priorite_Avg_Fields = {
  __typename?: "priorite_avg_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "priorite" */
export type Priorite_Avg_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "priorite". All fields are combined with a logical 'AND'. */
export type Priorite_Bool_Exp = {
  _and: InputMaybe<Array<Priorite_Bool_Exp>>;
  _not: InputMaybe<Priorite_Bool_Exp>;
  _or: InputMaybe<Array<Priorite_Bool_Exp>>;
  anciennete: InputMaybe<Int_Comparison_Exp>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Enseignement_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Intervenant_Bool_Exp>;
  prioritaire: InputMaybe<Boolean_Comparison_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "priorite" */
export enum Priorite_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrioritePkey = "priorite_pkey",
  /** unique or primary key constraint on columns "uid", "ens_id" */
  PrioriteUidEnsIdKey = "priorite_uid_ens_id_key",
}

/** input type for incrementing numeric columns in table "priorite" */
export type Priorite_Inc_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "priorite" */
export type Priorite_Insert_Input = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Enseignement_Obj_Rel_Insert_Input>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Intervenant_Obj_Rel_Insert_Input>;
  /** Indique si l'intervenant est prioritaire sur l'enseignement. */
  prioritaire: InputMaybe<Scalars["Boolean"]["input"]>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Priorite_Max_Fields = {
  __typename?: "priorite_max_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "priorite" */
export type Priorite_Max_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Priorite_Min_Fields = {
  __typename?: "priorite_min_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un intervenant. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "priorite" */
export type Priorite_Min_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant d'un intervenant. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "priorite" */
export type Priorite_Mutation_Response = {
  __typename?: "priorite_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Priorite>;
};

/** on_conflict condition type for table "priorite" */
export type Priorite_On_Conflict = {
  constraint: Priorite_Constraint;
  update_columns: Array<Priorite_Update_Column>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

/** Ordering options when selecting data from "priorite". */
export type Priorite_Order_By = {
  anciennete: InputMaybe<Order_By>;
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Enseignement_Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Intervenant_Order_By>;
  prioritaire: InputMaybe<Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: priorite */
export type Priorite_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "priorite" */
export enum Priorite_Select_Column {
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

/** select "priorite_aggregate_bool_exp_bool_and_arguments_columns" columns of table "priorite" */
export enum Priorite_Select_Column_Priorite_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Prioritaire = "prioritaire",
}

/** select "priorite_aggregate_bool_exp_bool_or_arguments_columns" columns of table "priorite" */
export enum Priorite_Select_Column_Priorite_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Prioritaire = "prioritaire",
}

/** input type for updating data in table "priorite" */
export type Priorite_Set_Input = {
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
export type Priorite_Stddev_Fields = {
  __typename?: "priorite_stddev_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "priorite" */
export type Priorite_Stddev_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Priorite_Stddev_Pop_Fields = {
  __typename?: "priorite_stddev_pop_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "priorite" */
export type Priorite_Stddev_Pop_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Priorite_Stddev_Samp_Fields = {
  __typename?: "priorite_stddev_samp_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "priorite" */
export type Priorite_Stddev_Samp_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "priorite" */
export type Priorite_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Priorite_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Priorite_Stream_Cursor_Value_Input = {
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
export type Priorite_Sum_Fields = {
  __typename?: "priorite_sum_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "priorite" */
export type Priorite_Sum_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** update columns of table "priorite" */
export enum Priorite_Update_Column {
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

export type Priorite_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Priorite_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Priorite_Set_Input>;
  /** filter the rows which have to be updated */
  where: Priorite_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Priorite_Var_Pop_Fields = {
  __typename?: "priorite_var_pop_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "priorite" */
export type Priorite_Var_Pop_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Priorite_Var_Samp_Fields = {
  __typename?: "priorite_var_samp_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "priorite" */
export type Priorite_Var_Samp_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Priorite_Variance_Fields = {
  __typename?: "priorite_variance_fields";
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant d'un enseignement. */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "priorite" */
export type Priorite_Variance_Order_By = {
  /** Le nombre d'années consécutives jusqu'à l'année en cours (exclue) durant lesquelles l'enseignement a été attribué à l'intervenant. */
  anciennete: InputMaybe<Order_By>;
  /** L'identifiant d'un enseignement. */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "annee" */
  annee: Array<Annee>;
  /** fetch aggregated fields from the table: "annee" */
  annee_aggregate: Annee_Aggregate;
  /** fetch data from the table: "annee" using primary key columns */
  annee_by_pk: Maybe<Annee>;
  /** fetch data from the table: "cursus" */
  cursus: Array<Cursus>;
  /** fetch aggregated fields from the table: "cursus" */
  cursus_aggregate: Cursus_Aggregate;
  /** fetch data from the table: "cursus" using primary key columns */
  cursus_by_pk: Maybe<Cursus>;
  /** fetch data from the table: "demande" */
  demande: Array<Demande>;
  /** fetch aggregated fields from the table: "demande" */
  demande_aggregate: Demande_Aggregate;
  /** fetch data from the table: "demande" using primary key columns */
  demande_by_pk: Maybe<Demande>;
  /** fetch data from the table: "enseignement" */
  enseignement: Array<Enseignement>;
  /** fetch aggregated fields from the table: "enseignement" */
  enseignement_aggregate: Enseignement_Aggregate;
  /** fetch data from the table: "enseignement" using primary key columns */
  enseignement_by_pk: Maybe<Enseignement>;
  /** fetch data from the table: "intervenant" */
  intervenant: Array<Intervenant>;
  /** fetch aggregated fields from the table: "intervenant" */
  intervenant_aggregate: Intervenant_Aggregate;
  /** fetch data from the table: "intervenant" using primary key columns */
  intervenant_by_pk: Maybe<Intervenant>;
  /** fetch data from the table: "mention" */
  mention: Array<Mention>;
  /** fetch aggregated fields from the table: "mention" */
  mention_aggregate: Mention_Aggregate;
  /** fetch data from the table: "mention" using primary key columns */
  mention_by_pk: Maybe<Mention>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk: Maybe<Message>;
  /** fetch data from the table: "modification_service" */
  modification_service: Array<Modification_Service>;
  /** fetch aggregated fields from the table: "modification_service" */
  modification_service_aggregate: Modification_Service_Aggregate;
  /** fetch data from the table: "modification_service" using primary key columns */
  modification_service_by_pk: Maybe<Modification_Service>;
  /** An array relationship */
  parcours: Array<Parcours>;
  /** An aggregate relationship */
  parcours_aggregate: Parcours_Aggregate;
  /** fetch data from the table: "parcours" using primary key columns */
  parcours_by_pk: Maybe<Parcours>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phase_aggregate: Phase_Aggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phase_by_pk: Maybe<Phase>;
  /** fetch data from the table: "priorite" */
  priorite: Array<Priorite>;
  /** fetch aggregated fields from the table: "priorite" */
  priorite_aggregate: Priorite_Aggregate;
  /** fetch data from the table: "priorite" using primary key columns */
  priorite_by_pk: Maybe<Priorite>;
  /** fetch data from the table: "responsable" */
  responsable: Array<Responsable>;
  /** fetch aggregated fields from the table: "responsable" */
  responsable_aggregate: Responsable_Aggregate;
  /** fetch data from the table: "responsable" using primary key columns */
  responsable_by_pk: Maybe<Responsable>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk: Maybe<Service>;
  /** fetch data from the table: "type_demande" */
  type_demande: Array<Type_Demande>;
  /** fetch aggregated fields from the table: "type_demande" */
  type_demande_aggregate: Type_Demande_Aggregate;
  /** fetch data from the table: "type_demande" using primary key columns */
  type_demande_by_pk: Maybe<Type_Demande>;
  /** fetch data from the table: "type_enseignement" */
  type_enseignement: Array<Type_Enseignement>;
  /** fetch aggregated fields from the table: "type_enseignement" */
  type_enseignement_aggregate: Type_Enseignement_Aggregate;
  /** fetch data from the table: "type_enseignement" using primary key columns */
  type_enseignement_by_pk: Maybe<Type_Enseignement>;
  /** fetch data from the table: "type_modification" */
  type_modification: Array<Type_Modification>;
  /** fetch aggregated fields from the table: "type_modification" */
  type_modification_aggregate: Type_Modification_Aggregate;
  /** fetch data from the table: "type_modification" using primary key columns */
  type_modification_by_pk: Maybe<Type_Modification>;
};

export type Query_RootAnneeArgs = {
  distinct_on: InputMaybe<Array<Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Annee_Order_By>>;
  where: InputMaybe<Annee_Bool_Exp>;
};

export type Query_RootAnnee_AggregateArgs = {
  distinct_on: InputMaybe<Array<Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Annee_Order_By>>;
  where: InputMaybe<Annee_Bool_Exp>;
};

export type Query_RootAnnee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

export type Query_RootCursusArgs = {
  distinct_on: InputMaybe<Array<Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Cursus_Order_By>>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

export type Query_RootCursus_AggregateArgs = {
  distinct_on: InputMaybe<Array<Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Cursus_Order_By>>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

export type Query_RootCursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootDemandeArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

export type Query_RootDemande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

export type Query_RootDemande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootEnseignementArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

export type Query_RootEnseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

export type Query_RootEnseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootIntervenantArgs = {
  distinct_on: InputMaybe<Array<Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Intervenant_Order_By>>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

export type Query_RootIntervenant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Intervenant_Order_By>>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

export type Query_RootIntervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

export type Query_RootMentionArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

export type Query_RootMention_AggregateArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

export type Query_RootMention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootMessageArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

export type Query_RootMessage_AggregateArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

export type Query_RootMessage_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootModification_ServiceArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

export type Query_RootModification_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

export type Query_RootModification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootParcoursArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

export type Query_RootParcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

export type Query_RootParcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootPhaseArgs = {
  distinct_on: InputMaybe<Array<Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Phase_Order_By>>;
  where: InputMaybe<Phase_Bool_Exp>;
};

export type Query_RootPhase_AggregateArgs = {
  distinct_on: InputMaybe<Array<Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Phase_Order_By>>;
  where: InputMaybe<Phase_Bool_Exp>;
};

export type Query_RootPhase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootPrioriteArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

export type Query_RootPriorite_AggregateArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

export type Query_RootPriorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootResponsableArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

export type Query_RootResponsable_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

export type Query_RootResponsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootServiceArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

export type Query_RootService_AggregateArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

export type Query_RootService_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootType_DemandeArgs = {
  distinct_on: InputMaybe<Array<Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Demande_Order_By>>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

export type Query_RootType_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Demande_Order_By>>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

export type Query_RootType_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Query_RootType_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Enseignement_Order_By>>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

export type Query_RootType_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Enseignement_Order_By>>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

export type Query_RootType_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

export type Query_RootType_ModificationArgs = {
  distinct_on: InputMaybe<Array<Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Modification_Order_By>>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

export type Query_RootType_Modification_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Modification_Order_By>>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

export type Query_RootType_Modification_By_PkArgs = {
  label: Scalars["String"]["input"];
};

/** Table contenant les responsables d'une mention, d'un parcours ou d'un enseignement. Chaque ligne correspond à un et un seul de ces trois types de responsabilité. */
export type Responsable = {
  __typename?: "responsable";
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: Maybe<Scalars["String"]["output"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  enseignement: Maybe<Enseignement>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Intervenant;
  /** An object relationship */
  mention: Maybe<Mention>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** An object relationship */
  parcours: Maybe<Parcours>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: Scalars["String"]["output"];
};

/** aggregated selection of "responsable" */
export type Responsable_Aggregate = {
  __typename?: "responsable_aggregate";
  aggregate: Maybe<Responsable_Aggregate_Fields>;
  nodes: Array<Responsable>;
};

export type Responsable_Aggregate_Bool_Exp = {
  count: InputMaybe<Responsable_Aggregate_Bool_Exp_Count>;
};

export type Responsable_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Responsable_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Responsable_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "responsable" */
export type Responsable_Aggregate_Fields = {
  __typename?: "responsable_aggregate_fields";
  avg: Maybe<Responsable_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Responsable_Max_Fields>;
  min: Maybe<Responsable_Min_Fields>;
  stddev: Maybe<Responsable_Stddev_Fields>;
  stddev_pop: Maybe<Responsable_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Responsable_Stddev_Samp_Fields>;
  sum: Maybe<Responsable_Sum_Fields>;
  var_pop: Maybe<Responsable_Var_Pop_Fields>;
  var_samp: Maybe<Responsable_Var_Samp_Fields>;
  variance: Maybe<Responsable_Variance_Fields>;
};

/** aggregate fields of "responsable" */
export type Responsable_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Responsable_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "responsable" */
export type Responsable_Aggregate_Order_By = {
  avg: InputMaybe<Responsable_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Responsable_Max_Order_By>;
  min: InputMaybe<Responsable_Min_Order_By>;
  stddev: InputMaybe<Responsable_Stddev_Order_By>;
  stddev_pop: InputMaybe<Responsable_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Responsable_Stddev_Samp_Order_By>;
  sum: InputMaybe<Responsable_Sum_Order_By>;
  var_pop: InputMaybe<Responsable_Var_Pop_Order_By>;
  var_samp: InputMaybe<Responsable_Var_Samp_Order_By>;
  variance: InputMaybe<Responsable_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "responsable" */
export type Responsable_Arr_Rel_Insert_Input = {
  data: Array<Responsable_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Responsable_On_Conflict>;
};

/** aggregate avg on columns */
export type Responsable_Avg_Fields = {
  __typename?: "responsable_avg_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "responsable" */
export type Responsable_Avg_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "responsable". All fields are combined with a logical 'AND'. */
export type Responsable_Bool_Exp = {
  _and: InputMaybe<Array<Responsable_Bool_Exp>>;
  _not: InputMaybe<Responsable_Bool_Exp>;
  _or: InputMaybe<Array<Responsable_Bool_Exp>>;
  commentaire: InputMaybe<String_Comparison_Exp>;
  ens_id: InputMaybe<Int_Comparison_Exp>;
  enseignement: InputMaybe<Enseignement_Bool_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Intervenant_Bool_Exp>;
  mention: InputMaybe<Mention_Bool_Exp>;
  mention_id: InputMaybe<Int_Comparison_Exp>;
  parcours: InputMaybe<Parcours_Bool_Exp>;
  parcours_id: InputMaybe<Int_Comparison_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "responsable" */
export enum Responsable_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResponsablePkey = "responsable_pkey",
  /** unique or primary key constraint on columns "uid", "mention_id", "ens_id", "parcours_id" */
  ResponsableUidEnsIdParcoursIdMentionIdKey = "responsable_uid_ens_id_parcours_id_mention_id_key",
}

/** input type for incrementing numeric columns in table "responsable" */
export type Responsable_Inc_Input = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "responsable" */
export type Responsable_Insert_Input = {
  /** Informations supplémentaires (optionnel, par exemple pour préciser l'année dans le cas d'une responsabilité de parcours ou de mention). */
  commentaire: InputMaybe<Scalars["String"]["input"]>;
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Scalars["Int"]["input"]>;
  enseignement: InputMaybe<Enseignement_Obj_Rel_Insert_Input>;
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Intervenant_Obj_Rel_Insert_Input>;
  mention: InputMaybe<Mention_Obj_Rel_Insert_Input>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Scalars["Int"]["input"]>;
  parcours: InputMaybe<Parcours_Obj_Rel_Insert_Input>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Scalars["Int"]["input"]>;
  /** L'identifiant de l'intervenant responsable. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Responsable_Max_Fields = {
  __typename?: "responsable_max_fields";
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

/** order by max() on columns of table "responsable" */
export type Responsable_Max_Order_By = {
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
export type Responsable_Min_Fields = {
  __typename?: "responsable_min_fields";
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

/** order by min() on columns of table "responsable" */
export type Responsable_Min_Order_By = {
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

/** response of any mutation on the table "responsable" */
export type Responsable_Mutation_Response = {
  __typename?: "responsable_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Responsable>;
};

/** on_conflict condition type for table "responsable" */
export type Responsable_On_Conflict = {
  constraint: Responsable_Constraint;
  update_columns: Array<Responsable_Update_Column>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

/** Ordering options when selecting data from "responsable". */
export type Responsable_Order_By = {
  commentaire: InputMaybe<Order_By>;
  ens_id: InputMaybe<Order_By>;
  enseignement: InputMaybe<Enseignement_Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Intervenant_Order_By>;
  mention: InputMaybe<Mention_Order_By>;
  mention_id: InputMaybe<Order_By>;
  parcours: InputMaybe<Parcours_Order_By>;
  parcours_id: InputMaybe<Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: responsable */
export type Responsable_Pk_Columns_Input = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "responsable" */
export enum Responsable_Select_Column {
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

/** input type for updating data in table "responsable" */
export type Responsable_Set_Input = {
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
export type Responsable_Stddev_Fields = {
  __typename?: "responsable_stddev_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "responsable" */
export type Responsable_Stddev_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Responsable_Stddev_Pop_Fields = {
  __typename?: "responsable_stddev_pop_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "responsable" */
export type Responsable_Stddev_Pop_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Responsable_Stddev_Samp_Fields = {
  __typename?: "responsable_stddev_samp_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "responsable" */
export type Responsable_Stddev_Samp_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "responsable" */
export type Responsable_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Responsable_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Responsable_Stream_Cursor_Value_Input = {
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
export type Responsable_Sum_Fields = {
  __typename?: "responsable_sum_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Int"]["output"]>;
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "responsable" */
export type Responsable_Sum_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** update columns of table "responsable" */
export enum Responsable_Update_Column {
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

export type Responsable_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Responsable_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Responsable_Set_Input>;
  /** filter the rows which have to be updated */
  where: Responsable_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Responsable_Var_Pop_Fields = {
  __typename?: "responsable_var_pop_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "responsable" */
export type Responsable_Var_Pop_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Responsable_Var_Samp_Fields = {
  __typename?: "responsable_var_samp_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "responsable" */
export type Responsable_Var_Samp_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Responsable_Variance_Fields = {
  __typename?: "responsable_variance_fields";
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: Maybe<Scalars["Float"]["output"]>;
  id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "responsable" */
export type Responsable_Variance_Order_By = {
  /** L'identifiant de l'enseignement (optionnel, si et seulement si la ligne correspond à une responsabilité d'enseignement). */
  ens_id: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  /** L'identifiant de la mention (optionnel, si et seulement si la ligne correspond à une responsabilité de mention). */
  mention_id: InputMaybe<Order_By>;
  /** L'identifiant du parcours (optionnel, si et seulement si la ligne correspond à une responsabilité de parcours). */
  parcours_id: InputMaybe<Order_By>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type Service = {
  __typename?: "service";
  /** L'année correspondant au service. */
  annee: Scalars["Int"]["output"];
  /** An object relationship */
  anneeByAnnee: Annee;
  /** An array relationship */
  demandes: Array<Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Demande_Aggregate;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Scalars["Float"]["output"];
  /** L'identifiant unique du service. */
  id: Scalars["Int"]["output"];
  /** An object relationship */
  intervenant: Intervenant;
  /** An array relationship */
  messages: Array<Message>;
  /** An aggregate relationship */
  messages_aggregate: Message_Aggregate;
  /** An array relationship */
  modifications: Array<Modification_Service>;
  /** An aggregate relationship */
  modifications_aggregate: Modification_Service_Aggregate;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Scalars["String"]["output"];
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceDemandesArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceMessagesArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceMessages_AggregateArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModificationsArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModifications_AggregateArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

/** aggregated selection of "service" */
export type Service_Aggregate = {
  __typename?: "service_aggregate";
  aggregate: Maybe<Service_Aggregate_Fields>;
  nodes: Array<Service>;
};

export type Service_Aggregate_Bool_Exp = {
  count: InputMaybe<Service_Aggregate_Bool_Exp_Count>;
};

export type Service_Aggregate_Bool_Exp_Count = {
  arguments: InputMaybe<Array<Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
  filter: InputMaybe<Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "service" */
export type Service_Aggregate_Fields = {
  __typename?: "service_aggregate_fields";
  avg: Maybe<Service_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Service_Max_Fields>;
  min: Maybe<Service_Min_Fields>;
  stddev: Maybe<Service_Stddev_Fields>;
  stddev_pop: Maybe<Service_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Service_Stddev_Samp_Fields>;
  sum: Maybe<Service_Sum_Fields>;
  var_pop: Maybe<Service_Var_Pop_Fields>;
  var_samp: Maybe<Service_Var_Samp_Fields>;
  variance: Maybe<Service_Variance_Fields>;
};

/** aggregate fields of "service" */
export type Service_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Service_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "service" */
export type Service_Aggregate_Order_By = {
  avg: InputMaybe<Service_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Service_Max_Order_By>;
  min: InputMaybe<Service_Min_Order_By>;
  stddev: InputMaybe<Service_Stddev_Order_By>;
  stddev_pop: InputMaybe<Service_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Service_Stddev_Samp_Order_By>;
  sum: InputMaybe<Service_Sum_Order_By>;
  var_pop: InputMaybe<Service_Var_Pop_Order_By>;
  var_samp: InputMaybe<Service_Var_Samp_Order_By>;
  variance: InputMaybe<Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service" */
export type Service_Arr_Rel_Insert_Input = {
  data: Array<Service_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Avg_Fields = {
  __typename?: "service_avg_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "service" */
export type Service_Avg_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export type Service_Bool_Exp = {
  _and: InputMaybe<Array<Service_Bool_Exp>>;
  _not: InputMaybe<Service_Bool_Exp>;
  _or: InputMaybe<Array<Service_Bool_Exp>>;
  annee: InputMaybe<Int_Comparison_Exp>;
  anneeByAnnee: InputMaybe<Annee_Bool_Exp>;
  demandes: InputMaybe<Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Demande_Aggregate_Bool_Exp>;
  heures_eqtd: InputMaybe<Float_Comparison_Exp>;
  id: InputMaybe<Int_Comparison_Exp>;
  intervenant: InputMaybe<Intervenant_Bool_Exp>;
  messages: InputMaybe<Message_Bool_Exp>;
  messages_aggregate: InputMaybe<Message_Aggregate_Bool_Exp>;
  modifications: InputMaybe<Modification_Service_Bool_Exp>;
  modifications_aggregate: InputMaybe<Modification_Service_Aggregate_Bool_Exp>;
  uid: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service" */
export enum Service_Constraint {
  /** unique or primary key constraint on columns "uid", "annee" */
  ServiceAnneeUidKey = "service_annee_uid_key",
  /** unique or primary key constraint on columns "id" */
  ServicePkey = "service_pkey",
}

/** input type for incrementing numeric columns in table "service" */
export type Service_Inc_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "service" */
export type Service_Insert_Input = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Scalars["Int"]["input"]>;
  anneeByAnnee: InputMaybe<Annee_Obj_Rel_Insert_Input>;
  demandes: InputMaybe<Demande_Arr_Rel_Insert_Input>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Scalars["Float"]["input"]>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Scalars["Int"]["input"]>;
  intervenant: InputMaybe<Intervenant_Obj_Rel_Insert_Input>;
  messages: InputMaybe<Message_Arr_Rel_Insert_Input>;
  modifications: InputMaybe<Modification_Service_Arr_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Service_Max_Fields = {
  __typename?: "service_max_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "service" */
export type Service_Max_Order_By = {
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
export type Service_Min_Fields = {
  __typename?: "service_min_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "service" */
export type Service_Min_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service" */
export type Service_Mutation_Response = {
  __typename?: "service_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Service>;
};

/** input type for inserting object relation for remote table "service" */
export type Service_Obj_Rel_Insert_Input = {
  data: Service_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Service_On_Conflict>;
};

/** on_conflict condition type for table "service" */
export type Service_On_Conflict = {
  constraint: Service_Constraint;
  update_columns: Array<Service_Update_Column>;
  where: InputMaybe<Service_Bool_Exp>;
};

/** Ordering options when selecting data from "service". */
export type Service_Order_By = {
  annee: InputMaybe<Order_By>;
  anneeByAnnee: InputMaybe<Annee_Order_By>;
  demandes_aggregate: InputMaybe<Demande_Aggregate_Order_By>;
  heures_eqtd: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  intervenant: InputMaybe<Intervenant_Order_By>;
  messages_aggregate: InputMaybe<Message_Aggregate_Order_By>;
  modifications_aggregate: InputMaybe<Modification_Service_Aggregate_Order_By>;
  uid: InputMaybe<Order_By>;
};

/** primary key columns input for table: service */
export type Service_Pk_Columns_Input = {
  /** L'identifiant unique du service. */
  id: Scalars["Int"]["input"];
};

/** select columns of table "service" */
export enum Service_Select_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Uid = "uid",
}

/** input type for updating data in table "service" */
export type Service_Set_Input = {
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
export type Service_Stddev_Fields = {
  __typename?: "service_stddev_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "service" */
export type Service_Stddev_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Stddev_Pop_Fields = {
  __typename?: "service_stddev_pop_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "service" */
export type Service_Stddev_Pop_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Stddev_Samp_Fields = {
  __typename?: "service_stddev_samp_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "service" */
export type Service_Stddev_Samp_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "service" */
export type Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Stream_Cursor_Value_Input = {
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
export type Service_Sum_Fields = {
  __typename?: "service_sum_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Int"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "service" */
export type Service_Sum_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** update columns of table "service" */
export enum Service_Update_Column {
  /** column name */
  Annee = "annee",
  /** column name */
  HeuresEqtd = "heures_eqtd",
  /** column name */
  Id = "id",
  /** column name */
  Uid = "uid",
}

export type Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Service_Var_Pop_Fields = {
  __typename?: "service_var_pop_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "service" */
export type Service_Var_Pop_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Var_Samp_Fields = {
  __typename?: "service_var_samp_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "service" */
export type Service_Var_Samp_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Variance_Fields = {
  __typename?: "service_variance_fields";
  /** L'année correspondant au service. */
  annee: Maybe<Scalars["Float"]["output"]>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: Maybe<Scalars["Float"]["output"]>;
  /** L'identifiant unique du service. */
  id: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "service" */
export type Service_Variance_Order_By = {
  /** L'année correspondant au service. */
  annee: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  heures_eqtd: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "annee" */
  annee: Array<Annee>;
  /** fetch aggregated fields from the table: "annee" */
  annee_aggregate: Annee_Aggregate;
  /** fetch data from the table: "annee" using primary key columns */
  annee_by_pk: Maybe<Annee>;
  /** fetch data from the table in a streaming manner: "annee" */
  annee_stream: Array<Annee>;
  /** fetch data from the table: "cursus" */
  cursus: Array<Cursus>;
  /** fetch aggregated fields from the table: "cursus" */
  cursus_aggregate: Cursus_Aggregate;
  /** fetch data from the table: "cursus" using primary key columns */
  cursus_by_pk: Maybe<Cursus>;
  /** fetch data from the table in a streaming manner: "cursus" */
  cursus_stream: Array<Cursus>;
  /** fetch data from the table: "demande" */
  demande: Array<Demande>;
  /** fetch aggregated fields from the table: "demande" */
  demande_aggregate: Demande_Aggregate;
  /** fetch data from the table: "demande" using primary key columns */
  demande_by_pk: Maybe<Demande>;
  /** fetch data from the table in a streaming manner: "demande" */
  demande_stream: Array<Demande>;
  /** fetch data from the table: "enseignement" */
  enseignement: Array<Enseignement>;
  /** fetch aggregated fields from the table: "enseignement" */
  enseignement_aggregate: Enseignement_Aggregate;
  /** fetch data from the table: "enseignement" using primary key columns */
  enseignement_by_pk: Maybe<Enseignement>;
  /** fetch data from the table in a streaming manner: "enseignement" */
  enseignement_stream: Array<Enseignement>;
  /** fetch data from the table: "intervenant" */
  intervenant: Array<Intervenant>;
  /** fetch aggregated fields from the table: "intervenant" */
  intervenant_aggregate: Intervenant_Aggregate;
  /** fetch data from the table: "intervenant" using primary key columns */
  intervenant_by_pk: Maybe<Intervenant>;
  /** fetch data from the table in a streaming manner: "intervenant" */
  intervenant_stream: Array<Intervenant>;
  /** fetch data from the table: "mention" */
  mention: Array<Mention>;
  /** fetch aggregated fields from the table: "mention" */
  mention_aggregate: Mention_Aggregate;
  /** fetch data from the table: "mention" using primary key columns */
  mention_by_pk: Maybe<Mention>;
  /** fetch data from the table in a streaming manner: "mention" */
  mention_stream: Array<Mention>;
  /** fetch data from the table: "message" */
  message: Array<Message>;
  /** fetch aggregated fields from the table: "message" */
  message_aggregate: Message_Aggregate;
  /** fetch data from the table: "message" using primary key columns */
  message_by_pk: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "message" */
  message_stream: Array<Message>;
  /** fetch data from the table: "modification_service" */
  modification_service: Array<Modification_Service>;
  /** fetch aggregated fields from the table: "modification_service" */
  modification_service_aggregate: Modification_Service_Aggregate;
  /** fetch data from the table: "modification_service" using primary key columns */
  modification_service_by_pk: Maybe<Modification_Service>;
  /** fetch data from the table in a streaming manner: "modification_service" */
  modification_service_stream: Array<Modification_Service>;
  /** An array relationship */
  parcours: Array<Parcours>;
  /** An aggregate relationship */
  parcours_aggregate: Parcours_Aggregate;
  /** fetch data from the table: "parcours" using primary key columns */
  parcours_by_pk: Maybe<Parcours>;
  /** fetch data from the table in a streaming manner: "parcours" */
  parcours_stream: Array<Parcours>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phase_aggregate: Phase_Aggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phase_by_pk: Maybe<Phase>;
  /** fetch data from the table in a streaming manner: "phase" */
  phase_stream: Array<Phase>;
  /** fetch data from the table: "priorite" */
  priorite: Array<Priorite>;
  /** fetch aggregated fields from the table: "priorite" */
  priorite_aggregate: Priorite_Aggregate;
  /** fetch data from the table: "priorite" using primary key columns */
  priorite_by_pk: Maybe<Priorite>;
  /** fetch data from the table in a streaming manner: "priorite" */
  priorite_stream: Array<Priorite>;
  /** fetch data from the table: "responsable" */
  responsable: Array<Responsable>;
  /** fetch aggregated fields from the table: "responsable" */
  responsable_aggregate: Responsable_Aggregate;
  /** fetch data from the table: "responsable" using primary key columns */
  responsable_by_pk: Maybe<Responsable>;
  /** fetch data from the table in a streaming manner: "responsable" */
  responsable_stream: Array<Responsable>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk: Maybe<Service>;
  /** fetch data from the table in a streaming manner: "service" */
  service_stream: Array<Service>;
  /** fetch data from the table: "type_demande" */
  type_demande: Array<Type_Demande>;
  /** fetch aggregated fields from the table: "type_demande" */
  type_demande_aggregate: Type_Demande_Aggregate;
  /** fetch data from the table: "type_demande" using primary key columns */
  type_demande_by_pk: Maybe<Type_Demande>;
  /** fetch data from the table in a streaming manner: "type_demande" */
  type_demande_stream: Array<Type_Demande>;
  /** fetch data from the table: "type_enseignement" */
  type_enseignement: Array<Type_Enseignement>;
  /** fetch aggregated fields from the table: "type_enseignement" */
  type_enseignement_aggregate: Type_Enseignement_Aggregate;
  /** fetch data from the table: "type_enseignement" using primary key columns */
  type_enseignement_by_pk: Maybe<Type_Enseignement>;
  /** fetch data from the table in a streaming manner: "type_enseignement" */
  type_enseignement_stream: Array<Type_Enseignement>;
  /** fetch data from the table: "type_modification" */
  type_modification: Array<Type_Modification>;
  /** fetch aggregated fields from the table: "type_modification" */
  type_modification_aggregate: Type_Modification_Aggregate;
  /** fetch data from the table: "type_modification" using primary key columns */
  type_modification_by_pk: Maybe<Type_Modification>;
  /** fetch data from the table in a streaming manner: "type_modification" */
  type_modification_stream: Array<Type_Modification>;
};

export type Subscription_RootAnneeArgs = {
  distinct_on: InputMaybe<Array<Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Annee_Order_By>>;
  where: InputMaybe<Annee_Bool_Exp>;
};

export type Subscription_RootAnnee_AggregateArgs = {
  distinct_on: InputMaybe<Array<Annee_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Annee_Order_By>>;
  where: InputMaybe<Annee_Bool_Exp>;
};

export type Subscription_RootAnnee_By_PkArgs = {
  value: Scalars["Int"]["input"];
};

export type Subscription_RootAnnee_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Annee_Stream_Cursor_Input>>;
  where: InputMaybe<Annee_Bool_Exp>;
};

export type Subscription_RootCursusArgs = {
  distinct_on: InputMaybe<Array<Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Cursus_Order_By>>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

export type Subscription_RootCursus_AggregateArgs = {
  distinct_on: InputMaybe<Array<Cursus_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Cursus_Order_By>>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

export type Subscription_RootCursus_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootCursus_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Cursus_Stream_Cursor_Input>>;
  where: InputMaybe<Cursus_Bool_Exp>;
};

export type Subscription_RootDemandeArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

export type Subscription_RootDemande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

export type Subscription_RootDemande_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootDemande_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Demande_Stream_Cursor_Input>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

export type Subscription_RootEnseignementArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

export type Subscription_RootEnseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

export type Subscription_RootEnseignement_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootEnseignement_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Enseignement_Stream_Cursor_Input>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

export type Subscription_RootIntervenantArgs = {
  distinct_on: InputMaybe<Array<Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Intervenant_Order_By>>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

export type Subscription_RootIntervenant_AggregateArgs = {
  distinct_on: InputMaybe<Array<Intervenant_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Intervenant_Order_By>>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

export type Subscription_RootIntervenant_By_PkArgs = {
  uid: Scalars["String"]["input"];
};

export type Subscription_RootIntervenant_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Intervenant_Stream_Cursor_Input>>;
  where: InputMaybe<Intervenant_Bool_Exp>;
};

export type Subscription_RootMentionArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

export type Subscription_RootMention_AggregateArgs = {
  distinct_on: InputMaybe<Array<Mention_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Mention_Order_By>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

export type Subscription_RootMention_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootMention_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Mention_Stream_Cursor_Input>>;
  where: InputMaybe<Mention_Bool_Exp>;
};

export type Subscription_RootMessageArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

export type Subscription_RootMessage_AggregateArgs = {
  distinct_on: InputMaybe<Array<Message_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Message_Order_By>>;
  where: InputMaybe<Message_Bool_Exp>;
};

export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where: InputMaybe<Message_Bool_Exp>;
};

export type Subscription_RootModification_ServiceArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

export type Subscription_RootModification_Service_AggregateArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

export type Subscription_RootModification_Service_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootModification_Service_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Modification_Service_Stream_Cursor_Input>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

export type Subscription_RootParcoursArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

export type Subscription_RootParcours_AggregateArgs = {
  distinct_on: InputMaybe<Array<Parcours_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Parcours_Order_By>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

export type Subscription_RootParcours_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootParcours_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Parcours_Stream_Cursor_Input>>;
  where: InputMaybe<Parcours_Bool_Exp>;
};

export type Subscription_RootPhaseArgs = {
  distinct_on: InputMaybe<Array<Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Phase_Order_By>>;
  where: InputMaybe<Phase_Bool_Exp>;
};

export type Subscription_RootPhase_AggregateArgs = {
  distinct_on: InputMaybe<Array<Phase_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Phase_Order_By>>;
  where: InputMaybe<Phase_Bool_Exp>;
};

export type Subscription_RootPhase_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootPhase_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Phase_Stream_Cursor_Input>>;
  where: InputMaybe<Phase_Bool_Exp>;
};

export type Subscription_RootPrioriteArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

export type Subscription_RootPriorite_AggregateArgs = {
  distinct_on: InputMaybe<Array<Priorite_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Priorite_Order_By>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

export type Subscription_RootPriorite_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootPriorite_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Priorite_Stream_Cursor_Input>>;
  where: InputMaybe<Priorite_Bool_Exp>;
};

export type Subscription_RootResponsableArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

export type Subscription_RootResponsable_AggregateArgs = {
  distinct_on: InputMaybe<Array<Responsable_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Responsable_Order_By>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

export type Subscription_RootResponsable_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootResponsable_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Responsable_Stream_Cursor_Input>>;
  where: InputMaybe<Responsable_Bool_Exp>;
};

export type Subscription_RootServiceArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootService_AggregateArgs = {
  distinct_on: InputMaybe<Array<Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Service_Order_By>>;
  where: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootService_By_PkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootService_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Service_Stream_Cursor_Input>>;
  where: InputMaybe<Service_Bool_Exp>;
};

export type Subscription_RootType_DemandeArgs = {
  distinct_on: InputMaybe<Array<Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Demande_Order_By>>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

export type Subscription_RootType_Demande_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Demande_Order_By>>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

export type Subscription_RootType_Demande_By_PkArgs = {
  value: Scalars["String"]["input"];
};

export type Subscription_RootType_Demande_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Type_Demande_Stream_Cursor_Input>>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

export type Subscription_RootType_EnseignementArgs = {
  distinct_on: InputMaybe<Array<Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Enseignement_Order_By>>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootType_Enseignement_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Enseignement_Order_By>>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootType_Enseignement_By_PkArgs = {
  label: Scalars["String"]["input"];
};

export type Subscription_RootType_Enseignement_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Type_Enseignement_Stream_Cursor_Input>>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

export type Subscription_RootType_ModificationArgs = {
  distinct_on: InputMaybe<Array<Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Modification_Order_By>>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

export type Subscription_RootType_Modification_AggregateArgs = {
  distinct_on: InputMaybe<Array<Type_Modification_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Type_Modification_Order_By>>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

export type Subscription_RootType_Modification_By_PkArgs = {
  label: Scalars["String"]["input"];
};

export type Subscription_RootType_Modification_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Type_Modification_Stream_Cursor_Input>>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Type_Demande = {
  __typename?: "type_demande";
  /** An array relationship */
  demandes: Array<Demande>;
  /** An aggregate relationship */
  demandes_aggregate: Demande_Aggregate;
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Scalars["String"]["output"];
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Type_DemandeDemandesArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Type_DemandeDemandes_AggregateArgs = {
  distinct_on: InputMaybe<Array<Demande_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Demande_Order_By>>;
  where: InputMaybe<Demande_Bool_Exp>;
};

/** aggregated selection of "type_demande" */
export type Type_Demande_Aggregate = {
  __typename?: "type_demande_aggregate";
  aggregate: Maybe<Type_Demande_Aggregate_Fields>;
  nodes: Array<Type_Demande>;
};

/** aggregate fields of "type_demande" */
export type Type_Demande_Aggregate_Fields = {
  __typename?: "type_demande_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Type_Demande_Max_Fields>;
  min: Maybe<Type_Demande_Min_Fields>;
};

/** aggregate fields of "type_demande" */
export type Type_Demande_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Type_Demande_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "type_demande". All fields are combined with a logical 'AND'. */
export type Type_Demande_Bool_Exp = {
  _and: InputMaybe<Array<Type_Demande_Bool_Exp>>;
  _not: InputMaybe<Type_Demande_Bool_Exp>;
  _or: InputMaybe<Array<Type_Demande_Bool_Exp>>;
  demandes: InputMaybe<Demande_Bool_Exp>;
  demandes_aggregate: InputMaybe<Demande_Aggregate_Bool_Exp>;
  description: InputMaybe<String_Comparison_Exp>;
  value: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "type_demande" */
export enum Type_Demande_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeDemandePkey = "type_demande_pkey",
}

/** input type for inserting data into table "type_demande" */
export type Type_Demande_Insert_Input = {
  demandes: InputMaybe<Demande_Arr_Rel_Insert_Input>;
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Type_Demande_Max_Fields = {
  __typename?: "type_demande_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Type_Demande_Min_Fields = {
  __typename?: "type_demande_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de demande (unique). */
  value: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "type_demande" */
export type Type_Demande_Mutation_Response = {
  __typename?: "type_demande_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Demande>;
};

/** input type for inserting object relation for remote table "type_demande" */
export type Type_Demande_Obj_Rel_Insert_Input = {
  data: Type_Demande_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Type_Demande_On_Conflict>;
};

/** on_conflict condition type for table "type_demande" */
export type Type_Demande_On_Conflict = {
  constraint: Type_Demande_Constraint;
  update_columns: Array<Type_Demande_Update_Column>;
  where: InputMaybe<Type_Demande_Bool_Exp>;
};

/** Ordering options when selecting data from "type_demande". */
export type Type_Demande_Order_By = {
  demandes_aggregate: InputMaybe<Demande_Aggregate_Order_By>;
  description: InputMaybe<Order_By>;
  value: InputMaybe<Order_By>;
};

/** primary key columns input for table: type_demande */
export type Type_Demande_Pk_Columns_Input = {
  /** Le type de demande (unique). */
  value: Scalars["String"]["input"];
};

/** select columns of table "type_demande" */
export enum Type_Demande_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "type_demande" */
export type Type_Demande_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "type_demande" */
export type Type_Demande_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Type_Demande_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Type_Demande_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de demande (unique). */
  value: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "type_demande" */
export enum Type_Demande_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Value = "value",
}

export type Type_Demande_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Type_Demande_Set_Input>;
  /** filter the rows which have to be updated */
  where: Type_Demande_Bool_Exp;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Type_Enseignement = {
  __typename?: "type_enseignement";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Scalars["Float"]["output"];
  /** An array relationship */
  enseignements: Array<Enseignement>;
  /** An aggregate relationship */
  enseignements_aggregate: Enseignement_Aggregate;
  /** Le type d'enseignement (unique). */
  label: Scalars["String"]["output"];
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Type_EnseignementEnseignementsArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Type_EnseignementEnseignements_AggregateArgs = {
  distinct_on: InputMaybe<Array<Enseignement_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Enseignement_Order_By>>;
  where: InputMaybe<Enseignement_Bool_Exp>;
};

/** aggregated selection of "type_enseignement" */
export type Type_Enseignement_Aggregate = {
  __typename?: "type_enseignement_aggregate";
  aggregate: Maybe<Type_Enseignement_Aggregate_Fields>;
  nodes: Array<Type_Enseignement>;
};

/** aggregate fields of "type_enseignement" */
export type Type_Enseignement_Aggregate_Fields = {
  __typename?: "type_enseignement_aggregate_fields";
  avg: Maybe<Type_Enseignement_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max: Maybe<Type_Enseignement_Max_Fields>;
  min: Maybe<Type_Enseignement_Min_Fields>;
  stddev: Maybe<Type_Enseignement_Stddev_Fields>;
  stddev_pop: Maybe<Type_Enseignement_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Type_Enseignement_Stddev_Samp_Fields>;
  sum: Maybe<Type_Enseignement_Sum_Fields>;
  var_pop: Maybe<Type_Enseignement_Var_Pop_Fields>;
  var_samp: Maybe<Type_Enseignement_Var_Samp_Fields>;
  variance: Maybe<Type_Enseignement_Variance_Fields>;
};

/** aggregate fields of "type_enseignement" */
export type Type_Enseignement_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Type_Enseignement_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Type_Enseignement_Avg_Fields = {
  __typename?: "type_enseignement_avg_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "type_enseignement". All fields are combined with a logical 'AND'. */
export type Type_Enseignement_Bool_Exp = {
  _and: InputMaybe<Array<Type_Enseignement_Bool_Exp>>;
  _not: InputMaybe<Type_Enseignement_Bool_Exp>;
  _or: InputMaybe<Array<Type_Enseignement_Bool_Exp>>;
  coefficient: InputMaybe<Float_Comparison_Exp>;
  enseignements: InputMaybe<Enseignement_Bool_Exp>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Bool_Exp>;
  label: InputMaybe<String_Comparison_Exp>;
  label_court: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "type_enseignement" */
export enum Type_Enseignement_Constraint {
  /** unique or primary key constraint on columns "label" */
  TypeEnseignementPkey = "type_enseignement_pkey",
}

/** input type for incrementing numeric columns in table "type_enseignement" */
export type Type_Enseignement_Inc_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
};

/** input type for inserting data into table "type_enseignement" */
export type Type_Enseignement_Insert_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  enseignements: InputMaybe<Enseignement_Arr_Rel_Insert_Input>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Type_Enseignement_Max_Fields = {
  __typename?: "type_enseignement_max_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
  /** Le type d'enseignement (unique). */
  label: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Type_Enseignement_Min_Fields = {
  __typename?: "type_enseignement_min_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
  /** Le type d'enseignement (unique). */
  label: Maybe<Scalars["String"]["output"]>;
  /** Le nom abrégé (optionnel). */
  label_court: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "type_enseignement" */
export type Type_Enseignement_Mutation_Response = {
  __typename?: "type_enseignement_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Enseignement>;
};

/** input type for inserting object relation for remote table "type_enseignement" */
export type Type_Enseignement_Obj_Rel_Insert_Input = {
  data: Type_Enseignement_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Type_Enseignement_On_Conflict>;
};

/** on_conflict condition type for table "type_enseignement" */
export type Type_Enseignement_On_Conflict = {
  constraint: Type_Enseignement_Constraint;
  update_columns: Array<Type_Enseignement_Update_Column>;
  where: InputMaybe<Type_Enseignement_Bool_Exp>;
};

/** Ordering options when selecting data from "type_enseignement". */
export type Type_Enseignement_Order_By = {
  coefficient: InputMaybe<Order_By>;
  enseignements_aggregate: InputMaybe<Enseignement_Aggregate_Order_By>;
  label: InputMaybe<Order_By>;
  label_court: InputMaybe<Order_By>;
};

/** primary key columns input for table: type_enseignement */
export type Type_Enseignement_Pk_Columns_Input = {
  /** Le type d'enseignement (unique). */
  label: Scalars["String"]["input"];
};

/** select columns of table "type_enseignement" */
export enum Type_Enseignement_Select_Column {
  /** column name */
  Coefficient = "coefficient",
  /** column name */
  Label = "label",
  /** column name */
  LabelCourt = "label_court",
}

/** input type for updating data in table "type_enseignement" */
export type Type_Enseignement_Set_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Type_Enseignement_Stddev_Fields = {
  __typename?: "type_enseignement_stddev_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Type_Enseignement_Stddev_Pop_Fields = {
  __typename?: "type_enseignement_stddev_pop_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Type_Enseignement_Stddev_Samp_Fields = {
  __typename?: "type_enseignement_stddev_samp_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "type_enseignement" */
export type Type_Enseignement_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Type_Enseignement_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Type_Enseignement_Stream_Cursor_Value_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: InputMaybe<Scalars["Float"]["input"]>;
  /** Le type d'enseignement (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  /** Le nom abrégé (optionnel). */
  label_court: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Type_Enseignement_Sum_Fields = {
  __typename?: "type_enseignement_sum_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** update columns of table "type_enseignement" */
export enum Type_Enseignement_Update_Column {
  /** column name */
  Coefficient = "coefficient",
  /** column name */
  Label = "label",
  /** column name */
  LabelCourt = "label_court",
}

export type Type_Enseignement_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Type_Enseignement_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Type_Enseignement_Set_Input>;
  /** filter the rows which have to be updated */
  where: Type_Enseignement_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Type_Enseignement_Var_Pop_Fields = {
  __typename?: "type_enseignement_var_pop_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Type_Enseignement_Var_Samp_Fields = {
  __typename?: "type_enseignement_var_samp_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Type_Enseignement_Variance_Fields = {
  __typename?: "type_enseignement_variance_fields";
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Maybe<Scalars["Float"]["output"]>;
};

/** Table contenant les différents types de modification de service. */
export type Type_Modification = {
  __typename?: "type_modification";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de modification (unique). */
  label: Scalars["String"]["output"];
  /** An array relationship */
  modifications: Array<Modification_Service>;
  /** An aggregate relationship */
  modifications_aggregate: Modification_Service_Aggregate;
};

/** Table contenant les différents types de modification de service. */
export type Type_ModificationModificationsArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

/** Table contenant les différents types de modification de service. */
export type Type_ModificationModifications_AggregateArgs = {
  distinct_on: InputMaybe<Array<Modification_Service_Select_Column>>;
  limit: InputMaybe<Scalars["Int"]["input"]>;
  offset: InputMaybe<Scalars["Int"]["input"]>;
  order_by: InputMaybe<Array<Modification_Service_Order_By>>;
  where: InputMaybe<Modification_Service_Bool_Exp>;
};

/** aggregated selection of "type_modification" */
export type Type_Modification_Aggregate = {
  __typename?: "type_modification_aggregate";
  aggregate: Maybe<Type_Modification_Aggregate_Fields>;
  nodes: Array<Type_Modification>;
};

/** aggregate fields of "type_modification" */
export type Type_Modification_Aggregate_Fields = {
  __typename?: "type_modification_aggregate_fields";
  count: Scalars["Int"]["output"];
  max: Maybe<Type_Modification_Max_Fields>;
  min: Maybe<Type_Modification_Min_Fields>;
};

/** aggregate fields of "type_modification" */
export type Type_Modification_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Type_Modification_Select_Column>>;
  distinct: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "type_modification". All fields are combined with a logical 'AND'. */
export type Type_Modification_Bool_Exp = {
  _and: InputMaybe<Array<Type_Modification_Bool_Exp>>;
  _not: InputMaybe<Type_Modification_Bool_Exp>;
  _or: InputMaybe<Array<Type_Modification_Bool_Exp>>;
  description: InputMaybe<String_Comparison_Exp>;
  label: InputMaybe<String_Comparison_Exp>;
  modifications: InputMaybe<Modification_Service_Bool_Exp>;
  modifications_aggregate: InputMaybe<Modification_Service_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "type_modification" */
export enum Type_Modification_Constraint {
  /** unique or primary key constraint on columns "label" */
  TypeModificationPkey = "type_modification_pkey",
}

/** input type for inserting data into table "type_modification" */
export type Type_Modification_Insert_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de modification (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
  modifications: InputMaybe<Modification_Service_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Type_Modification_Max_Fields = {
  __typename?: "type_modification_max_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de modification (unique). */
  label: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Type_Modification_Min_Fields = {
  __typename?: "type_modification_min_fields";
  /** Une brève description. */
  description: Maybe<Scalars["String"]["output"]>;
  /** Le type de modification (unique). */
  label: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "type_modification" */
export type Type_Modification_Mutation_Response = {
  __typename?: "type_modification_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Type_Modification>;
};

/** input type for inserting object relation for remote table "type_modification" */
export type Type_Modification_Obj_Rel_Insert_Input = {
  data: Type_Modification_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Type_Modification_On_Conflict>;
};

/** on_conflict condition type for table "type_modification" */
export type Type_Modification_On_Conflict = {
  constraint: Type_Modification_Constraint;
  update_columns: Array<Type_Modification_Update_Column>;
  where: InputMaybe<Type_Modification_Bool_Exp>;
};

/** Ordering options when selecting data from "type_modification". */
export type Type_Modification_Order_By = {
  description: InputMaybe<Order_By>;
  label: InputMaybe<Order_By>;
  modifications_aggregate: InputMaybe<Modification_Service_Aggregate_Order_By>;
};

/** primary key columns input for table: type_modification */
export type Type_Modification_Pk_Columns_Input = {
  /** Le type de modification (unique). */
  label: Scalars["String"]["input"];
};

/** select columns of table "type_modification" */
export enum Type_Modification_Select_Column {
  /** column name */
  Description = "description",
  /** column name */
  Label = "label",
}

/** input type for updating data in table "type_modification" */
export type Type_Modification_Set_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de modification (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "type_modification" */
export type Type_Modification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Type_Modification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Type_Modification_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description: InputMaybe<Scalars["String"]["input"]>;
  /** Le type de modification (unique). */
  label: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "type_modification" */
export enum Type_Modification_Update_Column {
  /** column name */
  Description = "description",
  /** column name */
  Label = "label",
}

export type Type_Modification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Type_Modification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Type_Modification_Bool_Exp;
};

export type GetAnneesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAnneesQuery = {
  __typename?: "query_root";
  annees: Array<{
    __typename?: "annee";
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
    __typename?: "annee_mutation_response";
    returning: Array<{ __typename?: "annee"; value: number }>;
  } | null;
  enCours: { __typename?: "annee"; value: number } | null;
};

export type DemandeFragment = {
  __typename?: "demande";
  id: number;
  heures: number;
  prioritaire: boolean | null;
  serviceId: number;
  typeDemande: string;
  service: {
    __typename?: "service";
    intervenant: {
      __typename?: "intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
  };
  enseignement: {
    __typename?: "enseignement";
    id: number;
    heures: number | null;
  };
};

export type TotalHeuresFragment = {
  __typename?: "demande_aggregate";
  aggregate: {
    __typename?: "demande_aggregate_fields";
    sum: { __typename?: "demande_sum_fields"; heures: number | null } | null;
  } | null;
};

export type TotalHeuresEqtdFragment = {
  __typename?: "demande_aggregate";
  aggregate: {
    __typename?: "demande_aggregate_fields";
    sum: {
      __typename?: "demande_sum_fields";
      heuresEQTD: number | null;
    } | null;
  } | null;
};

export type GetDemandeQueryVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
  ensId: Scalars["Int"]["input"];
  typeDemande: Scalars["String"]["input"];
}>;

export type GetDemandeQuery = {
  __typename?: "query_root";
  demande: Array<{
    __typename?: "demande";
    id: number;
    heures: number;
    serviceId: number;
    ensId: number;
    typeDemande: string;
  }>;
};

export type UpsertDemandeMutationVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
  ensId: Scalars["Int"]["input"];
  typeDemande: Scalars["String"]["input"];
  heures: Scalars["Float"]["input"];
}>;

export type UpsertDemandeMutation = {
  __typename?: "mutation_root";
  demande: { __typename?: "demande"; id: number } | null;
};

export type DeleteDemandeMutationVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
  ensId: Scalars["Int"]["input"];
  typeDemande: Scalars["String"]["input"];
}>;

export type DeleteDemandeMutation = {
  __typename?: "mutation_root";
  demandes: {
    __typename?: "demande_mutation_response";
    returning: Array<{ __typename?: "demande"; id: number }>;
  } | null;
};

export type DeleteDemandeByIdMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteDemandeByIdMutation = {
  __typename?: "mutation_root";
  demande: { __typename?: "demande"; id: number } | null;
};

export type DummyMutationMutationVariables = Exact<{ [key: string]: never }>;

export type DummyMutationMutation = {
  __typename?: "mutation_root";
  demandes: {
    __typename?: "demande_mutation_response";
    returning: Array<{ __typename?: "demande"; id: number }>;
  } | null;
};

export type ResponsableFragment = {
  __typename?: "responsable";
  id: number;
  commentaire: string | null;
  intervenant: {
    __typename?: "intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  };
};

export type ResumeFragment = {
  __typename?: "enseignement";
  description: string | null;
  ensId: number;
  heuresParGroupe: number | null;
  responsables: Array<{
    __typename?: "responsable";
    id: number;
    commentaire: string | null;
    intervenant: {
      __typename?: "intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
  }>;
  mention: {
    __typename?: "mention";
    responsables: Array<{
      __typename?: "responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
  };
  parcours: {
    __typename?: "parcours";
    responsables: Array<{
      __typename?: "responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
  } | null;
};

export type ArchiveFragment = {
  __typename?: "enseignement";
  annee: number;
  ensId: number;
  demandes: Array<{
    __typename?: "demande";
    id: number;
    heures: number;
    prioritaire: boolean | null;
    serviceId: number;
    typeDemande: string;
    service: {
      __typename?: "service";
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    };
    enseignement: {
      __typename?: "enseignement";
      id: number;
      heures: number | null;
    };
  }>;
};

export type NestedArchivesFragment = {
  __typename?: "enseignement";
  annee: number;
  ensId: number;
  parent: {
    __typename?: "enseignement";
    annee: number;
    ensId: number;
    parent: {
      __typename?: "enseignement";
      annee: number;
      ensId: number;
      demandes: Array<{
        __typename?: "demande";
        id: number;
        heures: number;
        prioritaire: boolean | null;
        serviceId: number;
        typeDemande: string;
        service: {
          __typename?: "service";
          intervenant: {
            __typename?: "intervenant";
            uid: string;
            nom: string;
            prenom: string;
            alias: string | null;
          };
        };
        enseignement: {
          __typename?: "enseignement";
          id: number;
          heures: number | null;
        };
      }>;
    } | null;
    demandes: Array<{
      __typename?: "demande";
      id: number;
      heures: number;
      prioritaire: boolean | null;
      serviceId: number;
      typeDemande: string;
      service: {
        __typename?: "service";
        intervenant: {
          __typename?: "intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
      };
      enseignement: {
        __typename?: "enseignement";
        id: number;
        heures: number | null;
      };
    }>;
  } | null;
  demandes: Array<{
    __typename?: "demande";
    id: number;
    heures: number;
    prioritaire: boolean | null;
    serviceId: number;
    typeDemande: string;
    service: {
      __typename?: "service";
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    };
    enseignement: {
      __typename?: "enseignement";
      id: number;
      heures: number | null;
    };
  }>;
};

export type GetEnseignementsTableRowsQueryVariables = Exact<{
  annee: Scalars["Int"]["input"];
}>;

export type GetEnseignementsTableRowsQuery = {
  __typename?: "query_root";
  enseignements: Array<{
    __typename?: "enseignement";
    id: number;
    nom: string;
    semestre: number;
    visible: boolean;
    nomCourt: string | null;
    heures: number | null;
    groupes: number | null;
    mention: {
      __typename?: "mention";
      id: number;
      nom: string;
      visible: boolean;
      nomCourt: string | null;
      cursus: {
        __typename?: "cursus";
        id: number;
        nom: string;
        visible: boolean;
        nomCourt: string | null;
      };
    };
    parcours: {
      __typename?: "parcours";
      id: number;
      nom: string;
      visible: boolean;
      nomCourt: string | null;
    } | null;
    typeEnseignement: {
      __typename?: "type_enseignement";
      label: string;
      labelCourt: string | null;
    };
    totalAttributions: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalPrincipales: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalSecondaires: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
        } | null;
      } | null;
    };
    totalPrioritaire: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
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
    __typename?: "enseignement";
    description: string | null;
    ensId: number;
    heuresParGroupe: number | null;
    demandes: Array<{
      __typename?: "demande";
      id: number;
      heures: number;
      prioritaire: boolean | null;
      serviceId: number;
      typeDemande: string;
      service: {
        __typename?: "service";
        intervenant: {
          __typename?: "intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
      };
      enseignement: {
        __typename?: "enseignement";
        id: number;
        heures: number | null;
      };
    }>;
    priorites: Array<{
      __typename?: "priorite";
      id: number;
      anciennete: number | null;
      prioritaire: boolean | null;
      ensId: number;
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
    parent: {
      __typename?: "enseignement";
      annee: number;
      ensId: number;
      parent: {
        __typename?: "enseignement";
        annee: number;
        ensId: number;
        parent: {
          __typename?: "enseignement";
          annee: number;
          ensId: number;
          demandes: Array<{
            __typename?: "demande";
            id: number;
            heures: number;
            prioritaire: boolean | null;
            serviceId: number;
            typeDemande: string;
            service: {
              __typename?: "service";
              intervenant: {
                __typename?: "intervenant";
                uid: string;
                nom: string;
                prenom: string;
                alias: string | null;
              };
            };
            enseignement: {
              __typename?: "enseignement";
              id: number;
              heures: number | null;
            };
          }>;
        } | null;
        demandes: Array<{
          __typename?: "demande";
          id: number;
          heures: number;
          prioritaire: boolean | null;
          serviceId: number;
          typeDemande: string;
          service: {
            __typename?: "service";
            intervenant: {
              __typename?: "intervenant";
              uid: string;
              nom: string;
              prenom: string;
              alias: string | null;
            };
          };
          enseignement: {
            __typename?: "enseignement";
            id: number;
            heures: number | null;
          };
        }>;
      } | null;
      demandes: Array<{
        __typename?: "demande";
        id: number;
        heures: number;
        prioritaire: boolean | null;
        serviceId: number;
        typeDemande: string;
        service: {
          __typename?: "service";
          intervenant: {
            __typename?: "intervenant";
            uid: string;
            nom: string;
            prenom: string;
            alias: string | null;
          };
        };
        enseignement: {
          __typename?: "enseignement";
          id: number;
          heures: number | null;
        };
      }>;
    } | null;
    responsables: Array<{
      __typename?: "responsable";
      id: number;
      commentaire: string | null;
      intervenant: {
        __typename?: "intervenant";
        uid: string;
        nom: string;
        prenom: string;
        alias: string | null;
      };
    }>;
    mention: {
      __typename?: "mention";
      responsables: Array<{
        __typename?: "responsable";
        id: number;
        commentaire: string | null;
        intervenant: {
          __typename?: "intervenant";
          uid: string;
          nom: string;
          prenom: string;
          alias: string | null;
        };
      }>;
    };
    parcours: {
      __typename?: "parcours";
      responsables: Array<{
        __typename?: "responsable";
        id: number;
        commentaire: string | null;
        intervenant: {
          __typename?: "intervenant";
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
  description: { __typename?: "enseignement"; id: number } | null;
};

export type IntervenantFragment = {
  __typename?: "intervenant";
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
    __typename?: "intervenant";
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
    __typename?: "intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  } | null;
};

export type UpsertMessageMutationVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
  contenu: Scalars["String"]["input"];
}>;

export type UpsertMessageMutation = {
  __typename?: "mutation_root";
  message: { __typename?: "message"; id: number } | null;
};

export type DeleteMessageMutationVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
}>;

export type DeleteMessageMutation = {
  __typename?: "mutation_root";
  messages: {
    __typename?: "message_mutation_response";
    returning: Array<{ __typename?: "message"; id: number }>;
  } | null;
};

export type GetTypesModificationQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetTypesModificationQuery = {
  __typename?: "query_root";
  typesModification: Array<{
    __typename?: "type_modification";
    label: string;
    description: string | null;
  }>;
};

export type InsertModificationMutationVariables = Exact<{
  serviceId: Scalars["Int"]["input"];
  typeModification: Scalars["String"]["input"];
  heuresEQTD: Scalars["Float"]["input"];
}>;

export type InsertModificationMutation = {
  __typename?: "mutation_root";
  modificationService: {
    __typename?: "modification_service";
    id: number;
  } | null;
};

export type DeleteModificationMutationVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type DeleteModificationMutation = {
  __typename?: "mutation_root";
  modificationService: {
    __typename?: "modification_service";
    id: number;
  } | null;
};

export type GetPhasesQueryVariables = Exact<{ [key: string]: never }>;

export type GetPhasesQuery = {
  __typename?: "query_root";
  phases: Array<{
    __typename?: "phase";
    value: string;
    enCours: boolean | null;
  }>;
};

export type UpdatePhaseEnCoursMutationVariables = Exact<{
  value: Scalars["String"]["input"];
}>;

export type UpdatePhaseEnCoursMutation = {
  __typename?: "mutation_root";
  phases: {
    __typename?: "phase_mutation_response";
    returning: Array<{ __typename?: "phase"; value: string }>;
  } | null;
  enCours: { __typename?: "phase"; value: string } | null;
};

export type PrioriteFragment = {
  __typename?: "priorite";
  id: number;
  anciennete: number | null;
  prioritaire: boolean | null;
  ensId: number;
  intervenant: {
    __typename?: "intervenant";
    uid: string;
    nom: string;
    prenom: string;
    alias: string | null;
  };
};

export type GetServicesQueryVariables = Exact<{
  annee: Scalars["Int"]["input"];
}>;

export type GetServicesQuery = {
  __typename?: "query_root";
  services: Array<{
    __typename?: "service";
    id: number;
    intervenant: {
      __typename?: "intervenant";
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
  }>;
};

export type GetServicesTableRowsQueryVariables = Exact<{
  annee: Scalars["Int"]["input"];
  where?: InputMaybe<Service_Bool_Exp>;
}>;

export type GetServicesTableRowsQuery = {
  __typename?: "query_root";
  services: Array<{
    __typename?: "service";
    id: number;
    heuresEQTD: number;
    modifications: Array<{
      __typename?: "modification_service";
      id: number;
      typeModification: string;
      heuresEQTD: number;
    }>;
    totalModifications: {
      __typename?: "modification_service_aggregate";
      aggregate: {
        __typename?: "modification_service_aggregate_fields";
        sum: {
          __typename?: "modification_service_sum_fields";
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    intervenant: {
      __typename?: "intervenant";
      visible: boolean;
      uid: string;
      nom: string;
      prenom: string;
      alias: string | null;
    };
    demandes: Array<{
      __typename?: "demande";
      id: number;
      heures: number;
      ensId: number;
      typeDemande: string;
      heuresEQTD: number | null;
    }>;
    totalAttributions: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalPrincipales: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    totalSecondaires: {
      __typename?: "demande_aggregate";
      aggregate: {
        __typename?: "demande_aggregate_fields";
        sum: {
          __typename?: "demande_sum_fields";
          heures: number | null;
          heuresEQTD: number | null;
        } | null;
      } | null;
    };
    messages: Array<{ __typename?: "message"; id: number; contenu: string }>;
  }>;
};

export const TotalHeuresFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TotalHeures" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "demande_aggregate" },
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
        name: { kind: "Name", value: "demande_aggregate" },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "responsable" },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "heuresParGroupe" },
            name: { kind: "Name", value: "heures_corrigees" },
          },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "parcours" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Intervenant" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "responsable" },
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
        name: { kind: "Name", value: "demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "serviceId" },
            name: { kind: "Name", value: "service_id" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "service" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heures" },
                  name: { kind: "Name", value: "heures_corrigees" },
                },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "enseignement" },
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
                          name: { kind: "Name", value: "service" },
                          value: {
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
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "service" },
                          value: {
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "serviceId" },
            name: { kind: "Name", value: "service_id" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "service" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heures" },
                  name: { kind: "Name", value: "heures_corrigees" },
                },
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
        name: { kind: "Name", value: "enseignement" },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "serviceId" },
            name: { kind: "Name", value: "service_id" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "service" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heures" },
                  name: { kind: "Name", value: "heures_corrigees" },
                },
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
        name: { kind: "Name", value: "enseignement" },
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
                          name: { kind: "Name", value: "service" },
                          value: {
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
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "service" },
                          value: {
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
        name: { kind: "Name", value: "priorite" },
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
        name: { kind: "Name", value: "intervenant" },
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
            name: { kind: "Name", value: "annee" },
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
            name: { kind: "Name", value: "update_annee" },
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
            name: { kind: "Name", value: "update_annee_by_pk" },
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
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "demande" },
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
                                name: { kind: "Name", value: "service_id" },
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
                                          value: "serviceId",
                                        },
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "serviceId" },
                  name: { kind: "Name", value: "service_id" },
                },
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
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "insert_demande_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "service_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "serviceId" },
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
                        value: "demande_service_id_ens_id_type_key",
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
            name: { kind: "Name", value: "serviceId" },
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
            alias: { kind: "Name", value: "demandes" },
            name: { kind: "Name", value: "delete_demande" },
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
                                name: { kind: "Name", value: "service_id" },
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
                                          value: "serviceId",
                                        },
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
            name: { kind: "Name", value: "delete_demande_by_pk" },
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
            name: { kind: "Name", value: "insert_demande" },
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
            name: { kind: "Name", value: "enseignement" },
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
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "visible" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "visible" },
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
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "visible" },
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
                  name: { kind: "Name", value: "typeByType" },
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heures" },
                  name: { kind: "Name", value: "heures_corrigees" },
                },
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
        name: { kind: "Name", value: "demande_aggregate" },
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
            name: { kind: "Name", value: "enseignement_by_pk" },
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
                                name: { kind: "Name", value: "service" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "intervenant",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "nom",
                                            },
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
                                name: { kind: "Name", value: "service" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: {
                                        kind: "Name",
                                        value: "intervenant",
                                      },
                                      value: {
                                        kind: "ObjectValue",
                                        fields: [
                                          {
                                            kind: "ObjectField",
                                            name: {
                                              kind: "Name",
                                              value: "prenom",
                                            },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "responsable" },
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
        name: { kind: "Name", value: "demande" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "serviceId" },
            name: { kind: "Name", value: "service_id" },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "service" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heures" },
                  name: { kind: "Name", value: "heures_corrigees" },
                },
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
        name: { kind: "Name", value: "enseignement" },
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
                          name: { kind: "Name", value: "service" },
                          value: {
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
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "service" },
                          value: {
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
        name: { kind: "Name", value: "enseignement" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "ensId" },
            name: { kind: "Name", value: "id" },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "heuresParGroupe" },
            name: { kind: "Name", value: "heures_corrigees" },
          },
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
          {
            kind: "Field",
            name: { kind: "Name", value: "parcours" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
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
          { kind: "Field", name: { kind: "Name", value: "description" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "Priorite" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "priorite" },
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
        name: { kind: "Name", value: "enseignement" },
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
            name: { kind: "Name", value: "update_enseignement_by_pk" },
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
            name: { kind: "Name", value: "intervenant_by_pk" },
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
        name: { kind: "Name", value: "intervenant" },
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
            name: { kind: "Name", value: "insert_intervenant_one" },
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
            name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "insert_message_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "service_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "serviceId" },
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
                        value: "message_service_id_key",
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
            name: { kind: "Name", value: "serviceId" },
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
            alias: { kind: "Name", value: "messages" },
            name: { kind: "Name", value: "delete_message" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "service_id" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "type_modification" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "order_by" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "label" },
                      value: { kind: "EnumValue", value: "asc" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "label" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
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
            name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "insert_modification_service_one" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "service_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "serviceId" },
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
            name: { kind: "Name", value: "delete_modification_service_by_pk" },
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
            name: { kind: "Name", value: "phase" },
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
            name: { kind: "Name", value: "update_phase" },
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
            name: { kind: "Name", value: "update_phase_by_pk" },
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
export const GetServicesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetServices" },
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
            alias: { kind: "Name", value: "services" },
            name: { kind: "Name", value: "service" },
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
        name: { kind: "Name", value: "intervenant" },
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
} as unknown as DocumentNode<GetServicesQuery, GetServicesQueryVariables>;
export const GetServicesTableRowsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetServicesTableRows" },
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
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "where" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "service_bool_exp" },
          },
          defaultValue: { kind: "ObjectValue", fields: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "services" },
            name: { kind: "Name", value: "service" },
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
                            kind: "Variable",
                            name: { kind: "Name", value: "where" },
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
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "heuresEQTD" },
                  name: { kind: "Name", value: "heures_eqtd" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "modifications" },
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
                                name: { kind: "Name", value: "type" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "heures_eqtd" },
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
                  name: { kind: "Name", value: "modifications_aggregate" },
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
                  name: { kind: "Name", value: "intervenant" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "Intervenant" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "visible" },
                      },
                    ],
                  },
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
                                name: { kind: "Name", value: "type" },
                                value: { kind: "EnumValue", value: "asc" },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ens_id" },
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
                        name: { kind: "Name", value: "contenu" },
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
        name: { kind: "Name", value: "intervenant" },
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
        name: { kind: "Name", value: "demande_aggregate" },
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
        name: { kind: "Name", value: "demande_aggregate" },
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
  GetServicesTableRowsQuery,
  GetServicesTableRowsQueryVariables
>;
