import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useEffectOnUpdate } from 'shared/hooks';
import { useAppState } from 'shared/hooks';
import { NormalText } from '../Typography';
import { FlexRowSpaceBetween, FlexRow } from '../FlexHelper';
import * as Types from 'graphql/types.generated';

const Wrapper = styled.div`
  @media (max-width: 500px) {
    padding-bottom: 15px;
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

const Quantity = styled(NormalText)`
  margin: 0 7px;
`;

const Price = styled(NormalText)``;

const BottomArea = styled(FlexRowSpaceBetween)`
  padding: 0px 15px;
  align-items: flex-end;
`;

const ButtonsWrapper = styled(FlexRow)``;

const Button = styled.div`
  width: 30px;
  height: 20px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

type ProductProps = {
  id: Types.Product['id'];
  title: Types.Product['title'];
  price: Types.Product['price'];
  url?: Types.UploadFile['url'];
};

const Product = ({ id, title, price, url }: ProductProps): JSX.Element => {
  const { cart, cartDispatch } = useAppState();
  const [quantity, setQuantity] = useState<number>(
    () => cart.find((i) => i.productId === id)?.quantity || 0,
  );

  const onIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const onDecrease = useCallback(() => {
    setQuantity((prev) => (prev < 1 ? 0 : prev - 1));
  }, []);

  useEffectOnUpdate(() => {
    if (quantity > 0) {
      cartDispatch({
        type: 'UPDATE_CART_ITEM',
        payload: {
          productId: id,
          quantity,
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
  }, [quantity]);

  return (
    <Wrapper>
      {url && <Image src={process.env.REACT_APP_STRAPI_URL + url} />}

      <BottomArea>
        <div>
          <Title>{title}</Title>
          <Price>{`${price} ש"ח`} </Price>
        </div>

        <ButtonsWrapper>
          <Button onClick={onIncrease}>+</Button>
          <Quantity>{quantity}</Quantity>
          <Button onClick={onDecrease}>-</Button>
        </ButtonsWrapper>
      </BottomArea>
    </Wrapper>
  );
};

export default React.memo(Product);
