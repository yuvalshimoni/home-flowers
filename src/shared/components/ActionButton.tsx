import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';

const ActionButton = ({ type, disabled, onClick, children }: ButtonProps): JSX.Element => {
  return (
    <Button style={{ color: '#fff' }} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
