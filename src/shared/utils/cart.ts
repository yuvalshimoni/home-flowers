import { Cart } from 'App/state/types';

export const getTotalCart = (cart: Cart): number =>
  cart.reduce((total, { price, amount }) => {
    const sum = price * amount;

    return total + sum;
  }, 0);
