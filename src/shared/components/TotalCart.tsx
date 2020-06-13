import React from 'react';
import styled from 'styled-components';
import { useAppState } from 'shared/hooks';

const Total = styled.div``;

type TotalCartProps = {
  value?: number;
};

const TotalCart = ({ value }: TotalCartProps): JSX.Element => {
  const { totalCart } = useAppState();

  return (
    <Total>
      <strong>סה"כ {totalCart || value}</strong> ש"ח
    </Total>
  );
};

export default TotalCart;
