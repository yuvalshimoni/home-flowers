import React from 'react';
import styled from 'styled-components';
import { ProductType, SubTitle, FlexRow } from 'shared/components';
import { useAppState } from 'shared/hooks';

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
  padding: 20px 40px;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 4px 10px #0000001f;
  background: #fcfcfc 0% 0% no-repeat padding-box;
`;

const ItemsWrapper = styled.div`
  margin-top: 25px;
`;

const RowWrapper = styled(FlexRow)``;

const Image = styled.img`
  display: block;
  width: 80%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
`;

type RowProps = {
  item?: ProductType;
  amount: number;
};

const Row = ({ item, amount }: RowProps) => <RowWrapper>{item?.title}</RowWrapper>;

const CartTable = (): JSX.Element => {
  const { cart } = useAppState();

  return (
    <Wrapper>
      <SubTitle>פירוט ההזמנה</SubTitle>

      <ItemsWrapper>
        {cart?.length &&
          cart.map(({ productId, amount }) => (
            <Row key={productId} item={products.find((p) => p.id === productId)} amount={amount} />
          ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default CartTable;
