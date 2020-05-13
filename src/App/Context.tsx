import React, { createContext, useReducer, useState } from 'react';
import { cartReducer } from './state/reducers/cart';
import { AppState, CostumerDetails } from './state/types';

export type AppContext = {
  state: AppState;
};

const appContext = createContext<AppContext | undefined>(undefined);

const { Provider } = appContext;

const initialCostumerDetails: CostumerDetails = {
  target: '',
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

  return (
    <Provider
      value={{
        state: {
          cart,
          cartDispatch,
          costumerDetails,
          setCostumerDetails,
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContextProvider, appContext };
