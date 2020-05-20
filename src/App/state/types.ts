import { CartAction } from './reducers/cart';
import * as Types from 'graphql/types.generated';

export type CartItemType = {
  productId: Types.Products['id'];
  amount: number;
  price: Types.Products['price'];
};

export type Cart = Array<CartItemType>;

export type CostumerDetails = {
  target?: {
    cityId: string;
    name: string;
  };
  name: string;
  phone: number | null;
  deliveryDate: string;
};

export interface AppState {
  cart: Cart;
  totalCart: number;
  cartDispatch: React.Dispatch<CartAction>;
  costumerDetails: CostumerDetails;
  setCostumerDetails: React.Dispatch<React.SetStateAction<CostumerDetails>>;
}
