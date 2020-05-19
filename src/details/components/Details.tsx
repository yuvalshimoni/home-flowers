import React from 'react';
import styled from 'styled-components';
import { HeadPage as HeadPageBase, MainTitle, CartTable } from 'shared/components';
import DetailsForm from './DetailsForm';

const Wrapper = styled.div``;

const HeadPage = styled(HeadPageBase)`
  margin-bottom: 15px;
  align-items: center;
`;

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
