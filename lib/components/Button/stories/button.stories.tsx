import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '..';
import { SendIcon } from './send-icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Variant of the button',
      control: 'radio',
      options: ['ghost', 'contained', 'outlined'],
      table: {
        type: {
          summary: 'ghost | contained | outlined',
        },
      },
    },
    size: {
      description: 'Size of the button',
      control: 'radio',
      options: ['small', 'medium', 'large'],
      table: {
        type: {
          summary: 'small | medium | large',
        },
      },
    },
    color: {
      description: 'Color of the button',
      control: 'radio',
      options: ['primary', 'secondary'],
      table: {
        type: {
          summary: 'primary | secondary',
        },
      },
    },
    append: {
      description:
        'Icon that will be rendered before the text rendered in the button',
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    appendPosition: {
      description: 'Position of the icon in the button',
      control: 'radio',
      options: ['start', 'end'],
      table: {
        type: {
          summary: 'start | end',
        },
      },
    },
    isLoading: {
      description: 'Is the button in loading state',
      control: 'boolean',
      table: {
        category: 'Loading State',
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      description: 'Is the button in being disabled',
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
      description: 'What is going to be rendered in the button',
      control: 'text',
      table: {
        category: 'Button inherit props',
        type: {
          summary: 'string',
        },
      },
    },
    onClick: {
      description: 'What is going to be triggered when you click the button',
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
type Story = StoryObj<typeof meta>;

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
