import React from 'react';
import styled from 'styled-components';
import { HeadPage, MainTitle } from 'shared/components';
import DetailsForm from './DetailsForm';
import CartTable from './CartTable';

const Wrapper = styled.div``;

const Details = (): JSX.Element => (
  <Wrapper>
    <HeadPage>
      <MainTitle>סיום הזמנה</MainTitle>
    </HeadPage>

    <DetailsForm />

    <CartTable />
  </Wrapper>
);

export default Details;
