import { Cart, CartItemType } from '../types';

export type CartAction =
  | {
      type: 'UPDATE_CART_ITEM';
      payload: CartItemType;
    }
  | {
      type: 'REMOVE_ITEM_FROM_CART';
      payload: {
        productId: CartItemType['productId'];
      };
    };

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case 'UPDATE_CART_ITEM': {
      const { productId, quantity, price } = action.payload;

      return state.some((p) => p.productId === productId)
        ? state.map((product) => {
            if (product.productId === productId) {
              return { ...product, quantity };
            } else {
              return product;
            }
          })
        : state.concat([{ productId, quantity: 1, price }]);
    }
    case 'REMOVE_ITEM_FROM_CART': {
      const productId = action.payload.productId;

      return state.filter((p) => p.productId !== productId);
    }
    default:
      return state;
  }
};
