import * as React from 'react';
import * as Styled from './first-component.styled';

export interface VariantProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fluid?: boolean;
}

export interface FirstComponent extends VariantProps {
  slots?: {
    wrapper?: React.ElementType;
    title?: React.ElementType;
  };
  slotProps?: {
    wrapper?: React.HTMLAttributes<HTMLDivElement>;
    title?: React.HTMLAttributes<HTMLHeadingElement>;
  };
}

export const FirstComponent = ({
  color = 'primary',
  size = 'medium',
  fluid = false,
  slots = {},
  slotProps = {},
}: FirstComponent) => {
  const Wrapper = slots.wrapper ?? Styled.Wrapper;
  const Title = slots.title ?? Styled.Title;

  const wrapperProps = slotProps.wrapper ?? {};
  const titleProps = slotProps.title ?? {};

  return (
    <Wrapper {...wrapperProps} color={color} size={size} fluid={fluid}>
      <Title {...titleProps}>{titleProps.children ?? 'Title'}</Title>
    </Wrapper>
  );
};
