import { useContext } from 'react';
import { appContext } from 'App/Context';

const useAppContext = () => {
  return useContext(appContext)!;
};

export default useAppContext;
