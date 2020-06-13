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



export type OrderSummaryQueryVariables = {
  id: Types.Scalars['ID'];
};


export type OrderSummaryQuery = (
  { __typename?: 'Query' }
  & { order?: Types.Maybe<(
    { __typename?: 'Order' }
    & { delivery_date?: Types.Maybe<(
      { __typename?: 'DeliveryDate' }
      & Pick<Types.DeliveryDate, 'deliveryDate'>
    )>, city?: Types.Maybe<(
      { __typename?: 'City' }
      & Pick<Types.City, 'name'>
    )>, orderproducts?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Orderproduct' }
      & Pick<Types.Orderproduct, 'quantity' | 'price'>
      & { product?: Types.Maybe<(
        { __typename?: 'Product' }
        & Pick<Types.Product, 'id'>
      )> }
    )>>> }
  )> }
);


export const OrderSummaryDocument = gql`
    query OrderSummary($id: ID!) {
  order(id: $id) {
    delivery_date {
      deliveryDate
    }
    city {
      name
    }
    orderproducts {
      product {
        id
      }
      quantity
      price
    }
  }
}
    `;
export type OrderSummaryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrderSummaryQuery, OrderSummaryQueryVariables>, 'query'> & ({ variables: OrderSummaryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrderSummaryComponent = (props: OrderSummaryComponentProps) => (
      <ApolloReactComponents.Query<OrderSummaryQuery, OrderSummaryQueryVariables> query={OrderSummaryDocument} {...props} />
    );
    
export type OrderSummaryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OrderSummaryQuery, OrderSummaryQueryVariables>
    } & TChildProps;
export function withOrderSummary<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OrderSummaryQuery,
  OrderSummaryQueryVariables,
  OrderSummaryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OrderSummaryQuery, OrderSummaryQueryVariables, OrderSummaryProps<TChildProps, TDataName>>(OrderSummaryDocument, {
      alias: 'orderSummary',
      ...operationOptions
    });
};

/**
 * __useOrderSummaryQuery__
 *
 * To run a query within a React component, call `useOrderSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderSummaryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderSummaryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrderSummaryQuery, OrderSummaryQueryVariables>) {
        return ApolloReactHooks.useQuery<OrderSummaryQuery, OrderSummaryQueryVariables>(OrderSummaryDocument, baseOptions);
      }
export function useOrderSummaryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrderSummaryQuery, OrderSummaryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrderSummaryQuery, OrderSummaryQueryVariables>(OrderSummaryDocument, baseOptions);
        }
export type OrderSummaryQueryHookResult = ReturnType<typeof useOrderSummaryQuery>;
export type OrderSummaryLazyQueryHookResult = ReturnType<typeof useOrderSummaryLazyQuery>;