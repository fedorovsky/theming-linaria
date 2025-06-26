import * as React from 'react';
import { styled } from '@linaria/react';

import { tokens } from '@fedorovskyi/theme';

const Card = styled.div<{ color: string }>`
  font-size: 24px;
  //color: ${(props) =>  props.color};
  color: ${tokens.colors.textNeutral100};
  background-color: ${tokens.colors.neutral100};
`;

export const LinariaCard = () => {
  console.log('tokens:', tokens);

  return (
    <Card color="red">
      <h2>Card Title</h2>
      <p>This is a simple card component.</p>
    </Card>
  );
};
