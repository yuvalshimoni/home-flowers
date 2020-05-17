import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';
import { Product, ProductType, ActionButton, MainTitle, HeadPage } from 'shared/components';
import { getTotalCart } from 'shared/utils';
import SelectTarget from './SelectTarget';

const Wrapper = styled.div``;

const ButtonWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 5px;
  margin: 0 auto;
  max-width: 1140px;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const products: Array<ProductType> = [
  {
    id: '12ds324dsf',
    title: 'פריחת אביב',
    price: 20,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
  {
    id: '12dsdsfsdf324dsf',
    title: 'פריחת קיץ',
    price: 50,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
  {
    id: '324dfgfdg',
    title: 'פריחת קיץ',
    price: 25,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
  {
    id: '324dfgfsdfdg',
    title: 'פריחת קיץ',
    price: 35,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
];

const Products = (): JSX.Element => {
  const history = useHistory();
  const {
    cart,
    costumerDetails: { target },
  } = useAppState();

  const isTargetSelected = useMemo(() => !!target?.name, [target]);
  const [displaySelectTarget, setDisplaySelectTarget] = useState<boolean>(isTargetSelected);

  const handleActionButton = useCallback(() => {
    if (isTargetSelected) {
      history.push('/details');
    } else {
      setDisplaySelectTarget(true);
    }
  }, [history, isTargetSelected]);

  const total = useMemo<number>(() => getTotalCart(cart), [cart]);

  return (
    <>
      <Wrapper>
        <HeadPage>
          <div>{displaySelectTarget ? <SelectTarget /> : <MainTitle>בחר זרים</MainTitle>}</div>
        </HeadPage>

        <ProductsWrapper>
          {products.map(({ id, title, price, image }) => (
            <Product key={id} id={id} title={title} price={price} image={image} />
          ))}
        </ProductsWrapper>
      </Wrapper>

      <ButtonWrapper>
        <ActionButton onClick={handleActionButton} disabled={!total}>
          המשך
        </ActionButton>
      </ButtonWrapper>
    </>
  );
};

export default Products;
