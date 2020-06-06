import React, { useEffect } from 'react';
import styled from 'styled-components';
import { HeadPage as HeadPageBase, MainTitle, CartTable } from 'shared/components';
import { useAppState } from 'shared/hooks';
import DetailsForm from './DetailsForm';

const Wrapper = styled.div``;

const HeadPage = styled(HeadPageBase)`
  margin-bottom: 20px;
`;

const Details = (): JSX.Element => {
  const {
    cart,
    orderDetails: { cityName, dateText },
  } = useAppState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <Wrapper>
      <HeadPage small>
        <MainTitle>סיום הזמנה</MainTitle>
      </HeadPage>

      <DetailsForm />

      <CartTable cart={cart} cityName={cityName} dateText={dateText} />
    </Wrapper>
  );
};

export default Details;
