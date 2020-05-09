import React from 'react';
import styled from 'styled-components';
import { Product, ProductType } from 'shared/components';

const Wrapper = styled.div`
`;

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
    title: "פריחת אביב",
    price: 20
  },
  {
    id: 2,
    title: "פריחת קיץ",
    price: 50
  },
  {
    id: 3,
    title: "פריחת קיץ",
    price: 50
  }
];

type onChangeProps = {
  id: any;
  amount: number;
}

interface PickProdcutProps {
  updateProducts: ({ id, amount }: onChangeProps) => void;
}


const PickProdcut = ({ updateProducts }: PickProdcutProps) => (
  <Wrapper>
    <Title>בחר זרים</Title>

    <ProductsWrapper>
      {products.map(({ id, title, price }) => <Product onChange={updateProducts} {...{ id, title, price }} />)}
    </ProductsWrapper>

  </Wrapper>
);

export default PickProdcut;