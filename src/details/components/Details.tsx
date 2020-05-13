import React from 'react';
import styled from 'styled-components';
import { MainTitle } from 'shared/components';
import DetailsForm from './DetailsForm';
import CartTable from './CartTable';

const Wrapper = styled.div``;

const Details = (): JSX.Element => (
  <Wrapper>
    <MainTitle>סיום הזמנה</MainTitle>

    <DetailsForm />

    <CartTable />
  </Wrapper>
);

export default Details;
