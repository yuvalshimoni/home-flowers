import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FlexRowSpaceBetween } from 'shared/components';
import * as Types from 'graphql/types.generated';

const RowWrapper = styled(FlexRowSpaceBetween)<{ small?: boolean }>`
  padding: 35px 0px;
  align-items: center;
  flex-wrap: wrap;
  padding: ${({ small }) => (small ? '5px 0px' : '35px 0px')};
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

const Image = styled.img<{ small?: boolean }>`
  display: block;
  width: ${({ small }) => (small ? 35 : 126)}px;
  height: ${({ small }) => (small ? 35 : 126)}px;
  object-fit: contain;

  @media (max-width: 500px) {
    width: 85%;
    height: ${({ small }) => (small ? 35 : 150)}px;
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
  small?: boolean;
  removeProduct?: (productId: Types.Product['id']) => void;
};

const RowItem = ({
  item: { id, title, url },
  price,
  quantity,
  removeProduct,
  small = false,
}: RowProps): JSX.Element => {
  const handleOnClick = useCallback(() => {
    removeProduct?.(id);
  }, [id, removeProduct]);

  return (
    <RowWrapper small={small}>
      {url && <Image src={'https://admin.homeflowers.co.il' + url} small={small} />}
      <Name>{title}</Name>
      <Text>כמות: {quantity} </Text>
      <Text>{price * quantity} ש"ח</Text>
      {removeProduct && <RemoveButton onClick={handleOnClick}>X</RemoveButton>}
    </RowWrapper>
  );
};

export default RowItem;
