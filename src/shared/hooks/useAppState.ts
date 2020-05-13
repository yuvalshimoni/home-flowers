import { useContext } from 'react';
import { appContext } from 'App/Context';

const useAppState = () => {
  return useContext(appContext)!;
};

export default useAppState;
