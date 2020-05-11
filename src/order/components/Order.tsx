import React, { useReducer, useCallback } from 'react';
import styled from 'styled-components';
import PickProducts from './PickProducts';
import {Cart, CartItemType} from './types';

const Wrapper = styled.div`
`;


type Action =
  {
    type: 'UPDATE_CART_ITEM';
    payload: CartItemType;
  }
  | {
    type: 'REMOVE_ITEM_FROM_CART';
    payload: {
      productId: CartItemType['productId'];
    }; 
  };


const cartReducer = (state: Cart, action: Action) => {
  switch (action.type) {
    case 'UPDATE_CART_ITEM':
      {
        const { productId, amount, price } = action.payload;

        return state.some(p => p.productId === productId) 
        ? state.map(product => {
          if (product.productId === productId) {
            return { ...product, amount };
          } else {
            return product;
          }
        }) : state.concat([{ productId, amount: 1, price }]);
      }
    case 'REMOVE_ITEM_FROM_CART':
     {
      const productId = action.payload.productId;

      return state.filter(p => p.productId === productId);
     }
    default:
      return state;
  }
};

type UpdateCart = ({ productId, amount, price }: CartItemType) => void;

const Order = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  console.log(cart)

  const updateCart = useCallback(
    ({ productId, amount, price }: CartItemType) => {
      if (amount > 0) {
        dispatch({
          type: 'UPDATE_CART_ITEM', payload: {
            productId,
            amount,
            price
          }
        })
      } else {

        dispatch({
          type: 'REMOVE_ITEM_FROM_CART', payload: {
            productId,
          }
        })
      }
    },
    [],
  );

  return (
    <Wrapper>
      <PickProducts updateCart={updateCart} />
    </Wrapper>
  );
};

export default Order;