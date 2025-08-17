import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

const Title = styled.h1`
  color: ${tokens.colors.textNeutral100};
  background-color: ${tokens.colors.neutral100};
`;

export const InternalCard = () => {
  return (
    <div>
      <Title>Internal Card</Title>
    </div>
  );
};
