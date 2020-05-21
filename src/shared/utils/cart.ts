import { Cart } from 'App/state/types';

export const getTotalCart = (cart: Cart): number =>
  cart.reduce((total, { price, quantity }) => {
    const sum = price * quantity;

    return total + sum;
  }, 0);
