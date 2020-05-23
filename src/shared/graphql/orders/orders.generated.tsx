/* tslint-disable */
/* eslint-disable */
import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type CreateOrderMutationVariables = {
  name: Types.Scalars['String'];
  phone: Types.Scalars['String'];
  city: Types.Scalars['ID'];
  delivery_date: Types.Scalars['ID'];
  total: Types.Scalars['Float'];
};


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder?: Types.Maybe<(
    { __typename?: 'createOrderPayload' }
    & { order?: Types.Maybe<(
      { __typename?: 'Order' }
      & Pick<Types.Order, 'id'>
    )> }
  )> }
);

export type CreateOrderproductMutationVariables = {
  product: Types.Scalars['ID'];
  price: Types.Scalars['Float'];
  quantity: Types.Scalars['Int'];
  order_id: Types.Scalars['ID'];
};


export type CreateOrderproductMutation = (
  { __typename?: 'Mutation' }
  & { createOrderproduct?: Types.Maybe<(
    { __typename?: 'createOrderproductPayload' }
    & { orderproduct?: Types.Maybe<(
      { __typename?: 'Orderproduct' }
      & Pick<Types.Orderproduct, 'id'>
    )> }
  )> }
);


export const CreateOrderDocument = gql`
    mutation createOrder($name: String!, $phone: String!, $city: ID!, $delivery_date: ID!, $total: Float!) {
  createOrder(input: {data: {name: $name, phone: $phone, delivery_date: $delivery_date, city: $city, total: $total}}) {
    order {
      id
    }
  }
}
    `;
export type CreateOrderMutationFn = ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
export type CreateOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderMutation, CreateOrderMutationVariables>, 'mutation'>;

    export const CreateOrderComponent = (props: CreateOrderComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderMutation, CreateOrderMutationVariables> mutation={CreateOrderDocument} {...props} />
    );
    
export type CreateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>
    } & TChildProps;
export function withCreateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderMutation, CreateOrderMutationVariables, CreateOrderProps<TChildProps, TDataName>>(CreateOrderDocument, {
      alias: 'createOrder',
      ...operationOptions
    });
};

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      name: // value for 'name'
 *      phone: // value for 'phone'
 *      city: // value for 'city'
 *      delivery_date: // value for 'delivery_date'
 *      total: // value for 'total'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const CreateOrderproductDocument = gql`
    mutation createOrderproduct($product: ID!, $price: Float!, $quantity: Int!, $order_id: ID!) {
  createOrderproduct(input: {data: {product: $product, price: $price, quantity: $quantity, order_id: $order_id}}) {
    orderproduct {
      id
    }
  }
}
    `;
export type CreateOrderproductMutationFn = ApolloReactCommon.MutationFunction<CreateOrderproductMutation, CreateOrderproductMutationVariables>;
export type CreateOrderproductComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderproductMutation, CreateOrderproductMutationVariables>, 'mutation'>;

    export const CreateOrderproductComponent = (props: CreateOrderproductComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderproductMutation, CreateOrderproductMutationVariables> mutation={CreateOrderproductDocument} {...props} />
    );
    
export type CreateOrderproductProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOrderproductMutation, CreateOrderproductMutationVariables>
    } & TChildProps;
export function withCreateOrderproduct<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderproductMutation,
  CreateOrderproductMutationVariables,
  CreateOrderproductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderproductMutation, CreateOrderproductMutationVariables, CreateOrderproductProps<TChildProps, TDataName>>(CreateOrderproductDocument, {
      alias: 'createOrderproduct',
      ...operationOptions
    });
};

/**
 * __useCreateOrderproductMutation__
 *
 * To run a mutation, you first call `useCreateOrderproductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderproductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderproductMutation, { data, loading, error }] = useCreateOrderproductMutation({
 *   variables: {
 *      product: // value for 'product'
 *      price: // value for 'price'
 *      quantity: // value for 'quantity'
 *      order_id: // value for 'order_id'
 *   },
 * });
 */
export function useCreateOrderproductMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderproductMutation, CreateOrderproductMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrderproductMutation, CreateOrderproductMutationVariables>(CreateOrderproductDocument, baseOptions);
      }
export type CreateOrderproductMutationHookResult = ReturnType<typeof useCreateOrderproductMutation>;
export type CreateOrderproductMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrderproductMutation, CreateOrderproductMutationVariables>;