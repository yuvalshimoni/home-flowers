import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useEffectOnUpdate } from 'shared/hooks';
import { ProductType } from './types';
import { useAppState } from 'shared/hooks';

const Wrapper = styled.div`
  @media (max-width: 500px) {
    border-bottom: 1px solid #ccc;
  }
`;

const Image = styled.img`
  display: block;
  width: 80%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;

  @media (max-width: 500px) {
    width: 60%;
  }
`;

const Title = styled.div`
  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const Price = styled.div`
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
`;

type onChangeProps = {
  productId: any;
  amount: number;
  price: number;
};

type ProductProps = ProductType;

const Product = ({ id, title, price, image }: ProductProps): JSX.Element => {
  const { cart, cartDispatch } = useAppState();
  const [amount, setAmount] = useState<number>(
    () => cart.find((i) => i.productId === id)?.amount || 0,
  );

  const onIncrease = useCallback(() => {
    setAmount((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setAmount((prev) => (prev < 1 ? 0 : prev - 1));
  }, []);

  useEffectOnUpdate(() => {
    if (amount > 0) {
      cartDispatch({
        type: 'UPDATE_CART_ITEM',
        payload: {
          productId: id,
          amount,
          price,
        },
      });
    } else {
      cartDispatch({
        type: 'REMOVE_ITEM_FROM_CART',
        payload: {
          productId: id,
        },
      });
    }
  }, [amount]);

  return (
    <Wrapper>
      <Image src={image} />
      <Title>{title}</Title>
      <Price>{`${price} ש"ח`} </Price>
      <Price>{amount} :כמות</Price>

      <ButtonsWrapper>
        <Button onClick={onIncrease}>+</Button>
        <Button onClick={onDecrease}>-</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default React.memo(Product);
