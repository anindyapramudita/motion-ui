import type { Preview } from '@storybook/react';
import React from 'react';
import { StyleTag } from '../lib';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div>
        <StyleTag />
        <Story />
      </div>
    ),
  ],
};

export default preview;
