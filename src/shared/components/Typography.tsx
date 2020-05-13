import styled, { css } from 'styled-components';

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xxl}px;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

export { MainTitle, SubTitle };
