import React, { useMemo, useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useAppState } from 'shared/hooks';
import { useHistory } from 'react-router-dom';
import { Product, TotalCart, Button, MainTitle, HeadPage } from 'shared/components';
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

const ButtonWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  right: 0;
  left: 0;
  bottom: 5px;
  margin: 0 auto;
  max-width: 1140px;
  transition: opacity, transform, 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${({ visible }) =>
    visible
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(100%);
        `};

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

  const isTargetSelected = useMemo(() => !!target?.cityId, [target?.cityId]);
  const [isClick, setIsClick] = useState<boolean>(isTargetSelected);
  const [displaySelectTarget, setDisplaySelectTarget] = useState<boolean>(isTargetSelected);

  const handleOnClick = useCallback(async () => {
    setIsClick(true);

    if (isTargetSelected) {
      history.push('/details');
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

  useEffect(() => {
    const t = setTimeout(() => {
      setIsClick(false);
    }, 150);

    return () => {
      clearTimeout(t);
    };
  }, []);

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

      <ButtonWrapper visible={!isClick}>
        <Button onClick={handleOnClick} disabled={!totalCart}>
          המשך
        </Button>
      </ButtonWrapper>
    </>
  );
};

export default Products;
