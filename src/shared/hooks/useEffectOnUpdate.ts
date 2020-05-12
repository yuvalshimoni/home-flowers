import { useRef, useEffect } from 'react';

const useEffectOnUpdate = (func: () => void, deps: Array<any>): void => {
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current === true) {
      firstUpdate.current = false;
      return;
    }
    return func();
  }, deps);
};

export default useEffectOnUpdate;
