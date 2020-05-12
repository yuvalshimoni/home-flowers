import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useAppContext } from 'App/context';
import { Product, ProductType, FlexRowSpaceBetween } from 'shared/components';
import { getTotalCart } from 'shared/utils';
import SelectTarget from './SelectTarget';

const Wrapper = styled.div``;

const Head = styled(FlexRowSpaceBetween)``;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const Total = styled.h3`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const Buttom = styled.div`
  cursor: pointer;
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
    id: '12ds324dsf',
    title: 'פריחת אביב',
    price: 20,
  },
  {
    id: '12dsdsfsdf324dsf',
    title: 'פריחת קיץ',
    price: 50,
  },
  {
    id: '324dfgfdg',
    title: 'פריחת קיץ',
    price: 25,
  },
  {
    id: '324dfgfsdfdg',
    title: 'פריחת קיץ',
    price: 35,
  },
];

const Products = (): JSX.Element => {
  const {
    state: { cart },
  } = useAppContext();

  const [displaySelectTarget, setDisplaySelectTarget] = useState<boolean>(false);

  const showSelectTarget = useCallback(() => setDisplaySelectTarget(true), []);

  const total = useMemo<number>(() => getTotalCart(cart), [cart]);

  return (
    <Wrapper>
      <Head>
        <div>{displaySelectTarget ? <SelectTarget /> : <Title>בחר זרים</Title>}</div>

        <div>
          <Buttom onClick={showSelectTarget}>הזמן</Buttom>
          <Total>סהכ: {total}</Total>
        </div>
      </Head>

      <ProductsWrapper>
        {products.map(({ id, title, price }) => (
          <Product key={id} id={id} title={title} price={price} />
        ))}
      </ProductsWrapper>
    </Wrapper>
  );
};

export default Products;
