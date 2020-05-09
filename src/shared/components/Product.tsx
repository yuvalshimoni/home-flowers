import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Title = styled.h5`
 font-weight: bold;
 font-size: ${({ theme }) => theme.sizes.md}px;
`;

const Price = styled.h5`
 font-size: ${({ theme }) => theme.sizes.main}px;
`;


interface ProductProps {
  title: string;
  price: number;
}


const Product = ({ title, price }: ProductProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <Price>{price}</Price>
  </Wrapper>
);

export default Product;