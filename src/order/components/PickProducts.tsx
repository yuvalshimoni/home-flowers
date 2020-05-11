import React from 'react';
import styled from 'styled-components';
import { Product, ProductType } from 'shared/components';
import {CartItemType} from './types';

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
  productId: any;
  amount: number;
}

interface PickProdcutProps {
  updateCart: ({ productId, amount, price }: CartItemType) => void;
}


const PickProdcut = ({ updateCart }: PickProdcutProps) => (
  <Wrapper>
    <Title>שלב בחירת זרים ויעד למשלוח</Title>



    <ProductsWrapper>
      {products.map(({ id, title, price }) => <Product onChange={updateCart} {...{ id, title, price }} />)}
    </ProductsWrapper>

  </Wrapper>
);

export default PickProdcut;