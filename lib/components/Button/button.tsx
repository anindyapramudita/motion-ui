import {
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react';
import styles from './button.module.css';
import { LoadingIcon } from '../LoadingIcon';
import clsx from 'clsx';
import { Slot, Slottable } from '@radix-ui/react-slot';

export type ButtonProps = {
  variant?: 'ghost' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  append?: ReactNode;
  appendPosition?: 'start' | 'end';
  appendWrapper?: ElementType;
  isLoading?: boolean;
  asChild?: boolean;
} & ComponentPropsWithRef<'button'>;

const AppendWrapper = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'contained',
      color = 'primary',
      children,
      append,
      appendPosition = 'start',
      appendWrapper: AppendWrapperComponent = AppendWrapper,
      isLoading,
      asChild = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const buttonClassName = clsx(
      styles.button,
      styles[variant],
      styles[color],
      {
        [styles.isLoading]: isLoading,
        [styles.withAppend]: append,
      },
      className
    );

    const Component = asChild ? Slot : 'button';

    return (
      <Component
        className={buttonClassName}
        ref={ref}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading && appendPosition === 'start' ? (
          <LoadingIcon />
        ) : append && appendPosition === 'start' ? (
          <AppendWrapperComponent>{append}</AppendWrapperComponent>
        ) : null}
        <Slottable>{children}</Slottable>
        {isLoading && appendPosition === 'end' ? (
          <LoadingIcon />
        ) : append && appendPosition === 'end' ? (
          <AppendWrapperComponent>{append}</AppendWrapperComponent>
        ) : null}
      </Component>
    );
  }
);
