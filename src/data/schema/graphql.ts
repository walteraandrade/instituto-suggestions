/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  uuid: { input: any; output: any; }
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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "playlist" */
  delete_playlist?: Maybe<Playlist_Mutation_Response>;
  /** delete single row from the table: "playlist" */
  delete_playlist_by_pk?: Maybe<Playlist>;
  /** insert data into the table: "playlist" */
  insert_playlist?: Maybe<Playlist_Mutation_Response>;
  /** insert a single row into the table: "playlist" */
  insert_playlist_one?: Maybe<Playlist>;
  /** update data of the table: "playlist" */
  update_playlist?: Maybe<Playlist_Mutation_Response>;
  /** update single row of the table: "playlist" */
  update_playlist_by_pk?: Maybe<Playlist>;
  /** update multiples rows of table: "playlist" */
  update_playlist_many?: Maybe<Array<Maybe<Playlist_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_PlaylistArgs = {
  where: Playlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Playlist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_PlaylistArgs = {
  objects: Array<Playlist_Insert_Input>;
  on_conflict?: InputMaybe<Playlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Playlist_OneArgs = {
  object: Playlist_Insert_Input;
  on_conflict?: InputMaybe<Playlist_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PlaylistArgs = {
  _set?: InputMaybe<Playlist_Set_Input>;
  where: Playlist_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Playlist_By_PkArgs = {
  _set?: InputMaybe<Playlist_Set_Input>;
  pk_columns: Playlist_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Playlist_ManyArgs = {
  updates: Array<Playlist_Updates>;
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

/** columns and relationships of "playlist" */
export type Playlist = {
  __typename?: 'playlist';
  author: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "playlist" */
export type Playlist_Aggregate = {
  __typename?: 'playlist_aggregate';
  aggregate?: Maybe<Playlist_Aggregate_Fields>;
  nodes: Array<Playlist>;
};

/** aggregate fields of "playlist" */
export type Playlist_Aggregate_Fields = {
  __typename?: 'playlist_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Playlist_Max_Fields>;
  min?: Maybe<Playlist_Min_Fields>;
};


/** aggregate fields of "playlist" */
export type Playlist_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Playlist_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "playlist". All fields are combined with a logical 'AND'. */
export type Playlist_Bool_Exp = {
  _and?: InputMaybe<Array<Playlist_Bool_Exp>>;
  _not?: InputMaybe<Playlist_Bool_Exp>;
  _or?: InputMaybe<Array<Playlist_Bool_Exp>>;
  author?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "playlist" */
export enum Playlist_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlaylistPkey = 'playlist_pkey'
}

/** input type for inserting data into table "playlist" */
export type Playlist_Insert_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Playlist_Max_Fields = {
  __typename?: 'playlist_max_fields';
  author?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Playlist_Min_Fields = {
  __typename?: 'playlist_min_fields';
  author?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "playlist" */
export type Playlist_Mutation_Response = {
  __typename?: 'playlist_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Playlist>;
};

/** on_conflict condition type for table "playlist" */
export type Playlist_On_Conflict = {
  constraint: Playlist_Constraint;
  update_columns?: Array<Playlist_Update_Column>;
  where?: InputMaybe<Playlist_Bool_Exp>;
};

/** Ordering options when selecting data from "playlist". */
export type Playlist_Order_By = {
  author?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: playlist */
export type Playlist_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "playlist" */
export enum Playlist_Select_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "playlist" */
export type Playlist_Set_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "playlist" */
export type Playlist_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Playlist_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Playlist_Stream_Cursor_Value_Input = {
  author?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "playlist" */
export enum Playlist_Update_Column {
  /** column name */
  Author = 'author',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Link = 'link',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Playlist_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Playlist_Set_Input>;
  /** filter the rows which have to be updated */
  where: Playlist_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "playlist" */
  playlist: Array<Playlist>;
  /** fetch aggregated fields from the table: "playlist" */
  playlist_aggregate: Playlist_Aggregate;
  /** fetch data from the table: "playlist" using primary key columns */
  playlist_by_pk?: Maybe<Playlist>;
};


export type Query_RootPlaylistArgs = {
  distinct_on?: InputMaybe<Array<Playlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Playlist_Order_By>>;
  where?: InputMaybe<Playlist_Bool_Exp>;
};


export type Query_RootPlaylist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Playlist_Order_By>>;
  where?: InputMaybe<Playlist_Bool_Exp>;
};


export type Query_RootPlaylist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "playlist" */
  playlist: Array<Playlist>;
  /** fetch aggregated fields from the table: "playlist" */
  playlist_aggregate: Playlist_Aggregate;
  /** fetch data from the table: "playlist" using primary key columns */
  playlist_by_pk?: Maybe<Playlist>;
  /** fetch data from the table in a streaming manner: "playlist" */
  playlist_stream: Array<Playlist>;
};


export type Subscription_RootPlaylistArgs = {
  distinct_on?: InputMaybe<Array<Playlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Playlist_Order_By>>;
  where?: InputMaybe<Playlist_Bool_Exp>;
};


export type Subscription_RootPlaylist_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Playlist_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Playlist_Order_By>>;
  where?: InputMaybe<Playlist_Bool_Exp>;
};


export type Subscription_RootPlaylist_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPlaylist_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Playlist_Stream_Cursor_Input>>;
  where?: InputMaybe<Playlist_Bool_Exp>;
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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type SuggestionsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SuggestionsQueryQuery = { __typename?: 'query_root', playlist: Array<{ __typename?: 'playlist', author: string, created_at: any, id: any, image?: string | null, link?: string | null, name: string, updated_at: any }> };


export const SuggestionsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SuggestionsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playlist"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<SuggestionsQueryQuery, SuggestionsQueryQueryVariables>;