import { createContext, useContext } from 'react';
import { AppState } from "./state/types";

export type AppContext = {
  state: AppState;
}

const appContext = createContext<AppContext | undefined>(undefined);

export const { Provider: AppContextProvider } = appContext;

export const useAppContext = () => {
  return useContext(appContext)!;
};
