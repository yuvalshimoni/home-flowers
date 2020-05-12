import React from 'react';
import styled from 'styled-components';
import { useAppContext } from 'App/context';

const Wrapper = styled.div``;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const SelectTarget = (): JSX.Element => {
  const {
    state: { setCostumerDetails },
  } = useAppContext();

  return (
    <Wrapper>
      <Title>יעד למשלוח</Title>
    </Wrapper>
  );
};

export default SelectTarget;
