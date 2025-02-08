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

/** Custom application configuration settings */
export type AppSettings = {
  __typename?: 'AppSettings';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Setting identifier */
  key: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Setting value stored as text */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "app_settings" */
export type AppSettingsAggregate = {
  __typename?: 'AppSettingsAggregate';
  aggregate?: Maybe<AppSettingsAggregateFields>;
  nodes: Array<AppSettings>;
};

/** aggregate fields of "app_settings" */
export type AppSettingsAggregateFields = {
  __typename?: 'AppSettingsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<AppSettingsMaxFields>;
  min?: Maybe<AppSettingsMinFields>;
};


/** aggregate fields of "app_settings" */
export type AppSettingsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AppSettingsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "app_settings". All fields are combined with a logical 'AND'. */
export type AppSettingsBoolExp = {
  _and?: InputMaybe<Array<AppSettingsBoolExp>>;
  _not?: InputMaybe<AppSettingsBoolExp>;
  _or?: InputMaybe<Array<AppSettingsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "app_settings" */
export enum AppSettingsConstraint {
  /** unique or primary key constraint on columns "key" */
  AppSettingsPkey = 'app_settings_pkey'
}

/** input type for inserting data into table "app_settings" */
export type AppSettingsInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting identifier */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting value stored as text */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AppSettingsMaxFields = {
  __typename?: 'AppSettingsMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Setting identifier */
  key?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Setting value stored as text */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AppSettingsMinFields = {
  __typename?: 'AppSettingsMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Setting identifier */
  key?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Setting value stored as text */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "app_settings" */
export type AppSettingsMutationResponse = {
  __typename?: 'AppSettingsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<AppSettings>;
};

/** on_conflict condition type for table "app_settings" */
export type AppSettingsOnConflict = {
  constraint: AppSettingsConstraint;
  updateColumns?: Array<AppSettingsUpdateColumn>;
  where?: InputMaybe<AppSettingsBoolExp>;
};

/** Ordering options when selecting data from "app_settings". */
export type AppSettingsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: app_settings */
export type AppSettingsPkColumnsInput = {
  /** Setting identifier */
  key: Scalars['String']['input'];
};

/** select columns of table "app_settings" */
export enum AppSettingsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "app_settings" */
export type AppSettingsSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting identifier */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting value stored as text */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "app_settings" */
export type AppSettingsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AppSettingsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AppSettingsStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting identifier */
  key?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Setting value stored as text */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "app_settings" */
export enum AppSettingsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type AppSettingsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppSettingsSetInput>;
  /** filter the rows which have to be updated */
  where: AppSettingsBoolExp;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Academic coordination assignments at program, track, or course level */
export type Coordination = {
  __typename?: 'Coordination';
  /** Additional coordination details */
  comment?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  course?: Maybe<Course>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Unique coordination identifier */
  id: Scalars['Int']['output'];
  /** An object relationship */
  program?: Maybe<Program>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  teacher: Teacher;
  /** An object relationship */
  track?: Maybe<Track>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Coordinating teacher */
  uid: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "coordination" */
export type CoordinationAggregate = {
  __typename?: 'CoordinationAggregate';
  aggregate?: Maybe<CoordinationAggregateFields>;
  nodes: Array<Coordination>;
};

export type CoordinationAggregateBoolExp = {
  count?: InputMaybe<CoordinationAggregateBoolExpCount>;
};

/** aggregate fields of "coordination" */
export type CoordinationAggregateFields = {
  __typename?: 'CoordinationAggregateFields';
  avg?: Maybe<CoordinationAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CoordinationMaxFields>;
  min?: Maybe<CoordinationMinFields>;
  stddev?: Maybe<CoordinationStddevFields>;
  stddevPop?: Maybe<CoordinationStddevPopFields>;
  stddevSamp?: Maybe<CoordinationStddevSampFields>;
  sum?: Maybe<CoordinationSumFields>;
  varPop?: Maybe<CoordinationVarPopFields>;
  varSamp?: Maybe<CoordinationVarSampFields>;
  variance?: Maybe<CoordinationVarianceFields>;
};


/** aggregate fields of "coordination" */
export type CoordinationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CoordinationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "coordination" */
export type CoordinationAggregateOrderBy = {
  avg?: InputMaybe<CoordinationAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CoordinationMaxOrderBy>;
  min?: InputMaybe<CoordinationMinOrderBy>;
  stddev?: InputMaybe<CoordinationStddevOrderBy>;
  stddevPop?: InputMaybe<CoordinationStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CoordinationStddevSampOrderBy>;
  sum?: InputMaybe<CoordinationSumOrderBy>;
  varPop?: InputMaybe<CoordinationVarPopOrderBy>;
  varSamp?: InputMaybe<CoordinationVarSampOrderBy>;
  variance?: InputMaybe<CoordinationVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "coordination" */
export type CoordinationArrRelInsertInput = {
  data: Array<CoordinationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CoordinationOnConflict>;
};

/** aggregate avg on columns */
export type CoordinationAvgFields = {
  __typename?: 'CoordinationAvgFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "coordination" */
export type CoordinationAvgOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "coordination". All fields are combined with a logical 'AND'. */
export type CoordinationBoolExp = {
  _and?: InputMaybe<Array<CoordinationBoolExp>>;
  _not?: InputMaybe<CoordinationBoolExp>;
  _or?: InputMaybe<Array<CoordinationBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  program?: InputMaybe<ProgramBoolExp>;
  programId?: InputMaybe<IntComparisonExp>;
  teacher?: InputMaybe<TeacherBoolExp>;
  track?: InputMaybe<TrackBoolExp>;
  trackId?: InputMaybe<IntComparisonExp>;
  uid?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "coordination" */
export enum CoordinationConstraint {
  /** unique or primary key constraint on columns "id" */
  CoordinationPkey = 'coordination_pkey',
  /** unique or primary key constraint on columns "track_id", "uid", "course_id", "program_id" */
  CoordinationUidCourseIdTrackIdProgramIdKey = 'coordination_uid_course_id_track_id_program_id_key'
}

/** input type for incrementing numeric columns in table "coordination" */
export type CoordinationIncInput = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique coordination identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "coordination" */
export type CoordinationInsertInput = {
  /** Additional coordination details */
  comment?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique coordination identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<Scalars['Int']['input']>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  track?: InputMaybe<TrackObjRelInsertInput>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Coordinating teacher */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type CoordinationMaxFields = {
  __typename?: 'CoordinationMaxFields';
  /** Additional coordination details */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Coordinating teacher */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "coordination" */
export type CoordinationMaxOrderBy = {
  /** Additional coordination details */
  comment?: InputMaybe<OrderBy>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
  /** Coordinating teacher */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CoordinationMinFields = {
  __typename?: 'CoordinationMinFields';
  /** Additional coordination details */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Coordinating teacher */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "coordination" */
export type CoordinationMinOrderBy = {
  /** Additional coordination details */
  comment?: InputMaybe<OrderBy>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
  /** Coordinating teacher */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "coordination" */
export type CoordinationMutationResponse = {
  __typename?: 'CoordinationMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Coordination>;
};

/** on_conflict condition type for table "coordination" */
export type CoordinationOnConflict = {
  constraint: CoordinationConstraint;
  updateColumns?: Array<CoordinationUpdateColumn>;
  where?: InputMaybe<CoordinationBoolExp>;
};

/** Ordering options when selecting data from "coordination". */
export type CoordinationOrderBy = {
  comment?: InputMaybe<OrderBy>;
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramOrderBy>;
  programId?: InputMaybe<OrderBy>;
  teacher?: InputMaybe<TeacherOrderBy>;
  track?: InputMaybe<TrackOrderBy>;
  trackId?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: coordination */
export type CoordinationPkColumnsInput = {
  /** Unique coordination identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "coordination" */
export enum CoordinationSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "coordination" */
export type CoordinationSetInput = {
  /** Additional coordination details */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique coordination identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Coordinating teacher */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type CoordinationStddevFields = {
  __typename?: 'CoordinationStddevFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "coordination" */
export type CoordinationStddevOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CoordinationStddevPopFields = {
  __typename?: 'CoordinationStddevPopFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "coordination" */
export type CoordinationStddevPopOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CoordinationStddevSampFields = {
  __typename?: 'CoordinationStddevSampFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "coordination" */
export type CoordinationStddevSampOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "coordination" */
export type CoordinationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CoordinationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoordinationStreamCursorValueInput = {
  /** Additional coordination details */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique coordination identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Coordinating teacher */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type CoordinationSumFields = {
  __typename?: 'CoordinationSumFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "coordination" */
export type CoordinationSumOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** update columns of table "coordination" */
export enum CoordinationUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CoordinationUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CoordinationIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CoordinationSetInput>;
  /** filter the rows which have to be updated */
  where: CoordinationBoolExp;
};

/** aggregate varPop on columns */
export type CoordinationVarPopFields = {
  __typename?: 'CoordinationVarPopFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "coordination" */
export type CoordinationVarPopOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CoordinationVarSampFields = {
  __typename?: 'CoordinationVarSampFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "coordination" */
export type CoordinationVarSampOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CoordinationVarianceFields = {
  __typename?: 'CoordinationVarianceFields';
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique coordination identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "coordination" */
export type CoordinationVarianceOrderBy = {
  /** Course being coordinated (mutually exclusive with program_id and track_id) */
  courseId?: InputMaybe<OrderBy>;
  /** Unique coordination identifier */
  id?: InputMaybe<OrderBy>;
  /** Program being coordinated (mutually exclusive with track_id and course_id) */
  programId?: InputMaybe<OrderBy>;
  /** Track being coordinated (mutually exclusive with program_id and course_id) */
  trackId?: InputMaybe<OrderBy>;
};

/** Detailed course definitions and configurations */
export type Course = {
  __typename?: 'Course';
  /** An array relationship */
  coordinations: Array<Coordination>;
  /** An aggregate relationship */
  coordinationsAggregate: CoordinationAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Computed study year (1-3) based on semester */
  cycleYear: Scalars['Int']['output'];
  /** Detailed course description and objectives */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  enfants: Array<Course>;
  /** An aggregate relationship */
  enfantsAggregate: CourseAggregate;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Standard number of student groups */
  groups: Scalars['Int']['output'];
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Standard teaching hours per group */
  hours: Scalars['Float']['output'];
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** Unique course identifier */
  id: Scalars['Int']['output'];
  /** Full course name */
  name: Scalars['String']['output'];
  /** Abbreviated course name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  parent?: Maybe<Course>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  priorities: Array<Priority>;
  /** An aggregate relationship */
  prioritiesAggregate: PriorityAggregate;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  program: Program;
  /** Program offering this course */
  programId: Scalars['Int']['output'];
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requestsAggregate: RequestAggregate;
  /** Academic semester (1-6) */
  semester: Scalars['Int']['output'];
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** An object relationship */
  track?: Maybe<Track>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Course delivery type affecting workload calculation */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: CourseType;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Controls course visibility in the user interface and queries */
  visible: Scalars['Boolean']['output'];
  /** Academic year when the course is offered */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Detailed course definitions and configurations */
export type CourseCoordinationsArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Detailed course definitions and configurations */
export type CourseCoordinationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Detailed course definitions and configurations */
export type CourseEnfantsArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Detailed course definitions and configurations */
export type CourseEnfantsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Detailed course definitions and configurations */
export type CoursePrioritiesArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Detailed course definitions and configurations */
export type CoursePrioritiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Detailed course definitions and configurations */
export type CourseRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Detailed course definitions and configurations */
export type CourseRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};

/** aggregated selection of "course" */
export type CourseAggregate = {
  __typename?: 'CourseAggregate';
  aggregate?: Maybe<CourseAggregateFields>;
  nodes: Array<Course>;
};

export type CourseAggregateBoolExp = {
  bool_and?: InputMaybe<CourseAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<CourseAggregateBoolExpBool_Or>;
  count?: InputMaybe<CourseAggregateBoolExpCount>;
};

/** aggregate fields of "course" */
export type CourseAggregateFields = {
  __typename?: 'CourseAggregateFields';
  avg?: Maybe<CourseAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CourseMaxFields>;
  min?: Maybe<CourseMinFields>;
  stddev?: Maybe<CourseStddevFields>;
  stddevPop?: Maybe<CourseStddevPopFields>;
  stddevSamp?: Maybe<CourseStddevSampFields>;
  sum?: Maybe<CourseSumFields>;
  varPop?: Maybe<CourseVarPopFields>;
  varSamp?: Maybe<CourseVarSampFields>;
  variance?: Maybe<CourseVarianceFields>;
};


/** aggregate fields of "course" */
export type CourseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "course" */
export type CourseAggregateOrderBy = {
  avg?: InputMaybe<CourseAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CourseMaxOrderBy>;
  min?: InputMaybe<CourseMinOrderBy>;
  stddev?: InputMaybe<CourseStddevOrderBy>;
  stddevPop?: InputMaybe<CourseStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CourseStddevSampOrderBy>;
  sum?: InputMaybe<CourseSumOrderBy>;
  varPop?: InputMaybe<CourseVarPopOrderBy>;
  varSamp?: InputMaybe<CourseVarSampOrderBy>;
  variance?: InputMaybe<CourseVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "course" */
export type CourseArrRelInsertInput = {
  data: Array<CourseInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CourseOnConflict>;
};

/** aggregate avg on columns */
export type CourseAvgFields = {
  __typename?: 'CourseAvgFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "course" */
export type CourseAvgOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type CourseBoolExp = {
  _and?: InputMaybe<Array<CourseBoolExp>>;
  _not?: InputMaybe<CourseBoolExp>;
  _or?: InputMaybe<Array<CourseBoolExp>>;
  coordinations?: InputMaybe<CoordinationBoolExp>;
  coordinationsAggregate?: InputMaybe<CoordinationAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  cycleYear?: InputMaybe<IntComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  enfants?: InputMaybe<CourseBoolExp>;
  enfantsAggregate?: InputMaybe<CourseAggregateBoolExp>;
  ensIdImport?: InputMaybe<StringComparisonExp>;
  formationIdImport?: InputMaybe<StringComparisonExp>;
  groups?: InputMaybe<IntComparisonExp>;
  groupsAdjusted?: InputMaybe<IntComparisonExp>;
  groupsEffective?: InputMaybe<IntComparisonExp>;
  hours?: InputMaybe<FloatComparisonExp>;
  hoursAdjusted?: InputMaybe<FloatComparisonExp>;
  hoursEffective?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  nomImport?: InputMaybe<StringComparisonExp>;
  parent?: InputMaybe<CourseBoolExp>;
  parentId?: InputMaybe<IntComparisonExp>;
  priorities?: InputMaybe<PriorityBoolExp>;
  prioritiesAggregate?: InputMaybe<PriorityAggregateBoolExp>;
  priorityRule?: InputMaybe<IntComparisonExp>;
  program?: InputMaybe<ProgramBoolExp>;
  programId?: InputMaybe<IntComparisonExp>;
  requests?: InputMaybe<RequestBoolExp>;
  requestsAggregate?: InputMaybe<RequestAggregateBoolExp>;
  semester?: InputMaybe<IntComparisonExp>;
  totalHoursEffective?: InputMaybe<FloatComparisonExp>;
  track?: InputMaybe<TrackBoolExp>;
  trackId?: InputMaybe<IntComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  typeByType?: InputMaybe<CourseTypeBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
  year?: InputMaybe<IntComparisonExp>;
  yearByYear?: InputMaybe<YearBoolExp>;
};

/** unique or primary key constraints on table "course" */
export enum CourseConstraint {
  /** unique or primary key constraint on columns "ens_id_import" */
  CourseEnsIdImportKey = 'course_ens_id_import_key',
  /** unique or primary key constraint on columns "id" */
  CoursePkey = 'course_pkey',
  /** unique or primary key constraint on columns "track_id", "semester", "type", "program_id", "name", "year" */
  CourseYearProgramIdTrackIdNameSemesterTypeKey = 'course_year_program_id_track_id_name_semester_type_key'
}

/** input type for incrementing numeric columns in table "course" */
export type CourseIncInput = {
  /** Standard number of student groups */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** Unique course identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** Program offering this course */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Academic year when the course is offered */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "course" */
export type CourseInsertInput = {
  coordinations?: InputMaybe<CoordinationArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed course description and objectives */
  description?: InputMaybe<Scalars['String']['input']>;
  enfants?: InputMaybe<CourseArrRelInsertInput>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Standard number of student groups */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** Unique course identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full course name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated course name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<CourseObjRelInsertInput>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  priorities?: InputMaybe<PriorityArrRelInsertInput>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  /** Program offering this course */
  programId?: InputMaybe<Scalars['Int']['input']>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<Scalars['Int']['input']>;
  track?: InputMaybe<TrackObjRelInsertInput>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Course delivery type affecting workload calculation */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<CourseTypeObjRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls course visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Academic year when the course is offered */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<YearObjRelInsertInput>;
};

/** aggregate max on columns */
export type CourseMaxFields = {
  __typename?: 'CourseMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Detailed course description and objectives */
  description?: Maybe<Scalars['String']['output']>;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full course name */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated course name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Course delivery type affecting workload calculation */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "course" */
export type CourseMaxOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Detailed course description and objectives */
  description?: InputMaybe<OrderBy>;
  ensIdImport?: InputMaybe<OrderBy>;
  formationIdImport?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Full course name */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated course name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Course delivery type affecting workload calculation */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CourseMinFields = {
  __typename?: 'CourseMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Detailed course description and objectives */
  description?: Maybe<Scalars['String']['output']>;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full course name */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated course name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Course delivery type affecting workload calculation */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "course" */
export type CourseMinOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Detailed course description and objectives */
  description?: InputMaybe<OrderBy>;
  ensIdImport?: InputMaybe<OrderBy>;
  formationIdImport?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Full course name */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated course name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Course delivery type affecting workload calculation */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "course" */
export type CourseMutationResponse = {
  __typename?: 'CourseMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type CourseObjRelInsertInput = {
  data: CourseInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CourseOnConflict>;
};

/** on_conflict condition type for table "course" */
export type CourseOnConflict = {
  constraint: CourseConstraint;
  updateColumns?: Array<CourseUpdateColumn>;
  where?: InputMaybe<CourseBoolExp>;
};

/** Ordering options when selecting data from "course". */
export type CourseOrderBy = {
  coordinationsAggregate?: InputMaybe<CoordinationAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  cycleYear?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  enfantsAggregate?: InputMaybe<CourseAggregateOrderBy>;
  ensIdImport?: InputMaybe<OrderBy>;
  formationIdImport?: InputMaybe<OrderBy>;
  groups?: InputMaybe<OrderBy>;
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  hours?: InputMaybe<OrderBy>;
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  parent?: InputMaybe<CourseOrderBy>;
  parentId?: InputMaybe<OrderBy>;
  prioritiesAggregate?: InputMaybe<PriorityAggregateOrderBy>;
  priorityRule?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramOrderBy>;
  programId?: InputMaybe<OrderBy>;
  requestsAggregate?: InputMaybe<RequestAggregateOrderBy>;
  semester?: InputMaybe<OrderBy>;
  totalHoursEffective?: InputMaybe<OrderBy>;
  track?: InputMaybe<TrackOrderBy>;
  trackId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  typeByType?: InputMaybe<CourseTypeOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
  yearByYear?: InputMaybe<YearOrderBy>;
};

/** primary key columns input for table: course */
export type CoursePkColumnsInput = {
  /** Unique course identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "course" */
export enum CourseSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CycleYear = 'cycleYear',
  /** column name */
  Description = 'description',
  /** column name */
  EnsIdImport = 'ensIdImport',
  /** column name */
  FormationIdImport = 'formationIdImport',
  /** column name */
  Groups = 'groups',
  /** column name */
  GroupsAdjusted = 'groupsAdjusted',
  /** column name */
  GroupsEffective = 'groupsEffective',
  /** column name */
  Hours = 'hours',
  /** column name */
  HoursAdjusted = 'hoursAdjusted',
  /** column name */
  HoursEffective = 'hoursEffective',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  PriorityRule = 'priorityRule',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  Semester = 'semester',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible',
  /** column name */
  Year = 'year'
}

/** select "courseAggregateBoolExpBool_andArgumentsColumns" columns of table "course" */
export enum CourseSelectColumnCourseAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** select "courseAggregateBoolExpBool_orArgumentsColumns" columns of table "course" */
export enum CourseSelectColumnCourseAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "course" */
export type CourseSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed course description and objectives */
  description?: InputMaybe<Scalars['String']['input']>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Standard number of student groups */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** Unique course identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full course name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated course name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** Program offering this course */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Course delivery type affecting workload calculation */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls course visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Academic year when the course is offered */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type CourseStddevFields = {
  __typename?: 'CourseStddevFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "course" */
export type CourseStddevOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CourseStddevPopFields = {
  __typename?: 'CourseStddevPopFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "course" */
export type CourseStddevPopOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CourseStddevSampFields = {
  __typename?: 'CourseStddevSampFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "course" */
export type CourseStddevSampOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "course" */
export type CourseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CourseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CourseStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<Scalars['Int']['input']>;
  /** Detailed course description and objectives */
  description?: InputMaybe<Scalars['String']['input']>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Standard number of student groups */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<Scalars['Int']['input']>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<Scalars['Int']['input']>;
  /** Unique course identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full course name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated course name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** Program offering this course */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Course delivery type affecting workload calculation */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls course visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Academic year when the course is offered */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type CourseSumFields = {
  __typename?: 'CourseSumFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Int']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "course" */
export type CourseSumOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** Types of course delivery with associated workload coefficients */
export type CourseType = {
  __typename?: 'CourseType';
  /** Workload multiplier for service hour calculations */
  coefficient: Scalars['Float']['output'];
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Detailed description of the course type and its characteristics */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable type name for display */
  label: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Course type identifier (e.g., lecture, tutorial) */
  value: Scalars['String']['output'];
};


/** Types of course delivery with associated workload coefficients */
export type CourseTypeCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Types of course delivery with associated workload coefficients */
export type CourseTypeCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

/** aggregated selection of "course_type" */
export type CourseTypeAggregate = {
  __typename?: 'CourseTypeAggregate';
  aggregate?: Maybe<CourseTypeAggregateFields>;
  nodes: Array<CourseType>;
};

/** aggregate fields of "course_type" */
export type CourseTypeAggregateFields = {
  __typename?: 'CourseTypeAggregateFields';
  avg?: Maybe<CourseTypeAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CourseTypeMaxFields>;
  min?: Maybe<CourseTypeMinFields>;
  stddev?: Maybe<CourseTypeStddevFields>;
  stddevPop?: Maybe<CourseTypeStddevPopFields>;
  stddevSamp?: Maybe<CourseTypeStddevSampFields>;
  sum?: Maybe<CourseTypeSumFields>;
  varPop?: Maybe<CourseTypeVarPopFields>;
  varSamp?: Maybe<CourseTypeVarSampFields>;
  variance?: Maybe<CourseTypeVarianceFields>;
};


/** aggregate fields of "course_type" */
export type CourseTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CourseTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type CourseTypeAvgFields = {
  __typename?: 'CourseTypeAvgFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "course_type". All fields are combined with a logical 'AND'. */
export type CourseTypeBoolExp = {
  _and?: InputMaybe<Array<CourseTypeBoolExp>>;
  _not?: InputMaybe<CourseTypeBoolExp>;
  _or?: InputMaybe<Array<CourseTypeBoolExp>>;
  coefficient?: InputMaybe<FloatComparisonExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "course_type" */
export enum CourseTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  CourseTypePkey = 'course_type_pkey'
}

/** input type for incrementing numeric columns in table "course_type" */
export type CourseTypeIncInput = {
  /** Workload multiplier for service hour calculations */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "course_type" */
export type CourseTypeInsertInput = {
  /** Workload multiplier for service hour calculations */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the course type and its characteristics */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable type name for display */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Course type identifier (e.g., lecture, tutorial) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CourseTypeMaxFields = {
  __typename?: 'CourseTypeMaxFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the course type and its characteristics */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable type name for display */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Course type identifier (e.g., lecture, tutorial) */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CourseTypeMinFields = {
  __typename?: 'CourseTypeMinFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the course type and its characteristics */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable type name for display */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Course type identifier (e.g., lecture, tutorial) */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "course_type" */
export type CourseTypeMutationResponse = {
  __typename?: 'CourseTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CourseType>;
};

/** input type for inserting object relation for remote table "course_type" */
export type CourseTypeObjRelInsertInput = {
  data: CourseTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CourseTypeOnConflict>;
};

/** on_conflict condition type for table "course_type" */
export type CourseTypeOnConflict = {
  constraint: CourseTypeConstraint;
  updateColumns?: Array<CourseTypeUpdateColumn>;
  where?: InputMaybe<CourseTypeBoolExp>;
};

/** Ordering options when selecting data from "course_type". */
export type CourseTypeOrderBy = {
  coefficient?: InputMaybe<OrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: course_type */
export type CourseTypePkColumnsInput = {
  /** Course type identifier (e.g., lecture, tutorial) */
  value: Scalars['String']['input'];
};

/** select columns of table "course_type" */
export enum CourseTypeSelectColumn {
  /** column name */
  Coefficient = 'coefficient',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "course_type" */
export type CourseTypeSetInput = {
  /** Workload multiplier for service hour calculations */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the course type and its characteristics */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable type name for display */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Course type identifier (e.g., lecture, tutorial) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type CourseTypeStddevFields = {
  __typename?: 'CourseTypeStddevFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type CourseTypeStddevPopFields = {
  __typename?: 'CourseTypeStddevPopFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type CourseTypeStddevSampFields = {
  __typename?: 'CourseTypeStddevSampFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "course_type" */
export type CourseTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CourseTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CourseTypeStreamCursorValueInput = {
  /** Workload multiplier for service hour calculations */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the course type and its characteristics */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable type name for display */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Course type identifier (e.g., lecture, tutorial) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CourseTypeSumFields = {
  __typename?: 'CourseTypeSumFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course_type" */
export enum CourseTypeUpdateColumn {
  /** column name */
  Coefficient = 'coefficient',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type CourseTypeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CourseTypeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CourseTypeSetInput>;
  /** filter the rows which have to be updated */
  where: CourseTypeBoolExp;
};

/** aggregate varPop on columns */
export type CourseTypeVarPopFields = {
  __typename?: 'CourseTypeVarPopFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type CourseTypeVarSampFields = {
  __typename?: 'CourseTypeVarSampFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CourseTypeVarianceFields = {
  __typename?: 'CourseTypeVarianceFields';
  /** Workload multiplier for service hour calculations */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course" */
export enum CourseUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EnsIdImport = 'ensIdImport',
  /** column name */
  FormationIdImport = 'formationIdImport',
  /** column name */
  Groups = 'groups',
  /** column name */
  GroupsAdjusted = 'groupsAdjusted',
  /** column name */
  Hours = 'hours',
  /** column name */
  HoursAdjusted = 'hoursAdjusted',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  PriorityRule = 'priorityRule',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  Semester = 'semester',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible',
  /** column name */
  Year = 'year'
}

export type CourseUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CourseIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CourseSetInput>;
  /** filter the rows which have to be updated */
  where: CourseBoolExp;
};

/** aggregate varPop on columns */
export type CourseVarPopFields = {
  __typename?: 'CourseVarPopFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "course" */
export type CourseVarPopOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CourseVarSampFields = {
  __typename?: 'CourseVarSampFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "course" */
export type CourseVarSampOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CourseVarianceFields = {
  __typename?: 'CourseVarianceFields';
  /** Computed study year (1-3) based on semester */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Standard number of student groups */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Standard teaching hours per group */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Unique course identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to previous year's version of this course */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** Program offering this course */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Academic semester (1-6) */
  semester?: Maybe<Scalars['Float']['output']>;
  /** Calculates total effective teaching hours for a course by multiplying hours_effective by groups_effective */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** Optional track specialization for this course */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** Academic year when the course is offered */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "course" */
export type CourseVarianceOrderBy = {
  /** Computed study year (1-3) based on semester */
  cycleYear?: InputMaybe<OrderBy>;
  /** Standard number of student groups */
  groups?: InputMaybe<OrderBy>;
  /** Modified number of groups if different from standard */
  groupsAdjusted?: InputMaybe<OrderBy>;
  /** Actual number of groups used, defaulting to standard if no adjustment */
  groupsEffective?: InputMaybe<OrderBy>;
  /** Standard teaching hours per group */
  hours?: InputMaybe<OrderBy>;
  /** Modified teaching hours per group if different from standard */
  hoursAdjusted?: InputMaybe<OrderBy>;
  /** Actual teaching hours used, defaulting to standard if no adjustment */
  hoursEffective?: InputMaybe<OrderBy>;
  /** Unique course identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to previous year's version of this course */
  parentId?: InputMaybe<OrderBy>;
  /** Priority duration in years (3=default, 1=none, 0=permanent, NULL=disabled) */
  priorityRule?: InputMaybe<OrderBy>;
  /** Program offering this course */
  programId?: InputMaybe<OrderBy>;
  /** Academic semester (1-6) */
  semester?: InputMaybe<OrderBy>;
  /** Optional track specialization for this course */
  trackId?: InputMaybe<OrderBy>;
  /** Academic year when the course is offered */
  year?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Academic degrees offered by the institution */
export type Degree = {
  __typename?: 'Degree';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Unique degree identifier */
  id: Scalars['Int']['output'];
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name: Scalars['String']['output'];
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  programs: Array<Program>;
  /** An aggregate relationship */
  programsAggregate: ProgramAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Controls degree visibility in the user interface and queries */
  visible: Scalars['Boolean']['output'];
};


/** Academic degrees offered by the institution */
export type DegreeProgramsArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


/** Academic degrees offered by the institution */
export type DegreeProgramsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};

/** aggregated selection of "degree" */
export type DegreeAggregate = {
  __typename?: 'DegreeAggregate';
  aggregate?: Maybe<DegreeAggregateFields>;
  nodes: Array<Degree>;
};

/** aggregate fields of "degree" */
export type DegreeAggregateFields = {
  __typename?: 'DegreeAggregateFields';
  avg?: Maybe<DegreeAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DegreeMaxFields>;
  min?: Maybe<DegreeMinFields>;
  stddev?: Maybe<DegreeStddevFields>;
  stddevPop?: Maybe<DegreeStddevPopFields>;
  stddevSamp?: Maybe<DegreeStddevSampFields>;
  sum?: Maybe<DegreeSumFields>;
  varPop?: Maybe<DegreeVarPopFields>;
  varSamp?: Maybe<DegreeVarSampFields>;
  variance?: Maybe<DegreeVarianceFields>;
};


/** aggregate fields of "degree" */
export type DegreeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DegreeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type DegreeAvgFields = {
  __typename?: 'DegreeAvgFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "degree". All fields are combined with a logical 'AND'. */
export type DegreeBoolExp = {
  _and?: InputMaybe<Array<DegreeBoolExp>>;
  _not?: InputMaybe<DegreeBoolExp>;
  _or?: InputMaybe<Array<DegreeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  programs?: InputMaybe<ProgramBoolExp>;
  programsAggregate?: InputMaybe<ProgramAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "degree" */
export enum DegreeConstraint {
  /** unique or primary key constraint on columns "name" */
  DegreeNameKey = 'degree_name_key',
  /** unique or primary key constraint on columns "id" */
  DegreePkey = 'degree_pkey'
}

/** input type for incrementing numeric columns in table "degree" */
export type DegreeIncInput = {
  /** Unique degree identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "degree" */
export type DegreeInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique degree identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  programs?: InputMaybe<ProgramArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls degree visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type DegreeMaxFields = {
  __typename?: 'DegreeMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique degree identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type DegreeMinFields = {
  __typename?: 'DegreeMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique degree identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "degree" */
export type DegreeMutationResponse = {
  __typename?: 'DegreeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Degree>;
};

/** input type for inserting object relation for remote table "degree" */
export type DegreeObjRelInsertInput = {
  data: DegreeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<DegreeOnConflict>;
};

/** on_conflict condition type for table "degree" */
export type DegreeOnConflict = {
  constraint: DegreeConstraint;
  updateColumns?: Array<DegreeUpdateColumn>;
  where?: InputMaybe<DegreeBoolExp>;
};

/** Ordering options when selecting data from "degree". */
export type DegreeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  programsAggregate?: InputMaybe<ProgramAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: degree */
export type DegreePkColumnsInput = {
  /** Unique degree identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "degree" */
export enum DegreeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "degree" */
export type DegreeSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique degree identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls degree visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type DegreeStddevFields = {
  __typename?: 'DegreeStddevFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type DegreeStddevPopFields = {
  __typename?: 'DegreeStddevPopFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type DegreeStddevSampFields = {
  __typename?: 'DegreeStddevSampFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "degree" */
export type DegreeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DegreeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DegreeStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique degree identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full degree name, unique (e.g., Bachelor of Science) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated degree name (e.g., BSc) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls degree visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type DegreeSumFields = {
  __typename?: 'DegreeSumFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "degree" */
export enum DegreeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

export type DegreeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DegreeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DegreeSetInput>;
  /** filter the rows which have to be updated */
  where: DegreeBoolExp;
};

/** aggregate varPop on columns */
export type DegreeVarPopFields = {
  __typename?: 'DegreeVarPopFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type DegreeVarSampFields = {
  __typename?: 'DegreeVarSampFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type DegreeVarianceFields = {
  __typename?: 'DegreeVarianceFields';
  /** Unique degree identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Float". All fields are combined with logical 'AND'. */
export type FloatComparisonExp = {
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _nin?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** System phases controlling the course assignment workflow */
export type Phase = {
  __typename?: 'Phase';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Current phase flag (TRUE or NULL). Constrained to have at most one current phase */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** Summary of activities and permissions during this phase */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Phase identifier */
  value: Scalars['String']['output'];
};

/** aggregated selection of "phase" */
export type PhaseAggregate = {
  __typename?: 'PhaseAggregate';
  aggregate?: Maybe<PhaseAggregateFields>;
  nodes: Array<Phase>;
};

/** aggregate fields of "phase" */
export type PhaseAggregateFields = {
  __typename?: 'PhaseAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<PhaseMaxFields>;
  min?: Maybe<PhaseMinFields>;
};


/** aggregate fields of "phase" */
export type PhaseAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PhaseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "phase". All fields are combined with a logical 'AND'. */
export type PhaseBoolExp = {
  _and?: InputMaybe<Array<PhaseBoolExp>>;
  _not?: InputMaybe<PhaseBoolExp>;
  _or?: InputMaybe<Array<PhaseBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  current?: InputMaybe<BooleanComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "phase" */
export enum PhaseConstraint {
  /** unique or primary key constraint on columns "current" */
  PhaseCurrentKey = 'phase_current_key',
  /** unique or primary key constraint on columns "value" */
  PhasePkey = 'phase_pkey'
}

/** input type for inserting data into table "phase" */
export type PhaseInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current phase flag (TRUE or NULL). Constrained to have at most one current phase */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Summary of activities and permissions during this phase */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Phase identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PhaseMaxFields = {
  __typename?: 'PhaseMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Summary of activities and permissions during this phase */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Phase identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PhaseMinFields = {
  __typename?: 'PhaseMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Summary of activities and permissions during this phase */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Phase identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "phase" */
export type PhaseMutationResponse = {
  __typename?: 'PhaseMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Phase>;
};

/** on_conflict condition type for table "phase" */
export type PhaseOnConflict = {
  constraint: PhaseConstraint;
  updateColumns?: Array<PhaseUpdateColumn>;
  where?: InputMaybe<PhaseBoolExp>;
};

/** Ordering options when selecting data from "phase". */
export type PhaseOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  current?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: phase */
export type PhasePkColumnsInput = {
  /** Phase identifier */
  value: Scalars['String']['input'];
};

/** select columns of table "phase" */
export enum PhaseSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "phase" */
export type PhaseSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current phase flag (TRUE or NULL). Constrained to have at most one current phase */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Summary of activities and permissions during this phase */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Phase identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "phase" */
export type PhaseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PhaseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PhaseStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current phase flag (TRUE or NULL). Constrained to have at most one current phase */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Summary of activities and permissions during this phase */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Phase identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "phase" */
export enum PhaseUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type PhaseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PhaseSetInput>;
  /** filter the rows which have to be updated */
  where: PhaseBoolExp;
};

/** Teaching positions with associated service hour requirements */
export type Position = {
  __typename?: 'Position';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Optional description of the position */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable position name for display purposes */
  label: Scalars['String']['output'];
  /** An array relationship */
  teachers: Array<Teacher>;
  /** An aggregate relationship */
  teachersAggregate: TeacherAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Position identifier (e.g., professor, lecturer) */
  value: Scalars['String']['output'];
};


/** Teaching positions with associated service hour requirements */
export type PositionTeachersArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


/** Teaching positions with associated service hour requirements */
export type PositionTeachersAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};

/** aggregated selection of "position" */
export type PositionAggregate = {
  __typename?: 'PositionAggregate';
  aggregate?: Maybe<PositionAggregateFields>;
  nodes: Array<Position>;
};

/** aggregate fields of "position" */
export type PositionAggregateFields = {
  __typename?: 'PositionAggregateFields';
  avg?: Maybe<PositionAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PositionMaxFields>;
  min?: Maybe<PositionMinFields>;
  stddev?: Maybe<PositionStddevFields>;
  stddevPop?: Maybe<PositionStddevPopFields>;
  stddevSamp?: Maybe<PositionStddevSampFields>;
  sum?: Maybe<PositionSumFields>;
  varPop?: Maybe<PositionVarPopFields>;
  varSamp?: Maybe<PositionVarSampFields>;
  variance?: Maybe<PositionVarianceFields>;
};


/** aggregate fields of "position" */
export type PositionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PositionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type PositionAvgFields = {
  __typename?: 'PositionAvgFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type PositionBoolExp = {
  _and?: InputMaybe<Array<PositionBoolExp>>;
  _not?: InputMaybe<PositionBoolExp>;
  _or?: InputMaybe<Array<PositionBoolExp>>;
  baseServiceHours?: InputMaybe<FloatComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  teachers?: InputMaybe<TeacherBoolExp>;
  teachersAggregate?: InputMaybe<TeacherAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "position" */
export enum PositionConstraint {
  /** unique or primary key constraint on columns "value" */
  PositionPkey = 'position_pkey'
}

/** input type for incrementing numeric columns in table "position" */
export type PositionIncInput = {
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "position" */
export type PositionInsertInput = {
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Optional description of the position */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable position name for display purposes */
  label?: InputMaybe<Scalars['String']['input']>;
  teachers?: InputMaybe<TeacherArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Position identifier (e.g., professor, lecturer) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PositionMaxFields = {
  __typename?: 'PositionMaxFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Optional description of the position */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable position name for display purposes */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Position identifier (e.g., professor, lecturer) */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PositionMinFields = {
  __typename?: 'PositionMinFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Optional description of the position */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable position name for display purposes */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Position identifier (e.g., professor, lecturer) */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "position" */
export type PositionMutationResponse = {
  __typename?: 'PositionMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Position>;
};

/** input type for inserting object relation for remote table "position" */
export type PositionObjRelInsertInput = {
  data: PositionInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PositionOnConflict>;
};

/** on_conflict condition type for table "position" */
export type PositionOnConflict = {
  constraint: PositionConstraint;
  updateColumns?: Array<PositionUpdateColumn>;
  where?: InputMaybe<PositionBoolExp>;
};

/** Ordering options when selecting data from "position". */
export type PositionOrderBy = {
  baseServiceHours?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  teachersAggregate?: InputMaybe<TeacherAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: position */
export type PositionPkColumnsInput = {
  /** Position identifier (e.g., professor, lecturer) */
  value: Scalars['String']['input'];
};

/** select columns of table "position" */
export enum PositionSelectColumn {
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "position" */
export type PositionSetInput = {
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Optional description of the position */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable position name for display purposes */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Position identifier (e.g., professor, lecturer) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type PositionStddevFields = {
  __typename?: 'PositionStddevFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type PositionStddevPopFields = {
  __typename?: 'PositionStddevPopFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type PositionStddevSampFields = {
  __typename?: 'PositionStddevSampFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "position" */
export type PositionStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PositionStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PositionStreamCursorValueInput = {
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Optional description of the position */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable position name for display purposes */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Position identifier (e.g., professor, lecturer) */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PositionSumFields = {
  __typename?: 'PositionSumFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "position" */
export enum PositionUpdateColumn {
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type PositionUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PositionIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PositionSetInput>;
  /** filter the rows which have to be updated */
  where: PositionBoolExp;
};

/** aggregate varPop on columns */
export type PositionVarPopFields = {
  __typename?: 'PositionVarPopFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type PositionVarSampFields = {
  __typename?: 'PositionVarSampFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PositionVarianceFields = {
  __typename?: 'PositionVarianceFields';
  /** Default annual teaching hours required for this position, can be overridden per teacher */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** Teacher course assignment history and priority status */
export type Priority = {
  __typename?: 'Priority';
  /** An object relationship */
  course: Course;
  /** Course for which priority is tracked */
  courseId: Scalars['Int']['output'];
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Unique priority record identifier */
  id: Scalars['Int']['output'];
  /** Current priority status based on seniority and course rules */
  isPriority?: Maybe<Scalars['Boolean']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  service: Service;
  /** Associated teacher service record */
  serviceId: Scalars['Int']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "priority" */
export type PriorityAggregate = {
  __typename?: 'PriorityAggregate';
  aggregate?: Maybe<PriorityAggregateFields>;
  nodes: Array<Priority>;
};

export type PriorityAggregateBoolExp = {
  bool_and?: InputMaybe<PriorityAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PriorityAggregateBoolExpBool_Or>;
  count?: InputMaybe<PriorityAggregateBoolExpCount>;
};

/** aggregate fields of "priority" */
export type PriorityAggregateFields = {
  __typename?: 'PriorityAggregateFields';
  avg?: Maybe<PriorityAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PriorityMaxFields>;
  min?: Maybe<PriorityMinFields>;
  stddev?: Maybe<PriorityStddevFields>;
  stddevPop?: Maybe<PriorityStddevPopFields>;
  stddevSamp?: Maybe<PriorityStddevSampFields>;
  sum?: Maybe<PrioritySumFields>;
  varPop?: Maybe<PriorityVarPopFields>;
  varSamp?: Maybe<PriorityVarSampFields>;
  variance?: Maybe<PriorityVarianceFields>;
};


/** aggregate fields of "priority" */
export type PriorityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PrioritySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "priority" */
export type PriorityAggregateOrderBy = {
  avg?: InputMaybe<PriorityAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PriorityMaxOrderBy>;
  min?: InputMaybe<PriorityMinOrderBy>;
  stddev?: InputMaybe<PriorityStddevOrderBy>;
  stddevPop?: InputMaybe<PriorityStddevPopOrderBy>;
  stddevSamp?: InputMaybe<PriorityStddevSampOrderBy>;
  sum?: InputMaybe<PrioritySumOrderBy>;
  varPop?: InputMaybe<PriorityVarPopOrderBy>;
  varSamp?: InputMaybe<PriorityVarSampOrderBy>;
  variance?: InputMaybe<PriorityVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "priority" */
export type PriorityArrRelInsertInput = {
  data: Array<PriorityInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PriorityOnConflict>;
};

/** aggregate avg on columns */
export type PriorityAvgFields = {
  __typename?: 'PriorityAvgFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "priority" */
export type PriorityAvgOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "priority". All fields are combined with a logical 'AND'. */
export type PriorityBoolExp = {
  _and?: InputMaybe<Array<PriorityBoolExp>>;
  _not?: InputMaybe<PriorityBoolExp>;
  _or?: InputMaybe<Array<PriorityBoolExp>>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isPriority?: InputMaybe<BooleanComparisonExp>;
  seniority?: InputMaybe<IntComparisonExp>;
  service?: InputMaybe<ServiceBoolExp>;
  serviceId?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "priority" */
export enum PriorityConstraint {
  /** unique or primary key constraint on columns "id" */
  PriorityPkey = 'priority_pkey',
  /** unique or primary key constraint on columns "course_id", "service_id" */
  PriorityServiceIdCourseIdKey = 'priority_service_id_course_id_key'
}

/** input type for incrementing numeric columns in table "priority" */
export type PriorityIncInput = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique priority record identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "priority" */
export type PriorityInsertInput = {
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** Course for which priority is tracked */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique priority record identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Current priority status based on seniority and course rules */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type PriorityMaxFields = {
  __typename?: 'PriorityMaxFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "priority" */
export type PriorityMaxOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PriorityMinFields = {
  __typename?: 'PriorityMinFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "priority" */
export type PriorityMinOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "priority" */
export type PriorityMutationResponse = {
  __typename?: 'PriorityMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Priority>;
};

/** on_conflict condition type for table "priority" */
export type PriorityOnConflict = {
  constraint: PriorityConstraint;
  updateColumns?: Array<PriorityUpdateColumn>;
  where?: InputMaybe<PriorityBoolExp>;
};

/** Ordering options when selecting data from "priority". */
export type PriorityOrderBy = {
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isPriority?: InputMaybe<OrderBy>;
  seniority?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: priority */
export type PriorityPkColumnsInput = {
  /** Unique priority record identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "priority" */
export enum PrioritySelectColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'isPriority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "priorityAggregateBoolExpBool_andArgumentsColumns" columns of table "priority" */
export enum PrioritySelectColumnPriorityAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsPriority = 'isPriority'
}

/** select "priorityAggregateBoolExpBool_orArgumentsColumns" columns of table "priority" */
export enum PrioritySelectColumnPriorityAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsPriority = 'isPriority'
}

/** input type for updating data in table "priority" */
export type PrioritySetInput = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique priority record identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Current priority status based on seniority and course rules */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type PriorityStddevFields = {
  __typename?: 'PriorityStddevFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "priority" */
export type PriorityStddevOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PriorityStddevPopFields = {
  __typename?: 'PriorityStddevPopFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "priority" */
export type PriorityStddevPopOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PriorityStddevSampFields = {
  __typename?: 'PriorityStddevSampFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "priority" */
export type PriorityStddevSampOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "priority" */
export type PriorityStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PriorityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PriorityStreamCursorValueInput = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique priority record identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Current priority status based on seniority and course rules */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type PrioritySumFields = {
  __typename?: 'PrioritySumFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "priority" */
export type PrioritySumOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** update columns of table "priority" */
export enum PriorityUpdateColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'isPriority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PriorityUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PriorityIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PrioritySetInput>;
  /** filter the rows which have to be updated */
  where: PriorityBoolExp;
};

/** aggregate varPop on columns */
export type PriorityVarPopFields = {
  __typename?: 'PriorityVarPopFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "priority" */
export type PriorityVarPopOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PriorityVarSampFields = {
  __typename?: 'PriorityVarSampFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "priority" */
export type PriorityVarSampOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PriorityVarianceFields = {
  __typename?: 'PriorityVarianceFields';
  /** Course for which priority is tracked */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique priority record identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Consecutive years teaching this course before current year */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "priority" */
export type PriorityVarianceOrderBy = {
  /** Course for which priority is tracked */
  courseId?: InputMaybe<OrderBy>;
  /** Unique priority record identifier */
  id?: InputMaybe<OrderBy>;
  /** Consecutive years teaching this course before current year */
  seniority?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Academic programs within each degree */
export type Program = {
  __typename?: 'Program';
  /** An array relationship */
  coordinations: Array<Coordination>;
  /** An aggregate relationship */
  coordinationsAggregate: CoordinationAggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  degree: Degree;
  /** Parent degree for this program */
  degreeId: Scalars['Int']['output'];
  /** Unique program identifier */
  id: Scalars['Int']['output'];
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name: Scalars['String']['output'];
  /** Abbreviated program name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tracks: Array<Track>;
  /** An aggregate relationship */
  tracksAggregate: TrackAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Controls program visibility in the user interface and queries */
  visible: Scalars['Boolean']['output'];
};


/** Academic programs within each degree */
export type ProgramCoordinationsArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Academic programs within each degree */
export type ProgramCoordinationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Academic programs within each degree */
export type ProgramCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Academic programs within each degree */
export type ProgramCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Academic programs within each degree */
export type ProgramTracksArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


/** Academic programs within each degree */
export type ProgramTracksAggregateArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};

/** aggregated selection of "program" */
export type ProgramAggregate = {
  __typename?: 'ProgramAggregate';
  aggregate?: Maybe<ProgramAggregateFields>;
  nodes: Array<Program>;
};

export type ProgramAggregateBoolExp = {
  bool_and?: InputMaybe<ProgramAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<ProgramAggregateBoolExpBool_Or>;
  count?: InputMaybe<ProgramAggregateBoolExpCount>;
};

/** aggregate fields of "program" */
export type ProgramAggregateFields = {
  __typename?: 'ProgramAggregateFields';
  avg?: Maybe<ProgramAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProgramMaxFields>;
  min?: Maybe<ProgramMinFields>;
  stddev?: Maybe<ProgramStddevFields>;
  stddevPop?: Maybe<ProgramStddevPopFields>;
  stddevSamp?: Maybe<ProgramStddevSampFields>;
  sum?: Maybe<ProgramSumFields>;
  varPop?: Maybe<ProgramVarPopFields>;
  varSamp?: Maybe<ProgramVarSampFields>;
  variance?: Maybe<ProgramVarianceFields>;
};


/** aggregate fields of "program" */
export type ProgramAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProgramSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "program" */
export type ProgramAggregateOrderBy = {
  avg?: InputMaybe<ProgramAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProgramMaxOrderBy>;
  min?: InputMaybe<ProgramMinOrderBy>;
  stddev?: InputMaybe<ProgramStddevOrderBy>;
  stddevPop?: InputMaybe<ProgramStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ProgramStddevSampOrderBy>;
  sum?: InputMaybe<ProgramSumOrderBy>;
  varPop?: InputMaybe<ProgramVarPopOrderBy>;
  varSamp?: InputMaybe<ProgramVarSampOrderBy>;
  variance?: InputMaybe<ProgramVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "program" */
export type ProgramArrRelInsertInput = {
  data: Array<ProgramInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ProgramOnConflict>;
};

/** aggregate avg on columns */
export type ProgramAvgFields = {
  __typename?: 'ProgramAvgFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "program" */
export type ProgramAvgOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type ProgramBoolExp = {
  _and?: InputMaybe<Array<ProgramBoolExp>>;
  _not?: InputMaybe<ProgramBoolExp>;
  _or?: InputMaybe<Array<ProgramBoolExp>>;
  coordinations?: InputMaybe<CoordinationBoolExp>;
  coordinationsAggregate?: InputMaybe<CoordinationAggregateBoolExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  degree?: InputMaybe<DegreeBoolExp>;
  degreeId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  nomImport?: InputMaybe<StringComparisonExp>;
  tracks?: InputMaybe<TrackBoolExp>;
  tracksAggregate?: InputMaybe<TrackAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "program" */
export enum ProgramConstraint {
  /** unique or primary key constraint on columns "degree_id", "name" */
  ProgramDegreeIdNameKey = 'program_degree_id_name_key',
  /** unique or primary key constraint on columns "id" */
  ProgramPkey = 'program_pkey'
}

/** input type for incrementing numeric columns in table "program" */
export type ProgramIncInput = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique program identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "program" */
export type ProgramInsertInput = {
  coordinations?: InputMaybe<CoordinationArrRelInsertInput>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  degree?: InputMaybe<DegreeObjRelInsertInput>;
  /** Parent degree for this program */
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique program identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated program name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  tracks?: InputMaybe<TrackArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls program visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type ProgramMaxFields = {
  __typename?: 'ProgramMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated program name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "program" */
export type ProgramMaxOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated program name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProgramMinFields = {
  __typename?: 'ProgramMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated program name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "program" */
export type ProgramMinOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated program name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "program" */
export type ProgramMutationResponse = {
  __typename?: 'ProgramMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Program>;
};

/** input type for inserting object relation for remote table "program" */
export type ProgramObjRelInsertInput = {
  data: ProgramInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProgramOnConflict>;
};

/** on_conflict condition type for table "program" */
export type ProgramOnConflict = {
  constraint: ProgramConstraint;
  updateColumns?: Array<ProgramUpdateColumn>;
  where?: InputMaybe<ProgramBoolExp>;
};

/** Ordering options when selecting data from "program". */
export type ProgramOrderBy = {
  coordinationsAggregate?: InputMaybe<CoordinationAggregateOrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  degree?: InputMaybe<DegreeOrderBy>;
  degreeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  tracksAggregate?: InputMaybe<TrackAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: program */
export type ProgramPkColumnsInput = {
  /** Unique program identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "program" */
export enum ProgramSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DegreeId = 'degreeId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

/** select "programAggregateBoolExpBool_andArgumentsColumns" columns of table "program" */
export enum ProgramSelectColumnProgramAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** select "programAggregateBoolExpBool_orArgumentsColumns" columns of table "program" */
export enum ProgramSelectColumnProgramAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "program" */
export type ProgramSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Parent degree for this program */
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique program identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated program name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls program visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type ProgramStddevFields = {
  __typename?: 'ProgramStddevFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "program" */
export type ProgramStddevOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ProgramStddevPopFields = {
  __typename?: 'ProgramStddevPopFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "program" */
export type ProgramStddevPopOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ProgramStddevSampFields = {
  __typename?: 'ProgramStddevSampFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "program" */
export type ProgramStddevSampOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "program" */
export type ProgramStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProgramStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProgramStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Parent degree for this program */
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique program identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full program name, unique within its degree (e.g., Mathematics) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated program name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls program visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type ProgramSumFields = {
  __typename?: 'ProgramSumFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "program" */
export type ProgramSumOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "program" */
export enum ProgramUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DegreeId = 'degreeId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

export type ProgramUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProgramIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProgramSetInput>;
  /** filter the rows which have to be updated */
  where: ProgramBoolExp;
};

/** aggregate varPop on columns */
export type ProgramVarPopFields = {
  __typename?: 'ProgramVarPopFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "program" */
export type ProgramVarPopOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ProgramVarSampFields = {
  __typename?: 'ProgramVarSampFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "program" */
export type ProgramVarSampOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ProgramVarianceFields = {
  __typename?: 'ProgramVarianceFields';
  /** Parent degree for this program */
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** Unique program identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "program" */
export type ProgramVarianceOrderBy = {
  /** Parent degree for this program */
  degreeId?: InputMaybe<OrderBy>;
  /** Unique program identifier */
  id?: InputMaybe<OrderBy>;
};

/** Teacher requests and assignments for courses */
export type Request = {
  __typename?: 'Request';
  /** An object relationship */
  course: Course;
  /** Requested or assigned course */
  courseId: Scalars['Int']['output'];
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Requested or assigned teaching hours */
  hours: Scalars['Float']['output'];
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id: Scalars['Int']['output'];
  /** Determines if a request is prioritized based on teaching history and course priority rules */
  isPriority?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  service: Service;
  /** Associated teacher service record */
  serviceId: Scalars['Int']['output'];
  /** Type of request (primary choice, backup, or final assignment) */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: RequestType;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "request" */
export type RequestAggregate = {
  __typename?: 'RequestAggregate';
  aggregate?: Maybe<RequestAggregateFields>;
  nodes: Array<Request>;
};

export type RequestAggregateBoolExp = {
  count?: InputMaybe<RequestAggregateBoolExpCount>;
};

/** aggregate fields of "request" */
export type RequestAggregateFields = {
  __typename?: 'RequestAggregateFields';
  avg?: Maybe<RequestAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<RequestMaxFields>;
  min?: Maybe<RequestMinFields>;
  stddev?: Maybe<RequestStddevFields>;
  stddevPop?: Maybe<RequestStddevPopFields>;
  stddevSamp?: Maybe<RequestStddevSampFields>;
  sum?: Maybe<RequestSumFields>;
  varPop?: Maybe<RequestVarPopFields>;
  varSamp?: Maybe<RequestVarSampFields>;
  variance?: Maybe<RequestVarianceFields>;
};


/** aggregate fields of "request" */
export type RequestAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RequestSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "request" */
export type RequestAggregateOrderBy = {
  avg?: InputMaybe<RequestAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RequestMaxOrderBy>;
  min?: InputMaybe<RequestMinOrderBy>;
  stddev?: InputMaybe<RequestStddevOrderBy>;
  stddevPop?: InputMaybe<RequestStddevPopOrderBy>;
  stddevSamp?: InputMaybe<RequestStddevSampOrderBy>;
  sum?: InputMaybe<RequestSumOrderBy>;
  varPop?: InputMaybe<RequestVarPopOrderBy>;
  varSamp?: InputMaybe<RequestVarSampOrderBy>;
  variance?: InputMaybe<RequestVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "request" */
export type RequestArrRelInsertInput = {
  data: Array<RequestInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RequestOnConflict>;
};

/** aggregate avg on columns */
export type RequestAvgFields = {
  __typename?: 'RequestAvgFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "request" */
export type RequestAvgOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "request". All fields are combined with a logical 'AND'. */
export type RequestBoolExp = {
  _and?: InputMaybe<Array<RequestBoolExp>>;
  _not?: InputMaybe<RequestBoolExp>;
  _or?: InputMaybe<Array<RequestBoolExp>>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  hours?: InputMaybe<FloatComparisonExp>;
  hoursWeighted?: InputMaybe<FloatComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isPriority?: InputMaybe<BooleanComparisonExp>;
  service?: InputMaybe<ServiceBoolExp>;
  serviceId?: InputMaybe<IntComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  typeByType?: InputMaybe<RequestTypeBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "request" */
export enum RequestConstraint {
  /** unique or primary key constraint on columns "id" */
  RequestPkey = 'request_pkey',
  /** unique or primary key constraint on columns "type", "course_id", "service_id" */
  RequestServiceIdCourseIdTypeKey = 'request_service_id_course_id_type_key'
}

/** input type for incrementing numeric columns in table "request" */
export type RequestIncInput = {
  /** Requested or assigned course */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique request identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "request" */
export type RequestInsertInput = {
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** Requested or assigned course */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique request identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<RequestTypeObjRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type RequestMaxFields = {
  __typename?: 'RequestMaxFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "request" */
export type RequestMaxOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RequestMinFields = {
  __typename?: 'RequestMinFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "request" */
export type RequestMinOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "request" */
export type RequestMutationResponse = {
  __typename?: 'RequestMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Request>;
};

/** on_conflict condition type for table "request" */
export type RequestOnConflict = {
  constraint: RequestConstraint;
  updateColumns?: Array<RequestUpdateColumn>;
  where?: InputMaybe<RequestBoolExp>;
};

/** Ordering options when selecting data from "request". */
export type RequestOrderBy = {
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  hours?: InputMaybe<OrderBy>;
  hoursWeighted?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isPriority?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  typeByType?: InputMaybe<RequestTypeOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: request */
export type RequestPkColumnsInput = {
  /** Unique request identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "request" */
export enum RequestSelectColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "request" */
export type RequestSetInput = {
  /** Requested or assigned course */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique request identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type RequestStddevFields = {
  __typename?: 'RequestStddevFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "request" */
export type RequestStddevOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type RequestStddevPopFields = {
  __typename?: 'RequestStddevPopFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "request" */
export type RequestStddevPopOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type RequestStddevSampFields = {
  __typename?: 'RequestStddevSampFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "request" */
export type RequestStddevSampOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "request" */
export type RequestStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RequestStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RequestStreamCursorValueInput = {
  /** Requested or assigned course */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique request identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of request (primary choice, backup, or final assignment) */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type RequestSumFields = {
  __typename?: 'RequestSumFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "request" */
export type RequestSumOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Types of teaching assignment requests in workflow */
export type RequestType = {
  __typename?: 'RequestType';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Detailed description of the request type and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requestsAggregate: RequestAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Request type identifier */
  value: Scalars['String']['output'];
};


/** Types of teaching assignment requests in workflow */
export type RequestTypeRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Types of teaching assignment requests in workflow */
export type RequestTypeRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};

/** aggregated selection of "request_type" */
export type RequestTypeAggregate = {
  __typename?: 'RequestTypeAggregate';
  aggregate?: Maybe<RequestTypeAggregateFields>;
  nodes: Array<RequestType>;
};

/** aggregate fields of "request_type" */
export type RequestTypeAggregateFields = {
  __typename?: 'RequestTypeAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<RequestTypeMaxFields>;
  min?: Maybe<RequestTypeMinFields>;
};


/** aggregate fields of "request_type" */
export type RequestTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RequestTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "request_type". All fields are combined with a logical 'AND'. */
export type RequestTypeBoolExp = {
  _and?: InputMaybe<Array<RequestTypeBoolExp>>;
  _not?: InputMaybe<RequestTypeBoolExp>;
  _or?: InputMaybe<Array<RequestTypeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  requests?: InputMaybe<RequestBoolExp>;
  requestsAggregate?: InputMaybe<RequestAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "request_type" */
export enum RequestTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  RequestTypePkey = 'request_type_pkey'
}

/** input type for inserting data into table "request_type" */
export type RequestTypeInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the request type and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Request type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RequestTypeMaxFields = {
  __typename?: 'RequestTypeMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the request type and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Request type identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RequestTypeMinFields = {
  __typename?: 'RequestTypeMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed description of the request type and its purpose */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Request type identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "request_type" */
export type RequestTypeMutationResponse = {
  __typename?: 'RequestTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<RequestType>;
};

/** input type for inserting object relation for remote table "request_type" */
export type RequestTypeObjRelInsertInput = {
  data: RequestTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RequestTypeOnConflict>;
};

/** on_conflict condition type for table "request_type" */
export type RequestTypeOnConflict = {
  constraint: RequestTypeConstraint;
  updateColumns?: Array<RequestTypeUpdateColumn>;
  where?: InputMaybe<RequestTypeBoolExp>;
};

/** Ordering options when selecting data from "request_type". */
export type RequestTypeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  requestsAggregate?: InputMaybe<RequestAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: request_type */
export type RequestTypePkColumnsInput = {
  /** Request type identifier */
  value: Scalars['String']['input'];
};

/** select columns of table "request_type" */
export enum RequestTypeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "request_type" */
export type RequestTypeSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the request type and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Request type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "request_type" */
export type RequestTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RequestTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RequestTypeStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed description of the request type and its purpose */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Request type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "request_type" */
export enum RequestTypeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type RequestTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RequestTypeSetInput>;
  /** filter the rows which have to be updated */
  where: RequestTypeBoolExp;
};

/** update columns of table "request" */
export enum RequestUpdateColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type RequestUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RequestIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RequestSetInput>;
  /** filter the rows which have to be updated */
  where: RequestBoolExp;
};

/** aggregate varPop on columns */
export type RequestVarPopFields = {
  __typename?: 'RequestVarPopFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "request" */
export type RequestVarPopOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type RequestVarSampFields = {
  __typename?: 'RequestVarSampFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "request" */
export type RequestVarSampOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RequestVarianceFields = {
  __typename?: 'RequestVarianceFields';
  /** Requested or assigned course */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Requested or assigned teaching hours */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Calculates weighted hours for a request by multiplying the requested hours by the course type coefficient */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  /** Unique request identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Associated teacher service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "request" */
export type RequestVarianceOrderBy = {
  /** Requested or assigned course */
  courseId?: InputMaybe<OrderBy>;
  /** Requested or assigned teaching hours */
  hours?: InputMaybe<OrderBy>;
  /** Unique request identifier */
  id?: InputMaybe<OrderBy>;
  /** Associated teacher service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Teacher role assignments for system privileges */
export type Role = {
  __typename?: 'Role';
  /** Additional information about this privilege assignment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Unique role assignment identifier */
  id: Scalars['Int']['output'];
  /** An object relationship */
  roleType: RoleType;
  /** An object relationship */
  teacher: Teacher;
  /** Type of privileged role */
  type: Scalars['String']['output'];
  /** Teacher identifier with role access */
  uid: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "role" */
export type RoleAggregate = {
  __typename?: 'RoleAggregate';
  aggregate?: Maybe<RoleAggregateFields>;
  nodes: Array<Role>;
};

export type RoleAggregateBoolExp = {
  count?: InputMaybe<RoleAggregateBoolExpCount>;
};

/** aggregate fields of "role" */
export type RoleAggregateFields = {
  __typename?: 'RoleAggregateFields';
  avg?: Maybe<RoleAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<RoleMaxFields>;
  min?: Maybe<RoleMinFields>;
  stddev?: Maybe<RoleStddevFields>;
  stddevPop?: Maybe<RoleStddevPopFields>;
  stddevSamp?: Maybe<RoleStddevSampFields>;
  sum?: Maybe<RoleSumFields>;
  varPop?: Maybe<RoleVarPopFields>;
  varSamp?: Maybe<RoleVarSampFields>;
  variance?: Maybe<RoleVarianceFields>;
};


/** aggregate fields of "role" */
export type RoleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "role" */
export type RoleAggregateOrderBy = {
  avg?: InputMaybe<RoleAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoleMaxOrderBy>;
  min?: InputMaybe<RoleMinOrderBy>;
  stddev?: InputMaybe<RoleStddevOrderBy>;
  stddevPop?: InputMaybe<RoleStddevPopOrderBy>;
  stddevSamp?: InputMaybe<RoleStddevSampOrderBy>;
  sum?: InputMaybe<RoleSumOrderBy>;
  varPop?: InputMaybe<RoleVarPopOrderBy>;
  varSamp?: InputMaybe<RoleVarSampOrderBy>;
  variance?: InputMaybe<RoleVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "role" */
export type RoleArrRelInsertInput = {
  data: Array<RoleInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RoleOnConflict>;
};

/** aggregate avg on columns */
export type RoleAvgFields = {
  __typename?: 'RoleAvgFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "role" */
export type RoleAvgOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type RoleBoolExp = {
  _and?: InputMaybe<Array<RoleBoolExp>>;
  _not?: InputMaybe<RoleBoolExp>;
  _or?: InputMaybe<Array<RoleBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  roleType?: InputMaybe<RoleTypeBoolExp>;
  teacher?: InputMaybe<TeacherBoolExp>;
  type?: InputMaybe<StringComparisonExp>;
  uid?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "role" */
export enum RoleConstraint {
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'role_pkey',
  /** unique or primary key constraint on columns "uid", "type" */
  RoleUidTypeKey = 'role_uid_type_key'
}

/** input type for incrementing numeric columns in table "role" */
export type RoleIncInput = {
  /** Unique role assignment identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "role" */
export type RoleInsertInput = {
  /** Additional information about this privilege assignment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique role assignment identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  roleType?: InputMaybe<RoleTypeObjRelInsertInput>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  /** Type of privileged role */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Teacher identifier with role access */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type RoleMaxFields = {
  __typename?: 'RoleMaxFields';
  /** Additional information about this privilege assignment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Type of privileged role */
  type?: Maybe<Scalars['String']['output']>;
  /** Teacher identifier with role access */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "role" */
export type RoleMaxOrderBy = {
  /** Additional information about this privilege assignment */
  comment?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
  /** Type of privileged role */
  type?: InputMaybe<OrderBy>;
  /** Teacher identifier with role access */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RoleMinFields = {
  __typename?: 'RoleMinFields';
  /** Additional information about this privilege assignment */
  comment?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Type of privileged role */
  type?: Maybe<Scalars['String']['output']>;
  /** Teacher identifier with role access */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "role" */
export type RoleMinOrderBy = {
  /** Additional information about this privilege assignment */
  comment?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
  /** Type of privileged role */
  type?: InputMaybe<OrderBy>;
  /** Teacher identifier with role access */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "role" */
export type RoleMutationResponse = {
  __typename?: 'RoleMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type RoleOnConflict = {
  constraint: RoleConstraint;
  updateColumns?: Array<RoleUpdateColumn>;
  where?: InputMaybe<RoleBoolExp>;
};

/** Ordering options when selecting data from "role". */
export type RoleOrderBy = {
  comment?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  roleType?: InputMaybe<RoleTypeOrderBy>;
  teacher?: InputMaybe<TeacherOrderBy>;
  type?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: role */
export type RolePkColumnsInput = {
  /** Unique role assignment identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "role" */
export enum RoleSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "role" */
export type RoleSetInput = {
  /** Additional information about this privilege assignment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique role assignment identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Type of privileged role */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Teacher identifier with role access */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type RoleStddevFields = {
  __typename?: 'RoleStddevFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "role" */
export type RoleStddevOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type RoleStddevPopFields = {
  __typename?: 'RoleStddevPopFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "role" */
export type RoleStddevPopOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type RoleStddevSampFields = {
  __typename?: 'RoleStddevSampFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "role" */
export type RoleStddevSampOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "role" */
export type RoleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RoleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RoleStreamCursorValueInput = {
  /** Additional information about this privilege assignment */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique role assignment identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Type of privileged role */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Teacher identifier with role access */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type RoleSumFields = {
  __typename?: 'RoleSumFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "role" */
export type RoleSumOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** System roles for privileged access */
export type RoleType = {
  __typename?: 'RoleType';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Description of role privileges and responsibilities */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregate relationship */
  rolesAggregate: RoleAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Role identifier */
  value: Scalars['String']['output'];
};


/** System roles for privileged access */
export type RoleTypeRolesArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


/** System roles for privileged access */
export type RoleTypeRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};

/** aggregated selection of "role_type" */
export type RoleTypeAggregate = {
  __typename?: 'RoleTypeAggregate';
  aggregate?: Maybe<RoleTypeAggregateFields>;
  nodes: Array<RoleType>;
};

/** aggregate fields of "role_type" */
export type RoleTypeAggregateFields = {
  __typename?: 'RoleTypeAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<RoleTypeMaxFields>;
  min?: Maybe<RoleTypeMinFields>;
};


/** aggregate fields of "role_type" */
export type RoleTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoleTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role_type". All fields are combined with a logical 'AND'. */
export type RoleTypeBoolExp = {
  _and?: InputMaybe<Array<RoleTypeBoolExp>>;
  _not?: InputMaybe<RoleTypeBoolExp>;
  _or?: InputMaybe<Array<RoleTypeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  roles?: InputMaybe<RoleBoolExp>;
  rolesAggregate?: InputMaybe<RoleAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "role_type" */
export enum RoleTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  RoleTypePkey = 'role_type_pkey'
}

/** input type for inserting data into table "role_type" */
export type RoleTypeInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of role privileges and responsibilities */
  description?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<RoleArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Role identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RoleTypeMaxFields = {
  __typename?: 'RoleTypeMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Description of role privileges and responsibilities */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Role identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RoleTypeMinFields = {
  __typename?: 'RoleTypeMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Description of role privileges and responsibilities */
  description?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Role identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "role_type" */
export type RoleTypeMutationResponse = {
  __typename?: 'RoleTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<RoleType>;
};

/** input type for inserting object relation for remote table "role_type" */
export type RoleTypeObjRelInsertInput = {
  data: RoleTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RoleTypeOnConflict>;
};

/** on_conflict condition type for table "role_type" */
export type RoleTypeOnConflict = {
  constraint: RoleTypeConstraint;
  updateColumns?: Array<RoleTypeUpdateColumn>;
  where?: InputMaybe<RoleTypeBoolExp>;
};

/** Ordering options when selecting data from "role_type". */
export type RoleTypeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  rolesAggregate?: InputMaybe<RoleAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: role_type */
export type RoleTypePkColumnsInput = {
  /** Role identifier */
  value: Scalars['String']['input'];
};

/** select columns of table "role_type" */
export enum RoleTypeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "role_type" */
export type RoleTypeSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of role privileges and responsibilities */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Role identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "role_type" */
export type RoleTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RoleTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RoleTypeStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Description of role privileges and responsibilities */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Role identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "role_type" */
export enum RoleTypeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type RoleTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RoleTypeSetInput>;
  /** filter the rows which have to be updated */
  where: RoleTypeBoolExp;
};

/** update columns of table "role" */
export enum RoleUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type RoleUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RoleIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RoleSetInput>;
  /** filter the rows which have to be updated */
  where: RoleBoolExp;
};

/** aggregate varPop on columns */
export type RoleVarPopFields = {
  __typename?: 'RoleVarPopFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "role" */
export type RoleVarPopOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type RoleVarSampFields = {
  __typename?: 'RoleVarSampFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "role" */
export type RoleVarSampOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RoleVarianceFields = {
  __typename?: 'RoleVarianceFields';
  /** Unique role assignment identifier */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "role" */
export type RoleVarianceOrderBy = {
  /** Unique role assignment identifier */
  id?: InputMaybe<OrderBy>;
};

/** Annual teaching service records tracking required hours and modifications */
export type Service = {
  __typename?: 'Service';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Required teaching hours for the year before modifications */
  hours: Scalars['Float']['output'];
  /** Unique service identifier */
  id: Scalars['Int']['output'];
  /** Optional message from teacher to course assignment committee */
  message?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  modifications: Array<ServiceModification>;
  /** An aggregate relationship */
  modificationsAggregate: ServiceModificationAggregate;
  /** An array relationship */
  priorities: Array<Priority>;
  /** An aggregate relationship */
  prioritiesAggregate: PriorityAggregate;
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requestsAggregate: RequestAggregate;
  /** An object relationship */
  teacher: Teacher;
  /** Teacher identifier linking to teacher table */
  uid: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Academic year for this service record */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServiceModificationsArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServiceModificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServicePrioritiesArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServicePrioritiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServiceRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Annual teaching service records tracking required hours and modifications */
export type ServiceRequestsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};

/** aggregated selection of "service" */
export type ServiceAggregate = {
  __typename?: 'ServiceAggregate';
  aggregate?: Maybe<ServiceAggregateFields>;
  nodes: Array<Service>;
};

export type ServiceAggregateBoolExp = {
  count?: InputMaybe<ServiceAggregateBoolExpCount>;
};

/** aggregate fields of "service" */
export type ServiceAggregateFields = {
  __typename?: 'ServiceAggregateFields';
  avg?: Maybe<ServiceAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ServiceMaxFields>;
  min?: Maybe<ServiceMinFields>;
  stddev?: Maybe<ServiceStddevFields>;
  stddevPop?: Maybe<ServiceStddevPopFields>;
  stddevSamp?: Maybe<ServiceStddevSampFields>;
  sum?: Maybe<ServiceSumFields>;
  varPop?: Maybe<ServiceVarPopFields>;
  varSamp?: Maybe<ServiceVarSampFields>;
  variance?: Maybe<ServiceVarianceFields>;
};


/** aggregate fields of "service" */
export type ServiceAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ServiceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service" */
export type ServiceAggregateOrderBy = {
  avg?: InputMaybe<ServiceAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ServiceMaxOrderBy>;
  min?: InputMaybe<ServiceMinOrderBy>;
  stddev?: InputMaybe<ServiceStddevOrderBy>;
  stddevPop?: InputMaybe<ServiceStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ServiceStddevSampOrderBy>;
  sum?: InputMaybe<ServiceSumOrderBy>;
  varPop?: InputMaybe<ServiceVarPopOrderBy>;
  varSamp?: InputMaybe<ServiceVarSampOrderBy>;
  variance?: InputMaybe<ServiceVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "service" */
export type ServiceArrRelInsertInput = {
  data: Array<ServiceInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ServiceOnConflict>;
};

/** aggregate avg on columns */
export type ServiceAvgFields = {
  __typename?: 'ServiceAvgFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service" */
export type ServiceAvgOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "service". All fields are combined with a logical 'AND'. */
export type ServiceBoolExp = {
  _and?: InputMaybe<Array<ServiceBoolExp>>;
  _not?: InputMaybe<ServiceBoolExp>;
  _or?: InputMaybe<Array<ServiceBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  hours?: InputMaybe<FloatComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  message?: InputMaybe<StringComparisonExp>;
  modifications?: InputMaybe<ServiceModificationBoolExp>;
  modificationsAggregate?: InputMaybe<ServiceModificationAggregateBoolExp>;
  priorities?: InputMaybe<PriorityBoolExp>;
  prioritiesAggregate?: InputMaybe<PriorityAggregateBoolExp>;
  requests?: InputMaybe<RequestBoolExp>;
  requestsAggregate?: InputMaybe<RequestAggregateBoolExp>;
  teacher?: InputMaybe<TeacherBoolExp>;
  uid?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  year?: InputMaybe<IntComparisonExp>;
  yearByYear?: InputMaybe<YearBoolExp>;
};

/** unique or primary key constraints on table "service" */
export enum ServiceConstraint {
  /** unique or primary key constraint on columns "id" */
  ServicePkey = 'service_pkey',
  /** unique or primary key constraint on columns "uid", "year" */
  ServiceYearUidKey = 'service_year_uid_key'
}

/** input type for incrementing numeric columns in table "service" */
export type ServiceIncInput = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique service identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Academic year for this service record */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service" */
export type ServiceInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique service identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Optional message from teacher to course assignment committee */
  message?: InputMaybe<Scalars['String']['input']>;
  modifications?: InputMaybe<ServiceModificationArrRelInsertInput>;
  priorities?: InputMaybe<PriorityArrRelInsertInput>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  /** Teacher identifier linking to teacher table */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year for this service record */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<YearObjRelInsertInput>;
};

/** aggregate max on columns */
export type ServiceMaxFields = {
  __typename?: 'ServiceMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Optional message from teacher to course assignment committee */
  message?: Maybe<Scalars['String']['output']>;
  /** Teacher identifier linking to teacher table */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "service" */
export type ServiceMaxOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Optional message from teacher to course assignment committee */
  message?: InputMaybe<OrderBy>;
  /** Teacher identifier linking to teacher table */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ServiceMinFields = {
  __typename?: 'ServiceMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Optional message from teacher to course assignment committee */
  message?: Maybe<Scalars['String']['output']>;
  /** Teacher identifier linking to teacher table */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "service" */
export type ServiceMinOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Optional message from teacher to course assignment committee */
  message?: InputMaybe<OrderBy>;
  /** Teacher identifier linking to teacher table */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** Individual modifications to base teaching service hours */
export type ServiceModification = {
  __typename?: 'ServiceModification';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Hour adjustment amount (negative values increase required hours) */
  hours: Scalars['Float']['output'];
  /** Unique modification identifier */
  id: Scalars['Int']['output'];
  /** An object relationship */
  service: Service;
  /** Reference to affected service record */
  serviceId: Scalars['Int']['output'];
  /** Type of service modification being applied */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: ServiceModificationType;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "service_modification" */
export type ServiceModificationAggregate = {
  __typename?: 'ServiceModificationAggregate';
  aggregate?: Maybe<ServiceModificationAggregateFields>;
  nodes: Array<ServiceModification>;
};

export type ServiceModificationAggregateBoolExp = {
  count?: InputMaybe<ServiceModificationAggregateBoolExpCount>;
};

/** aggregate fields of "service_modification" */
export type ServiceModificationAggregateFields = {
  __typename?: 'ServiceModificationAggregateFields';
  avg?: Maybe<ServiceModificationAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ServiceModificationMaxFields>;
  min?: Maybe<ServiceModificationMinFields>;
  stddev?: Maybe<ServiceModificationStddevFields>;
  stddevPop?: Maybe<ServiceModificationStddevPopFields>;
  stddevSamp?: Maybe<ServiceModificationStddevSampFields>;
  sum?: Maybe<ServiceModificationSumFields>;
  varPop?: Maybe<ServiceModificationVarPopFields>;
  varSamp?: Maybe<ServiceModificationVarSampFields>;
  variance?: Maybe<ServiceModificationVarianceFields>;
};


/** aggregate fields of "service_modification" */
export type ServiceModificationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "service_modification" */
export type ServiceModificationAggregateOrderBy = {
  avg?: InputMaybe<ServiceModificationAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ServiceModificationMaxOrderBy>;
  min?: InputMaybe<ServiceModificationMinOrderBy>;
  stddev?: InputMaybe<ServiceModificationStddevOrderBy>;
  stddevPop?: InputMaybe<ServiceModificationStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ServiceModificationStddevSampOrderBy>;
  sum?: InputMaybe<ServiceModificationSumOrderBy>;
  varPop?: InputMaybe<ServiceModificationVarPopOrderBy>;
  varSamp?: InputMaybe<ServiceModificationVarSampOrderBy>;
  variance?: InputMaybe<ServiceModificationVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "service_modification" */
export type ServiceModificationArrRelInsertInput = {
  data: Array<ServiceModificationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ServiceModificationOnConflict>;
};

/** aggregate avg on columns */
export type ServiceModificationAvgFields = {
  __typename?: 'ServiceModificationAvgFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service_modification" */
export type ServiceModificationAvgOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "service_modification". All fields are combined with a logical 'AND'. */
export type ServiceModificationBoolExp = {
  _and?: InputMaybe<Array<ServiceModificationBoolExp>>;
  _not?: InputMaybe<ServiceModificationBoolExp>;
  _or?: InputMaybe<Array<ServiceModificationBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  hours?: InputMaybe<FloatComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  service?: InputMaybe<ServiceBoolExp>;
  serviceId?: InputMaybe<IntComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  typeByType?: InputMaybe<ServiceModificationTypeBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "service_modification" */
export enum ServiceModificationConstraint {
  /** unique or primary key constraint on columns "id" */
  ServiceModificationPkey = 'service_modification_pkey'
}

/** input type for incrementing numeric columns in table "service_modification" */
export type ServiceModificationIncInput = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique modification identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service_modification" */
export type ServiceModificationInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique modification identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of service modification being applied */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<ServiceModificationTypeObjRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ServiceModificationMaxFields = {
  __typename?: 'ServiceModificationMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of service modification being applied */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "service_modification" */
export type ServiceModificationMaxOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of service modification being applied */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ServiceModificationMinFields = {
  __typename?: 'ServiceModificationMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of service modification being applied */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "service_modification" */
export type ServiceModificationMinOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of service modification being applied */
  type?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "service_modification" */
export type ServiceModificationMutationResponse = {
  __typename?: 'ServiceModificationMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ServiceModification>;
};

/** on_conflict condition type for table "service_modification" */
export type ServiceModificationOnConflict = {
  constraint: ServiceModificationConstraint;
  updateColumns?: Array<ServiceModificationUpdateColumn>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};

/** Ordering options when selecting data from "service_modification". */
export type ServiceModificationOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  typeByType?: InputMaybe<ServiceModificationTypeOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: service_modification */
export type ServiceModificationPkColumnsInput = {
  /** Unique modification identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "service_modification" */
export enum ServiceModificationSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "service_modification" */
export type ServiceModificationSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique modification identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of service modification being applied */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type ServiceModificationStddevFields = {
  __typename?: 'ServiceModificationStddevFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service_modification" */
export type ServiceModificationStddevOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ServiceModificationStddevPopFields = {
  __typename?: 'ServiceModificationStddevPopFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "service_modification" */
export type ServiceModificationStddevPopOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ServiceModificationStddevSampFields = {
  __typename?: 'ServiceModificationStddevSampFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "service_modification" */
export type ServiceModificationStddevSampOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "service_modification" */
export type ServiceModificationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ServiceModificationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ServiceModificationStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique modification identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of service modification being applied */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ServiceModificationSumFields = {
  __typename?: 'ServiceModificationSumFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service_modification" */
export type ServiceModificationSumOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** Categories of service hour modifications */
export type ServiceModificationType = {
  __typename?: 'ServiceModificationType';
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Detailed explanation of the modification type and its application */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable name for the modification type */
  label: Scalars['String']['output'];
  /** An aggregate relationship */
  modificationsServiceAggregate: ServiceModificationAggregate;
  /** An array relationship */
  modifications_service: Array<ServiceModification>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Modification type identifier */
  value: Scalars['String']['output'];
};


/** Categories of service hour modifications */
export type ServiceModificationTypeModificationsServiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Categories of service hour modifications */
export type ServiceModificationTypeModifications_ServiceArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};

/** aggregated selection of "service_modification_type" */
export type ServiceModificationTypeAggregate = {
  __typename?: 'ServiceModificationTypeAggregate';
  aggregate?: Maybe<ServiceModificationTypeAggregateFields>;
  nodes: Array<ServiceModificationType>;
};

/** aggregate fields of "service_modification_type" */
export type ServiceModificationTypeAggregateFields = {
  __typename?: 'ServiceModificationTypeAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ServiceModificationTypeMaxFields>;
  min?: Maybe<ServiceModificationTypeMinFields>;
};


/** aggregate fields of "service_modification_type" */
export type ServiceModificationTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ServiceModificationTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "service_modification_type". All fields are combined with a logical 'AND'. */
export type ServiceModificationTypeBoolExp = {
  _and?: InputMaybe<Array<ServiceModificationTypeBoolExp>>;
  _not?: InputMaybe<ServiceModificationTypeBoolExp>;
  _or?: InputMaybe<Array<ServiceModificationTypeBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  modifications_service?: InputMaybe<ServiceModificationBoolExp>;
  modifications_serviceAggregate?: InputMaybe<ServiceModificationAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "service_modification_type" */
export enum ServiceModificationTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  ServiceModificationTypePkey = 'service_modification_type_pkey'
}

/** input type for inserting data into table "service_modification_type" */
export type ServiceModificationTypeInsertInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed explanation of the modification type and its application */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable name for the modification type */
  label?: InputMaybe<Scalars['String']['input']>;
  modifications_service?: InputMaybe<ServiceModificationArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Modification type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ServiceModificationTypeMaxFields = {
  __typename?: 'ServiceModificationTypeMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed explanation of the modification type and its application */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable name for the modification type */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Modification type identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ServiceModificationTypeMinFields = {
  __typename?: 'ServiceModificationTypeMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Detailed explanation of the modification type and its application */
  description?: Maybe<Scalars['String']['output']>;
  /** Human-readable name for the modification type */
  label?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Modification type identifier */
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "service_modification_type" */
export type ServiceModificationTypeMutationResponse = {
  __typename?: 'ServiceModificationTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ServiceModificationType>;
};

/** input type for inserting object relation for remote table "service_modification_type" */
export type ServiceModificationTypeObjRelInsertInput = {
  data: ServiceModificationTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ServiceModificationTypeOnConflict>;
};

/** on_conflict condition type for table "service_modification_type" */
export type ServiceModificationTypeOnConflict = {
  constraint: ServiceModificationTypeConstraint;
  updateColumns?: Array<ServiceModificationTypeUpdateColumn>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};

/** Ordering options when selecting data from "service_modification_type". */
export type ServiceModificationTypeOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  modifications_serviceAggregate?: InputMaybe<ServiceModificationAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: service_modification_type */
export type ServiceModificationTypePkColumnsInput = {
  /** Modification type identifier */
  value: Scalars['String']['input'];
};

/** select columns of table "service_modification_type" */
export enum ServiceModificationTypeSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "service_modification_type" */
export type ServiceModificationTypeSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed explanation of the modification type and its application */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable name for the modification type */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Modification type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "service_modification_type" */
export type ServiceModificationTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ServiceModificationTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ServiceModificationTypeStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Detailed explanation of the modification type and its application */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Human-readable name for the modification type */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Modification type identifier */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_modification_type" */
export enum ServiceModificationTypeUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type ServiceModificationTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ServiceModificationTypeSetInput>;
  /** filter the rows which have to be updated */
  where: ServiceModificationTypeBoolExp;
};

/** update columns of table "service_modification" */
export enum ServiceModificationUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  ServiceId = 'serviceId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type ServiceModificationUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ServiceModificationIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ServiceModificationSetInput>;
  /** filter the rows which have to be updated */
  where: ServiceModificationBoolExp;
};

/** aggregate varPop on columns */
export type ServiceModificationVarPopFields = {
  __typename?: 'ServiceModificationVarPopFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "service_modification" */
export type ServiceModificationVarPopOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ServiceModificationVarSampFields = {
  __typename?: 'ServiceModificationVarSampFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "service_modification" */
export type ServiceModificationVarSampOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ServiceModificationVarianceFields = {
  __typename?: 'ServiceModificationVarianceFields';
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique modification identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to affected service record */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service_modification" */
export type ServiceModificationVarianceOrderBy = {
  /** Hour adjustment amount (negative values increase required hours) */
  hours?: InputMaybe<OrderBy>;
  /** Unique modification identifier */
  id?: InputMaybe<OrderBy>;
  /** Reference to affected service record */
  serviceId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "service" */
export type ServiceMutationResponse = {
  __typename?: 'ServiceMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Service>;
};

/** input type for inserting object relation for remote table "service" */
export type ServiceObjRelInsertInput = {
  data: ServiceInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ServiceOnConflict>;
};

/** on_conflict condition type for table "service" */
export type ServiceOnConflict = {
  constraint: ServiceConstraint;
  updateColumns?: Array<ServiceUpdateColumn>;
  where?: InputMaybe<ServiceBoolExp>;
};

/** Ordering options when selecting data from "service". */
export type ServiceOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  modificationsAggregate?: InputMaybe<ServiceModificationAggregateOrderBy>;
  prioritiesAggregate?: InputMaybe<PriorityAggregateOrderBy>;
  requestsAggregate?: InputMaybe<RequestAggregateOrderBy>;
  teacher?: InputMaybe<TeacherOrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
  yearByYear?: InputMaybe<YearOrderBy>;
};

/** primary key columns input for table: service */
export type ServicePkColumnsInput = {
  /** Unique service identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "service" */
export enum ServiceSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "service" */
export type ServiceSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique service identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Optional message from teacher to course assignment committee */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Teacher identifier linking to teacher table */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year for this service record */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ServiceStddevFields = {
  __typename?: 'ServiceStddevFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service" */
export type ServiceStddevOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ServiceStddevPopFields = {
  __typename?: 'ServiceStddevPopFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "service" */
export type ServiceStddevPopOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ServiceStddevSampFields = {
  __typename?: 'ServiceStddevSampFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "service" */
export type ServiceStddevSampOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "service" */
export type ServiceStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ServiceStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ServiceStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique service identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Optional message from teacher to course assignment committee */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Teacher identifier linking to teacher table */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year for this service record */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ServiceSumFields = {
  __typename?: 'ServiceSumFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service" */
export type ServiceSumOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** update columns of table "service" */
export enum ServiceUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Year = 'year'
}

export type ServiceUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ServiceIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ServiceSetInput>;
  /** filter the rows which have to be updated */
  where: ServiceBoolExp;
};

/** aggregate varPop on columns */
export type ServiceVarPopFields = {
  __typename?: 'ServiceVarPopFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "service" */
export type ServiceVarPopOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ServiceVarSampFields = {
  __typename?: 'ServiceVarSampFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "service" */
export type ServiceVarSampOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ServiceVarianceFields = {
  __typename?: 'ServiceVarianceFields';
  /** Required teaching hours for the year before modifications */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique service identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Academic year for this service record */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service" */
export type ServiceVarianceOrderBy = {
  /** Required teaching hours for the year before modifications */
  hours?: InputMaybe<OrderBy>;
  /** Unique service identifier */
  id?: InputMaybe<OrderBy>;
  /** Academic year for this service record */
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
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

/** Core teacher information and status */
export type Teacher = {
  __typename?: 'Teacher';
  /** Controls system access and automatic service creation for upcoming years */
  active: Scalars['Boolean']['output'];
  /** Optional display name, used instead of first/last name when set */
  alias?: Maybe<Scalars['String']['output']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** An array relationship */
  coordinations: Array<Coordination>;
  /** An aggregate relationship */
  coordinationsAggregate: CoordinationAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Teacher's first name */
  firstname: Scalars['String']['output'];
  /** Teacher's last name */
  lastname: Scalars['String']['output'];
  /** Reference to teacher's position, determines default service hours */
  position?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  positionByPosition?: Maybe<Position>;
  /** An array relationship */
  roles: Array<Role>;
  /** An aggregate relationship */
  rolesAggregate: RoleAggregate;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  servicesAggregate: ServiceAggregate;
  /** Teacher's email address (primary key). */
  uid: Scalars['String']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Controls teacher visibility in the user interface and queries */
  visible: Scalars['Boolean']['output'];
};


/** Core teacher information and status */
export type TeacherCoordinationsArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Core teacher information and status */
export type TeacherCoordinationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Core teacher information and status */
export type TeacherRolesArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


/** Core teacher information and status */
export type TeacherRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


/** Core teacher information and status */
export type TeacherServicesArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


/** Core teacher information and status */
export type TeacherServicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};

/** aggregated selection of "teacher" */
export type TeacherAggregate = {
  __typename?: 'TeacherAggregate';
  aggregate?: Maybe<TeacherAggregateFields>;
  nodes: Array<Teacher>;
};

export type TeacherAggregateBoolExp = {
  bool_and?: InputMaybe<TeacherAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<TeacherAggregateBoolExpBool_Or>;
  count?: InputMaybe<TeacherAggregateBoolExpCount>;
};

/** aggregate fields of "teacher" */
export type TeacherAggregateFields = {
  __typename?: 'TeacherAggregateFields';
  avg?: Maybe<TeacherAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<TeacherMaxFields>;
  min?: Maybe<TeacherMinFields>;
  stddev?: Maybe<TeacherStddevFields>;
  stddevPop?: Maybe<TeacherStddevPopFields>;
  stddevSamp?: Maybe<TeacherStddevSampFields>;
  sum?: Maybe<TeacherSumFields>;
  varPop?: Maybe<TeacherVarPopFields>;
  varSamp?: Maybe<TeacherVarSampFields>;
  variance?: Maybe<TeacherVarianceFields>;
};


/** aggregate fields of "teacher" */
export type TeacherAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TeacherSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "teacher" */
export type TeacherAggregateOrderBy = {
  avg?: InputMaybe<TeacherAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TeacherMaxOrderBy>;
  min?: InputMaybe<TeacherMinOrderBy>;
  stddev?: InputMaybe<TeacherStddevOrderBy>;
  stddevPop?: InputMaybe<TeacherStddevPopOrderBy>;
  stddevSamp?: InputMaybe<TeacherStddevSampOrderBy>;
  sum?: InputMaybe<TeacherSumOrderBy>;
  varPop?: InputMaybe<TeacherVarPopOrderBy>;
  varSamp?: InputMaybe<TeacherVarSampOrderBy>;
  variance?: InputMaybe<TeacherVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "teacher" */
export type TeacherArrRelInsertInput = {
  data: Array<TeacherInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TeacherOnConflict>;
};

/** aggregate avg on columns */
export type TeacherAvgFields = {
  __typename?: 'TeacherAvgFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "teacher" */
export type TeacherAvgOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "teacher". All fields are combined with a logical 'AND'. */
export type TeacherBoolExp = {
  _and?: InputMaybe<Array<TeacherBoolExp>>;
  _not?: InputMaybe<TeacherBoolExp>;
  _or?: InputMaybe<Array<TeacherBoolExp>>;
  active?: InputMaybe<BooleanComparisonExp>;
  alias?: InputMaybe<StringComparisonExp>;
  baseServiceHours?: InputMaybe<FloatComparisonExp>;
  coordinations?: InputMaybe<CoordinationBoolExp>;
  coordinationsAggregate?: InputMaybe<CoordinationAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  firstname?: InputMaybe<StringComparisonExp>;
  lastname?: InputMaybe<StringComparisonExp>;
  position?: InputMaybe<StringComparisonExp>;
  positionByPosition?: InputMaybe<PositionBoolExp>;
  roles?: InputMaybe<RoleBoolExp>;
  rolesAggregate?: InputMaybe<RoleAggregateBoolExp>;
  services?: InputMaybe<ServiceBoolExp>;
  servicesAggregate?: InputMaybe<ServiceAggregateBoolExp>;
  uid?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "teacher" */
export enum TeacherConstraint {
  /** unique or primary key constraint on columns "uid" */
  TeacherPkey = 'teacher_pkey'
}

/** input type for incrementing numeric columns in table "teacher" */
export type TeacherIncInput = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "teacher" */
export type TeacherInsertInput = {
  /** Controls system access and automatic service creation for upcoming years */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional display name, used instead of first/last name when set */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  coordinations?: InputMaybe<CoordinationArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Teacher's first name */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Teacher's last name */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** Reference to teacher's position, determines default service hours */
  position?: InputMaybe<Scalars['String']['input']>;
  positionByPosition?: InputMaybe<PositionObjRelInsertInput>;
  roles?: InputMaybe<RoleArrRelInsertInput>;
  services?: InputMaybe<ServiceArrRelInsertInput>;
  /** Teacher's email address (primary key). */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls teacher visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type TeacherMaxFields = {
  __typename?: 'TeacherMaxFields';
  /** Optional display name, used instead of first/last name when set */
  alias?: Maybe<Scalars['String']['output']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Teacher's first name */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Teacher's last name */
  lastname?: Maybe<Scalars['String']['output']>;
  /** Reference to teacher's position, determines default service hours */
  position?: Maybe<Scalars['String']['output']>;
  /** Teacher's email address (primary key). */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "teacher" */
export type TeacherMaxOrderBy = {
  /** Optional display name, used instead of first/last name when set */
  alias?: InputMaybe<OrderBy>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Teacher's first name */
  firstname?: InputMaybe<OrderBy>;
  /** Teacher's last name */
  lastname?: InputMaybe<OrderBy>;
  /** Reference to teacher's position, determines default service hours */
  position?: InputMaybe<OrderBy>;
  /** Teacher's email address (primary key). */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TeacherMinFields = {
  __typename?: 'TeacherMinFields';
  /** Optional display name, used instead of first/last name when set */
  alias?: Maybe<Scalars['String']['output']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Teacher's first name */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Teacher's last name */
  lastname?: Maybe<Scalars['String']['output']>;
  /** Reference to teacher's position, determines default service hours */
  position?: Maybe<Scalars['String']['output']>;
  /** Teacher's email address (primary key). */
  uid?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "teacher" */
export type TeacherMinOrderBy = {
  /** Optional display name, used instead of first/last name when set */
  alias?: InputMaybe<OrderBy>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Teacher's first name */
  firstname?: InputMaybe<OrderBy>;
  /** Teacher's last name */
  lastname?: InputMaybe<OrderBy>;
  /** Reference to teacher's position, determines default service hours */
  position?: InputMaybe<OrderBy>;
  /** Teacher's email address (primary key). */
  uid?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "teacher" */
export type TeacherMutationResponse = {
  __typename?: 'TeacherMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Teacher>;
};

/** input type for inserting object relation for remote table "teacher" */
export type TeacherObjRelInsertInput = {
  data: TeacherInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<TeacherOnConflict>;
};

/** on_conflict condition type for table "teacher" */
export type TeacherOnConflict = {
  constraint: TeacherConstraint;
  updateColumns?: Array<TeacherUpdateColumn>;
  where?: InputMaybe<TeacherBoolExp>;
};

/** Ordering options when selecting data from "teacher". */
export type TeacherOrderBy = {
  active?: InputMaybe<OrderBy>;
  alias?: InputMaybe<OrderBy>;
  baseServiceHours?: InputMaybe<OrderBy>;
  coordinationsAggregate?: InputMaybe<CoordinationAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  firstname?: InputMaybe<OrderBy>;
  lastname?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  positionByPosition?: InputMaybe<PositionOrderBy>;
  rolesAggregate?: InputMaybe<RoleAggregateOrderBy>;
  servicesAggregate?: InputMaybe<ServiceAggregateOrderBy>;
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: teacher */
export type TeacherPkColumnsInput = {
  /** Teacher's email address (primary key). */
  uid: Scalars['String']['input'];
};

/** select columns of table "teacher" */
export enum TeacherSelectColumn {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Position = 'position',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

/** select "teacherAggregateBoolExpBool_andArgumentsColumns" columns of table "teacher" */
export enum TeacherSelectColumnTeacherAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Active = 'active',
  /** column name */
  Visible = 'visible'
}

/** select "teacherAggregateBoolExpBool_orArgumentsColumns" columns of table "teacher" */
export enum TeacherSelectColumnTeacherAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Active = 'active',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "teacher" */
export type TeacherSetInput = {
  /** Controls system access and automatic service creation for upcoming years */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional display name, used instead of first/last name when set */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Teacher's first name */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Teacher's last name */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** Reference to teacher's position, determines default service hours */
  position?: InputMaybe<Scalars['String']['input']>;
  /** Teacher's email address (primary key). */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls teacher visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type TeacherStddevFields = {
  __typename?: 'TeacherStddevFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "teacher" */
export type TeacherStddevOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type TeacherStddevPopFields = {
  __typename?: 'TeacherStddevPopFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "teacher" */
export type TeacherStddevPopOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type TeacherStddevSampFields = {
  __typename?: 'TeacherStddevSampFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "teacher" */
export type TeacherStddevSampOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "teacher" */
export type TeacherStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TeacherStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TeacherStreamCursorValueInput = {
  /** Controls system access and automatic service creation for upcoming years */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional display name, used instead of first/last name when set */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Teacher's first name */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Teacher's last name */
  lastname?: InputMaybe<Scalars['String']['input']>;
  /** Reference to teacher's position, determines default service hours */
  position?: InputMaybe<Scalars['String']['input']>;
  /** Teacher's email address (primary key). */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls teacher visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type TeacherSumFields = {
  __typename?: 'TeacherSumFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "teacher" */
export type TeacherSumOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** update columns of table "teacher" */
export enum TeacherUpdateColumn {
  /** column name */
  Active = 'active',
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Firstname = 'firstname',
  /** column name */
  Lastname = 'lastname',
  /** column name */
  Position = 'position',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

export type TeacherUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TeacherIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TeacherSetInput>;
  /** filter the rows which have to be updated */
  where: TeacherBoolExp;
};

/** aggregate varPop on columns */
export type TeacherVarPopFields = {
  __typename?: 'TeacherVarPopFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "teacher" */
export type TeacherVarPopOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type TeacherVarSampFields = {
  __typename?: 'TeacherVarSampFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "teacher" */
export type TeacherVarSampOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TeacherVarianceFields = {
  __typename?: 'TeacherVarianceFields';
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "teacher" */
export type TeacherVarianceOrderBy = {
  /** Individual override for annual teaching hours, takes precedence over position's base hours */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Specialization tracks within academic programs */
export type Track = {
  __typename?: 'Track';
  /** An array relationship */
  coordinations: Array<Coordination>;
  /** An aggregate relationship */
  coordinationsAggregate: CoordinationAggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Unique track identifier */
  id: Scalars['Int']['output'];
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name: Scalars['String']['output'];
  /** Abbreviated track name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  program: Program;
  /** Parent program for this track */
  programId: Scalars['Int']['output'];
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Controls track visibility in the user interface and queries */
  visible: Scalars['Boolean']['output'];
};


/** Specialization tracks within academic programs */
export type TrackCoordinationsArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Specialization tracks within academic programs */
export type TrackCoordinationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


/** Specialization tracks within academic programs */
export type TrackCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Specialization tracks within academic programs */
export type TrackCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};

/** aggregated selection of "track" */
export type TrackAggregate = {
  __typename?: 'TrackAggregate';
  aggregate?: Maybe<TrackAggregateFields>;
  nodes: Array<Track>;
};

export type TrackAggregateBoolExp = {
  bool_and?: InputMaybe<TrackAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<TrackAggregateBoolExpBool_Or>;
  count?: InputMaybe<TrackAggregateBoolExpCount>;
};

/** aggregate fields of "track" */
export type TrackAggregateFields = {
  __typename?: 'TrackAggregateFields';
  avg?: Maybe<TrackAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<TrackMaxFields>;
  min?: Maybe<TrackMinFields>;
  stddev?: Maybe<TrackStddevFields>;
  stddevPop?: Maybe<TrackStddevPopFields>;
  stddevSamp?: Maybe<TrackStddevSampFields>;
  sum?: Maybe<TrackSumFields>;
  varPop?: Maybe<TrackVarPopFields>;
  varSamp?: Maybe<TrackVarSampFields>;
  variance?: Maybe<TrackVarianceFields>;
};


/** aggregate fields of "track" */
export type TrackAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TrackSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "track" */
export type TrackAggregateOrderBy = {
  avg?: InputMaybe<TrackAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TrackMaxOrderBy>;
  min?: InputMaybe<TrackMinOrderBy>;
  stddev?: InputMaybe<TrackStddevOrderBy>;
  stddevPop?: InputMaybe<TrackStddevPopOrderBy>;
  stddevSamp?: InputMaybe<TrackStddevSampOrderBy>;
  sum?: InputMaybe<TrackSumOrderBy>;
  varPop?: InputMaybe<TrackVarPopOrderBy>;
  varSamp?: InputMaybe<TrackVarSampOrderBy>;
  variance?: InputMaybe<TrackVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "track" */
export type TrackArrRelInsertInput = {
  data: Array<TrackInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TrackOnConflict>;
};

/** aggregate avg on columns */
export type TrackAvgFields = {
  __typename?: 'TrackAvgFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "track" */
export type TrackAvgOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "track". All fields are combined with a logical 'AND'. */
export type TrackBoolExp = {
  _and?: InputMaybe<Array<TrackBoolExp>>;
  _not?: InputMaybe<TrackBoolExp>;
  _or?: InputMaybe<Array<TrackBoolExp>>;
  coordinations?: InputMaybe<CoordinationBoolExp>;
  coordinationsAggregate?: InputMaybe<CoordinationAggregateBoolExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  nomImport?: InputMaybe<StringComparisonExp>;
  program?: InputMaybe<ProgramBoolExp>;
  programId?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "track" */
export enum TrackConstraint {
  /** unique or primary key constraint on columns "id" */
  TrackPkey = 'track_pkey',
  /** unique or primary key constraint on columns "program_id", "name" */
  TrackProgramIdNameKey = 'track_program_id_name_key'
}

/** input type for incrementing numeric columns in table "track" */
export type TrackIncInput = {
  /** Unique track identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Parent program for this track */
  programId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "track" */
export type TrackInsertInput = {
  coordinations?: InputMaybe<CoordinationArrRelInsertInput>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique track identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated track name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  /** Parent program for this track */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls track visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type TrackMaxFields = {
  __typename?: 'TrackMaxFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique track identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated track name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "track" */
export type TrackMaxOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated track name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TrackMinFields = {
  __typename?: 'TrackMinFields';
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Unique track identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: Maybe<Scalars['String']['output']>;
  /** Abbreviated track name */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "track" */
export type TrackMinOrderBy = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<OrderBy>;
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: InputMaybe<OrderBy>;
  /** Abbreviated track name */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "track" */
export type TrackMutationResponse = {
  __typename?: 'TrackMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Track>;
};

/** input type for inserting object relation for remote table "track" */
export type TrackObjRelInsertInput = {
  data: TrackInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<TrackOnConflict>;
};

/** on_conflict condition type for table "track" */
export type TrackOnConflict = {
  constraint: TrackConstraint;
  updateColumns?: Array<TrackUpdateColumn>;
  where?: InputMaybe<TrackBoolExp>;
};

/** Ordering options when selecting data from "track". */
export type TrackOrderBy = {
  coordinationsAggregate?: InputMaybe<CoordinationAggregateOrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramOrderBy>;
  programId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: track */
export type TrackPkColumnsInput = {
  /** Unique track identifier */
  id: Scalars['Int']['input'];
};

/** select columns of table "track" */
export enum TrackSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

/** select "trackAggregateBoolExpBool_andArgumentsColumns" columns of table "track" */
export enum TrackSelectColumnTrackAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** select "trackAggregateBoolExpBool_orArgumentsColumns" columns of table "track" */
export enum TrackSelectColumnTrackAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "track" */
export type TrackSetInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique track identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated track name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Parent program for this track */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls track visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type TrackStddevFields = {
  __typename?: 'TrackStddevFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "track" */
export type TrackStddevOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type TrackStddevPopFields = {
  __typename?: 'TrackStddevPopFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "track" */
export type TrackStddevPopOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type TrackStddevSampFields = {
  __typename?: 'TrackStddevSampFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "track" */
export type TrackStddevSampOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "track" */
export type TrackStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TrackStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TrackStreamCursorValueInput = {
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Unique track identifier */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Full track name, unique within its program (e.g., Pure Mathematics, Applied Mathematics, Statistics, etc.) */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Abbreviated track name */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Parent program for this track */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Controls track visibility in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type TrackSumFields = {
  __typename?: 'TrackSumFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Int']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "track" */
export type TrackSumOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** update columns of table "track" */
export enum TrackUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  NomImport = 'nomImport',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Visible = 'visible'
}

export type TrackUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<TrackIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TrackSetInput>;
  /** filter the rows which have to be updated */
  where: TrackBoolExp;
};

/** aggregate varPop on columns */
export type TrackVarPopFields = {
  __typename?: 'TrackVarPopFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "track" */
export type TrackVarPopOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type TrackVarSampFields = {
  __typename?: 'TrackVarSampFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "track" */
export type TrackVarSampOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TrackVarianceFields = {
  __typename?: 'TrackVarianceFields';
  /** Unique track identifier */
  id?: Maybe<Scalars['Float']['output']>;
  /** Parent program for this track */
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "track" */
export type TrackVarianceOrderBy = {
  /** Unique track identifier */
  id?: InputMaybe<OrderBy>;
  /** Parent program for this track */
  programId?: InputMaybe<OrderBy>;
};

/** Academic year definitions with current year designation and visibility settings */
export type Year = {
  __typename?: 'Year';
  /** Additional information about this academic year */
  comment?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** Timestamp when the record was created */
  createdAt: Scalars['timestamptz']['output'];
  /** Current academic year flag (TRUE or NULL). Constrained to have at most one current year */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  servicesAggregate: ServiceAggregate;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt: Scalars['timestamptz']['output'];
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value: Scalars['Int']['output'];
  /** Controls visibility of the year in the user interface and queries */
  visible: Scalars['Boolean']['output'];
};


/** Academic year definitions with current year designation and visibility settings */
export type YearCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Academic year definitions with current year designation and visibility settings */
export type YearCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Academic year definitions with current year designation and visibility settings */
export type YearServicesArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


/** Academic year definitions with current year designation and visibility settings */
export type YearServicesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};

/** aggregated selection of "year" */
export type YearAggregate = {
  __typename?: 'YearAggregate';
  aggregate?: Maybe<YearAggregateFields>;
  nodes: Array<Year>;
};

/** aggregate fields of "year" */
export type YearAggregateFields = {
  __typename?: 'YearAggregateFields';
  avg?: Maybe<YearAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<YearMaxFields>;
  min?: Maybe<YearMinFields>;
  stddev?: Maybe<YearStddevFields>;
  stddevPop?: Maybe<YearStddevPopFields>;
  stddevSamp?: Maybe<YearStddevSampFields>;
  sum?: Maybe<YearSumFields>;
  varPop?: Maybe<YearVarPopFields>;
  varSamp?: Maybe<YearVarSampFields>;
  variance?: Maybe<YearVarianceFields>;
};


/** aggregate fields of "year" */
export type YearAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<YearSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type YearAvgFields = {
  __typename?: 'YearAvgFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "year". All fields are combined with a logical 'AND'. */
export type YearBoolExp = {
  _and?: InputMaybe<Array<YearBoolExp>>;
  _not?: InputMaybe<YearBoolExp>;
  _or?: InputMaybe<Array<YearBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  current?: InputMaybe<BooleanComparisonExp>;
  services?: InputMaybe<ServiceBoolExp>;
  servicesAggregate?: InputMaybe<ServiceAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  value?: InputMaybe<IntComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "year" */
export enum YearConstraint {
  /** unique or primary key constraint on columns "current" */
  YearCurrentKey = 'year_current_key',
  /** unique or primary key constraint on columns "value" */
  YearPkey = 'year_pkey'
}

/** input type for incrementing numeric columns in table "year" */
export type YearIncInput = {
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "year" */
export type YearInsertInput = {
  /** Additional information about this academic year */
  comment?: InputMaybe<Scalars['String']['input']>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current academic year flag (TRUE or NULL). Constrained to have at most one current year */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceArrRelInsertInput>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Controls visibility of the year in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type YearMaxFields = {
  __typename?: 'YearMaxFields';
  /** Additional information about this academic year */
  comment?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type YearMinFields = {
  __typename?: 'YearMinFields';
  /** Additional information about this academic year */
  comment?: Maybe<Scalars['String']['output']>;
  /** Timestamp when the record was created */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "year" */
export type YearMutationResponse = {
  __typename?: 'YearMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Year>;
};

/** input type for inserting object relation for remote table "year" */
export type YearObjRelInsertInput = {
  data: YearInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<YearOnConflict>;
};

/** on_conflict condition type for table "year" */
export type YearOnConflict = {
  constraint: YearConstraint;
  updateColumns?: Array<YearUpdateColumn>;
  where?: InputMaybe<YearBoolExp>;
};

/** Ordering options when selecting data from "year". */
export type YearOrderBy = {
  comment?: InputMaybe<OrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  current?: InputMaybe<OrderBy>;
  servicesAggregate?: InputMaybe<ServiceAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: year */
export type YearPkColumnsInput = {
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value: Scalars['Int']['input'];
};

/** select columns of table "year" */
export enum YearSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "year" */
export type YearSetInput = {
  /** Additional information about this academic year */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current academic year flag (TRUE or NULL). Constrained to have at most one current year */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Controls visibility of the year in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type YearStddevFields = {
  __typename?: 'YearStddevFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type YearStddevPopFields = {
  __typename?: 'YearStddevPopFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type YearStddevSampFields = {
  __typename?: 'YearStddevSampFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "year" */
export type YearStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: YearStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type YearStreamCursorValueInput = {
  /** Additional information about this academic year */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp when the record was created */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Current academic year flag (TRUE or NULL). Constrained to have at most one current year */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Timestamp when the record was last updated, automatically managed by trigger */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Controls visibility of the year in the user interface and queries */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type YearSumFields = {
  __typename?: 'YearSumFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "year" */
export enum YearUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Current = 'current',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value',
  /** column name */
  Visible = 'visible'
}

export type YearUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<YearIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<YearSetInput>;
  /** filter the rows which have to be updated */
  where: YearBoolExp;
};

/** aggregate varPop on columns */
export type YearVarPopFields = {
  __typename?: 'YearVarPopFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type YearVarSampFields = {
  __typename?: 'YearVarSampFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type YearVarianceFields = {
  __typename?: 'YearVarianceFields';
  /** Academic year identifier (e.g., 2024 for 2024-2025 academic year) */
  value?: Maybe<Scalars['Float']['output']>;
};

export type CoordinationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CoordinationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CoordinationBoolExp>;
  predicate: IntComparisonExp;
};

export type CourseAggregateBoolExpBool_And = {
  arguments: CourseSelectColumnCourseAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CourseBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CourseAggregateBoolExpBool_Or = {
  arguments: CourseSelectColumnCourseAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CourseBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CourseAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CourseSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CourseBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "app_settings" */
  deleteAppSettings?: Maybe<AppSettingsMutationResponse>;
  /** delete single row from the table: "app_settings" */
  deleteAppSettingsByPk?: Maybe<AppSettings>;
  /** delete data from the table: "coordination" */
  deleteCoordination?: Maybe<CoordinationMutationResponse>;
  /** delete single row from the table: "coordination" */
  deleteCoordinationByPk?: Maybe<Coordination>;
  /** delete data from the table: "course" */
  deleteCourse?: Maybe<CourseMutationResponse>;
  /** delete single row from the table: "course" */
  deleteCourseByPk?: Maybe<Course>;
  /** delete data from the table: "course_type" */
  deleteCourseType?: Maybe<CourseTypeMutationResponse>;
  /** delete single row from the table: "course_type" */
  deleteCourseTypeByPk?: Maybe<CourseType>;
  /** delete data from the table: "degree" */
  deleteDegree?: Maybe<DegreeMutationResponse>;
  /** delete single row from the table: "degree" */
  deleteDegreeByPk?: Maybe<Degree>;
  /** delete data from the table: "phase" */
  deletePhase?: Maybe<PhaseMutationResponse>;
  /** delete single row from the table: "phase" */
  deletePhaseByPk?: Maybe<Phase>;
  /** delete data from the table: "position" */
  deletePosition?: Maybe<PositionMutationResponse>;
  /** delete single row from the table: "position" */
  deletePositionByPk?: Maybe<Position>;
  /** delete data from the table: "priority" */
  deletePriority?: Maybe<PriorityMutationResponse>;
  /** delete single row from the table: "priority" */
  deletePriorityByPk?: Maybe<Priority>;
  /** delete data from the table: "program" */
  deleteProgram?: Maybe<ProgramMutationResponse>;
  /** delete single row from the table: "program" */
  deleteProgramByPk?: Maybe<Program>;
  /** delete data from the table: "request" */
  deleteRequest?: Maybe<RequestMutationResponse>;
  /** delete single row from the table: "request" */
  deleteRequestByPk?: Maybe<Request>;
  /** delete data from the table: "request_type" */
  deleteRequestType?: Maybe<RequestTypeMutationResponse>;
  /** delete single row from the table: "request_type" */
  deleteRequestTypeByPk?: Maybe<RequestType>;
  /** delete data from the table: "role" */
  deleteRole?: Maybe<RoleMutationResponse>;
  /** delete single row from the table: "role" */
  deleteRoleByPk?: Maybe<Role>;
  /** delete data from the table: "role_type" */
  deleteRoleType?: Maybe<RoleTypeMutationResponse>;
  /** delete single row from the table: "role_type" */
  deleteRoleTypeByPk?: Maybe<RoleType>;
  /** delete data from the table: "service" */
  deleteService?: Maybe<ServiceMutationResponse>;
  /** delete single row from the table: "service" */
  deleteServiceByPk?: Maybe<Service>;
  /** delete data from the table: "service_modification" */
  deleteServiceModification?: Maybe<ServiceModificationMutationResponse>;
  /** delete single row from the table: "service_modification" */
  deleteServiceModificationByPk?: Maybe<ServiceModification>;
  /** delete data from the table: "service_modification_type" */
  deleteServiceModificationType?: Maybe<ServiceModificationTypeMutationResponse>;
  /** delete single row from the table: "service_modification_type" */
  deleteServiceModificationTypeByPk?: Maybe<ServiceModificationType>;
  /** delete data from the table: "teacher" */
  deleteTeacher?: Maybe<TeacherMutationResponse>;
  /** delete single row from the table: "teacher" */
  deleteTeacherByPk?: Maybe<Teacher>;
  /** delete data from the table: "track" */
  deleteTrack?: Maybe<TrackMutationResponse>;
  /** delete single row from the table: "track" */
  deleteTrackByPk?: Maybe<Track>;
  /** delete data from the table: "year" */
  deleteYear?: Maybe<YearMutationResponse>;
  /** delete single row from the table: "year" */
  deleteYearByPk?: Maybe<Year>;
  /** insert data into the table: "app_settings" */
  insertAppSettings?: Maybe<AppSettingsMutationResponse>;
  /** insert a single row into the table: "app_settings" */
  insertAppSettingsOne?: Maybe<AppSettings>;
  /** insert data into the table: "coordination" */
  insertCoordination?: Maybe<CoordinationMutationResponse>;
  /** insert a single row into the table: "coordination" */
  insertCoordinationOne?: Maybe<Coordination>;
  /** insert data into the table: "course" */
  insertCourse?: Maybe<CourseMutationResponse>;
  /** insert a single row into the table: "course" */
  insertCourseOne?: Maybe<Course>;
  /** insert data into the table: "course_type" */
  insertCourseType?: Maybe<CourseTypeMutationResponse>;
  /** insert a single row into the table: "course_type" */
  insertCourseTypeOne?: Maybe<CourseType>;
  /** insert data into the table: "degree" */
  insertDegree?: Maybe<DegreeMutationResponse>;
  /** insert a single row into the table: "degree" */
  insertDegreeOne?: Maybe<Degree>;
  /** insert data into the table: "phase" */
  insertPhase?: Maybe<PhaseMutationResponse>;
  /** insert a single row into the table: "phase" */
  insertPhaseOne?: Maybe<Phase>;
  /** insert data into the table: "position" */
  insertPosition?: Maybe<PositionMutationResponse>;
  /** insert a single row into the table: "position" */
  insertPositionOne?: Maybe<Position>;
  /** insert data into the table: "priority" */
  insertPriority?: Maybe<PriorityMutationResponse>;
  /** insert a single row into the table: "priority" */
  insertPriorityOne?: Maybe<Priority>;
  /** insert data into the table: "program" */
  insertProgram?: Maybe<ProgramMutationResponse>;
  /** insert a single row into the table: "program" */
  insertProgramOne?: Maybe<Program>;
  /** insert data into the table: "request" */
  insertRequest?: Maybe<RequestMutationResponse>;
  /** insert a single row into the table: "request" */
  insertRequestOne?: Maybe<Request>;
  /** insert data into the table: "request_type" */
  insertRequestType?: Maybe<RequestTypeMutationResponse>;
  /** insert a single row into the table: "request_type" */
  insertRequestTypeOne?: Maybe<RequestType>;
  /** insert data into the table: "role" */
  insertRole?: Maybe<RoleMutationResponse>;
  /** insert a single row into the table: "role" */
  insertRoleOne?: Maybe<Role>;
  /** insert data into the table: "role_type" */
  insertRoleType?: Maybe<RoleTypeMutationResponse>;
  /** insert a single row into the table: "role_type" */
  insertRoleTypeOne?: Maybe<RoleType>;
  /** insert data into the table: "service" */
  insertService?: Maybe<ServiceMutationResponse>;
  /** insert data into the table: "service_modification" */
  insertServiceModification?: Maybe<ServiceModificationMutationResponse>;
  /** insert a single row into the table: "service_modification" */
  insertServiceModificationOne?: Maybe<ServiceModification>;
  /** insert data into the table: "service_modification_type" */
  insertServiceModificationType?: Maybe<ServiceModificationTypeMutationResponse>;
  /** insert a single row into the table: "service_modification_type" */
  insertServiceModificationTypeOne?: Maybe<ServiceModificationType>;
  /** insert a single row into the table: "service" */
  insertServiceOne?: Maybe<Service>;
  /** insert data into the table: "teacher" */
  insertTeacher?: Maybe<TeacherMutationResponse>;
  /** insert a single row into the table: "teacher" */
  insertTeacherOne?: Maybe<Teacher>;
  /** insert data into the table: "track" */
  insertTrack?: Maybe<TrackMutationResponse>;
  /** insert a single row into the table: "track" */
  insertTrackOne?: Maybe<Track>;
  /** insert data into the table: "year" */
  insertYear?: Maybe<YearMutationResponse>;
  /** insert a single row into the table: "year" */
  insertYearOne?: Maybe<Year>;
  /** update data of the table: "app_settings" */
  updateAppSettings?: Maybe<AppSettingsMutationResponse>;
  /** update single row of the table: "app_settings" */
  updateAppSettingsByPk?: Maybe<AppSettings>;
  /** update multiples rows of table: "app_settings" */
  updateAppSettingsMany?: Maybe<Array<Maybe<AppSettingsMutationResponse>>>;
  /** update data of the table: "coordination" */
  updateCoordination?: Maybe<CoordinationMutationResponse>;
  /** update single row of the table: "coordination" */
  updateCoordinationByPk?: Maybe<Coordination>;
  /** update multiples rows of table: "coordination" */
  updateCoordinationMany?: Maybe<Array<Maybe<CoordinationMutationResponse>>>;
  /** update data of the table: "course" */
  updateCourse?: Maybe<CourseMutationResponse>;
  /** update single row of the table: "course" */
  updateCourseByPk?: Maybe<Course>;
  /** update multiples rows of table: "course" */
  updateCourseMany?: Maybe<Array<Maybe<CourseMutationResponse>>>;
  /** update data of the table: "course_type" */
  updateCourseType?: Maybe<CourseTypeMutationResponse>;
  /** update single row of the table: "course_type" */
  updateCourseTypeByPk?: Maybe<CourseType>;
  /** update multiples rows of table: "course_type" */
  updateCourseTypeMany?: Maybe<Array<Maybe<CourseTypeMutationResponse>>>;
  /** update data of the table: "degree" */
  updateDegree?: Maybe<DegreeMutationResponse>;
  /** update single row of the table: "degree" */
  updateDegreeByPk?: Maybe<Degree>;
  /** update multiples rows of table: "degree" */
  updateDegreeMany?: Maybe<Array<Maybe<DegreeMutationResponse>>>;
  /** update data of the table: "phase" */
  updatePhase?: Maybe<PhaseMutationResponse>;
  /** update single row of the table: "phase" */
  updatePhaseByPk?: Maybe<Phase>;
  /** update multiples rows of table: "phase" */
  updatePhaseMany?: Maybe<Array<Maybe<PhaseMutationResponse>>>;
  /** update data of the table: "position" */
  updatePosition?: Maybe<PositionMutationResponse>;
  /** update single row of the table: "position" */
  updatePositionByPk?: Maybe<Position>;
  /** update multiples rows of table: "position" */
  updatePositionMany?: Maybe<Array<Maybe<PositionMutationResponse>>>;
  /** update data of the table: "priority" */
  updatePriority?: Maybe<PriorityMutationResponse>;
  /** update single row of the table: "priority" */
  updatePriorityByPk?: Maybe<Priority>;
  /** update multiples rows of table: "priority" */
  updatePriorityMany?: Maybe<Array<Maybe<PriorityMutationResponse>>>;
  /** update data of the table: "program" */
  updateProgram?: Maybe<ProgramMutationResponse>;
  /** update single row of the table: "program" */
  updateProgramByPk?: Maybe<Program>;
  /** update multiples rows of table: "program" */
  updateProgramMany?: Maybe<Array<Maybe<ProgramMutationResponse>>>;
  /** update data of the table: "request" */
  updateRequest?: Maybe<RequestMutationResponse>;
  /** update single row of the table: "request" */
  updateRequestByPk?: Maybe<Request>;
  /** update multiples rows of table: "request" */
  updateRequestMany?: Maybe<Array<Maybe<RequestMutationResponse>>>;
  /** update data of the table: "request_type" */
  updateRequestType?: Maybe<RequestTypeMutationResponse>;
  /** update single row of the table: "request_type" */
  updateRequestTypeByPk?: Maybe<RequestType>;
  /** update multiples rows of table: "request_type" */
  updateRequestTypeMany?: Maybe<Array<Maybe<RequestTypeMutationResponse>>>;
  /** update data of the table: "role" */
  updateRole?: Maybe<RoleMutationResponse>;
  /** update single row of the table: "role" */
  updateRoleByPk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  updateRoleMany?: Maybe<Array<Maybe<RoleMutationResponse>>>;
  /** update data of the table: "role_type" */
  updateRoleType?: Maybe<RoleTypeMutationResponse>;
  /** update single row of the table: "role_type" */
  updateRoleTypeByPk?: Maybe<RoleType>;
  /** update multiples rows of table: "role_type" */
  updateRoleTypeMany?: Maybe<Array<Maybe<RoleTypeMutationResponse>>>;
  /** update data of the table: "service" */
  updateService?: Maybe<ServiceMutationResponse>;
  /** update single row of the table: "service" */
  updateServiceByPk?: Maybe<Service>;
  /** update multiples rows of table: "service" */
  updateServiceMany?: Maybe<Array<Maybe<ServiceMutationResponse>>>;
  /** update data of the table: "service_modification" */
  updateServiceModification?: Maybe<ServiceModificationMutationResponse>;
  /** update single row of the table: "service_modification" */
  updateServiceModificationByPk?: Maybe<ServiceModification>;
  /** update multiples rows of table: "service_modification" */
  updateServiceModificationMany?: Maybe<Array<Maybe<ServiceModificationMutationResponse>>>;
  /** update data of the table: "service_modification_type" */
  updateServiceModificationType?: Maybe<ServiceModificationTypeMutationResponse>;
  /** update single row of the table: "service_modification_type" */
  updateServiceModificationTypeByPk?: Maybe<ServiceModificationType>;
  /** update multiples rows of table: "service_modification_type" */
  updateServiceModificationTypeMany?: Maybe<Array<Maybe<ServiceModificationTypeMutationResponse>>>;
  /** update data of the table: "teacher" */
  updateTeacher?: Maybe<TeacherMutationResponse>;
  /** update single row of the table: "teacher" */
  updateTeacherByPk?: Maybe<Teacher>;
  /** update multiples rows of table: "teacher" */
  updateTeacherMany?: Maybe<Array<Maybe<TeacherMutationResponse>>>;
  /** update data of the table: "track" */
  updateTrack?: Maybe<TrackMutationResponse>;
  /** update single row of the table: "track" */
  updateTrackByPk?: Maybe<Track>;
  /** update multiples rows of table: "track" */
  updateTrackMany?: Maybe<Array<Maybe<TrackMutationResponse>>>;
  /** update data of the table: "year" */
  updateYear?: Maybe<YearMutationResponse>;
  /** update single row of the table: "year" */
  updateYearByPk?: Maybe<Year>;
  /** update multiples rows of table: "year" */
  updateYearMany?: Maybe<Array<Maybe<YearMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteAppSettingsArgs = {
  where: AppSettingsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAppSettingsByPkArgs = {
  key: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCoordinationArgs = {
  where: CoordinationBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCoordinationByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCourseArgs = {
  where: CourseBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCourseByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCourseTypeArgs = {
  where: CourseTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCourseTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteDegreeArgs = {
  where: DegreeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteDegreeByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeletePhaseArgs = {
  where: PhaseBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePhaseByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeletePositionArgs = {
  where: PositionBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePositionByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeletePriorityArgs = {
  where: PriorityBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePriorityByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProgramArgs = {
  where: ProgramBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProgramByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRequestArgs = {
  where: RequestBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRequestByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRequestTypeArgs = {
  where: RequestTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRequestTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRoleArgs = {
  where: RoleBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRoleByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteRoleTypeArgs = {
  where: RoleTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteRoleTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteServiceArgs = {
  where: ServiceBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteServiceByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteServiceModificationArgs = {
  where: ServiceModificationBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteServiceModificationByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteServiceModificationTypeArgs = {
  where: ServiceModificationTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteServiceModificationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteTeacherArgs = {
  where: TeacherBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTeacherByPkArgs = {
  uid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteTrackArgs = {
  where: TrackBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteTrackByPkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDeleteYearArgs = {
  where: YearBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteYearByPkArgs = {
  value: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsertAppSettingsArgs = {
  objects: Array<AppSettingsInsertInput>;
  onConflict?: InputMaybe<AppSettingsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAppSettingsOneArgs = {
  object: AppSettingsInsertInput;
  onConflict?: InputMaybe<AppSettingsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCoordinationArgs = {
  objects: Array<CoordinationInsertInput>;
  onConflict?: InputMaybe<CoordinationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCoordinationOneArgs = {
  object: CoordinationInsertInput;
  onConflict?: InputMaybe<CoordinationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseArgs = {
  objects: Array<CourseInsertInput>;
  onConflict?: InputMaybe<CourseOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseOneArgs = {
  object: CourseInsertInput;
  onConflict?: InputMaybe<CourseOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseTypeArgs = {
  objects: Array<CourseTypeInsertInput>;
  onConflict?: InputMaybe<CourseTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCourseTypeOneArgs = {
  object: CourseTypeInsertInput;
  onConflict?: InputMaybe<CourseTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDegreeArgs = {
  objects: Array<DegreeInsertInput>;
  onConflict?: InputMaybe<DegreeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertDegreeOneArgs = {
  object: DegreeInsertInput;
  onConflict?: InputMaybe<DegreeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPhaseArgs = {
  objects: Array<PhaseInsertInput>;
  onConflict?: InputMaybe<PhaseOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPhaseOneArgs = {
  object: PhaseInsertInput;
  onConflict?: InputMaybe<PhaseOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPositionArgs = {
  objects: Array<PositionInsertInput>;
  onConflict?: InputMaybe<PositionOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPositionOneArgs = {
  object: PositionInsertInput;
  onConflict?: InputMaybe<PositionOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPriorityArgs = {
  objects: Array<PriorityInsertInput>;
  onConflict?: InputMaybe<PriorityOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPriorityOneArgs = {
  object: PriorityInsertInput;
  onConflict?: InputMaybe<PriorityOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProgramArgs = {
  objects: Array<ProgramInsertInput>;
  onConflict?: InputMaybe<ProgramOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProgramOneArgs = {
  object: ProgramInsertInput;
  onConflict?: InputMaybe<ProgramOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRequestArgs = {
  objects: Array<RequestInsertInput>;
  onConflict?: InputMaybe<RequestOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRequestOneArgs = {
  object: RequestInsertInput;
  onConflict?: InputMaybe<RequestOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRequestTypeArgs = {
  objects: Array<RequestTypeInsertInput>;
  onConflict?: InputMaybe<RequestTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRequestTypeOneArgs = {
  object: RequestTypeInsertInput;
  onConflict?: InputMaybe<RequestTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRoleArgs = {
  objects: Array<RoleInsertInput>;
  onConflict?: InputMaybe<RoleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRoleOneArgs = {
  object: RoleInsertInput;
  onConflict?: InputMaybe<RoleOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRoleTypeArgs = {
  objects: Array<RoleTypeInsertInput>;
  onConflict?: InputMaybe<RoleTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertRoleTypeOneArgs = {
  object: RoleTypeInsertInput;
  onConflict?: InputMaybe<RoleTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceArgs = {
  objects: Array<ServiceInsertInput>;
  onConflict?: InputMaybe<ServiceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceModificationArgs = {
  objects: Array<ServiceModificationInsertInput>;
  onConflict?: InputMaybe<ServiceModificationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceModificationOneArgs = {
  object: ServiceModificationInsertInput;
  onConflict?: InputMaybe<ServiceModificationOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceModificationTypeArgs = {
  objects: Array<ServiceModificationTypeInsertInput>;
  onConflict?: InputMaybe<ServiceModificationTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceModificationTypeOneArgs = {
  object: ServiceModificationTypeInsertInput;
  onConflict?: InputMaybe<ServiceModificationTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertServiceOneArgs = {
  object: ServiceInsertInput;
  onConflict?: InputMaybe<ServiceOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeacherArgs = {
  objects: Array<TeacherInsertInput>;
  onConflict?: InputMaybe<TeacherOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTeacherOneArgs = {
  object: TeacherInsertInput;
  onConflict?: InputMaybe<TeacherOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTrackArgs = {
  objects: Array<TrackInsertInput>;
  onConflict?: InputMaybe<TrackOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertTrackOneArgs = {
  object: TrackInsertInput;
  onConflict?: InputMaybe<TrackOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertYearArgs = {
  objects: Array<YearInsertInput>;
  onConflict?: InputMaybe<YearOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertYearOneArgs = {
  object: YearInsertInput;
  onConflict?: InputMaybe<YearOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateAppSettingsArgs = {
  _set?: InputMaybe<AppSettingsSetInput>;
  where: AppSettingsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAppSettingsByPkArgs = {
  _set?: InputMaybe<AppSettingsSetInput>;
  pkColumns: AppSettingsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAppSettingsManyArgs = {
  updates: Array<AppSettingsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCoordinationArgs = {
  _inc?: InputMaybe<CoordinationIncInput>;
  _set?: InputMaybe<CoordinationSetInput>;
  where: CoordinationBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCoordinationByPkArgs = {
  _inc?: InputMaybe<CoordinationIncInput>;
  _set?: InputMaybe<CoordinationSetInput>;
  pkColumns: CoordinationPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCoordinationManyArgs = {
  updates: Array<CoordinationUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCourseArgs = {
  _inc?: InputMaybe<CourseIncInput>;
  _set?: InputMaybe<CourseSetInput>;
  where: CourseBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCourseByPkArgs = {
  _inc?: InputMaybe<CourseIncInput>;
  _set?: InputMaybe<CourseSetInput>;
  pkColumns: CoursePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCourseManyArgs = {
  updates: Array<CourseUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCourseTypeArgs = {
  _inc?: InputMaybe<CourseTypeIncInput>;
  _set?: InputMaybe<CourseTypeSetInput>;
  where: CourseTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCourseTypeByPkArgs = {
  _inc?: InputMaybe<CourseTypeIncInput>;
  _set?: InputMaybe<CourseTypeSetInput>;
  pkColumns: CourseTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCourseTypeManyArgs = {
  updates: Array<CourseTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateDegreeArgs = {
  _inc?: InputMaybe<DegreeIncInput>;
  _set?: InputMaybe<DegreeSetInput>;
  where: DegreeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateDegreeByPkArgs = {
  _inc?: InputMaybe<DegreeIncInput>;
  _set?: InputMaybe<DegreeSetInput>;
  pkColumns: DegreePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateDegreeManyArgs = {
  updates: Array<DegreeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePhaseArgs = {
  _set?: InputMaybe<PhaseSetInput>;
  where: PhaseBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePhaseByPkArgs = {
  _set?: InputMaybe<PhaseSetInput>;
  pkColumns: PhasePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePhaseManyArgs = {
  updates: Array<PhaseUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePositionArgs = {
  _inc?: InputMaybe<PositionIncInput>;
  _set?: InputMaybe<PositionSetInput>;
  where: PositionBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePositionByPkArgs = {
  _inc?: InputMaybe<PositionIncInput>;
  _set?: InputMaybe<PositionSetInput>;
  pkColumns: PositionPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePositionManyArgs = {
  updates: Array<PositionUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePriorityArgs = {
  _inc?: InputMaybe<PriorityIncInput>;
  _set?: InputMaybe<PrioritySetInput>;
  where: PriorityBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePriorityByPkArgs = {
  _inc?: InputMaybe<PriorityIncInput>;
  _set?: InputMaybe<PrioritySetInput>;
  pkColumns: PriorityPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePriorityManyArgs = {
  updates: Array<PriorityUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProgramArgs = {
  _inc?: InputMaybe<ProgramIncInput>;
  _set?: InputMaybe<ProgramSetInput>;
  where: ProgramBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProgramByPkArgs = {
  _inc?: InputMaybe<ProgramIncInput>;
  _set?: InputMaybe<ProgramSetInput>;
  pkColumns: ProgramPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProgramManyArgs = {
  updates: Array<ProgramUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRequestArgs = {
  _inc?: InputMaybe<RequestIncInput>;
  _set?: InputMaybe<RequestSetInput>;
  where: RequestBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRequestByPkArgs = {
  _inc?: InputMaybe<RequestIncInput>;
  _set?: InputMaybe<RequestSetInput>;
  pkColumns: RequestPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRequestManyArgs = {
  updates: Array<RequestUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRequestTypeArgs = {
  _set?: InputMaybe<RequestTypeSetInput>;
  where: RequestTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRequestTypeByPkArgs = {
  _set?: InputMaybe<RequestTypeSetInput>;
  pkColumns: RequestTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRequestTypeManyArgs = {
  updates: Array<RequestTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRoleArgs = {
  _inc?: InputMaybe<RoleIncInput>;
  _set?: InputMaybe<RoleSetInput>;
  where: RoleBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRoleByPkArgs = {
  _inc?: InputMaybe<RoleIncInput>;
  _set?: InputMaybe<RoleSetInput>;
  pkColumns: RolePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRoleManyArgs = {
  updates: Array<RoleUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateRoleTypeArgs = {
  _set?: InputMaybe<RoleTypeSetInput>;
  where: RoleTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateRoleTypeByPkArgs = {
  _set?: InputMaybe<RoleTypeSetInput>;
  pkColumns: RoleTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateRoleTypeManyArgs = {
  updates: Array<RoleTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateServiceArgs = {
  _inc?: InputMaybe<ServiceIncInput>;
  _set?: InputMaybe<ServiceSetInput>;
  where: ServiceBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateServiceByPkArgs = {
  _inc?: InputMaybe<ServiceIncInput>;
  _set?: InputMaybe<ServiceSetInput>;
  pkColumns: ServicePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateServiceManyArgs = {
  updates: Array<ServiceUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationArgs = {
  _inc?: InputMaybe<ServiceModificationIncInput>;
  _set?: InputMaybe<ServiceModificationSetInput>;
  where: ServiceModificationBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationByPkArgs = {
  _inc?: InputMaybe<ServiceModificationIncInput>;
  _set?: InputMaybe<ServiceModificationSetInput>;
  pkColumns: ServiceModificationPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationManyArgs = {
  updates: Array<ServiceModificationUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationTypeArgs = {
  _set?: InputMaybe<ServiceModificationTypeSetInput>;
  where: ServiceModificationTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationTypeByPkArgs = {
  _set?: InputMaybe<ServiceModificationTypeSetInput>;
  pkColumns: ServiceModificationTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateServiceModificationTypeManyArgs = {
  updates: Array<ServiceModificationTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTeacherArgs = {
  _inc?: InputMaybe<TeacherIncInput>;
  _set?: InputMaybe<TeacherSetInput>;
  where: TeacherBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTeacherByPkArgs = {
  _inc?: InputMaybe<TeacherIncInput>;
  _set?: InputMaybe<TeacherSetInput>;
  pkColumns: TeacherPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTeacherManyArgs = {
  updates: Array<TeacherUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateTrackArgs = {
  _inc?: InputMaybe<TrackIncInput>;
  _set?: InputMaybe<TrackSetInput>;
  where: TrackBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateTrackByPkArgs = {
  _inc?: InputMaybe<TrackIncInput>;
  _set?: InputMaybe<TrackSetInput>;
  pkColumns: TrackPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateTrackManyArgs = {
  updates: Array<TrackUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateYearArgs = {
  _inc?: InputMaybe<YearIncInput>;
  _set?: InputMaybe<YearSetInput>;
  where: YearBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateYearByPkArgs = {
  _inc?: InputMaybe<YearIncInput>;
  _set?: InputMaybe<YearSetInput>;
  pkColumns: YearPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateYearManyArgs = {
  updates: Array<YearUpdates>;
};

export type PriorityAggregateBoolExpBool_And = {
  arguments: PrioritySelectColumnPriorityAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PriorityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PriorityAggregateBoolExpBool_Or = {
  arguments: PrioritySelectColumnPriorityAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PriorityBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PriorityAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PrioritySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PriorityBoolExp>;
  predicate: IntComparisonExp;
};

export type ProgramAggregateBoolExpBool_And = {
  arguments: ProgramSelectColumnProgramAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProgramBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ProgramAggregateBoolExpBool_Or = {
  arguments: ProgramSelectColumnProgramAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProgramBoolExp>;
  predicate: BooleanComparisonExp;
};

export type ProgramAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ProgramSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProgramBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "app_settings" */
  appSettings: Array<AppSettings>;
  /** fetch aggregated fields from the table: "app_settings" */
  appSettingsAggregate: AppSettingsAggregate;
  /** fetch data from the table: "app_settings" using primary key columns */
  appSettingsByPk?: Maybe<AppSettings>;
  /** fetch data from the table: "coordination" */
  coordination: Array<Coordination>;
  /** fetch aggregated fields from the table: "coordination" */
  coordinationAggregate: CoordinationAggregate;
  /** fetch data from the table: "coordination" using primary key columns */
  coordinationByPk?: Maybe<Coordination>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  courseAggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  courseByPk?: Maybe<Course>;
  /** fetch data from the table: "course_type" */
  courseType: Array<CourseType>;
  /** fetch aggregated fields from the table: "course_type" */
  courseTypeAggregate: CourseTypeAggregate;
  /** fetch data from the table: "course_type" using primary key columns */
  courseTypeByPk?: Maybe<CourseType>;
  /** fetch data from the table: "degree" */
  degree: Array<Degree>;
  /** fetch aggregated fields from the table: "degree" */
  degreeAggregate: DegreeAggregate;
  /** fetch data from the table: "degree" using primary key columns */
  degreeByPk?: Maybe<Degree>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phaseAggregate: PhaseAggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phaseByPk?: Maybe<Phase>;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  positionAggregate: PositionAggregate;
  /** fetch data from the table: "position" using primary key columns */
  positionByPk?: Maybe<Position>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  priorityAggregate: PriorityAggregate;
  /** fetch data from the table: "priority" using primary key columns */
  priorityByPk?: Maybe<Priority>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  programAggregate: ProgramAggregate;
  /** fetch data from the table: "program" using primary key columns */
  programByPk?: Maybe<Program>;
  /** fetch data from the table: "request" */
  request: Array<Request>;
  /** fetch aggregated fields from the table: "request" */
  requestAggregate: RequestAggregate;
  /** fetch data from the table: "request" using primary key columns */
  requestByPk?: Maybe<Request>;
  /** fetch data from the table: "request_type" */
  requestType: Array<RequestType>;
  /** fetch aggregated fields from the table: "request_type" */
  requestTypeAggregate: RequestTypeAggregate;
  /** fetch data from the table: "request_type" using primary key columns */
  requestTypeByPk?: Maybe<RequestType>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  roleAggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  roleByPk?: Maybe<Role>;
  /** fetch data from the table: "role_type" */
  roleType: Array<RoleType>;
  /** fetch aggregated fields from the table: "role_type" */
  roleTypeAggregate: RoleTypeAggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  roleTypeByPk?: Maybe<RoleType>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  serviceAggregate: ServiceAggregate;
  /** fetch data from the table: "service" using primary key columns */
  serviceByPk?: Maybe<Service>;
  /** fetch data from the table: "service_modification" */
  serviceModification: Array<ServiceModification>;
  /** fetch aggregated fields from the table: "service_modification" */
  serviceModificationAggregate: ServiceModificationAggregate;
  /** fetch data from the table: "service_modification" using primary key columns */
  serviceModificationByPk?: Maybe<ServiceModification>;
  /** fetch data from the table: "service_modification_type" */
  serviceModificationType: Array<ServiceModificationType>;
  /** fetch aggregated fields from the table: "service_modification_type" */
  serviceModificationTypeAggregate: ServiceModificationTypeAggregate;
  /** fetch data from the table: "service_modification_type" using primary key columns */
  serviceModificationTypeByPk?: Maybe<ServiceModificationType>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacherAggregate: TeacherAggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacherByPk?: Maybe<Teacher>;
  /** fetch data from the table: "track" */
  track: Array<Track>;
  /** fetch aggregated fields from the table: "track" */
  trackAggregate: TrackAggregate;
  /** fetch data from the table: "track" using primary key columns */
  trackByPk?: Maybe<Track>;
  /** fetch data from the table: "year" */
  year: Array<Year>;
  /** fetch aggregated fields from the table: "year" */
  yearAggregate: YearAggregate;
  /** fetch data from the table: "year" using primary key columns */
  yearByPk?: Maybe<Year>;
};


export type Query_RootAppSettingsArgs = {
  distinctOn?: InputMaybe<Array<AppSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppSettingsOrderBy>>;
  where?: InputMaybe<AppSettingsBoolExp>;
};


export type Query_RootAppSettingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AppSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppSettingsOrderBy>>;
  where?: InputMaybe<AppSettingsBoolExp>;
};


export type Query_RootAppSettingsByPkArgs = {
  key: Scalars['String']['input'];
};


export type Query_RootCoordinationArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


export type Query_RootCoordinationAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


export type Query_RootCoordinationByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCourseArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


export type Query_RootCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


export type Query_RootCourseByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootCourseTypeArgs = {
  distinctOn?: InputMaybe<Array<CourseTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseTypeOrderBy>>;
  where?: InputMaybe<CourseTypeBoolExp>;
};


export type Query_RootCourseTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseTypeOrderBy>>;
  where?: InputMaybe<CourseTypeBoolExp>;
};


export type Query_RootCourseTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootDegreeArgs = {
  distinctOn?: InputMaybe<Array<DegreeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DegreeOrderBy>>;
  where?: InputMaybe<DegreeBoolExp>;
};


export type Query_RootDegreeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DegreeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DegreeOrderBy>>;
  where?: InputMaybe<DegreeBoolExp>;
};


export type Query_RootDegreeByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPhaseArgs = {
  distinctOn?: InputMaybe<Array<PhaseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhaseOrderBy>>;
  where?: InputMaybe<PhaseBoolExp>;
};


export type Query_RootPhaseAggregateArgs = {
  distinctOn?: InputMaybe<Array<PhaseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhaseOrderBy>>;
  where?: InputMaybe<PhaseBoolExp>;
};


export type Query_RootPhaseByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPositionArgs = {
  distinctOn?: InputMaybe<Array<PositionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionOrderBy>>;
  where?: InputMaybe<PositionBoolExp>;
};


export type Query_RootPositionAggregateArgs = {
  distinctOn?: InputMaybe<Array<PositionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionOrderBy>>;
  where?: InputMaybe<PositionBoolExp>;
};


export type Query_RootPositionByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootPriorityArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


export type Query_RootPriorityAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


export type Query_RootPriorityByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProgramArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


export type Query_RootProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


export type Query_RootProgramByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRequestArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


export type Query_RootRequestAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


export type Query_RootRequestByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRequestTypeArgs = {
  distinctOn?: InputMaybe<Array<RequestTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestTypeOrderBy>>;
  where?: InputMaybe<RequestTypeBoolExp>;
};


export type Query_RootRequestTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestTypeOrderBy>>;
  where?: InputMaybe<RequestTypeBoolExp>;
};


export type Query_RootRequestTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootRoleArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type Query_RootRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type Query_RootRoleByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRoleTypeArgs = {
  distinctOn?: InputMaybe<Array<RoleTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleTypeOrderBy>>;
  where?: InputMaybe<RoleTypeBoolExp>;
};


export type Query_RootRoleTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleTypeOrderBy>>;
  where?: InputMaybe<RoleTypeBoolExp>;
};


export type Query_RootRoleTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootServiceArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


export type Query_RootServiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


export type Query_RootServiceByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootServiceModificationArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


export type Query_RootServiceModificationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


export type Query_RootServiceModificationByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootServiceModificationTypeArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationTypeOrderBy>>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};


export type Query_RootServiceModificationTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationTypeOrderBy>>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};


export type Query_RootServiceModificationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootTeacherArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


export type Query_RootTeacherAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


export type Query_RootTeacherByPkArgs = {
  uid: Scalars['String']['input'];
};


export type Query_RootTrackArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


export type Query_RootTrackAggregateArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


export type Query_RootTrackByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootYearArgs = {
  distinctOn?: InputMaybe<Array<YearSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<YearOrderBy>>;
  where?: InputMaybe<YearBoolExp>;
};


export type Query_RootYearAggregateArgs = {
  distinctOn?: InputMaybe<Array<YearSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<YearOrderBy>>;
  where?: InputMaybe<YearBoolExp>;
};


export type Query_RootYearByPkArgs = {
  value: Scalars['Int']['input'];
};

export type RequestAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RequestSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RequestBoolExp>;
  predicate: IntComparisonExp;
};

export type RoleAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoleBoolExp>;
  predicate: IntComparisonExp;
};

export type ServiceAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ServiceSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ServiceBoolExp>;
  predicate: IntComparisonExp;
};

export type ServiceModificationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ServiceModificationBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "app_settings" */
  appSettings: Array<AppSettings>;
  /** fetch aggregated fields from the table: "app_settings" */
  appSettingsAggregate: AppSettingsAggregate;
  /** fetch data from the table: "app_settings" using primary key columns */
  appSettingsByPk?: Maybe<AppSettings>;
  /** fetch data from the table in a streaming manner: "app_settings" */
  appSettingsStream: Array<AppSettings>;
  /** fetch data from the table: "coordination" */
  coordination: Array<Coordination>;
  /** fetch aggregated fields from the table: "coordination" */
  coordinationAggregate: CoordinationAggregate;
  /** fetch data from the table: "coordination" using primary key columns */
  coordinationByPk?: Maybe<Coordination>;
  /** fetch data from the table in a streaming manner: "coordination" */
  coordinationStream: Array<Coordination>;
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  courseAggregate: CourseAggregate;
  /** fetch data from the table: "course" using primary key columns */
  courseByPk?: Maybe<Course>;
  /** fetch data from the table in a streaming manner: "course" */
  courseStream: Array<Course>;
  /** fetch data from the table: "course_type" */
  courseType: Array<CourseType>;
  /** fetch aggregated fields from the table: "course_type" */
  courseTypeAggregate: CourseTypeAggregate;
  /** fetch data from the table: "course_type" using primary key columns */
  courseTypeByPk?: Maybe<CourseType>;
  /** fetch data from the table in a streaming manner: "course_type" */
  courseTypeStream: Array<CourseType>;
  /** fetch data from the table: "degree" */
  degree: Array<Degree>;
  /** fetch aggregated fields from the table: "degree" */
  degreeAggregate: DegreeAggregate;
  /** fetch data from the table: "degree" using primary key columns */
  degreeByPk?: Maybe<Degree>;
  /** fetch data from the table in a streaming manner: "degree" */
  degreeStream: Array<Degree>;
  /** fetch data from the table: "phase" */
  phase: Array<Phase>;
  /** fetch aggregated fields from the table: "phase" */
  phaseAggregate: PhaseAggregate;
  /** fetch data from the table: "phase" using primary key columns */
  phaseByPk?: Maybe<Phase>;
  /** fetch data from the table in a streaming manner: "phase" */
  phaseStream: Array<Phase>;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  positionAggregate: PositionAggregate;
  /** fetch data from the table: "position" using primary key columns */
  positionByPk?: Maybe<Position>;
  /** fetch data from the table in a streaming manner: "position" */
  positionStream: Array<Position>;
  /** fetch data from the table: "priority" */
  priority: Array<Priority>;
  /** fetch aggregated fields from the table: "priority" */
  priorityAggregate: PriorityAggregate;
  /** fetch data from the table: "priority" using primary key columns */
  priorityByPk?: Maybe<Priority>;
  /** fetch data from the table in a streaming manner: "priority" */
  priorityStream: Array<Priority>;
  /** fetch data from the table: "program" */
  program: Array<Program>;
  /** fetch aggregated fields from the table: "program" */
  programAggregate: ProgramAggregate;
  /** fetch data from the table: "program" using primary key columns */
  programByPk?: Maybe<Program>;
  /** fetch data from the table in a streaming manner: "program" */
  programStream: Array<Program>;
  /** fetch data from the table: "request" */
  request: Array<Request>;
  /** fetch aggregated fields from the table: "request" */
  requestAggregate: RequestAggregate;
  /** fetch data from the table: "request" using primary key columns */
  requestByPk?: Maybe<Request>;
  /** fetch data from the table in a streaming manner: "request" */
  requestStream: Array<Request>;
  /** fetch data from the table: "request_type" */
  requestType: Array<RequestType>;
  /** fetch aggregated fields from the table: "request_type" */
  requestTypeAggregate: RequestTypeAggregate;
  /** fetch data from the table: "request_type" using primary key columns */
  requestTypeByPk?: Maybe<RequestType>;
  /** fetch data from the table in a streaming manner: "request_type" */
  requestTypeStream: Array<RequestType>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  roleAggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  roleByPk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  roleStream: Array<Role>;
  /** fetch data from the table: "role_type" */
  roleType: Array<RoleType>;
  /** fetch aggregated fields from the table: "role_type" */
  roleTypeAggregate: RoleTypeAggregate;
  /** fetch data from the table: "role_type" using primary key columns */
  roleTypeByPk?: Maybe<RoleType>;
  /** fetch data from the table in a streaming manner: "role_type" */
  roleTypeStream: Array<RoleType>;
  /** fetch data from the table: "service" */
  service: Array<Service>;
  /** fetch aggregated fields from the table: "service" */
  serviceAggregate: ServiceAggregate;
  /** fetch data from the table: "service" using primary key columns */
  serviceByPk?: Maybe<Service>;
  /** fetch data from the table: "service_modification" */
  serviceModification: Array<ServiceModification>;
  /** fetch aggregated fields from the table: "service_modification" */
  serviceModificationAggregate: ServiceModificationAggregate;
  /** fetch data from the table: "service_modification" using primary key columns */
  serviceModificationByPk?: Maybe<ServiceModification>;
  /** fetch data from the table in a streaming manner: "service_modification" */
  serviceModificationStream: Array<ServiceModification>;
  /** fetch data from the table: "service_modification_type" */
  serviceModificationType: Array<ServiceModificationType>;
  /** fetch aggregated fields from the table: "service_modification_type" */
  serviceModificationTypeAggregate: ServiceModificationTypeAggregate;
  /** fetch data from the table: "service_modification_type" using primary key columns */
  serviceModificationTypeByPk?: Maybe<ServiceModificationType>;
  /** fetch data from the table in a streaming manner: "service_modification_type" */
  serviceModificationTypeStream: Array<ServiceModificationType>;
  /** fetch data from the table in a streaming manner: "service" */
  serviceStream: Array<Service>;
  /** fetch data from the table: "teacher" */
  teacher: Array<Teacher>;
  /** fetch aggregated fields from the table: "teacher" */
  teacherAggregate: TeacherAggregate;
  /** fetch data from the table: "teacher" using primary key columns */
  teacherByPk?: Maybe<Teacher>;
  /** fetch data from the table in a streaming manner: "teacher" */
  teacherStream: Array<Teacher>;
  /** fetch data from the table: "track" */
  track: Array<Track>;
  /** fetch aggregated fields from the table: "track" */
  trackAggregate: TrackAggregate;
  /** fetch data from the table: "track" using primary key columns */
  trackByPk?: Maybe<Track>;
  /** fetch data from the table in a streaming manner: "track" */
  trackStream: Array<Track>;
  /** fetch data from the table: "year" */
  year: Array<Year>;
  /** fetch aggregated fields from the table: "year" */
  yearAggregate: YearAggregate;
  /** fetch data from the table: "year" using primary key columns */
  yearByPk?: Maybe<Year>;
  /** fetch data from the table in a streaming manner: "year" */
  yearStream: Array<Year>;
};


export type Subscription_RootAppSettingsArgs = {
  distinctOn?: InputMaybe<Array<AppSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppSettingsOrderBy>>;
  where?: InputMaybe<AppSettingsBoolExp>;
};


export type Subscription_RootAppSettingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AppSettingsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppSettingsOrderBy>>;
  where?: InputMaybe<AppSettingsBoolExp>;
};


export type Subscription_RootAppSettingsByPkArgs = {
  key: Scalars['String']['input'];
};


export type Subscription_RootAppSettingsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AppSettingsStreamCursorInput>>;
  where?: InputMaybe<AppSettingsBoolExp>;
};


export type Subscription_RootCoordinationArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


export type Subscription_RootCoordinationAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinationOrderBy>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


export type Subscription_RootCoordinationByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCoordinationStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoordinationStreamCursorInput>>;
  where?: InputMaybe<CoordinationBoolExp>;
};


export type Subscription_RootCourseArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


export type Subscription_RootCourseAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


export type Subscription_RootCourseByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCourseStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CourseStreamCursorInput>>;
  where?: InputMaybe<CourseBoolExp>;
};


export type Subscription_RootCourseTypeArgs = {
  distinctOn?: InputMaybe<Array<CourseTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseTypeOrderBy>>;
  where?: InputMaybe<CourseTypeBoolExp>;
};


export type Subscription_RootCourseTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseTypeOrderBy>>;
  where?: InputMaybe<CourseTypeBoolExp>;
};


export type Subscription_RootCourseTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootCourseTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CourseTypeStreamCursorInput>>;
  where?: InputMaybe<CourseTypeBoolExp>;
};


export type Subscription_RootDegreeArgs = {
  distinctOn?: InputMaybe<Array<DegreeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DegreeOrderBy>>;
  where?: InputMaybe<DegreeBoolExp>;
};


export type Subscription_RootDegreeAggregateArgs = {
  distinctOn?: InputMaybe<Array<DegreeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DegreeOrderBy>>;
  where?: InputMaybe<DegreeBoolExp>;
};


export type Subscription_RootDegreeByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootDegreeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DegreeStreamCursorInput>>;
  where?: InputMaybe<DegreeBoolExp>;
};


export type Subscription_RootPhaseArgs = {
  distinctOn?: InputMaybe<Array<PhaseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhaseOrderBy>>;
  where?: InputMaybe<PhaseBoolExp>;
};


export type Subscription_RootPhaseAggregateArgs = {
  distinctOn?: InputMaybe<Array<PhaseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PhaseOrderBy>>;
  where?: InputMaybe<PhaseBoolExp>;
};


export type Subscription_RootPhaseByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPhaseStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PhaseStreamCursorInput>>;
  where?: InputMaybe<PhaseBoolExp>;
};


export type Subscription_RootPositionArgs = {
  distinctOn?: InputMaybe<Array<PositionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionOrderBy>>;
  where?: InputMaybe<PositionBoolExp>;
};


export type Subscription_RootPositionAggregateArgs = {
  distinctOn?: InputMaybe<Array<PositionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PositionOrderBy>>;
  where?: InputMaybe<PositionBoolExp>;
};


export type Subscription_RootPositionByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootPositionStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PositionStreamCursorInput>>;
  where?: InputMaybe<PositionBoolExp>;
};


export type Subscription_RootPriorityArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


export type Subscription_RootPriorityAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


export type Subscription_RootPriorityByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPriorityStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PriorityStreamCursorInput>>;
  where?: InputMaybe<PriorityBoolExp>;
};


export type Subscription_RootProgramArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


export type Subscription_RootProgramAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


export type Subscription_RootProgramByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProgramStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProgramStreamCursorInput>>;
  where?: InputMaybe<ProgramBoolExp>;
};


export type Subscription_RootRequestArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


export type Subscription_RootRequestAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


export type Subscription_RootRequestByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRequestStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RequestStreamCursorInput>>;
  where?: InputMaybe<RequestBoolExp>;
};


export type Subscription_RootRequestTypeArgs = {
  distinctOn?: InputMaybe<Array<RequestTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestTypeOrderBy>>;
  where?: InputMaybe<RequestTypeBoolExp>;
};


export type Subscription_RootRequestTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RequestTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestTypeOrderBy>>;
  where?: InputMaybe<RequestTypeBoolExp>;
};


export type Subscription_RootRequestTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRequestTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RequestTypeStreamCursorInput>>;
  where?: InputMaybe<RequestTypeBoolExp>;
};


export type Subscription_RootRoleArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type Subscription_RootRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type Subscription_RootRoleByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRoleStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RoleStreamCursorInput>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type Subscription_RootRoleTypeArgs = {
  distinctOn?: InputMaybe<Array<RoleTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleTypeOrderBy>>;
  where?: InputMaybe<RoleTypeBoolExp>;
};


export type Subscription_RootRoleTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoleTypeOrderBy>>;
  where?: InputMaybe<RoleTypeBoolExp>;
};


export type Subscription_RootRoleTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootRoleTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RoleTypeStreamCursorInput>>;
  where?: InputMaybe<RoleTypeBoolExp>;
};


export type Subscription_RootServiceArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


export type Subscription_RootServiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


export type Subscription_RootServiceByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootServiceModificationArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


export type Subscription_RootServiceModificationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


export type Subscription_RootServiceModificationByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootServiceModificationStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ServiceModificationStreamCursorInput>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


export type Subscription_RootServiceModificationTypeArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationTypeOrderBy>>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};


export type Subscription_RootServiceModificationTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationTypeOrderBy>>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};


export type Subscription_RootServiceModificationTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootServiceModificationTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ServiceModificationTypeStreamCursorInput>>;
  where?: InputMaybe<ServiceModificationTypeBoolExp>;
};


export type Subscription_RootServiceStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ServiceStreamCursorInput>>;
  where?: InputMaybe<ServiceBoolExp>;
};


export type Subscription_RootTeacherArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


export type Subscription_RootTeacherAggregateArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


export type Subscription_RootTeacherByPkArgs = {
  uid: Scalars['String']['input'];
};


export type Subscription_RootTeacherStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TeacherStreamCursorInput>>;
  where?: InputMaybe<TeacherBoolExp>;
};


export type Subscription_RootTrackArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


export type Subscription_RootTrackAggregateArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


export type Subscription_RootTrackByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTrackStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<TrackStreamCursorInput>>;
  where?: InputMaybe<TrackBoolExp>;
};


export type Subscription_RootYearArgs = {
  distinctOn?: InputMaybe<Array<YearSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<YearOrderBy>>;
  where?: InputMaybe<YearBoolExp>;
};


export type Subscription_RootYearAggregateArgs = {
  distinctOn?: InputMaybe<Array<YearSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<YearOrderBy>>;
  where?: InputMaybe<YearBoolExp>;
};


export type Subscription_RootYearByPkArgs = {
  value: Scalars['Int']['input'];
};


export type Subscription_RootYearStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<YearStreamCursorInput>>;
  where?: InputMaybe<YearBoolExp>;
};

export type TeacherAggregateBoolExpBool_And = {
  arguments: TeacherSelectColumnTeacherAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TeacherBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TeacherAggregateBoolExpBool_Or = {
  arguments: TeacherSelectColumnTeacherAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TeacherBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TeacherAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TeacherSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TeacherBoolExp>;
  predicate: IntComparisonExp;
};

export type TrackAggregateBoolExpBool_And = {
  arguments: TrackSelectColumnTrackAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TrackBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TrackAggregateBoolExpBool_Or = {
  arguments: TrackSelectColumnTrackAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TrackBoolExp>;
  predicate: BooleanComparisonExp;
};

export type TrackAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TrackSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<TrackBoolExp>;
  predicate: IntComparisonExp;
};

export type GetCurrentPhaseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentPhaseQuery = { __typename?: 'query_root', phases: Array<{ __typename?: 'Phase', value: string }> };

export type GetYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYearsQuery = { __typename?: 'query_root', years: Array<{ __typename?: 'Year', value: number, current?: boolean | null, visible: boolean }> };

export type CourseRowFragment = { __typename?: 'Course', id: number, name: string, nameShort?: string | null, visible: boolean, semester: number, hoursPerGroup?: number | null, numberOfGroups?: number | null, totalHours?: number | null, program: { __typename?: 'Program', id: number, name: string, nameShort?: string | null, visible: boolean, degree: { __typename?: 'Degree', id: number, name: string, nameShort?: string | null, visible: boolean } }, track?: { __typename?: 'Track', id: number, name: string, nameShort?: string | null, visible: boolean } | null, courseType: { __typename?: 'CourseType', value: string, label: string }, totalAssigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalPrimary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalSecondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalPriority: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null } } & { ' $fragmentName'?: 'CourseRowFragment' };

export type ServiceDetailsFragment = { __typename?: 'Service', teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null }, requests: Array<{ __typename?: 'Request', courseId: number, type: string, hours: number }> } & { ' $fragmentName'?: 'ServiceDetailsFragment' };

export type ServiceRowsFragment = { __typename?: 'Service', hours: number, message?: string | null, teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null, visible: boolean }, totalModifications: { __typename?: 'ServiceModificationAggregate', aggregate?: { __typename?: 'ServiceModificationAggregateFields', sum?: { __typename?: 'ServiceModificationSumFields', hours?: number | null } | null } | null }, totalAssigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, totalPrimary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, totalSecondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null } } & { ' $fragmentName'?: 'ServiceRowsFragment' };

export type PriorityChipDataFragment = { __typename?: 'Priority', seniority?: number | null, isPriority?: boolean | null, service: { __typename?: 'Service', teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } } } & { ' $fragmentName'?: 'PriorityChipDataFragment' };

export type RequestCardDataFragment = { __typename?: 'Request', id: number, type: string, hours: number, isPriority?: boolean | null, service: { __typename?: 'Service', id: number, teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null } }, course: { __typename?: 'Course', id: number, hoursPerGroup?: number | null } } & { ' $fragmentName'?: 'RequestCardDataFragment' };

export type RequestFormDataFragment = { __typename?: 'Course', courseId: number, hoursPerGroup?: number | null } & { ' $fragmentName'?: 'RequestFormDataFragment' };

export type GetActiveTeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetActiveTeachersQuery = { __typename?: 'query_root', teachers: Array<{ __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null }> };

export type CourseArchivesFragment = { __typename?: 'Course', parent?: { __typename?: 'Course', year: number, requests: Array<(
      { __typename?: 'Request', id: number }
      & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
    )>, parent?: { __typename?: 'Course', year: number, requests: Array<(
        { __typename?: 'Request', id: number }
        & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
      )>, parent?: { __typename?: 'Course', year: number, requests: Array<(
          { __typename?: 'Request', id: number }
          & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
        )> } | null } | null } | null } & { ' $fragmentName'?: 'CourseArchivesFragment' };

export type CourseCoordinatorsFragment = { __typename?: 'Course', coordinations: Array<{ __typename?: 'Coordination', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }>, program: { __typename?: 'Program', coordinations: Array<{ __typename?: 'Coordination', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }> }, track?: { __typename?: 'Track', coordinations: Array<{ __typename?: 'Coordination', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }> } | null } & { ' $fragmentName'?: 'CourseCoordinatorsFragment' };

export type CourseDescriptionFragment = { __typename?: 'Course', description?: string | null, courseId: number, coordinations: Array<{ __typename?: 'Coordination', uid: string }>, program: { __typename?: 'Program', coordinations: Array<{ __typename?: 'Coordination', uid: string }> }, track?: { __typename?: 'Track', coordinations: Array<{ __typename?: 'Coordination', uid: string }> } | null } & { ' $fragmentName'?: 'CourseDescriptionFragment' };

export type UpdateDescriptionMutationVariables = Exact<{
  courseId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDescriptionMutation = { __typename?: 'mutation_root', course?: { __typename?: 'Course', id: number } | null };

export type CourseDetailsFragment = (
  { __typename?: 'Course', courseId: number }
  & { ' $fragmentRefs'?: { 'CourseExpansionFragment': CourseExpansionFragment;'CourseCoordinatorsFragment': CourseCoordinatorsFragment;'CourseDescriptionFragment': CourseDescriptionFragment;'CourseRequestsFragment': CourseRequestsFragment;'CoursePrioritiesFragment': CoursePrioritiesFragment;'CourseArchivesFragment': CourseArchivesFragment } }
) & { ' $fragmentName'?: 'CourseDetailsFragment' };

export type CourseExpansionFragment = { __typename?: 'Course', name: string, semester: number, courseType: { __typename?: 'CourseType', label: string }, program: { __typename?: 'Program', name: string, degree: { __typename?: 'Degree', name: string } }, track?: { __typename?: 'Track', name: string } | null } & { ' $fragmentName'?: 'CourseExpansionFragment' };

export type CoursePrioritiesFragment = { __typename?: 'Course', priorities: Array<(
    { __typename?: 'Priority', id: number }
    & { ' $fragmentRefs'?: { 'PriorityChipDataFragment': PriorityChipDataFragment } }
  )> } & { ' $fragmentName'?: 'CoursePrioritiesFragment' };

export type CourseRequestsFragment = (
  { __typename?: 'Course', requests: Array<(
    { __typename?: 'Request', id: number, type: string }
    & { ' $fragmentRefs'?: { 'RequestCardDataFragment': RequestCardDataFragment } }
  )> }
  & { ' $fragmentRefs'?: { 'RequestFormDataFragment': RequestFormDataFragment } }
) & { ' $fragmentName'?: 'CourseRequestsFragment' };

export type SetCurrentYearMutationVariables = Exact<{
  value: Scalars['Int']['input'];
}>;


export type SetCurrentYearMutation = { __typename?: 'mutation_root', years?: { __typename?: 'YearMutationResponse', returning: Array<{ __typename?: 'Year', value: number }> } | null, current?: { __typename?: 'Year', value: number } | null };

export type SetCurrentPhaseMutationVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SetCurrentPhaseMutation = { __typename?: 'mutation_root', phases?: { __typename?: 'PhaseMutationResponse', returning: Array<{ __typename?: 'Phase', value: string }> } | null, enCours?: { __typename?: 'Phase', value: string } | null };

export type GetLegalNoticeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLegalNoticeQuery = { __typename?: 'query_root', legalNotice?: { __typename?: 'AppSettings', value?: string | null } | null };

export type TeacherCoordinationsFragment = { __typename?: 'Teacher', coordinations: Array<{ __typename?: 'Coordination', id: number, comment?: string | null, program?: { __typename?: 'Program', id: number, name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } | null, track?: { __typename?: 'Track', id: number, name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null, course?: { __typename?: 'Course', id: number, year: number, name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null } | null }> } & { ' $fragmentName'?: 'TeacherCoordinationsFragment' };

export type TeacherServiceFragment = (
  { __typename?: 'Service' }
  & { ' $fragmentRefs'?: { 'TeacherServiceDetailsFragment': TeacherServiceDetailsFragment;'TeacherServiceRequestsFragment': TeacherServiceRequestsFragment;'TeacherServicePrioritiesFragment': TeacherServicePrioritiesFragment;'TeacherServiceMessageFragment': TeacherServiceMessageFragment } }
) & { ' $fragmentName'?: 'TeacherServiceFragment' };

export type TeacherNoServiceFragment = { __typename?: 'Teacher', baseServiceHours?: number | null, positionByPosition?: { __typename?: 'Position', baseServiceHours?: number | null } | null } & { ' $fragmentName'?: 'TeacherNoServiceFragment' };

export type InsertServiceMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type InsertServiceMutation = { __typename?: 'mutation_root', service?: { __typename?: 'Service', id: number } | null };

export type GetModificationTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetModificationTypesQuery = { __typename?: 'query_root', modificationTypes: Array<{ __typename?: 'ServiceModificationType', value: string, label: string, description?: string | null }> };

export type TeacherServiceDetailsFragment = { __typename?: 'Service', id: number, uid: string, year: number, hours: number, totalModifications: { __typename?: 'ServiceModificationAggregate', aggregate?: { __typename?: 'ServiceModificationAggregateFields', sum?: { __typename?: 'ServiceModificationSumFields', hours?: number | null } | null } | null }, modifications: Array<{ __typename?: 'ServiceModification', id: number, hours: number, modificationType: { __typename?: 'ServiceModificationType', label: string } }> } & { ' $fragmentName'?: 'TeacherServiceDetailsFragment' };

export type UpsertServiceMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type UpsertServiceMutation = { __typename?: 'mutation_root', service?: { __typename?: 'Service', id: number } | null };

export type InsertModificationMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  modificationType: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type InsertModificationMutation = { __typename?: 'mutation_root', serviceModification?: { __typename?: 'ServiceModification', id: number } | null };

export type DeleteModificationMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteModificationMutation = { __typename?: 'mutation_root', serviceModification?: { __typename?: 'ServiceModification', id: number } | null };

export type TeacherServiceMessageFragment = { __typename?: 'Service', id: number, uid: string, message?: string | null } & { ' $fragmentName'?: 'TeacherServiceMessageFragment' };

export type UpdateMessageMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateMessageMutation = { __typename?: 'mutation_root', service?: { __typename?: 'Service', id: number } | null };

export type TeacherServicePrioritiesFragment = { __typename?: 'Service', priorities: Array<{ __typename?: 'Priority', id: number, seniority?: number | null, isPriority?: boolean | null, course: { __typename?: 'Course', name: string, nameShort?: string | null, semester: number, typeByType: { __typename?: 'CourseType', label: string }, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null } }> } & { ' $fragmentName'?: 'TeacherServicePrioritiesFragment' };

export type TeacherServiceRequestsFragment = { __typename?: 'Service', assigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, primary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, secondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null } } & { ' $fragmentName'?: 'TeacherServiceRequestsFragment' };

export type TeacherTitleFragment = { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null, positionByPosition?: { __typename?: 'Position', label: string } | null } & { ' $fragmentName'?: 'TeacherTitleFragment' };

export type GetAssignmentsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<RequestBoolExp>;
}>;


export type GetAssignmentsQuery = { __typename?: 'query_root', assignments: Array<{ __typename?: 'Request', course: { __typename?: 'Course', name: string, nameShort?: string | null, semester: number, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null, typeByType: { __typename?: 'CourseType', label: string } }, service: { __typename?: 'Service', teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null } } }> };

export type DummyMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type DummyMutationMutation = { __typename?: 'mutation_root', requests?: { __typename?: 'RequestMutationResponse', returning: Array<{ __typename?: 'Request', id: number }> } | null };

export type GetServiceFromCourseQueryVariables = Exact<{
  uid: Scalars['String']['input'];
  courseId: Scalars['Int']['input'];
}>;


export type GetServiceFromCourseQuery = { __typename?: 'query_root', course?: { __typename?: 'Course', year: number, yearByYear: { __typename?: 'Year', services: Array<{ __typename?: 'Service', id: number }> } } | null };

export type GetRequestQueryVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
}>;


export type GetRequestQuery = { __typename?: 'query_root', requests: Array<{ __typename?: 'Request', hours: number }> };

export type UpsertRequestMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type UpsertRequestMutation = { __typename?: 'mutation_root', request?: { __typename?: 'Request', id: number } | null };

export type DeleteRequestMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  courseId: Scalars['Int']['input'];
  requestType: Scalars['String']['input'];
}>;


export type DeleteRequestMutation = { __typename?: 'mutation_root', requests?: { __typename?: 'RequestMutationResponse', returning: Array<{ __typename?: 'Request', id: number }> } | null };

export type DeleteRequestByIdMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRequestByIdMutation = { __typename?: 'mutation_root', request?: { __typename?: 'Request', id: number, type: string } | null };

export type GetServiceFromTeacherQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetServiceFromTeacherQuery = { __typename?: 'query_root', teacher?: { __typename?: 'Teacher', services: Array<{ __typename?: 'Service', id: number }> } | null };

export type GetCourseRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
}>;


export type GetCourseRowsQuery = { __typename?: 'query_root', courses: Array<(
    { __typename?: 'Course' }
    & { ' $fragmentRefs'?: { 'CourseRowFragment': CourseRowFragment } }
  )> };

export type GetServiceRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<TeacherBoolExp>;
}>;


export type GetServiceRowsQuery = { __typename?: 'query_root', services: Array<(
    { __typename?: 'Service' }
    & { ' $fragmentRefs'?: { 'ServiceRowsFragment': ServiceRowsFragment } }
  )> };

export type GetCourseDetailsQueryVariables = Exact<{
  courseId: Scalars['Int']['input'];
}>;


export type GetCourseDetailsQuery = { __typename?: 'query_root', course?: (
    { __typename?: 'Course' }
    & { ' $fragmentRefs'?: { 'CourseDetailsFragment': CourseDetailsFragment } }
  ) | null };

export type GetServiceDetailsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetServiceDetailsQuery = { __typename?: 'query_root', services: Array<(
    { __typename?: 'Service' }
    & { ' $fragmentRefs'?: { 'ServiceDetailsFragment': ServiceDetailsFragment } }
  )> };

export type GetTeacherDetailsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetTeacherDetailsQuery = { __typename?: 'query_root', teacher?: (
    { __typename?: 'Teacher', coordinationsAggregate: { __typename?: 'CoordinationAggregate', aggregate?: { __typename?: 'CoordinationAggregateFields', count: number } | null }, services: Array<(
      { __typename?: 'Service', id: number }
      & { ' $fragmentRefs'?: { 'TeacherServiceFragment': TeacherServiceFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'TeacherTitleFragment': TeacherTitleFragment;'TeacherCoordinationsFragment': TeacherCoordinationsFragment;'TeacherNoServiceFragment': TeacherNoServiceFragment } }
  ) | null };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetUserProfileQuery = { __typename?: 'query_root', profile?: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null, active: boolean, roles: Array<{ __typename?: 'Role', type: string }> } | null };

export const CourseRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groupsEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"totalHoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPriority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseRowFragment, unknown>;
export const ServiceDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<ServiceDetailsFragment, unknown>;
export const ServiceRowsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceRows"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<ServiceRowsFragment, unknown>;
export const CourseExpansionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CourseExpansionFragment, unknown>;
export const CourseCoordinatorsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}}]} as unknown as DocumentNode<CourseCoordinatorsFragment, unknown>;
export const CourseDescriptionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescription"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<CourseDescriptionFragment, unknown>;
export const RequestFormDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}}]} as unknown as DocumentNode<RequestFormDataFragment, unknown>;
export const RequestCardDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<RequestCardDataFragment, unknown>;
export const CourseRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CourseRequestsFragment, unknown>;
export const PriorityChipDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<PriorityChipDataFragment, unknown>;
export const CoursePrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CoursePrioritiesFragment, unknown>;
export const CourseArchivesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CourseArchivesFragment, unknown>;
export const CourseDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescription"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescription"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseDetailsFragment, unknown>;
export const TeacherCoordinationsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCoordinations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<TeacherCoordinationsFragment, unknown>;
export const TeacherServiceDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TeacherServiceDetailsFragment, unknown>;
export const TeacherServiceRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TeacherServiceRequestsFragment, unknown>;
export const TeacherServicePrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServicePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}}]} as unknown as DocumentNode<TeacherServicePrioritiesFragment, unknown>;
export const TeacherServiceMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherServiceMessageFragment, unknown>;
export const TeacherServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServicePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceMessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServicePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherServiceFragment, unknown>;
export const TeacherNoServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}}]}}]}}]} as unknown as DocumentNode<TeacherNoServiceFragment, unknown>;
export const TeacherTitleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<TeacherTitleFragment, unknown>;
export const GetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentPhase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"phase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCurrentPhaseQuery, GetCurrentPhaseQueryVariables>;
export const GetYearsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetYears"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"year"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}}]}}]} as unknown as DocumentNode<GetYearsQuery, GetYearsQueryVariables>;
export const GetActiveTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"teacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]} as unknown as DocumentNode<GetActiveTeachersQuery, GetActiveTeachersQueryVariables>;
export const UpdateDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"updateCourseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>;
export const SetCurrentYearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentYear"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"updateYear"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"current"},"name":{"kind":"Name","value":"updateYearByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentYearMutation, SetCurrentYearMutationVariables>;
export const SetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentPhase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"updatePhase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"enCours"},"name":{"kind":"Name","value":"updatePhaseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentPhaseMutation, SetCurrentPhaseMutationVariables>;
export const GetLegalNoticeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLegalNotice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"legalNotice"},"name":{"kind":"Name","value":"appSettingsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"legal-notice","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetLegalNoticeQuery, GetLegalNoticeQueryVariables>;
export const InsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insertServiceOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertServiceMutation, InsertServiceMutationVariables>;
export const GetModificationTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetModificationTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modificationTypes"},"name":{"kind":"Name","value":"serviceModificationType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetModificationTypesQuery, GetModificationTypesQueryVariables>;
export const UpsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insertServiceOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"service_year_uid_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertServiceMutation, UpsertServiceMutationVariables>;
export const InsertModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"insertServiceModificationOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertModificationMutation, InsertModificationMutationVariables>;
export const DeleteModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"deleteServiceModificationByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteModificationMutation, DeleteModificationMutationVariables>;
export const UpdateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"updateServiceByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const GetAssignmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestBoolExp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assignments"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]},{"kind":"Variable","name":{"kind":"Name","value":"where"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentsQuery, GetAssignmentsQueryVariables>;
export const DummyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DummyMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"insertRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DummyMutationMutation, DummyMutationMutationVariables>;
export const GetServiceFromCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceFromCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"courseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"yearByYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceFromCourseQuery, GetServiceFromCourseQueryVariables>;
export const GetRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetRequestQuery, GetRequestQueryVariables>;
export const UpsertRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"insertRequestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"request_service_id_course_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertRequestMutation, UpsertRequestMutationVariables>;
export const DeleteRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"deleteRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteRequestMutation, DeleteRequestMutationVariables>;
export const DeleteRequestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"deleteRequestByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteRequestByIdMutation, DeleteRequestByIdMutationVariables>;
export const GetServiceFromTeacherDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceFromTeacher"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceFromTeacherQuery, GetServiceFromTeacherQueryVariables>;
export const GetCourseRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courses"},"name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hoursEffective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"groupsEffective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groupsEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"totalHoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPriority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseRowsQuery, GetCourseRowsQueryVariables>;
export const GetServiceRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TeacherBoolExp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceRows"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceRows"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<GetServiceRowsQuery, GetServiceRowsQueryVariables>;
export const GetCourseDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"courseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescription"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescription"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}}]} as unknown as DocumentNode<GetCourseDetailsQuery, GetCourseDetailsQueryVariables>;
export const GetServiceDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ServiceDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetServiceDetailsQuery, GetServiceDetailsQueryVariables>;
export const GetTeacherDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherTitle"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherCoordinations"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherNoService"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherService"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServicePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCoordinations"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServicePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceMessage"}}]}}]} as unknown as DocumentNode<GetTeacherDetailsQuery, GetTeacherDetailsQueryVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;