import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useEffectOnUpdate } from 'shared/hooks';
import { ProductType } from './types';
import { useAppState } from 'shared/hooks';

const Wrapper = styled.div``;

const Image = styled.img`
  width: 80%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
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

interface ProductProps extends ProductType {
  initialAmount?: number;
}

const Product = ({ id, title, price, initialAmount = 0, image }: ProductProps): JSX.Element => {
  const { cartDispatch } = useAppState();
  const [amount, setAmount] = useState<number>(initialAmount);

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
