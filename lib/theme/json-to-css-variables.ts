export const jsonToCssVariables = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: Record<string, any>,
  parentKey = ''
): string => {
  const toKebabCase = (str: string) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  };

  return Object.entries(json)
    .map(([key, value]) => {
      const variableName = parentKey
        ? `${parentKey}-${toKebabCase(key)}`
        : toKebabCase(key);
      if (typeof value === 'object' && value !== null) {
        return jsonToCssVariables(value, variableName);
      } else {
        return `--${variableName}: ${value};`;
      }
    })
    .join(' ');
};
