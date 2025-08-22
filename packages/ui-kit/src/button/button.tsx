import * as React from 'react';
import { ButtonSize, ButtonColor } from './types';
import * as Styled from './button.styled';

export interface ButtonProps extends React.PropsWithChildren {
  size?: ButtonSize;
  color?: ButtonColor;
  shadow?: boolean;
  disabled?: boolean;
  fluid?: boolean;
}

export const Button = ({
  size = 'L',
  color = 'system_regular',
  shadow = false,
  fluid = false,
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <Styled.Button
      $size={size}
      $color={color}
      $shadow={shadow}
      $fluid={fluid}
      disabled={disabled}
    >
      <Styled.TextContent $size={size}>{children}</Styled.TextContent>
    </Styled.Button>
  );
};
