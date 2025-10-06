import { styled } from '@linaria/react';
import { ButtonSize, ButtonColor } from './types';
import { tokens } from '@fedorovskyi/theme';

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

const buttonStyleRules: Record<string, (props: StyledButtonProps) => string> = {
  padding: function getPadding({ $size, $fluid }) {
    const map = {
      XS: '0 0.75rem',
      S: '0 0.75rem',
      M: '0 1rem',
      L: '0 1.25rem',
      XL: '0 1.25rem',
      XXL: '0 1.25rem',
    };
    if ($fluid) {
      return '0';
    }
    return map[$size];
  },
  minHeight: function getMinHeight({ $size }) {
    const map = {
      XS: '1.5rem',
      S: '1.75rem',
      M: '2rem',
      L: '2rem',
      XL: '2.5rem',
      XXL: '3rem',
    };
    return map[$size];
  },
  borderRadius: function getBorderRadius({ $size }) {
    const map = {
      XS: tokens.borderRadius.M,
      S: tokens.borderRadius.M,
      M: tokens.borderRadius.M,
      L: tokens.borderRadius.M,
      XL: tokens.borderRadius.L,
      XXL: tokens.borderRadius.L,
    };
    return map[$size];
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

const buttonHoverStyleRules: Record<
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

const buttonFocusStyleRules: Record<
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

const buttonActiveStyleRules: Record<
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

const buttonDisabledStyleRules: Record<
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
  border-radius: ${buttonStyleRules.borderRadius};
  padding: ${buttonStyleRules.padding};
  min-height: ${buttonStyleRules.minHeight};
  box-shadow: ${buttonStyleRules.boxShadow};
  min-width: ${buttonStyleRules.minWidth};
  color: ${buttonStyleRules.color};
  background-color: ${buttonStyleRules.backgroundColor};
  background-image: ${buttonStyleRules.backgroundImage};

  & svg path,
  & svg circle {
    fill: ${buttonStyleRules.fill};
  }

  &:hover {
    color: ${buttonHoverStyleRules.color};
    background-color: ${buttonHoverStyleRules.backgroundColor};
    background-image: ${buttonHoverStyleRules.backgroundImage};
  }

  &:focus {
    color: ${buttonFocusStyleRules.color};
    background-color: ${buttonFocusStyleRules.backgroundColor};
    background-image: ${buttonFocusStyleRules.backgroundImage};
  }

  &:active {
    color: ${buttonActiveStyleRules.color};
    background-color: ${buttonActiveStyleRules.backgroundColor};
    background-image: ${buttonActiveStyleRules.backgroundImage};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${buttonDisabledStyleRules.color};
    background-color: ${buttonDisabledStyleRules.backgroundColor};
    background-image: ${buttonDisabledStyleRules.backgroundImage};
  }
`;

interface StyledTextContentProps {
  $size: ButtonSize;
}

const textContentStyleRules: Record<
  string,
  (props: StyledTextContentProps) => string
> = {
  fontSize: function getFontSize({ $size }) {
    const map = {
      XS: '0.75rem',
      S: '0.75rem',
      M: '0.8rem',
      L: '0.9rem',
      XL: '1rem',
      XXL: '1.3rem',
    };
    return map[$size];
  },
  lineHeight: function getLineHeight({ $size }) {
    const map = {
      XS: '1.5rem',
      S: '1.75rem',
      M: '2rem',
      L: '2rem',
      XL: '2.5rem',
      XXL: '3rem',
    };
    return map[$size];
  },
  fontWeight: function getFontWeight({ $size }) {
    const map = {
      XS: '500',
      S: '600',
      M: '600',
      L: '600',
      XL: '600',
      XXL: '600',
    };
    return map[$size];
  },
};

export const TextContent = styled.div<StyledTextContentProps>`
  font-size: ${textContentStyleRules.fontSize};
  line-height: ${textContentStyleRules.lineHeight};
  font-weight: ${textContentStyleRules.fontWeight};
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
