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



export type GetOrderQueryVariables = {
  id: Types.Scalars['ID'];
};


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { order?: Types.Maybe<(
    { __typename?: 'Order' }
    & Pick<Types.Order, 'name' | 'total' | 'phone'>
    & { city?: Types.Maybe<(
      { __typename?: 'City' }
      & Pick<Types.City, 'name'>
    )>, orderproducts?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Orderproduct' }
      & Pick<Types.Orderproduct, 'quantity' | 'price'>
      & { product?: Types.Maybe<(
        { __typename?: 'Product' }
        & Pick<Types.Product, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);


export const GetOrderDocument = gql`
    query getOrder($id: ID!) {
  order(id: $id) {
    name
    total
    phone
    city {
      name
    }
    orderproducts {
      quantity
      price
      product {
        id
        title
      }
    }
  }
}
    `;
export type GetOrderComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrderQuery, GetOrderQueryVariables>, 'query'> & ({ variables: GetOrderQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrderComponent = (props: GetOrderComponentProps) => (
      <ApolloReactComponents.Query<GetOrderQuery, GetOrderQueryVariables> query={GetOrderDocument} {...props} />
    );
    
export type GetOrderProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrderQuery, GetOrderQueryVariables>
    } & TChildProps;
export function withGetOrder<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrderQuery,
  GetOrderQueryVariables,
  GetOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrderQuery, GetOrderQueryVariables, GetOrderProps<TChildProps, TDataName>>(GetOrderDocument, {
      alias: 'getOrder',
      ...operationOptions
    });
};

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
      }
export function useGetOrderLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;