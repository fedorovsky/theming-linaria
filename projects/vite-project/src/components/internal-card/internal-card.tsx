import { styled } from '@linaria/react';
import { tokens } from '@fedorovskyi/theme';

type Variant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning';

interface TitleProps {
  $variant?: Variant;
}

const variantStyles: Record<
  Variant,
  { fontSize: string; color: string; background: string }
> = {
  primary: {
    fontSize: '32px',
    color: tokens.colors.textNeutral100,
    background: tokens.colors.neutral100,
  },
  secondary: {
    fontSize: '24px',
    color: '#ffffff',
    background: '#6c757d',
  },
  success: {
    fontSize: '24px',
    color: '#ffffff',
    background: '#28a745',
  },
  danger: {
    fontSize: '24px',
    color: '#ffffff',
    background: '#dc3545',
  },
  warning: {
    fontSize: '24px',
    color: '#212529',
    background: '#ffc107',
  },
};

const Title = styled.h1<TitleProps>`
  font-size: ${({ $variant = 'primary' }) => variantStyles[$variant].fontSize};
  color: ${({ $variant = 'primary' }) => variantStyles[$variant].color};
  background-color: ${({ $variant = 'primary' }) => variantStyles[$variant].background};
`;

export const InternalCard = () => {
  return (
    <div>
      <Title $variant="primary">Primary Title</Title>
      <Title $variant="secondary">Secondary Title</Title>
      <Title $variant="success">Success Title</Title>
      <Title $variant="danger">Danger Title</Title>
      <Title $variant="warning">Warning Title</Title>
    </div>
  );
};
