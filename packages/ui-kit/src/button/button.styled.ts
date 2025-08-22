import { styled } from '@linaria/react';
import { ButtonSize, ButtonColor } from './types';
import { tokens } from '@fedorovskyi/theme';

const variantSize: Record<
  ButtonSize,
  {
    padding: string;
    minHeight: string;
    borderRadius: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  }
> = {
  XS: {
    padding: '0 0.75rem',
    minHeight: '1.5rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    fontWeight: '500',
  },
  S: {
    padding: '0 0.75rem',
    minHeight: '1.75rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.75rem',
    lineHeight: '1.75rem',
    fontWeight: '600',
  },
  M: {
    padding: '0 1rem',
    minHeight: '2rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.8rem',
    lineHeight: '2rem',
    fontWeight: '600',
  },
  L: {
    padding: '0 1.25rem',
    minHeight: '2rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.9rem',
    lineHeight: '2rem',
    fontWeight: '600',
  },
  XL: {
    padding: '0 1.25rem',
    minHeight: '2.5rem',
    borderRadius: tokens.borderRadius.L,
    fontSize: '1rem',
    lineHeight: '2.5rem',
    fontWeight: '600',
  },
  XXL: {
    padding: '0 1.25rem',
    minHeight: '3rem',
    borderRadius: tokens.borderRadius.L,
    fontSize: '1.3rem',
    lineHeight: '3rem',
    fontWeight: '600',
  },
};

const getPadding = ($size: ButtonSize, $fluid?: boolean) => {
  if ($fluid) {
    return '0';
  }
  return variantSize[$size].padding;
};

export const Button = styled.button<{
  $size: ButtonSize;
  $color?: ButtonColor;
  $shadow?: boolean;
  $fluid?: boolean;
  disabled?: boolean;
}>`
  border: none;
  cursor: pointer;
  position: relative;

  border-radius: ${({ $size }) => variantSize[$size].borderRadius};
  padding: ${({ $size, $fluid }) => getPadding($size, $fluid)};
  min-height: ${({ $size }) => variantSize[$size].minHeight};

  box-shadow: ${({ $shadow }) =>
    $shadow ? '0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.3)' : 'none'};

  width: ${({ $fluid }) => ($fluid ? '100%' : 'auto')};
`;

export const TextContent = styled.div<{
  $size: ButtonSize;
}>`
  font-size: ${({ $size }) => variantSize[$size].fontSize};
  line-height: ${({ $size }) => variantSize[$size].lineHeight};
  font-weight: ${({ $size }) => variantSize[$size].fontWeight};
`;
