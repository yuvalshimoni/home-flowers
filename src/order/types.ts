export type CartItemType = {
  productId: any;
  amount: number;
  price: number;
}

export type Cart = Array<CartItemType>;
