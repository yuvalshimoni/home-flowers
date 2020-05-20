import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';
import { Product, TotalCart, ProductType, Button, MainTitle, HeadPage } from 'shared/components';
import SelectTarget from './SelectTarget';

const Wrapper = styled.div``;

const MainTitleWrapper = styled(animated.div)``;

const SelectTargetWrapper = styled(animated.div)`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 500px;

  @media (max-width: 500px) {
    left: 0;
    width: auto;
  }
`;

const ButtonWrapper = styled(animated.div)`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 5px;
  margin: 0 auto;
  max-width: 1140px;

  @media (max-width: 500px) {
    bottom: 0;
  }
`;

const ProductsWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 85px;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 500px) {
    margin-top: 40px;
  }
`;

const TotalWrapper = styled.div<{ displaySelectTarget?: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;

  @media (max-width: 500px) {
    ${({ displaySelectTarget }) => displaySelectTarget && 'opacity: 0;'}
  }
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
    image: 'http://174.138.32.210/uploads/bouquet-roses-tendresse@2x_d1140ec205.png',
  },
  {
    id: '324dfgfdg',
    title: 'פריחת קיץ',
    price: 25,
    image: 'http://174.138.32.210/uploads/Postabloom---cutout_3_grande_15eb843564.png',
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
    totalCart,
    costumerDetails: { target },
  } = useAppState();

  const isTargetSelected = useMemo(() => !!target?.name, [target?.name]);
  const [displaySelectTarget, setDisplaySelectTarget] = useState<boolean>(isTargetSelected);

  const handleOnClick = useCallback(() => {
    if (isTargetSelected) {
      setTimeout(() => {
        history.push('/details');
      }, 1500);
    } else {
      setDisplaySelectTarget(true);
    }
  }, [history, isTargetSelected]);

  const MainTitleAnimations = useSpring({
    opacity: !displaySelectTarget ? 1 : 0,
  });

  const selectTargetAnimations = useSpring({
    opacity: displaySelectTarget ? 1 : 0,
    transform: displaySelectTarget ? `translateX(0)` : `translateX(110%)`,
  });

  const ButtonAnimations = useSpring({
    opacity: !displaySelectTarget ? 1 : 0,
  });

  return (
    <>
      <Wrapper>
        <HeadPage>
          <SelectTargetWrapper style={selectTargetAnimations}>
            <SelectTarget />
          </SelectTargetWrapper>

          <MainTitleWrapper style={MainTitleAnimations}>
            <MainTitle>בחר זרים</MainTitle>
          </MainTitleWrapper>

          <TotalWrapper displaySelectTarget={displaySelectTarget}>
            <TotalCart />
          </TotalWrapper>
        </HeadPage>

        <ProductsWrapper>
          {products.map(({ id, title, price, image }) => (
            <Product key={id} id={id} title={title} price={price} image={image} />
          ))}
        </ProductsWrapper>
      </Wrapper>

      <ButtonWrapper style={ButtonAnimations}>
        <Button onClick={handleOnClick} disabled={!totalCart}>
          המשך
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Products;
