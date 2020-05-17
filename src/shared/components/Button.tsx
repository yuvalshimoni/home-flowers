import React from 'react';
import styled, { css } from 'styled-components';

const BaseButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  border: none;
  height: 40px;
  display: flex;
  cursor: pointer;
  padding: 0px 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.sizes.main}px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: background 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
    `};
`;

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({ type = 'button', disabled, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <BaseButton style={{ color: '#fff' }} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;
