import { useReducer, useState } from 'react';
import { cartReducer } from 'App/state/reducers/cart';
import { AppState, CostumerDetails } from 'App/state/types';

const initialCostumerDetails: CostumerDetails = {
  target: '',
  name: '',
  phone: null,
  deliveryDate: '',
};

export const useAppState = (): AppState => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [costumerDetails, setCostumerDetails] = useState<CostumerDetails>(initialCostumerDetails);

  return {
    cart,
    cartDispatch,
    costumerDetails,
    setCostumerDetails,
  };
};
