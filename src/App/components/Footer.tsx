import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from 'shared/components';

const Wrapper = styled(FlexCenter)`
  background-color: #efefef;
  height: 120px;
`;

const Link = styled.a`
  font-weight: bold;
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Link href="/terms">תקנון האתר</Link>
    </Wrapper>
  );
};

export default Footer;
