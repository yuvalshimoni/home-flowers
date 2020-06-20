import React from 'react';
import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';
import { FlexCenter } from 'shared/components';

const Wrapper = styled(FlexCenter)`
  background-color: #efefef;
  height: 120px;
`;

const Link = styled(BaseLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Link to="/terms">תקנון האתר</Link>
    </Wrapper>
  );
};

export default Footer;
