import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ProductType, SubTitle, FlexRow, FlexRowSpaceBetween } from 'shared/components';
import { useAppState } from 'shared/hooks';
import { type } from 'os';

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

const RowWrapper = styled(FlexRowSpaceBetween)`
  height: 160px;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const Name = styled.div`
  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const Image = styled.img`
  display: block;
  width: 126px;
  height: 126px;
  object-fit: contain;
`;

const RemoveButton = styled.div`
  cursor: pointer;
  width: 30px;
`;

type RowProps = {
  item: ProductType;
  amount: number;
  price: number;
  removeProduct: (productId: ProductType['id']) => void;
};

const Row = ({
  item: { id, image, title },
  price,
  amount,
  removeProduct,
}: RowProps): JSX.Element => (
  <RowWrapper>
    <Image src={image} />
    <Name>{title}</Name>
    <Text>{amount} כמות</Text>
    <Text>{price}</Text>
    <RemoveButton onClick={() => removeProduct(id)}>X</RemoveButton>
  </RowWrapper>
);

const CartTable = (): JSX.Element => {
  const { cart, cartDispatch } = useAppState();

  const removeProduct = useCallback((productId) => {
    cartDispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: { productId } });
  }, []);

  return (
    <Wrapper>
      <SubTitle>פרוט הזמנה</SubTitle>

      <ItemsWrapper>
        {cart?.length &&
          cart.map(({ productId, amount, price }) => (
            <Row
              key={productId}
              item={products.find((p) => p.id === productId)!}
              amount={amount}
              price={price}
              removeProduct={removeProduct}
            />
          ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default CartTable;
