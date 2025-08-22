import * as React from 'react';
import { ButtonSize, ButtonColor } from './types';
import * as Styled from './button.styled';

export interface ButtonProps extends React.PropsWithChildren {
  icon?: React.FC;
  size?: ButtonSize;
  color?: ButtonColor;
  shadow?: boolean;
  disabled?: boolean;
  fluid?: boolean;
}

export const Button = ({
  icon: Icon = undefined,
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
      {Icon && (
        <Styled.IconContent>
          <Icon />
        </Styled.IconContent>
      )}
      <Styled.TextContent $size={size}>{children}</Styled.TextContent>
    </Styled.Button>
  );
};
