import * as React from 'react';
import * as Styled from './first-component.styled';

export interface FirstComponent {
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
  slots = {},
  slotProps = {},
}: FirstComponent) => {
  const { wrapper: Wrapper = Styled.Wrapper, title: Title = Styled.Title } =
    slots;

  const { wrapper: wrapperProps = {}, title: titleProps = {} } = slotProps;

  return (
    <Wrapper {...wrapperProps}>
      <Title {...titleProps}>UI Kit - First Component</Title>
    </Wrapper>
  );
};
