import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';
import { type VariantProps } from './demo';

const wrapperStyleRules: Record<string, (props: VariantProps) => string> = {
  padding({ size = 'small' }) {
    const map = {
      small: '0.75rem',
      medium: '1rem',
      large: '2rem',
    };
    return map[size];
  },
  backgroundColor({ color = 'primary' }) {
    const map = {
      primary: '#DC3545',
      secondary: '#17A2B8',
    };
    return map[color];
  },
  width({ size = 'small', fluid = false }) {
    const map = {
      small: '150px',
      medium: '250px',
      large: '350px',
    };
    if (fluid) {
      return '100%';
    }
    return map[size];
  },
};

export const Wrapper = styled.div<VariantProps>`
  border-radius: ${tokens.borderRadius.L};
  max-width: ${wrapperStyleRules.width};
  background-color: ${wrapperStyleRules.backgroundColor};
  padding: ${wrapperStyleRules.padding};
`;

export const Title = styled.h2`
  margin: 0;
  color: ${tokens.colors.textNeutral100};
`;
