import styled, { css } from 'styled-components';
import { FlexRow, flexColumn } from './FlexHelper';

const MainTitle = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: ${({ theme }) => theme.sizes.xxl}px;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.sizes.xl}px;
`;

const NormalText = styled.div`
  font-weight: 100;
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const TextPrimary = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.sizes.main}px;
`;

const HeadPage = styled(FlexRow)`
  height: 160px;
  margin-bottom: 15px;
  align-items: flex-end;
  justify-content: space-between;
`;

export { MainTitle, SubTitle, TextPrimary, NormalText, HeadPage };
