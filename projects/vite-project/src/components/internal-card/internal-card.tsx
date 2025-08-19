import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

interface TitleProps {
  $size?: number;
}

const Title = styled.h1<TitleProps>`
  color: ${tokens.colors.textNeutral100};
  background-color: ${tokens.colors.neutral100};
  font-size: ${({ $size }) => $size ? `${$size}px` : '24px'};
`;

export const InternalCard = () => {
  return (
    <div>
      <Title>Internal Card</Title>
    </div>
  );
};
