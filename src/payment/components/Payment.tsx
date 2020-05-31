import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { HeadPage, MainTitle, FlexCenter } from 'shared/components';
import { useParams } from 'react-router-dom';
import { useGetOrderQuery } from '../graphql/order.generated';
import { getToken, getIframeUrl } from 'shared/services/greeninvoice';

const Wrapper = styled.div``;

const Iframe = styled(FlexCenter)`
  width: 100%;
`;

const Payment = (): JSX.Element => {
  const { id } = useParams();
  const { data, loading } = useGetOrderQuery({
    variables: {
      id,
    },
  });

  const [url, setUrl] = useState<string>('');

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

    setUrl(iframeUrl);
  }, [data?.order]);

  useEffect(() => {
    getPaymentUrl();
  }, [getPaymentUrl]);

  return (
    <Wrapper>
      <HeadPage small>
        <MainTitle>תשלום</MainTitle>
      </HeadPage>

      <Iframe>
        {loading ? (
          <span>טוען...</span>
        ) : (
          url && <iframe src={url} frameBorder="0" width="100%" height="500px"></iframe>
        )}
      </Iframe>
    </Wrapper>
  );
};

export default Payment;
