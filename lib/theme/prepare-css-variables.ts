import { removeKeyFromObject } from '../utils/remove-key-from-object';
import { defaultTheme } from './default-theme';
import { jsonToCssVariables } from './json-to-css-variables';
import { Variables } from './types';
import { typographyToCssVariables } from './typography-to-css-variables';

export const prepareCssVariables = ({
  defaults,
  variables,
}: {
  variables?: Variables;
  defaults?: {
    fontFamily: string;
  };
}) => {
  const definedVariablesFromPreset = variables
    ? { ...defaultTheme(defaults), ...variables }
    : { ...defaultTheme(defaults) };

  const cssVariables = jsonToCssVariables(
    removeKeyFromObject(definedVariablesFromPreset, 'typography')
  );
  const typographyCssVariables = typographyToCssVariables(
    definedVariablesFromPreset.typography
  );

  return cssVariables + typographyCssVariables;
};
