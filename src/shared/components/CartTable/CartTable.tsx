import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { TotalCart } from 'shared/components';
import { useHistory } from 'react-router-dom';
import { ProductType, SubTitle, TextPrimary, NormalText } from 'shared/components';
import { useAppState } from 'shared/hooks';
import RowItem from './RowItem';
import { Flex } from '../FlexHelper';

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
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
  {
    id: '324dfgfdg',
    title: 'פריחת קיץ',
    price: 25,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
  {
    id: '324dfgfsdfdg',
    title: 'פריחת קיץ',
    price: 35,
    image: 'http://174.138.32.210/uploads/flowers-1_ceaac651ef.png',
  },
];

const Wrapper = styled.div`
  display: flex;
  padding: 30px 40px;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 4px 10px #0000001f;
  background: #fcfcfc 0% 0% no-repeat padding-box;
`;

const TargetWrapper = styled.div`
  margin-top: 15px;
`;

const ItemsWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 40px;

  > div {
    border-bottom: 1px solid #ccc;
  }
`;

const TotalWrapper = styled(Flex)`
  justify-content: flex-end;
`;

const CartTable = (): JSX.Element => {
  const history = useHistory();
  const {
    cart,
    totalCart,
    cartDispatch,
    costumerDetails: { target },
  } = useAppState();

  useEffect(() => {
    if (!totalCart) {
      history.push('/');
    }
  }, [totalCart, history]);

  const removeProduct = useCallback(
    (productId) => {
      cartDispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { productId } });
    },
    [cartDispatch],
  );

  return (
    <Wrapper>
      <SubTitle>פרוט הזמנה</SubTitle>

      <TargetWrapper>
        <NormalText>{target?.name}</NormalText>
        <TextPrimary>חלוקה בתאריך 23.3.20 בשעה 20:00</TextPrimary>
      </TargetWrapper>

      <ItemsWrapper>
        {cart?.length &&
          cart.map(({ productId, amount, price }) => (
            <RowItem
              key={productId}
              item={products.find((p) => p.id === productId)!}
              amount={amount}
              price={price}
              removeProduct={removeProduct}
            />
          ))}
      </ItemsWrapper>

      <TotalWrapper>
        <TotalCart />
      </TotalWrapper>
    </Wrapper>
  );
};

export default CartTable;
