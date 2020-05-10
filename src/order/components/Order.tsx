import React, { useReducer, useCallback } from 'react';
import styled from 'styled-components';
import PickProducts from './PickProducts';

const Wrapper = styled.div`
`;

const initialOrder = {
  products: [],
  address: '',
  deliveryDate: '',
}

interface OrderShape {
  products: Array<{
    productId: any;
    amount: number;
  }>;
  address: string;
  deliveryDate: string;
};

type Action =
  | {
    type: 'UPDATE_PRODUCT';
    payload: {
      productId: any;
      amount: number;
    };
  }
  | {
    type: 'DELETE_PRODUCT';
    payload: {
      productId: any;
    };
  };


const orderReducer = (state: OrderShape, action: Action) => {

  switch (action.type) {
    case 'UPDATE_PRODUCT':
      const { productId, amount } = action.payload;

      return {
        ...state,
        products: state.products.some(p => p.productId === productId)
          ? state.products.map(product => {
            if (product.productId === productId) {
              return { ...product, amount };
            } else {
              return product;
            }
          })
          : state.products.concat([{ productId, amount: 1 }])
      };
    case 'DELETE_PRODUCT':
      const id = action.payload.productId;

      return {
        ...state,
        products: state.products.filter(p => p.productId === id)
      };
    default:
      return state;
  }
};

const Order = () => {
  const [order, dispatch] = useReducer(orderReducer, initialOrder);

  const updateProducts = useCallback(
    ({ productId, amount }) => {
      if (amount > 0) {
        dispatch({
          type: 'UPDATE_PRODUCT', payload: {
            productId,
            amount
          }
        })
      } else {

        dispatch({
          type: 'DELETE_PRODUCT', payload: {
            productId,
          }
        })
      }
    },
    [],
  );

  return (
    <Wrapper>
      <PickProducts updateProducts={updateProducts} />
    </Wrapper>
  );
};

export default Order;