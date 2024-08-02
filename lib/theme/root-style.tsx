import { FC } from 'react';
import { createCssRootWrapper } from './create-css-root-wrapper';
import { prepareCssVariables } from './prepare-css-variables';
import { Variables } from './types';

type RootStyleProps = {
  variables?: Variables;
  defaults?: {
    fontFamily: string;
  };
};

export const RootStyle: FC<RootStyleProps> = ({ variables, defaults }) => {
  const cssVariables = prepareCssVariables({ defaults, variables });

  return <style data-theme>{createCssRootWrapper(`${cssVariables}`)}</style>;
};
