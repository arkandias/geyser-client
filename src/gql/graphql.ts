/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type Float_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Table containing coordinators of programs, tracks, or courses. Each row corresponds to exactly one of these three types of responsibility. */
export type Coordinator = {
  __typename?: 'coordinator';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  course?: Maybe<Course>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id: Scalars['Int']['output'];
  /** An object relationship */
  program?: Maybe<Program>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  teacher: Teacher;
  /** An object relationship */
  track?: Maybe<Track>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid: Scalars['String']['output'];
};

/** aggregated selection of "coordinator" */
export type Coordinator_Aggregate = {
  __typename?: 'coordinator_aggregate';
  aggregate?: Maybe<Coordinator_Aggregate_Fields>;
  nodes: Array<Coordinator>;
};

export type Coordinator_Aggregate_Bool_Exp = {
  count?: InputMaybe<Coordinator_Aggregate_Bool_Exp_Count>;
};

export type Coordinator_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Coordinator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Coordinator_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "coordinator" */
export type Coordinator_Aggregate_Fields = {
  __typename?: 'coordinator_aggregate_fields';
  avg?: Maybe<Coordinator_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Coordinator_Max_Fields>;
  min?: Maybe<Coordinator_Min_Fields>;
  stddev?: Maybe<Coordinator_Stddev_Fields>;
  stddev_pop?: Maybe<Coordinator_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Coordinator_Stddev_Samp_Fields>;
  sum?: Maybe<Coordinator_Sum_Fields>;
  var_pop?: Maybe<Coordinator_Var_Pop_Fields>;
  var_samp?: Maybe<Coordinator_Var_Samp_Fields>;
  variance?: Maybe<Coordinator_Variance_Fields>;
};


/** aggregate fields of "coordinator" */
export type Coordinator_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Coordinator_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "coordinator" */
export type Coordinator_Aggregate_Order_By = {
  avg?: InputMaybe<Coordinator_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Coordinator_Max_Order_By>;
  min?: InputMaybe<Coordinator_Min_Order_By>;
  stddev?: InputMaybe<Coordinator_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Coordinator_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Coordinator_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Coordinator_Sum_Order_By>;
  var_pop?: InputMaybe<Coordinator_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Coordinator_Var_Samp_Order_By>;
  variance?: InputMaybe<Coordinator_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "coordinator" */
export type Coordinator_Arr_Rel_Insert_Input = {
  data: Array<Coordinator_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Coordinator_On_Conflict>;
};

/** aggregate avg on columns */
export type Coordinator_Avg_Fields = {
  __typename?: 'coordinator_avg_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "coordinator" */
export type Coordinator_Avg_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "coordinator". All fields are combined with a logical 'AND'. */
export type Coordinator_Bool_Exp = {
  _and?: InputMaybe<Array<Coordinator_Bool_Exp>>;
  _not?: InputMaybe<Coordinator_Bool_Exp>;
  _or?: InputMaybe<Array<Coordinator_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  program?: InputMaybe<Program_Bool_Exp>;
  program_id?: InputMaybe<Int_Comparison_Exp>;
  teacher?: InputMaybe<Teacher_Bool_Exp>;
  track?: InputMaybe<Track_Bool_Exp>;
  track_id?: InputMaybe<Int_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "coordinator" */
export enum Coordinator_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResponsablePkey = 'responsable_pkey',
  /** unique or primary key constraint on columns "track_id", "uid", "course_id", "program_id" */
  ResponsableUidEnsIdParcoursIdMentionIdKey = 'responsable_uid_ens_id_parcours_id_mention_id_key'
}

/** input type for incrementing numeric columns in table "coordinator" */
export type Coordinator_Inc_Input = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "coordinator" */
export type Coordinator_Insert_Input = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Program_Obj_Rel_Insert_Input>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  teacher?: InputMaybe<Teacher_Obj_Rel_Insert_Input>;
  track?: InputMaybe<Track_Obj_Rel_Insert_Input>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Coordinator_Max_Fields = {
  __typename?: 'coordinator_max_fields';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "coordinator" */
export type Coordinator_Max_Order_By = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Order_By>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Coordinator_Min_Fields = {
  __typename?: 'coordinator_min_fields';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "coordinator" */
export type Coordinator_Min_Order_By = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Order_By>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "coordinator" */
export type Coordinator_Mutation_Response = {
  __typename?: 'coordinator_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Coordinator>;
};

/** on_conflict condition type for table "coordinator" */
export type Coordinator_On_Conflict = {
  constraint: Coordinator_Constraint;
  update_columns?: Array<Coordinator_Update_Column>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};

/** Ordering options when selecting data from "coordinator". */
export type Coordinator_Order_By = {
  comment?: InputMaybe<Order_By>;
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program?: InputMaybe<Program_Order_By>;
  program_id?: InputMaybe<Order_By>;
  teacher?: InputMaybe<Teacher_Order_By>;
  track?: InputMaybe<Track_Order_By>;
  track_id?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: coordinator */
export type Coordinator_Pk_Columns_Input = {
  /** Unique identifier for the coordinator entry. */
  id: Scalars['Int']['input'];
};

/** select columns of table "coordinator" */
export enum Coordinator_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  TrackId = 'track_id',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "coordinator" */
export type Coordinator_Set_Input = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Coordinator_Stddev_Fields = {
  __typename?: 'coordinator_stddev_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "coordinator" */
export type Coordinator_Stddev_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Coordinator_Stddev_Pop_Fields = {
  __typename?: 'coordinator_stddev_pop_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "coordinator" */
export type Coordinator_Stddev_Pop_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Coordinator_Stddev_Samp_Fields = {
  __typename?: 'coordinator_stddev_samp_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "coordinator" */
export type Coordinator_Stddev_Samp_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "coordinator" */
export type Coordinator_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Coordinator_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Coordinator_Stream_Cursor_Value_Input = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Coordinator_Sum_Fields = {
  __typename?: 'coordinator_sum_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "coordinator" */
export type Coordinator_Sum_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** update columns of table "coordinator" */
export enum Coordinator_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  TrackId = 'track_id',
  /** column name */
  Uid = 'uid'
}

export type Coordinator_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Coordinator_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Coordinator_Set_Input>;
  /** filter the rows which have to be updated */
  where: Coordinator_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Coordinator_Var_Pop_Fields = {
  __typename?: 'coordinator_var_pop_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "coordinator" */
export type Coordinator_Var_Pop_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Coordinator_Var_Samp_Fields = {
  __typename?: 'coordinator_var_samp_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "coordinator" */
export type Coordinator_Var_Samp_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Coordinator_Variance_Fields = {
  __typename?: 'coordinator_variance_fields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "coordinator" */
export type Coordinator_Variance_Order_By = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Order_By>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  program_id?: InputMaybe<Order_By>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  track_id?: InputMaybe<Order_By>;
};

/** Table contenant les enseignements. */
export type Course = {
  __typename?: 'course';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinators_aggregate: Coordinator_Aggregate;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year: Scalars['Int']['output'];
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  enfants: Array<Course>;
  /** An aggregate relationship */
  enfants_aggregate: Course_Aggregate;
  ens_id_import?: Maybe<Scalars['String']['output']>;
  formation_id_import?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups: Scalars['Int']['output'];
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Int']['output']>;
  groups_effective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours: Scalars['Float']['output'];
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id: Scalars['Int']['output'];
  /** Le nom de l'enseignement. */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel) */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  parent?: Maybe<Course>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  priorities: Array<Priority>;
  /** An aggregate relationship */
  priorities_aggregate: Priority_Aggregate;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  program: Program;
  /** L'identifiant de la mention de l'enseignement. */
  program_id: Scalars['Int']['output'];
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requests_aggregate: Request_Aggregate;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester: Scalars['Int']['output'];
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** An object relationship */
  track?: Maybe<Track>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: Course_Type;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
  /** L'année de l'enseignement. */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Table contenant les enseignements. */
export type CourseCoordinatorsArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CourseCoordinators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CourseEnfantsArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CourseEnfants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CoursePrioritiesArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CoursePriorities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CourseRequestsArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


/** Table contenant les enseignements. */
export type CourseRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** aggregated selection of "course" */
export type Course_Aggregate = {
  __typename?: 'course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

export type Course_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Course_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Course_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Course_Aggregate_Bool_Exp_Count>;
};

export type Course_Aggregate_Bool_Exp_Bool_And = {
  arguments: Course_Select_Column_Course_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Course_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Course_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Course_Select_Column_Course_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Course_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Course_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Course_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "course" */
export type Course_Aggregate_Fields = {
  __typename?: 'course_aggregate_fields';
  avg?: Maybe<Course_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
  stddev?: Maybe<Course_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Sum_Fields>;
  var_pop?: Maybe<Course_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Var_Samp_Fields>;
  variance?: Maybe<Course_Variance_Fields>;
};


/** aggregate fields of "course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "course" */
export type Course_Aggregate_Order_By = {
  avg?: InputMaybe<Course_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Course_Max_Order_By>;
  min?: InputMaybe<Course_Min_Order_By>;
  stddev?: InputMaybe<Course_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Course_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Course_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Course_Sum_Order_By>;
  var_pop?: InputMaybe<Course_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Course_Var_Samp_Order_By>;
  variance?: InputMaybe<Course_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Course_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Avg_Fields = {
  __typename?: 'course_avg_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "course" */
export type Course_Avg_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Bool_Exp>>;
  _not?: InputMaybe<Course_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Bool_Exp>>;
  coordinators?: InputMaybe<Coordinator_Bool_Exp>;
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Bool_Exp>;
  cycle_year?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  enfants?: InputMaybe<Course_Bool_Exp>;
  enfants_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  ens_id_import?: InputMaybe<String_Comparison_Exp>;
  formation_id_import?: InputMaybe<String_Comparison_Exp>;
  groups?: InputMaybe<Int_Comparison_Exp>;
  groups_adjusted?: InputMaybe<Int_Comparison_Exp>;
  groups_effective?: InputMaybe<Int_Comparison_Exp>;
  hours?: InputMaybe<Float_Comparison_Exp>;
  hours_adjusted?: InputMaybe<Float_Comparison_Exp>;
  hours_effective?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_short?: InputMaybe<String_Comparison_Exp>;
  nom_import?: InputMaybe<String_Comparison_Exp>;
  parent?: InputMaybe<Course_Bool_Exp>;
  parent_id?: InputMaybe<Int_Comparison_Exp>;
  priorities?: InputMaybe<Priority_Bool_Exp>;
  priorities_aggregate?: InputMaybe<Priority_Aggregate_Bool_Exp>;
  priority_rule?: InputMaybe<Int_Comparison_Exp>;
  program?: InputMaybe<Program_Bool_Exp>;
  program_id?: InputMaybe<Int_Comparison_Exp>;
  requests?: InputMaybe<Request_Bool_Exp>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Bool_Exp>;
  semester?: InputMaybe<Int_Comparison_Exp>;
  total_hours_effective?: InputMaybe<Float_Comparison_Exp>;
  track?: InputMaybe<Track_Bool_Exp>;
  track_id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  typeByType?: InputMaybe<Course_Type_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
  yearByYear?: InputMaybe<Year_Bool_Exp>;
};

/** unique or primary key constraints on table "course" */
export enum Course_Constraint {
  /** unique or primary key constraint on columns "track_id", "semester", "type", "program_id", "name", "year" */
  EnseignementAnneeMentionIdParcoursIdNomSemestreTypeKey = 'enseignement_annee_mention_id_parcours_id_nom_semestre_type_key',
  /** unique or primary key constraint on columns "ens_id_import" */
  EnseignementEnsIdImportKey = 'enseignement_ens_id_import_key',
  /** unique or primary key constraint on columns "id" */
  EnseignementPkey = 'enseignement_pkey'
}

/** input type for incrementing numeric columns in table "course" */
export type Course_Inc_Input = {
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "course" */
export type Course_Insert_Input = {
  coordinators?: InputMaybe<Coordinator_Arr_Rel_Insert_Input>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  enfants?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  ens_id_import?: InputMaybe<Scalars['String']['input']>;
  formation_id_import?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  priorities?: InputMaybe<Priority_Arr_Rel_Insert_Input>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<Program_Obj_Rel_Insert_Input>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  requests?: InputMaybe<Request_Arr_Rel_Insert_Input>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  track?: InputMaybe<Track_Obj_Rel_Insert_Input>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<Course_Type_Obj_Rel_Insert_Input>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<Year_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'course_max_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Int']['output']>;
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  ens_id_import?: Maybe<Scalars['String']['output']>;
  formation_id_import?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Int']['output']>;
  groups_effective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de l'enseignement. */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel) */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type?: Maybe<Scalars['String']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "course" */
export type Course_Max_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Order_By>;
  ens_id_import?: InputMaybe<Order_By>;
  formation_id_import?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel) */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'course_min_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Int']['output']>;
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  ens_id_import?: Maybe<Scalars['String']['output']>;
  formation_id_import?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Int']['output']>;
  groups_effective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de l'enseignement. */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel) */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type?: Maybe<Scalars['String']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "course" */
export type Course_Min_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Order_By>;
  ens_id_import?: InputMaybe<Order_By>;
  formation_id_import?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel) */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "course" */
export type Course_Mutation_Response = {
  __typename?: 'course_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type Course_Obj_Rel_Insert_Input = {
  data: Course_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Course_On_Conflict>;
};

/** on_conflict condition type for table "course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns?: Array<Course_Update_Column>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** Ordering options when selecting data from "course". */
export type Course_Order_By = {
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Order_By>;
  cycle_year?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  enfants_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  ens_id_import?: InputMaybe<Order_By>;
  formation_id_import?: InputMaybe<Order_By>;
  groups?: InputMaybe<Order_By>;
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  parent?: InputMaybe<Course_Order_By>;
  parent_id?: InputMaybe<Order_By>;
  priorities_aggregate?: InputMaybe<Priority_Aggregate_Order_By>;
  priority_rule?: InputMaybe<Order_By>;
  program?: InputMaybe<Program_Order_By>;
  program_id?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Order_By>;
  semester?: InputMaybe<Order_By>;
  total_hours_effective?: InputMaybe<Order_By>;
  track?: InputMaybe<Track_Order_By>;
  track_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeByType?: InputMaybe<Course_Type_Order_By>;
  visible?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  yearByYear?: InputMaybe<Year_Order_By>;
};

/** primary key columns input for table: course */
export type Course_Pk_Columns_Input = {
  /** L'identifiant unique de l'enseignement. */
  id: Scalars['Int']['input'];
};

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  CycleYear = 'cycle_year',
  /** column name */
  Description = 'description',
  /** column name */
  EnsIdImport = 'ens_id_import',
  /** column name */
  FormationIdImport = 'formation_id_import',
  /** column name */
  Groups = 'groups',
  /** column name */
  GroupsAdjusted = 'groups_adjusted',
  /** column name */
  GroupsEffective = 'groups_effective',
  /** column name */
  Hours = 'hours',
  /** column name */
  HoursAdjusted = 'hours_adjusted',
  /** column name */
  HoursEffective = 'hours_effective',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PriorityRule = 'priority_rule',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Semester = 'semester',
  /** column name */
  TrackId = 'track_id',
  /** column name */
  Type = 'type',
  /** column name */
  Visible = 'visible',
  /** column name */
  Year = 'year'
}

/** select "course_aggregate_bool_exp_bool_and_arguments_columns" columns of table "course" */
export enum Course_Select_Column_Course_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "course_aggregate_bool_exp_bool_or_arguments_columns" columns of table "course" */
export enum Course_Select_Column_Course_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "course" */
export type Course_Set_Input = {
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  ens_id_import?: InputMaybe<Scalars['String']['input']>;
  formation_id_import?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Course_Stddev_Fields = {
  __typename?: 'course_stddev_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "course" */
export type Course_Stddev_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Stddev_Pop_Fields = {
  __typename?: 'course_stddev_pop_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "course" */
export type Course_Stddev_Pop_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Stddev_Samp_Fields = {
  __typename?: 'course_stddev_samp_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "course" */
export type Course_Stddev_Samp_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "course" */
export type Course_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Course_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Course_Stream_Cursor_Value_Input = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Scalars['Int']['input']>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  ens_id_import?: InputMaybe<Scalars['String']['input']>;
  formation_id_import?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Scalars['Int']['input']>;
  groups_effective?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Scalars['Float']['input']>;
  hours_effective?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Course_Sum_Fields = {
  __typename?: 'course_sum_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Int']['output']>;
  groups_effective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Int']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "course" */
export type Course_Sum_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Course_Type = {
  __typename?: 'course_type';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Scalars['Float']['output'];
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  courses_aggregate: Course_Aggregate;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label: Scalars['String']['output'];
  /** La clé du type d'enseignement (unique). */
  value: Scalars['String']['output'];
};


/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Course_TypeCoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type Course_TypeCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** aggregated selection of "course_type" */
export type Course_Type_Aggregate = {
  __typename?: 'course_type_aggregate';
  aggregate?: Maybe<Course_Type_Aggregate_Fields>;
  nodes: Array<Course_Type>;
};

/** aggregate fields of "course_type" */
export type Course_Type_Aggregate_Fields = {
  __typename?: 'course_type_aggregate_fields';
  avg?: Maybe<Course_Type_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Course_Type_Max_Fields>;
  min?: Maybe<Course_Type_Min_Fields>;
  stddev?: Maybe<Course_Type_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Type_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Type_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Type_Sum_Fields>;
  var_pop?: Maybe<Course_Type_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Type_Var_Samp_Fields>;
  variance?: Maybe<Course_Type_Variance_Fields>;
};


/** aggregate fields of "course_type" */
export type Course_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Course_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Course_Type_Avg_Fields = {
  __typename?: 'course_type_avg_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "course_type". All fields are combined with a logical 'AND'. */
export type Course_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Course_Type_Bool_Exp>>;
  _not?: InputMaybe<Course_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Course_Type_Bool_Exp>>;
  coefficient?: InputMaybe<Float_Comparison_Exp>;
  courses?: InputMaybe<Course_Bool_Exp>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_type" */
export enum Course_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeEnseignementPkey = 'type_enseignement_pkey'
}

/** input type for incrementing numeric columns in table "course_type" */
export type Course_Type_Inc_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "course_type" */
export type Course_Type_Insert_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Course_Type_Max_Fields = {
  __typename?: 'course_type_max_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label?: Maybe<Scalars['String']['output']>;
  /** La clé du type d'enseignement (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Course_Type_Min_Fields = {
  __typename?: 'course_type_min_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label?: Maybe<Scalars['String']['output']>;
  /** La clé du type d'enseignement (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "course_type" */
export type Course_Type_Mutation_Response = {
  __typename?: 'course_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Course_Type>;
};

/** input type for inserting object relation for remote table "course_type" */
export type Course_Type_Obj_Rel_Insert_Input = {
  data: Course_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Course_Type_On_Conflict>;
};

/** on_conflict condition type for table "course_type" */
export type Course_Type_On_Conflict = {
  constraint: Course_Type_Constraint;
  update_columns?: Array<Course_Type_Update_Column>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "course_type". */
export type Course_Type_Order_By = {
  coefficient?: InputMaybe<Order_By>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: course_type */
export type Course_Type_Pk_Columns_Input = {
  /** La clé du type d'enseignement (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "course_type" */
export enum Course_Type_Select_Column {
  /** column name */
  Coefficient = 'coefficient',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "course_type" */
export type Course_Type_Set_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Course_Type_Stddev_Fields = {
  __typename?: 'course_type_stddev_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Course_Type_Stddev_Pop_Fields = {
  __typename?: 'course_type_stddev_pop_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Course_Type_Stddev_Samp_Fields = {
  __typename?: 'course_type_stddev_samp_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "course_type" */
export type Course_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Course_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Course_Type_Stream_Cursor_Value_Input = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Course_Type_Sum_Fields = {
  __typename?: 'course_type_sum_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course_type" */
export enum Course_Type_Update_Column {
  /** column name */
  Coefficient = 'coefficient',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

export type Course_Type_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Course_Type_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Course_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Course_Type_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Course_Type_Var_Pop_Fields = {
  __typename?: 'course_type_var_pop_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Course_Type_Var_Samp_Fields = {
  __typename?: 'course_type_var_samp_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Course_Type_Variance_Fields = {
  __typename?: 'course_type_variance_fields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course" */
export enum Course_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  EnsIdImport = 'ens_id_import',
  /** column name */
  FormationIdImport = 'formation_id_import',
  /** column name */
  Groups = 'groups',
  /** column name */
  GroupsAdjusted = 'groups_adjusted',
  /** column name */
  Hours = 'hours',
  /** column name */
  HoursAdjusted = 'hours_adjusted',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  PriorityRule = 'priority_rule',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Semester = 'semester',
  /** column name */
  TrackId = 'track_id',
  /** column name */
  Type = 'type',
  /** column name */
  Visible = 'visible',
  /** column name */
  Year = 'year'
}

export type Course_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Course_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Course_Set_Input>;
  /** filter the rows which have to be updated */
  where: Course_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Course_Var_Pop_Fields = {
  __typename?: 'course_var_pop_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "course" */
export type Course_Var_Pop_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Var_Samp_Fields = {
  __typename?: 'course_var_samp_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "course" */
export type Course_Var_Samp_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Variance_Fields = {
  __typename?: 'course_variance_fields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: Maybe<Scalars['Float']['output']>;
  groups_effective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: Maybe<Scalars['Float']['output']>;
  hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Le namebre d'hours d'course ouvertes par groupe multiplié par le namebre de groups ouverts. */
  total_hours_effective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "course" */
export type Course_Variance_Order_By = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycle_year?: InputMaybe<Order_By>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Order_By>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groups_adjusted?: InputMaybe<Order_By>;
  groups_effective?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Order_By>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hours_adjusted?: InputMaybe<Order_By>;
  hours_effective?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Order_By>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parent_id?: InputMaybe<Order_By>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priority_rule?: InputMaybe<Order_By>;
  /** L'identifiant de la mention de l'enseignement. */
  program_id?: InputMaybe<Order_By>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Order_By>;
  /** L'identifiant du parcours de l'enseignement. */
  track_id?: InputMaybe<Order_By>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Table contenant les différents cursus (licence, master, etc.). */
export type Degree = {
  __typename?: 'degree';
  /** L'identifiant unique du cursus. */
  id: Scalars['Int']['output'];
  /** Le nom du cursus (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  programs: Array<Program>;
  /** An aggregate relationship */
  programs_aggregate: Program_Aggregate;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différents cursus (licence, master, etc.). */
export type DegreeProgramsArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


/** Table contenant les différents cursus (licence, master, etc.). */
export type DegreePrograms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};

/** aggregated selection of "degree" */
export type Degree_Aggregate = {
  __typename?: 'degree_aggregate';
  aggregate?: Maybe<Degree_Aggregate_Fields>;
  nodes: Array<Degree>;
};

/** aggregate fields of "degree" */
export type Degree_Aggregate_Fields = {
  __typename?: 'degree_aggregate_fields';
  avg?: Maybe<Degree_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Degree_Max_Fields>;
  min?: Maybe<Degree_Min_Fields>;
  stddev?: Maybe<Degree_Stddev_Fields>;
  stddev_pop?: Maybe<Degree_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Degree_Stddev_Samp_Fields>;
  sum?: Maybe<Degree_Sum_Fields>;
  var_pop?: Maybe<Degree_Var_Pop_Fields>;
  var_samp?: Maybe<Degree_Var_Samp_Fields>;
  variance?: Maybe<Degree_Variance_Fields>;
};


/** aggregate fields of "degree" */
export type Degree_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Degree_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Degree_Avg_Fields = {
  __typename?: 'degree_avg_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "degree". All fields are combined with a logical 'AND'. */
export type Degree_Bool_Exp = {
  _and?: InputMaybe<Array<Degree_Bool_Exp>>;
  _not?: InputMaybe<Degree_Bool_Exp>;
  _or?: InputMaybe<Array<Degree_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_short?: InputMaybe<String_Comparison_Exp>;
  programs?: InputMaybe<Program_Bool_Exp>;
  programs_aggregate?: InputMaybe<Program_Aggregate_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "degree" */
export enum Degree_Constraint {
  /** unique or primary key constraint on columns "name" */
  CursusNomKey = 'cursus_nom_key',
  /** unique or primary key constraint on columns "id" */
  CursusPkey = 'cursus_pkey'
}

/** input type for incrementing numeric columns in table "degree" */
export type Degree_Inc_Input = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "degree" */
export type Degree_Insert_Input = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  programs?: InputMaybe<Program_Arr_Rel_Insert_Input>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Degree_Max_Fields = {
  __typename?: 'degree_max_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du cursus (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Degree_Min_Fields = {
  __typename?: 'degree_min_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du cursus (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "degree" */
export type Degree_Mutation_Response = {
  __typename?: 'degree_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Degree>;
};

/** input type for inserting object relation for remote table "degree" */
export type Degree_Obj_Rel_Insert_Input = {
  data: Degree_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Degree_On_Conflict>;
};

/** on_conflict condition type for table "degree" */
export type Degree_On_Conflict = {
  constraint: Degree_Constraint;
  update_columns?: Array<Degree_Update_Column>;
  where?: InputMaybe<Degree_Bool_Exp>;
};

/** Ordering options when selecting data from "degree". */
export type Degree_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_short?: InputMaybe<Order_By>;
  programs_aggregate?: InputMaybe<Program_Aggregate_Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: degree */
export type Degree_Pk_Columns_Input = {
  /** L'identifiant unique du cursus. */
  id: Scalars['Int']['input'];
};

/** select columns of table "degree" */
export enum Degree_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "degree" */
export type Degree_Set_Input = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Degree_Stddev_Fields = {
  __typename?: 'degree_stddev_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Degree_Stddev_Pop_Fields = {
  __typename?: 'degree_stddev_pop_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Degree_Stddev_Samp_Fields = {
  __typename?: 'degree_stddev_samp_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "degree" */
export type Degree_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Degree_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Degree_Stream_Cursor_Value_Input = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Degree_Sum_Fields = {
  __typename?: 'degree_sum_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "degree" */
export enum Degree_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  Visible = 'visible'
}

export type Degree_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Degree_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Degree_Set_Input>;
  /** filter the rows which have to be updated */
  where: Degree_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Degree_Var_Pop_Fields = {
  __typename?: 'degree_var_pop_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Degree_Var_Samp_Fields = {
  __typename?: 'degree_var_samp_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Degree_Variance_Fields = {
  __typename?: 'degree_variance_fields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "coordinator" */
  delete_coordinator?: Maybe<Coordinator_Mutation_Response>;
  /** delete single row from the table: "coordinator" */
  delete_coordinator_by_pk?: Maybe<Coordinator>;
  /** delete data from the table: "course" */
  delete_course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "course_type" */
  delete_course_type?: Maybe<Course_Type_Mutation_Response>;
  /** delete single row from the table: "course_type" */
  delete_course_type_by_pk?: Maybe<Course_Type>;
  /** delete data from the table: "degree" */
  delete_degree?: Maybe<Degree_Mutation_Response>;
  /** delete single row from the table: "degree" */
  delete_degree_by_pk?: Maybe<Degree>;
  /** delete data from the table: "phase" */
  delete_phase?: Maybe<Phase_Mutation_Response>;
  /** delete single row from the table: "phase" */
  delete_phase_by_pk?: Maybe<Phase>;
  /** delete data from the table: "position" */
  delete_position?: Maybe<Position_Mutation_Response>;
  /** delete single row from the table: "position" */
  delete_position_by_pk?: Maybe<Position>;
  /** delete data from the table: "priority" */
  delete_priority?: Maybe<Priority_Mutation_Response>;
  /** delete single row from the table: "priority" */
  delete_priority_by_pk?: Maybe<Priority>;
  /** delete data from the table: "program" */
  delete_program?: Maybe<Program_Mutation_Response>;
  /** delete single row from the table: "program" */
  delete_program_by_pk?: Maybe<Program>;
  /** delete data from the table: "request" */
  delete_request?: Maybe<Request_Mutation_Response>;
  /** delete single row from the table: "request" */
  delete_request_by_pk?: Maybe<Request>;
  /** delete data from the table: "request_type" */
  delete_request_type?: Maybe<Request_Type_Mutation_Response>;
  /** delete single row from the table: "request_type" */
  delete_request_type_by_pk?: Maybe<Request_Type>;
  /** delete data from the table: "service" */
  delete_service?: Maybe<Service_Mutation_Response>;
  /** delete single row from the table: "service" */
  delete_service_by_pk?: Maybe<Service>;
  /** delete data from the table: "service_modification" */
  delete_service_modification?: Maybe<Service_Modification_Mutation_Response>;
  /** delete single row from the table: "service_modification" */
  delete_service_modification_by_pk?: Maybe<Service_Modification>;
  /** delete data from the table: "service_modification_type" */
  delete_service_modification_type?: Maybe<Service_Modification_Type_Mutation_Response>;
  /** delete single row from the table: "service_modification_type" */
  delete_service_modification_type_by_pk?: Maybe<Service_Modification_Type>;
  /** delete data from the table: "teacher" */
  delete_teacher?: Maybe<Teacher_Mutation_Response>;
  /** delete single row from the table: "teacher" */
  delete_teacher_by_pk?: Maybe<Teacher>;
  /** delete data from the table: "track" */
  delete_track?: Maybe<Track_Mutation_Response>;
  /** delete single row from the table: "track" */
  delete_track_by_pk?: Maybe<Track>;
  /** delete data from the table: "year" */
  delete_year?: Maybe<Year_Mutation_Response>;
  /** delete single row from the table: "year" */
  delete_year_by_pk?: Maybe<Year>;
  /** insert data into the table: "coordinator" */
  insert_coordinator?: Maybe<Coordinator_Mutation_Response>;
  /** insert a single row into the table: "coordinator" */
  insert_coordinator_one?: Maybe<Coordinator>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "course_type" */
  insert_course_type?: Maybe<Course_Type_Mutation_Response>;
  /** insert a single row into the table: "course_type" */
  insert_course_type_one?: Maybe<Course_Type>;
  /** insert data into the table: "degree" */
  insert_degree?: Maybe<Degree_Mutation_Response>;
  /** insert a single row into the table: "degree" */
  insert_degree_one?: Maybe<Degree>;
  /** insert data into the table: "phase" */
  insert_phase?: Maybe<Phase_Mutation_Response>;
  /** insert a single row into the table: "phase" */
  insert_phase_one?: Maybe<Phase>;
  /** insert data into the table: "position" */
  insert_position?: Maybe<Position_Mutation_Response>;
  /** insert a single row into the table: "position" */
  insert_position_one?: Maybe<Position>;
  /** insert data into the table: "priority" */
  insert_priority?: Maybe<Priority_Mutation_Response>;
  /** insert a single row into the table: "priority" */
  insert_priority_one?: Maybe<Priority>;
  /** insert data into the table: "program" */
  insert_program?: Maybe<Program_Mutation_Response>;
  /** insert a single row into the table: "program" */
  insert_program_one?: Maybe<Program>;
  /** insert data into the table: "request" */
  insert_request?: Maybe<Request_Mutation_Response>;
  /** insert a single row into the table: "request" */
  insert_request_one?: Maybe<Request>;
  /** insert data into the table: "request_type" */
  insert_request_type?: Maybe<Request_Type_Mutation_Response>;
  /** insert a single row into the table: "request_type" */
  insert_request_type_one?: Maybe<Request_Type>;
  /** insert data into the table: "service" */
  insert_service?: Maybe<Service_Mutation_Response>;
  /** insert data into the table: "service_modification" */
  insert_service_modification?: Maybe<Service_Modification_Mutation_Response>;
  /** insert a single row into the table: "service_modification" */
  insert_service_modification_one?: Maybe<Service_Modification>;
  /** insert data into the table: "service_modification_type" */
  insert_service_modification_type?: Maybe<Service_Modification_Type_Mutation_Response>;
  /** insert a single row into the table: "service_modification_type" */
  insert_service_modification_type_one?: Maybe<Service_Modification_Type>;
  /** insert a single row into the table: "service" */
  insert_service_one?: Maybe<Service>;
  /** insert data into the table: "teacher" */
  insert_teacher?: Maybe<Teacher_Mutation_Response>;
  /** insert a single row into the table: "teacher" */
  insert_teacher_one?: Maybe<Teacher>;
  /** insert data into the table: "track" */
  insert_track?: Maybe<Track_Mutation_Response>;
  /** insert a single row into the table: "track" */
  insert_track_one?: Maybe<Track>;
  /** insert data into the table: "year" */
  insert_year?: Maybe<Year_Mutation_Response>;
  /** insert a single row into the table: "year" */
  insert_year_one?: Maybe<Year>;
  /** update data of the table: "coordinator" */
  update_coordinator?: Maybe<Coordinator_Mutation_Response>;
  /** update single row of the table: "coordinator" */
  update_coordinator_by_pk?: Maybe<Coordinator>;
  /** update multiples rows of table: "coordinator" */
  update_coordinator_many?: Maybe<Array<Maybe<Coordinator_Mutation_Response>>>;
  /** update data of the table: "course" */
  update_course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update multiples rows of table: "course" */
  update_course_many?: Maybe<Array<Maybe<Course_Mutation_Response>>>;
  /** update data of the table: "course_type" */
  update_course_type?: Maybe<Course_Type_Mutation_Response>;
  /** update single row of the table: "course_type" */
  update_course_type_by_pk?: Maybe<Course_Type>;
  /** update multiples rows of table: "course_type" */
  update_course_type_many?: Maybe<Array<Maybe<Course_Type_Mutation_Response>>>;
  /** update data of the table: "degree" */
  update_degree?: Maybe<Degree_Mutation_Response>;
  /** update single row of the table: "degree" */
  update_degree_by_pk?: Maybe<Degree>;
  /** update multiples rows of table: "degree" */
  update_degree_many?: Maybe<Array<Maybe<Degree_Mutation_Response>>>;
  /** update data of the table: "phase" */
  update_phase?: Maybe<Phase_Mutation_Response>;
  /** update single row of the table: "phase" */
  update_phase_by_pk?: Maybe<Phase>;
  /** update multiples rows of table: "phase" */
  update_phase_many?: Maybe<Array<Maybe<Phase_Mutation_Response>>>;
  /** update data of the table: "position" */
  update_position?: Maybe<Position_Mutation_Response>;
  /** update single row of the table: "position" */
  update_position_by_pk?: Maybe<Position>;
  /** update multiples rows of table: "position" */
  update_position_many?: Maybe<Array<Maybe<Position_Mutation_Response>>>;
  /** update data of the table: "priority" */
  update_priority?: Maybe<Priority_Mutation_Response>;
  /** update single row of the table: "priority" */
  update_priority_by_pk?: Maybe<Priority>;
  /** update multiples rows of table: "priority" */
  update_priority_many?: Maybe<Array<Maybe<Priority_Mutation_Response>>>;
  /** update data of the table: "program" */
  update_program?: Maybe<Program_Mutation_Response>;
  /** update single row of the table: "program" */
  update_program_by_pk?: Maybe<Program>;
  /** update multiples rows of table: "program" */
  update_program_many?: Maybe<Array<Maybe<Program_Mutation_Response>>>;
  /** update data of the table: "request" */
  update_request?: Maybe<Request_Mutation_Response>;
  /** update single row of the table: "request" */
  update_request_by_pk?: Maybe<Request>;
  /** update multiples rows of table: "request" */
  update_request_many?: Maybe<Array<Maybe<Request_Mutation_Response>>>;
  /** update data of the table: "request_type" */
  update_request_type?: Maybe<Request_Type_Mutation_Response>;
  /** update single row of the table: "request_type" */
  update_request_type_by_pk?: Maybe<Request_Type>;
  /** update multiples rows of table: "request_type" */
  update_request_type_many?: Maybe<Array<Maybe<Request_Type_Mutation_Response>>>;
  /** update data of the table: "service" */
  update_service?: Maybe<Service_Mutation_Response>;
  /** update single row of the table: "service" */
  update_service_by_pk?: Maybe<Service>;
  /** update multiples rows of table: "service" */
  update_service_many?: Maybe<Array<Maybe<Service_Mutation_Response>>>;
  /** update data of the table: "service_modification" */
  update_service_modification?: Maybe<Service_Modification_Mutation_Response>;
  /** update single row of the table: "service_modification" */
  update_service_modification_by_pk?: Maybe<Service_Modification>;
  /** update multiples rows of table: "service_modification" */
  update_service_modification_many?: Maybe<Array<Maybe<Service_Modification_Mutation_Response>>>;
  /** update data of the table: "service_modification_type" */
  update_service_modification_type?: Maybe<Service_Modification_Type_Mutation_Response>;
  /** update single row of the table: "service_modification_type" */
  update_service_modification_type_by_pk?: Maybe<Service_Modification_Type>;
  /** update multiples rows of table: "service_modification_type" */
  update_service_modification_type_many?: Maybe<Array<Maybe<Service_Modification_Type_Mutation_Response>>>;
  /** update data of the table: "teacher" */
  update_teacher?: Maybe<Teacher_Mutation_Response>;
  /** update single row of the table: "teacher" */
  update_teacher_by_pk?: Maybe<Teacher>;
  /** update multiples rows of table: "teacher" */
  update_teacher_many?: Maybe<Array<Maybe<Teacher_Mutation_Response>>>;
  /** update data of the table: "track" */
  update_track?: Maybe<Track_Mutation_Response>;
  /** update single row of the table: "track" */
  update_track_by_pk?: Maybe<Track>;
  /** update multiples rows of table: "track" */
  update_track_many?: Maybe<Array<Maybe<Track_Mutation_Response>>>;
  /** update data of the table: "year" */
  update_year?: Maybe<Year_Mutation_Response>;
  /** update single row of the table: "year" */
  update_year_by_pk?: Maybe<Year>;
  /** update multiples rows of table: "year" */
  update_year_many?: Maybe<Array<Maybe<Year_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CoordinatorArgs = {
  where: Coordinator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Coordinator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Course_TypeArgs = {
  where: Course_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_DegreeArgs = {
  where: Degree_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Degree_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PhaseArgs = {
  where: Phase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Phase_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PositionArgs = {
  where: Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Position_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PriorityArgs = {
  where: Priority_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Priority_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProgramArgs = {
  where: Program_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Program_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RequestArgs = {
  where: Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Request_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Request_TypeArgs = {
  where: Request_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Request_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ServiceArgs = {
  where: Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_ModificationArgs = {
  where: Service_Modification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Modification_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Service_Modification_TypeArgs = {
  where: Service_Modification_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Service_Modification_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TeacherArgs = {
  where: Teacher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teacher_By_PkArgs = {
  uid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TrackArgs = {
  where: Track_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Track_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_YearArgs = {
  where: Year_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Year_By_PkArgs = {
  value: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CoordinatorArgs = {
  objects: Array<Coordinator_Insert_Input>;
  on_conflict?: InputMaybe<Coordinator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Coordinator_OneArgs = {
  object: Coordinator_Insert_Input;
  on_conflict?: InputMaybe<Coordinator_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: InputMaybe<Course_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_TypeArgs = {
  objects: Array<Course_Type_Insert_Input>;
  on_conflict?: InputMaybe<Course_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Type_OneArgs = {
  object: Course_Type_Insert_Input;
  on_conflict?: InputMaybe<Course_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DegreeArgs = {
  objects: Array<Degree_Insert_Input>;
  on_conflict?: InputMaybe<Degree_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Degree_OneArgs = {
  object: Degree_Insert_Input;
  on_conflict?: InputMaybe<Degree_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PhaseArgs = {
  objects: Array<Phase_Insert_Input>;
  on_conflict?: InputMaybe<Phase_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Phase_OneArgs = {
  object: Phase_Insert_Input;
  on_conflict?: InputMaybe<Phase_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PositionArgs = {
  objects: Array<Position_Insert_Input>;
  on_conflict?: InputMaybe<Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Position_OneArgs = {
  object: Position_Insert_Input;
  on_conflict?: InputMaybe<Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PriorityArgs = {
  objects: Array<Priority_Insert_Input>;
  on_conflict?: InputMaybe<Priority_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Priority_OneArgs = {
  object: Priority_Insert_Input;
  on_conflict?: InputMaybe<Priority_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProgramArgs = {
  objects: Array<Program_Insert_Input>;
  on_conflict?: InputMaybe<Program_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Program_OneArgs = {
  object: Program_Insert_Input;
  on_conflict?: InputMaybe<Program_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RequestArgs = {
  objects: Array<Request_Insert_Input>;
  on_conflict?: InputMaybe<Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_OneArgs = {
  object: Request_Insert_Input;
  on_conflict?: InputMaybe<Request_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_TypeArgs = {
  objects: Array<Request_Type_Insert_Input>;
  on_conflict?: InputMaybe<Request_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Request_Type_OneArgs = {
  object: Request_Type_Insert_Input;
  on_conflict?: InputMaybe<Request_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ServiceArgs = {
  objects: Array<Service_Insert_Input>;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_ModificationArgs = {
  objects: Array<Service_Modification_Insert_Input>;
  on_conflict?: InputMaybe<Service_Modification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Modification_OneArgs = {
  object: Service_Modification_Insert_Input;
  on_conflict?: InputMaybe<Service_Modification_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Modification_TypeArgs = {
  objects: Array<Service_Modification_Type_Insert_Input>;
  on_conflict?: InputMaybe<Service_Modification_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_Modification_Type_OneArgs = {
  object: Service_Modification_Type_Insert_Input;
  on_conflict?: InputMaybe<Service_Modification_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Service_OneArgs = {
  object: Service_Insert_Input;
  on_conflict?: InputMaybe<Service_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeacherArgs = {
  objects: Array<Teacher_Insert_Input>;
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teacher_OneArgs = {
  object: Teacher_Insert_Input;
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TrackArgs = {
  objects: Array<Track_Insert_Input>;
  on_conflict?: InputMaybe<Track_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Track_OneArgs = {
  object: Track_Insert_Input;
  on_conflict?: InputMaybe<Track_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_YearArgs = {
  objects: Array<Year_Insert_Input>;
  on_conflict?: InputMaybe<Year_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Year_OneArgs = {
  object: Year_Insert_Input;
  on_conflict?: InputMaybe<Year_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CoordinatorArgs = {
  _inc?: InputMaybe<Coordinator_Inc_Input>;
  _set?: InputMaybe<Coordinator_Set_Input>;
  where: Coordinator_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Coordinator_By_PkArgs = {
  _inc?: InputMaybe<Coordinator_Inc_Input>;
  _set?: InputMaybe<Coordinator_Set_Input>;
  pk_columns: Coordinator_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Coordinator_ManyArgs = {
  updates: Array<Coordinator_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _inc?: InputMaybe<Course_Inc_Input>;
  _set?: InputMaybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_ManyArgs = {
  updates: Array<Course_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Course_TypeArgs = {
  _inc?: InputMaybe<Course_Type_Inc_Input>;
  _set?: InputMaybe<Course_Type_Set_Input>;
  where: Course_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Type_By_PkArgs = {
  _inc?: InputMaybe<Course_Type_Inc_Input>;
  _set?: InputMaybe<Course_Type_Set_Input>;
  pk_columns: Course_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Type_ManyArgs = {
  updates: Array<Course_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DegreeArgs = {
  _inc?: InputMaybe<Degree_Inc_Input>;
  _set?: InputMaybe<Degree_Set_Input>;
  where: Degree_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Degree_By_PkArgs = {
  _inc?: InputMaybe<Degree_Inc_Input>;
  _set?: InputMaybe<Degree_Set_Input>;
  pk_columns: Degree_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Degree_ManyArgs = {
  updates: Array<Degree_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PhaseArgs = {
  _set?: InputMaybe<Phase_Set_Input>;
  where: Phase_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Phase_By_PkArgs = {
  _set?: InputMaybe<Phase_Set_Input>;
  pk_columns: Phase_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Phase_ManyArgs = {
  updates: Array<Phase_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PositionArgs = {
  _inc?: InputMaybe<Position_Inc_Input>;
  _set?: InputMaybe<Position_Set_Input>;
  where: Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Position_By_PkArgs = {
  _inc?: InputMaybe<Position_Inc_Input>;
  _set?: InputMaybe<Position_Set_Input>;
  pk_columns: Position_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Position_ManyArgs = {
  updates: Array<Position_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PriorityArgs = {
  _inc?: InputMaybe<Priority_Inc_Input>;
  _set?: InputMaybe<Priority_Set_Input>;
  where: Priority_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Priority_By_PkArgs = {
  _inc?: InputMaybe<Priority_Inc_Input>;
  _set?: InputMaybe<Priority_Set_Input>;
  pk_columns: Priority_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Priority_ManyArgs = {
  updates: Array<Priority_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProgramArgs = {
  _inc?: InputMaybe<Program_Inc_Input>;
  _set?: InputMaybe<Program_Set_Input>;
  where: Program_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Program_By_PkArgs = {
  _inc?: InputMaybe<Program_Inc_Input>;
  _set?: InputMaybe<Program_Set_Input>;
  pk_columns: Program_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Program_ManyArgs = {
  updates: Array<Program_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RequestArgs = {
  _inc?: InputMaybe<Request_Inc_Input>;
  _set?: InputMaybe<Request_Set_Input>;
  where: Request_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Request_By_PkArgs = {
  _inc?: InputMaybe<Request_Inc_Input>;
  _set?: InputMaybe<Request_Set_Input>;
  pk_columns: Request_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Request_ManyArgs = {
  updates: Array<Request_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Request_TypeArgs = {
  _set?: InputMaybe<Request_Type_Set_Input>;
  where: Request_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Request_Type_By_PkArgs = {
  _set?: InputMaybe<Request_Type_Set_Input>;
  pk_columns: Request_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Request_Type_ManyArgs = {
  updates: Array<Request_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ServiceArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  where: Service_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_By_PkArgs = {
  _inc?: InputMaybe<Service_Inc_Input>;
  _set?: InputMaybe<Service_Set_Input>;
  pk_columns: Service_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_ManyArgs = {
  updates: Array<Service_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Service_ModificationArgs = {
  _inc?: InputMaybe<Service_Modification_Inc_Input>;
  _set?: InputMaybe<Service_Modification_Set_Input>;
  where: Service_Modification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Modification_By_PkArgs = {
  _inc?: InputMaybe<Service_Modification_Inc_Input>;
  _set?: InputMaybe<Service_Modification_Set_Input>;
  pk_columns: Service_Modification_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Modification_ManyArgs = {
  updates: Array<Service_Modification_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Modification_TypeArgs = {
  _set?: InputMaybe<Service_Modification_Type_Set_Input>;
  where: Service_Modification_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Modification_Type_By_PkArgs = {
  _set?: InputMaybe<Service_Modification_Type_Set_Input>;
  pk_columns: Service_Modification_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Service_Modification_Type_ManyArgs = {
  updates: Array<Service_Modification_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeacherArgs = {
  _inc?: InputMaybe<Teacher_Inc_Input>;
  _set?: InputMaybe<Teacher_Set_Input>;
  where: Teacher_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teacher_By_PkArgs = {
  _inc?: InputMaybe<Teacher_Inc_Input>;
  _set?: InputMaybe<Teacher_Set_Input>;
  pk_columns: Teacher_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teacher_ManyArgs = {
  updates: Array<Teacher_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TrackArgs = {
  _inc?: InputMaybe<Track_Inc_Input>;
  _set?: InputMaybe<Track_Set_Input>;
  where: Track_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Track_By_PkArgs = {
  _inc?: InputMaybe<Track_Inc_Input>;
  _set?: InputMaybe<Track_Set_Input>;
  pk_columns: Track_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Track_ManyArgs = {
  updates: Array<Track_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_YearArgs = {
  _inc?: InputMaybe<Year_Inc_Input>;
  _set?: InputMaybe<Year_Set_Input>;
  where: Year_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Year_By_PkArgs = {
  _inc?: InputMaybe<Year_Inc_Input>;
  _set?: InputMaybe<Year_Set_Input>;
  pk_columns: Year_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Year_ManyArgs = {
  updates: Array<Year_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Table containing the different phases: requests, assignments, results, and shutdown. */
export type Phase = {
  __typename?: 'phase';
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
  value: Scalars['String']['output'];
};

/** aggregated selection of "phase" */
export type Phase_Aggregate = {
  __typename?: 'phase_aggregate';
  aggregate?: Maybe<Phase_Aggregate_Fields>;
  nodes: Array<Phase>;
};

/** aggregate fields of "phase" */
export type Phase_Aggregate_Fields = {
  __typename?: 'phase_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Phase_Max_Fields>;
  min?: Maybe<Phase_Min_Fields>;
};


/** aggregate fields of "phase" */
export type Phase_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Phase_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "phase". All fields are combined with a logical 'AND'. */
export type Phase_Bool_Exp = {
  _and?: InputMaybe<Array<Phase_Bool_Exp>>;
  _not?: InputMaybe<Phase_Bool_Exp>;
  _or?: InputMaybe<Array<Phase_Bool_Exp>>;
  current?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "phase" */
export enum Phase_Constraint {
  /** unique or primary key constraint on columns "current" */
  PhaseEnCoursKey = 'phase_en_cours_key',
  /** unique or primary key constraint on columns "value" */
  PhasePkey = 'phase_pkey'
}

/** input type for inserting data into table "phase" */
export type Phase_Insert_Input = {
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Phase_Max_Fields = {
  __typename?: 'phase_max_fields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Phase_Min_Fields = {
  __typename?: 'phase_min_fields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "phase" */
export type Phase_Mutation_Response = {
  __typename?: 'phase_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Phase>;
};

/** on_conflict condition type for table "phase" */
export type Phase_On_Conflict = {
  constraint: Phase_Constraint;
  update_columns?: Array<Phase_Update_Column>;
  where?: InputMaybe<Phase_Bool_Exp>;
};

/** Ordering options when selecting data from "phase". */
export type Phase_Order_By = {
  current?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: phase */
export type Phase_Pk_Columns_Input = {
  /** Phase identifier. */
  value: Scalars['String']['input'];
};

/** select columns of table "phase" */
export enum Phase_Select_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "phase" */
export type Phase_Set_Input = {
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "phase" */
export type Phase_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Phase_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Phase_Stream_Cursor_Value_Input = {
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "phase" */
export enum Phase_Update_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Phase_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Phase_Set_Input>;
  /** filter the rows which have to be updated */
  where: Phase_Bool_Exp;
};

/** columns and relationships of "position" */
export type Position = {
  __typename?: 'position';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** An array relationship */
  teachers: Array<Teacher>;
  /** An aggregate relationship */
  teachers_aggregate: Teacher_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "position" */
export type PositionTeachersArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


/** columns and relationships of "position" */
export type PositionTeachers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};

/** aggregated selection of "position" */
export type Position_Aggregate = {
  __typename?: 'position_aggregate';
  aggregate?: Maybe<Position_Aggregate_Fields>;
  nodes: Array<Position>;
};

/** aggregate fields of "position" */
export type Position_Aggregate_Fields = {
  __typename?: 'position_aggregate_fields';
  avg?: Maybe<Position_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Position_Max_Fields>;
  min?: Maybe<Position_Min_Fields>;
  stddev?: Maybe<Position_Stddev_Fields>;
  stddev_pop?: Maybe<Position_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Position_Stddev_Samp_Fields>;
  sum?: Maybe<Position_Sum_Fields>;
  var_pop?: Maybe<Position_Var_Pop_Fields>;
  var_samp?: Maybe<Position_Var_Samp_Fields>;
  variance?: Maybe<Position_Variance_Fields>;
};


/** aggregate fields of "position" */
export type Position_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Position_Avg_Fields = {
  __typename?: 'position_avg_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type Position_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Bool_Exp>>;
  _not?: InputMaybe<Position_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Bool_Exp>>;
  base_service_hours?: InputMaybe<Float_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  teachers?: InputMaybe<Teacher_Bool_Exp>;
  teachers_aggregate?: InputMaybe<Teacher_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "position" */
export enum Position_Constraint {
  /** unique or primary key constraint on columns "value" */
  FonctionPkey = 'fonction_pkey'
}

/** input type for incrementing numeric columns in table "position" */
export type Position_Inc_Input = {
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "position" */
export type Position_Insert_Input = {
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  teachers?: InputMaybe<Teacher_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Position_Max_Fields = {
  __typename?: 'position_max_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Position_Min_Fields = {
  __typename?: 'position_min_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "position" */
export type Position_Mutation_Response = {
  __typename?: 'position_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Position>;
};

/** input type for inserting object relation for remote table "position" */
export type Position_Obj_Rel_Insert_Input = {
  data: Position_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Position_On_Conflict>;
};

/** on_conflict condition type for table "position" */
export type Position_On_Conflict = {
  constraint: Position_Constraint;
  update_columns?: Array<Position_Update_Column>;
  where?: InputMaybe<Position_Bool_Exp>;
};

/** Ordering options when selecting data from "position". */
export type Position_Order_By = {
  base_service_hours?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  teachers_aggregate?: InputMaybe<Teacher_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: position */
export type Position_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "position" */
export enum Position_Select_Column {
  /** column name */
  BaseServiceHours = 'base_service_hours',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "position" */
export type Position_Set_Input = {
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Position_Stddev_Fields = {
  __typename?: 'position_stddev_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Position_Stddev_Pop_Fields = {
  __typename?: 'position_stddev_pop_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Position_Stddev_Samp_Fields = {
  __typename?: 'position_stddev_samp_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "position" */
export type Position_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Stream_Cursor_Value_Input = {
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Position_Sum_Fields = {
  __typename?: 'position_sum_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "position" */
export enum Position_Update_Column {
  /** column name */
  BaseServiceHours = 'base_service_hours',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

export type Position_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Position_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Position_Var_Pop_Fields = {
  __typename?: 'position_var_pop_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Position_Var_Samp_Fields = {
  __typename?: 'position_var_samp_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Position_Variance_Fields = {
  __typename?: 'position_variance_fields';
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** Table containing information about teacher seniority and priority for courses. */
export type Priority = {
  __typename?: 'priority';
  /** An object relationship */
  course: Course;
  /** Associated course ID. */
  course_id: Scalars['Int']['output'];
  /** Unique identifier for the priority entry. */
  id: Scalars['Int']['output'];
  /** Indicates if the teacher has priority for this course. */
  is_priority?: Maybe<Scalars['Boolean']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  service: Service;
  /** Associated service ID. */
  service_id: Scalars['Int']['output'];
};

/** aggregated selection of "priority" */
export type Priority_Aggregate = {
  __typename?: 'priority_aggregate';
  aggregate?: Maybe<Priority_Aggregate_Fields>;
  nodes: Array<Priority>;
};

export type Priority_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Priority_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Priority_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Priority_Aggregate_Bool_Exp_Count>;
};

export type Priority_Aggregate_Bool_Exp_Bool_And = {
  arguments: Priority_Select_Column_Priority_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Priority_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Priority_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Priority_Select_Column_Priority_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Priority_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Priority_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Priority_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Priority_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "priority" */
export type Priority_Aggregate_Fields = {
  __typename?: 'priority_aggregate_fields';
  avg?: Maybe<Priority_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Priority_Max_Fields>;
  min?: Maybe<Priority_Min_Fields>;
  stddev?: Maybe<Priority_Stddev_Fields>;
  stddev_pop?: Maybe<Priority_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Priority_Stddev_Samp_Fields>;
  sum?: Maybe<Priority_Sum_Fields>;
  var_pop?: Maybe<Priority_Var_Pop_Fields>;
  var_samp?: Maybe<Priority_Var_Samp_Fields>;
  variance?: Maybe<Priority_Variance_Fields>;
};


/** aggregate fields of "priority" */
export type Priority_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Priority_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "priority" */
export type Priority_Aggregate_Order_By = {
  avg?: InputMaybe<Priority_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Priority_Max_Order_By>;
  min?: InputMaybe<Priority_Min_Order_By>;
  stddev?: InputMaybe<Priority_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Priority_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Priority_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Priority_Sum_Order_By>;
  var_pop?: InputMaybe<Priority_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Priority_Var_Samp_Order_By>;
  variance?: InputMaybe<Priority_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "priority" */
export type Priority_Arr_Rel_Insert_Input = {
  data: Array<Priority_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Priority_On_Conflict>;
};

/** aggregate avg on columns */
export type Priority_Avg_Fields = {
  __typename?: 'priority_avg_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "priority" */
export type Priority_Avg_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "priority". All fields are combined with a logical 'AND'. */
export type Priority_Bool_Exp = {
  _and?: InputMaybe<Array<Priority_Bool_Exp>>;
  _not?: InputMaybe<Priority_Bool_Exp>;
  _or?: InputMaybe<Array<Priority_Bool_Exp>>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_priority?: InputMaybe<Boolean_Comparison_Exp>;
  seniority?: InputMaybe<Int_Comparison_Exp>;
  service?: InputMaybe<Service_Bool_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "priority" */
export enum Priority_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrioritePkey = 'priorite_pkey',
  /** unique or primary key constraint on columns "course_id", "service_id" */
  PrioriteServiceIdEnsIdKey = 'priorite_service_id_ens_id_key'
}

/** input type for incrementing numeric columns in table "priority" */
export type Priority_Inc_Input = {
  /** Associated course ID. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "priority" */
export type Priority_Insert_Input = {
  course?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  /** Associated course ID. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  is_priority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<Service_Obj_Rel_Insert_Input>;
  /** Associated service ID. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Priority_Max_Fields = {
  __typename?: 'priority_max_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "priority" */
export type Priority_Max_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Priority_Min_Fields = {
  __typename?: 'priority_min_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "priority" */
export type Priority_Min_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "priority" */
export type Priority_Mutation_Response = {
  __typename?: 'priority_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Priority>;
};

/** on_conflict condition type for table "priority" */
export type Priority_On_Conflict = {
  constraint: Priority_Constraint;
  update_columns?: Array<Priority_Update_Column>;
  where?: InputMaybe<Priority_Bool_Exp>;
};

/** Ordering options when selecting data from "priority". */
export type Priority_Order_By = {
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_priority?: InputMaybe<Order_By>;
  seniority?: InputMaybe<Order_By>;
  service?: InputMaybe<Service_Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: priority */
export type Priority_Pk_Columns_Input = {
  /** Unique identifier for the priority entry. */
  id: Scalars['Int']['input'];
};

/** select columns of table "priority" */
export enum Priority_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'is_priority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'service_id'
}

/** select "priority_aggregate_bool_exp_bool_and_arguments_columns" columns of table "priority" */
export enum Priority_Select_Column_Priority_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsPriority = 'is_priority'
}

/** select "priority_aggregate_bool_exp_bool_or_arguments_columns" columns of table "priority" */
export enum Priority_Select_Column_Priority_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsPriority = 'is_priority'
}

/** input type for updating data in table "priority" */
export type Priority_Set_Input = {
  /** Associated course ID. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  is_priority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Priority_Stddev_Fields = {
  __typename?: 'priority_stddev_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "priority" */
export type Priority_Stddev_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Priority_Stddev_Pop_Fields = {
  __typename?: 'priority_stddev_pop_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "priority" */
export type Priority_Stddev_Pop_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Priority_Stddev_Samp_Fields = {
  __typename?: 'priority_stddev_samp_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "priority" */
export type Priority_Stddev_Samp_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "priority" */
export type Priority_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Priority_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Priority_Stream_Cursor_Value_Input = {
  /** Associated course ID. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  is_priority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Priority_Sum_Fields = {
  __typename?: 'priority_sum_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "priority" */
export type Priority_Sum_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** update columns of table "priority" */
export enum Priority_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'is_priority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'service_id'
}

export type Priority_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Priority_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Priority_Set_Input>;
  /** filter the rows which have to be updated */
  where: Priority_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Priority_Var_Pop_Fields = {
  __typename?: 'priority_var_pop_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "priority" */
export type Priority_Var_Pop_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Priority_Var_Samp_Fields = {
  __typename?: 'priority_var_samp_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "priority" */
export type Priority_Var_Samp_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Priority_Variance_Fields = {
  __typename?: 'priority_variance_fields';
  /** Associated course ID. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "priority" */
export type Priority_Variance_Order_By = {
  /** Associated course ID. */
  course_id?: InputMaybe<Order_By>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Order_By>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Order_By>;
  /** Associated service ID. */
  service_id?: InputMaybe<Order_By>;
};

/** Table contenant les différentes mentions. */
export type Program = {
  __typename?: 'program';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinators_aggregate: Coordinator_Aggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  courses_aggregate: Course_Aggregate;
  /** An object relationship */
  degree: Degree;
  degree_id: Scalars['Int']['output'];
  /** L'identifiant unique de la mention. */
  id: Scalars['Int']['output'];
  /** Le nom de la mention (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tracks: Array<Track>;
  /** An aggregate relationship */
  tracks_aggregate: Track_Aggregate;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différentes mentions. */
export type ProgramCoordinatorsArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCoordinators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différentes mentions. */
export type ProgramTracksArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


/** Table contenant les différentes mentions. */
export type ProgramTracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};

/** aggregated selection of "program" */
export type Program_Aggregate = {
  __typename?: 'program_aggregate';
  aggregate?: Maybe<Program_Aggregate_Fields>;
  nodes: Array<Program>;
};

export type Program_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Program_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Program_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Program_Aggregate_Bool_Exp_Count>;
};

export type Program_Aggregate_Bool_Exp_Bool_And = {
  arguments: Program_Select_Column_Program_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Program_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Program_Select_Column_Program_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Program_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Program_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Program_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "program" */
export type Program_Aggregate_Fields = {
  __typename?: 'program_aggregate_fields';
  avg?: Maybe<Program_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Program_Max_Fields>;
  min?: Maybe<Program_Min_Fields>;
  stddev?: Maybe<Program_Stddev_Fields>;
  stddev_pop?: Maybe<Program_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Program_Stddev_Samp_Fields>;
  sum?: Maybe<Program_Sum_Fields>;
  var_pop?: Maybe<Program_Var_Pop_Fields>;
  var_samp?: Maybe<Program_Var_Samp_Fields>;
  variance?: Maybe<Program_Variance_Fields>;
};


/** aggregate fields of "program" */
export type Program_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Program_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program" */
export type Program_Aggregate_Order_By = {
  avg?: InputMaybe<Program_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Program_Max_Order_By>;
  min?: InputMaybe<Program_Min_Order_By>;
  stddev?: InputMaybe<Program_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Program_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Program_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Program_Sum_Order_By>;
  var_pop?: InputMaybe<Program_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Program_Var_Samp_Order_By>;
  variance?: InputMaybe<Program_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "program" */
export type Program_Arr_Rel_Insert_Input = {
  data: Array<Program_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_On_Conflict>;
};

/** aggregate avg on columns */
export type Program_Avg_Fields = {
  __typename?: 'program_avg_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "program" */
export type Program_Avg_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type Program_Bool_Exp = {
  _and?: InputMaybe<Array<Program_Bool_Exp>>;
  _not?: InputMaybe<Program_Bool_Exp>;
  _or?: InputMaybe<Array<Program_Bool_Exp>>;
  coordinators?: InputMaybe<Coordinator_Bool_Exp>;
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Bool_Exp>;
  courses?: InputMaybe<Course_Bool_Exp>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  degree?: InputMaybe<Degree_Bool_Exp>;
  degree_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_short?: InputMaybe<String_Comparison_Exp>;
  nom_import?: InputMaybe<String_Comparison_Exp>;
  tracks?: InputMaybe<Track_Bool_Exp>;
  tracks_aggregate?: InputMaybe<Track_Aggregate_Bool_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "program" */
export enum Program_Constraint {
  /** unique or primary key constraint on columns "degree_id", "name" */
  MentionCursusIdNomKey = 'mention_cursus_id_nom_key',
  /** unique or primary key constraint on columns "id" */
  MentionPkey = 'mention_pkey'
}

/** input type for incrementing numeric columns in table "program" */
export type Program_Inc_Input = {
  degree_id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "program" */
export type Program_Insert_Input = {
  coordinators?: InputMaybe<Coordinator_Arr_Rel_Insert_Input>;
  courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  degree?: InputMaybe<Degree_Obj_Rel_Insert_Input>;
  degree_id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  tracks?: InputMaybe<Track_Arr_Rel_Insert_Input>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Program_Max_Fields = {
  __typename?: 'program_max_fields';
  degree_id?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de la mention (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "program" */
export type Program_Max_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Program_Min_Fields = {
  __typename?: 'program_min_fields';
  degree_id?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de la mention (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "program" */
export type Program_Min_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "program" */
export type Program_Mutation_Response = {
  __typename?: 'program_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program>;
};

/** input type for inserting object relation for remote table "program" */
export type Program_Obj_Rel_Insert_Input = {
  data: Program_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Program_On_Conflict>;
};

/** on_conflict condition type for table "program" */
export type Program_On_Conflict = {
  constraint: Program_Constraint;
  update_columns?: Array<Program_Update_Column>;
  where?: InputMaybe<Program_Bool_Exp>;
};

/** Ordering options when selecting data from "program". */
export type Program_Order_By = {
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Order_By>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  degree?: InputMaybe<Degree_Order_By>;
  degree_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  tracks_aggregate?: InputMaybe<Track_Aggregate_Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: program */
export type Program_Pk_Columns_Input = {
  /** L'identifiant unique de la mention. */
  id: Scalars['Int']['input'];
};

/** select columns of table "program" */
export enum Program_Select_Column {
  /** column name */
  DegreeId = 'degree_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  Visible = 'visible'
}

/** select "program_aggregate_bool_exp_bool_and_arguments_columns" columns of table "program" */
export enum Program_Select_Column_Program_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "program_aggregate_bool_exp_bool_or_arguments_columns" columns of table "program" */
export enum Program_Select_Column_Program_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "program" */
export type Program_Set_Input = {
  degree_id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Program_Stddev_Fields = {
  __typename?: 'program_stddev_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "program" */
export type Program_Stddev_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Program_Stddev_Pop_Fields = {
  __typename?: 'program_stddev_pop_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "program" */
export type Program_Stddev_Pop_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Program_Stddev_Samp_Fields = {
  __typename?: 'program_stddev_samp_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "program" */
export type Program_Stddev_Samp_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "program" */
export type Program_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Program_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Program_Stream_Cursor_Value_Input = {
  degree_id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Program_Sum_Fields = {
  __typename?: 'program_sum_fields';
  degree_id?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "program" */
export type Program_Sum_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** update columns of table "program" */
export enum Program_Update_Column {
  /** column name */
  DegreeId = 'degree_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  Visible = 'visible'
}

export type Program_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Program_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Program_Set_Input>;
  /** filter the rows which have to be updated */
  where: Program_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Program_Var_Pop_Fields = {
  __typename?: 'program_var_pop_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "program" */
export type Program_Var_Pop_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Program_Var_Samp_Fields = {
  __typename?: 'program_var_samp_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "program" */
export type Program_Var_Samp_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Program_Variance_Fields = {
  __typename?: 'program_variance_fields';
  degree_id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "program" */
export type Program_Variance_Order_By = {
  degree_id?: InputMaybe<Order_By>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "coordinator" */
  coordinator: Array<Coordinator>;
  /** fetch aggregated fields from the table: "coordinator" */
  coordinator_aggregate: Coordinator_Aggregate;
  /** fetch data from the table: "coordinator" using primary key columns */
  coordinator_by_pk?: Maybe<Coordinator>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table: "course_type" */
  course_type: Array<Course_Type>;
  /** fetch aggregated fields from the table: "course_type" */
  course_type_aggregate: Course_Type_Aggregate;
  /** fetch data from the table: "course_type" using primary key columns */
  course_type_by_pk?: Maybe<Course_Type>;
  /** fetch data from the table: "degree" */
  degree: Array<Degree>;
  /** fetch aggregated fields from the table: "degree" */
  degree_aggregate: Degree_Aggregate;
  /** fetch data from the table: "degree" using primary key columns */
  degree_by_pk?: Maybe<Degree>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phase_aggregate: Phase_Aggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phase_by_pk?: Maybe<Phase>;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: Position_Aggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<Position>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  priority_aggregate: Priority_Aggregate;
  /** fetch data from the table: "priority" using primary key columns */
  priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  program_aggregate: Program_Aggregate;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
  /** fetch data from the table: "request" */
  request: Array<Request>;
  /** fetch aggregated fields from the table: "request" */
  request_aggregate: Request_Aggregate;
  /** fetch data from the table: "request" using primary key columns */
  request_by_pk?: Maybe<Request>;
  /** fetch data from the table: "request_type" */
  request_type: Array<Request_Type>;
  /** fetch aggregated fields from the table: "request_type" */
  request_type_aggregate: Request_Type_Aggregate;
  /** fetch data from the table: "request_type" using primary key columns */
  request_type_by_pk?: Maybe<Request_Type>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk?: Maybe<Service>;
  /** fetch data from the table: "service_modification" */
  service_modification: Array<Service_Modification>;
  /** fetch aggregated fields from the table: "service_modification" */
  service_modification_aggregate: Service_Modification_Aggregate;
  /** fetch data from the table: "service_modification" using primary key columns */
  service_modification_by_pk?: Maybe<Service_Modification>;
  /** fetch data from the table: "service_modification_type" */
  service_modification_type: Array<Service_Modification_Type>;
  /** fetch aggregated fields from the table: "service_modification_type" */
  service_modification_type_aggregate: Service_Modification_Type_Aggregate;
  /** fetch data from the table: "service_modification_type" using primary key columns */
  service_modification_type_by_pk?: Maybe<Service_Modification_Type>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: Teacher_Aggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
  /** fetch data from the table: "track" */
  track: Array<Track>;
  /** fetch aggregated fields from the table: "track" */
  track_aggregate: Track_Aggregate;
  /** fetch data from the table: "track" using primary key columns */
  track_by_pk?: Maybe<Track>;
  /** fetch data from the table: "year" */
  year: Array<Year>;
  /** fetch aggregated fields from the table: "year" */
  year_aggregate: Year_Aggregate;
  /** fetch data from the table: "year" using primary key columns */
  year_by_pk?: Maybe<Year>;
};


export type Query_RootCoordinatorArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


export type Query_RootCoordinator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


export type Query_RootCoordinator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Query_RootCourse_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCourse_TypeArgs = {
  distinct_on?: InputMaybe<Array<Course_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Type_Order_By>>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};


export type Query_RootCourse_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Type_Order_By>>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};


export type Query_RootCourse_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootDegreeArgs = {
  distinct_on?: InputMaybe<Array<Degree_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Degree_Order_By>>;
  where?: InputMaybe<Degree_Bool_Exp>;
};


export type Query_RootDegree_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Degree_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Degree_Order_By>>;
  where?: InputMaybe<Degree_Bool_Exp>;
};


export type Query_RootDegree_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPhaseArgs = {
  distinct_on?: InputMaybe<Array<Phase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phase_Order_By>>;
  where?: InputMaybe<Phase_Bool_Exp>;
};


export type Query_RootPhase_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phase_Order_By>>;
  where?: InputMaybe<Phase_Bool_Exp>;
};


export type Query_RootPhase_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPositionArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Query_RootPosition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Query_RootPosition_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPriorityArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Query_RootPriority_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Query_RootPriority_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Query_RootProgram_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Query_RootProgram_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRequestArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Query_RootRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Query_RootRequest_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRequest_TypeArgs = {
  distinct_on?: InputMaybe<Array<Request_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Type_Order_By>>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};


export type Query_RootRequest_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Type_Order_By>>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};


export type Query_RootRequest_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootServiceArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Query_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Query_RootService_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootService_ModificationArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


export type Query_RootService_Modification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


export type Query_RootService_Modification_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootService_Modification_TypeArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Type_Order_By>>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};


export type Query_RootService_Modification_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Type_Order_By>>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};


export type Query_RootService_Modification_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootTeacherArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Query_RootTeacher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Query_RootTeacher_By_PkArgs = {
  uid: Scalars['String']['input'];
};


export type Query_RootTrackArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


export type Query_RootTrack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


export type Query_RootTrack_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootYearArgs = {
  distinct_on?: InputMaybe<Array<Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Year_Order_By>>;
  where?: InputMaybe<Year_Bool_Exp>;
};


export type Query_RootYear_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Year_Order_By>>;
  where?: InputMaybe<Year_Bool_Exp>;
};


export type Query_RootYear_By_PkArgs = {
  value: Scalars['Int']['input'];
};

/** Table contenant les demandes. */
export type Request = {
  __typename?: 'request';
  /** An object relationship */
  course: Course;
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** Le nombre d'heures demandées. */
  hours: Scalars['Float']['output'];
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  /** A computed field, executes function "is_priority" */
  is_priority?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  service: Service;
  service_id: Scalars['Int']['output'];
  /** Le type de demande. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: Request_Type;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "request" */
export type Request_Aggregate = {
  __typename?: 'request_aggregate';
  aggregate?: Maybe<Request_Aggregate_Fields>;
  nodes: Array<Request>;
};

export type Request_Aggregate_Bool_Exp = {
  count?: InputMaybe<Request_Aggregate_Bool_Exp_Count>;
};

export type Request_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Request_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "request" */
export type Request_Aggregate_Fields = {
  __typename?: 'request_aggregate_fields';
  avg?: Maybe<Request_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Request_Max_Fields>;
  min?: Maybe<Request_Min_Fields>;
  stddev?: Maybe<Request_Stddev_Fields>;
  stddev_pop?: Maybe<Request_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Request_Stddev_Samp_Fields>;
  sum?: Maybe<Request_Sum_Fields>;
  var_pop?: Maybe<Request_Var_Pop_Fields>;
  var_samp?: Maybe<Request_Var_Samp_Fields>;
  variance?: Maybe<Request_Variance_Fields>;
};


/** aggregate fields of "request" */
export type Request_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Request_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "request" */
export type Request_Aggregate_Order_By = {
  avg?: InputMaybe<Request_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Request_Max_Order_By>;
  min?: InputMaybe<Request_Min_Order_By>;
  stddev?: InputMaybe<Request_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Request_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Request_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Request_Sum_Order_By>;
  var_pop?: InputMaybe<Request_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Request_Var_Samp_Order_By>;
  variance?: InputMaybe<Request_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "request" */
export type Request_Arr_Rel_Insert_Input = {
  data: Array<Request_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Request_On_Conflict>;
};

/** aggregate avg on columns */
export type Request_Avg_Fields = {
  __typename?: 'request_avg_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "request" */
export type Request_Avg_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "request". All fields are combined with a logical 'AND'. */
export type Request_Bool_Exp = {
  _and?: InputMaybe<Array<Request_Bool_Exp>>;
  _not?: InputMaybe<Request_Bool_Exp>;
  _or?: InputMaybe<Array<Request_Bool_Exp>>;
  course?: InputMaybe<Course_Bool_Exp>;
  course_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hours?: InputMaybe<Float_Comparison_Exp>;
  hours_weighted?: InputMaybe<Float_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_priority?: InputMaybe<Boolean_Comparison_Exp>;
  service?: InputMaybe<Service_Bool_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  typeByType?: InputMaybe<Request_Type_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "request" */
export enum Request_Constraint {
  /** unique or primary key constraint on columns "id" */
  DemandePkey = 'demande_pkey',
  /** unique or primary key constraint on columns "type", "course_id", "service_id" */
  RequestServiceIdCourseIdTypeKey = 'request_service_id_course_id_type_key'
}

/** input type for incrementing numeric columns in table "request" */
export type Request_Inc_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "request" */
export type Request_Insert_Input = {
  course?: InputMaybe<Course_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<Service_Obj_Rel_Insert_Input>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<Request_Type_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Request_Max_Fields = {
  __typename?: 'request_max_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
  /** Le type de demande. */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "request" */
export type Request_Max_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  /** Le type de demande. */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Request_Min_Fields = {
  __typename?: 'request_min_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
  /** Le type de demande. */
  type?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "request" */
export type Request_Min_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
  /** Le type de demande. */
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "request" */
export type Request_Mutation_Response = {
  __typename?: 'request_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Request>;
};

/** on_conflict condition type for table "request" */
export type Request_On_Conflict = {
  constraint: Request_Constraint;
  update_columns?: Array<Request_Update_Column>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** Ordering options when selecting data from "request". */
export type Request_Order_By = {
  course?: InputMaybe<Course_Order_By>;
  course_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  hours_weighted?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_priority?: InputMaybe<Order_By>;
  service?: InputMaybe<Service_Order_By>;
  service_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeByType?: InputMaybe<Request_Type_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: request */
export type Request_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "request" */
export enum Request_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "request" */
export type Request_Set_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Request_Stddev_Fields = {
  __typename?: 'request_stddev_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "request" */
export type Request_Stddev_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Request_Stddev_Pop_Fields = {
  __typename?: 'request_stddev_pop_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "request" */
export type Request_Stddev_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Request_Stddev_Samp_Fields = {
  __typename?: 'request_stddev_samp_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "request" */
export type Request_Stddev_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "request" */
export type Request_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Request_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Request_Stream_Cursor_Value_Input = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Request_Sum_Fields = {
  __typename?: 'request_sum_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "request" */
export type Request_Sum_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Request_Type = {
  __typename?: 'request_type';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requests_aggregate: Request_Aggregate;
  /** Le type de demande (unique). */
  value: Scalars['String']['output'];
};


/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Request_TypeRequestsArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type Request_TypeRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** aggregated selection of "request_type" */
export type Request_Type_Aggregate = {
  __typename?: 'request_type_aggregate';
  aggregate?: Maybe<Request_Type_Aggregate_Fields>;
  nodes: Array<Request_Type>;
};

/** aggregate fields of "request_type" */
export type Request_Type_Aggregate_Fields = {
  __typename?: 'request_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Request_Type_Max_Fields>;
  min?: Maybe<Request_Type_Min_Fields>;
};


/** aggregate fields of "request_type" */
export type Request_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Request_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "request_type". All fields are combined with a logical 'AND'. */
export type Request_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Request_Type_Bool_Exp>>;
  _not?: InputMaybe<Request_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Request_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  requests?: InputMaybe<Request_Bool_Exp>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "request_type" */
export enum Request_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeDemandePkey = 'type_demande_pkey'
}

/** input type for inserting data into table "request_type" */
export type Request_Type_Insert_Input = {
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  requests?: InputMaybe<Request_Arr_Rel_Insert_Input>;
  /** Le type de demande (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Request_Type_Max_Fields = {
  __typename?: 'request_type_max_fields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Le type de demande (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Request_Type_Min_Fields = {
  __typename?: 'request_type_min_fields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Le type de demande (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "request_type" */
export type Request_Type_Mutation_Response = {
  __typename?: 'request_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Request_Type>;
};

/** input type for inserting object relation for remote table "request_type" */
export type Request_Type_Obj_Rel_Insert_Input = {
  data: Request_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Request_Type_On_Conflict>;
};

/** on_conflict condition type for table "request_type" */
export type Request_Type_On_Conflict = {
  constraint: Request_Type_Constraint;
  update_columns?: Array<Request_Type_Update_Column>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "request_type". */
export type Request_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: request_type */
export type Request_Type_Pk_Columns_Input = {
  /** Le type de demande (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "request_type" */
export enum Request_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "request_type" */
export type Request_Type_Set_Input = {
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le type de demande (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "request_type" */
export type Request_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Request_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Request_Type_Stream_Cursor_Value_Input = {
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le type de demande (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "request_type" */
export enum Request_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Request_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Request_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Request_Type_Bool_Exp;
};

/** update columns of table "request" */
export enum Request_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Request_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Request_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Request_Set_Input>;
  /** filter the rows which have to be updated */
  where: Request_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Request_Var_Pop_Fields = {
  __typename?: 'request_var_pop_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "request" */
export type Request_Var_Pop_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Request_Var_Samp_Fields = {
  __typename?: 'request_var_samp_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "request" */
export type Request_Var_Samp_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Request_Variance_Fields = {
  __typename?: 'request_variance_fields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hours_weighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "request" */
export type Request_Variance_Order_By = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  course_id?: InputMaybe<Order_By>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service_id?: InputMaybe<Order_By>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type Service = {
  __typename?: 'service';
  created_at: Scalars['timestamptz']['output'];
  /** Le nombre d'heures EQTD du service. */
  hours: Scalars['Float']['output'];
  /** L'identifiant unique du service. */
  id: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  modifications: Array<Service_Modification>;
  /** An aggregate relationship */
  modifications_aggregate: Service_Modification_Aggregate;
  /** An array relationship */
  priorities: Array<Priority>;
  /** An aggregate relationship */
  priorities_aggregate: Priority_Aggregate;
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requests_aggregate: Request_Aggregate;
  /** An object relationship */
  teacher: Teacher;
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** L'année correspondant au service. */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModificationsArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModifications_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServicePrioritiesArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServicePriorities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceRequestsArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};

/** aggregated selection of "service" */
export type Service_Aggregate = {
  __typename?: 'service_aggregate';
  aggregate?: Maybe<Service_Aggregate_Fields>;
  nodes: Array<Service>;
};

export type Service_Aggregate_Bool_Exp = {
  count?: InputMaybe<Service_Aggregate_Bool_Exp_Count>;
};

export type Service_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Service_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "service" */
export type Service_Aggregate_Fields = {
  __typename?: 'service_aggregate_fields';
  avg?: Maybe<Service_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Max_Fields>;
  min?: Maybe<Service_Min_Fields>;
  stddev?: Maybe<Service_Stddev_Fields>;
  stddev_pop?: Maybe<Service_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Service_Stddev_Samp_Fields>;
  sum?: Maybe<Service_Sum_Fields>;
  var_pop?: Maybe<Service_Var_Pop_Fields>;
  var_samp?: Maybe<Service_Var_Samp_Fields>;
  variance?: Maybe<Service_Variance_Fields>;
};


/** aggregate fields of "service" */
export type Service_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service" */
export type Service_Aggregate_Order_By = {
  avg?: InputMaybe<Service_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Max_Order_By>;
  min?: InputMaybe<Service_Min_Order_By>;
  stddev?: InputMaybe<Service_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Service_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Service_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Service_Sum_Order_By>;
  var_pop?: InputMaybe<Service_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Service_Var_Samp_Order_By>;
  variance?: InputMaybe<Service_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service" */
export type Service_Arr_Rel_Insert_Input = {
  data: Array<Service_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Avg_Fields = {
  __typename?: 'service_avg_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service" */
export type Service_Avg_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export type Service_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Bool_Exp>>;
  _not?: InputMaybe<Service_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hours?: InputMaybe<Float_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  modifications?: InputMaybe<Service_Modification_Bool_Exp>;
  modifications_aggregate?: InputMaybe<Service_Modification_Aggregate_Bool_Exp>;
  priorities?: InputMaybe<Priority_Bool_Exp>;
  priorities_aggregate?: InputMaybe<Priority_Aggregate_Bool_Exp>;
  requests?: InputMaybe<Request_Bool_Exp>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Bool_Exp>;
  teacher?: InputMaybe<Teacher_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
  yearByYear?: InputMaybe<Year_Bool_Exp>;
};

/** unique or primary key constraints on table "service" */
export enum Service_Constraint {
  /** unique or primary key constraint on columns "id" */
  ServicePkey = 'service_pkey',
  /** unique or primary key constraint on columns "uid", "year" */
  ServiceYearUidKey = 'service_year_uid_key'
}

/** input type for incrementing numeric columns in table "service" */
export type Service_Inc_Input = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service" */
export type Service_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  modifications?: InputMaybe<Service_Modification_Arr_Rel_Insert_Input>;
  priorities?: InputMaybe<Priority_Arr_Rel_Insert_Input>;
  requests?: InputMaybe<Request_Arr_Rel_Insert_Input>;
  teacher?: InputMaybe<Teacher_Obj_Rel_Insert_Input>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<Year_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Service_Max_Fields = {
  __typename?: 'service_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "service" */
export type Service_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Min_Fields = {
  __typename?: 'service_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "service" */
export type Service_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** Table containing modifications to a teacher's base service for a given year. */
export type Service_Modification = {
  __typename?: 'service_modification';
  /** Timestamp of when the modification was created. */
  created_at: Scalars['timestamptz']['output'];
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours: Scalars['Float']['output'];
  /** Unique identifier for the modification. */
  id: Scalars['Int']['output'];
  /** An object relationship */
  service: Service;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id: Scalars['Int']['output'];
  /** Type of modification. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: Service_Modification_Type;
  /** Timestamp of when the modification was last updated. */
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "service_modification" */
export type Service_Modification_Aggregate = {
  __typename?: 'service_modification_aggregate';
  aggregate?: Maybe<Service_Modification_Aggregate_Fields>;
  nodes: Array<Service_Modification>;
};

export type Service_Modification_Aggregate_Bool_Exp = {
  count?: InputMaybe<Service_Modification_Aggregate_Bool_Exp_Count>;
};

export type Service_Modification_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Service_Modification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Service_Modification_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "service_modification" */
export type Service_Modification_Aggregate_Fields = {
  __typename?: 'service_modification_aggregate_fields';
  avg?: Maybe<Service_Modification_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Modification_Max_Fields>;
  min?: Maybe<Service_Modification_Min_Fields>;
  stddev?: Maybe<Service_Modification_Stddev_Fields>;
  stddev_pop?: Maybe<Service_Modification_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Service_Modification_Stddev_Samp_Fields>;
  sum?: Maybe<Service_Modification_Sum_Fields>;
  var_pop?: Maybe<Service_Modification_Var_Pop_Fields>;
  var_samp?: Maybe<Service_Modification_Var_Samp_Fields>;
  variance?: Maybe<Service_Modification_Variance_Fields>;
};


/** aggregate fields of "service_modification" */
export type Service_Modification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Modification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service_modification" */
export type Service_Modification_Aggregate_Order_By = {
  avg?: InputMaybe<Service_Modification_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Service_Modification_Max_Order_By>;
  min?: InputMaybe<Service_Modification_Min_Order_By>;
  stddev?: InputMaybe<Service_Modification_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Service_Modification_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Service_Modification_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Service_Modification_Sum_Order_By>;
  var_pop?: InputMaybe<Service_Modification_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Service_Modification_Var_Samp_Order_By>;
  variance?: InputMaybe<Service_Modification_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "service_modification" */
export type Service_Modification_Arr_Rel_Insert_Input = {
  data: Array<Service_Modification_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_Modification_On_Conflict>;
};

/** aggregate avg on columns */
export type Service_Modification_Avg_Fields = {
  __typename?: 'service_modification_avg_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service_modification" */
export type Service_Modification_Avg_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "service_modification". All fields are combined with a logical 'AND'. */
export type Service_Modification_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Modification_Bool_Exp>>;
  _not?: InputMaybe<Service_Modification_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Modification_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hours?: InputMaybe<Float_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  service?: InputMaybe<Service_Bool_Exp>;
  service_id?: InputMaybe<Int_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  typeByType?: InputMaybe<Service_Modification_Type_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_modification" */
export enum Service_Modification_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModificationServicePkey = 'modification_service_pkey'
}

/** input type for incrementing numeric columns in table "service_modification" */
export type Service_Modification_Inc_Input = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service_modification" */
export type Service_Modification_Insert_Input = {
  /** Timestamp of when the modification was created. */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<Service_Obj_Rel_Insert_Input>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<Service_Modification_Type_Obj_Rel_Insert_Input>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Service_Modification_Max_Fields = {
  __typename?: 'service_modification_max_fields';
  /** Timestamp of when the modification was created. */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Int']['output']>;
  /** Type of modification. */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "service_modification" */
export type Service_Modification_Max_Order_By = {
  /** Timestamp of when the modification was created. */
  created_at?: InputMaybe<Order_By>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
  /** Type of modification. */
  type?: InputMaybe<Order_By>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Service_Modification_Min_Fields = {
  __typename?: 'service_modification_min_fields';
  /** Timestamp of when the modification was created. */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Int']['output']>;
  /** Type of modification. */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "service_modification" */
export type Service_Modification_Min_Order_By = {
  /** Timestamp of when the modification was created. */
  created_at?: InputMaybe<Order_By>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
  /** Type of modification. */
  type?: InputMaybe<Order_By>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service_modification" */
export type Service_Modification_Mutation_Response = {
  __typename?: 'service_modification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Modification>;
};

/** on_conflict condition type for table "service_modification" */
export type Service_Modification_On_Conflict = {
  constraint: Service_Modification_Constraint;
  update_columns?: Array<Service_Modification_Update_Column>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};

/** Ordering options when selecting data from "service_modification". */
export type Service_Modification_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  service?: InputMaybe<Service_Order_By>;
  service_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  typeByType?: InputMaybe<Service_Modification_Type_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_modification */
export type Service_Modification_Pk_Columns_Input = {
  /** Unique identifier for the modification. */
  id: Scalars['Int']['input'];
};

/** select columns of table "service_modification" */
export enum Service_Modification_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "service_modification" */
export type Service_Modification_Set_Input = {
  /** Timestamp of when the modification was created. */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Service_Modification_Stddev_Fields = {
  __typename?: 'service_modification_stddev_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service_modification" */
export type Service_Modification_Stddev_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Modification_Stddev_Pop_Fields = {
  __typename?: 'service_modification_stddev_pop_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "service_modification" */
export type Service_Modification_Stddev_Pop_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Modification_Stddev_Samp_Fields = {
  __typename?: 'service_modification_stddev_samp_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "service_modification" */
export type Service_Modification_Stddev_Samp_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "service_modification" */
export type Service_Modification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Modification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Modification_Stream_Cursor_Value_Input = {
  /** Timestamp of when the modification was created. */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp of when the modification was last updated. */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Service_Modification_Sum_Fields = {
  __typename?: 'service_modification_sum_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service_modification" */
export type Service_Modification_Sum_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** Table containing different types of service modifications. */
export type Service_Modification_Type = {
  __typename?: 'service_modification_type';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label: Scalars['String']['output'];
  /** An array relationship */
  modifications_service: Array<Service_Modification>;
  /** An aggregate relationship */
  modifications_service_aggregate: Service_Modification_Aggregate;
  /** Modification type (unique). */
  value: Scalars['String']['output'];
};


/** Table containing different types of service modifications. */
export type Service_Modification_TypeModifications_ServiceArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


/** Table containing different types of service modifications. */
export type Service_Modification_TypeModifications_Service_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};

/** aggregated selection of "service_modification_type" */
export type Service_Modification_Type_Aggregate = {
  __typename?: 'service_modification_type_aggregate';
  aggregate?: Maybe<Service_Modification_Type_Aggregate_Fields>;
  nodes: Array<Service_Modification_Type>;
};

/** aggregate fields of "service_modification_type" */
export type Service_Modification_Type_Aggregate_Fields = {
  __typename?: 'service_modification_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Service_Modification_Type_Max_Fields>;
  min?: Maybe<Service_Modification_Type_Min_Fields>;
};


/** aggregate fields of "service_modification_type" */
export type Service_Modification_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Service_Modification_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "service_modification_type". All fields are combined with a logical 'AND'. */
export type Service_Modification_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Service_Modification_Type_Bool_Exp>>;
  _not?: InputMaybe<Service_Modification_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Service_Modification_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  modifications_service?: InputMaybe<Service_Modification_Bool_Exp>;
  modifications_service_aggregate?: InputMaybe<Service_Modification_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "service_modification_type" */
export enum Service_Modification_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  TypeModificationPkey = 'type_modification_pkey'
}

/** input type for inserting data into table "service_modification_type" */
export type Service_Modification_Type_Insert_Input = {
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  modifications_service?: InputMaybe<Service_Modification_Arr_Rel_Insert_Input>;
  /** Modification type (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Service_Modification_Type_Max_Fields = {
  __typename?: 'service_modification_type_max_fields';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label?: Maybe<Scalars['String']['output']>;
  /** Modification type (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Service_Modification_Type_Min_Fields = {
  __typename?: 'service_modification_type_min_fields';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label?: Maybe<Scalars['String']['output']>;
  /** Modification type (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "service_modification_type" */
export type Service_Modification_Type_Mutation_Response = {
  __typename?: 'service_modification_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service_Modification_Type>;
};

/** input type for inserting object relation for remote table "service_modification_type" */
export type Service_Modification_Type_Obj_Rel_Insert_Input = {
  data: Service_Modification_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_Modification_Type_On_Conflict>;
};

/** on_conflict condition type for table "service_modification_type" */
export type Service_Modification_Type_On_Conflict = {
  constraint: Service_Modification_Type_Constraint;
  update_columns?: Array<Service_Modification_Type_Update_Column>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "service_modification_type". */
export type Service_Modification_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  modifications_service_aggregate?: InputMaybe<Service_Modification_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: service_modification_type */
export type Service_Modification_Type_Pk_Columns_Input = {
  /** Modification type (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "service_modification_type" */
export enum Service_Modification_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "service_modification_type" */
export type Service_Modification_Type_Set_Input = {
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Modification type (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "service_modification_type" */
export type Service_Modification_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Modification_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Modification_Type_Stream_Cursor_Value_Input = {
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Modification type (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_modification_type" */
export enum Service_Modification_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

export type Service_Modification_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Service_Modification_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Service_Modification_Type_Bool_Exp;
};

/** update columns of table "service_modification" */
export enum Service_Modification_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'service_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Service_Modification_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Service_Modification_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Service_Modification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Service_Modification_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Service_Modification_Var_Pop_Fields = {
  __typename?: 'service_modification_var_pop_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "service_modification" */
export type Service_Modification_Var_Pop_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Modification_Var_Samp_Fields = {
  __typename?: 'service_modification_var_samp_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "service_modification" */
export type Service_Modification_Var_Samp_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Modification_Variance_Fields = {
  __typename?: 'service_modification_variance_fields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service_modification" */
export type Service_Modification_Variance_Order_By = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Order_By>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Order_By>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  service_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "service" */
export type Service_Mutation_Response = {
  __typename?: 'service_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service>;
};

/** input type for inserting object relation for remote table "service" */
export type Service_Obj_Rel_Insert_Input = {
  data: Service_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Service_On_Conflict>;
};

/** on_conflict condition type for table "service" */
export type Service_On_Conflict = {
  constraint: Service_Constraint;
  update_columns?: Array<Service_Update_Column>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** Ordering options when selecting data from "service". */
export type Service_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  modifications_aggregate?: InputMaybe<Service_Modification_Aggregate_Order_By>;
  priorities_aggregate?: InputMaybe<Priority_Aggregate_Order_By>;
  requests_aggregate?: InputMaybe<Request_Aggregate_Order_By>;
  teacher?: InputMaybe<Teacher_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
  yearByYear?: InputMaybe<Year_Order_By>;
};

/** primary key columns input for table: service */
export type Service_Pk_Columns_Input = {
  /** L'identifiant unique du service. */
  id: Scalars['Int']['input'];
};

/** select columns of table "service" */
export enum Service_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "service" */
export type Service_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Service_Stddev_Fields = {
  __typename?: 'service_stddev_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service" */
export type Service_Stddev_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Service_Stddev_Pop_Fields = {
  __typename?: 'service_stddev_pop_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "service" */
export type Service_Stddev_Pop_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Service_Stddev_Samp_Fields = {
  __typename?: 'service_stddev_samp_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "service" */
export type Service_Stddev_Samp_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "service" */
export type Service_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Service_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Service_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Service_Sum_Fields = {
  __typename?: 'service_sum_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service" */
export type Service_Sum_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** update columns of table "service" */
export enum Service_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

export type Service_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Service_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Service_Set_Input>;
  /** filter the rows which have to be updated */
  where: Service_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Service_Var_Pop_Fields = {
  __typename?: 'service_var_pop_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "service" */
export type Service_Var_Pop_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Service_Var_Samp_Fields = {
  __typename?: 'service_var_samp_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "service" */
export type Service_Var_Samp_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Service_Variance_Fields = {
  __typename?: 'service_variance_fields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service" */
export type Service_Variance_Order_By = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Order_By>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Order_By>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "coordinator" */
  coordinator: Array<Coordinator>;
  /** fetch aggregated fields from the table: "coordinator" */
  coordinator_aggregate: Coordinator_Aggregate;
  /** fetch data from the table: "coordinator" using primary key columns */
  coordinator_by_pk?: Maybe<Coordinator>;
  /** fetch data from the table in a streaming manner: "coordinator" */
  coordinator_stream: Array<Coordinator>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** fetch data from the table in a streaming manner: "course" */
  course_stream: Array<Course>;
  /** fetch data from the table: "course_type" */
  course_type: Array<Course_Type>;
  /** fetch aggregated fields from the table: "course_type" */
  course_type_aggregate: Course_Type_Aggregate;
  /** fetch data from the table: "course_type" using primary key columns */
  course_type_by_pk?: Maybe<Course_Type>;
  /** fetch data from the table in a streaming manner: "course_type" */
  course_type_stream: Array<Course_Type>;
  /** fetch data from the table: "degree" */
  degree: Array<Degree>;
  /** fetch aggregated fields from the table: "degree" */
  degree_aggregate: Degree_Aggregate;
  /** fetch data from the table: "degree" using primary key columns */
  degree_by_pk?: Maybe<Degree>;
  /** fetch data from the table in a streaming manner: "degree" */
  degree_stream: Array<Degree>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phase_aggregate: Phase_Aggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phase_by_pk?: Maybe<Phase>;
  /** fetch data from the table in a streaming manner: "phase" */
  phase_stream: Array<Phase>;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: Position_Aggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<Position>;
  /** fetch data from the table in a streaming manner: "position" */
  position_stream: Array<Position>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  priority_aggregate: Priority_Aggregate;
  /** fetch data from the table: "priority" using primary key columns */
  priority_by_pk?: Maybe<Priority>;
  /** fetch data from the table in a streaming manner: "priority" */
  priority_stream: Array<Priority>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  program_aggregate: Program_Aggregate;
  /** fetch data from the table: "program" using primary key columns */
  program_by_pk?: Maybe<Program>;
  /** fetch data from the table in a streaming manner: "program" */
  program_stream: Array<Program>;
  /** fetch data from the table: "request" */
  request: Array<Request>;
  /** fetch aggregated fields from the table: "request" */
  request_aggregate: Request_Aggregate;
  /** fetch data from the table: "request" using primary key columns */
  request_by_pk?: Maybe<Request>;
  /** fetch data from the table in a streaming manner: "request" */
  request_stream: Array<Request>;
  /** fetch data from the table: "request_type" */
  request_type: Array<Request_Type>;
  /** fetch aggregated fields from the table: "request_type" */
  request_type_aggregate: Request_Type_Aggregate;
  /** fetch data from the table: "request_type" using primary key columns */
  request_type_by_pk?: Maybe<Request_Type>;
  /** fetch data from the table in a streaming manner: "request_type" */
  request_type_stream: Array<Request_Type>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  service_aggregate: Service_Aggregate;
  /** fetch data from the table: "service" using primary key columns */
  service_by_pk?: Maybe<Service>;
  /** fetch data from the table: "service_modification" */
  service_modification: Array<Service_Modification>;
  /** fetch aggregated fields from the table: "service_modification" */
  service_modification_aggregate: Service_Modification_Aggregate;
  /** fetch data from the table: "service_modification" using primary key columns */
  service_modification_by_pk?: Maybe<Service_Modification>;
  /** fetch data from the table in a streaming manner: "service_modification" */
  service_modification_stream: Array<Service_Modification>;
  /** fetch data from the table: "service_modification_type" */
  service_modification_type: Array<Service_Modification_Type>;
  /** fetch aggregated fields from the table: "service_modification_type" */
  service_modification_type_aggregate: Service_Modification_Type_Aggregate;
  /** fetch data from the table: "service_modification_type" using primary key columns */
  service_modification_type_by_pk?: Maybe<Service_Modification_Type>;
  /** fetch data from the table in a streaming manner: "service_modification_type" */
  service_modification_type_stream: Array<Service_Modification_Type>;
  /** fetch data from the table in a streaming manner: "service" */
  service_stream: Array<Service>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacher_aggregate: Teacher_Aggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacher_by_pk?: Maybe<Teacher>;
  /** fetch data from the table in a streaming manner: "teacher" */
  teacher_stream: Array<Teacher>;
  /** fetch data from the table: "track" */
  track: Array<Track>;
  /** fetch aggregated fields from the table: "track" */
  track_aggregate: Track_Aggregate;
  /** fetch data from the table: "track" using primary key columns */
  track_by_pk?: Maybe<Track>;
  /** fetch data from the table in a streaming manner: "track" */
  track_stream: Array<Track>;
  /** fetch data from the table: "year" */
  year: Array<Year>;
  /** fetch aggregated fields from the table: "year" */
  year_aggregate: Year_Aggregate;
  /** fetch data from the table: "year" using primary key columns */
  year_by_pk?: Maybe<Year>;
  /** fetch data from the table in a streaming manner: "year" */
  year_stream: Array<Year>;
};


export type Subscription_RootCoordinatorArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


export type Subscription_RootCoordinator_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


export type Subscription_RootCoordinator_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCoordinator_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Coordinator_Stream_Cursor_Input>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


export type Subscription_RootCourseArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCourse_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Course_Stream_Cursor_Input>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


export type Subscription_RootCourse_TypeArgs = {
  distinct_on?: InputMaybe<Array<Course_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Type_Order_By>>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};


export type Subscription_RootCourse_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Type_Order_By>>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};


export type Subscription_RootCourse_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootCourse_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Course_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Course_Type_Bool_Exp>;
};


export type Subscription_RootDegreeArgs = {
  distinct_on?: InputMaybe<Array<Degree_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Degree_Order_By>>;
  where?: InputMaybe<Degree_Bool_Exp>;
};


export type Subscription_RootDegree_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Degree_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Degree_Order_By>>;
  where?: InputMaybe<Degree_Bool_Exp>;
};


export type Subscription_RootDegree_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDegree_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Degree_Stream_Cursor_Input>>;
  where?: InputMaybe<Degree_Bool_Exp>;
};


export type Subscription_RootPhaseArgs = {
  distinct_on?: InputMaybe<Array<Phase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phase_Order_By>>;
  where?: InputMaybe<Phase_Bool_Exp>;
};


export type Subscription_RootPhase_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Phase_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Phase_Order_By>>;
  where?: InputMaybe<Phase_Bool_Exp>;
};


export type Subscription_RootPhase_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPhase_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Phase_Stream_Cursor_Input>>;
  where?: InputMaybe<Phase_Bool_Exp>;
};


export type Subscription_RootPositionArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootPosition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootPosition_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPosition_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Position_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootPriorityArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootPriority_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Priority_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Priority_Order_By>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootPriority_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPriority_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Priority_Stream_Cursor_Input>>;
  where?: InputMaybe<Priority_Bool_Exp>;
};


export type Subscription_RootProgramArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootProgram_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Program_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Program_Order_By>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootProgram_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProgram_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Program_Stream_Cursor_Input>>;
  where?: InputMaybe<Program_Bool_Exp>;
};


export type Subscription_RootRequestArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Subscription_RootRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Order_By>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Subscription_RootRequest_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRequest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Request_Stream_Cursor_Input>>;
  where?: InputMaybe<Request_Bool_Exp>;
};


export type Subscription_RootRequest_TypeArgs = {
  distinct_on?: InputMaybe<Array<Request_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Type_Order_By>>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};


export type Subscription_RootRequest_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Request_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Request_Type_Order_By>>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};


export type Subscription_RootRequest_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRequest_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Request_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Request_Type_Bool_Exp>;
};


export type Subscription_RootServiceArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootService_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootService_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootService_ModificationArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


export type Subscription_RootService_Modification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Order_By>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


export type Subscription_RootService_Modification_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootService_Modification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Service_Modification_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Modification_Bool_Exp>;
};


export type Subscription_RootService_Modification_TypeArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Type_Order_By>>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};


export type Subscription_RootService_Modification_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Modification_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Modification_Type_Order_By>>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};


export type Subscription_RootService_Modification_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootService_Modification_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Service_Modification_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Modification_Type_Bool_Exp>;
};


export type Subscription_RootService_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Service_Stream_Cursor_Input>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


export type Subscription_RootTeacherArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Subscription_RootTeacher_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teacher_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teacher_Order_By>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Subscription_RootTeacher_By_PkArgs = {
  uid: Scalars['String']['input'];
};


export type Subscription_RootTeacher_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Teacher_Stream_Cursor_Input>>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};


export type Subscription_RootTrackArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


export type Subscription_RootTrack_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Track_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Track_Order_By>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


export type Subscription_RootTrack_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTrack_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Track_Stream_Cursor_Input>>;
  where?: InputMaybe<Track_Bool_Exp>;
};


export type Subscription_RootYearArgs = {
  distinct_on?: InputMaybe<Array<Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Year_Order_By>>;
  where?: InputMaybe<Year_Bool_Exp>;
};


export type Subscription_RootYear_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Year_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Year_Order_By>>;
  where?: InputMaybe<Year_Bool_Exp>;
};


export type Subscription_RootYear_By_PkArgs = {
  value: Scalars['Int']['input'];
};


export type Subscription_RootYear_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Year_Stream_Cursor_Input>>;
  where?: InputMaybe<Year_Bool_Exp>;
};

/** Table contenant les intervenants. */
export type Teacher = {
  __typename?: 'teacher';
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active: Scalars['Boolean']['output'];
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  /** Le prénom de l'intervenant. */
  firstname: Scalars['String']['output'];
  /** Le nom de l'intervenant. */
  lastname: Scalars['String']['output'];
  position?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  positionByPosition?: Maybe<Position>;
  /** An array relationship */
  responsibilities: Array<Coordinator>;
  /** An aggregate relationship */
  responsibilities_aggregate: Coordinator_Aggregate;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  services_aggregate: Service_Aggregate;
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars['String']['output'];
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les intervenants. */
export type TeacherResponsibilitiesArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les intervenants. */
export type TeacherResponsibilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les intervenants. */
export type TeacherServicesArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


/** Table contenant les intervenants. */
export type TeacherServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** aggregated selection of "teacher" */
export type Teacher_Aggregate = {
  __typename?: 'teacher_aggregate';
  aggregate?: Maybe<Teacher_Aggregate_Fields>;
  nodes: Array<Teacher>;
};

export type Teacher_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Teacher_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Teacher_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Teacher_Aggregate_Bool_Exp_Count>;
};

export type Teacher_Aggregate_Bool_Exp_Bool_And = {
  arguments: Teacher_Select_Column_Teacher_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Teacher_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Teacher_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Teacher_Select_Column_Teacher_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Teacher_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Teacher_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Teacher_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Teacher_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "teacher" */
export type Teacher_Aggregate_Fields = {
  __typename?: 'teacher_aggregate_fields';
  avg?: Maybe<Teacher_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Teacher_Max_Fields>;
  min?: Maybe<Teacher_Min_Fields>;
  stddev?: Maybe<Teacher_Stddev_Fields>;
  stddev_pop?: Maybe<Teacher_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teacher_Stddev_Samp_Fields>;
  sum?: Maybe<Teacher_Sum_Fields>;
  var_pop?: Maybe<Teacher_Var_Pop_Fields>;
  var_samp?: Maybe<Teacher_Var_Samp_Fields>;
  variance?: Maybe<Teacher_Variance_Fields>;
};


/** aggregate fields of "teacher" */
export type Teacher_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teacher_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "teacher" */
export type Teacher_Aggregate_Order_By = {
  avg?: InputMaybe<Teacher_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Teacher_Max_Order_By>;
  min?: InputMaybe<Teacher_Min_Order_By>;
  stddev?: InputMaybe<Teacher_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Teacher_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Teacher_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Teacher_Sum_Order_By>;
  var_pop?: InputMaybe<Teacher_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Teacher_Var_Samp_Order_By>;
  variance?: InputMaybe<Teacher_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teacher" */
export type Teacher_Arr_Rel_Insert_Input = {
  data: Array<Teacher_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};

/** aggregate avg on columns */
export type Teacher_Avg_Fields = {
  __typename?: 'teacher_avg_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "teacher" */
export type Teacher_Avg_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teacher". All fields are combined with a logical 'AND'. */
export type Teacher_Bool_Exp = {
  _and?: InputMaybe<Array<Teacher_Bool_Exp>>;
  _not?: InputMaybe<Teacher_Bool_Exp>;
  _or?: InputMaybe<Array<Teacher_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  alias?: InputMaybe<String_Comparison_Exp>;
  base_service_hours?: InputMaybe<Float_Comparison_Exp>;
  firstname?: InputMaybe<String_Comparison_Exp>;
  lastname?: InputMaybe<String_Comparison_Exp>;
  position?: InputMaybe<String_Comparison_Exp>;
  positionByPosition?: InputMaybe<Position_Bool_Exp>;
  responsibilities?: InputMaybe<Coordinator_Bool_Exp>;
  responsibilities_aggregate?: InputMaybe<Coordinator_Aggregate_Bool_Exp>;
  services?: InputMaybe<Service_Bool_Exp>;
  services_aggregate?: InputMaybe<Service_Aggregate_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "teacher" */
export enum Teacher_Constraint {
  /** unique or primary key constraint on columns "uid" */
  IntervenantPkey = 'intervenant_pkey'
}

/** input type for incrementing numeric columns in table "teacher" */
export type Teacher_Inc_Input = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "teacher" */
export type Teacher_Insert_Input = {
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  positionByPosition?: InputMaybe<Position_Obj_Rel_Insert_Input>;
  responsibilities?: InputMaybe<Coordinator_Arr_Rel_Insert_Input>;
  services?: InputMaybe<Service_Arr_Rel_Insert_Input>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Teacher_Max_Fields = {
  __typename?: 'teacher_max_fields';
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  /** Le prénom de l'intervenant. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Le nom de l'intervenant. */
  lastname?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "teacher" */
export type Teacher_Max_Order_By = {
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Order_By>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Order_By>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Teacher_Min_Fields = {
  __typename?: 'teacher_min_fields';
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
  /** Le prénom de l'intervenant. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Le nom de l'intervenant. */
  lastname?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "teacher" */
export type Teacher_Min_Order_By = {
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Order_By>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Order_By>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "teacher" */
export type Teacher_Mutation_Response = {
  __typename?: 'teacher_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Teacher>;
};

/** input type for inserting object relation for remote table "teacher" */
export type Teacher_Obj_Rel_Insert_Input = {
  data: Teacher_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Teacher_On_Conflict>;
};

/** on_conflict condition type for table "teacher" */
export type Teacher_On_Conflict = {
  constraint: Teacher_Constraint;
  update_columns?: Array<Teacher_Update_Column>;
  where?: InputMaybe<Teacher_Bool_Exp>;
};

/** Ordering options when selecting data from "teacher". */
export type Teacher_Order_By = {
  active?: InputMaybe<Order_By>;
  alias?: InputMaybe<Order_By>;
  base_service_hours?: InputMaybe<Order_By>;
  firstname?: InputMaybe<Order_By>;
  lastname?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  positionByPosition?: InputMaybe<Position_Order_By>;
  responsibilities_aggregate?: InputMaybe<Coordinator_Aggregate_Order_By>;
  services_aggregate?: InputMaybe<Service_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: teacher */
export type Teacher_Pk_Columns_Input = {
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars['String']['input'];
};

/** select columns of table "teacher" */
export enum Teacher_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseServiceHours = 'base_service_hours',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Position = 'position',
  /** column name */
  Uid = 'uid',
  /** column name */
  Visible = 'visible'
}

/** select "teacher_aggregate_bool_exp_bool_and_arguments_columns" columns of table "teacher" */
export enum Teacher_Select_Column_Teacher_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Visible = 'visible'
}

/** select "teacher_aggregate_bool_exp_bool_or_arguments_columns" columns of table "teacher" */
export enum Teacher_Select_Column_Teacher_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "teacher" */
export type Teacher_Set_Input = {
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Teacher_Stddev_Fields = {
  __typename?: 'teacher_stddev_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "teacher" */
export type Teacher_Stddev_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teacher_Stddev_Pop_Fields = {
  __typename?: 'teacher_stddev_pop_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "teacher" */
export type Teacher_Stddev_Pop_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teacher_Stddev_Samp_Fields = {
  __typename?: 'teacher_stddev_samp_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "teacher" */
export type Teacher_Stddev_Samp_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "teacher" */
export type Teacher_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teacher_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teacher_Stream_Cursor_Value_Input = {
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Teacher_Sum_Fields = {
  __typename?: 'teacher_sum_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "teacher" */
export type Teacher_Sum_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** update columns of table "teacher" */
export enum Teacher_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseServiceHours = 'base_service_hours',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Position = 'position',
  /** column name */
  Uid = 'uid',
  /** column name */
  Visible = 'visible'
}

export type Teacher_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teacher_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teacher_Set_Input>;
  /** filter the rows which have to be updated */
  where: Teacher_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teacher_Var_Pop_Fields = {
  __typename?: 'teacher_var_pop_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "teacher" */
export type Teacher_Var_Pop_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teacher_Var_Samp_Fields = {
  __typename?: 'teacher_var_samp_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "teacher" */
export type Teacher_Var_Samp_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Teacher_Variance_Fields = {
  __typename?: 'teacher_variance_fields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "teacher" */
export type Teacher_Variance_Order_By = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  base_service_hours?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Table contenant les différents parcours. */
export type Track = {
  __typename?: 'track';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinators_aggregate: Coordinator_Aggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  courses_aggregate: Course_Aggregate;
  /** L'identifiant unique du parcours. */
  id: Scalars['Int']['output'];
  /** Le nom du parcours (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  program: Program;
  program_id: Scalars['Int']['output'];
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différents parcours. */
export type TrackCoordinatorsArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les différents parcours. */
export type TrackCoordinators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Coordinator_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Coordinator_Order_By>>;
  where?: InputMaybe<Coordinator_Bool_Exp>;
};


/** Table contenant les différents parcours. */
export type TrackCoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différents parcours. */
export type TrackCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};

/** aggregated selection of "track" */
export type Track_Aggregate = {
  __typename?: 'track_aggregate';
  aggregate?: Maybe<Track_Aggregate_Fields>;
  nodes: Array<Track>;
};

export type Track_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Track_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Track_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Track_Aggregate_Bool_Exp_Count>;
};

export type Track_Aggregate_Bool_Exp_Bool_And = {
  arguments: Track_Select_Column_Track_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Track_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Track_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Track_Select_Column_Track_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Track_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Track_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Track_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Track_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "track" */
export type Track_Aggregate_Fields = {
  __typename?: 'track_aggregate_fields';
  avg?: Maybe<Track_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Track_Max_Fields>;
  min?: Maybe<Track_Min_Fields>;
  stddev?: Maybe<Track_Stddev_Fields>;
  stddev_pop?: Maybe<Track_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Track_Stddev_Samp_Fields>;
  sum?: Maybe<Track_Sum_Fields>;
  var_pop?: Maybe<Track_Var_Pop_Fields>;
  var_samp?: Maybe<Track_Var_Samp_Fields>;
  variance?: Maybe<Track_Variance_Fields>;
};


/** aggregate fields of "track" */
export type Track_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Track_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "track" */
export type Track_Aggregate_Order_By = {
  avg?: InputMaybe<Track_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Track_Max_Order_By>;
  min?: InputMaybe<Track_Min_Order_By>;
  stddev?: InputMaybe<Track_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Track_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Track_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Track_Sum_Order_By>;
  var_pop?: InputMaybe<Track_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Track_Var_Samp_Order_By>;
  variance?: InputMaybe<Track_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "track" */
export type Track_Arr_Rel_Insert_Input = {
  data: Array<Track_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Track_On_Conflict>;
};

/** aggregate avg on columns */
export type Track_Avg_Fields = {
  __typename?: 'track_avg_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "track" */
export type Track_Avg_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "track". All fields are combined with a logical 'AND'. */
export type Track_Bool_Exp = {
  _and?: InputMaybe<Array<Track_Bool_Exp>>;
  _not?: InputMaybe<Track_Bool_Exp>;
  _or?: InputMaybe<Array<Track_Bool_Exp>>;
  coordinators?: InputMaybe<Coordinator_Bool_Exp>;
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Bool_Exp>;
  courses?: InputMaybe<Course_Bool_Exp>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_short?: InputMaybe<String_Comparison_Exp>;
  nom_import?: InputMaybe<String_Comparison_Exp>;
  program?: InputMaybe<Program_Bool_Exp>;
  program_id?: InputMaybe<Int_Comparison_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "track" */
export enum Track_Constraint {
  /** unique or primary key constraint on columns "program_id", "name" */
  ParcoursMentionIdNomKey = 'parcours_mention_id_nom_key',
  /** unique or primary key constraint on columns "id" */
  ParcoursPkey = 'parcours_pkey'
}

/** input type for incrementing numeric columns in table "track" */
export type Track_Inc_Input = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  program_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "track" */
export type Track_Insert_Input = {
  coordinators?: InputMaybe<Coordinator_Arr_Rel_Insert_Input>;
  courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Program_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Track_Max_Fields = {
  __typename?: 'track_max_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du parcours (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  program_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "track" */
export type Track_Max_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Track_Min_Fields = {
  __typename?: 'track_min_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du parcours (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  name_short?: Maybe<Scalars['String']['output']>;
  nom_import?: Maybe<Scalars['String']['output']>;
  program_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "track" */
export type Track_Min_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Order_By>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "track" */
export type Track_Mutation_Response = {
  __typename?: 'track_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Track>;
};

/** input type for inserting object relation for remote table "track" */
export type Track_Obj_Rel_Insert_Input = {
  data: Track_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Track_On_Conflict>;
};

/** on_conflict condition type for table "track" */
export type Track_On_Conflict = {
  constraint: Track_Constraint;
  update_columns?: Array<Track_Update_Column>;
  where?: InputMaybe<Track_Bool_Exp>;
};

/** Ordering options when selecting data from "track". */
export type Track_Order_By = {
  coordinators_aggregate?: InputMaybe<Coordinator_Aggregate_Order_By>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_short?: InputMaybe<Order_By>;
  nom_import?: InputMaybe<Order_By>;
  program?: InputMaybe<Program_Order_By>;
  program_id?: InputMaybe<Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: track */
export type Track_Pk_Columns_Input = {
  /** L'identifiant unique du parcours. */
  id: Scalars['Int']['input'];
};

/** select columns of table "track" */
export enum Track_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Visible = 'visible'
}

/** select "track_aggregate_bool_exp_bool_and_arguments_columns" columns of table "track" */
export enum Track_Select_Column_Track_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** select "track_aggregate_bool_exp_bool_or_arguments_columns" columns of table "track" */
export enum Track_Select_Column_Track_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "track" */
export type Track_Set_Input = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Track_Stddev_Fields = {
  __typename?: 'track_stddev_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "track" */
export type Track_Stddev_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Track_Stddev_Pop_Fields = {
  __typename?: 'track_stddev_pop_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "track" */
export type Track_Stddev_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Track_Stddev_Samp_Fields = {
  __typename?: 'track_stddev_samp_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "track" */
export type Track_Stddev_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "track" */
export type Track_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Track_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Track_Stream_Cursor_Value_Input = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  name_short?: InputMaybe<Scalars['String']['input']>;
  nom_import?: InputMaybe<Scalars['String']['input']>;
  program_id?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Track_Sum_Fields = {
  __typename?: 'track_sum_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  program_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "track" */
export type Track_Sum_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** update columns of table "track" */
export enum Track_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'name_short',
  /** column name */
  NomImport = 'nom_import',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  Visible = 'visible'
}

export type Track_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Track_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Track_Set_Input>;
  /** filter the rows which have to be updated */
  where: Track_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Track_Var_Pop_Fields = {
  __typename?: 'track_var_pop_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "track" */
export type Track_Var_Pop_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Track_Var_Samp_Fields = {
  __typename?: 'track_var_samp_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "track" */
export type Track_Var_Samp_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Track_Variance_Fields = {
  __typename?: 'track_variance_fields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "track" */
export type Track_Variance_Order_By = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
};

/** Table contenant les différentes années. */
export type Year = {
  __typename?: 'year';
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  courses_aggregate: Course_Aggregate;
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  services_aggregate: Service_Aggregate;
  /** Le numéro de l'année (unique). */
  value: Scalars['Int']['output'];
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différentes années. */
export type YearCoursesArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différentes années. */
export type YearCourses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Course_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Course_Order_By>>;
  where?: InputMaybe<Course_Bool_Exp>;
};


/** Table contenant les différentes années. */
export type YearServicesArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};


/** Table contenant les différentes années. */
export type YearServices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Service_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Service_Order_By>>;
  where?: InputMaybe<Service_Bool_Exp>;
};

/** aggregated selection of "year" */
export type Year_Aggregate = {
  __typename?: 'year_aggregate';
  aggregate?: Maybe<Year_Aggregate_Fields>;
  nodes: Array<Year>;
};

/** aggregate fields of "year" */
export type Year_Aggregate_Fields = {
  __typename?: 'year_aggregate_fields';
  avg?: Maybe<Year_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Year_Max_Fields>;
  min?: Maybe<Year_Min_Fields>;
  stddev?: Maybe<Year_Stddev_Fields>;
  stddev_pop?: Maybe<Year_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Year_Stddev_Samp_Fields>;
  sum?: Maybe<Year_Sum_Fields>;
  var_pop?: Maybe<Year_Var_Pop_Fields>;
  var_samp?: Maybe<Year_Var_Samp_Fields>;
  variance?: Maybe<Year_Variance_Fields>;
};


/** aggregate fields of "year" */
export type Year_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Year_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Year_Avg_Fields = {
  __typename?: 'year_avg_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "year". All fields are combined with a logical 'AND'. */
export type Year_Bool_Exp = {
  _and?: InputMaybe<Array<Year_Bool_Exp>>;
  _not?: InputMaybe<Year_Bool_Exp>;
  _or?: InputMaybe<Array<Year_Bool_Exp>>;
  courses?: InputMaybe<Course_Bool_Exp>;
  courses_aggregate?: InputMaybe<Course_Aggregate_Bool_Exp>;
  current?: InputMaybe<Boolean_Comparison_Exp>;
  services?: InputMaybe<Service_Bool_Exp>;
  services_aggregate?: InputMaybe<Service_Aggregate_Bool_Exp>;
  value?: InputMaybe<Int_Comparison_Exp>;
  visible?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "year" */
export enum Year_Constraint {
  /** unique or primary key constraint on columns "current" */
  AnneeEnCoursKey = 'annee_en_cours_key',
  /** unique or primary key constraint on columns "value" */
  AnneePkey = 'annee_pkey'
}

/** input type for incrementing numeric columns in table "year" */
export type Year_Inc_Input = {
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "year" */
export type Year_Insert_Input = {
  courses?: InputMaybe<Course_Arr_Rel_Insert_Input>;
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<Service_Arr_Rel_Insert_Input>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type Year_Max_Fields = {
  __typename?: 'year_max_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Year_Min_Fields = {
  __typename?: 'year_min_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "year" */
export type Year_Mutation_Response = {
  __typename?: 'year_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Year>;
};

/** input type for inserting object relation for remote table "year" */
export type Year_Obj_Rel_Insert_Input = {
  data: Year_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Year_On_Conflict>;
};

/** on_conflict condition type for table "year" */
export type Year_On_Conflict = {
  constraint: Year_Constraint;
  update_columns?: Array<Year_Update_Column>;
  where?: InputMaybe<Year_Bool_Exp>;
};

/** Ordering options when selecting data from "year". */
export type Year_Order_By = {
  courses_aggregate?: InputMaybe<Course_Aggregate_Order_By>;
  current?: InputMaybe<Order_By>;
  services_aggregate?: InputMaybe<Service_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
  visible?: InputMaybe<Order_By>;
};

/** primary key columns input for table: year */
export type Year_Pk_Columns_Input = {
  /** Le numéro de l'année (unique). */
  value: Scalars['Int']['input'];
};

/** select columns of table "year" */
export enum Year_Select_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Value = 'value',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "year" */
export type Year_Set_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Year_Stddev_Fields = {
  __typename?: 'year_stddev_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Year_Stddev_Pop_Fields = {
  __typename?: 'year_stddev_pop_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Year_Stddev_Samp_Fields = {
  __typename?: 'year_stddev_samp_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "year" */
export type Year_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Year_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Year_Stream_Cursor_Value_Input = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type Year_Sum_Fields = {
  __typename?: 'year_sum_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "year" */
export enum Year_Update_Column {
  /** column name */
  Current = 'current',
  /** column name */
  Value = 'value',
  /** column name */
  Visible = 'visible'
}

export type Year_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Year_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Year_Set_Input>;
  /** filter the rows which have to be updated */
  where: Year_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Year_Var_Pop_Fields = {
  __typename?: 'year_var_pop_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Year_Var_Samp_Fields = {
  __typename?: 'year_var_samp_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Year_Variance_Fields = {
  __typename?: 'year_variance_fields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

export type GetYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYearsQuery = { __typename?: 'query_root', years: Array<{ __typename?: 'year', value: number, current?: boolean | null, visible: boolean }> };

export type GetCurrentPhaseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentPhaseQuery = { __typename?: 'query_root', phases: Array<{ __typename?: 'phase', value: string }> };

export type CourseRowFragment = { __typename?: 'course', id: number, name: string, visible: boolean, shortName?: string | null, semester: number, hoursPerGroup?: number | null, numberOfGroups?: number | null, totalHours?: number | null, program: { __typename?: 'program', id: number, name: string, visible: boolean, shortName?: string | null, degree: { __typename?: 'degree', id: number, name: string, visible: boolean, shortName?: string | null } }, track?: { __typename?: 'track', id: number, name: string, visible: boolean, shortName?: string | null } | null, courseType: { __typename?: 'course_type', value: string, label: string }, totalAssigned: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', hours?: number | null } | null } | null }, totalPrimary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', hours?: number | null } | null } | null }, totalSecondary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', hours?: number | null } | null } | null }, totalPriority: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', hours?: number | null } | null } | null } } & { ' $fragmentName'?: 'CourseRowFragment' };

export type TeacherCoursesFragment = { __typename?: 'service', name: { __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null }, requests: Array<{ __typename?: 'request', type: string, hours: number, courseId: number }> } & { ' $fragmentName'?: 'TeacherCoursesFragment' };

export type TeacherRowFragment = { __typename?: 'service', hours: number, message?: string | null, teacher: { __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null, visible: boolean }, totalModifications: { __typename?: 'service_modification_aggregate', aggregate?: { __typename?: 'service_modification_aggregate_fields', sum?: { __typename?: 'service_modification_sum_fields', hours?: number | null } | null } | null }, totalAssigned: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null }, totalPrimary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null }, totalSecondary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null } } & { ' $fragmentName'?: 'TeacherRowFragment' };

export type PriorityChipDataFragment = { __typename?: 'priority', seniority?: number | null, isPriority?: boolean | null, service: { __typename?: 'service', teacher: { __typename?: 'teacher', firstname: string, lastname: string, alias?: string | null } } } & { ' $fragmentName'?: 'PriorityChipDataFragment' };

export type RequestCardDataFragment = { __typename?: 'request', id: number, type: string, hours: number, isPriority?: boolean | null, service: { __typename?: 'service', id: number, teacher: { __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null } }, course: { __typename?: 'course', id: number, hoursPerGroup?: number | null } } & { ' $fragmentName'?: 'RequestCardDataFragment' };

export type RequestFormDataFragment = { __typename?: 'course', courseId: number, hoursPerGroup?: number | null } & { ' $fragmentName'?: 'RequestFormDataFragment' };

export type GetActiveTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveTeachersQuery = { __typename?: 'query_root', teachers: Array<{ __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null }> };

export type CourseArchivesFragment = { __typename?: 'course', parent?: { __typename?: 'course', year: number, requests: Array<(
      { __typename?: 'request', id: number }
      & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
    )>, parent?: { __typename?: 'course', year: number, requests: Array<(
        { __typename?: 'request', id: number }
        & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
      )>, parent?: { __typename?: 'course', year: number, requests: Array<(
          { __typename?: 'request', id: number }
          & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
        )> } | null } | null } | null } & { ' $fragmentName'?: 'CourseArchivesFragment' };

export type CourseCoordinatorsFragment = { __typename?: 'course', coordinators: Array<{ __typename?: 'coordinator', comment?: string | null, username: { __typename?: 'teacher', firstname: string, lastname: string, alias?: string | null } }>, program: { __typename?: 'program', coordinators: Array<{ __typename?: 'coordinator', comment?: string | null, username: { __typename?: 'teacher', firstname: string, lastname: string, alias?: string | null } }> }, track?: { __typename?: 'track', coordinators: Array<{ __typename?: 'coordinator', comment?: string | null, username: { __typename?: 'teacher', firstname: string, lastname: string, alias?: string | null } }> } | null } & { ' $fragmentName'?: 'CourseCoordinatorsFragment' };

export type CourseDescriptionDataFragment = { __typename?: 'course', description?: string | null, courseId: number, coordinators: Array<{ __typename?: 'coordinator', uid: string }>, program: { __typename?: 'program', coordinators: Array<{ __typename?: 'coordinator', uid: string }> }, track?: { __typename?: 'track', coordinators: Array<{ __typename?: 'coordinator', uid: string }> } | null } & { ' $fragmentName'?: 'CourseDescriptionDataFragment' };

export type UpdateDescriptionMutationVariables = Exact<{
  courseId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDescriptionMutation = { __typename?: 'mutation_root', course?: { __typename?: 'course', id: number } | null };

export type CourseExpansionFragment = { __typename?: 'course', name: string, semester: number, courseType: { __typename?: 'course_type', label: string }, program: { __typename?: 'program', name: string, degree: { __typename?: 'degree', name: string } }, track?: { __typename?: 'track', name: string } | null } & { ' $fragmentName'?: 'CourseExpansionFragment' };

export type CoursePrioritiesFragment = { __typename?: 'course', priorities: Array<(
    { __typename?: 'priority', id: number }
    & { ' $fragmentRefs'?: { 'PriorityChipDataFragment': PriorityChipDataFragment } }
  )> } & { ' $fragmentName'?: 'CoursePrioritiesFragment' };

export type CourseRequestsFragment = (
  { __typename?: 'course', requests: Array<(
    { __typename?: 'request', id: number, type: string }
    & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'RequestFormDataFragment': RequestFormDataFragment } }
) & { ' $fragmentName'?: 'CourseRequestsFragment' };

export type CourseDetailsFragment = (
  { __typename?: 'course', courseId: number }
  & { ' $fragmentRefs'?: { 'CourseExpansionFragment': CourseExpansionFragment;'CourseCoordinatorsFragment': CourseCoordinatorsFragment;'CourseDescriptionDataFragment': CourseDescriptionDataFragment;'CourseRequestsFragment': CourseRequestsFragment;'CoursePrioritiesFragment': CoursePrioritiesFragment;'CourseArchivesFragment': CourseArchivesFragment } }
) & { ' $fragmentName'?: 'CourseDetailsFragment' };

export type SetCurrentYearMutationVariables = Exact<{
  value: Scalars['Int']['input'];
}>;


export type SetCurrentYearMutation = { __typename?: 'mutation_root', years?: { __typename?: 'year_mutation_response', returning: Array<{ __typename?: 'year', value: number }> } | null, current?: { __typename?: 'year', value: number } | null };

export type SetCurrentPhaseMutationVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SetCurrentPhaseMutation = { __typename?: 'mutation_root', phases?: { __typename?: 'phase_mutation_response', returning: Array<{ __typename?: 'phase', value: string }> } | null, enCours?: { __typename?: 'phase', value: string } | null };

export type TeacherMessageFragment = { __typename?: 'service', id: number, uid: string, message?: string | null } & { ' $fragmentName'?: 'TeacherMessageFragment' };

export type UpdateMessageMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateMessageMutation = { __typename?: 'mutation_root', service?: { __typename?: 'service', id: number } | null };

export type TeacherNoServiceFragment = { __typename?: 'teacher', baseServiceHours?: number | null, positionByPosition?: { __typename?: 'position', baseServiceHours?: number | null } | null } & { ' $fragmentName'?: 'TeacherNoServiceFragment' };

export type InsertServiceMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type InsertServiceMutation = { __typename?: 'mutation_root', service?: { __typename?: 'service', id: number } | null };

export type TeacherPrioritiesFragment = { __typename?: 'service', priorities: Array<{ __typename?: 'priority', id: number, seniority?: number | null, isPriority?: boolean | null, course: { __typename?: 'course', name: string, semester: number, shortName?: string | null, typeByType: { __typename?: 'course_type', label: string }, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } }, track?: { __typename?: 'track', name: string, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } } } | null } }> } & { ' $fragmentName'?: 'TeacherPrioritiesFragment' };

export type TeacherRequestsFragment = { __typename?: 'service', assigned: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null }, primary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null }, secondary: { __typename?: 'request_aggregate', aggregate?: { __typename?: 'request_aggregate_fields', sum?: { __typename?: 'request_sum_fields', weightedHours?: number | null } | null } | null } } & { ' $fragmentName'?: 'TeacherRequestsFragment' };

export type TeacherResponsibilitiesFragment = { __typename?: 'teacher', responsibilities: Array<{ __typename?: 'coordinator', id: number, comment?: string | null, program?: { __typename?: 'program', id: number, name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } } | null, track?: { __typename?: 'track', id: number, name: string, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } } } | null, course?: { __typename?: 'course', id: number, year: number, name: string, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } }, track?: { __typename?: 'track', name: string, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } } } | null } | null }> } & { ' $fragmentName'?: 'TeacherResponsibilitiesFragment' };

export type TeacherServiceFragment = (
  { __typename?: 'service' }
  & { ' $fragmentRefs'?: { 'TeacherServiceDetailsFragment': TeacherServiceDetailsFragment;'TeacherRequestsFragment': TeacherRequestsFragment;'TeacherPrioritiesFragment': TeacherPrioritiesFragment;'TeacherMessageFragment': TeacherMessageFragment } }
) & { ' $fragmentName'?: 'TeacherServiceFragment' };

export type GetModificationTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModificationTypesQuery = { __typename?: 'query_root', modificationTypes: Array<{ __typename?: 'service_modification_type', value: string, label: string, description?: string | null }> };

export type TeacherServiceDetailsFragment = { __typename?: 'service', id: number, uid: string, year: number, hours: number, totalModifications: { __typename?: 'service_modification_aggregate', aggregate?: { __typename?: 'service_modification_aggregate_fields', sum?: { __typename?: 'service_modification_sum_fields', hours?: number | null } | null } | null }, modifications: Array<{ __typename?: 'service_modification', id: number, hours: number, modificationType: { __typename?: 'service_modification_type', label: string } }> } & { ' $fragmentName'?: 'TeacherServiceDetailsFragment' };

export type UpsertServiceMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type UpsertServiceMutation = { __typename?: 'mutation_root', service?: { __typename?: 'service', id: number } | null };

export type InsertModificationMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  modificationType: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type InsertModificationMutation = { __typename?: 'mutation_root', serviceModification?: { __typename?: 'service_modification', id: number } | null };

export type DeleteModificationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteModificationMutation = { __typename?: 'mutation_root', serviceModification?: { __typename?: 'service_modification', id: number } | null };

export type TeacherTitleFragment = { __typename?: 'teacher', firstname: string, lastname: string, alias?: string | null, positionByPosition?: { __typename?: 'position', label: string } | null } & { ' $fragmentName'?: 'TeacherTitleFragment' };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetUserProfileQuery = { __typename?: 'query_root', profile?: { __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null, active: boolean } | null };

export type GetAssignmentsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<Request_Bool_Exp>;
}>;


export type GetAssignmentsQuery = { __typename?: 'query_root', assignments: Array<{ __typename?: 'request', course: { __typename?: 'course', name: string, semester: number, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } }, track?: { __typename?: 'track', name: string, shortName?: string | null, program: { __typename?: 'program', name: string, shortName?: string | null, degree: { __typename?: 'degree', name: string, shortName?: string | null } } } | null, typeByType: { __typename?: 'course_type', label: string } }, service: { __typename?: 'service', teacher: { __typename?: 'teacher', uid: string, firstname: string, lastname: string, alias?: string | null } } }> };

export type DummyMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type DummyMutationMutation = { __typename?: 'mutation_root', requests?: { __typename?: 'request_mutation_response', returning: Array<{ __typename?: 'request', id: number }> } | null };

export type GetServiceByCourseIdQueryVariables = Exact<{
  uid: Scalars['String']['input'];
  courseId: Scalars['Int']['input'];
}>;


export type GetServiceByCourseIdQuery = { __typename?: 'query_root', course?: { __typename?: 'course', year: number, yearByYear: { __typename?: 'year', services: Array<{ __typename?: 'service', id: number }> } } | null };

export type GetRequestQueryVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
}>;


export type GetRequestQuery = { __typename?: 'query_root', requests: Array<{ __typename?: 'request', hours: number }> };

export type UpsertRequestMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type UpsertRequestMutation = { __typename?: 'mutation_root', request?: { __typename?: 'request', id: number } | null };

export type DeleteRequestMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
}>;


export type DeleteRequestMutation = { __typename?: 'mutation_root', requests?: { __typename?: 'request_mutation_response', returning: Array<{ __typename?: 'request', id: number }> } | null };

export type DeleteRequestByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRequestByIdMutation = { __typename?: 'mutation_root', request?: { __typename?: 'request', id: number, type: string } | null };

export type GetServiceQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetServiceQuery = { __typename?: 'query_root', teacher?: { __typename?: 'teacher', services: Array<{ __typename?: 'service', id: number }> } | null };

export type GetCourseRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
}>;


export type GetCourseRowsQuery = { __typename?: 'query_root', courses: Array<(
    { __typename?: 'course' }
    & { ' $fragmentRefs'?: { 'CourseRowFragment': CourseRowFragment } }
  )> };

export type GetTeacherRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<Teacher_Bool_Exp>;
}>;


export type GetTeacherRowsQuery = { __typename?: 'query_root', teachers: Array<(
    { __typename?: 'service' }
    & { ' $fragmentRefs'?: { 'TeacherRowFragment': TeacherRowFragment } }
  )> };

export type GetCourseDetailsQueryVariables = Exact<{
  courseId: Scalars['Int']['input'];
}>;


export type GetCourseDetailsQuery = { __typename?: 'query_root', course?: (
    { __typename?: 'course' }
    & { ' $fragmentRefs'?: { 'CourseDetailsFragment': CourseDetailsFragment } }
  ) | null };

export type GetTeacherCoursesQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetTeacherCoursesQuery = { __typename?: 'query_root', services: Array<(
    { __typename?: 'service' }
    & { ' $fragmentRefs'?: { 'TeacherCoursesFragment': TeacherCoursesFragment } }
  )> };

export type GetTeacherDetailsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetTeacherDetailsQuery = { __typename?: 'query_root', teacher?: (
    { __typename?: 'teacher', responsibilitiesAggregate: { __typename?: 'coordinator_aggregate', aggregate?: { __typename?: 'coordinator_aggregate_fields', count: number } | null }, services: Array<(
      { __typename?: 'service', id: number }
      & { ' $fragmentRefs'?: { 'TeacherServiceFragment': TeacherServiceFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'TeacherTitleFragment': TeacherTitleFragment;'TeacherResponsibilitiesFragment': TeacherResponsibilitiesFragment;'TeacherNoServiceFragment': TeacherNoServiceFragment } }
  ) | null };

export const CourseRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"semester"},"name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groups_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"total_hours_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_priority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseRowFragment, unknown>;
export const TeacherCoursesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCourses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"course_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TeacherCoursesFragment, unknown>;
export const TeacherRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modifications_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherRowFragment, unknown>;
export const CourseExpansionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CourseExpansionFragment, unknown>;
export const CourseCoordinatorsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}}]} as unknown as DocumentNode<CourseCoordinatorsFragment, unknown>;
export const CourseDescriptionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<CourseDescriptionDataFragment, unknown>;
export const RequestFormDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}}]} as unknown as DocumentNode<RequestFormDataFragment, unknown>;
export const RequestCardDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]} as unknown as DocumentNode<RequestCardDataFragment, unknown>;
export const CourseRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]} as unknown as DocumentNode<CourseRequestsFragment, unknown>;
export const PriorityChipDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]} as unknown as DocumentNode<PriorityChipDataFragment, unknown>;
export const CoursePrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]} as unknown as DocumentNode<CoursePrioritiesFragment, unknown>;
export const CourseArchivesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]} as unknown as DocumentNode<CourseArchivesFragment, unknown>;
export const CourseDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescriptionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseDetailsFragment, unknown>;
export const TeacherNoServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"baseServiceHours"},"name":{"kind":"Name","value":"base_service_hours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"baseServiceHours"},"name":{"kind":"Name","value":"base_service_hours"}}]}}]}}]} as unknown as DocumentNode<TeacherNoServiceFragment, unknown>;
export const TeacherResponsibilitiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherResponsibilities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsibilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program_id"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track_id"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<TeacherResponsibilitiesFragment, unknown>;
export const TeacherServiceDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modifications_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TeacherServiceDetailsFragment, unknown>;
export const TeacherRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TeacherRequestsFragment, unknown>;
export const TeacherPrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]}}]} as unknown as DocumentNode<TeacherPrioritiesFragment, unknown>;
export const TeacherMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherMessageFragment, unknown>;
export const TeacherServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherPriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherMessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modifications_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherServiceFragment, unknown>;
export const TeacherTitleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<TeacherTitleFragment, unknown>;
export const GetYearsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetYears"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"year"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}}]}}]} as unknown as DocumentNode<GetYearsQuery, GetYearsQueryVariables>;
export const GetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentPhase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"phase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCurrentPhaseQuery, GetCurrentPhaseQueryVariables>;
export const GetActiveTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"teacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]} as unknown as DocumentNode<GetActiveTeachersQuery, GetActiveTeachersQueryVariables>;
export const UpdateDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"update_course_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>;
export const SetCurrentYearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentYear"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"update_year"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"current"},"name":{"kind":"Name","value":"update_year_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentYearMutation, SetCurrentYearMutationVariables>;
export const SetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentPhase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"update_phase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"enCours"},"name":{"kind":"Name","value":"update_phase_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentPhaseMutation, SetCurrentPhaseMutationVariables>;
export const UpdateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"update_service_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const InsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insert_service_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertServiceMutation, InsertServiceMutationVariables>;
export const GetModificationTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetModificationTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modificationTypes"},"name":{"kind":"Name","value":"service_modification_type"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetModificationTypesQuery, GetModificationTypesQueryVariables>;
export const UpsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insert_service_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"service_year_uid_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertServiceMutation, UpsertServiceMutationVariables>;
export const InsertModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"insert_service_modification_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertModificationMutation, InsertModificationMutationVariables>;
export const DeleteModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"delete_service_modification_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteModificationMutation, DeleteModificationMutationVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"teacher_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetAssignmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"request_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assignments"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]},{"kind":"Variable","name":{"kind":"Name","value":"where"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentsQuery, GetAssignmentsQueryVariables>;
export const DummyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DummyMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"insert_request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DummyMutationMutation, DummyMutationMutationVariables>;
export const GetServiceByCourseIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceByCourseId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"course_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"yearByYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceByCourseIdQuery, GetServiceByCourseIdQueryVariables>;
export const GetRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetRequestQuery, GetRequestQueryVariables>;
export const UpsertRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"insert_request_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"request_service_id_course_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertRequestMutation, UpsertRequestMutationVariables>;
export const DeleteRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"delete_request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteRequestMutation, DeleteRequestMutationVariables>;
export const DeleteRequestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"delete_request_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteRequestByIdMutation, DeleteRequestByIdMutationVariables>;
export const GetServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacher_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceQuery, GetServiceQueryVariables>;
export const GetCourseRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courses"},"name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours_effective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"groups_effective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"semester"},"name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groups_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"total_hours_effective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"is_priority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseRowsQuery, GetCourseRowsQueryVariables>;
export const GetTeacherRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"teacher_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modifications_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<GetTeacherRowsQuery, GetTeacherRowsQueryVariables>;
export const GetCourseDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"course_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"username"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hours_effective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescriptionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}}]} as unknown as DocumentNode<GetCourseDetailsQuery, GetCourseDetailsQueryVariables>;
export const GetTeacherCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherCourses"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCourses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"name"},"name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"course_id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetTeacherCoursesQuery, GetTeacherCoursesQueryVariables>;
export const GetTeacherDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacher_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"responsibilitiesAggregate"},"name":{"kind":"Name","value":"responsibilities_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherTitle"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherResponsibilities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherNoService"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherService"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modifications_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"attribution","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"principale","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requests_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondaire","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"weightedHours"},"name":{"kind":"Name","value":"hours_weighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track_id"},"value":{"kind":"EnumValue","value":"asc"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"asc"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","alias":{"kind":"Name","value":"isPriority"},"name":{"kind":"Name","value":"is_priority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherResponsibilities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsibilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program_id"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track_id"},"value":{"kind":"EnumValue","value":"asc"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course_id"},"value":{"kind":"EnumValue","value":"asc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"shortName"},"name":{"kind":"Name","value":"name_short"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"baseServiceHours"},"name":{"kind":"Name","value":"base_service_hours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"baseServiceHours"},"name":{"kind":"Name","value":"base_service_hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherPriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherMessage"}}]}}]} as unknown as DocumentNode<GetTeacherDetailsQuery, GetTeacherDetailsQueryVariables>;