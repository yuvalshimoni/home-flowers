import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { HeadPage, CartTable, SubTitle, FlexColumn } from 'shared/components';
import { useOrderSummaryQuery } from '../graphql/summary.generated';
import format from 'date-fns/format';
import * as Types from 'graphql/types.generated';

const Wrapper = styled.div``;

const TextWrapper = styled(FlexColumn)`
  margin-bottom: 35px;
`;

type OrderItem = {
  product: Types.Orderproduct['product'];
  price: Types.Orderproduct['price'];
  quantity: Types.Orderproduct['quantity'];
};

interface FormatDataToCartProps {
  city: Types.City;
  delivery_date: Types.Order['delivery_date'];
  orderproducts: Array<OrderItem>;
}

const formatDataToCart = ({ city, delivery_date, orderproducts }: FormatDataToCartProps) => ({
  cityName: city!.name,
  dateText: format(new Date(delivery_date!.deliveryDate), 'd.M.Y'),
  cart: orderproducts!.map(({ product, price, quantity }) => ({
    price,
    quantity,
    productId: product!.id,
  })),
});

const Summary = (): JSX.Element => {
  const { id } = useParams();

  const { data, loading } = useOrderSummaryQuery({
    variables: {
      id,
    },
  });

  const cartTable = data?.order ? formatDataToCart(data!.order) : {};

  return (
    <Wrapper>
      <HeadPage>
        <TextWrapper>
          <SubTitle>{`הזמנתך התקבלה בהצלחה`},</SubTitle>
        </TextWrapper>
      </HeadPage>

      {!loading && <CartTable {...cartTable} editable={false} />}
    </Wrapper>
  );
};

export default Summary;
