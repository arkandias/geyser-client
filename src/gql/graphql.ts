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

/** Table containing coordinators of programs, tracks, or courses. Each row corresponds to exactly one of these three types of responsibility. */
export type Coordinator = {
  __typename?: 'Coordinator';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  course?: Maybe<Course>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id: Scalars['Int']['output'];
  /** An object relationship */
  program?: Maybe<Program>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  teacher: Teacher;
  /** An object relationship */
  track?: Maybe<Track>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid: Scalars['String']['output'];
};

/** aggregated selection of "coordinator" */
export type CoordinatorAggregate = {
  __typename?: 'CoordinatorAggregate';
  aggregate?: Maybe<CoordinatorAggregateFields>;
  nodes: Array<Coordinator>;
};

export type CoordinatorAggregateBoolExp = {
  count?: InputMaybe<CoordinatorAggregateBoolExpCount>;
};

/** aggregate fields of "coordinator" */
export type CoordinatorAggregateFields = {
  __typename?: 'CoordinatorAggregateFields';
  avg?: Maybe<CoordinatorAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<CoordinatorMaxFields>;
  min?: Maybe<CoordinatorMinFields>;
  stddev?: Maybe<CoordinatorStddevFields>;
  stddevPop?: Maybe<CoordinatorStddevPopFields>;
  stddevSamp?: Maybe<CoordinatorStddevSampFields>;
  sum?: Maybe<CoordinatorSumFields>;
  varPop?: Maybe<CoordinatorVarPopFields>;
  varSamp?: Maybe<CoordinatorVarSampFields>;
  variance?: Maybe<CoordinatorVarianceFields>;
};


/** aggregate fields of "coordinator" */
export type CoordinatorAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CoordinatorSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "coordinator" */
export type CoordinatorAggregateOrderBy = {
  avg?: InputMaybe<CoordinatorAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CoordinatorMaxOrderBy>;
  min?: InputMaybe<CoordinatorMinOrderBy>;
  stddev?: InputMaybe<CoordinatorStddevOrderBy>;
  stddevPop?: InputMaybe<CoordinatorStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CoordinatorStddevSampOrderBy>;
  sum?: InputMaybe<CoordinatorSumOrderBy>;
  varPop?: InputMaybe<CoordinatorVarPopOrderBy>;
  varSamp?: InputMaybe<CoordinatorVarSampOrderBy>;
  variance?: InputMaybe<CoordinatorVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "coordinator" */
export type CoordinatorArrRelInsertInput = {
  data: Array<CoordinatorInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CoordinatorOnConflict>;
};

/** aggregate avg on columns */
export type CoordinatorAvgFields = {
  __typename?: 'CoordinatorAvgFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "coordinator" */
export type CoordinatorAvgOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "coordinator". All fields are combined with a logical 'AND'. */
export type CoordinatorBoolExp = {
  _and?: InputMaybe<Array<CoordinatorBoolExp>>;
  _not?: InputMaybe<CoordinatorBoolExp>;
  _or?: InputMaybe<Array<CoordinatorBoolExp>>;
  comment?: InputMaybe<StringComparisonExp>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  program?: InputMaybe<ProgramBoolExp>;
  programId?: InputMaybe<IntComparisonExp>;
  teacher?: InputMaybe<TeacherBoolExp>;
  track?: InputMaybe<TrackBoolExp>;
  trackId?: InputMaybe<IntComparisonExp>;
  uid?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "coordinator" */
export enum CoordinatorConstraint {
  /** unique or primary key constraint on columns "id" */
  ResponsablePkey = 'responsable_pkey',
  /** unique or primary key constraint on columns "track_id", "uid", "course_id", "program_id" */
  ResponsableUidEnsIdParcoursIdMentionIdKey = 'responsable_uid_ens_id_parcours_id_mention_id_key'
}

/** input type for incrementing numeric columns in table "coordinator" */
export type CoordinatorIncInput = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "coordinator" */
export type CoordinatorInsertInput = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<Scalars['Int']['input']>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  track?: InputMaybe<TrackObjRelInsertInput>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CoordinatorMaxFields = {
  __typename?: 'CoordinatorMaxFields';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "coordinator" */
export type CoordinatorMaxOrderBy = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<OrderBy>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
  /** Teacher's identifier. */
  uid?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CoordinatorMinFields = {
  __typename?: 'CoordinatorMinFields';
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: Maybe<Scalars['String']['output']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Teacher's identifier. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "coordinator" */
export type CoordinatorMinOrderBy = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<OrderBy>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
  /** Teacher's identifier. */
  uid?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "coordinator" */
export type CoordinatorMutationResponse = {
  __typename?: 'CoordinatorMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Coordinator>;
};

/** on_conflict condition type for table "coordinator" */
export type CoordinatorOnConflict = {
  constraint: CoordinatorConstraint;
  updateColumns?: Array<CoordinatorUpdateColumn>;
  where?: InputMaybe<CoordinatorBoolExp>;
};

/** Ordering options when selecting data from "coordinator". */
export type CoordinatorOrderBy = {
  comment?: InputMaybe<OrderBy>;
  course?: InputMaybe<CourseOrderBy>;
  courseId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramOrderBy>;
  programId?: InputMaybe<OrderBy>;
  teacher?: InputMaybe<TeacherOrderBy>;
  track?: InputMaybe<TrackOrderBy>;
  trackId?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: coordinator */
export type CoordinatorPkColumnsInput = {
  /** Unique identifier for the coordinator entry. */
  id: Scalars['Int']['input'];
};

/** select columns of table "coordinator" */
export enum CoordinatorSelectColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "coordinator" */
export type CoordinatorSetInput = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type CoordinatorStddevFields = {
  __typename?: 'CoordinatorStddevFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "coordinator" */
export type CoordinatorStddevOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CoordinatorStddevPopFields = {
  __typename?: 'CoordinatorStddevPopFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "coordinator" */
export type CoordinatorStddevPopOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CoordinatorStddevSampFields = {
  __typename?: 'CoordinatorStddevSampFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "coordinator" */
export type CoordinatorStddevSampOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "coordinator" */
export type CoordinatorStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CoordinatorStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CoordinatorStreamCursorValueInput = {
  /** Additional information (optional, e.g., to specify year for program or track coordination). */
  comment?: InputMaybe<Scalars['String']['input']>;
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Teacher's identifier. */
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CoordinatorSumFields = {
  __typename?: 'CoordinatorSumFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "coordinator" */
export type CoordinatorSumOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** update columns of table "coordinator" */
export enum CoordinatorUpdateColumn {
  /** column name */
  Comment = 'comment',
  /** column name */
  CourseId = 'courseId',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'programId',
  /** column name */
  TrackId = 'trackId',
  /** column name */
  Uid = 'uid'
}

export type CoordinatorUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CoordinatorIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CoordinatorSetInput>;
  /** filter the rows which have to be updated */
  where: CoordinatorBoolExp;
};

/** aggregate varPop on columns */
export type CoordinatorVarPopFields = {
  __typename?: 'CoordinatorVarPopFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "coordinator" */
export type CoordinatorVarPopOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CoordinatorVarSampFields = {
  __typename?: 'CoordinatorVarSampFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "coordinator" */
export type CoordinatorVarSampOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CoordinatorVarianceFields = {
  __typename?: 'CoordinatorVarianceFields';
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the coordinator entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "coordinator" */
export type CoordinatorVarianceOrderBy = {
  /** Course ID (optional, if and only if the row corresponds to course coordination). */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the coordinator entry. */
  id?: InputMaybe<OrderBy>;
  /** Program ID (optional, if and only if the row corresponds to program coordination). */
  programId?: InputMaybe<OrderBy>;
  /** Track ID (optional, if and only if the row corresponds to track coordination). */
  trackId?: InputMaybe<OrderBy>;
};

/** Table contenant les enseignements. */
export type Course = {
  __typename?: 'Course';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinatorsAggregate: CoordinatorAggregate;
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear: Scalars['Int']['output'];
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  enfants: Array<Course>;
  /** An aggregate relationship */
  enfantsAggregate: CourseAggregate;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups: Scalars['Int']['output'];
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours: Scalars['Float']['output'];
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id: Scalars['Int']['output'];
  /** Le nom de l'enseignement. */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel) */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  parent?: Maybe<Course>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  priorities: Array<Priority>;
  /** An aggregate relationship */
  prioritiesAggregate: PriorityAggregate;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  program: Program;
  /** L'identifiant de la mention de l'enseignement. */
  programId: Scalars['Int']['output'];
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requestsAggregate: RequestAggregate;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester: Scalars['Int']['output'];
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** An object relationship */
  track?: Maybe<Track>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: CourseType;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
  /** L'année de l'enseignement. */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Table contenant les enseignements. */
export type CourseCoordinatorsArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les enseignements. */
export type CourseCoordinatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les enseignements. */
export type CourseEnfantsArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les enseignements. */
export type CourseEnfantsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les enseignements. */
export type CoursePrioritiesArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Table contenant les enseignements. */
export type CoursePrioritiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Table contenant les enseignements. */
export type CourseRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Table contenant les enseignements. */
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
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "course" */
export type CourseAvgOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type CourseBoolExp = {
  _and?: InputMaybe<Array<CourseBoolExp>>;
  _not?: InputMaybe<CourseBoolExp>;
  _or?: InputMaybe<Array<CourseBoolExp>>;
  coordinators?: InputMaybe<CoordinatorBoolExp>;
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateBoolExp>;
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
  visible?: InputMaybe<BooleanComparisonExp>;
  year?: InputMaybe<IntComparisonExp>;
  yearByYear?: InputMaybe<YearBoolExp>;
};

/** unique or primary key constraints on table "course" */
export enum CourseConstraint {
  /** unique or primary key constraint on columns "track_id", "semester", "type", "program_id", "name", "year" */
  EnseignementAnneeMentionIdParcoursIdNomSemestreTypeKey = 'enseignement_annee_mention_id_parcours_id_nom_semestre_type_key',
  /** unique or primary key constraint on columns "ens_id_import" */
  EnseignementEnsIdImportKey = 'enseignement_ens_id_import_key',
  /** unique or primary key constraint on columns "id" */
  EnseignementPkey = 'enseignement_pkey'
}

/** input type for incrementing numeric columns in table "course" */
export type CourseIncInput = {
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "course" */
export type CourseInsertInput = {
  coordinators?: InputMaybe<CoordinatorArrRelInsertInput>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  enfants?: InputMaybe<CourseArrRelInsertInput>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<CourseObjRelInsertInput>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  priorities?: InputMaybe<PriorityArrRelInsertInput>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<Scalars['Int']['input']>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  track?: InputMaybe<TrackObjRelInsertInput>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<CourseTypeObjRelInsertInput>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<YearObjRelInsertInput>;
};

/** aggregate max on columns */
export type CourseMaxFields = {
  __typename?: 'CourseMaxFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de l'enseignement. */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel) */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type?: Maybe<Scalars['String']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "course" */
export type CourseMaxOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<OrderBy>;
  ensIdImport?: InputMaybe<OrderBy>;
  formationIdImport?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel) */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** Le type d'enseignement. */
  type?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CourseMinFields = {
  __typename?: 'CourseMinFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Une description de l'enseignement. */
  description?: Maybe<Scalars['String']['output']>;
  ensIdImport?: Maybe<Scalars['String']['output']>;
  formationIdImport?: Maybe<Scalars['String']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de l'enseignement. */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel) */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** Le type d'enseignement. */
  type?: Maybe<Scalars['String']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "course" */
export type CourseMinOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<OrderBy>;
  ensIdImport?: InputMaybe<OrderBy>;
  formationIdImport?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel) */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** Le type d'enseignement. */
  type?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
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
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateOrderBy>;
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
  visible?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
  yearByYear?: InputMaybe<YearOrderBy>;
};

/** primary key columns input for table: course */
export type CoursePkColumnsInput = {
  /** L'identifiant unique de l'enseignement. */
  id: Scalars['Int']['input'];
};

/** select columns of table "course" */
export enum CourseSelectColumn {
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
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type CourseStddevFields = {
  __typename?: 'CourseStddevFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "course" */
export type CourseStddevOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CourseStddevPopFields = {
  __typename?: 'CourseStddevPopFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "course" */
export type CourseStddevPopOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CourseStddevSampFields = {
  __typename?: 'CourseStddevSampFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "course" */
export type CourseStddevSampOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
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
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<Scalars['Int']['input']>;
  /** Une description de l'enseignement. */
  description?: InputMaybe<Scalars['String']['input']>;
  ensIdImport?: InputMaybe<Scalars['String']['input']>;
  formationIdImport?: InputMaybe<Scalars['String']['input']>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<Scalars['Int']['input']>;
  groupsEffective?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<Scalars['Float']['input']>;
  hoursEffective?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de l'enseignement. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel) */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type d'enseignement. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'enseignement correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type CourseSumFields = {
  __typename?: 'CourseSumFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Int']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Int']['output']>;
  groupsEffective?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Int']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Int']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "course" */
export type CourseSumOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type CourseType = {
  __typename?: 'CourseType';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient: Scalars['Float']['output'];
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label: Scalars['String']['output'];
  /** La clé du type d'enseignement (unique). */
  value: Scalars['String']['output'];
};


/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
export type CourseTypeCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différents types d'enseignement (CM, TD, etc.). */
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
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
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
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "course_type" */
export enum CourseTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  TypeEnseignementPkey = 'type_enseignement_pkey'
}

/** input type for incrementing numeric columns in table "course_type" */
export type CourseTypeIncInput = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "course_type" */
export type CourseTypeInsertInput = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type CourseTypeMaxFields = {
  __typename?: 'CourseTypeMaxFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label?: Maybe<Scalars['String']['output']>;
  /** La clé du type d'enseignement (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type CourseTypeMinFields = {
  __typename?: 'CourseTypeMinFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** Le libellé type d'enseignement. */
  label?: Maybe<Scalars['String']['output']>;
  /** La clé du type d'enseignement (unique). */
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
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: course_type */
export type CourseTypePkColumnsInput = {
  /** La clé du type d'enseignement (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "course_type" */
export enum CourseTypeSelectColumn {
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
export type CourseTypeSetInput = {
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type CourseTypeStddevFields = {
  __typename?: 'CourseTypeStddevFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type CourseTypeStddevPopFields = {
  __typename?: 'CourseTypeStddevPopFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type CourseTypeStddevSampFields = {
  __typename?: 'CourseTypeStddevSampFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
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
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le libellé type d'enseignement. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** La clé du type d'enseignement (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type CourseTypeSumFields = {
  __typename?: 'CourseTypeSumFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course_type" */
export enum CourseTypeUpdateColumn {
  /** column name */
  Coefficient = 'coefficient',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
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
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type CourseTypeVarSampFields = {
  __typename?: 'CourseTypeVarSampFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type CourseTypeVarianceFields = {
  __typename?: 'CourseTypeVarianceFields';
  /** Le coefficient multiplicateur pour obtenir le nombre d'heures EQTD à partir du nombre d'heures d'enseignement de ce type. */
  coefficient?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "course" */
export enum CourseUpdateColumn {
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
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "course" */
export type CourseVarPopOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CourseVarSampFields = {
  __typename?: 'CourseVarSampFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "course" */
export type CourseVarSampOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CourseVarianceFields = {
  __typename?: 'CourseVarianceFields';
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes. */
  groups?: Maybe<Scalars['Float']['output']>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: Maybe<Scalars['Float']['output']>;
  groupsEffective?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: Maybe<Scalars['Float']['output']>;
  hoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de l'enseignement. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: Maybe<Scalars['Float']['output']>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "total_hours_effective" */
  totalHoursEffective?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: Maybe<Scalars['Float']['output']>;
  /** L'année de l'enseignement. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "course" */
export type CourseVarianceOrderBy = {
  /** L'année du cycle universitaire durant laquelle l'enseignement a lieu (calculée automatiquement à partir du semestre). */
  cycleYear?: InputMaybe<OrderBy>;
  /** Le nombre de groupes. */
  groups?: InputMaybe<OrderBy>;
  /** Le nombre de groupes ouverts (optionnel, si différent du nombre de groupes initial). */
  groupsAdjusted?: InputMaybe<OrderBy>;
  groupsEffective?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement par groupe. */
  hours?: InputMaybe<OrderBy>;
  /** Le nombre d'heures d'enseignement ouvertes par groupe (optionnel, si différent du nombre d'heures d'enseignement initial). */
  hoursAdjusted?: InputMaybe<OrderBy>;
  hoursEffective?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'enseignement. */
  id?: InputMaybe<OrderBy>;
  /** L'identifiant de l'enseignement parent, c'est-à-dire le même cours l'année précédente (optionnel). */
  parentId?: InputMaybe<OrderBy>;
  /** Une règle de priorité (optionnelle) : nombre d'année pendant lesquelles un intervenant est prioritaire sur un enseignement (3 par défaut ; 1 si pas de priorité d'une année sur l'autre ; 0 si pas limite de priorité). */
  priorityRule?: InputMaybe<OrderBy>;
  /** L'identifiant de la mention de l'enseignement. */
  programId?: InputMaybe<OrderBy>;
  /** Le semestre durant lequel l'enseignement a lieu. */
  semester?: InputMaybe<OrderBy>;
  /** L'identifiant du parcours de l'enseignement. */
  trackId?: InputMaybe<OrderBy>;
  /** L'année de l'enseignement. */
  year?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Table contenant les différents cursus (licence, master, etc.). */
export type Degree = {
  __typename?: 'Degree';
  /** L'identifiant unique du cursus. */
  id: Scalars['Int']['output'];
  /** Le nom du cursus (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  programs: Array<Program>;
  /** An aggregate relationship */
  programsAggregate: ProgramAggregate;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différents cursus (licence, master, etc.). */
export type DegreeProgramsArgs = {
  distinctOn?: InputMaybe<Array<ProgramSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProgramOrderBy>>;
  where?: InputMaybe<ProgramBoolExp>;
};


/** Table contenant les différents cursus (licence, master, etc.). */
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
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "degree". All fields are combined with a logical 'AND'. */
export type DegreeBoolExp = {
  _and?: InputMaybe<Array<DegreeBoolExp>>;
  _not?: InputMaybe<DegreeBoolExp>;
  _or?: InputMaybe<Array<DegreeBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  programs?: InputMaybe<ProgramBoolExp>;
  programsAggregate?: InputMaybe<ProgramAggregateBoolExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "degree" */
export enum DegreeConstraint {
  /** unique or primary key constraint on columns "name" */
  CursusNomKey = 'cursus_nom_key',
  /** unique or primary key constraint on columns "id" */
  CursusPkey = 'cursus_pkey'
}

/** input type for incrementing numeric columns in table "degree" */
export type DegreeIncInput = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "degree" */
export type DegreeInsertInput = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  programs?: InputMaybe<ProgramArrRelInsertInput>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type DegreeMaxFields = {
  __typename?: 'DegreeMaxFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du cursus (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type DegreeMinFields = {
  __typename?: 'DegreeMinFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du cursus (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
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
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  programsAggregate?: InputMaybe<ProgramAggregateOrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: degree */
export type DegreePkColumnsInput = {
  /** L'identifiant unique du cursus. */
  id: Scalars['Int']['input'];
};

/** select columns of table "degree" */
export enum DegreeSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "degree" */
export type DegreeSetInput = {
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type DegreeStddevFields = {
  __typename?: 'DegreeStddevFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type DegreeStddevPopFields = {
  __typename?: 'DegreeStddevPopFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type DegreeStddevSampFields = {
  __typename?: 'DegreeStddevSampFields';
  /** L'identifiant unique du cursus. */
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
  /** L'identifiant unique du cursus. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du cursus (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  /** Indique si le cursus correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type DegreeSumFields = {
  __typename?: 'DegreeSumFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "degree" */
export enum DegreeUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NameShort = 'nameShort',
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
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type DegreeVarSampFields = {
  __typename?: 'DegreeVarSampFields';
  /** L'identifiant unique du cursus. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type DegreeVarianceFields = {
  __typename?: 'DegreeVarianceFields';
  /** L'identifiant unique du cursus. */
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

/** Table containing the different phases: requests, assignments, results, and shutdown. */
export type Phase = {
  __typename?: 'Phase';
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
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
  current?: InputMaybe<BooleanComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "phase" */
export enum PhaseConstraint {
  /** unique or primary key constraint on columns "current" */
  PhaseEnCoursKey = 'phase_en_cours_key',
  /** unique or primary key constraint on columns "value" */
  PhasePkey = 'phase_pkey'
}

/** input type for inserting data into table "phase" */
export type PhaseInsertInput = {
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PhaseMaxFields = {
  __typename?: 'PhaseMaxFields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PhaseMinFields = {
  __typename?: 'PhaseMinFields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Phase identifier. */
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
  current?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: phase */
export type PhasePkColumnsInput = {
  /** Phase identifier. */
  value: Scalars['String']['input'];
};

/** select columns of table "phase" */
export enum PhaseSelectColumn {
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "phase" */
export type PhaseSetInput = {
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
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
  /** Indicates if this is the current phase (TRUE) or not (NULL). Only one phase can be current at a time. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Phase identifier. */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "phase" */
export enum PhaseUpdateColumn {
  /** column name */
  Current = 'current',
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type PhaseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PhaseSetInput>;
  /** filter the rows which have to be updated */
  where: PhaseBoolExp;
};

/** columns and relationships of "position" */
export type Position = {
  __typename?: 'Position';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  /** An array relationship */
  teachers: Array<Teacher>;
  /** An aggregate relationship */
  teachersAggregate: TeacherAggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "position" */
export type PositionTeachersArgs = {
  distinctOn?: InputMaybe<Array<TeacherSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeacherOrderBy>>;
  where?: InputMaybe<TeacherBoolExp>;
};


/** columns and relationships of "position" */
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
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type PositionBoolExp = {
  _and?: InputMaybe<Array<PositionBoolExp>>;
  _not?: InputMaybe<PositionBoolExp>;
  _or?: InputMaybe<Array<PositionBoolExp>>;
  baseServiceHours?: InputMaybe<FloatComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  teachers?: InputMaybe<TeacherBoolExp>;
  teachersAggregate?: InputMaybe<TeacherAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "position" */
export enum PositionConstraint {
  /** unique or primary key constraint on columns "value" */
  FonctionPkey = 'fonction_pkey'
}

/** input type for incrementing numeric columns in table "position" */
export type PositionIncInput = {
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "position" */
export type PositionInsertInput = {
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  teachers?: InputMaybe<TeacherArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PositionMaxFields = {
  __typename?: 'PositionMaxFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PositionMinFields = {
  __typename?: 'PositionMinFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
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
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  teachersAggregate?: InputMaybe<TeacherAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: position */
export type PositionPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "position" */
export enum PositionSelectColumn {
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "position" */
export type PositionSetInput = {
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type PositionStddevFields = {
  __typename?: 'PositionStddevFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type PositionStddevPopFields = {
  __typename?: 'PositionStddevPopFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type PositionStddevSampFields = {
  __typename?: 'PositionStddevSampFields';
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
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PositionSumFields = {
  __typename?: 'PositionSumFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** update columns of table "position" */
export enum PositionUpdateColumn {
  /** column name */
  BaseServiceHours = 'baseServiceHours',
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
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
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type PositionVarSampFields = {
  __typename?: 'PositionVarSampFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PositionVarianceFields = {
  __typename?: 'PositionVarianceFields';
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** Table containing information about teacher seniority and priority for courses. */
export type Priority = {
  __typename?: 'Priority';
  /** An object relationship */
  course: Course;
  /** Associated course ID. */
  courseId: Scalars['Int']['output'];
  /** Unique identifier for the priority entry. */
  id: Scalars['Int']['output'];
  /** Indicates if the teacher has priority for this course. */
  isPriority?: Maybe<Scalars['Boolean']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  service: Service;
  /** Associated service ID. */
  serviceId: Scalars['Int']['output'];
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
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "priority" */
export type PriorityAvgOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "priority". All fields are combined with a logical 'AND'. */
export type PriorityBoolExp = {
  _and?: InputMaybe<Array<PriorityBoolExp>>;
  _not?: InputMaybe<PriorityBoolExp>;
  _or?: InputMaybe<Array<PriorityBoolExp>>;
  course?: InputMaybe<CourseBoolExp>;
  courseId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isPriority?: InputMaybe<BooleanComparisonExp>;
  seniority?: InputMaybe<IntComparisonExp>;
  service?: InputMaybe<ServiceBoolExp>;
  serviceId?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "priority" */
export enum PriorityConstraint {
  /** unique or primary key constraint on columns "id" */
  PrioritePkey = 'priorite_pkey',
  /** unique or primary key constraint on columns "course_id", "service_id" */
  PrioriteServiceIdEnsIdKey = 'priorite_service_id_ens_id_key'
}

/** input type for incrementing numeric columns in table "priority" */
export type PriorityIncInput = {
  /** Associated course ID. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "priority" */
export type PriorityInsertInput = {
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** Associated course ID. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  /** Associated service ID. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type PriorityMaxFields = {
  __typename?: 'PriorityMaxFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "priority" */
export type PriorityMaxOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PriorityMinFields = {
  __typename?: 'PriorityMinFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "priority" */
export type PriorityMinOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
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
  id?: InputMaybe<OrderBy>;
  isPriority?: InputMaybe<OrderBy>;
  seniority?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: priority */
export type PriorityPkColumnsInput = {
  /** Unique identifier for the priority entry. */
  id: Scalars['Int']['input'];
};

/** select columns of table "priority" */
export enum PrioritySelectColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'isPriority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'serviceId'
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
  /** Associated course ID. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type PriorityStddevFields = {
  __typename?: 'PriorityStddevFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "priority" */
export type PriorityStddevOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type PriorityStddevPopFields = {
  __typename?: 'PriorityStddevPopFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "priority" */
export type PriorityStddevPopOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type PriorityStddevSampFields = {
  __typename?: 'PriorityStddevSampFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "priority" */
export type PriorityStddevSampOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
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
  /** Associated course ID. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Indicates if the teacher has priority for this course. */
  isPriority?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<Scalars['Int']['input']>;
  /** Associated service ID. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type PrioritySumFields = {
  __typename?: 'PrioritySumFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Int']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "priority" */
export type PrioritySumOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** update columns of table "priority" */
export enum PriorityUpdateColumn {
  /** column name */
  CourseId = 'courseId',
  /** column name */
  Id = 'id',
  /** column name */
  IsPriority = 'isPriority',
  /** column name */
  Seniority = 'seniority',
  /** column name */
  ServiceId = 'serviceId'
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
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "priority" */
export type PriorityVarPopOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type PriorityVarSampFields = {
  __typename?: 'PriorityVarSampFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "priority" */
export type PriorityVarSampOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type PriorityVarianceFields = {
  __typename?: 'PriorityVarianceFields';
  /** Associated course ID. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the priority entry. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: Maybe<Scalars['Float']['output']>;
  /** Associated service ID. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "priority" */
export type PriorityVarianceOrderBy = {
  /** Associated course ID. */
  courseId?: InputMaybe<OrderBy>;
  /** Unique identifier for the priority entry. */
  id?: InputMaybe<OrderBy>;
  /** Number of consecutive years up to the current year (excluded) during which the course was assigned to the teacher. */
  seniority?: InputMaybe<OrderBy>;
  /** Associated service ID. */
  serviceId?: InputMaybe<OrderBy>;
};

/** Table contenant les différentes mentions. */
export type Program = {
  __typename?: 'Program';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinatorsAggregate: CoordinatorAggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** An object relationship */
  degree: Degree;
  degreeId: Scalars['Int']['output'];
  /** L'identifiant unique de la mention. */
  id: Scalars['Int']['output'];
  /** Le nom de la mention (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  tracks: Array<Track>;
  /** An aggregate relationship */
  tracksAggregate: TrackAggregate;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différentes mentions. */
export type ProgramCoordinatorsArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCoordinatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différentes mentions. */
export type ProgramCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différentes mentions. */
export type ProgramTracksArgs = {
  distinctOn?: InputMaybe<Array<TrackSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TrackOrderBy>>;
  where?: InputMaybe<TrackBoolExp>;
};


/** Table contenant les différentes mentions. */
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
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "program" */
export type ProgramAvgOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "program". All fields are combined with a logical 'AND'. */
export type ProgramBoolExp = {
  _and?: InputMaybe<Array<ProgramBoolExp>>;
  _not?: InputMaybe<ProgramBoolExp>;
  _or?: InputMaybe<Array<ProgramBoolExp>>;
  coordinators?: InputMaybe<CoordinatorBoolExp>;
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateBoolExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  degree?: InputMaybe<DegreeBoolExp>;
  degreeId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  nomImport?: InputMaybe<StringComparisonExp>;
  tracks?: InputMaybe<TrackBoolExp>;
  tracksAggregate?: InputMaybe<TrackAggregateBoolExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "program" */
export enum ProgramConstraint {
  /** unique or primary key constraint on columns "degree_id", "name" */
  MentionCursusIdNomKey = 'mention_cursus_id_nom_key',
  /** unique or primary key constraint on columns "id" */
  MentionPkey = 'mention_pkey'
}

/** input type for incrementing numeric columns in table "program" */
export type ProgramIncInput = {
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "program" */
export type ProgramInsertInput = {
  coordinators?: InputMaybe<CoordinatorArrRelInsertInput>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  degree?: InputMaybe<DegreeObjRelInsertInput>;
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  tracks?: InputMaybe<TrackArrRelInsertInput>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type ProgramMaxFields = {
  __typename?: 'ProgramMaxFields';
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de la mention (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "program" */
export type ProgramMaxOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProgramMinFields = {
  __typename?: 'ProgramMinFields';
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom de la mention (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "program" */
export type ProgramMinOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
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
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateOrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  degree?: InputMaybe<DegreeOrderBy>;
  degreeId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  tracksAggregate?: InputMaybe<TrackAggregateOrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: program */
export type ProgramPkColumnsInput = {
  /** L'identifiant unique de la mention. */
  id: Scalars['Int']['input'];
};

/** select columns of table "program" */
export enum ProgramSelectColumn {
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
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type ProgramStddevFields = {
  __typename?: 'ProgramStddevFields';
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "program" */
export type ProgramStddevOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ProgramStddevPopFields = {
  __typename?: 'ProgramStddevPopFields';
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "program" */
export type ProgramStddevPopOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ProgramStddevSampFields = {
  __typename?: 'ProgramStddevSampFields';
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "program" */
export type ProgramStddevSampOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
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
  degreeId?: InputMaybe<Scalars['Int']['input']>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom de la mention (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  /** Indique si la mention correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type ProgramSumFields = {
  __typename?: 'ProgramSumFields';
  degreeId?: Maybe<Scalars['Int']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "program" */
export type ProgramSumOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "program" */
export enum ProgramUpdateColumn {
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
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "program" */
export type ProgramVarPopOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ProgramVarSampFields = {
  __typename?: 'ProgramVarSampFields';
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "program" */
export type ProgramVarSampOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ProgramVarianceFields = {
  __typename?: 'ProgramVarianceFields';
  degreeId?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique de la mention. */
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "program" */
export type ProgramVarianceOrderBy = {
  degreeId?: InputMaybe<OrderBy>;
  /** L'identifiant unique de la mention. */
  id?: InputMaybe<OrderBy>;
};

/** Table contenant les demandes. */
export type Request = {
  __typename?: 'Request';
  /** An object relationship */
  course: Course;
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** Le nombre d'heures demandées. */
  hours: Scalars['Float']['output'];
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  /** A computed field, executes function "is_priority" */
  isPriority?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  service: Service;
  serviceId: Scalars['Int']['output'];
  /** Le type de demande. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: RequestType;
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
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "request" */
export type RequestAvgOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
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
  DemandePkey = 'demande_pkey',
  /** unique or primary key constraint on columns "type", "course_id", "service_id" */
  RequestServiceIdCourseIdTypeKey = 'request_service_id_course_id_type_key'
}

/** input type for incrementing numeric columns in table "request" */
export type RequestIncInput = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "request" */
export type RequestInsertInput = {
  course?: InputMaybe<CourseObjRelInsertInput>;
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<RequestTypeObjRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type RequestMaxFields = {
  __typename?: 'RequestMaxFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Le type de demande. */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "request" */
export type RequestMaxOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  /** Le type de demande. */
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RequestMinFields = {
  __typename?: 'RequestMinFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Le type de demande. */
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "request" */
export type RequestMinOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  /** Le type de demande. */
  type?: InputMaybe<OrderBy>;
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
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type RequestStddevFields = {
  __typename?: 'RequestStddevFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "request" */
export type RequestStddevOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type RequestStddevPopFields = {
  __typename?: 'RequestStddevPopFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "request" */
export type RequestStddevPopOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type RequestStddevSampFields = {
  __typename?: 'RequestStddevSampFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "request" */
export type RequestStddevSampOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
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
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Le type de demande. */
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type RequestSumFields = {
  __typename?: 'RequestSumFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Int']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "request" */
export type RequestSumOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type RequestType = {
  __typename?: 'RequestType';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  requests: Array<Request>;
  /** An aggregate relationship */
  requestsAggregate: RequestAggregate;
  /** Le type de demande (unique). */
  value: Scalars['String']['output'];
};


/** Table contenant les différents types de demande (principale, secondaire, attribution). */
export type RequestTypeRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Table contenant les différents types de demande (principale, secondaire, attribution). */
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
  description?: InputMaybe<StringComparisonExp>;
  requests?: InputMaybe<RequestBoolExp>;
  requestsAggregate?: InputMaybe<RequestAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "request_type" */
export enum RequestTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  TypeDemandePkey = 'type_demande_pkey'
}

/** input type for inserting data into table "request_type" */
export type RequestTypeInsertInput = {
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  /** Le type de demande (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type RequestTypeMaxFields = {
  __typename?: 'RequestTypeMaxFields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Le type de demande (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type RequestTypeMinFields = {
  __typename?: 'RequestTypeMinFields';
  /** Une brève description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Le type de demande (unique). */
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
  description?: InputMaybe<OrderBy>;
  requestsAggregate?: InputMaybe<RequestAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: request_type */
export type RequestTypePkColumnsInput = {
  /** Le type de demande (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "request_type" */
export enum RequestTypeSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "request_type" */
export type RequestTypeSetInput = {
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le type de demande (unique). */
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
  /** Une brève description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Le type de demande (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "request_type" */
export enum RequestTypeUpdateColumn {
  /** column name */
  Description = 'description',
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
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "request" */
export type RequestVarPopOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type RequestVarSampFields = {
  __typename?: 'RequestVarSampFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "request" */
export type RequestVarSampOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RequestVarianceFields = {
  __typename?: 'RequestVarianceFields';
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: Maybe<Scalars['Float']['output']>;
  /** Le nombre d'heures demandées. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "hours_weighted" */
  hoursWeighted?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "request" */
export type RequestVarianceOrderBy = {
  /** L'identifiant de l'enseignement correspondant à la demande. */
  courseId?: InputMaybe<OrderBy>;
  /** Le nombre d'heures demandées. */
  hours?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['timestamptz']['output'];
  /** Le nombre d'heures EQTD du service. */
  hours: Scalars['Float']['output'];
  /** L'identifiant unique du service. */
  id: Scalars['Int']['output'];
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
  /** L'identifiant de l'intervenant correspond au service. */
  uid: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** L'année correspondant au service. */
  year: Scalars['Int']['output'];
  /** An object relationship */
  yearByYear: Year;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModificationsArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceModificationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServicePrioritiesArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServicePrioritiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PrioritySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PriorityOrderBy>>;
  where?: InputMaybe<PriorityBoolExp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
export type ServiceRequestsArgs = {
  distinctOn?: InputMaybe<Array<RequestSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RequestOrderBy>>;
  where?: InputMaybe<RequestBoolExp>;
};


/** Table contenant les services de base, c'est-à-dire le nombre d'heures EQTD qu'un intervenant donné doit réaliser lors d'une année donnée avant modifications éventuelles. */
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
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service" */
export type ServiceAvgOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
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
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service" */
export type ServiceInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  modifications?: InputMaybe<ServiceModificationArrRelInsertInput>;
  priorities?: InputMaybe<PriorityArrRelInsertInput>;
  requests?: InputMaybe<RequestArrRelInsertInput>;
  teacher?: InputMaybe<TeacherObjRelInsertInput>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
  yearByYear?: InputMaybe<YearObjRelInsertInput>;
};

/** aggregate max on columns */
export type ServiceMaxFields = {
  __typename?: 'ServiceMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "service" */
export type ServiceMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ServiceMinFields = {
  __typename?: 'ServiceMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "service" */
export type ServiceMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** Table containing modifications to a teacher's base service for a given year. */
export type ServiceModification = {
  __typename?: 'ServiceModification';
  /** Timestamp of when the modification was created. */
  createdAt: Scalars['timestamptz']['output'];
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours: Scalars['Float']['output'];
  /** Unique identifier for the modification. */
  id: Scalars['Int']['output'];
  /** An object relationship */
  service: Service;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId: Scalars['Int']['output'];
  /** Type of modification. */
  type: Scalars['String']['output'];
  /** An object relationship */
  typeByType: ServiceModificationType;
  /** Timestamp of when the modification was last updated. */
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
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "service_modification" */
export type ServiceModificationAvgOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
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
  ModificationServicePkey = 'modification_service_pkey'
}

/** input type for incrementing numeric columns in table "service_modification" */
export type ServiceModificationIncInput = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "service_modification" */
export type ServiceModificationInsertInput = {
  /** Timestamp of when the modification was created. */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<ServiceObjRelInsertInput>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  typeByType?: InputMaybe<ServiceModificationTypeObjRelInsertInput>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ServiceModificationMaxFields = {
  __typename?: 'ServiceModificationMaxFields';
  /** Timestamp of when the modification was created. */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of modification. */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "service_modification" */
export type ServiceModificationMaxOrderBy = {
  /** Timestamp of when the modification was created. */
  createdAt?: InputMaybe<OrderBy>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of modification. */
  type?: InputMaybe<OrderBy>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ServiceModificationMinFields = {
  __typename?: 'ServiceModificationMinFields';
  /** Timestamp of when the modification was created. */
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Int']['output']>;
  /** Type of modification. */
  type?: Maybe<Scalars['String']['output']>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "service_modification" */
export type ServiceModificationMinOrderBy = {
  /** Timestamp of when the modification was created. */
  createdAt?: InputMaybe<OrderBy>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
  /** Type of modification. */
  type?: InputMaybe<OrderBy>;
  /** Timestamp of when the modification was last updated. */
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
  /** Unique identifier for the modification. */
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
  /** Timestamp of when the modification was created. */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type ServiceModificationStddevFields = {
  __typename?: 'ServiceModificationStddevFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service_modification" */
export type ServiceModificationStddevOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ServiceModificationStddevPopFields = {
  __typename?: 'ServiceModificationStddevPopFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "service_modification" */
export type ServiceModificationStddevPopOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ServiceModificationStddevSampFields = {
  __typename?: 'ServiceModificationStddevSampFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "service_modification" */
export type ServiceModificationStddevSampOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
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
  /** Timestamp of when the modification was created. */
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<Scalars['Int']['input']>;
  /** Type of modification. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** Timestamp of when the modification was last updated. */
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ServiceModificationSumFields = {
  __typename?: 'ServiceModificationSumFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service_modification" */
export type ServiceModificationSumOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
};

/** Table containing different types of service modifications. */
export type ServiceModificationType = {
  __typename?: 'ServiceModificationType';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label: Scalars['String']['output'];
  /** An aggregate relationship */
  modificationsServiceAggregate: ServiceModificationAggregate;
  /** An array relationship */
  modifications_service: Array<ServiceModification>;
  /** Modification type (unique). */
  value: Scalars['String']['output'];
};


/** Table containing different types of service modifications. */
export type ServiceModificationTypeModificationsServiceAggregateArgs = {
  distinctOn?: InputMaybe<Array<ServiceModificationSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceModificationOrderBy>>;
  where?: InputMaybe<ServiceModificationBoolExp>;
};


/** Table containing different types of service modifications. */
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
  description?: InputMaybe<StringComparisonExp>;
  label?: InputMaybe<StringComparisonExp>;
  modifications_service?: InputMaybe<ServiceModificationBoolExp>;
  modifications_serviceAggregate?: InputMaybe<ServiceModificationAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "service_modification_type" */
export enum ServiceModificationTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  TypeModificationPkey = 'type_modification_pkey'
}

/** input type for inserting data into table "service_modification_type" */
export type ServiceModificationTypeInsertInput = {
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  modifications_service?: InputMaybe<ServiceModificationArrRelInsertInput>;
  /** Modification type (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ServiceModificationTypeMaxFields = {
  __typename?: 'ServiceModificationTypeMaxFields';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label?: Maybe<Scalars['String']['output']>;
  /** Modification type (unique). */
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ServiceModificationTypeMinFields = {
  __typename?: 'ServiceModificationTypeMinFields';
  /** Brief description. */
  description?: Maybe<Scalars['String']['output']>;
  /** Display label for the modification type. */
  label?: Maybe<Scalars['String']['output']>;
  /** Modification type (unique). */
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
  description?: InputMaybe<OrderBy>;
  label?: InputMaybe<OrderBy>;
  modifications_serviceAggregate?: InputMaybe<ServiceModificationAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: service_modification_type */
export type ServiceModificationTypePkColumnsInput = {
  /** Modification type (unique). */
  value: Scalars['String']['input'];
};

/** select columns of table "service_modification_type" */
export enum ServiceModificationTypeSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "service_modification_type" */
export type ServiceModificationTypeSetInput = {
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Modification type (unique). */
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
  /** Brief description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display label for the modification type. */
  label?: InputMaybe<Scalars['String']['input']>;
  /** Modification type (unique). */
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "service_modification_type" */
export enum ServiceModificationTypeUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Label = 'label',
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
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "service_modification" */
export type ServiceModificationVarPopOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ServiceModificationVarSampFields = {
  __typename?: 'ServiceModificationVarSampFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "service_modification" */
export type ServiceModificationVarSampOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ServiceModificationVarianceFields = {
  __typename?: 'ServiceModificationVarianceFields';
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: Maybe<Scalars['Float']['output']>;
  /** Unique identifier for the modification. */
  id?: Maybe<Scalars['Float']['output']>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
  serviceId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service_modification" */
export type ServiceModificationVarianceOrderBy = {
  /** Number of hours by which the service is modified (negative number indicates service increase). */
  hours?: InputMaybe<OrderBy>;
  /** Unique identifier for the modification. */
  id?: InputMaybe<OrderBy>;
  /** Reference to the service being modified. Links the modification to a specific teacher's service for a given year. */
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
  /** L'identifiant unique du service. */
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ServiceStddevFields = {
  __typename?: 'ServiceStddevFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "service" */
export type ServiceStddevOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ServiceStddevPopFields = {
  __typename?: 'ServiceStddevPopFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "service" */
export type ServiceStddevPopOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ServiceStddevSampFields = {
  __typename?: 'ServiceStddevSampFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "service" */
export type ServiceStddevSampOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<Scalars['Float']['input']>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  /** L'identifiant de l'intervenant correspond au service. */
  uid?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** L'année correspondant au service. */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ServiceSumFields = {
  __typename?: 'ServiceSumFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Int']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "service" */
export type ServiceSumOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
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
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "service" */
export type ServiceVarPopOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ServiceVarSampFields = {
  __typename?: 'ServiceVarSampFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "service" */
export type ServiceVarSampOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ServiceVarianceFields = {
  __typename?: 'ServiceVarianceFields';
  /** Le nombre d'heures EQTD du service. */
  hours?: Maybe<Scalars['Float']['output']>;
  /** L'identifiant unique du service. */
  id?: Maybe<Scalars['Float']['output']>;
  /** L'année correspondant au service. */
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "service" */
export type ServiceVarianceOrderBy = {
  /** Le nombre d'heures EQTD du service. */
  hours?: InputMaybe<OrderBy>;
  /** L'identifiant unique du service. */
  id?: InputMaybe<OrderBy>;
  /** L'année correspondant au service. */
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

/** Table contenant les intervenants. */
export type Teacher = {
  __typename?: 'Teacher';
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active: Scalars['Boolean']['output'];
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
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
  responsibilitiesAggregate: CoordinatorAggregate;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  servicesAggregate: ServiceAggregate;
  /** L'identifiant unique de l'intervenant. */
  uid: Scalars['String']['output'];
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les intervenants. */
export type TeacherResponsibilitiesArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les intervenants. */
export type TeacherResponsibilitiesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les intervenants. */
export type TeacherServicesArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


/** Table contenant les intervenants. */
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
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "teacher" */
export type TeacherAvgOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
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
  firstname?: InputMaybe<StringComparisonExp>;
  lastname?: InputMaybe<StringComparisonExp>;
  position?: InputMaybe<StringComparisonExp>;
  positionByPosition?: InputMaybe<PositionBoolExp>;
  responsibilities?: InputMaybe<CoordinatorBoolExp>;
  responsibilitiesAggregate?: InputMaybe<CoordinatorAggregateBoolExp>;
  services?: InputMaybe<ServiceBoolExp>;
  servicesAggregate?: InputMaybe<ServiceAggregateBoolExp>;
  uid?: InputMaybe<StringComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "teacher" */
export enum TeacherConstraint {
  /** unique or primary key constraint on columns "uid" */
  IntervenantPkey = 'intervenant_pkey'
}

/** input type for incrementing numeric columns in table "teacher" */
export type TeacherIncInput = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
};

/** input type for inserting data into table "teacher" */
export type TeacherInsertInput = {
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<Scalars['String']['input']>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  positionByPosition?: InputMaybe<PositionObjRelInsertInput>;
  responsibilities?: InputMaybe<CoordinatorArrRelInsertInput>;
  services?: InputMaybe<ServiceArrRelInsertInput>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<Scalars['String']['input']>;
  /** Indique si l'intervenant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type TeacherMaxFields = {
  __typename?: 'TeacherMaxFields';
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Le prénom de l'intervenant. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Le nom de l'intervenant. */
  lastname?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "teacher" */
export type TeacherMaxOrderBy = {
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<OrderBy>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<OrderBy>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TeacherMinFields = {
  __typename?: 'TeacherMinFields';
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: Maybe<Scalars['String']['output']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
  /** Le prénom de l'intervenant. */
  firstname?: Maybe<Scalars['String']['output']>;
  /** Le nom de l'intervenant. */
  lastname?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  /** L'identifiant unique de l'intervenant. */
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "teacher" */
export type TeacherMinOrderBy = {
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<OrderBy>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
  /** Le prénom de l'intervenant. */
  firstname?: InputMaybe<OrderBy>;
  /** Le nom de l'intervenant. */
  lastname?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  /** L'identifiant unique de l'intervenant. */
  uid?: InputMaybe<OrderBy>;
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
  firstname?: InputMaybe<OrderBy>;
  lastname?: InputMaybe<OrderBy>;
  position?: InputMaybe<OrderBy>;
  positionByPosition?: InputMaybe<PositionOrderBy>;
  responsibilitiesAggregate?: InputMaybe<CoordinatorAggregateOrderBy>;
  servicesAggregate?: InputMaybe<ServiceAggregateOrderBy>;
  uid?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: teacher */
export type TeacherPkColumnsInput = {
  /** L'identifiant unique de l'intervenant. */
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
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
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
export type TeacherStddevFields = {
  __typename?: 'TeacherStddevFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "teacher" */
export type TeacherStddevOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type TeacherStddevPopFields = {
  __typename?: 'TeacherStddevPopFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "teacher" */
export type TeacherStddevPopOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type TeacherStddevSampFields = {
  __typename?: 'TeacherStddevSampFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "teacher" */
export type TeacherStddevSampOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
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
  /** Indique si un service doit être automatiquement créé pour l'intervenant lors de la prochaine année. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Un alias pour l'intervenant à afficher à la place du nom et prénom (optionnel). */
  alias?: InputMaybe<Scalars['String']['input']>;
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<Scalars['Float']['input']>;
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
export type TeacherSumFields = {
  __typename?: 'TeacherSumFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by sum() on columns of table "teacher" */
export type TeacherSumOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
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
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "teacher" */
export type TeacherVarPopOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type TeacherVarSampFields = {
  __typename?: 'TeacherVarSampFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "teacher" */
export type TeacherVarSampOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TeacherVarianceFields = {
  __typename?: 'TeacherVarianceFields';
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
  baseServiceHours?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "teacher" */
export type TeacherVarianceOrderBy = {
  /** Le service de base en heures EQTD de l'intervenant (optionnel). */
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

/** Table contenant les différents parcours. */
export type Track = {
  __typename?: 'Track';
  /** An array relationship */
  coordinators: Array<Coordinator>;
  /** An aggregate relationship */
  coordinatorsAggregate: CoordinatorAggregate;
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** L'identifiant unique du parcours. */
  id: Scalars['Int']['output'];
  /** Le nom du parcours (unique). */
  name: Scalars['String']['output'];
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  program: Program;
  programId: Scalars['Int']['output'];
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différents parcours. */
export type TrackCoordinatorsArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les différents parcours. */
export type TrackCoordinatorsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


/** Table contenant les différents parcours. */
export type TrackCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différents parcours. */
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
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "track" */
export type TrackAvgOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "track". All fields are combined with a logical 'AND'. */
export type TrackBoolExp = {
  _and?: InputMaybe<Array<TrackBoolExp>>;
  _not?: InputMaybe<TrackBoolExp>;
  _or?: InputMaybe<Array<TrackBoolExp>>;
  coordinators?: InputMaybe<CoordinatorBoolExp>;
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateBoolExp>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  id?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameShort?: InputMaybe<StringComparisonExp>;
  nomImport?: InputMaybe<StringComparisonExp>;
  program?: InputMaybe<ProgramBoolExp>;
  programId?: InputMaybe<IntComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "track" */
export enum TrackConstraint {
  /** unique or primary key constraint on columns "program_id", "name" */
  ParcoursMentionIdNomKey = 'parcours_mention_id_nom_key',
  /** unique or primary key constraint on columns "id" */
  ParcoursPkey = 'parcours_pkey'
}

/** input type for incrementing numeric columns in table "track" */
export type TrackIncInput = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  programId?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "track" */
export type TrackInsertInput = {
  coordinators?: InputMaybe<CoordinatorArrRelInsertInput>;
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<ProgramObjRelInsertInput>;
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type TrackMaxFields = {
  __typename?: 'TrackMaxFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du parcours (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  programId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "track" */
export type TrackMaxOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TrackMinFields = {
  __typename?: 'TrackMinFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  /** Le nom du parcours (unique). */
  name?: Maybe<Scalars['String']['output']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: Maybe<Scalars['String']['output']>;
  nomImport?: Maybe<Scalars['String']['output']>;
  programId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "track" */
export type TrackMinOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<OrderBy>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
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
  coordinatorsAggregate?: InputMaybe<CoordinatorAggregateOrderBy>;
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nameShort?: InputMaybe<OrderBy>;
  nomImport?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramOrderBy>;
  programId?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: track */
export type TrackPkColumnsInput = {
  /** L'identifiant unique du parcours. */
  id: Scalars['Int']['input'];
};

/** select columns of table "track" */
export enum TrackSelectColumn {
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
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type TrackStddevFields = {
  __typename?: 'TrackStddevFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "track" */
export type TrackStddevOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type TrackStddevPopFields = {
  __typename?: 'TrackStddevPopFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "track" */
export type TrackStddevPopOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type TrackStddevSampFields = {
  __typename?: 'TrackStddevSampFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "track" */
export type TrackStddevSampOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
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
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Le nom du parcours (unique). */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Le nom abrégé (optionnel). */
  nameShort?: InputMaybe<Scalars['String']['input']>;
  nomImport?: InputMaybe<Scalars['String']['input']>;
  programId?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si le parcours correspondant est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type TrackSumFields = {
  __typename?: 'TrackSumFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Int']['output']>;
  programId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "track" */
export type TrackSumOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** update columns of table "track" */
export enum TrackUpdateColumn {
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
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "track" */
export type TrackVarPopOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type TrackVarSampFields = {
  __typename?: 'TrackVarSampFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "track" */
export type TrackVarSampOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TrackVarianceFields = {
  __typename?: 'TrackVarianceFields';
  /** L'identifiant unique du parcours. */
  id?: Maybe<Scalars['Float']['output']>;
  programId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "track" */
export type TrackVarianceOrderBy = {
  /** L'identifiant unique du parcours. */
  id?: InputMaybe<OrderBy>;
  programId?: InputMaybe<OrderBy>;
};

/** Table contenant les différentes années. */
export type Year = {
  __typename?: 'Year';
  /** An array relationship */
  courses: Array<Course>;
  /** An aggregate relationship */
  coursesAggregate: CourseAggregate;
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  services: Array<Service>;
  /** An aggregate relationship */
  servicesAggregate: ServiceAggregate;
  /** Le numéro de l'année (unique). */
  value: Scalars['Int']['output'];
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible: Scalars['Boolean']['output'];
};


/** Table contenant les différentes années. */
export type YearCoursesArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différentes années. */
export type YearCoursesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CourseSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CourseOrderBy>>;
  where?: InputMaybe<CourseBoolExp>;
};


/** Table contenant les différentes années. */
export type YearServicesArgs = {
  distinctOn?: InputMaybe<Array<ServiceSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  where?: InputMaybe<ServiceBoolExp>;
};


/** Table contenant les différentes années. */
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
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "year". All fields are combined with a logical 'AND'. */
export type YearBoolExp = {
  _and?: InputMaybe<Array<YearBoolExp>>;
  _not?: InputMaybe<YearBoolExp>;
  _or?: InputMaybe<Array<YearBoolExp>>;
  courses?: InputMaybe<CourseBoolExp>;
  coursesAggregate?: InputMaybe<CourseAggregateBoolExp>;
  current?: InputMaybe<BooleanComparisonExp>;
  services?: InputMaybe<ServiceBoolExp>;
  servicesAggregate?: InputMaybe<ServiceAggregateBoolExp>;
  value?: InputMaybe<IntComparisonExp>;
  visible?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "year" */
export enum YearConstraint {
  /** unique or primary key constraint on columns "current" */
  AnneeEnCoursKey = 'annee_en_cours_key',
  /** unique or primary key constraint on columns "value" */
  AnneePkey = 'annee_pkey'
}

/** input type for incrementing numeric columns in table "year" */
export type YearIncInput = {
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "year" */
export type YearInsertInput = {
  courses?: InputMaybe<CourseArrRelInsertInput>;
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  services?: InputMaybe<ServiceArrRelInsertInput>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type YearMaxFields = {
  __typename?: 'YearMaxFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type YearMinFields = {
  __typename?: 'YearMinFields';
  /** Le numéro de l'année (unique). */
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
  coursesAggregate?: InputMaybe<CourseAggregateOrderBy>;
  current?: InputMaybe<OrderBy>;
  servicesAggregate?: InputMaybe<ServiceAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: year */
export type YearPkColumnsInput = {
  /** Le numéro de l'année (unique). */
  value: Scalars['Int']['input'];
};

/** select columns of table "year" */
export enum YearSelectColumn {
  /** column name */
  Current = 'current',
  /** column name */
  Value = 'value',
  /** column name */
  Visible = 'visible'
}

/** input type for updating data in table "year" */
export type YearSetInput = {
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type YearStddevFields = {
  __typename?: 'YearStddevFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type YearStddevPopFields = {
  __typename?: 'YearStddevPopFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type YearStddevSampFields = {
  __typename?: 'YearStddevSampFields';
  /** Le numéro de l'année (unique). */
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
  /** Indique si l'année correspondante est l'année en cours (TRUE) ou non (NULL). Une seule année peut être en cours à la fois. */
  current?: InputMaybe<Scalars['Boolean']['input']>;
  /** Le numéro de l'année (unique). */
  value?: InputMaybe<Scalars['Int']['input']>;
  /** Indique si l'année correspondante est visible par les utilisateurs. */
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate sum on columns */
export type YearSumFields = {
  __typename?: 'YearSumFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "year" */
export enum YearUpdateColumn {
  /** column name */
  Current = 'current',
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
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type YearVarSampFields = {
  __typename?: 'YearVarSampFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type YearVarianceFields = {
  __typename?: 'YearVarianceFields';
  /** Le numéro de l'année (unique). */
  value?: Maybe<Scalars['Float']['output']>;
};

export type CoordinatorAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CoordinatorSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CoordinatorBoolExp>;
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
  /** delete data from the table: "coordinator" */
  deleteCoordinator?: Maybe<CoordinatorMutationResponse>;
  /** delete single row from the table: "coordinator" */
  deleteCoordinatorByPk?: Maybe<Coordinator>;
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
  /** insert data into the table: "coordinator" */
  insertCoordinator?: Maybe<CoordinatorMutationResponse>;
  /** insert a single row into the table: "coordinator" */
  insertCoordinatorOne?: Maybe<Coordinator>;
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
  /** update data of the table: "coordinator" */
  updateCoordinator?: Maybe<CoordinatorMutationResponse>;
  /** update single row of the table: "coordinator" */
  updateCoordinatorByPk?: Maybe<Coordinator>;
  /** update multiples rows of table: "coordinator" */
  updateCoordinatorMany?: Maybe<Array<Maybe<CoordinatorMutationResponse>>>;
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
export type Mutation_RootDeleteCoordinatorArgs = {
  where: CoordinatorBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCoordinatorByPkArgs = {
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
export type Mutation_RootInsertCoordinatorArgs = {
  objects: Array<CoordinatorInsertInput>;
  onConflict?: InputMaybe<CoordinatorOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCoordinatorOneArgs = {
  object: CoordinatorInsertInput;
  onConflict?: InputMaybe<CoordinatorOnConflict>;
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
export type Mutation_RootUpdateCoordinatorArgs = {
  _inc?: InputMaybe<CoordinatorIncInput>;
  _set?: InputMaybe<CoordinatorSetInput>;
  where: CoordinatorBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCoordinatorByPkArgs = {
  _inc?: InputMaybe<CoordinatorIncInput>;
  _set?: InputMaybe<CoordinatorSetInput>;
  pkColumns: CoordinatorPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCoordinatorManyArgs = {
  updates: Array<CoordinatorUpdates>;
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
  /** fetch data from the table: "coordinator" */
  coordinator: Array<Coordinator>;
  /** fetch aggregated fields from the table: "coordinator" */
  coordinatorAggregate: CoordinatorAggregate;
  /** fetch data from the table: "coordinator" using primary key columns */
  coordinatorByPk?: Maybe<Coordinator>;
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


export type Query_RootCoordinatorArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


export type Query_RootCoordinatorAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


export type Query_RootCoordinatorByPkArgs = {
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
  /** fetch data from the table: "coordinator" */
  coordinator: Array<Coordinator>;
  /** fetch aggregated fields from the table: "coordinator" */
  coordinatorAggregate: CoordinatorAggregate;
  /** fetch data from the table: "coordinator" using primary key columns */
  coordinatorByPk?: Maybe<Coordinator>;
  /** fetch data from the table in a streaming manner: "coordinator" */
  coordinatorStream: Array<Coordinator>;
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


export type Subscription_RootCoordinatorArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


export type Subscription_RootCoordinatorAggregateArgs = {
  distinctOn?: InputMaybe<Array<CoordinatorSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CoordinatorOrderBy>>;
  where?: InputMaybe<CoordinatorBoolExp>;
};


export type Subscription_RootCoordinatorByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootCoordinatorStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CoordinatorStreamCursorInput>>;
  where?: InputMaybe<CoordinatorBoolExp>;
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

export type GetYearsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetYearsQuery = { __typename?: 'query_root', years: Array<{ __typename?: 'Year', value: number, current?: boolean | null, visible: boolean }> };

export type GetCurrentPhaseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentPhaseQuery = { __typename?: 'query_root', phases: Array<{ __typename?: 'Phase', value: string }> };

export type CourseRowFragment = { __typename?: 'Course', id: number, name: string, nameShort?: string | null, visible: boolean, semester: number, hoursPerGroup?: number | null, numberOfGroups?: number | null, totalHours?: number | null, program: { __typename?: 'Program', id: number, name: string, nameShort?: string | null, visible: boolean, degree: { __typename?: 'Degree', id: number, name: string, nameShort?: string | null, visible: boolean } }, track?: { __typename?: 'Track', id: number, name: string, nameShort?: string | null, visible: boolean } | null, courseType: { __typename?: 'CourseType', value: string, label: string }, totalAssigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalPrimary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalSecondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null }, totalPriority: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hours?: number | null } | null } | null } } & { ' $fragmentName'?: 'CourseRowFragment' };

export type TeacherCoursesFragment = { __typename?: 'Service', teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null }, requests: Array<{ __typename?: 'Request', courseId: number, type: string, hours: number }> } & { ' $fragmentName'?: 'TeacherCoursesFragment' };

export type TeacherRowFragment = { __typename?: 'Service', hours: number, message?: string | null, teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null, visible: boolean }, totalModifications: { __typename?: 'ServiceModificationAggregate', aggregate?: { __typename?: 'ServiceModificationAggregateFields', sum?: { __typename?: 'ServiceModificationSumFields', hours?: number | null } | null } | null }, totalAssigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, totalPrimary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, totalSecondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null } } & { ' $fragmentName'?: 'TeacherRowFragment' };

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

export type CourseCoordinatorsFragment = { __typename?: 'Course', coordinators: Array<{ __typename?: 'Coordinator', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }>, program: { __typename?: 'Program', coordinators: Array<{ __typename?: 'Coordinator', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }> }, track?: { __typename?: 'Track', coordinators: Array<{ __typename?: 'Coordinator', comment?: string | null, teacher: { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null } }> } | null } & { ' $fragmentName'?: 'CourseCoordinatorsFragment' };

export type CourseDescriptionDataFragment = { __typename?: 'Course', description?: string | null, courseId: number, coordinators: Array<{ __typename?: 'Coordinator', uid: string }>, program: { __typename?: 'Program', coordinators: Array<{ __typename?: 'Coordinator', uid: string }> }, track?: { __typename?: 'Track', coordinators: Array<{ __typename?: 'Coordinator', uid: string }> } | null } & { ' $fragmentName'?: 'CourseDescriptionDataFragment' };

export type UpdateDescriptionMutationVariables = Exact<{
  courseId: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDescriptionMutation = { __typename?: 'mutation_root', course?: { __typename?: 'Course', id: number } | null };

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

export type CourseDetailsFragment = (
  { __typename?: 'Course', courseId: number }
  & { ' $fragmentRefs'?: { 'CourseExpansionFragment': CourseExpansionFragment;'CourseCoordinatorsFragment': CourseCoordinatorsFragment;'CourseDescriptionDataFragment': CourseDescriptionDataFragment;'CourseRequestsFragment': CourseRequestsFragment;'CoursePrioritiesFragment': CoursePrioritiesFragment;'CourseArchivesFragment': CourseArchivesFragment } }
) & { ' $fragmentName'?: 'CourseDetailsFragment' };

export type SetCurrentYearMutationVariables = Exact<{
  value: Scalars['Int']['input'];
}>;


export type SetCurrentYearMutation = { __typename?: 'mutation_root', years?: { __typename?: 'YearMutationResponse', returning: Array<{ __typename?: 'Year', value: number }> } | null, current?: { __typename?: 'Year', value: number } | null };

export type SetCurrentPhaseMutationVariables = Exact<{
  value: Scalars['String']['input'];
}>;


export type SetCurrentPhaseMutation = { __typename?: 'mutation_root', phases?: { __typename?: 'PhaseMutationResponse', returning: Array<{ __typename?: 'Phase', value: string }> } | null, enCours?: { __typename?: 'Phase', value: string } | null };

export type TeacherMessageFragment = { __typename?: 'Service', id: number, uid: string, message?: string | null } & { ' $fragmentName'?: 'TeacherMessageFragment' };

export type UpdateMessageMutationVariables = Exact<{
  serviceId: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateMessageMutation = { __typename?: 'mutation_root', service?: { __typename?: 'Service', id: number } | null };

export type TeacherNoServiceFragment = { __typename?: 'Teacher', baseServiceHours?: number | null, positionByPosition?: { __typename?: 'Position', baseServiceHours?: number | null } | null } & { ' $fragmentName'?: 'TeacherNoServiceFragment' };

export type InsertServiceMutationVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
  hours: Scalars['Float']['input'];
}>;


export type InsertServiceMutation = { __typename?: 'mutation_root', service?: { __typename?: 'Service', id: number } | null };

export type TeacherPrioritiesFragment = { __typename?: 'Service', priorities: Array<{ __typename?: 'Priority', id: number, seniority?: number | null, isPriority?: boolean | null, course: { __typename?: 'Course', name: string, nameShort?: string | null, semester: number, typeByType: { __typename?: 'CourseType', label: string }, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null } }> } & { ' $fragmentName'?: 'TeacherPrioritiesFragment' };

export type TeacherRequestsFragment = { __typename?: 'Service', assigned: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, primary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null }, secondary: { __typename?: 'RequestAggregate', aggregate?: { __typename?: 'RequestAggregateFields', sum?: { __typename?: 'RequestSumFields', hoursWeighted?: number | null } | null } | null } } & { ' $fragmentName'?: 'TeacherRequestsFragment' };

export type TeacherResponsibilitiesFragment = { __typename?: 'Teacher', responsibilities: Array<{ __typename?: 'Coordinator', id: number, comment?: string | null, program?: { __typename?: 'Program', id: number, name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } | null, track?: { __typename?: 'Track', id: number, name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null, course?: { __typename?: 'Course', id: number, year: number, name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null } | null }> } & { ' $fragmentName'?: 'TeacherResponsibilitiesFragment' };

export type TeacherServiceFragment = (
  { __typename?: 'Service' }
  & { ' $fragmentRefs'?: { 'TeacherServiceDetailsFragment': TeacherServiceDetailsFragment;'TeacherRequestsFragment': TeacherRequestsFragment;'TeacherPrioritiesFragment': TeacherPrioritiesFragment;'TeacherMessageFragment': TeacherMessageFragment } }
) & { ' $fragmentName'?: 'TeacherServiceFragment' };

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

export type TeacherTitleFragment = { __typename?: 'Teacher', firstname: string, lastname: string, alias?: string | null, positionByPosition?: { __typename?: 'Position', label: string } | null } & { ' $fragmentName'?: 'TeacherTitleFragment' };

export type GetUserProfileQueryVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type GetUserProfileQuery = { __typename?: 'query_root', profile?: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null, active: boolean } | null };

export type GetAssignmentsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<RequestBoolExp>;
}>;


export type GetAssignmentsQuery = { __typename?: 'query_root', assignments: Array<{ __typename?: 'Request', course: { __typename?: 'Course', name: string, nameShort?: string | null, semester: number, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } }, track?: { __typename?: 'Track', name: string, nameShort?: string | null, program: { __typename?: 'Program', name: string, nameShort?: string | null, degree: { __typename?: 'Degree', name: string, nameShort?: string | null } } } | null, typeByType: { __typename?: 'CourseType', label: string } }, service: { __typename?: 'Service', teacher: { __typename?: 'Teacher', uid: string, firstname: string, lastname: string, alias?: string | null } } }> };

export type DummyMutationMutationVariables = Exact<{ [key: string]: never; }>;


export type DummyMutationMutation = { __typename?: 'mutation_root', requests?: { __typename?: 'RequestMutationResponse', returning: Array<{ __typename?: 'Request', id: number }> } | null };

export type GetServiceByCourseIdQueryVariables = Exact<{
  uid: Scalars['String']['input'];
  courseId: Scalars['Int']['input'];
}>;


export type GetServiceByCourseIdQuery = { __typename?: 'query_root', course?: { __typename?: 'Course', year: number, yearByYear: { __typename?: 'Year', services: Array<{ __typename?: 'Service', id: number }> } } | null };

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

export type GetServiceQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetServiceQuery = { __typename?: 'query_root', teacher?: { __typename?: 'Teacher', services: Array<{ __typename?: 'Service', id: number }> } | null };

export type GetCourseRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
}>;


export type GetCourseRowsQuery = { __typename?: 'query_root', courses: Array<(
    { __typename?: 'Course' }
    & { ' $fragmentRefs'?: { 'CourseRowFragment': CourseRowFragment } }
  )> };

export type GetTeacherRowsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  where?: InputMaybe<TeacherBoolExp>;
}>;


export type GetTeacherRowsQuery = { __typename?: 'query_root', teachers: Array<(
    { __typename?: 'Service' }
    & { ' $fragmentRefs'?: { 'TeacherRowFragment': TeacherRowFragment } }
  )> };

export type GetCourseDetailsQueryVariables = Exact<{
  courseId: Scalars['Int']['input'];
}>;


export type GetCourseDetailsQuery = { __typename?: 'query_root', course?: (
    { __typename?: 'Course' }
    & { ' $fragmentRefs'?: { 'CourseDetailsFragment': CourseDetailsFragment } }
  ) | null };

export type GetTeacherCoursesQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetTeacherCoursesQuery = { __typename?: 'query_root', services: Array<(
    { __typename?: 'Service' }
    & { ' $fragmentRefs'?: { 'TeacherCoursesFragment': TeacherCoursesFragment } }
  )> };

export type GetTeacherDetailsQueryVariables = Exact<{
  year: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetTeacherDetailsQuery = { __typename?: 'query_root', teacher?: (
    { __typename?: 'Teacher', responsibilitiesAggregate: { __typename?: 'CoordinatorAggregate', aggregate?: { __typename?: 'CoordinatorAggregateFields', count: number } | null }, services: Array<(
      { __typename?: 'Service', id: number }
      & { ' $fragmentRefs'?: { 'TeacherServiceFragment': TeacherServiceFragment } }
    )> }
    & { ' $fragmentRefs'?: { 'TeacherTitleFragment': TeacherTitleFragment;'TeacherResponsibilitiesFragment': TeacherResponsibilitiesFragment;'TeacherNoServiceFragment': TeacherNoServiceFragment } }
  ) | null };

export const CourseRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groupsEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"totalHoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPriority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseRowFragment, unknown>;
export const TeacherCoursesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCourses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TeacherCoursesFragment, unknown>;
export const TeacherRowFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherRowFragment, unknown>;
export const CourseExpansionFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CourseExpansionFragment, unknown>;
export const CourseCoordinatorsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}}]} as unknown as DocumentNode<CourseCoordinatorsFragment, unknown>;
export const CourseDescriptionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}}]} as unknown as DocumentNode<CourseDescriptionDataFragment, unknown>;
export const RequestFormDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}}]} as unknown as DocumentNode<RequestFormDataFragment, unknown>;
export const RequestCardDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<RequestCardDataFragment, unknown>;
export const CourseRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CourseRequestsFragment, unknown>;
export const PriorityChipDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<PriorityChipDataFragment, unknown>;
export const CoursePrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CoursePrioritiesFragment, unknown>;
export const CourseArchivesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]} as unknown as DocumentNode<CourseArchivesFragment, unknown>;
export const CourseDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescriptionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CourseDetailsFragment, unknown>;
export const TeacherNoServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}}]}}]}}]} as unknown as DocumentNode<TeacherNoServiceFragment, unknown>;
export const TeacherResponsibilitiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherResponsibilities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsibilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<TeacherResponsibilitiesFragment, unknown>;
export const TeacherServiceDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TeacherServiceDetailsFragment, unknown>;
export const TeacherRequestsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TeacherRequestsFragment, unknown>;
export const TeacherPrioritiesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}}]} as unknown as DocumentNode<TeacherPrioritiesFragment, unknown>;
export const TeacherMessageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherMessageFragment, unknown>;
export const TeacherServiceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherPriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherMessage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<TeacherServiceFragment, unknown>;
export const TeacherTitleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]} as unknown as DocumentNode<TeacherTitleFragment, unknown>;
export const GetYearsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetYears"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"year"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"current"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}}]}}]} as unknown as DocumentNode<GetYearsQuery, GetYearsQueryVariables>;
export const GetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentPhase"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"phase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<GetCurrentPhaseQuery, GetCurrentPhaseQueryVariables>;
export const GetActiveTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActiveTeachers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"teacher"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"active"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]} as unknown as DocumentNode<GetActiveTeachersQuery, GetActiveTeachersQueryVariables>;
export const UpdateDescriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDescription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"updateCourseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateDescriptionMutation, UpdateDescriptionMutationVariables>;
export const SetCurrentYearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentYear"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"years"},"name":{"kind":"Name","value":"updateYear"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"current"},"name":{"kind":"Name","value":"updateYearByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentYearMutation, SetCurrentYearMutationVariables>;
export const SetCurrentPhaseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCurrentPhase"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"value"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"phases"},"name":{"kind":"Name","value":"updatePhase"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"enCours"},"name":{"kind":"Name","value":"updatePhaseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"Variable","name":{"kind":"Name","value":"value"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]} as unknown as DocumentNode<SetCurrentPhaseMutation, SetCurrentPhaseMutationVariables>;
export const UpdateMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"updateServiceByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const InsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insertServiceOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertServiceMutation, InsertServiceMutationVariables>;
export const GetModificationTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetModificationTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modificationTypes"},"name":{"kind":"Name","value":"serviceModificationType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"value"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetModificationTypesQuery, GetModificationTypesQueryVariables>;
export const UpsertServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"service"},"name":{"kind":"Name","value":"insertServiceOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"service_year_uid_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertServiceMutation, UpsertServiceMutationVariables>;
export const InsertModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"insertServiceModificationOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"modificationType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InsertModificationMutation, InsertModificationMutationVariables>;
export const DeleteModificationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteModification"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"serviceModification"},"name":{"kind":"Name","value":"deleteServiceModificationByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteModificationMutation, DeleteModificationMutationVariables>;
export const GetUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"profile"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetUserProfileQuery, GetUserProfileQueryVariables>;
export const GetAssignmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAssignments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RequestBoolExp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assignments"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]},{"kind":"Variable","name":{"kind":"Name","value":"where"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAssignmentsQuery, GetAssignmentsQueryVariables>;
export const DummyMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DummyMutation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"insertRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DummyMutationMutation, DummyMutationMutationVariables>;
export const GetServiceByCourseIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetServiceByCourseId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"courseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"yearByYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceByCourseIdQuery, GetServiceByCourseIdQueryVariables>;
export const GetRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"request"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetRequestQuery, GetRequestQueryVariables>;
export const UpsertRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hours"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"insertRequestOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hours"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"request_service_id_course_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"hours"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpsertRequestMutation, UpsertRequestMutationVariables>;
export const DeleteRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"requests"},"name":{"kind":"Name","value":"deleteRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"requestType"}}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteRequestMutation, DeleteRequestMutationVariables>;
export const DeleteRequestByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteRequestById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"request"},"name":{"kind":"Name","value":"deleteRequestByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteRequestByIdMutation, DeleteRequestByIdMutationVariables>;
export const GetServiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetService"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetServiceQuery, GetServiceQueryVariables>;
export const GetCourseRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courses"},"name":{"kind":"Name","value":"course"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hoursEffective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"groupsEffective"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gt"},"value":{"kind":"IntValue","value":"0"}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"degree"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"program"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"track"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"numberOfGroups"},"name":{"kind":"Name","value":"groupsEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalHours"},"name":{"kind":"Name","value":"totalHoursEffective"}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignment","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPriority"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPriority"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseRowsQuery, GetCourseRowsQueryVariables>;
export const GetTeacherRowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherRows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TeacherBoolExp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teachers"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRow"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRow"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"visible"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalAssigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalPrimary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"totalSecondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]} as unknown as DocumentNode<GetTeacherRowsQuery, GetTeacherRowsQueryVariables>;
export const GetCourseDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"course"},"name":{"kind":"Name","value":"courseByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDetails"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseExpansion"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","alias":{"kind":"Name","value":"courseType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseCoordinators"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDescriptionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"coordinators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestFormData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RequestCardData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Request"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"hoursPerGroup"},"name":{"kind":"Name","value":"hoursEffective"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestFormData"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PriorityChipData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Priority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"service"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CoursePriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PriorityChipData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseArchives"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}},{"kind":"Field","name":{"kind":"Name","value":"parent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"lastname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"service"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"teacher"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"firstname"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RequestCardData"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CourseDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Course"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"courseId"},"name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseExpansion"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseCoordinators"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseDescriptionData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CoursePriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CourseArchives"}}]}}]} as unknown as DocumentNode<GetCourseDetailsQuery, GetCourseDetailsQueryVariables>;
export const GetTeacherCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"services"},"name":{"kind":"Name","value":"service"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"uid"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherCourses"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherCourses"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}}]}},{"kind":"Field","name":{"kind":"Name","value":"requests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<GetTeacherCoursesQuery, GetTeacherCoursesQueryVariables>;
export const GetTeacherDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeacherDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"year"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uid"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"teacher"},"name":{"kind":"Name","value":"teacherByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsibilitiesAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherTitle"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherResponsibilities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherNoService"}},{"kind":"Field","name":{"kind":"Name","value":"services"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"year"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"year"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherService"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherServiceDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}},{"kind":"Field","alias":{"kind":"Name","value":"totalModifications"},"name":{"kind":"Name","value":"modificationsAggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"modifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"hours"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"modificationType"},"name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherRequests"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assigned"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"assignments","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"primary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"primary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"secondary"},"name":{"kind":"Name","value":"requestsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"secondary","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hoursWeighted"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherPriorities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"priorities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"semester"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"typeByType"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"label"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"course"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"ASC"}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"semester"}},{"kind":"Field","name":{"kind":"Name","value":"typeByType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seniority"}},{"kind":"Field","name":{"kind":"Name","value":"isPriority"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherMessage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherTitle"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherResponsibilities"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsibilities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"programId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"trackId"},"value":{"kind":"EnumValue","value":"ASC"}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseId"},"value":{"kind":"EnumValue","value":"ASC"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"track"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"program"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}},{"kind":"Field","name":{"kind":"Name","value":"degree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameShort"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherNoService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Teacher"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}},{"kind":"Field","name":{"kind":"Name","value":"positionByPosition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"baseServiceHours"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeacherService"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Service"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherServiceDetails"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherRequests"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherPriorities"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeacherMessage"}}]}}]} as unknown as DocumentNode<GetTeacherDetailsQuery, GetTeacherDetailsQueryVariables>;