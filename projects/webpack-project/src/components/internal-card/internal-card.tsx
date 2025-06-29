import * as React from 'react';
import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

const Title = styled.h1`
  color: ${tokens.colors.textNeutral100};
  background-color: ${tokens.colors.neutral100};
`;

const commonStyles = `
  background-color: #ccc;
`;

const Card = styled.div<{ color?: 'red' | 'green' | 'blue' }>`
  ${commonStyles};
  border-width: 5px;
  border-style: solid;

  border-color: ${({ color }) => {
    switch (color) {
      case 'red':
        return `#f00`;
      case 'green':
        return `#0f0`;
      case 'blue':
        return `#00f`;
      default:
        return `#000`;
    }
  }};
`;

export const InternalCard = () => {
  return (
    <Card color="red">
      <Title>Internal Card</Title>
    </Card>
  );
};
