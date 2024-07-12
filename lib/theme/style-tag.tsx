import { defaultTheme } from './default-theme';

const convertJsonToCssVariables = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  json: Record<string, any>,
  parentKey = ''
): string => {
  return Object.entries(json)
    .map(([key, value]) => {
      const variableName = parentKey ? `${parentKey}-${key}` : key;
      if (typeof value === 'object' && value !== null) {
        return convertJsonToCssVariables(value, variableName);
      } else {
        return `--${variableName}: ${value};`;
      }
    })
    .join(' ');
};

type Variables = Record<string, string>;

interface StyleTagProps {
  variables?: Variables;
}

export const StyleTag: React.FC<StyleTagProps> = ({
  variables = defaultTheme,
}) => {
  const cssVariables = convertJsonToCssVariables(variables);

  return <style>{`:root { ${cssVariables} }`}</style>;
};
