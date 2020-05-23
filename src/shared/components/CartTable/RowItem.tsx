import React, { useCallback } from 'react';
import styled from 'styled-components';
import { ProductType, FlexRowSpaceBetween } from 'shared/components';
import * as Types from 'graphql/types.generated';

const RowWrapper = styled(FlexRowSpaceBetween)`
  padding: 35px 0px;
  align-items: center;
  flex-wrap: wrap;
`;

const Name = styled.div`
  font-weight: bold;
  line-height: 32px;
  font-size: ${({ theme }) => theme.sizes.main}px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const Image = styled.img`
  display: block;
  width: 126px;
  height: 126px;
  object-fit: contain;

  @media (max-width: 500px) {
    width: 85%;
    height: 150px;
  }
`;

const RemoveButton = styled.div`
  width: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.error};
`;

type ItemProps = {
  id: Types.Product['id'];
  title: Types.Product['title'];
  url?: Types.UploadFile['url'];
};

type RowProps = {
  item: ItemProps;
  quantity: number;
  price: number;
  removeProduct?: (productId: Types.Product['id']) => void;
};

const RowItem = ({
  item: { id, title, url },
  price,
  quantity,
  removeProduct,
}: RowProps): JSX.Element => {
  const handleOnClick = useCallback(() => {
    removeProduct?.(id);
  }, [id, removeProduct]);

  return (
    <RowWrapper>
      {url && <Image src={process.env.REACT_APP_STRAPI_URL + url} />}
      <Name>{title}</Name>
      <Text>כמות: {quantity} </Text>
      <Text>{price * quantity} ש"ח</Text>
      {removeProduct && <RemoveButton onClick={handleOnClick}>X</RemoveButton>}
    </RowWrapper>
  );
};

export default RowItem;
