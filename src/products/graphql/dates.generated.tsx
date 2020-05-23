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



export type GetDatesQueryVariables = {};


export type GetDatesQuery = (
  { __typename?: 'Query' }
  & { deliveryDates?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'DeliveryDate' }
    & Pick<Types.DeliveryDate, 'id' | 'title' | 'deliveryDate'>
  )>>> }
);


export const GetDatesDocument = gql`
    query getDates {
  deliveryDates(sort: "deliveryDate:DESC") {
    id
    title
    deliveryDate
  }
}
    `;
export type GetDatesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetDatesQuery, GetDatesQueryVariables>, 'query'>;

    export const GetDatesComponent = (props: GetDatesComponentProps) => (
      <ApolloReactComponents.Query<GetDatesQuery, GetDatesQueryVariables> query={GetDatesDocument} {...props} />
    );
    
export type GetDatesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetDatesQuery, GetDatesQueryVariables>
    } & TChildProps;
export function withGetDates<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetDatesQuery,
  GetDatesQueryVariables,
  GetDatesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetDatesQuery, GetDatesQueryVariables, GetDatesProps<TChildProps, TDataName>>(GetDatesDocument, {
      alias: 'getDates',
      ...operationOptions
    });
};

/**
 * __useGetDatesQuery__
 *
 * To run a query within a React component, call `useGetDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDatesQuery, GetDatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDatesQuery, GetDatesQueryVariables>(GetDatesDocument, baseOptions);
      }
export function useGetDatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDatesQuery, GetDatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDatesQuery, GetDatesQueryVariables>(GetDatesDocument, baseOptions);
        }
export type GetDatesQueryHookResult = ReturnType<typeof useGetDatesQuery>;
export type GetDatesLazyQueryHookResult = ReturnType<typeof useGetDatesLazyQuery>;