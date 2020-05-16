import styled, { css } from 'styled-components';
import { FlexRow } from './FlexHelper';

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xxl}px;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const HeadPage = styled(FlexRow)`
  height: 20vh;
  align-items: center;
  margin-bottom: 15px;
`;

export { MainTitle, SubTitle, HeadPage };
