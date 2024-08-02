import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Text, TextVariantOptions } from '..';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Variant of the text',
      control: 'select',
      options: TextVariantOptions,
      table: {
        type: {
          summary: 'textVariantType',
        },
      },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    children: 'The quick fox jumps over the lazy dog',
    variant: 'caption-small-regular',
  },
};
