import React from 'react';
import styled from 'styled-components';
import CartTable from './CartTable';
import {Cart} from '../../types';


const Wrapper = styled.div`
`;

const Title = styled.h5`
 font-weight: bold;
 font-size: ${({ theme }) => theme.sizes.xl}px;
`;

interface DetailsProps {
  cart: Cart
}


const Details = ({ cart }: DetailsProps) => (
  <Wrapper>
    <Title>שלב פרטים אישיים + תצוגת הסל</Title>

    <CartTable cart={cart} />
  </Wrapper>
);

export default Details;