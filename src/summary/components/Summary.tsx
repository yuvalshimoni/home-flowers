import React from 'react';
import styled from 'styled-components';
import { HeadPage, CartTable, SubTitle, FlexColumn } from 'shared/components';

const Wrapper = styled.div``;

const TextWrapper = styled(FlexColumn)`
  margin-bottom: 35px;
`;

const Summary = (): JSX.Element => {
  return (
    <Wrapper>
      <HeadPage>
        <TextWrapper>
          <SubTitle>{`הזמנתך התקבלה בהצלחה`},</SubTitle>
          <SubTitle>{`נתראה בחמישי הקרוב...`}</SubTitle>
        </TextWrapper>
      </HeadPage>

      <CartTable editable={false} />
    </Wrapper>
  );
};

export default Summary;
