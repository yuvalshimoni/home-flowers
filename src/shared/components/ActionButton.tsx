import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button<{ disabled?: boolean }>`
  width: 100%;
  border: none;
  height: 40px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.main}px;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
    `};
`;

interface ActionButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const ActionButton = ({
  type = 'button',
  disabled,
  onClick,
  children,
}: ActionButtonProps): JSX.Element => {
  return (
    <Button style={{ color: '#fff' }} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
