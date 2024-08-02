export const typographyToCssVariables = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typography: Record<string, any>,
  parentKey = ''
): string => {
  const toKebabCase = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  return Object.entries(typography)
    .map(([key, value]) => {
      const variableName = parentKey
        ? `${parentKey}-${toKebabCase(key)}`
        : toKebabCase(key);
      if (typeof value === 'object' && value !== null) {
        const bundledValue = Object.entries(value)
          .map(
            ([propKey, propValue]) =>
              `--${variableName}-${toKebabCase(propKey)}: ${propValue}`
          )
          .join('; ');

        const fontPropertyOrder = [
          'font-weight',
          'font-size',
          'line-height',
          'font-family',
        ];

        const variableUsage = fontPropertyOrder
          .map((propKey) => {
            let compiledVar = `var(--${variableName}-${toKebabCase(propKey)})`;
            if (propKey === 'font-size') compiledVar += ' /';
            return compiledVar;
          })
          .filter((varStr) => varStr.includes('var(--'))
          .join(' ');

        return `${bundledValue}; --${variableName}: ${variableUsage};`;
      } else {
        return `--${variableName}: ${value};`;
      }
    })
    .join(' ');
};
