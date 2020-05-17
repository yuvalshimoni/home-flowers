import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';
import { Product, ProductType, Button, MainTitle, HeadPage, FlexColumn } from 'shared/components';
import { getTotalCart } from 'shared/utils';
import SelectTarget from './SelectTarget';

const Wrapper = styled.div`
  padding-bottom: 80px;
`;

const RightSide = styled(FlexColumn)`
  position: relative;
`;

const MainTitleWrapper = styled(animated.div)``;

const SelectTargetWrapper = styled(animated.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 500px;
`;

const Total = styled.div``;

const ButtonWrapper = styled(animated.div)`
  position: fixed;
  width: 100%;
  bottom: 5px;
  margin: 0 auto;
  max-width: 1140px;
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 85px;
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

  const handleOnClick = useCallback(() => {
    if (isTargetSelected) {
      history.push('/details');
    } else {
      setDisplaySelectTarget(true);
    }
  }, [history, isTargetSelected]);

  const total = useMemo<number>(() => getTotalCart(cart), [cart]);

  const MainTitleAnimations = useSpring({
    opacity: !displaySelectTarget ? 1 : 0,
  });

  const selectTargetAnimations = useSpring({
    opacity: displaySelectTarget ? 1 : 0,
    transform: displaySelectTarget ? `translateX(0)` : `translateX(110%)`,
  });

  const ButtoAnimations = useSpring({
    opacity: !displaySelectTarget ? 1 : 0,
  });

  return (
    <>
      <Wrapper>
        <HeadPage>
          <RightSide>
            <SelectTargetWrapper style={selectTargetAnimations}>
              <SelectTarget />
            </SelectTargetWrapper>

            <MainTitleWrapper style={MainTitleAnimations}>
              <MainTitle>בחר זרים</MainTitle>
            </MainTitleWrapper>
          </RightSide>

          <Total>
            <strong>סה"כ {total}</strong> ש"ח
          </Total>
        </HeadPage>

        <ProductsWrapper>
          {products.map(({ id, title, price, image }) => (
            <Product key={id} id={id} title={title} price={price} image={image} />
          ))}
        </ProductsWrapper>
      </Wrapper>

      <ButtonWrapper style={ButtoAnimations}>
        <Button onClick={handleOnClick} disabled={!total}>
          המשך
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Products;
