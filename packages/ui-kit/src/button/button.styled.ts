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
    };
    hover: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
    };
    focus: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
    };
    active: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
    };
    disabled: {
      color: string;
      backgroundColor: string;
      backgroundImage: string;
    };
  }
> = {
  primary: {
    normal: {
      color: tokens.components.buttons.primary.normal.text,
      backgroundColor: tokens.components.buttons.primary.normal.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.normal.backgroundImage,
    },
    hover: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
    },
    focus: {
      color: tokens.components.buttons.primary.hover.text,
      backgroundColor: tokens.components.buttons.primary.hover.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.hover.backgroundImage,
    },
    active: {
      color: tokens.components.buttons.primary.active.text,
      backgroundColor: tokens.components.buttons.primary.active.backgroundColor,
      backgroundImage: tokens.components.buttons.primary.active.backgroundImage,
    },
    disabled: {
      color: tokens.components.buttons.primary.disabled.text,
      backgroundColor:
        tokens.components.buttons.primary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.primary.disabled.backgroundImage,
    },
  },
  secondary: {
    normal: {
      color: tokens.components.buttons.secondary.normal.text,
      backgroundColor:
        tokens.components.buttons.secondary.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.normal.backgroundImage,
    },
    hover: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
    },
    focus: {
      color: tokens.components.buttons.secondary.hover.text,
      backgroundColor:
        tokens.components.buttons.secondary.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.hover.backgroundImage,
    },
    active: {
      color: tokens.components.buttons.secondary.active.text,
      backgroundColor:
        tokens.components.buttons.secondary.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.active.backgroundImage,
    },
    disabled: {
      color: tokens.components.buttons.secondary.disabled.text,
      backgroundColor:
        tokens.components.buttons.secondary.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.secondary.disabled.backgroundImage,
    },
  },
  system_regular: {
    normal: {
      color: tokens.components.buttons.system_regular.normal.text,
      backgroundColor:
        tokens.components.buttons.system_regular.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.normal.backgroundImage,
    },
    hover: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
    },
    focus: {
      color: tokens.components.buttons.system_regular.hover.text,
      backgroundColor:
        tokens.components.buttons.system_regular.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.hover.backgroundImage,
    },
    active: {
      color: tokens.components.buttons.system_regular.active.text,
      backgroundColor:
        tokens.components.buttons.system_regular.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.active.backgroundImage,
    },
    disabled: {
      color: tokens.components.buttons.system_regular.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_regular.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_regular.disabled.backgroundImage,
    },
  },
  system_light: {
    normal: {
      color: tokens.components.buttons.system_light.normal.text,
      backgroundColor:
        tokens.components.buttons.system_light.normal.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.normal.backgroundImage,
    },
    hover: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
    },
    focus: {
      color: tokens.components.buttons.system_light.hover.text,
      backgroundColor:
        tokens.components.buttons.system_light.hover.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.hover.backgroundImage,
    },
    active: {
      color: tokens.components.buttons.system_light.active.text,
      backgroundColor:
        tokens.components.buttons.system_light.active.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.active.backgroundImage,
    },
    disabled: {
      color: tokens.components.buttons.system_light.disabled.text,
      backgroundColor:
        tokens.components.buttons.system_light.disabled.backgroundColor,
      backgroundImage:
        tokens.components.buttons.system_light.disabled.backgroundImage,
    },
  },
};

const getPadding = ($size: ButtonSize, $fluid?: boolean) => {
  if ($fluid) {
    return '0';
  }
  return variantSize[$size].padding;
};

export const Button = styled.button<{
  $size: ButtonSize;
  $color: ButtonColor;
  $shadow?: boolean;
  $fluid?: boolean;
  disabled?: boolean;
}>`
  border: none;
  cursor: pointer;
  position: relative;
  outline: none;

  border-radius: ${({ $size }) => variantSize[$size].borderRadius};
  padding: ${({ $size, $fluid }) => getPadding($size, $fluid)};
  min-height: ${({ $size }) => variantSize[$size].minHeight};

  box-shadow: ${({ $shadow }) =>
    $shadow ? '0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.3)' : 'none'};

  width: ${({ $fluid }) => ($fluid ? '100%' : 'auto')};

  color: ${({ $color }) => variantColor[$color].normal.color};

  background-color: ${({ $color }) =>
    variantColor[$color].normal.backgroundColor};

  background-image: ${({ $color }) =>
    variantColor[$color].normal.backgroundImage};

  &:hover {
    color: ${({ $color }) => variantColor[$color].hover.color};
    background-color: ${({ $color }) =>
      variantColor[$color].hover.backgroundColor};
    background-image: ${({ $color }) =>
      variantColor[$color].hover.backgroundImage};
  }

  &:focus {
    color: ${({ $color }) => variantColor[$color].focus.color};
    background-color: ${({ $color }) =>
      variantColor[$color].focus.backgroundColor};
    background-image: ${({ $color }) =>
      variantColor[$color].focus.backgroundImage};
  }

  &:active {
    color: ${({ $color }) => variantColor[$color].active.color};
    background-color: ${({ $color }) =>
      variantColor[$color].active.backgroundColor};
    background-image: ${({ $color }) =>
      variantColor[$color].active.backgroundImage};
  }

  &:disabled {
    cursor: not-allowed;
    box-shadow: none;
    color: ${({ $color }) => variantColor[$color].disabled.color};
    background-color: ${({ $color }) =>
      variantColor[$color].disabled.backgroundColor};
    background-image: ${({ $color }) =>
      variantColor[$color].disabled.backgroundImage};
  }
`;

export const TextContent = styled.div<{
  $size: ButtonSize;
}>`
  font-size: ${({ $size }) => variantSize[$size].fontSize};
  line-height: ${({ $size }) => variantSize[$size].lineHeight};
  font-weight: ${({ $size }) => variantSize[$size].fontWeight};
`;
