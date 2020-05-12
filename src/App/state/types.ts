import { Cart } from "order/types";
import { CartAction } from "./reducers/cart";

export interface AppState {
  cart: Cart;
  cartDispatch: React.Dispatch<CartAction>;
}
