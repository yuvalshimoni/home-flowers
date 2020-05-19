import React from 'react';
import styled from 'styled-components';
import { useAppState } from 'shared/hooks';

const Total = styled.div``;

const TotalCart = (): JSX.Element => {
  const { totalCart } = useAppState();

  return (
    <Total>
      <strong>סה"כ {totalCart}</strong> ש"ח
    </Total>
  );
};

export default TotalCart;
