import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useEffectOnUpdate } from 'shared/hooks';
import { ProductType } from './types';
import { useAppContext } from 'App/context';

const Wrapper = styled.div`
  background-color: #ccc;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.sizes.md}px;
`;

const Price = styled.h5`
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

interface ProductProps extends ProductType {
  initialAmount?: number;
}

const Product = ({ id, title, price, initialAmount = 0 }: ProductProps) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const {
    state: { cartDispatch },
  } = useAppContext();

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
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Price>{amount} :כמות</Price>

      <ButtonsWrapper>
        <Button onClick={onIncrease}>+</Button>
        <Button onClick={onDecrease}>-</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default React.memo(Product);
