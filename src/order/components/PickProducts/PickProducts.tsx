import React from 'react';
import styled from 'styled-components';
import { Product, ProductType } from 'shared/components';

const Wrapper = styled.div``;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const products: Array<ProductType> = [
  {
    id: 1,
    title: 'פריחת אביב',
    price: 20,
  },
  {
    id: 2,
    title: 'פריחת קיץ',
    price: 50,
  },
  {
    id: 3,
    title: 'פריחת קיץ',
    price: 50,
  },
];

interface PickProdcutProps {}

const PickProducts = () => (
  <Wrapper>
    <Title>שלב בחירת זרים ויעד למשלוח</Title>

    <ProductsWrapper>
      {products.map(({ id, title, price }) => (
        <Product key={id} id={id} title={title} price={price} />
      ))}
    </ProductsWrapper>
  </Wrapper>
);

export default PickProducts;
