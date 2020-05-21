import styled, { css } from 'styled-components';
import { FlexRow, FlexColumn, Flex } from './FlexHelper';

const MainTitle = styled.h1`
  margin: 0;
  font-weight: 200;
  font-size: ${({ theme }) => theme.sizes.huge}px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.sizes.big}px;
  }
`;

const SubTitle = styled.h2`
  margin: 0;
  font-weight: 100;
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

const HeadPage = styled(FlexColumn)<{ small?: boolean }>`
  height: 160px;
  margin-bottom: 15px;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 500px) {
    height: ${({ small }) => (small ? 140 : 200)}px;
  }
`;

export { MainTitle, SubTitle, TextPrimary, NormalText, HeadPage };
