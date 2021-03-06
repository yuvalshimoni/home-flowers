import React, { useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TotalCart } from 'shared/components';
import { SubTitle, TextPrimary, NormalText } from 'shared/components';
import { useAppState } from 'shared/hooks';
import { CartItem, OrderDetails } from 'App/state/types';
import RowItem from './RowItem';
import { Flex } from '../FlexHelper';
import { useProductsQuery } from 'shared/graphql';
import { getTotalCart } from 'shared/utils';

const Wrapper = styled.div<{ small?: boolean }>`
  display: flex;
  flex: 1;
  padding: 30px 40px;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 4px 10px #0000001f;
  background: #fcfcfc 0% 0% no-repeat padding-box;

  ${({ small }) =>
    small &&
    css`
      padding: 5px 15px;
      margin-bottom: 20px;
    `}

  @media (max-width: 500px) {
    padding: 25px 20px;
  }
`;

const TargetWrapper = styled.div`
  margin-top: 15px;
`;

const ItemsWrapper = styled.div<{ small?: boolean }>`
  margin-top: 25px;
  margin-bottom: 40px;

  margin: ${({ small }) => small && '5px'};

  > div {
    border-bottom: 1px solid #ccc;
  }
`;

const TotalWrapper = styled(Flex)`
  justify-content: flex-end;
`;

type CartTableProps = {
  cart: Array<CartItem>;
  cityName: OrderDetails['cityName'];
  dateText: OrderDetails['dateText'];
  totalCart?: number;
  editable?: boolean;
  small?: boolean;
};

const CartTable = ({
  cart,
  cityName,
  dateText,
  small = false,
  editable = true,
}: CartTableProps): JSX.Element | null => {
  const { data } = useProductsQuery();

  const { cartDispatch } = useAppState();

  const removeProduct = useCallback(
    (productId) => {
      cartDispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { productId } });
    },
    [cartDispatch],
  );

  const products = data?.products;

  const totalCart = useMemo<number>(() => getTotalCart(cart), [cart]);

  if (!products) {
    return null;
  }

  return (
    <Wrapper small={small}>
      {!small && (
        <>
          <SubTitle>פרוט הזמנה</SubTitle>

          <TargetWrapper>
            <NormalText>{cityName}</NormalText>
            <TextPrimary>{`חלוקה בתאריך: ${dateText}`}</TextPrimary>
          </TargetWrapper>
        </>
      )}

      <ItemsWrapper small={small}>
        {cart?.length &&
          products &&
          cart.map(({ productId, quantity, price }) => {
            const item = products.find((p) => p?.id === productId);

            if (!item) return null;

            return (
              <RowItem
                small={small}
                key={productId}
                item={{ id: item.id, title: item.title, url: item.image?.url }}
                quantity={quantity}
                price={price}
                removeProduct={editable ? removeProduct : undefined}
              />
            );
          })}
      </ItemsWrapper>

      {!small && (
        <TotalWrapper>
          <TotalCart value={totalCart} />
        </TotalWrapper>
      )}
    </Wrapper>
  );
};

export default CartTable;
