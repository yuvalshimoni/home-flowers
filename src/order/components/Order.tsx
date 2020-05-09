import React, { useState, useReducer, useCallback } from 'react';
import styled from 'styled-components';
import { ProductType } from 'shared/components';
import PickProducts from './PickProducts';

const Wrapper = styled.div`
`;

const initialOrder = {
  products: [],
  address: '',
  deliveryDate: '',
}

interface order {
  products: Array<{
    id: any;
    amount: number;
  }>;
  address: string;
  deliveryDate: string;
};


interface action {
  type: 'update_products';
  id: any;
  amount: number;
};

const orderReducer = (state: order, action: action) => {

  switch (action.type) {
    case 'update_products':
      const { id, amount } = action;
      const { products } = state;

      return {
        ...state,
        products: products.some(p => p.id === id)
          ? amount === 0 ?
            products.filter(p => p.id === id)
            : products.map(product => {
              if (product.id === id) {
                return { ...product, amount };
              } else {
                return product;
              }
            })
          : products.concat([{ id, amount }])
      };
    default:
      return state;
  }
};

const Order = () => {
  const [order, dispatch] = useReducer(orderReducer, initialOrder);

  const updateProducts = useCallback(
    ({ id, amount }) => {
      dispatch({ type: "update_products", id, amount });
    },
    [],
  );
  console.log(order.products)

  return (
    <Wrapper>
      <PickProducts updateProducts={updateProducts} />
    </Wrapper>
  );
};

export default Order;