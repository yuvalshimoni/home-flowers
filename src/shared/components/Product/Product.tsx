import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
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
  id: any;
  amount: number;
}

interface ProductProps extends ProductType {
  onChange: ({ id, amount }: onChangeProps) => void;
}

const Product = ({ id, title, price, onChange }: ProductProps) => {
  const [amount, setAmount] = useState<number>(0);

  const handleOnClick = useCallback(type => {
    let newAmount: number = amount;
    if (type === 'increase') {
      newAmount = amount + 1;
    }

    if (type === 'decrease') {
      newAmount = amount < 1 ? 0 : amount - 1
    }

    setAmount(newAmount);
    onChange({ id, amount: newAmount })
  }, [id, amount]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Price>{price}</Price>
      <Price>{amount} :כמות</Price>

      <ButtonsWrapper>
        <Button onClick={() => handleOnClick('increase')}>+</Button>
        <Button onClick={() => handleOnClick('decrease')}>-</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Product;