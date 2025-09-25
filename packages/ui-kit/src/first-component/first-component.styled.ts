import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';
import { type ConditionalProps } from './first-component';

const wrapperStyleRules: Record<string, (props: ConditionalProps) => string> = {
  padding: function getPadding({ size = 'small', fluid = false }) {
    const map = {
      small: '0 0.75rem',
      medium: '0 1rem',
      large: '0 2rem',
    } as const;
    if (fluid) {
      return '0';
    }
    return map[size];
  },
  backgroundColor: function getBackgroundColor({ color = 'primary' }) {
    const map = {
      primary: '#DC3545',
      secondary: '#17A2B8',
    } as const;
    return map[color];
  },
};

export const Wrapper = styled.div<ConditionalProps>`
  border: 1px solid ${tokens.colors.primary100};
  border-radius: ${tokens.borderRadius.L};
  max-width: 300px;
  background-color: ${wrapperStyleRules.backgroundColor};
  padding: ${wrapperStyleRules.padding};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${tokens.colors.textNeutral100};
`;
