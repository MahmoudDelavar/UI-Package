import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  args: {
    asChild: false,
    children: 'Button',
    disabled: false,
    intent: 'primary',
    size: 'md',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    intent: {
      control: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'neutral', 'warning', 'danger', 'outline', 'subtle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Inspect: Story = {};
