import React, { useMemo, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';
import { Product, TotalCart, ProductType, Button, MainTitle, HeadPage } from 'shared/components';
import SelectTarget from './SelectTarget';
import { useProcustsQuery } from 'shared/graphql';

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

const Products = (): JSX.Element => {
  const { data, loading } = useProcustsQuery();

  const history = useHistory();
  const {
    totalCart,
    costumerDetails: { target },
  } = useAppState();

  const isTargetSelected = useMemo(() => !!target?.name, [target?.name]);
  const [displaySelectTarget, setDisplaySelectTarget] = useState<boolean>(isTargetSelected);

  const handleOnClick = useCallback(async () => {
    if (isTargetSelected) {
      setTimeout(() => {
        history.push('/details');
      }, 1500);
    } else {
      await window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        setDisplaySelectTarget(true);
      }, 100);
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
          {data?.products?.map((item) => {
            const { id, title, price, image } = item!;
            return <Product key={id} id={id} title={title} price={price} url={image?.url!} />;
          })}
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
