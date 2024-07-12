import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '..';
import { SendIcon } from './send-icon';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Variant of the button',
      control: 'radio',
      options: ['text', 'contained', 'outlined'],
      table: {
        type: {
          summary: 'text | contained | outlined',
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
    startIcon: {
      description:
        'Icon that will be rendered before the text rendered in the button',
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    endIcon: {
      description:
        'Icon that will be rendered after the text rendered in the button',
      control: 'object',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    loadingPosition: {
      description: 'Position of the loading icon in the button',
      control: 'radio',
      options: ['start', 'center', 'end'],
      table: {
        category: 'Loading State',
        type: {
          summary: 'start | center | end',
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
    endIcon: <SendIcon />,
  },
};

export const LoadingButtonWithIcon: Story = {
  args: {
    children: 'End Loading',
    color: 'secondary',
    variant: 'outlined',
    endIcon: <SendIcon color="#F082AC" />,
    isLoading: true,
    loadingPosition: 'end',
  },
};

export const CenterLoadingButton: Story = {
  args: {
    children: 'Center Loading',
    color: 'secondary',
    variant: 'outlined',
    isLoading: true,
    loadingPosition: 'center',
  },
};
