import { useRef, useEffect } from 'react';

const useEffectOnUpdate = (func: () => void, deps: Array<any>) => {
  const firstUpdate = useRef(true);
  useEffect(
    () => {
      if (firstUpdate.current === true) {
        firstUpdate.current = false;
        return;
      }
      return func();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
};

export default useEffectOnUpdate;
