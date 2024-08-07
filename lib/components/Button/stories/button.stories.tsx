import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '..';
import type { ButtonProps } from '../types';
import { SendIcon } from './send-icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['ghost', 'contained', 'outlined'],
      table: {
        type: {
          summary: 'ghost | contained | outlined',
        },
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        type: {
          summary: 'small | medium | large',
        },
      },
    },
    color: {
      control: 'radio',
      options: ['primary', 'secondary'],
      table: {
        type: {
          summary: 'primary | secondary',
        },
      },
    },
    append: {
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    appendPosition: {
      control: 'radio',
      options: ['start', 'end'],
      table: {
        type: {
          summary: 'start | end',
        },
      },
    },
    isLoading: {
      control: 'boolean',
      table: {
        category: 'Loading State',
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: 'boolean',
      table: {
        category: 'Button inherit props',
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      control: 'text',
      table: {
        category: 'Button inherit props',
        type: {
          summary: 'string',
        },
      },
    },
    onClick: {
      control: fn(),
      table: {
        category: 'Button inherit props',
        type: {
          summary: 'func',
        },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const ContainedButton: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
};

export const OutlinedButton: Story = {
  args: {
    children: 'Outlined',
    color: 'secondary',
    variant: 'outlined',
  },
};

export const ButtonWithIcon: Story = {
  args: {
    children: 'End Icon',
    color: 'primary',
    variant: 'contained',
    append: <SendIcon />,
    appendPosition: 'start',
  },
};

export const ButtonWithAsChild: Story = {
  args: {
    asChild: true,
    children: <a>This is actually a link</a>,
    color: 'primary',
    variant: 'contained',
  },
};
