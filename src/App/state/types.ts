import { CartAction } from './reducers/cart';
import * as Types from 'graphql/types.generated';

export type OrderDetails = {
  name: Types.Order['name'] | null | string;
  city: Types.City['id'] | string;
  phone: Types.Order['phone'] | null | string;
  cityName: Types.City['name'] | null | string;
  delivery_date: string;
  dateText: string;
};

export type CartItem = {
  productId: Types.Product['id'];
  price: Types.Product['price'];
  quantity: Types.Orderproduct['quantity'];
};

export type Cart = Array<CartItem>;

export interface AppState {
  cart: Cart;
  totalCart: number;
  cartDispatch: React.Dispatch<CartAction>;
  orderDetails: OrderDetails;
  setOrderDetails: React.Dispatch<React.SetStateAction<OrderDetails>>;
}
