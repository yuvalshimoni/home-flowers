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



export type ProcustsQueryVariables = {};


export type ProcustsQuery = (
  { __typename?: 'Query' }
  & { products?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Products' }
    & Pick<Types.Products, 'id' | 'title' | 'price'>
    & { image?: Types.Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<Types.UploadFile, 'url'>
    )> }
  )>>> }
);


export const ProcustsDocument = gql`
    query Procusts {
  products {
    id
    title
    price
    image {
      url
    }
  }
}
    `;
export type ProcustsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProcustsQuery, ProcustsQueryVariables>, 'query'>;

    export const ProcustsComponent = (props: ProcustsComponentProps) => (
      <ApolloReactComponents.Query<ProcustsQuery, ProcustsQueryVariables> query={ProcustsDocument} {...props} />
    );
    
export type ProcustsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProcustsQuery, ProcustsQueryVariables>
    } & TChildProps;
export function withProcusts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProcustsQuery,
  ProcustsQueryVariables,
  ProcustsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProcustsQuery, ProcustsQueryVariables, ProcustsProps<TChildProps, TDataName>>(ProcustsDocument, {
      alias: 'procusts',
      ...operationOptions
    });
};

/**
 * __useProcustsQuery__
 *
 * To run a query within a React component, call `useProcustsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProcustsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProcustsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProcustsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProcustsQuery, ProcustsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProcustsQuery, ProcustsQueryVariables>(ProcustsDocument, baseOptions);
      }
export function useProcustsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProcustsQuery, ProcustsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProcustsQuery, ProcustsQueryVariables>(ProcustsDocument, baseOptions);
        }
export type ProcustsQueryHookResult = ReturnType<typeof useProcustsQuery>;
export type ProcustsLazyQueryHookResult = ReturnType<typeof useProcustsLazyQuery>;