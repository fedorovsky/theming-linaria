import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

export const Wrapper = styled.div`
  border: 1px solid ${tokens.colors.primary100};
  border-radius: ${tokens.borderRadius.L};
  padding: 10px;
  max-width: 300px;
  background-color: ${tokens.colors.neutral100};
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${tokens.colors.textNeutral100};
`;