import React from 'react';
import styled from 'styled-components';
import { useAppState } from 'shared/hooks';

const Wrapper = styled.div``;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const Summary = (): JSX.Element => {
  const { cart, costumerDetails } = useAppState();
  return (
    <Wrapper>
      <Title>סיכום הזמנה</Title>
      <div>{JSON.stringify({ cart, ...costumerDetails })}</div>
    </Wrapper>
  );
};

export default Summary;
