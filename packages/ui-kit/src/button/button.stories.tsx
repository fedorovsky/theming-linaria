import { Button } from './index';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      defaultValue: 'L',
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'system_regular', 'system_light'],
      defaultValue: 'system_regular',
    },
    children: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    shadow: {
      control: 'boolean',
      defaultValue: false,
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    size: 'L',
    color: 'system_regular',
    children: 'Button',
    shadow: false,
    disabled: false,
    fluid: false,
  },
};

export const Primary = {
  args: {},
};
