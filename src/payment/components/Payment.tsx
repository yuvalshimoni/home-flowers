import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { HeadPage, MainTitle } from 'shared/components';
import { useParams } from 'react-router-dom';
import { useGetOrderQuery } from '../graphql/order.generated';
import { getToken, getIframeUrl } from 'shared/services/greeninvoice';

const Wrapper = styled.div``;

const Payment = (): JSX.Element => {
  const { id } = useParams();
  const { data, loading } = useGetOrderQuery({
    variables: {
      id,
    },
  });

  const getPaymentUrl = useCallback(async () => {
    const token = await getToken();

    const order = data?.order;
    if (!order?.total) return false;

    const { name, total, phone, city, orderproducts } = order;

    const iframeUrl = await getIframeUrl({
      token,
      orderId: id,
      amount: total,
      name,
      phone,
      cityName: city?.name,
      cart: orderproducts,
    });

    window.location = iframeUrl;
  }, [data?.order]);

  useEffect(() => {
    getPaymentUrl();
  }, [getPaymentUrl]);

  return (
    <Wrapper>
      <HeadPage small>
        <MainTitle>תשלום</MainTitle>
      </HeadPage>

      <span>כמה שניות ועוברים לתשלום...</span>
    </Wrapper>
  );
};

export default Payment;
