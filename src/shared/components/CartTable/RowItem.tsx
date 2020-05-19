import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ProductType, FlexRowSpaceBetween } from 'shared/components';

const RowWrapper = styled(FlexRowSpaceBetween)`
  height: 160px;
  align-items: center;
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
  width: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.error};
`;

type RowProps = {
  item: ProductType;
  amount: number;
  price: number;
  removeProduct?: (productId: ProductType['id']) => void;
};

const RowItem = ({
  item: { id, image, title },
  price,
  amount,
  removeProduct,
}: RowProps): JSX.Element => {
  const handleOnClick = useCallback(() => {
    removeProduct?.(id);
  }, []);

  return (
    <RowWrapper>
      <Image src={image} />
      <Name>{title}</Name>
      <Text>כמות: {amount} </Text>
      <Text>{price * amount} ש"ח</Text>
      {removeProduct && <RemoveButton onClick={handleOnClick}>X</RemoveButton>}
    </RowWrapper>
  );
};

export default RowItem;
