import type { StorybookConfig } from '@storybook/react-vite';
import { createCssRootWrapper } from '../lib/theme/create-css-root-wrapper';
import { prepareCssVariables } from '../lib/theme/prepare-css-variables';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../lib/**/*.mdx',
    '../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      tsconfigPath: path.join(__dirname, '..', 'tsconfig.json'),
    },
  },
  docs: {
    autodocs: true,
  },
  previewHead: (head) => {
    createCssRootWrapper;
    const cssVariables = prepareCssVariables({});
    const variables = createCssRootWrapper(cssVariables);

    return `
  ${head}
    <style data-theme>
      ${variables}
    </style>
  `;
  },
};
export default config;
