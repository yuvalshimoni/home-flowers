import styled, { css } from 'styled-components';
import { FlexRow, flexColumn } from './FlexHelper';

const MainTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.sizes.xxl}px;
`;

const SubTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const HeadPage = styled(FlexRow)`
  height: 150px;
  margin-bottom: 15px;
  align-items: flex-end;
  justify-content: space-between;
`;

export { MainTitle, SubTitle, HeadPage };
