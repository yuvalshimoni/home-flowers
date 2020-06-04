import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { HeadPage, CartTable, SubTitle, FlexColumn } from 'shared/components';

const Wrapper = styled.div``;

const TextWrapper = styled(FlexColumn)`
  margin-bottom: 35px;
`;

const Summary = (): JSX.Element => {
  const { id } = useParams();

  return (
    <Wrapper>
      <HeadPage>
        <TextWrapper>
          <SubTitle>{`הזמנתך התקבלה בהצלחה`},</SubTitle>
          <SubTitle>{`נתראה בחמישי הקרוב...`}</SubTitle>
        </TextWrapper>
      </HeadPage>

      <CartTable id={id} editable={false} />
    </Wrapper>
  );
};

export default Summary;
