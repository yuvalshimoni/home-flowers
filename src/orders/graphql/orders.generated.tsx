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



export type GetOrdersByDateQueryVariables = {
  dateId: Types.Scalars['ID'];
};


export type GetOrdersByDateQuery = (
  { __typename?: 'Query' }
  & { deliveryDate?: Types.Maybe<(
    { __typename?: 'DeliveryDate' }
    & Pick<Types.DeliveryDate, 'title' | 'deliveryDate'>
    & { orders?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Order' }
      & Pick<Types.Order, 'name' | 'phone' | 'total' | 'is_paid'>
      & { city?: Types.Maybe<(
        { __typename?: 'City' }
        & Pick<Types.City, 'id' | 'name'>
      )>, orderproducts?: Types.Maybe<Array<Types.Maybe<(
        { __typename?: 'Orderproduct' }
        & Pick<Types.Orderproduct, 'price' | 'quantity'>
        & { product?: Types.Maybe<(
          { __typename?: 'Product' }
          & Pick<Types.Product, 'title'>
        )> }
      )>>> }
    )>>> }
  )> }
);


export const GetOrdersByDateDocument = gql`
    query getOrdersByDate($dateId: ID!) {
  deliveryDate(id: $dateId) {
    title
    deliveryDate
    orders {
      name
      phone
      total
      is_paid
      city {
        id
        name
      }
      orderproducts {
        price
        quantity
        product {
          title
        }
      }
    }
  }
}
    `;
export type GetOrdersByDateComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>, 'query'> & ({ variables: GetOrdersByDateQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrdersByDateComponent = (props: GetOrdersByDateComponentProps) => (
      <ApolloReactComponents.Query<GetOrdersByDateQuery, GetOrdersByDateQueryVariables> query={GetOrdersByDateDocument} {...props} />
    );
    
export type GetOrdersByDateProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>
    } & TChildProps;
export function withGetOrdersByDate<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetOrdersByDateQuery,
  GetOrdersByDateQueryVariables,
  GetOrdersByDateProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetOrdersByDateQuery, GetOrdersByDateQueryVariables, GetOrdersByDateProps<TChildProps, TDataName>>(GetOrdersByDateDocument, {
      alias: 'getOrdersByDate',
      ...operationOptions
    });
};

/**
 * __useGetOrdersByDateQuery__
 *
 * To run a query within a React component, call `useGetOrdersByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersByDateQuery({
 *   variables: {
 *      dateId: // value for 'dateId'
 *   },
 * });
 */
export function useGetOrdersByDateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>) {
        return ApolloReactHooks.useQuery<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>(GetOrdersByDateDocument, baseOptions);
      }
export function useGetOrdersByDateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetOrdersByDateQuery, GetOrdersByDateQueryVariables>(GetOrdersByDateDocument, baseOptions);
        }
export type GetOrdersByDateQueryHookResult = ReturnType<typeof useGetOrdersByDateQuery>;
export type GetOrdersByDateLazyQueryHookResult = ReturnType<typeof useGetOrdersByDateLazyQuery>;