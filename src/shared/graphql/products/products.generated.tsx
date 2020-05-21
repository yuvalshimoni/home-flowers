/* tslint-disable */
/* eslint-disable */
import * as Types from '../../../graphql/types.generated';

import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export type ProductsQueryVariables = {};


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Product' }
    & Pick<Types.Product, 'id' | 'title' | 'price'>
    & { image?: Types.Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<Types.UploadFile, 'url'>
    )> }
  )>>> }
);


export const ProductsDocument = gql`
    query Products {
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
export type ProductsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProductsQuery, ProductsQueryVariables>, 'query'>;

    export const ProductsComponent = (props: ProductsComponentProps) => (
      <ApolloReactComponents.Query<ProductsQuery, ProductsQueryVariables> query={ProductsDocument} {...props} />
    );
    
export type ProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ProductsQuery, ProductsQueryVariables>
    } & TChildProps;
export function withProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductsQuery,
  ProductsQueryVariables,
  ProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ProductsQuery, ProductsQueryVariables, ProductsProps<TChildProps, TDataName>>(ProductsDocument, {
      alias: 'products',
      ...operationOptions
    });
};

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return ApolloReactHooks.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;