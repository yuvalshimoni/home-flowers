import styled, { css } from 'styled-components';

export const flex = css`
  display: flex;
`;

export const Flex = styled.div`
  ${flex};
`;

export const flexCenter = css`
  ${flex};
  justify-content: center;
  align-items: center;
`;

export const FlexCenter = styled.div`
  ${flexCenter};
`;

export const flexColumn = css`
  ${flex};
  flex-direction: column;
`;

export const FlexColumn = styled.div`
  ${flexColumn};
`;

export const flexColumnCenter = css`
  ${flexColumn};
  justify-content: center;
  align-items: center;
`;

export const FlexColumnCenter = styled.div`
  ${flexColumnCenter};
`;

export const flexRow = css`
  ${flex};
  flex-direction: row;
`;

export const FlexRow = styled.div`
  ${flexRow};
`;

export const FlexRowCenter = styled.div`
  ${flexRow};
  align-items: center;
  justify-content: center;
`;

export const FlexRowSpaceBetween = styled.div`
  ${flexRow};
  align-items: center;
  justify-content: space-between;
`;
