import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAppState } from 'shared/hooks';
import { HeadPage as HeadPageBase, MainTitle, CartTable } from 'shared/components';
import DetailsForm from './DetailsForm';

const Wrapper = styled.div``;

const HeadPage = styled(HeadPageBase)`
  margin-bottom: 20px;
`;

const Details = (): JSX.Element => {
  const history = useHistory();
  const { totalCart } = useAppState();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!totalCart) {
      history.push('/');
    }
  }, [totalCart, history]);

  return (
    <Wrapper>
      <HeadPage small>
        <MainTitle>סיום הזמנה</MainTitle>
      </HeadPage>

      <DetailsForm />

      <CartTable />
    </Wrapper>
  );
};

export default Details;
