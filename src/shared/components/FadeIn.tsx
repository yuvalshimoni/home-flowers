import React, { useState, useEffect, useRef } from 'react';
import { useEffectOnUpdate } from 'shared/hooks';

interface FadeInProps {
  delay?: number;
  transitionDuration?: number;
  onlyFade?: boolean;
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
}

const FadeIn = ({
  delay = 50,
  transitionDuration = 400,
  onlyFade = false,
  children,
  className,
  childClassName,
}: FadeInProps): JSX.Element => {
  const intervalRef = useRef<number>();
  const count = React.Children.count(children);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      i++;
      if (i > count) clearInterval(intervalRef.current);

      setVisibleCount(i);
    }, delay);

    return () => {
      clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffectOnUpdate(() => {
    setVisibleCount(count);
  }, [count]);

  return (
    <div className={className}>
      {React.Children.map(children, (child, i) => (
        <div
          className={childClassName}
          style={{
            transition: `opacity ${transitionDuration}ms, ${
              !onlyFade && `transform ${transitionDuration}ms`
            }`,
            transform: `translateY(${onlyFade ? 0 : visibleCount > i ? 0 : 20}px)`,
            opacity: visibleCount > i ? 1 : 0,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FadeIn;
