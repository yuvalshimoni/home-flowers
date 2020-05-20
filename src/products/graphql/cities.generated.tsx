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



export type CitiesQueryVariables = {};


export type CitiesQuery = (
  { __typename?: 'Query' }
  & { cities?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Cities' }
    & Pick<Types.Cities, 'id' | 'name'>
  )>>> }
);


export const CitiesDocument = gql`
    query Cities {
  cities(sort: "name:asc", where: {is_active: true}) {
    id
    name
  }
}
    `;
export type CitiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CitiesQuery, CitiesQueryVariables>, 'query'>;

    export const CitiesComponent = (props: CitiesComponentProps) => (
      <ApolloReactComponents.Query<CitiesQuery, CitiesQueryVariables> query={CitiesDocument} {...props} />
    );
    
export type CitiesProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CitiesQuery, CitiesQueryVariables>
    } & TChildProps;
export function withCities<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CitiesQuery,
  CitiesQueryVariables,
  CitiesProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CitiesQuery, CitiesQueryVariables, CitiesProps<TChildProps, TDataName>>(CitiesDocument, {
      alias: 'cities',
      ...operationOptions
    });
};

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCitiesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        return ApolloReactHooks.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, baseOptions);
      }
export function useCitiesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, baseOptions);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;