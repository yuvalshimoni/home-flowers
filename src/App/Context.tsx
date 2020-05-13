import React, { createContext, useReducer, useState, useMemo } from 'react';
import { cartReducer } from './state/reducers/cart';
import { AppState, CostumerDetails } from './state/types';

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

  const appState = useMemo(
    () => ({
      cart,
      cartDispatch,
      costumerDetails,
      setCostumerDetails,
    }),
    [cart, costumerDetails],
  );

  console.log(appState);

  return <Provider value={appState}>{children}</Provider>;
};

export { AppContextProvider, appContext };
