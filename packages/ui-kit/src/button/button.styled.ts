import { styled } from '@linaria/react';
import { ButtonSize, ButtonColor } from './types';
import { tokens } from '@fedorovskyi/theme';

const variantSize: Record<
  ButtonSize,
  {
    padding: string;
    minHeight: string;
    borderRadius: string;
    fontSize: string;
    lineHeight: string;
    fontWeight: string;
  }
> = {
  XS: {
    padding: '0 0.75rem',
    minHeight: '1.5rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    fontWeight: '500',
  },
  S: {
    padding: '0 0.75rem',
    minHeight: '1.75rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.75rem',
    lineHeight: '1.75rem',
    fontWeight: '600',
  },
  M: {
    padding: '0 1rem',
    minHeight: '2rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.8rem',
    lineHeight: '2rem',
    fontWeight: '600',
  },
  L: {
    padding: '0 1.25rem',
    minHeight: '2rem',
    borderRadius: tokens.borderRadius.M,
    fontSize: '0.9rem',
    lineHeight: '2rem',
    fontWeight: '600',
  },
  XL: {
    padding: '0 1.25rem',
    minHeight: '2.5rem',
    borderRadius: tokens.borderRadius.L,
    fontSize: '1rem',
    lineHeight: '2.5rem',
    fontWeight: '600',
  },
  XXL: {
    padding: '0 1.25rem',
    minHeight: '3rem',
    borderRadius: tokens.borderRadius.L,
    fontSize: '1.3rem',
    lineHeight: '3rem',
    fontWeight: '600',
  },
};

const variantColor: Record<
  ButtonColor,
  {
    normal: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    hover: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    focus: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    active: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
    disabled: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
      icon: string;
    };
  }
> = {
  primary: {
    normal: {
      color: tokens.components.buttons.primary.normal.text,
      backgroundColor: tokens.components.buttons.primary.normal.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.normal.backgroundImage,
      icon: tokens.components.buttons.primary.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
      icon: tokens.components.buttons.primary.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
      icon: tokens.components.buttons.primary.hover.icon,
    },
    active: {
      color: tokens.components.buttons.primary.active.text,
      backgroundColor: tokens.components.buttons.primary.active.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.active.backgroundImage,
      icon: tokens.components.buttons.primary.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.primary.disabled.text,
      backgroundColor:
        tokens.components.buttons.primary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.primary.disabled.backgroundImage,
      icon: tokens.components.buttons.primary.disabled.icon,
    },
  },
  secondary: {
    normal: {
      color: tokens.components.buttons.secondary.normal.text,
      backgroundColor:
        tokens.components.buttons.secondary.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.normal.backgroundImage,
      icon: tokens.components.buttons.secondary.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
      icon: tokens.components.buttons.secondary.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
      icon: tokens.components.buttons.secondary.hover.icon,
    },
    active: {
      color: tokens.components.buttons.secondary.active.text,
      backgroundColor:
        tokens.components.buttons.secondary.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.active.backgroundImage,
      icon: tokens.components.buttons.secondary.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.secondary.disabled.text,
      backgroundColor:
        tokens.components.buttons.secondary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.disabled.backgroundImage,
      icon: tokens.components.buttons.secondary.disabled.icon,
    },
  },
  system_regular: {
    normal: {
      color: tokens.components.buttons.system_regular.normal.text,
      backgroundColor:
        tokens.components.buttons.system_regular.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.normal.backgroundImage,
      icon: tokens.components.buttons.system_regular.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
      icon: tokens.components.buttons.system_regular.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
      icon: tokens.components.buttons.system_regular.hover.icon,
    },
    active: {
      color: tokens.components.buttons.system_regular.active.text,
      backgroundColor:
        tokens.components.buttons.system_regular.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.active.backgroundImage,
      icon: tokens.components.buttons.system_regular.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.system_regular.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_regular.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.disabled.backgroundImage,
      icon: tokens.components.buttons.system_regular.disabled.icon,
    },
  },
  system_light: {
    normal: {
      color: tokens.components.buttons.system_light.normal.text,
      backgroundColor:
        tokens.components.buttons.system_light.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.normal.backgroundImage,
      icon: tokens.components.buttons.system_light.normal.icon,
    },
    hover: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
      icon: tokens.components.buttons.system_light.hover.icon,
    },
    focus: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
      icon: tokens.components.buttons.system_light.hover.icon,
    },
    active: {
      color: tokens.components.buttons.system_light.active.text,
      backgroundColor:
        tokens.components.buttons.system_light.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.active.backgroundImage,
      icon: tokens.components.buttons.system_light.active.icon,
    },
    disabled: {
      color: tokens.components.buttons.system_light.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_light.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.disabled.backgroundImage,
      icon: tokens.components.buttons.system_light.disabled.icon,
    },
  },
};

interface StyledButtonProps {
  $size: ButtonSize;
  $color: ButtonColor;
  $shadow?: boolean;
  $fluid?: boolean;
  disabled?: boolean;
}

const buttonStyleGetters: Record<string, (props: StyledButtonProps) => string> =
  {
    padding: function getPadding({ $size, $fluid }) {
      return $fluid ? '0' : variantSize[$size].padding;
    },
    minHeight: function getMinHeight({ $size }) {
      return variantSize[$size].minHeight;
    },
    borderRadius: function getBorderRadius({ $size }) {
      return variantSize[$size].borderRadius;
    },
    boxShadow: function getBoxShadow({ $shadow }) {
      return $shadow ? '0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.3)' : 'none';
    },
    minWidth: function getMinWidth({ $fluid }) {
      return $fluid ? '100%' : 'auto';
    },
    color: function getColor({ $color }) {
      return variantColor[$color].normal.color;
    },
    backgroundColor: function getBackgroundColor({ $color }) {
      return variantColor[$color].normal.backgroundColor;
    },
    backgroundImage: function getBackgroundImage({ $color }) {
      return variantColor[$color].normal.backgroundImage;
    },
    fill: function getSvgFill({ $color }) {
      return variantColor[$color].normal.icon;
    },
  };

const buttonHoverStyleGetters: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color: function getColor({ $color }) {
    return variantColor[$color].hover.color;
  },
  backgroundColor: function getBackgroundColor({ $color }) {
    return variantColor[$color].hover.backgroundColor;
  },
  backgroundImage: function getBackgroundImage({ $color }) {
    return variantColor[$color].hover.backgroundImage;
  },
  fill: function getSvgFill({ $color }) {
    return variantColor[$color].hover.icon;
  },
};

const buttonFocusStyleGetters: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color: function getColor({ $color }) {
    return variantColor[$color].focus.color;
  },
  backgroundColor: function getBackgroundColor({ $color }) {
    return variantColor[$color].focus.backgroundColor;
  },
  backgroundImage: function getBackgroundImage({ $color }) {
    return variantColor[$color].focus.backgroundImage;
  },
  fill: function getSvgFill({ $color }) {
    return variantColor[$color].focus.icon;
  },
};

const buttonActiveStyleGetters: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color: function getColor({ $color }) {
    return variantColor[$color].active.color;
  },
  backgroundColor: function getBackgroundColor({ $color }) {
    return variantColor[$color].active.backgroundColor;
  },
  backgroundImage: function getBackgroundImage({ $color }) {
    return variantColor[$color].active.backgroundImage;
  },
  fill: function getSvgFill({ $color }) {
    return variantColor[$color].active.icon;
  },
};

const buttonDisabledStyleGetters: Record<
  string,
  (props: StyledButtonProps) => string
> = {
  color: function getColor({ $color }) {
    return variantColor[$color].disabled.color;
  },
  backgroundColor: function getBackgroundColor({ $color }) {
    return variantColor[$color].disabled.backgroundColor;
  },
  backgroundImage: function getBackgroundImage({ $color }) {
    return variantColor[$color].disabled.backgroundImage;
  },
  fill: function getSvgFill({ $color }) {
    return variantColor[$color].disabled.icon;
  },
};

export const Button = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;

  border-radius: ${buttonStyleGetters.borderRadius};
  padding: ${buttonStyleGetters.padding};
  min-height: ${buttonStyleGetters.minHeight};
  box-shadow: ${buttonStyleGetters.boxShadow};
  min-width: ${buttonStyleGetters.minWidth};
  color: ${buttonStyleGetters.color};
  background-color: ${buttonStyleGetters.backgroundColor};
  background-image: ${buttonStyleGetters.backgroundImage};

  & svg path,
  & svg circle {
    fill: ${buttonStyleGetters.fill};
  }

  &:hover {
    color: ${buttonHoverStyleGetters.color};
    background-color: ${buttonHoverStyleGetters.backgroundColor};
    background-image: ${buttonHoverStyleGetters.backgroundImage};
  }

  &:focus {
    color: ${buttonFocusStyleGetters.color};
    background-color: ${buttonFocusStyleGetters.backgroundColor};
    background-image: ${buttonFocusStyleGetters.backgroundImage};
  }

  &:active {
    color: ${buttonActiveStyleGetters.color};
    background-color: ${buttonActiveStyleGetters.backgroundColor};
    background-image: ${buttonActiveStyleGetters.backgroundImage};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${buttonDisabledStyleGetters.color};
    background-color: ${buttonDisabledStyleGetters.backgroundColor};
    background-image: ${buttonDisabledStyleGetters.backgroundImage};
  }
`;

export const TextContent = styled.div<{
  $size: ButtonSize;
}>`
  font-size: ${({ $size }) => variantSize[$size].fontSize};
  line-height: ${({ $size }) => variantSize[$size].lineHeight};
  font-weight: ${({ $size }) => variantSize[$size].fontWeight};
`;

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  width: 1rem;
  height: auto;

  & svg {
    width: 100%;
    height: auto;
  }
`;
