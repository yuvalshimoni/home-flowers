/* tslint-disable */
/* eslint-disable */
import * as Types from '../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type TestDoNotDeleteQueryVariables = {};


export type TestDoNotDeleteQuery = (
  { __typename?: 'Query' }
  & { city?: Types.Maybe<(
    { __typename?: 'Cities' }
    & Pick<Types.Cities, 'id'>
  )> }
);


export const TestDoNotDeleteDocument = gql`
    query TestDoNotDelete {
  city(id: "5") {
    id
  }
}
    `;
export type TestDoNotDeleteComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>, 'query'>;

    export const TestDoNotDeleteComponent = (props: TestDoNotDeleteComponentProps) => (
      <ApolloReactComponents.Query<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables> query={TestDoNotDeleteDocument} {...props} />
    );
    
export type TestDoNotDeleteProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>
    } & TChildProps;
export function withTestDoNotDelete<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TestDoNotDeleteQuery,
  TestDoNotDeleteQueryVariables,
  TestDoNotDeleteProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables, TestDoNotDeleteProps<TChildProps, TDataName>>(TestDoNotDeleteDocument, {
      alias: 'testDoNotDelete',
      ...operationOptions
    });
};

/**
 * __useTestDoNotDeleteQuery__
 *
 * To run a query within a React component, call `useTestDoNotDeleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestDoNotDeleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestDoNotDeleteQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestDoNotDeleteQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>) {
        return ApolloReactHooks.useQuery<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>(TestDoNotDeleteDocument, baseOptions);
      }
export function useTestDoNotDeleteLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestDoNotDeleteQuery, TestDoNotDeleteQueryVariables>(TestDoNotDeleteDocument, baseOptions);
        }
export type TestDoNotDeleteQueryHookResult = ReturnType<typeof useTestDoNotDeleteQuery>;
export type TestDoNotDeleteLazyQueryHookResult = ReturnType<typeof useTestDoNotDeleteLazyQuery>;