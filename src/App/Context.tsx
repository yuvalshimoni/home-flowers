import React, { createContext, useReducer, useState, useMemo } from 'react';
import { cartReducer } from './state/reducers/cart';
import { AppState, CostumerDetails } from './state/types';
import { getTotalCart } from 'shared/utils';

const appContext = createContext<AppState | undefined>(undefined);

const { Provider } = appContext;

const initialCostumerDetails: CostumerDetails = {
  target: {
    cityId: '',
    name: '',
  },
  name: '',
  phone: null,
  deliveryDate: '',
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps): JSX.Element => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [costumerDetails, setCostumerDetails] = useState<CostumerDetails>(initialCostumerDetails);

  const totalCart = useMemo<number>(() => getTotalCart(cart), [cart]);

  const appState = useMemo<AppState>(
    () => ({
      cart,
      totalCart,
      cartDispatch,
      costumerDetails,
      setCostumerDetails,
    }),
    [cart, costumerDetails, totalCart],
  );

  return <Provider value={appState}>{children}</Provider>;
};

export { AppContextProvider, appContext };
