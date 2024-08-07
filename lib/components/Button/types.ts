import { ComponentPropsWithRef, ElementType, ReactNode } from 'react';

export type ButtonProps = {
  /**
   * The variant of the button component, which can be one of:
   */
  variant?: 'ghost' | 'contained' | 'outlined';
  /**
   * The size of the button component, which can be one of:
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The color theme of the button component, which can be one of:
   */
  color?: 'primary' | 'secondary';
  /**
   * An element (ReactNode) to be appended to the button. This could be an icon, text, or any other element.
   */
  append?: ReactNode;
  /**
   * The position of the appended element, which can be one of:
   */
  appendPosition?: 'start' | 'end';
  /**
   * The wrapper component for the appended element. This can be any valid React element type.
   */
  appendWrapper?: ElementType;
  /**
   * A boolean indicating whether the button is in a loading state. When true, the button might show a loading indicator.
   */
  isLoading?: boolean;
  /**
   * The component used as a loading icon. This can be any valid React element type.
   */
  loadingIcon?: ElementType;
  /**
   * A boolean indicating whether the button should behave as a child component.
   */
  asChild?: boolean;
} & ComponentPropsWithRef<'button'>;
