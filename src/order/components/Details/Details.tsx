import React from 'react';
import styled from 'styled-components';
import CartTable from './CartTable';

const Wrapper = styled.div``;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const Details = () => (
  <Wrapper>
    <Title>שלב פרטים אישיים + תצוגת הסל</Title>

    <CartTable />
  </Wrapper>
);

export default Details;
