import { FirstComponent } from './first-component';

export default {
  title: 'FirstComponent',
  component: FirstComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    color: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary'],
      defaultValue: 'primary',
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    size: 'medium',
    color: 'primary',
    fluid: false,
  },
};

export const Primary = {
  args: {},
};
