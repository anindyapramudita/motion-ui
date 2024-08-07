export type BreakpointsSchema = Record<
  'xs' | 'sm' | 'md' | 'lg' | 'xl',
  number
>;

export type PaletteColorSchema = {
  main: string;
  light: string;
  dark: string;
  contrastText: string;
  lighter?: string;
  lightest?: string;
};

export type GreyscaleSchema = Record<number, string>;

export type Palette = {
  achromatic: Record<'black' | 'white', string>;
  primary: PaletteColorSchema;
  secondary: PaletteColorSchema;
  success: PaletteColorSchema;
  error: PaletteColorSchema;
  warning: PaletteColorSchema;
  info: PaletteColorSchema;
  greyscale: GreyscaleSchema;
} & { [key: string | number]: unknown };

export type Spacing = Record<number, string>;

export type TypographyStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
};

export type Typography = Record<string, TypographyStyle>;

export type Shadow = Record<number, string>;

export type Theme = {
  breakpoints: BreakpointsSchema;
  palette: Palette;
  spacing: Spacing;
  typography: Typography;
  shadow: Shadow;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Variables = Record<string, any>;
