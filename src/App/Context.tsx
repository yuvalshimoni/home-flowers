import React, { createContext, useReducer, useState, useMemo } from 'react';
import { cartReducer } from './state/reducers/cart';
import { AppState, OrderDetails } from './state/types';
import { getTotalCart } from 'shared/utils';

const appContext = createContext<AppState | undefined>(undefined);

const { Provider } = appContext;

const initialOrderDetails: OrderDetails = {
  city: '',
  name: null,
  phone: null,
  cityName: null,
  delivery_date: '',
  dateText: '',
};

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps): JSX.Element => {
  const [cart, cartDispatch] = useReducer(cartReducer, []);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>(initialOrderDetails);

  const totalCart = useMemo<number>(() => getTotalCart(cart), [cart]);

  const appState = useMemo<AppState>(
    () => ({
      cart,
      totalCart,
      cartDispatch,
      orderDetails,
      setOrderDetails,
    }),
    [cart, orderDetails, totalCart],
  );

  return <Provider value={appState}>{children}</Provider>;
};

export { AppContextProvider, appContext };
