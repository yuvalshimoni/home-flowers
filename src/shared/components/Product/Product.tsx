import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useEffectOnUpdate } from 'shared/hooks';
import { ProductType } from './types'

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
}

interface ProductProps extends ProductType {
  initialAmount?: number;
  onChange: ({ productId, amount }: onChangeProps) => void;
}

const Product = ({ id, title, price, initialAmount = 0, onChange }: ProductProps) => {
  const [amount, setAmount] = useState<number>(initialAmount);

  const onIncrease = useCallback(
    () => {
      setAmount(prev => prev + 1);
    },
    [],
  );

  const onDecrease = useCallback(
    () => {
      setAmount(prev => prev < 1 ? 0 : prev - 1);
    },
    [],
  );

  useEffectOnUpdate(() => {
    onChange({ productId: id, amount: amount })
  }, [amount])

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

export default Product;