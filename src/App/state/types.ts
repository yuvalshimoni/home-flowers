import { CartAction } from './reducers/cart';

export type CartItemType = {
  productId: any;
  amount: number;
  price: number;
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
  cartDispatch: React.Dispatch<CartAction>;
  costumerDetails: CostumerDetails;
  setCostumerDetails: React.Dispatch<React.SetStateAction<CostumerDetails>>;
}
