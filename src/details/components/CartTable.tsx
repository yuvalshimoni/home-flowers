import React from 'react';
import styled from 'styled-components';
import { useAppContext } from 'shared/hooks';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const Row = styled.div``;

const CartTable = (): JSX.Element => {
  const {
    state: { cart },
  } = useAppContext();

  return (
    <Wrapper>
      <Title>פירוט ההזמנה</Title>

      {cart?.length &&
        cart.map(({ productId, price, amount }) => <Row key={productId}>{amount}</Row>)}
    </Wrapper>
  );
};

export default CartTable;
