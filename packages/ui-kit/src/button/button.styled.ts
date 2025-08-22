import { styled } from '@linaria/react';
import { ButtonSize, ButtonColor } from './types';
import { tokens } from '@fedorovskyi/theme';

export const Button = styled.button<{
  $size: ButtonSize;
  $color?: ButtonColor;
  $shadow?: boolean;
  $fluid?: boolean;
  disabled?: boolean;
}>``;

export const TextContent = styled.div<{
  $size: ButtonSize;
}>``;
